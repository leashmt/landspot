import { Field } from "formik"
import { sortofarttype } from "@/utils/sortofart"
import { sortofcourant } from "@/utils/sortofcourant"

export const FilterMusee = () => (
  <div className="flex gap-10 items-end mt-3 mb-3">
    <div>
      <p>Courant artistique</p>
      <Field name="courant" as="select">
        {sortofcourant.map((sort, index) => (
          <option key={index + 1} value={sort}>
            {sort}
          </option>
        ))}
      </Field>
    </div>
    <div>
      <p>Type d'art</p>
      <Field name="typelieu" as="select">
        {sortofarttype.map((sort, index) => (
          <option key={index + 1} value={sort}>
            {sort}
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
