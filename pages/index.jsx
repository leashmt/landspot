import { Inter } from "next/font/google"
import axios from "axios"
import { useState } from "react"
import Link from "next/link"
import { Formik, Form, Field } from "formik"
import { FilterRestaurant } from "@/components/filter/filterRestaurant"
import { FilterBar } from "@/components/filter/filterBar"
import { FilterParc } from "@/components/filter/filterParc"
import { FilterMusee } from "@/components/filter/filterMusee"

const inter = Inter({ subsets: ["latin"] })
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
  const handleSubmitFilter = ({ typelieu, note, rapport, prix, GP }) => {
    setSpots(initialspots)
    const typeSpot = initialspots.filter((spot) => spot.type === typeofform)
    setSpots(typeSpot)

    console.log(typeofform)
    console.log(spots)
    console.log(spots)

    if (typelieu) {
      const newSpot = initialspots.filter((spot) => spot.typelieu === typelieu)
      setSpots(newSpot)
    }

    if (note) {
      const newSpot = initialspots.filter((spot) => spot.note === note)
      setSpots(newSpot)
    }

    if (rapport) {
      const newSpot = initialspots.filter((spot) => spot.rapportQP === rapport)
      setSpots(newSpot)
    }

    if (prix) {
      const newSpot = initialspots.filter((spot) => spot.nivPrix === prix)
      setSpots(newSpot)
    }

    if (GP) {
      const newSpot = initialspots.filter((spot) => spot.gratuitPayant === GP)
      setSpots(newSpot)
    }
  }

  return (
    <>
      <h1>LANDSPOT</h1>
      <h2>Liste des derniers spot publiés</h2>
      <h4>Filtrer la recherche</h4>
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

      {spot10.map((spot) => {
        const nombreJours = calculerNombreJours(spot.dateajout)

        return (
          <div key={spot._id} id="bg-blue" className="mx-5 my-2 p-3 rounded-lg">
            <h3 className="text-lg mb-1">{spot.name}</h3>
            <p>
              Type : <span className="font-bold">{spot.type}</span>
            </p>
            <p className="italic">
              {nombreJours > 0
                ? `Publié il y a ${nombreJours} jours`
                : "Publié aujourd'hui"}
            </p>
            <p>
              {spot.adresse.numero} {spot.adresse.rue} {spot.adresse.ville} -{" "}
              {spot.adresse.pays}
            </p>
            <div className="flex justify-end mt-2">
              <Link
                href={`/spots/${spot._id}`}
                id="button-red"
                className="rounded-lg p-2"
              >
                Voir les détails du spot
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Home
