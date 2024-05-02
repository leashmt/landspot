/* eslint-disable max-lines-per-function */
import axios from "axios"
import { CardSpot } from "@/components/cardSpot"
import { useState } from "react"
import { Formik, Form, Field } from "formik"
import { FilterRestaurant } from "@/components/filter/filterRestaurant"
import { FilterBar } from "@/components/filter/filterBar"
import { FilterParc } from "@/components/filter/filterParc"
import { FilterMusee } from "@/components/filter/filterMusee"

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
const PageListe = (props) => {
  const { spots: initialspots } = props
  const typeofspot = ["Aucun filtre", "Restaurant", "Musee", "Bar", "Parc"]
  const [spots, setSpots] = useState(initialspots)
  const [typeofform, settypeofform] = useState("Choisir un type de spot")
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
    <div id="bgpink" className="px-12 pb-16 rounded-b-2xl min-h-screen">
      <h1
        style={{ fontFamily: "Sakalangkong" }}
        className="text-4xl pt-14 mb-7"
      >
        Tous les spots publies
      </h1>
      <p className="italic mt-2">Filtrer les spots</p>
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
      <div className="grid grid-cols-3 gap-5 mt-10">
        {spots.map((spot) => {
          const nombreJours = calculerNombreJours(spot.dateajout)

          return (
            <CardSpot key={spot._id} spot={spot} nombreJours={nombreJours} />
          )
        })}
      </div>
    </div>
  )
}

export default PageListe
