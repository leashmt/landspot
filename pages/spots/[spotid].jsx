/* eslint-disable max-lines-per-function */
import axios from "axios"
import Link from "next/link"

export const getServerSideProps = async ({ params: { spotid } }) => {
  const { data: spot } = await axios(
    `http://localhost:3000/api/landspot/${spotid}`,
  )

  return {
    props: { spot },
  }
}
const SpotPage = ({ spot }) => {
  const formattedDate = new Date(spot.dateajout).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex justify-center py-32 px-64 flex-col" id="bgpink">
      <div className="">
        <h1 className="text-6xl my-2" style={{ fontFamily: "Sakalangkong" }}>
          {spot.name}
        </h1>
        {spot.type && (
          <p>
            Catégorie du spot :{" "}
            <span id="color-blue" className="font-semibold">
              {spot.type}
            </span>
          </p>
        )}
        {spot.dateajout && (
          <p>
            Date de l'ajout :{" "}
            <span className="font-semibold">{formattedDate}</span>
          </p>
        )}
        <h2 className="text-2xl my-2" style={{ fontFamily: "Sakalangkong" }}>
          Adresse du spot
        </h2>
        <p className="font-semibold">
          {spot.adresse.numero} {spot.adresse.rue}
        </p>
        <p className="font-semibold">
          {spot.adresse.codepostal} {spot.adresse.ville}
        </p>
        <p className="font-semibold">{spot.adresse.pays}</p>
        <h2 className="text-2xl my-2" style={{ fontFamily: "Sakalangkong" }}>
          Informations sur le spot
        </h2>
        {spot.typelieu && (
          <p>
            Type : <span className="font-semibold">{spot.typelieu}</span>
          </p>
        )}
        {spot.note && (
          <p>
            Note : <span className="font-semibold">{spot.note}</span>
          </p>
        )}
        {spot.rapportQP && (
          <p>
            Rapport qualité prix :{" "}
            <span className="font-semibold">{spot.rapportQP}</span>
          </p>
        )}
        {spot.courantArt && (
          <p>
            Courant artistique :{" "}
            <span className="font-semibold">{spot.courantArt}</span>
          </p>
        )}
        {spot.gratuitPayant && (
          <p>
            Accessibilité :{" "}
            <span className="font-semibold">{spot.gratuitPayant}</span>
          </p>
        )}
        {spot.gratuitPayant === "payant" && (
          <p>
            Niveau du prix :{" "}
            <span className="font-semibold">{spot.nivPrix}</span>
          </p>
        )}
        {spot.etat && (
          <p>
            Etat : <span className="font-semibold">{spot.etat}</span>
          </p>
        )}
        <div className="mt-5">
          <Link
            href={`/spots/${spot._id}/edit`}
            id="button-red"
            className="rounded-lg p-2"
          >
            MODIFIER LE POST
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SpotPage
