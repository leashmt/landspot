import Link from "next/link"
export const Header = () => (
  <header className="pt-2 pb-3">
    <div
      id="header"
      className="mt-2 mx-3 flex py-1 pl-4 pr-2 rounded-full justify-between items-center"
    >
      <div className="flex gap-2 flex-1">
        <Link href="/lstSpot" className="hover:cursor-pointer">
          Tous les spots
        </Link>
      </div>
      <div
        className="flex-1 flex justify-center text-3xl"
        style={{ fontFamily: "Sakalangkong" }}
      >
        <Link href="/" className="hover:cursor-pointer">
          LANDSPOT
        </Link>
      </div>
      <div className="flex-1 flex justify-end">
        <Link
          id="button"
          className="rounded-full px-2 py-1 hover:cursor-pointer"
          href="/ajout"
        >
          Ajouter un spot
        </Link>
      </div>
    </div>
  </header>
)
