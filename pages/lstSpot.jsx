import axios from "axios"
import { CardSpot } from "@/components/cardSpot"

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
  const spots = initialspots

  return (
    <div id="bgpink" className="px-12 pb-16 rounded-b-2xl">
      <h1
        style={{ fontFamily: "Sakalangkong" }}
        className="text-4xl pt-14 mb-7"
      >
        Tous les spots publies
      </h1>
      <div className="grid grid-cols-3 gap-5">
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
