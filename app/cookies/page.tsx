import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <Cookie className="h-6 w-6 text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold">Cookie Policy</h1>
          </div>

          <div className="prose max-w-none">
            <p>Last updated: May 21, 2025</p>

            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and provide information to the website owners.
              Cookies help provide a better and more personalized user experience.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              "Rescue Hero in the Canadian Rockies" uses cookies for various purposes, including but not limited to:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.
                They enable core functionality such as security, network management, and account access. You may disable
                these by changing your browser settings, but this may affect how the website functions.
              </li>
              <li>
                <strong>Analytical/Performance Cookies:</strong> These cookies allow us to recognize and count the
                number of visitors and see how visitors move around our website when they are using it. This helps us
                improve the way our website works, for example, by ensuring that users find what they are looking for
                easily.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies are used to recognize you when you return to our
                website. This enables us to personalize our content for you, greet you by name, and remember your
                preferences (for example, your choice of language or region).
              </li>
              <li>
                <strong>Age Verification Cookies:</strong> We use cookies to remember that you have verified your age to
                access our game, which is intended for users 18 years of age or older.
              </li>
              <li>
                <strong>Game Progress Cookies:</strong> These cookies help us save your game progress and preferences so
                you can continue where you left off when you return to the game.
              </li>
            </ul>

            <h2>Types of Cookies We Use</h2>
            <p>Our website uses the following types of cookies:</p>

            <h3>Session Cookies</h3>
            <p>
              Session cookies are temporary cookies that are erased when you close your browser. These cookies do not
              collect information from your computer. They typically store information in the form of a session
              identification that does not personally identify you.
            </p>

            <h3>Persistent Cookies</h3>
            <p>
              Persistent cookies remain on your hard drive until you erase them or they expire. These cookies may be
              used to remember your preferences and choices on our site, or to track your usage behavior.
            </p>

            <h2>Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
              the game, deliver advertisements, and so on. These cookies may include:
            </p>
            <ul>
              <li>
                <strong>Analytics Cookies:</strong> We use Google Analytics to help us understand how users engage with
                our game. These cookies collect information about your use of the game, including which pages you visit
                and how you navigate through the site.
              </li>
              <li>
                <strong>Social Media Cookies:</strong> These cookies allow you to share your experience on our site with
                social media platforms like Facebook, Twitter, and Instagram. These cookies are not within our control.
                Please refer to the respective privacy policies of these platforms for how their cookies work.
              </li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies,
              or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and
              from version to version. You can however obtain up-to-date information about blocking and deleting cookies
              via these links:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p>
              Please note that if you choose to disable cookies, you may not be able to access certain parts of our
              game, and some features may not function properly.
            </p>

            <h2>Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page and updating the "Last Updated" date at the top of this policy.
            </p>
            <p>
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy
              are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our Cookie Policy, please contact us at:</p>
            <p>
              Zentriqa Inc.
              <br />
              11 Yonge St, Toronto, ON, M5C 1W4
              <br />
              Email: info@zentriqa.com
              <br />
              Phone: +1 416 555 7890
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
