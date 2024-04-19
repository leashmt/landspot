export const Filtre = () => (
  <>
    <h4>Filtrer la recherche</h4>
    <div className="flex gap-3">
      <button
        id="button"
        className="rounded-full py-1 px-4"
        onClick={() => {
          const spotsMusee = initialspots.filter(
            (spot) => spot.type === "musee",
          )
          setSpots(spotsMusee)
        }}
      >
        Musée
      </button>
      <button
        id="button"
        className="rounded-full py-1 px-4"
        onClick={() => {
          const spotsParc = initialspots.filter((spot) => spot.type === "parc")
          setSpots(spotsParc)
        }}
      >
        Parc
      </button>
      <button
        id="button"
        className="rounded-full py-1 px-4"
        onClick={() => {
          const spotsRestaurants = initialspots.filter(
            (spot) => spot.type === "restaurant",
          )
          setSpots(spotsRestaurants)
        }}
      >
        Restaurant
      </button>
      <button
        id="button"
        className="rounded-full py-1 px-4"
        onClick={() => {
          const spotsBars = initialspots.filter((spot) => spot.type === "bar")
          setSpots(spotsBars)
        }}
      >
        Bar
      </button>
      <button
        id="button"
        className="rounded-full py-1 px-4"
        onClick={() => {
          setSpots(initialspots)
        }}
      >
        Réinitialisation
      </button>
    </div>
  </>
)
