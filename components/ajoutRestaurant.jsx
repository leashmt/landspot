import { Field, Formik } from "formik";
export const FormRestaurant = () => (
  <Formik
  // validationSchema={validationSchema}
  // initialValues={initialValues}
  // onSubmit={handleSubmit}
  >
    <form className="text-2xl my-2">
      <div className="flex justify-between">
        <p>Nom du restaurant</p>
        <Field name="name" component="input" placeholder="Nom du restaurant" />
      </div>
      <h2 className="mt-4 text-4xl mb-2">Adresse du restaurant</h2>
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
          name="ville"
          component="input"
          placeholder="Ville"
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
        <p>Type de cuisine</p>
        <Field
          name="cuisine"
          component="input"
          placeholder="Cuisine italienne, fast-food ..."
        />
      </div>
      <div className="flex justify-between my-2">
        <p>Note du restaurant</p>
        <Field name="note" as="select">
          {["5", "4", "3", "2", "1"].map((typeText, index) => (
            <option key={index} value={typeText}>
              {typeText}
            </option>
          ))}
        </Field>
      </div>
      <div className="flex justify-between my-2">
        <p>Rapport qualité/prix</p>
        <Field name="qualité" placeholder="Rapport qualité/prix" as="select">
          {["5", "4", "3", "2", "1"].map((typeText, index) => (
            <option key={index} value={typeText}>
              {typeText}
            </option>
          ))}
        </Field>
      </div>
    </form>
  </Formik>
);