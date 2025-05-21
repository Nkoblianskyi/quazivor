import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold">Terms of Service</h1>
          </div>

          <div className="prose max-w-none">
            <p>Last updated: May 21, 2025</p>

            <h2>1. Introduction</h2>
            <p>
              Welcome to "Urban Raccoon" ("Game"). These Terms of Service ("Terms") govern your use of our game and
              website operated by Quazivor Inc. ("we," "us," or "our"). By accessing or using our Game, you agree to be
              bound by these Terms. If you disagree with any part of the Terms, you may not access the Game.
            </p>

            <h2>2. Age Restriction</h2>
            <p>
              The Game is intended for users who are 18 years of age or older. By accessing or using the Game, you
              represent and warrant that you are at least 18 years old. If we discover or have reason to believe that
              you are not at least 18 years old, we reserve the right to suspend or terminate your access to the Game
              immediately.
            </p>

            <h2>3. Виключно для розважальних цілей</h2>
            <p>
              "Rescue Hero in the Canadian Rockies" - це безкоштовна соціальна платформа виключно для розважальних
              цілей. Ми чітко заявляємо, що:
            </p>
            <ul>
              <li>Це не азартна гра</li>
              <li>Без реальних грошей</li>
              <li>Без виграшів</li>
              <li>Все віртуальне і не несе ніякої цінності</li>
              <li>Повністю безкоштовно для використання</li>
              <li>Не потрібні покупки для гри</li>
              <li>Внутрішньоігрові очки не мають грошової цінності</li>
            </ul>

            <h2>4. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current
              at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
              termination of your account.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Game and for any activities
              or actions under your password. You agree not to disclose your password to any third party. You must
              notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              The Game and its original content, features, and functionality are and will remain the exclusive property
              of Quazivor Inc. and its licensors. The Game is protected by copyright, trademark, and other laws of both
              Canada and foreign countries. Our trademarks and trade dress may not be used in connection with any
              product or service without the prior written consent of Quazivor Inc.
            </p>

            <h2>6. User Conduct</h2>
            <p>You agree not to use the Game:</p>
            <ul>
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>
                To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                mail," "chain letter," "spam," or any other similar solicitation
              </li>
              <li>
                To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other
                person or entity
              </li>
              <li>
                In any way that could disable, overburden, damage, or impair the site or interfere with any other
                party's use of the Game
              </li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall Quazivor Inc., nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Game</li>
              <li>Any conduct or content of any third party on the Game</li>
              <li>Any content obtained from the Game</li>
              <li>Unauthorized access, use or alteration of your transmissions or content</li>
            </ul>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Canada, without regard to its
              conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be
              considered a waiver of those rights.
            </p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Quazivor Inc.
              <br />
              46 Robson St, Vancouver, BC, V6B 2B5
              <br />
              Email: contact@quazivor.com
              <br />
              Website: quazivor.com
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
