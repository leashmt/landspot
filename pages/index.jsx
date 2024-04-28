import axios from "axios"
import { useState } from "react"
import { Formik, Form, Field } from "formik"
import { FilterRestaurant } from "@/components/filter/filterRestaurant"
import { FilterBar } from "@/components/filter/filterBar"
import { FilterParc } from "@/components/filter/filterParc"
import { FilterMusee } from "@/components/filter/filterMusee"
import { HeroHeader } from "@/components/heroheader"
import { CardSpot } from "@/components/cardSpot"

const typeofspot = ["Aucun filtre", "Restaurant", "Musee", "Bar", "Parc"]

function calculerNombreJours(dateAjout) {
  const dateAjoutObj = new Date(dateAjout)
  const dateActuelle = new Date()
  const differenceMs = dateActuelle - dateAjoutObj
  const differenceJours = Math.floor(differenceMs / (1000 * 60 * 60 * 24))

  return differenceJours
}
export const getServerSideProps = async () => {
  const { data: spots } = await axios("http://localhost:3000/api/landspot")

  return {
    props: {
      spots,
    },
  }
}
// eslint-disable-next-line max-lines-per-function
const Home = (props) => {
  const { spots: initialspots } = props
  const [spots, setSpots] = useState(initialspots)
  const spot10 = spots.length > 10 ? spots.slice(spots.length - 10) : spots
  const [typeofform, settypeofform] = useState("Choisir un type de spot")
  const handleSubmitType = () => {}
  const initialValuesType = {
    type: typeofform,
  }
  const handleSubmitFilter = ({
    typelieu,
    note,
    rapport,
    prix,
    GP,
    courant,
  }) => {
    setSpots(initialspots)
    const typeSpot = initialspots.filter((spot) => spot.type === typeofform)
    setSpots(typeSpot)

    if (typelieu) {
      const newSpot = initialspots.filter(
        (spot) => spot.typelieu === typelieu && spot.type === typeofform,
      )
      setSpots(newSpot)
    }

    if (note) {
      const newSpot = initialspots.filter(
        (spot) => spot.note === note && spot.type === typeofform,
      )
      setSpots(newSpot)
    }

    if (rapport) {
      const newSpot = initialspots.filter(
        (spot) => spot.rapportQP === rapport && spot.type === typeofform,
      )
      setSpots(newSpot)
    }

    if (prix) {
      const newSpot = initialspots.filter(
        (spot) => spot.nivPrix === prix && spot.type === typeofform,
      )
      setSpots(newSpot)
    }

    if (GP) {
      const newSpot = initialspots.filter(
        (spot) => spot.gratuitPayant === GP && spot.type === typeofform,
      )
      setSpots(newSpot)
    }

    if (courant) {
      const newSpot = initialspots.filter(
        (spot) => spot.courantArt === courant && spot.type === typeofform,
      )
      setSpots(newSpot)
    }
  }

  return (
    <div id="red">
      <HeroHeader />
      <div className="pt-12 pb-20 px-12 rounded-b-2xl" id="bgpink">
        <h2 style={{ fontFamily: "Sakalangkong" }} className="text-4xl mt-14">
          Liste des {spot10.length} derniers spots publies
        </h2>
        <p className="italic mt-2">Filtrer la recherche</p>
        <Formik initialValues={initialValuesType} onSubmit={handleSubmitFilter}>
          <Form>
            <Field
              name="type"
              as="select"
              className="text-xl w-1/2"
              onChange={(event) => {
                settypeofform(event.target.value)

                if (event.target.value === "Aucun filtre") {
                  setSpots(initialspots)
                } else {
                  const spotsUPD = initialspots.filter(
                    (spot) => spot.type === event.target.value,
                  )
                  setSpots(spotsUPD)
                }
              }}
              value={typeofform}
            >
              {typeofspot.map((typeText, index) => (
                <option key={index + 1} value={typeText}>
                  {typeText}
                </option>
              ))}
            </Field>
            {typeofform === "Restaurant" && <FilterRestaurant />}
            {typeofform === "Bar" && <FilterBar />}
            {typeofform === "Parc" && <FilterParc />}
            {typeofform === "Musee" && <FilterMusee />}
          </Form>
        </Formik>

        <div className="grid gap-3 grid-cols-5 grid-rows-2 mt-5">
          {spot10.reverse().map((spot) => {
            const nombreJours = calculerNombreJours(spot.dateajout)

            return (
              <CardSpot key={spot._id} spot={spot} nombreJours={nombreJours} />
            )
          })}
        </div>
        {spot10.length === 0 && (
          <p className="italic text-red-600">
            Aucun résultat pour cette recherche
          </p>
        )}
      </div>
    </div>
  )
}

export default Home
