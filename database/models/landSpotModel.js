import { landspotSchema } from "@/database/schemas/landspotSchema"
import mongoose from "mongoose"

export const landSpotModel = mongoose.model("landspotSchema", landspotSchema)
