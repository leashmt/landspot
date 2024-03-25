/* eslint-disable max-lines-per-function */
const { createRoute } = require("@/api/createroute")
const { LandSpotModel } = require("@/database/models/landSpotModel")
const handler = createRoute(async (req, res) => {
  console.log(req.body)

  if (req.method === "POST") {
    if (req.body.typeSpot === "Restaurant") {
      const {
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
      } = req.body
      const adresse = { numero, rue, ville, pays, codepostal }
      const typelieu = cuisine
      const rapportQP = qualite
      const newSpot = new LandSpotModel({
        typeSpot,
        dateajout,
        name,
        adresse,
        typelieu,
        note,
        rapportQP,
      })
      await newSpot.save()
      res.send(newSpot)
    } else if (req.body.typeSpot === "Bar") {
      const {
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
      } = req.body
      const adresse = { numero, rue, ville, pays, codepostal }
      const typelieu = typebar
      const nivPrix = prix
      const newSpot = new LandSpotModel({
        typeSpot,
        dateajout,
        name,
        adresse,
        typelieu,
        nivPrix,
      })
      await newSpot.save()
      res.send(newSpot)
    } else if (req.body.typeSpot === "Musee") {
      const {
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
      } = req.body
      const adresse = { numero, rue, ville, pays, codepostal }
      const typelieu = typeart
      const nivPrix = niveauPrix
      const gratuitPayant = prix
      const courantArt = courant
      const newSpot = new LandSpotModel({
        typeSpot,
        dateajout,
        name,
        adresse,
        typelieu,
        nivPrix,
        gratuitPayant,
        courantArt,
      })
      await newSpot.save()
      res.send(newSpot)
    } else if (req.body.typeSpot === "Parc") {
      const {
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
      } = req.body
      const adresse = { numero, rue, ville, pays, codepostal }
      const typelieu = typeparc
      const gratuitPayant = prix
      const etat = etatparc
      const newSpot = new LandSpotModel({
        typeSpot,
        dateajout,
        name,
        adresse,
        typelieu,
        gratuitPayant,
        etat,
      })
      await newSpot.save()
      res.send(newSpot)
    }
  }
})
export default handler
