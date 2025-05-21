import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
            <h1 className="text-3xl font-bold">Disclaimer</h1>
          </div>

          <div className="prose max-w-none">
            <h2>Exclusively for Entertainment Purposes</h2>
            <p>
              "Rescue Hero in the Canadian Rockies" is a free social platform exclusively for entertainment purposes.
              This game does not involve real money, does not offer winnings, and does not support any form of betting.
              Everything is virtual and has no value. Completely free to use.
            </p>

            <h2>Age Restriction</h2>
            <p>
              This game is intended for audiences 18 years of age or older. By accessing and playing this game, you
              confirm that you are at least 18 years old.
            </p>

            <h2>No Real Money</h2>
            <p>We clearly state that:</p>
            <ul>
              <li>This is not a gambling game</li>
              <li>No real money</li>
              <li>No winnings</li>
              <li>Everything is virtual and has no value</li>
              <li>Completely free to use</li>
              <li>No purchases required to play</li>
              <li>In-game points have no monetary value</li>
            </ul>

            <h2>Responsible Gaming</h2>
            <p>
              We promote responsible gaming practices. If you or someone you know has a gambling problem, we encourage
              seeking help from professional organizations such as:
            </p>

            <div className="my-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold mb-4">Safe Gaming Resources</h3>
              <p className="mb-4">
                While our game does not involve real gambling, we support responsible gaming awareness. If you or
                someone you know needs support with gambling-related issues, please contact these organizations:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="mb-3">
                    <span className="font-medium">GambleAware</span>
                  </div>
                  <span className="text-sm text-gray-600">Free advice and support</span>
                </div>

                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="mb-3">
                    <span className="font-medium">GamCare</span>
                  </div>
                  <span className="text-sm text-gray-600">Support and counseling</span>
                </div>

                <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="mb-3">
                    <span className="font-medium">Gordon Moody</span>
                  </div>
                  <span className="text-sm text-gray-600">Therapy for gambling addiction</span>
                </div>
              </div>
            </div>

            <h2>Limitation of Liability</h2>
            <p>
              Quazivor Inc. is not liable for any damages or losses that may result from the use of this game. By using
              this game, you agree to these terms and conditions.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/">
              <Button>Return to Homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
