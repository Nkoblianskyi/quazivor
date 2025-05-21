import Link from "next/link"
import Image from "next/image"
import { AlertTriangle } from "lucide-react"

export default function ResponsiblePlay() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-8 w-8 text-amber-500 mr-2" />
            <h2 className="text-3xl font-bold">Responsible Play</h2>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
            <p className="text-lg font-bold text-center mb-4">
              Це не азартна гра. Ця гра не включає реальні гроші, не пропонує виграші, і не підтримує жодної форми
              ставок. Все віртуальне і не несе ніякої цінності. Повністю безкоштовно для використання.
            </p>
            <p className="text-center mb-6">
              Intended for audiences 18+. This is a social game made for entertainment only.
            </p>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-bold mb-4 text-center">Responsible Gaming Resources</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors flex flex-col items-center"
                >
                  <div className="relative w-32 h-12 mb-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x4mkXbxGhlgvipaXK4V1MYEkHcisEy.png"
                      alt="GambleAware Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Information and support</p>
                </Link>
                <Link
                  href="https://www.gamcare.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors flex flex-col items-center"
                >
                  <div className="relative w-32 h-12 mb-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DjJ5oJn8abRYrSc5QxejkioQuYcRcv.png"
                      alt="GamCare Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Support and counseling</p>
                </Link>
                <Link
                  href="https://www.gordonmoody.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors flex flex-col items-center"
                >
                  <div className="relative w-32 h-12 mb-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kaBvObDvnA4QpDq5zVMc2f6rcRtOy5.png"
                      alt="Gordon Moody Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600">Therapy for gambling addiction</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
            <p className="text-sm text-amber-700">
              Remember: This is a social game for entertainment purposes only. No real money is involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
