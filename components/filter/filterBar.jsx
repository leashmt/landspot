import { sortofbar } from "@/utils/sortofbar"
import { Field } from "formik"

export const FilterBar = () => (
  <>
    <p>Type de Bar</p>
    <Field name="typelieu" as="select" id="cuisine">
      <option key={0} value={""}>
        Aucun critère
      </option>
      {sortofbar.map((sort, index) => (
        <option value={sort} key={index + 1}>
          {sort}
        </option>
      ))}
    </Field>
    <p>Prix moyen des consommations</p>
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
