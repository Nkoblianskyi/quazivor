import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"

const inter = Inter({ subsets: ["latin"] })

// Update site metadata
export const metadata: Metadata = {
  title: "Urban Raccoon - Free Social Platform | Quazivor",
  description:
    "A free social platform exclusively for entertainment purposes. No real money. No winnings. Everything is virtual and has no value. Completely free to use. For users 18+.",
  keywords: "free game, social platform, raccoon, survival, educational game, no money, virtual points, free to use",
  openGraph: {
    title: "Urban Raccoon - Free Social Platform | Quazivor",
    description:
      "A free social platform exclusively for entertainment purposes. No real money. No winnings. Everything is virtual and has no value. Completely free to use.",
    type: "website",
    url: "https://quazivor.com",
  },
  other: {
    google: "notranslate",
    rating: "General",
    category: "games,education,entertainment",
    subject: "Educational Games",
    "format-detection": "telephone=no",
    "google-adsense-account": "ca-pub-REPLACE_WITH_YOUR_ADSENSE_ID",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#b45309" />
        <link rel="icon" href="/favicon.ico" />
        {/* Additional meta tags to clarify site purpose */}
        <meta name="classification" content="Educational Game" />
        <meta name="subject" content="Raccoon Survival Simulation" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
          <DisclaimerBanner />
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
