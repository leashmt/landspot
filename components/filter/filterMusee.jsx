import { Field } from "formik"
import { sortofarttype } from "@/utils/sortofart"
import { sortofcourant } from "@/utils/sortofcourant"

export const FilterMusee = () => (
  <>
    <p>Courant artistique</p>
    <Field name="courant" as="select">
      {sortofcourant.map((sort, index) => (
        <option key={index + 1} value={sort}>
          {sort}
        </option>
      ))}
    </Field>
    <p>Type d'art</p>
    <Field name="typelieu" as="select">
      {sortofarttype.map((sort, index) => (
        <option key={index + 1} value={sort}>
          {sort}
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
