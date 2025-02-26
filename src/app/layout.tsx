import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Outfit } from "next/font/google"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",         // recommended for performance
})

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={outfit.className}>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
