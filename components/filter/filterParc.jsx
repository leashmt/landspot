import { sortofparc } from "@/utils/sortofparc"
import { Field } from "formik"

// eslint-disable-next-line max-lines-per-function
export const FilterParc = () => (
  <div className="flex gap-10 items-end mt-3 mb-3">
    <div>
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
    </div>
    <div>
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
    </div>
    <div>
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
    </div>
    <div>
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
    </div>
    <div>
      <button id="button" type="submit" className="rounded-full px-3 py-1">
        Filter les spots
      </button>
    </div>
  </div>
)
