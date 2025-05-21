export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Urban Raccoon Survival",
    description:
      "A free social platform about a raccoon surviving in forest and urban environments. Exclusively for entertainment purposes with no real money.",
    genre: ["Educational Game", "Simulation Game", "Adventure Game"],
    gamePlatform: "Web Browser",
    applicationCategory: "Game",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
    contentRating: "18+",
    audience: {
      "@type": "Audience",
      audienceType: "Adults",
    },
    publisher: {
      "@type": "Organization",
      name: "Quazivor Inc.",
      url: "https://quazivor.com",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
