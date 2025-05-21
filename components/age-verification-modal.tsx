"use client"

import { DialogFooter } from "@/components/ui/dialog"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

export default function AgeVerificationModal() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user has already verified age
    const isVerified = localStorage.getItem("ageVerified")
    if (!isVerified) {
      setOpen(true)
    }
  }, [])

  const handleVerify = () => {
    localStorage.setItem("ageVerified", "true")
    setOpen(false)
  }

  const handleDeny = () => {
    router.push("/denied")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-brand-500 mr-2" />
            Age Verification Required
          </DialogTitle>
          <DialogDescription className="text-base font-medium text-gray-600">
            Це безкоштовна соціальна платформа. Це не азартна гра. Без реальних грошей. Без виграшів. Все віртуальне і
            не несе ніякої цінності. Повністю безкоштовно для використання.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-6 py-6">
          <p className="text-center font-bold text-lg">Are you 18 years of age or older?</p>
          <div className="bg-gradient-to-r from-brand-50 to-accent-50 p-5 rounded-lg border border-brand-100 shadow-sm">
            <div className="flex items-start mb-3">
              <AlertTriangle className="h-6 w-6 text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
              <h3 className="text-lg font-bold text-brand-700">Important Warning</h3>
            </div>
            <p className="text-base text-gray-700 mb-2">
              This content is intended for adults 18 years of age or older.
            </p>
            <p className="text-base text-brand-600">
              While this is a free social game with no real money involved, the content is designed for adult audiences
              only.
            </p>
          </div>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
          <Button
            type="button"
            variant="outline"
            className="border-red-300 text-red-600 hover:bg-red-50"
            onClick={handleDeny}
          >
            No, I am under 18
          </Button>
          <Button type="button" className="bg-brand-600 hover:bg-brand-700 text-white" onClick={handleVerify}>
            Yes, I am 18 or older
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
