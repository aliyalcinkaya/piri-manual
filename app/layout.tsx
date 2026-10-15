import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from 'next/script'
import "./globals.css"
import "./manuals.css"

export const metadata: Metadata = {
  title: "Piri Red User Manuals",
  description: "User manuals for Piri Red Light Therapy devices",
  metadataBase: new URL('https://docs.pirired.com'),
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>{children}</Suspense>
        <Script src="/print-links.js" strategy="afterInteractive"/>
        <Analytics />
      </body>
    </html>
  )
}
