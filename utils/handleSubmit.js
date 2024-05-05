/* eslint-disable no-unused-vars */
import axios from "axios"

export const handleSubmitRestaurant = async (
  { name, numero, rue, ville, pays, cuisine, note, qualite, codepostal },
  { resetForm },
) => {
  resetForm()
  const type = "Restaurant"
  const dateajout = new Date()
  const { data: newSpot } = await axios.post("/api/landspot", {
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
  })
}

export const handleSubmitBar = async (
  { name, numero, rue, ville, pays, typebar, prix, codepostal },
  { resetForm },
) => {
  resetForm()
  const type = "Bar"
  const dateajout = new Date()
  const typelieu = typebar
  const { data: newSpot } = await axios.post("/api/landspot", {
    name,
    numero,
    rue,
    ville,
    pays,
    typelieu,
    prix,
    codepostal,
    type,
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
  const type = "Musee"
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
    type,
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
  const type = "Parc"
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
    type,
    dateajout,
  })
}
