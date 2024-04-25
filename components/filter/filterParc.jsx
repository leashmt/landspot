import { sortofparc } from "@/utils/sortofparc"
import { Field } from "formik"

// eslint-disable-next-line max-lines-per-function
export const FilterParc = () => (
  <>
    <p>Type de parc</p>
    <Field name="typelieu" as="select" id="cuisine">
      <option key={0} value={""}>
        Aucun critère
      </option>
      {sortofparc.map((sort, index) => (
        <option value={sort} key={index + 1}>
          {sort}
        </option>
      ))}
    </Field>
    <p>État du parc</p>
    <Field name="etatparc" as="select">
      <option key={0} value={""}>
        Aucun critère
      </option>
      {["public", "privé"].map((typeText, index) => (
        <option key={index + 1} value={typeText}>
          {typeText}
        </option>
      ))}
    </Field>
    <p>Gratuit ou payant</p>
    <Field name="GP" as="select">
      <option key={0} value={""}>
        Aucun critère
      </option>
      {["payant", "gratuit"].reverse().map((typeText, index) => (
        <option key={index} value={typeText}>
          {typeText}
        </option>
      ))}
    </Field>
    <p>Prix moyen</p>
    <Field name="prix" as="select">
      <option key={0} value={""}>
        Aucun critère
      </option>
      {["5 - €€€€€", "4 - €€€€", "3 - €€€", "2 - €€", "1 - €"]
        .reverse()
        .map((typeText, index) => (
          <option key={index + 1} value={typeText}>
            {typeText}
          </option>
        ))}
    </Field>
    <button id="button" type="submit">
      Filter les spots
    </button>
  </>
)
