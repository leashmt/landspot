import axios from "axios"
import { useRouter } from "next/router"

// eslint-disable-next-line max-lines-per-function
export const handleSubmitUpd = async ({
  _id,
  type,
  name,
  numero,
  rue,
  ville,
  pays,
  cuisine,
  note,
  qualite,
  dateajout,
  codepostal,
  typelieu,
  prix,
  niveauPrix,
  courant,
  typeart,
  typeparc,
  etatparc,
  rapportQP,
}) => {
  console.log("--envoie de la requête--")
  console.log({
    _id,
    type,
    name,
    numero,
    rue,
    ville,
    pays,
    cuisine,
    note,
    qualite,
    dateajout,
    codepostal,
    typelieu,
    prix,
    niveauPrix,
    courant,
    typeart,
    typeparc,
    etatparc,
    rapportQP,
  })
  await axios.patch(`/api/landspot/${_id}`, {
    type,
    name,
    numero,
    rue,
    ville,
    pays,
    cuisine,
    note,
    qualite,
    dateajout,
    codepostal,
    typelieu,
    prix,
    niveauPrix,
    courant,
    typeart,
    typeparc,
    etatparc,
    rapportQP,
  })

  console.log("fin du handlesubmit")
}
