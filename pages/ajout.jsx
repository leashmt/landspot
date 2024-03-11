import { FormBar } from "@/components/ajoutBar";
import { FormMusee } from "@/components/ajoutMusee";
import { FormParc } from "@/components/ajoutParc";
import { FormRestaurant } from "@/components/ajoutRestaurant";
import { typeofspot } from "@/utils/typeofspot";
import { Field, Formik } from "formik";
import { useState } from "react";

const pageajout = () => {
  const initialValuesType = {
    type: "",
  };

  const [typeofform, settypeofform] = useState("Choisir un type de spot");
  const handleSubmitType = () => {};
  return (
    <div className="flex justify-center my-32">
      <div className="">
        <h1 className="text-7xl mb-4">AJOUT D'UN SPOT</h1>
        <Formik initialValues={initialValuesType} onSubmit={handleSubmitType}>
          <form className="text-2xl">
            <div className="flex justify-between">
              <p>Type du spot</p>
              <Field
                name="type"
                placeholder="Type du sport"
                as="select"
                className="text-xl w-1/2"
                onChange={(event) => {
                  console.log("Spot sélectionné :", event.target.value);
                  settypeofform(event.target.value);
                }}
              >
                {typeofspot.map((typeText, index) => (
                  <option key={index} value={typeText}>
                    {typeText}
                  </option>
                ))}
              </Field>
            </div>
          </form>
        </Formik>
        {/* {
        if (typeofform === "Restaurant") {
          return <FormRestaurant />;
        } else if (typeofform === "Bar") {
          return <FormBar />;
        } else {
          return null;
        }
      } */}

        {typeofform === "Choisir un type de spot" && (
          <p className="italic my-3">Choisir un type de lieu pour continuer</p>
        )}
        {typeofform === "Restaurant" && <FormRestaurant />}
        {typeofform === "Bar" && <FormBar />}
        {typeofform === "Parc" && <FormParc />}
        {typeofform === "Musee" && <FormMusee />}
      </div>
    </div>
  );
};

export default pageajout;
