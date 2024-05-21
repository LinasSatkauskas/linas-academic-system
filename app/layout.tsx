import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { auth } from "@/auth"
import { SessionWrapper } from "@/components/SessionWrapper"

export const metadata: Metadata = {
  title: "Lino akademinė sistema",
  description: "Studentų pasiekimų vertinimai",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <html lang="lt">
      <body className="container mx-auto max-w-screen-x1">
        <SessionWrapper session={session}>
          <Header />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  )
}
