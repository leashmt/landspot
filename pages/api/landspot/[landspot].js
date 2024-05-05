/* eslint-disable no-unused-vars */
import { createRoute } from "@/api/createroute"
import { LandSpotModel } from "@/database/models/landSpotModel"

export const handler = createRoute(async (req, res) => {
  const { landspot } = req.query
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
      nivPrix,
      courant,
      typeart,
      typeparc,
      etatparc,
    } = req.body
    const keys = Object.keys(req.body)

    console.log("upd")
    console.log(req.body)
    keys.forEach((key) => {
      if (req.body[key]) {
        spot[key] = req.body[key]
      }
    })

    await spot.save()

    console.log(spot)
    res.send(spot)

    return
  }

  if (req.method === "DELETE") {
    await spot.deleteOne()

    res.send(spot)
  }
})

export default handler
