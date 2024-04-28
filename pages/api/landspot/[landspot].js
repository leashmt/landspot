import { createRoute } from "@/api/createroute"
import { LandSpotModel } from "@/database/models/landSpotModel"

export const handler = createRoute(async (req, res) => {
  const { landspot } = req.query
  //const spot = await LandSpotModel.findOne({ _id: landspot })
  const spot = await LandSpotModel.findById(landspot)

  if (!spot) {
    res.status(404).send("Spot not found")

    return
  }

  if (req.method === "GET") {
    res.send(spot)

    return
  }

  if (req.method === "PATCH") {
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
      typelieu,
      prix,
      niveauPrix,
      courant,
      typeart,
      typeparc,
      etatparc,
    } = req.body
    const keys = Object.keys(req.body)

    console.log("-----------")
    keys.forEach((key) => {
      if (req.body[key]) {
        spot[key] = req.body[key]
      }
    })

    await spot.save()

    res.send(spot)

    return
  }
})

export default handler
