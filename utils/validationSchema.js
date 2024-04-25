import * as Yup from "yup"

export const validationSchemaRestaurant = Yup.object().shape({
  name: Yup.string().min(3).required("Le nom du restaurant est requis"),
  numero: Yup.number()
    .typeError("Le numéro doit être un nombre")
    .required("Le numéro est requis"),
  rue: Yup.string().required("La rue est requise"),
  ville: Yup.string().required("La ville est requise"),
  pays: Yup.string().required("Le pays est requis"),
  note: Yup.string().required("La note du restaurant est requise"),
  qualite: Yup.string().required("Le rapport qualité/prix est requis"),
  codepostal: Yup.number()
    .typeError("Le code postal doit être un nombre")
    .required("Le code postal est requis"),
})

export const validationSchemaMusee = Yup.object().shape({
  name: Yup.string().min(3).required("Le nom du musée est requis"),
  numero: Yup.number()
    .typeError("Le numéro doit être un nombre")
    .required("Le numéro est requis"),
  rue: Yup.string().required("La rue est requise"),
  ville: Yup.string().required("La ville est requise"),
  pays: Yup.string().required("Le pays est requis"),
  codepostal: Yup.number()
    .typeError("Le code postal doit être un nombre")
    .required("Le code postal est requis"),
  prix: Yup.string().required('Le champ "gratuit ou payant" doit être rempli'),
})

export const validationSchemaBar = Yup.object().shape({
  name: Yup.string().min(3).required("Le nom du bar est requis"),
  numero: Yup.number()
    .typeError("Le numéro doit être un nombre")
    .required("Le numéro est requis"),
  rue: Yup.string().required("La rue est requise"),
  ville: Yup.string().required("La ville est requise"),
  codepostal: Yup.number()
    .typeError("Le code postal doit être un nombre")
    .required("Le code postal est requis"),
  pays: Yup.string().required("Le pays est requis"),
  prix: Yup.string().required("Le prix est requis"),
})

export const validationSchemaParc = Yup.object().shape({
  name: Yup.string().min(3).required("Le nom du bar est requis"),
  numero: Yup.number()
    .typeError("Le numéro doit être un nombre")
    .required("Le numéro est requis"),
  rue: Yup.string().required("La rue est requise"),
  ville: Yup.string().required("La ville est requise"),
  pays: Yup.string().required("Le pays est requis"),
  prix: Yup.string().required("Le prix est requis"),
  codepostal: Yup.number()
    .typeError("Le code postal doit être un nombre")
    .required("Le code postal est requis"),
})
