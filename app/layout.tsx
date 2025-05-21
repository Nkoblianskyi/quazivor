import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import Footer from "@/components/footer"
import DisclaimerBanner from "@/components/disclaimer-banner"

const inter = Inter({ subsets: ["latin"] })

// Оновити метадані сайту
export const metadata: Metadata = {
  title: "Urban Raccoon - Безкоштовна Соціальна Платформа | Quazivor",
  description:
    "Безкоштовна соціальна платформа виключно для розважальних цілей. Без реальних грошей. Без виграшів. Все віртуальне і не несе ніякої цінності. Повністю безкоштовно для використання. Для користувачів 18+.",
  keywords:
    "безкоштовна гра, соціальна платформа, єнот, виживання, освітня гра, без грошей, віртуальні очки, безкоштовно для використання",
  openGraph: {
    title: "Urban Raccoon - Безкоштовна Соціальна Платформа | Quazivor",
    description:
      "Безкоштовна соціальна платформа виключно для розважальних цілей. Без реальних грошей. Без виграшів. Все віртуальне і не несе ніякої цінності. Повністю безкоштовно для використання.",
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
