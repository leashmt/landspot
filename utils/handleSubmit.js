import axios from "axios"

export const handleSubmitRestaurant = async (
  { name, numero, rue, ville, pays, cuisine, note, qualite, codepostal },
  { resetForm },
) => {
  resetForm()
  const typeSpot = "Restaurant"
  const dateajout = new Date()
  const { data: newSpot } = await axios.post("/api/landspot", {
    name,
    numero,
    rue,
    ville,
    pays,
    cuisine,
    note,
    qualite,
    typeSpot,
    dateajout,
    codepostal,
  })
}

export const handleSubmitBar = async (
  { name, numero, rue, ville, pays, typebar, prix, codepostal },
  { resetForm },
) => {
  resetForm()
  const typeSpot = "Bar"
  const dateajout = new Date()
  const { data: newSpot } = await axios.post("/api/landspot", {
    name,
    numero,
    rue,
    ville,
    pays,
    typebar,
    prix,
    codepostal,
    typeSpot,
    dateajout,
  })
}

export const handleSubmitMusee = async (
  {
    name,
    numero,
    rue,
    ville,
    pays,
    courant,
    typeart,
    prix,
    codepostal,
    niveauPrix,
  },
  { resetForm },
) => {
  resetForm()
  const typeSpot = "Musee"
  const dateajout = new Date()
  const { data: newSpot } = await axios.post("/api/landspot", {
    name,
    numero,
    rue,
    ville,
    pays,
    typeart,
    prix,
    codepostal,
    typeSpot,
    dateajout,
    courant,
    niveauPrix,
  })
}

export const handleSubmitParc = async (
  { name, numero, rue, ville, pays, typeparc, etatparc, prix, codepostal },
  { resetForm },
) => {
  resetForm()
  const typeSpot = "Parc"
  const dateajout = new Date()
  const { data: newSpot } = await axios.post("/api/landspot", {
    name,
    numero,
    rue,
    ville,
    pays,
    typeparc,
    etatparc,
    prix,
    codepostal,
    typeSpot,
    dateajout,
  })
}
