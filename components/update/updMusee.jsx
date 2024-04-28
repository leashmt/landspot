/* eslint-disable max-lines-per-function */
import { Field, Form, Formik } from "formik"
import { ButtonForm } from "@/components/buttonForm"
import { sortofarttype } from "@/utils/sortofart"
import { sortofcourant } from "@/utils/sortofcourant"
import { handleSubmitUpd } from "@/utils/handleSubmitUpd"

export const UpdMusee = ({ initialValues }) => (
  <>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitUpd}
      //validationSchema={validationSchemaMusee}
    >
      {({ errors, touched, values }) => (
        <Form className="text-2xl my-2">
          <div className="flex justify-between">
            <p>Nom du musée</p>
            <Field name="name" component="input" placeholder="Nom du musée" />
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
              placeholder="Rue"
              className="w-2/3"
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
            className="w-2/3 my-2"
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
            <p>Courant artistique</p>
            <Field name="courant" as="select">
              {sortofcourant.map((sort, index) => (
                <option key={index + 1} value={sort}>
                  {sort}
                </option>
              ))}
            </Field>
          </div>
          {touched.courant && errors.courant && (
            <div className="text-red-500">{errors.courant}</div>
          )}
          <div className="flex justify-between">
            <p>Type d'art</p>
            <Field name="typeart" as="select">
              {sortofarttype.map((sort, index) => (
                <option key={index + 1} value={sort}>
                  {sort}
                </option>
              ))}
            </Field>
          </div>
          {touched.typeart && errors.typeart && (
            <div className="text-red-500">{errors.typeart}</div>
          )}
          <div className="flex justify-between my-2">
            <p>Gratuit ou payant</p>
            <Field name="prix" as="select">
              {["payant", "gratuit", "Choisir une option"]
                .reverse()
                .map((typeText, index) => (
                  <option key={index} value={typeText}>
                    {typeText}
                  </option>
                ))}
            </Field>
          </div>
          {values.prix === "payant" && (
            <div className="flex justify-between my-2">
              <p>Niveau du prix</p>
              <Field name="niveauPrix" as="select">
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
      )}
    </Formik>
  </>
)
