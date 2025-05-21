export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Urban Raccoon Survival",
    description:
      "An educational social game about a raccoon surviving in forest and city environments. For entertainment purposes only with no real money gambling.",
    genre: ["Educational Game", "Simulation Game", "Adventure Game"],
    gamePlatform: "Web Browser",
    applicationCategory: "Game",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
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
