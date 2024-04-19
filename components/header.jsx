import Link from "next/link"
export const Header = () => (
  <header className="p-2">
    <div
      id="header"
      className="flex py-1 pl-4 pr-2 rounded-full justify-between items-center"
    >
      <div className="flex gap-2 flex-1">
        <Link href="/lstSpot" className="hover:cursor-pointer">
          Tous les spots
        </Link>
        <Link href="/" className="hover:cursor-pointer">
          Trouver un spot
        </Link>
        <Link href="/" className="hover:cursor-pointer">
          Lien 3
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
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
