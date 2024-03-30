import { landspotSchema } from "@/database/schemas/landspotSchema"
import mongoose from "mongoose"

export const LandSpotModel = mongoose.models.landspotSchema || mongoose.model("landspotSchema", landspotSchema)
