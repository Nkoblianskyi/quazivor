"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { AlertTriangle, ExternalLink } from "lucide-react"

export default function ResponsibleGaming() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
            <h2 className="text-2xl font-bold">Responsible Gaming</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <p className="text-center mb-6 font-medium">
              Urban Raccoon - це безкоштовна соціальна платформа виключно для розважальних цілей. Без реальних грошей.
              Без виграшів. Все віртуальне і не несе ніякої цінності. Повністю безкоштовно для використання.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-amber-50 p-4 rounded-lg text-center">
                <div className="font-bold text-amber-700 mb-1">No Real Money</div>
                <p className="text-sm text-gray-600">All points and rewards are virtual with no monetary value</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg text-center">
                <div className="font-bold text-amber-700 mb-1">Entertainment Only</div>
                <p className="text-sm text-gray-600">Designed purely for fun and educational purposes</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg text-center">
                <div className="font-bold text-amber-700 mb-1">Ages 18+</div>
                <p className="text-sm text-gray-600">Content is intended for adult audiences</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-bold mb-4 text-center">Support Resources</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="relative w-32 h-12 mb-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x4mkXbxGhlgvipaXK4V1MYEkHcisEy.png"
                      alt="GambleAware Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>Information</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </Link>
                <Link
                  href="https://www.gamcare.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="relative w-32 h-12 mb-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DjJ5oJn8abRYrSc5QxejkioQuYcRcv.png"
                      alt="GamCare Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>Support</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </Link>
                <Link
                  href="https://www.gordonmoody.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="relative w-32 h-12 mb-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kaBvObDvnA4QpDq5zVMc2f6rcRtOy5.png"
                      alt="Gordon Moody Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>Therapy</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Quazivor Inc. All rights reserved.</p>
            <p className="mt-1">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              |
              <Link href="/terms" className="hover:underline ml-2">
                Terms of Service
              </Link>{" "}
              |
              <Link href="/cookies" className="hover:underline ml-2">
                Cookie Policy
              </Link>{" "}
              |
              <Link href="/disclaimer" className="hover:underline ml-2">
                Disclaimer
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
