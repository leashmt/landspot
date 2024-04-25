import { Field } from "formik"
import { sortofcuisine } from "@/utils/sortofcuisine"

export const FilterRestaurant = () => (
  <>
    <p>Type de cuisine</p>
    <Field name="typelieu" as="select" id="cuisine">
      <option key={0} value={""}>
        Aucun critère
      </option>
      {sortofcuisine.map((sort, index) => (
        <option value={sort} key={index + 1}>
          {sort}
        </option>
      ))}
    </Field>

    <p>Note</p>
    <Field name="note" as="select">
      <option key={0} value={""}>
        Aucun critère
      </option>
      {["5", "4", "3", "2", "1"].map((sort, index) => (
        <option key={index + 1} value={sort}>
          {sort}
        </option>
      ))}
    </Field>
    <p>Rapport qualité / prix</p>
    <Field name="rapport" as="select">
      <option key={0} value={""}>
        Aucun critère
      </option>
      {["5", "4", "3", "2", "1"].map((sort, index) => (
        <option key={index + 1} value={sort}>
          {sort}
        </option>
      ))}
    </Field>
    <button id="button" type="submit">
      Filter les spots
    </button>
  </>
)
