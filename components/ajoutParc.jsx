import { Field, Formik } from "formik"
import { validationSchemaParc } from "@/utils/validationSchema"
import { initialValuesParc } from "@/utils/initialValues"
import { ButtonForm } from "@/components/buttonForm"

// eslint-disable-next-line max-lines-per-function
export const FormParc = () => (
  <Formik
    validationSchema={validationSchemaParc}
    initialValues={initialValuesParc}
    // onSubmit={handleSubmit}
  >
    <form className="text-2xl my-2">
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
          {["public", "privé"].map((typeText, index) => (
            <option key={index} value={typeText}>
              {typeText}
            </option>
          ))}
        </Field>
      </div>
      <div className="flex justify-between my-2">
        <p>Prix moyen</p>
        <Field name="prix" as="select">
          {["5 - €€€€€", "4 - €€€€", "3 - €€€", "2 - €€", "1 - €"]
            .reverse()
            .map((typeText, index) => (
              <option key={index} value={typeText}>
                {typeText}
              </option>
            ))}
        </Field>
      </div>
      <ButtonForm />
    </form>
  </Formik>
)
