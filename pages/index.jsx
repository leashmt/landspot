import { Inter } from "next/font/google"
import axios from "axios"
import { useState } from "react"
import Link from "next/link"
import { Formik, Form, Field } from "formik"

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

  return (
    <>
      <h1>LANDSPOT</h1>
      <h2>Liste des derniers spot publiés</h2>
      <h4>Filtrer la recherche</h4>
      {/* <div className="flex gap-3">
        <button
          className="rounded-full py-1 px-4 button"
          onClick={() => {
            const spotsMusee = initialspots.filter(
              (spot) => spot.type === "musee",
            )
            setSpots(spotsMusee)
          }}
        >
          Musée
        </button>
        <button
          className="rounded-full py-1 px-4 button"
          onClick={() => {
            const spotsParc = initialspots.filter(
              (spot) => spot.type === "parc",
            )
            setSpots(spotsParc)
          }}
        >
          Parc
        </button>
        <button
          className="rounded-full py-1 px-4 button"
          onClick={() => {
            const spotsRestaurants = initialspots.filter(
              (spot) => spot.type === "restaurant",
            )
            setSpots(spotsRestaurants)
          }}
        >
          Restaurant
        </button>
        <button
          className="rounded-full py-1 px-4 button"
          onClick={() => {
            const spotsBars = initialspots.filter((spot) => spot.type === "bar")
            setSpots(spotsBars)
          }}
        >
          Bar
        </button>
        <button
          className="rounded-full py-1 px-4 button"
          onClick={() => {
            setSpots(initialspots)
          }}
        >
          Réinitialisation
        </button>
      </div> */}
      <Formik initialValues={initialValuesType} onSubmit={handleSubmitType}>
        <Form>
          <Field
            name="type"
            as="select"
            className="text-xl w-1/2"
            onChange={(event) => {
              console.log("akhjqzegsfr")
              console.log(event.target.value)
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
