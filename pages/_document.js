import { Header } from "@/components/header"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <Header></Header>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
