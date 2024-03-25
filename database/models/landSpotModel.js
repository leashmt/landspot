import { landspotSchema } from "@/database/schemas/landspotSchema"
import mongoose from "mongoose"

export const LandSpotModel = mongoose.model("landspotSchema", landspotSchema)
