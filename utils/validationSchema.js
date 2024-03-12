import * as Yup from "yup";

const validationSchemaRestaurant = Yup.object().shape({
  name: Yup.string().min(3).required("Le nom du restaurant est requis"),
  numero: Yup.number()
    .typeError("Le numéro doit être un nombre")
    .required("Le numéro est requis"),
  rue: Yup.string().required("La rue est requise"),
  ville: Yup.string().required("La ville est requise"),
  pays: Yup.string().required("Le pays est requis"),
  cuisine: Yup.string()
    .required("Le type de cuisine est requis")
    .matches(/^\S*$/, "La cuisine ne doit contenir qu'un seul mot"),
  note: Yup.string().required("La note du restaurant est requise"),
  qualité: Yup.string().required("Le rapport qualité/prix est requis"),
});

const validationSchemaMusee = Yup.object().shape({
  name: Yup.string().min(3).required("Le nom du musée est requis"),
  numero: Yup.number()
    .typeError("Le numéro doit être un nombre")
    .required("Le numéro est requis"),
  rue: Yup.string().required("La rue est requise"),
  ville: Yup.string().required("La ville est requise"),
  pays: Yup.string().required("Le pays est requis"),
  courant: Yup.string()
    .required("Le courant artistique est requis")
    .matches(/^\S*$/, "Le courant artistique ne doit contenir qu'un seul mot"),
});

const validationSchemaBar = Yup.object().shape({
  name: Yup.string().min(3).required("Le nom du bar est requis"),
  numero: Yup.number()
    .typeError("Le numéro doit être un nombre")
    .required("Le numéro est requis"),
  rue: Yup.string().required("La rue est requise"),
  ville: Yup.string().required("La ville est requise"),
  pays: Yup.string().required("Le pays est requis"),
  bar: Yup.string()
    .required("Le type de bar est requis")
    .matches(/^\S*$/, "Le type de bar ne doit contenir qu'un seul mot"),
  prix: Yup.string().required("Le prix est requis"),
});

const validationSchemaParc = Yup.object().shape({
  name: Yup.string().min(3).required("Le nom du bar est requis"),
  numero: Yup.number()
    .typeError("Le numéro doit être un nombre")
    .required("Le numéro est requis"),
  rue: Yup.string().required("La rue est requise"),
  ville: Yup.string().required("La ville est requise"),
  pays: Yup.string().required("Le pays est requis"),
  typeparc: Yup.string()
    .required("Le type de parc est requis")
    .matches(/^\S*$/, "Le type de parc ne doit contenir qu'un seul mot"),
  prix: Yup.string().required("Le prix est requis"),
});
