"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, ChevronLeft, AlertTriangle } from "lucide-react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const screenshots = [
  {
    id: "forest",
    title: "Forest Foraging",
    description:
      "Explore the lush forest environment to find berries, nuts, and other natural food sources. Watch out for predators!",
    images: ["/screenshots/forest-1.png", "/screenshots/forest-2.png", "/screenshots/forest-3.png"],
  },
  {
    id: "city",
    title: "Urban Scavenging",
    description:
      "Navigate through city streets, parks, and alleys to find discarded food and treasures. Avoid humans and traffic!",
    images: ["/screenshots/city-1.png", "/screenshots/city-2.png", "/screenshots/city-3.png"],
  },
  {
    id: "night",
    title: "Night Adventures",
    description:
      "Use your nocturnal nature to explore when most humans are asleep. Your night vision gives you an advantage!",
    images: ["/raccoon-night-adventure.png", "/raccoon-night-city-foraging.png", "/raccoon-night-stealth.png"],
  },
]

export default function GameplayPreview() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [warningOpen, setWarningOpen] = useState(false)
  const router = useRouter()

  const nextImage = (currentTab: string) => {
    const tab = screenshots.find((s) => s.id === currentTab)
    if (!tab) return
    const maxIndex = tab.images.length - 1
    setCurrentImageIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  const prevImage = (currentTab: string) => {
    const tab = screenshots.find((s) => s.id === currentTab)
    if (!tab) return
    const maxIndex = tab.images.length - 1
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const handleStartGame = () => {
    setWarningOpen(true)
  }

  const handleConfirm = () => {
    setWarningOpen(false)
    router.push("/game")
  }

  return (
    <section className="py-20 bg-gradient-to-br from-brand-50 to-brand-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Gameplay Preview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different environments and master various survival challenges
          </p>
        </motion.div>

        <Tabs defaultValue="forest" className="w-full">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <TabsList className="flex flex-col h-auto bg-transparent space-y-2 w-full">
                {screenshots.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="w-full justify-start text-left py-4 px-6 data-[state=active]:bg-brand-100 data-[state=active]:text-brand-900 border border-brand-200 rounded-lg"
                  >
                    <div>
                      <h3 className="text-lg font-bold">{tab.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 whitespace-normal pr-2">
                        {tab.description.length > 60 ? `${tab.description.substring(0, 60)}...` : tab.description}
                      </p>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="md:w-2/3">
              {screenshots.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-xl overflow-hidden shadow-xl border-8 border-white h-[300px] sm:h-[400px] md:h-[500px]"
                  >
                    {/* Enhanced image display with animation and fallback */}
                    <div className="absolute inset-0 w-full h-full">
                      <Image
                        src={
                          tab.images[currentImageIndex] ||
                          "/placeholder.svg?height=500&width=800&query=raccoon+game+scene" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt={`${tab.title} screenshot ${currentImageIndex + 1}`}
                        fill
                        priority={tab.id === "forest" || tab.id === "city"}
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.currentTarget.src = "/raccoon-game-scene.png"
                        }}
                      />
                      {tab.id === "night" && (
                        <div className="absolute inset-0 pointer-events-none">
                          {/* Stars effect */}
                          {Array.from({ length: 30 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                              style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random() * 0.7 + 0.3,
                                animationDuration: `${Math.random() * 3 + 2}s`,
                                animationDelay: `${Math.random() * 2}s`,
                              }}
                            />
                          ))}
                          {/* Moon glow */}
                          <div className="absolute top-[10%] right-[10%] w-16 h-16 rounded-full bg-blue-100/30 blur-xl"></div>
                        </div>
                      )}

                      {/* Animated overlay for image loading */}
                      <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="absolute inset-0 bg-brand-200 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 border-4 border-brand-600 border-t-transparent rounded-full animate-spin"></div>
                      </motion.div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-indigo-900/30 to-transparent flex items-end">
                      <div className="p-4 sm:p-6 text-white w-full backdrop-blur-sm bg-black/30 rounded-b-lg border-t border-indigo-500/20">
                        <motion.h3
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2"
                        >
                          {tab.title}
                        </motion.h3>
                        <motion.p
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-white/90 text-sm sm:text-base mb-4 leading-tight overflow-hidden max-w-full"
                        >
                          {tab.description}
                        </motion.p>

                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            {tab.images.map((_, idx) => (
                              <div
                                key={idx}
                                className={`w-2 h-2 rounded-full ${
                                  idx === currentImageIndex ? "bg-white" : "bg-white/50"
                                }`}
                              />
                            ))}
                          </div>

                          <div className="flex space-x-2">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="text-white hover:bg-white/20"
                              onClick={() => prevImage(tab.id)}
                            >
                              <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="text-white hover:bg-white/20"
                              onClick={() => nextImage(tab.id)}
                            >
                              <ChevronRight className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>

        <div className="mt-12 text-center">
          <Button
            onClick={handleStartGame}
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Start Adventure Now
          </Button>
          <p className="mt-4 text-sm bg-blue-50 border border-blue-200 text-blue-800 p-3 rounded-lg max-w-2xl mx-auto">
            <strong>Important Notice:</strong> This is an educational entertainment simulation only. This adventure game
            involves virtual foraging and survival challenges with no real-world value. No actual currency is involved
            at any point. No rewards with monetary value are offered. This is a social educational game intended for
            adults 18+ only. If you have concerns about gaming habits, please visit responsible gaming support
            resources.
          </p>
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
