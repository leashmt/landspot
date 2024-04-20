/* eslint-disable max-lines-per-function */
const { createRoute } = require("@/api/createroute")
const { LandSpotModel } = require("@/database/models/landSpotModel")
const handler = createRoute(async (req, res) => {
  console.log(req.body)

  if (req.method === "POST") {
    if (req.body.type === "Restaurant") {
      const {
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
      } = req.body
      const adresse = { numero, rue, ville, pays, codepostal }
      const typelieu = cuisine
      const rapportQP = qualite
      const newSpot = new LandSpotModel({
        type,
        dateajout,
        name,
        adresse,
        typelieu,
        note,
        rapportQP,
      })
      await newSpot.save()
      res.send(newSpot)
    } else if (req.body.type === "Bar") {
      const {
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
      } = req.body
      const adresse = { numero, rue, ville, pays, codepostal }
      const nivPrix = prix
      const newSpot = new LandSpotModel({
        type,
        dateajout,
        name,
        adresse,
        typelieu,
        nivPrix,
      })
      await newSpot.save()
      res.send(newSpot)
    } else if (req.body.type === "Musee") {
      const {
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
      } = req.body
      const adresse = { numero, rue, ville, pays, codepostal }
      const typelieu = typeart
      const nivPrix = niveauPrix
      const gratuitPayant = prix
      const courantArt = courant
      const newSpot = new LandSpotModel({
        type,
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
    } else if (req.body.type === "Parc") {
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
        type,
        dateajout,
      } = req.body
      const adresse = { numero, rue, ville, pays, codepostal }
      const typelieu = typeparc
      const gratuitPayant = prix
      const etat = etatparc
      const newSpot = new LandSpotModel({
        type,
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

  if (req.method === "GET") {
    const { type } = req.query
    const todos = await LandSpotModel.find(type ? { type } : {})

    res.send(todos)

    return
  }
})
export default handler
