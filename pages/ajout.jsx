/* eslint-disable no-empty-function */
import { FormBar } from "@/components/ajoutBar"
import { FormMusee } from "@/components/ajoutMusee"
import { FormParc } from "@/components/ajoutParc"
import { FormRestaurant } from "@/components/ajoutRestaurant"
import { typeofspot } from "@/utils/typeofspot"
import { Field, Formik, Form } from "formik"
import { useState } from "react"

const PageAjout = () => {
  const [typeofform, settypeofform] = useState("Choisir un type de spot")
  const handleSubmitType = () => {}
  const initialValuesType = {
    type: typeofform,
  }

  return (
    <div className="flex justify-center py-32 bg-white min-h-screen">
      <div className="">
        <h1 className="text-8xl mb-4" style={{ fontFamily: "Sakalangkong" }}>
          AJOUT D'UN SPOT
        </h1>
        <Formik initialValues={initialValuesType} onSubmit={handleSubmitType}>
          <Form className="text-2xl">
            <div className="flex justify-between">
              <p>Type du spot</p>
              <Field
                name="type"
                as="select"
                className="text-xl w-1/2"
                onChange={(event) => {
                  settypeofform(event.target.value)
                }}
                value={typeofform}
              >
                {typeofspot.map((typeText, index) => (
                  <option key={index + 1} value={typeText}>
                    {typeText}
                  </option>
                ))}
              </Field>
            </div>
          </Form>
        </Formik>

        {typeofform === "Choisir un type de spot" && (
          <p className="italic my-3">Choisir un type de lieu pour continuer</p>
        )}
        {typeofform === "Restaurant" && <FormRestaurant />}
        {typeofform === "Bar" && <FormBar />}
        {typeofform === "Parc" && <FormParc />}
        {typeofform === "Musee" && <FormMusee />}
      </div>
    </div>
  )
}

export default PageAjout
