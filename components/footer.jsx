import Link from "next/link"

export const Footer = () => (
  <footer id="red" className="flex justify-center align-middle py-3">
    <div className="flex flex-col">
      <p id="pink">LANDSPOT © 2024 Léa Schmitt</p>
      <div className="flex justify-center">
        <Link
          id="pink"
          className="underline decoration-1"
          href="https://github.com/leashmt/landspot"
          target="_blank"
        >
          GitHub
        </Link>
      </div>
    </div>
  </footer>
)
