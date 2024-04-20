import { createRoute } from "@/api/createroute"
import { LandSpotModel } from "@/database/models/landSpotModel"

export const handler = createRoute(async (req, res) => {
  const { landspot } = req.query
  const spot = await LandSpotModel.findOne({ _id: landspot })

  if (!spot) {
    res.status(404).send("Spot not found")

    return
  }

  if (req.method === "GET") {
    res.send(spot)

    return
  }

  res.send("Hello")
})

export default handler
