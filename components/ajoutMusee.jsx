import { Field, Formik } from "formik";
import { validationSchemaMusee } from "@/utils/validationSchema";
export const FormMusee = () => (
  <Formik
    validationSchema={validationSchemaMusee}
    // initialValues={initialValues}
    // onSubmit={handleSubmit}
  >
    <form className="text-2xl my-2">
      <div className="flex justify-between">
        <p>Nom du musée</p>
        <Field name="name" component="input" placeholder="Nom du musée" />
      </div>
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
        <p>Courant artistique</p>
        <Field
          name="courant"
          component="input"
          placeholder="Renaissance, surréalisme ..."
        />
      </div>
      <div className="flex justify-between">
        <p>Type d'art</p>
        <Field
          name="typeart"
          component="input"
          placeholder="Peinture, sculpture ..."
        />
      </div>
      <div className="flex justify-between my-2">
        <p>Prix de l'entrée</p>
        <Field
          name="prix"
          placeholder="Prix moyen des consommations"
          as="select"
        >
          {["payant", "gratuit"].reverse().map((typeText, index) => (
            <option key={index} value={typeText}>
              {typeText}
            </option>
          ))}
        </Field>
      </div>
    </form>
  </Formik>
);
