/* eslint-disable max-lines-per-function */
import { Field, Formik, Form } from "formik"
import { validationSchemaBar } from "@/utils/validationSchema"
import { initialValuesBar } from "@/utils/initialValues"
import { ButtonForm } from "@/components/buttonForm"
import { handleSubmitBar } from "@/utils/handleSubmit"
import { sortofbar } from "@/utils/sortofbar"

export const FormBar = () => (
  <Formik
    validationSchema={validationSchemaBar}
    initialValues={initialValuesBar}
    onSubmit={handleSubmitBar}
  >
    {({ errors, touched }) => (
      <Form className="text-2xl my-2">
        <div className="flex justify-between">
          <p>Nom du bar</p>
          <Field name="name" component="input" placeholder="Nom du bar" />
        </div>
        {touched.name && errors.name && (
          <div className="text-red-500">{errors.name}</div>
        )}
        <h2 className="mt-4 text-4xl mb-2">Adresse du spot</h2>
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
            className="w-2/3"
            placeholder="Rue"
          />
        </div>
        {touched.numero && errors.numero && (
          <div className="text-red-500">{errors.numero}</div>
        )}
        {touched.rue && errors.rue && (
          <div className="text-red-500">{errors.rue}</div>
        )}
        <Field
          name="ville"
          component="input"
          className="w-2/3"
          placeholder="Ville"
        />
        {touched.ville && errors.ville && (
          <div className="text-red-500">{errors.ville}</div>
        )}
        <div className="flex justify-between gap-5">
          <Field
            name="codepostal"
            component="input"
            placeholder="Code postal"
            className="w-1/3"
          />
          <Field
            name="pays"
            component="input"
            placeholder="Pays"
            className="w-2/3"
          />
        </div>
        {touched.codepostal && errors.codepostal && (
          <div className="text-red-500">{errors.codepostal}</div>
        )}
        {touched.pays && errors.pays && (
          <div className="text-red-500">{errors.pays}</div>
        )}
        <h2 className="mt-4 text-4xl mb-2">Description</h2>
        <div className="flex justify-between">
          <p>Type de bar</p>
          <Field name="typebar" as="select">
            {sortofbar.map((sort, index) => (
              <option key={index + 1} value={sort}>
                {sort}
              </option>
            ))}
          </Field>
        </div>
        {touched.typebar && errors.typebar && (
          <div className="text-red-500">{errors.typebar}</div>
        )}
        <div className="flex justify-between my-2">
          <p>Prix moyen des consommations</p>
          <Field name="prix" as="select">
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
        {touched.prix && errors.prix && (
          <div className="text-red-500">{errors.prix}</div>
        )}
        <ButtonForm />
      </Form>
    )}
  </Formik>
)
