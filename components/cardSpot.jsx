import Link from "next/link"

export const CardSpot = ({ spot, nombreJours }) => (
  <div
    key={spot._id}
    id="bg-blue"
    className="p-3 rounded-lg flex flex-col justify-between"
  >
    <h3 className="text-lg mb-1 font-bold truncate">{spot.name}</h3>
    <p>
      Type : <span className="font-bold">{spot.type}</span>
    </p>
    <p className="italic">
      {nombreJours > 0
        ? `Publié il y a ${nombreJours} jours`
        : "Publié aujourd'hui"}
    </p>
    <p>
      {spot.adresse.numero} {spot.adresse.rue} {spot.adresse.ville} -{" "}
      {spot.adresse.pays}
    </p>
    <div className="flex justify-end mt-2">
      <Link
        href={`/spots/${spot._id}`}
        id="button-red"
        className="rounded-lg p-2"
      >
        Voir les détails
      </Link>
    </div>
  </div>
)
