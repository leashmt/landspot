import { sortofbar } from "@/utils/sortofbar"
import { Field } from "formik"

export const FilterBar = () => (
  <div className="flex gap-10 items-end mt-3 mb-3">
    <div>
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
    </div>
    <div>
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
    </div>
    <div>
      <button id="button" type="submit" className="rounded-full px-3 py-1">
        Filter les spots
      </button>
    </div>
  </div>
)
