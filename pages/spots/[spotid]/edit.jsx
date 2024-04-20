import axios from "axios"
import { Form, Formik } from "formik"

export const getServerSideProps = async ({ params: { spotID } }) => {
  const { data: spot } = await axios(
    `http://localhost:3000/api/landspot/${spotID}`,
  )

  return {
    props: { spot },
  }
}
const SpotEditPage = ({ spot }) => {
  const initialValues = spot
  const handleSubmit = ...
  const typeofform = spot.type 

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          {typeofform === "Restaurant" && <FormRestaurant />}
          {typeofform === "Bar" && <FormBar />}
          {typeofform === "Parc" && <FormParc />}
          {typeofform === "Musee" && <FormMusee />}
        </Form>
      </Formik>
    </>
  )
}