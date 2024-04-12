import mongoose, { Schema } from "mongoose"

const adresseSchema = new mongoose.Schema({
  numero: {
    type: Number,
    require: true,
  },
  rue: {
    type: String,
    require: true,
  },
  ville: {
    type: String,
    require: true,
  },
  pays: {
    type: String,
    require: true,
  },
  codepostal: {
    type: Number,
    require: true,
  },
})

export const landspotSchema = new Schema({
  type: {
    type: String,
    require: true,
  },
  dateajout: {
    type: Date,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  adresse: {
    type: adresseSchema,
    require: true,
  },
  typelieu: {
    type: String,
  },
  note: {
    type: String,
  },
  rapportQP: {
    type: String,
  },
  courantArt: {
    type: String,
  },
  gratuitPayant: {
    type: String,
  },
  nivPrix: {
    type: String,
  },
  etat: {
    type: String,
  },
})
