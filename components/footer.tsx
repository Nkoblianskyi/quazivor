import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-600 to-brand-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-brand-500/50 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-brand-100"
                >
                  <path d="M18 6a4 4 0 0 0-4-4 7 7 0 0 0-6 4c-2 0-4 2-4 4 0 1 0 3 2 4v1c0 1 0 3 2 3h8c2 0 2-2 2-3v-1c2-1 2-3 2-4 0-2-2-4-2-4Z" />
                  <path d="M18 10c0 1 0 4-4 4-4 0-4-3-4-4" />
                  <path d="M17 16.5c.64.8 1 1.7 1 2.5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3c0-.8.36-1.7 1-2.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-100">Urban Raccoon</h3>
                <p className="text-brand-200/80">Educational Survival Game</p>
              </div>
            </div>
            <p className="text-brand-100/90 mb-6 leading-relaxed">
              A social game for entertainment purposes only. Guide your raccoon through forest and city environments. No
              real money. No prizes.
            </p>
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-brand-200 mr-2" />
              <span className="text-brand-200 font-bold">18+ Only</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand-100">Important Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/disclaimer" className="text-brand-100/90 hover:text-white transition-colors">
                Disclaimer
              </Link>
              <Link href="/privacy-policy" className="text-brand-100/90 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-brand-100/90 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-brand-100/90 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/contact" className="text-brand-100/90 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand-100">Contact Information</h3>
            <address className="not-italic text-brand-100/90 space-y-3">
              <p className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-brand-200 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Quazivor Inc.
                <br />
                46 Robson St, Vancouver, BC, V6B 2B5
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-brand-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="hover:text-white transition-colors">contact@quazivor.com</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-brand-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hover:text-white transition-colors">+1 604 165 3314</span>
              </p>
            </address>
          </div>
        </div>

        {/* Responsible Gaming Section */}
        <div className="border-t border-brand-500/50 pt-8 mb-8">
          <h4 className="text-center text-lg font-semibold mb-6 text-brand-200">Responsible Gaming Resources</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-brand-700/50 p-4 rounded-lg">
              <div className="mb-3 bg-white/10 rounded-lg p-2">
                <span className="text-brand-100 font-medium">GambleAware</span>
              </div>
              <span className="text-sm text-brand-200">Free advice and support</span>
            </div>

            <div className="flex flex-col items-center bg-brand-700/50 p-4 rounded-lg">
              <div className="mb-3 bg-white/10 rounded-lg p-2">
                <span className="text-brand-100 font-medium">GamCare</span>
              </div>
              <span className="text-sm text-brand-200">Support and counseling</span>
            </div>

            <div className="flex flex-col items-center bg-brand-700/50 p-4 rounded-lg">
              <div className="mb-3 bg-white/10 rounded-lg p-2">
                <span className="text-brand-100 font-medium">Gordon Moody</span>
              </div>
              <span className="text-sm text-brand-200">Therapy for gambling addiction</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-brand-900 p-6 rounded-xl mb-8">
          <h4 className="text-center text-lg font-semibold mb-3 text-brand-200">Disclaimer</h4>
          <div className="text-brand-200/80 text-sm leading-relaxed">
            <p className="mb-2">
              This game is strictly intended for players aged 18 and over. While it involves no real money, access by
              minors is not permitted.
            </p>
            <p className="mb-2">
              For adult players, this is a safe and entertaining experience that carries no financial risk. Please keep
              in mind: success in this game does not reflect real-life outcomes.
            </p>
            <p>
              Enjoy responsibly — and if you ever feel your play is becoming concerning, we recommend contacting Gaming
              Addicts Anonymous for guidance.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-brand-200/80 text-sm">
          <p>&copy; {new Date().getFullYear()} Quazivor Inc. All rights reserved.</p>
          <p className="mt-2">This is a social game for entertainment purposes only. No real money gambling.</p>
        </div>
      </div>
    </footer>
  )
}
