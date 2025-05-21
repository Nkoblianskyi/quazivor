"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

export default function HeroSection() {
  const [warningOpen, setWarningOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const router = useRouter()

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleStartGame = () => {
    setWarningOpen(true)
  }

  const handleConfirm = () => {
    setWarningOpen(false)
    router.push("/game")
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-brand-700 via-brand-600 to-brand-500">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* City Skyline - Back Layer */}
        <div
          className="absolute bottom-0 left-0 w-full h-[40%] bg-gray-900"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            maskImage: 'url("/city-skyline.png")',
            maskSize: "cover",
            maskPosition: "bottom",
            WebkitMaskImage: 'url("/city-skyline.png")',
            WebkitMaskSize: "cover",
            WebkitMaskPosition: "bottom",
          }}
        />

        {/* Trees - Middle Layer */}
        <div
          className="absolute bottom-0 left-0 w-full h-[30%] bg-green-900"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            maskImage: 'url("/forest-silhouette.png")',
            maskSize: "cover",
            maskPosition: "bottom",
            WebkitMaskImage: 'url("/forest-silhouette.png")',
            WebkitMaskSize: "cover",
            WebkitMaskPosition: "bottom",
          }}
        />

        {/* Moon */}
        <div
          className="absolute top-[15%] right-[15%] w-20 h-20 rounded-full bg-yellow-100 opacity-90"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />

        {/* Stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Urban <span className="text-accent-300">Raccoon</span> Survival
          </h1>
          <p className="text-xl mb-8 text-brand-100">
            Master the art of survival as a clever raccoon navigating between forest wilderness and urban jungle.
            Forage, scavenge, and outsmart dangers!
          </p>
          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={handleStartGame}
            >
              Play Now
            </Button>
          </div>
          <p className="text-sm font-medium text-brand-200 bg-brand-800/50 px-4 py-2 rounded-lg inline-block">
            For entertainment purposes only. No real money. Ages 18+.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-brand-300 rounded-full flex justify-center">
            <div className="w-2 h-2 bg-brand-300 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
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
              <p className="font-bold mb-2">This is a free social platform:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>This is not a gambling game</li>
                <li>No real money</li>
                <li>No winnings</li>
                <li>Everything is virtual and has no value</li>
                <li>Completely free to use</li>
                <li>Exclusively for entertainment purposes</li>
                <li>For users 18+</li>
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
    </section>
  )
}
