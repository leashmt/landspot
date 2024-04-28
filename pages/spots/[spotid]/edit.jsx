import { UpdBar } from "@/components/update/updBar"
import { UpdMusee } from "@/components/update/updMusee"
import { UpdParc } from "@/components/update/updParc"
import { UpdRestaurant } from "@/components/update/updRestaurant"
import {
  validationSchemaBar,
  validationSchemaMusee,
  validationSchemaParc,
  validationSchemaRestaurant,
} from "@/utils/validationSchema"
import axios from "axios"
import { Form, Formik } from "formik"
import { useRouter } from "next/router"

export const getServerSideProps = async ({ params: { spotid } }) => {
  console.log(spotid)
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

  initialValues.numero = initialValues.adresse.numero
  initialValues.rue = initialValues.adresse.rue
  initialValues.ville = initialValues.adresse.ville
  initialValues.codepostal = initialValues.adresse.codepostal
  initialValues.pays = initialValues.adresse.pays

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
      </div>
    </div>
  )
}

export default SpotEditPage
