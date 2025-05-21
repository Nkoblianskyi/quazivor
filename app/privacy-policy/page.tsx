import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="flex items-center mb-6">
            <ShieldCheck className="h-6 w-6 text-blue-500 mr-2" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>

          <div className="prose max-w-none">
            <p>Last updated: May 21, 2025</p>

            <h2>Introduction</h2>
            <p>
              Quazivor Inc. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our social game "Urban
              Raccoon".
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, and age verification status when you contact
                us or create an account.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our game, including game scores,
                progress, and preferences.
              </li>
              <li>
                <strong>Device Information:</strong> Information about your device, including IP address, browser type,
                and operating system.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>To provide and maintain our game</li>
              <li>To notify you about changes to our game</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our game</li>
              <li>To monitor the usage of our game</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers who assist us in operating our game</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of
              transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal information</li>
            </ul>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
