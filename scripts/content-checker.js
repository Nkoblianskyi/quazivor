// Simple script to check for gambling-related terms in your site content
// You can run this against your site's content files

const fs = require("fs")
const path = require("path")

// Gambling-related terms that might trigger flags
const gamblingTerms = [
  "casino",
  "slot",
  "jackpot",
  "betting",
  "bet",
  "wager",
  "gamble",
  "gambling",
  "poker",
  "roulette",
  "blackjack",
  "baccarat",
  "lottery",
  "odds",
  "payout",
  "win money",
  "real money",
  "deposit",
  "withdrawal",
  "bonus",
  "free spin",
  "progressive jackpot",
  "high roller",
  "stake",
  "bookmaker",
  "sportsbook",
]

// Safe alternative terms to use
const alternativeTerms = {
  buy: "exchange",
  purchase: "acquire",
  shop: "equipment",
  store: "collection",
  win: "earn",
  prize: "achievement",
  jackpot: "top score",
  bet: "predict",
  spin: "attempt",
  payout: "reward",
  bonus: "extra",
  "free spin": "free attempt",
  deposit: "save",
  withdrawal: "retrieve",
}

// Educational/entertainment terms to emphasize
const recommendedTerms = [
  "educational",
  "entertainment",
  "learning",
  "skill-based",
  "adventure",
  "simulation",
  "strategy",
  "puzzle",
  "challenge",
  "achievement",
  "progress",
  "virtual points",
  "no real money",
  "free to play",
  "social game",
]

// Directory to scan (adjust to your project structure)
const directoryToScan = "./app"

// Function to scan files recursively
function scanDirectory(directory) {
  const files = fs.readdirSync(directory)

  files.forEach((file) => {
    const filePath = path.join(directory, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory()) {
      scanDirectory(filePath)
    } else if (stats.isFile() && (filePath.endsWith(".tsx") || filePath.endsWith(".ts") || filePath.endsWith(".js"))) {
      checkFile(filePath)
    }
  })
}

// Function to check a file for gambling terms
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8")
  const fileName = path.basename(filePath)
  let fileHasIssues = false

  console.log(`\nChecking file: ${filePath}`)

  // Check for gambling terms
  gamblingTerms.forEach((term) => {
    const regex = new RegExp(`\\b${term}\\b`, "gi")
    const matches = content.match(regex)

    if (matches && matches.length > 0) {
      if (!fileHasIssues) {
        console.log(`\n🚨 POTENTIAL ISSUES FOUND IN: ${fileName}`)
        fileHasIssues = true
      }
      console.log(`  - Found "${term}" ${matches.length} times`)
    }
  })

  // Check for terms that could be replaced
  Object.keys(alternativeTerms).forEach((term) => {
    const regex = new RegExp(`\\b${term}\\b`, "gi")
    const matches = content.match(regex)

    if (matches && matches.length > 0) {
      if (!fileHasIssues) {
        console.log(`\n⚠️ SUGGESTED REPLACEMENTS IN: ${fileName}`)
        fileHasIssues = true
      }
      console.log(`  - Consider replacing "${term}" with "${alternativeTerms[term]}" (found ${matches.length} times)`)
    }
  })

  // Check for recommended terms
  let recommendedTermsFound = 0
  recommendedTerms.forEach((term) => {
    const regex = new RegExp(`\\b${term}\\b`, "gi")
    const matches = content.match(regex)

    if (matches && matches.length > 0) {
      recommendedTermsFound += matches.length
    }
  })

  if (fileHasIssues) {
    console.log(`  - File contains ${recommendedTermsFound} educational/entertainment terms`)
    if (recommendedTermsFound < 3) {
      console.log(`  - ⚠️ Consider adding more educational/entertainment terminology`)
    }
  }

  if (!fileHasIssues) {
    console.log(`✅ No issues found`)
  }
}

console.log("🔍 SCANNING SITE CONTENT FOR POTENTIAL GOOGLE ADS TRIGGERS")
console.log("==========================================================")
scanDirectory(directoryToScan)
console.log("\n==========================================================")
console.log("✅ Scan complete. Review any flagged terms and consider the suggested replacements.")
console.log("📝 Remember to add clear disclaimers stating this is not a gambling site.")
