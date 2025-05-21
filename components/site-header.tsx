"use client"

import { useState } from "react"
import Link from "next/link"
import { Squirrel, Menu, AlertTriangle } from "lucide-react" // Changed from Mountain to Squirrel as it's closest to a raccoon
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [warningOpen, setWarningOpen] = useState(false)
  const router = useRouter()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/contact", label: "Contact" },
    { href: "/game", label: "Play Game" },
  ]

  const handleGameLinkClick = (e, href) => {
    if (href === "/game") {
      e.preventDefault()
      setWarningOpen(true)
    }
  }

  const handleConfirm = () => {
    setWarningOpen(false)
    router.push("/game")
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 mr-2 bg-brand-600 rounded-md flex items-center justify-center">
                <Squirrel className="h-7 w-7 text-white" />
              </div>
              <span className="font-bold text-xl text-brand-600">Quazivor</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-brand-700 hover:text-brand-900 font-medium">
              Home
            </Link>
            <Link href="/disclaimer" className="text-brand-700 hover:text-brand-900 font-medium">
              Disclaimer
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">18+</div>
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center text-brand-600 hover:bg-brand-100">
                    <Menu className="h-5 w-5 mr-1" />
                    <span>Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] sm:w-[320px] bg-gradient-to-b from-brand-50 to-brand-100 border-l border-brand-200"
                >
                  <SheetHeader className="border-b border-brand-200 pb-4 mb-6">
                    <SheetTitle className="flex items-center">
                      <div className="w-10 h-10 mr-3 bg-brand-600 rounded-full flex items-center justify-center">
                        <Squirrel className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xl font-bold text-brand-700">Quazivor</span>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-1">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="flex py-3 px-4 text-brand-800 hover:bg-brand-200/50 rounded-lg transition-colors"
                          onClick={(e) => {
                            handleGameLinkClick(e, link.href)
                            if (link.href !== "/game") {
                              setIsOpen(false)
                            }
                          }}
                        >
                          {link.label === "Play Game" ? (
                            <div className="flex items-center">
                              {link.label}
                              <span className="ml-2 bg-brand-700 text-brand-100 text-xs px-2 py-1 rounded-full">
                                18+
                              </span>
                            </div>
                          ) : (
                            link.label
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-8 pt-4 border-t border-brand-200">
                    <div className="bg-brand-200/50 p-4 rounded-lg">
                      <p className="text-sm text-brand-800 font-medium">
                        For entertainment purposes only. No real money. No prizes. Ages 18+.
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      {/* Warning Modal */}
      <Dialog open={warningOpen} onOpenChange={setWarningOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-brand-500 mr-2" />
              Important Notice
            </DialogTitle>
            <DialogDescription>Please read and confirm before starting your raccoon adventure.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4 py-4">
            <div className="bg-brand-50 p-4 rounded-md text-sm text-brand-700">
              <p className="font-bold mb-2">This is a free social game:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>It is not a casino</li>
                <li>No real money can be won or lost</li>
                <li>No prizes are offered</li>
                <li>For entertainment purposes only</li>
                <li>Intended for users 18+</li>
              </ul>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
            <Button type="button" variant="outline" onClick={() => setWarningOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleConfirm} className="bg-brand-500 hover:bg-brand-600 text-white">
              I Understand, Start Adventure
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  )
}
