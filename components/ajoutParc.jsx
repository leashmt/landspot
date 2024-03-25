import { Field, Formik, Form } from "formik"
import { validationSchemaParc } from "@/utils/validationSchema"
import { initialValuesParc } from "@/utils/initialValues"
import { ButtonForm } from "@/components/buttonForm"
import { handleSubmitParc } from "@/utils/handleSubmit"
import { useState } from "react"

// eslint-disable-next-line max-lines-per-function
export const FormParc = () => {
  const [typeentree, settypeentree] = useState("choisir une option")

  return (
    <Formik
      validationSchema={validationSchemaParc}
      initialValues={initialValuesParc}
      onSubmit={handleSubmitParc}
    >
      <Form className="text-2xl my-2">
        <div className="flex justify-between">
          <p>Nom du parc</p>
          <Field name="name" component="input" placeholder="Nom du spot" />
        </div>
        <h2 className="mt-4 text-4xl mb-2">Adresse du parc</h2>
        <div className="flex justify-between gap-5">
          <Field
            name="numero"
            type="number"
            component="input"
            placeholder="Numero"
            className="w-1/3"
          />
          <Field
            name="rue"
            component="input"
            placeholder="Rue"
            className="w-2/3"
          />
        </div>
        <div className="flex justify-between gap-5">
          <Field
            name="codepostal"
            component="input"
            placeholder="Code postal"
            className="w-2/3"
          />
          <Field
            name="pays"
            component="input"
            placeholder="Pays"
            className="w-1/3"
          />
        </div>
        <h2 className="mt-4 text-4xl mb-2">Description</h2>
        <div className="flex justify-between">
          <p>Type de parc</p>
          <Field
            name="typeparc"
            component="input"
            placeholder="Parc floral, parc forestier ..."
          />
        </div>
        <div className="flex justify-between my-2">
          <p>État du parc</p>
          <Field name="etatparc" as="select">
            {["Choisir une option", "public", "privé"].map(
              (typeText, index) => (
                <option key={index} value={typeText}>
                  {typeText}
                </option>
              ),
            )}
          </Field>
        </div>
        <div className="flex justify-between my-2">
          <p>Gratuit ou payant</p>
          <Field
            name="prix"
            as="select"
            onChange={(event) => {
              settypeentree(event.target.value)
            }}
            value={typeentree}
          >
            {["payant", "gratuit", "Choisir une option"]
              .reverse()
              .map((typeText, index) => (
                <option key={index} value={typeText}>
                  {typeText}
                </option>
              ))}
          </Field>
        </div>
        {typeentree === "payant" && (
          <div className="flex justify-between my-2">
            <p>Niveau du prix</p>
            <Field name="niveauPrix" as="select" required={typeentree}>
              {[
                "5 - €€€€€",
                "4 - €€€€",
                "3 - €€€",
                "2 - €€",
                "1 - €",
                "Choisir un prix",
              ]
                .reverse()
                .map((typeText, index) => (
                  <option key={index} value={typeText}>
                    {typeText}
                  </option>
                ))}
            </Field>
          </div>
        )}
        <ButtonForm />
      </Form>
    </Formik>
  )
}
