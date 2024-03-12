export const handleSubmitRestaurant = (
  { name, numero, rue, ville, pays, cuisine, note, qualite },
  { resetForm },
) => {
  resetForm()
  const typeSpot = "Restaurant"
  const dateajout = new Date()
}

export const handleSubmitBar = (
  { name, numero, rue, ville, pays, typebar, prix },
  { resetForm },
) => {
  resetForm()
  const typeSpot = "Bar"
  const dateajout = new Date()
}

export const handleSubmitMusee = (
  { name, numero, rue, ville, pays, courant, typeart, prix },
  { resetForm },
) => {
  resetForm()
  const typeSpot = "Musée"
  const dateajout = new Date()
}

export const handleSubmitParct = (
  { name, numero, rue, ville, pays, typeparc, etatparc, prix },
  { resetForm },
) => {
  resetForm()
  const typeSpot = "Parc"
  const dateajout = new Date()
}
