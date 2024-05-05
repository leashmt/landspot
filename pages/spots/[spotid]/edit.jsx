import { UpdBar } from "@/components/update/updBar"
import { UpdMusee } from "@/components/update/updMusee"
import { UpdParc } from "@/components/update/updParc"
import { UpdRestaurant } from "@/components/update/updRestaurant"
import axios from "axios"
import { useRouter } from "next/router"

export const getServerSideProps = async ({ params: { spotid } }) => {
  const { data: spot } = await axios(
    `http://localhost:3000/api/landspot/${spotid}`,
  )

  return {
    props: { spot },
  }
}
const SpotEditPage = ({ spot }) => {
  const router = useRouter()
  const initialValues = spot
  const typeofform = spot.type
  const handleDelete = async (id) => {
    // eslint-disable-next-line no-alert
    const isConfirmed = window.confirm(
      "Êtes-vous sûr de vouloir supprimer ce spot ?",
    )

    if (isConfirmed) {
      await axios.delete(`/api/landspot/${id}`)
      router.push(`/lstSpot`)
    }
  }

  initialValues.numero = initialValues.adresse.numero
  initialValues.rue = initialValues.adresse.rue
  initialValues.ville = initialValues.adresse.ville
  initialValues.codepostal = initialValues.adresse.codepostal
  initialValues.pays = initialValues.adresse.pays
  initialValues.courant = initialValues.courantArt
  initialValues.typeart = initialValues.typelieu
  initialValues.prix = initialValues.gratuitPayant

  return (
    <div className="flex justify-center py-32 bg-white">
      <div>
        <h1 className="text-8xl mb-6" style={{ fontFamily: "Sakalangkong" }}>
          MODIFIER LE SPOT
        </h1>

        {typeofform === "Restaurant" && (
          <UpdRestaurant initialValues={initialValues} />
        )}
        {typeofform === "Bar" && <UpdBar initialValues={initialValues} />}
        {typeofform === "Parc" && <UpdParc initialValues={initialValues} />}
        {typeofform === "Musee" && <UpdMusee initialValues={initialValues} />}
        <button
          onClick={() => {
            handleDelete(spot._id)
          }}
          className="flex justify-center w-full rounded-full my-10 py-2"
          id="button"
        >
          Supprimer le spot
        </button>
      </div>
    </div>
  )
}

export default SpotEditPage
