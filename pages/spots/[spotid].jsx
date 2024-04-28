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
const SpotPage = ({ spot }) => (
  <div className="flex justify-center m-32 flex-col">
    {console.log("-> ", spot)}
    <h1 className="text-2xl font-semibold my-2">{spot.name}</h1>
    {spot.type && <p>Catégorie du spot : {spot.type}</p>}
    {spot.dateajout && <p>Date de l'ajout : {spot.dateajout}</p>}
    <h2 className="text-xl my-2">Adresse du spot</h2>
    <p>
      {spot.adresse.numero} {spot.adresse.rue}
    </p>
    <p>
      {spot.adresse.codepostal} {spot.adresse.ville}
    </p>
    <p>{spot.adresse.pays}</p>
    <h2 className="text-xl my-2">Informations sur le spot</h2>
    {spot.typelieu && <p>Type : {spot.typelieu}</p>}
    {spot.note && <p>Note : {spot.note}</p>}
    {spot.rapportQP && <p>Rapport qualité prix : {spot.rapportQP}</p>}
    {spot.courantArt && <p>Courant artistique : {spot.courantArt}</p>}
    {spot.gratuitPayant && <p>Accessibilité : {spot.gratuitPayant}</p>}
    {spot.gratuitPayant === "payant" && <p>Niveau du prix : {spot.nivPrix}</p>}
    {spot.etat && <p>Etat : {spot.etat}</p>}
    <Link
      href={`/spots/${spot._id}/edit`}
      id="button-red"
      className="rounded-lg p-2"
    >
      MODIFIER LE POST
    </Link>
  </div>
)

export default SpotPage
