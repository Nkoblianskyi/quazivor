import type React from "react"
import type { Metadata } from "next"
import { Karla } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"

const inter = Karla({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Urban Raccoon - Educational Survival Game | Quazivor",
  description:
    "A free educational social game for entertainment purposes only. Guide your raccoon through forest and city environments. No real money, no gambling, no prizes, ages 18+.",
  keywords:
    "educational game, raccoon survival, social game, free game, no gambling, forest survival, city survival, adventure game, simulation, learning",
  openGraph: {
    title: "Urban Raccoon - Educational Survival Game | Quazivor",
    description:
      "A free educational social game for entertainment purposes only. Guide your raccoon through forest and city environments. No real money, no gambling, no prizes.",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
