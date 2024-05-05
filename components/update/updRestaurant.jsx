/* eslint-disable max-lines-per-function */
import { Field, Form, Formik } from "formik"
import { ButtonForm } from "@/components/buttonForm"
import { sortofcuisine } from "@/utils/sortofcuisine"
import { handleSubmitUpd } from "@/utils/handleSubmitUpd"

export const UpdRestaurant = ({ initialValues }) => (
  <>
    <Formik initialValues={initialValues} onSubmit={handleSubmitUpd}>
      {({ errors, touched }) => (
        <Form className="text-2xl my-2">
          <div className="flex justify-between">
            <p>Nom du restaurant</p>
            <Field
              name="name"
              component="input"
              placeholder="Nom du restaurant"
            />
          </div>
          {touched.name && errors.name && (
            <div className="text-red-500">{errors.name}</div>
          )}
          <h2
            className="mt-4 text-4xl mb-2"
            style={{ fontFamily: "Sakalangkong" }}
          >
            Adresse du restaurant
          </h2>
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
          <h2
            className="mt-4 text-4xl mb-2"
            style={{ fontFamily: "Sakalangkong" }}
          >
            Description
          </h2>
          <div className="flex justify-between">
            <p>Type de cuisine</p>
            <Field name="typelieu" as="select">
              {sortofcuisine.map((sort, index) => (
                <option key={index + 1} value={sort}>
                  {sort}
                </option>
              ))}
            </Field>
          </div>
          <div className="flex justify-between my-2">
            <p>Note du restaurant</p>
            <Field name="note" as="select">
              {["Choisir une note", "5", "4", "3", "2", "1"].map(
                (typeText, index) => (
                  <option key={index} value={typeText}>
                    {typeText}
                  </option>
                ),
              )}
            </Field>
          </div>
          {touched.note && errors.note && (
            <div className="text-red-500">{errors.note}</div>
          )}
          <div className="flex justify-between my-2">
            <p>Rapport qualité/prix</p>
            <Field
              name="rapportQP"
              placeholder="Rapport qualité/prix"
              as="select"
            >
              {["Choisir une note", "5", "4", "3", "2", "1"].map(
                (typeText, index) => (
                  <option key={index} value={typeText}>
                    {typeText}
                  </option>
                ),
              )}
            </Field>
          </div>
          {touched.qualite && errors.qualite && (
            <div className="text-red-500">{errors.qualite}</div>
          )}
          <ButtonForm />
        </Form>
      )}
    </Formik>
  </>
)
