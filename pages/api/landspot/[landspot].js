import { createRoute } from "@/api/createroute"
import { LandSpotModel } from "@/database/models/landSpotModel"

export const handler = createRoute(async (req, res) => {
  const { spotID } = req.query
  const spot = await LandSpotModel.findById(spotID)

  if (!spot) {
    res.status(404).send({ error: "not found" })

    return
  }

  if (req.method === "GET") {
    res.send(spot)

    return
  }
})
