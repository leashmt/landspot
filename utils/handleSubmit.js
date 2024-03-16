export const handleSubmitRestaurant = (
  { name, numero, rue, ville, pays, cuisine, note, qualite },
  { resetForm },
) => {
  resetForm()
  const typeSpot = "Restaurant"
  const dateajout = new Date()
  console.log(name, numero, rue, ville, pays, cuisine, note, qualite)
}

export const handleSubmitBar = (
  { name, numero, rue, ville, pays, typebar, prix, codepostal },
  { resetForm },
) => {
  resetForm()
  const typeSpot = "Bar"
  const dateajout = new Date()
  console.log(name, numero, rue, ville, pays, typebar, prix, codepostal)
}

export const handleSubmitMusee = (
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
  const typeSpot = "Musée"
  const dateajout = new Date()
  console.log(
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
  )
}

export const handleSubmitParct = (
  { name, numero, rue, ville, pays, typeparc, etatparc, prix, codepostal },
  { resetForm },
) => {
  resetForm()
  const typeSpot = "Parc"
  const dateajout = new Date()
}
