import axios from "axios"
import { useState } from "react"
import Link from "next/link"

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
  const [spots, setSpots] = useState(initialspots)

  return (
    <>
      <h1>Tous les spots publiés</h1>
      {spots.map((spot) => {
        const nombreJours = calculerNombreJours(spot.dateajout)

        return (
          <div key={spot._id} id="bg-blue" className="mx-5 my-2 p-3 rounded-lg">
            <h3>{spot.name}</h3>
            <p>Type : xxx</p>
            <p className="italic"> Publié il y a {nombreJours} jours</p>
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

export default PageListe
