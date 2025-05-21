"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  BirdIcon as Helicopter,
  Mountain,
  Compass,
  Radio,
  AmbulanceIcon as FirstAid,
  TelescopeIcon as Binoculars,
  AlertTriangle,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function RescueTools() {
  const [warningOpen, setWarningOpen] = useState(false)
  const router = useRouter()

  const handleStartGame = () => {
    setWarningOpen(true)
  }

  const handleConfirm = () => {
    setWarningOpen(false)
    router.push("/game")
  }

  const tools = [
    {
      name: "Rescue Helicopter",
      description: "Navigate through mountain peaks to locate and extract stranded hikers",
      icon: Helicopter,
      color: "text-red-500",
      animation: "hover:scale-110 hover:rotate-12 transition-all duration-300",
    },
    {
      name: "Mountain Gear",
      description: "Essential climbing equipment for reaching hikers in difficult terrain",
      icon: Mountain,
      color: "text-blue-700",
      animation: "hover:scale-110 hover:translate-y-1 transition-all duration-300",
    },
    {
      name: "Navigation Tools",
      description: "GPS and compass to find your way through the Canadian Rockies",
      icon: Compass,
      color: "text-green-600",
      animation: "hover:scale-110 hover:rotate-180 transition-all duration-700",
    },
    {
      name: "Communication Radio",
      description: "Stay in touch with base camp and coordinate rescue operations",
      icon: Radio,
      color: "text-purple-600",
      animation: "hover:scale-110 hover:translate-x-1 transition-all duration-300",
    },
    {
      name: "First Aid Kit",
      description: "Provide emergency medical assistance to injured hikers",
      icon: FirstAid,
      color: "text-red-600",
      animation: "hover:scale-110 hover:pulse transition-all duration-300",
    },
    {
      name: "Search Equipment",
      description: "Binoculars and thermal imaging to locate lost hikers in the wilderness",
      icon: Binoculars,
      color: "text-amber-600",
      animation: "hover:scale-110 hover:-translate-y-1 transition-all duration-300",
    },
  ]

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Rescue Tools & Operations</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          As a Rescue Hero in the Canadian Rockies, you'll use specialized equipment to save lives in challenging
          mountain environments. Master these tools to become the ultimate mountain rescuer!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center ${tool.animation}`}
                >
                  <tool.icon className={`h-8 w-8 ${tool.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-center">{tool.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Rescue Locations</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Your rescue missions will take you through the breathtaking Canadian Rockies, from snow-capped peaks and
            dense forests to frozen lakes and treacherous ice fields. Each location presents unique challenges that will
            test your rescue skills.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
              <Mountain className="h-10 w-10 mx-auto text-white mb-2 animate-pulse" />
              <p className="font-medium">Mountain Peaks</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 mx-auto text-white mb-2 animate-pulse"
              >
                <path d="M8 3v4l-4 3-4-3v-4" />
                <path d="M4 7v13" />
                <path d="M8 17l-4 4-4-4" />
              </svg>
              <p className="font-medium">Frozen Lakes</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 mx-auto text-white mb-2 animate-pulse"
              >
                <path d="M17 22V2L7 7l10 5-10 5z" />
              </svg>
              <p className="font-medium">Dense Forests</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 mx-auto text-white mb-2 animate-pulse"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
              <p className="font-medium">Ice Fields</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-6 animate-bounce relative"
            onClick={handleStartGame}
          >
            <span className="absolute -top-2 -right-2 bg-blue-900 text-yellow-300 text-xs font-bold px-2 py-1 rounded-full border-2 border-white">
              18+
            </span>
            Start Rescue Mission
          </Button>
        </div>
      </div>

      {/* Warning Modal */}
      <Dialog open={warningOpen} onOpenChange={setWarningOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              Important Notice
            </DialogTitle>
            <DialogDescription>Please read and confirm before starting your rescue mission.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4 py-4">
            <div className="bg-red-50 p-4 rounded-md text-sm text-red-700">
              <p className="font-bold mb-2">This is a free social game:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>It is not a casino</li>
                <li>No real money can be won or lost</li>
                <li>No prizes are offered</li>
                <li>For entertainment purposes only</li>
                <li>Intended for users 18+</li>
              </ul>
              <p className="mt-3">
                If you ever feel your gaming habits are becoming concerning, please contact support resources like{" "}
                <a
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  BeGambleAware
                </a>
                .
              </p>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
            <Button type="button" variant="outline" onClick={() => setWarningOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleConfirm}>
              I Understand, Start Mission
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
