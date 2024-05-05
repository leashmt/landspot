import axios from "axios"

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
  alert("Le spot a été modifié.")
}
