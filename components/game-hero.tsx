"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"

export default function GameHero() {
  const [warningOpen, setWarningOpen] = useState(false)
  const router = useRouter()

  const handleStartGame = () => {
    setWarningOpen(true)
  }

  const handleConfirm = () => {
    setWarningOpen(false)
    router.push("/game")
  }

  return (
    <section className="relative bg-gradient-to-b from-amber-800 to-amber-600 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Urban Raccoon Survival</h1>
            <p className="text-xl mb-8 text-amber-100">
              Guide your raccoon through the challenges of forest and city life. Forage for food, avoid dangers, and
              become the ultimate urban survivor!
            </p>
            <div className="flex flex-col items-center md:items-start">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-xl px-8 py-6"
                onClick={handleStartGame}
              >
                Start Game
              </Button>
              <p className="mt-3 text-sm font-bold text-yellow-300 bg-amber-900 px-3 py-2 rounded-md inline-block">
                For entertainment purposes only. No real money. No prizes. Ages 18+.
              </p>
            </div>
          </div>
          <div className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center">
            <div className="w-full h-full relative">
              <RaccoonIllustration />
            </div>
          </div>
        </div>
      </div>

      {/* Leaf effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{ backgroundImage: "url('/leaf-pattern.png')", backgroundSize: "100px" }}
        ></div>
      </div>

      {/* Warning Modal */}
      <Dialog open={warningOpen} onOpenChange={setWarningOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              Important Notice
            </DialogTitle>
            <DialogDescription>Please read and confirm before continuing to the game.</DialogDescription>
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
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
            <Button type="button" variant="outline" onClick={() => setWarningOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleConfirm}>
              I Understand, Continue to Game
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

function RaccoonIllustration() {
  return (
    <div className="w-full h-full relative">
      {/* Background Scene */}
      <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Sky */}
        <rect x="0" y="0" width="800" height="600" fill="#4b5563" opacity="0.3" />

        {/* City Skyline */}
        <path
          d="M0,250 L50,250 L50,150 L100,150 L100,200 L150,200 L150,100 L200,100 L200,180 L250,180 L250,120 L300,120 L300,200 L350,200 L350,150 L400,150 L400,220 L450,220 L450,170 L500,170 L500,250 L550,250 L550,180 L600,180 L600,220 L650,220 L650,150 L700,150 L700,250 L750,250 L750,200 L800,200 L800,600 L0,600 Z"
          fill="#1f2937"
        />

        {/* Forest in the background */}
        <path d="M0,300 L800,300 L800,600 L0,600 Z" fill="#065f46" />

        {/* Trees */}
        <g className="tree" transform="translate(150, 450) scale(0.7)">
          <path d="M0,0 L20,-30 L-20,-30 Z" fill="#064e3b" />
          <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#064e3b" />
          <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#064e3b" />
          <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
        </g>

        <g className="tree" transform="translate(200, 470) scale(0.5)">
          <path d="M0,0 L20,-30 L-20,-30 Z" fill="#064e3b" />
          <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#064e3b" />
          <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#064e3b" />
          <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
        </g>

        <g className="tree" transform="translate(600, 460) scale(0.6)">
          <path d="M0,0 L20,-30 L-20,-30 Z" fill="#064e3b" />
          <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#064e3b" />
          <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#064e3b" />
          <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
        </g>

        <g className="tree" transform="translate(650, 480) scale(0.4)">
          <path d="M0,0 L20,-30 L-20,-30 Z" fill="#064e3b" />
          <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#064e3b" />
          <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#064e3b" />
          <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
        </g>

        {/* Raccoon Character */}
        <g transform="translate(400, 400)">
          {/* Raccoon Body */}
          <ellipse cx="0" cy="0" rx="40" ry="25" fill="#4b5563" />

          {/* Raccoon Head */}
          <circle cx="30" cy="-15" r="25" fill="#4b5563" />

          {/* Raccoon Face Mask */}
          <path d="M15,-25 C25,-35 35,-35 45,-25 C45,-15 35,-5 25,-5 C15,-5 5,-15 15,-25" fill="#e5e7eb" />

          {/* Raccoon Eyes */}
          <circle cx="25" cy="-20" r="5" fill="#1f2937" />
          <circle cx="35" cy="-20" r="5" fill="#1f2937" />
          <circle cx="25" cy="-22" r="2" fill="white" />
          <circle cx="35" cy="-22" r="2" fill="white" />

          {/* Raccoon Nose */}
          <circle cx="30" cy="-15" r="3" fill="#1f2937" />

          {/* Raccoon Ears */}
          <circle cx="15" cy="-30" r="8" fill="#4b5563" />
          <circle cx="45" cy="-30" r="8" fill="#4b5563" />

          {/* Raccoon Tail */}
          <path d="M-40,0 C-60,20 -60,-20 -40,0" stroke="#4b5563" strokeWidth="10" fill="none" />
          <path d="M-40,0 C-60,20 -60,-20 -40,0" stroke="#9ca3af" strokeWidth="8" strokeDasharray="5,5" fill="none" />

          {/* Raccoon Legs */}
          <rect x="-30" y="15" width="10" height="20" rx="5" fill="#4b5563" />
          <rect x="-10" y="15" width="10" height="20" rx="5" fill="#4b5563" />
          <rect x="10" y="15" width="10" height="20" rx="5" fill="#4b5563" />
          <rect x="30" y="15" width="10" height="20" rx="5" fill="#4b5563" />

          {/* Raccoon Paws */}
          <circle cx="-25" cy="35" r="5" fill="#1f2937" />
          <circle cx="-5" cy="35" r="5" fill="#1f2937" />
          <circle cx="15" cy="35" r="5" fill="#1f2937" />
          <circle cx="35" cy="35" r="5" fill="#1f2937" />

          {/* Food Item - Apple */}
          <circle cx="60" cy="20" r="10" fill="#dc2626" />
          <path d="M60,10 C65,5 70,10 65,15" stroke="#065f46" strokeWidth="2" fill="none" />
        </g>

        {/* Trash Can */}
        <g transform="translate(600, 500)">
          <rect x="-20" y="-40" width="40" height="50" rx="5" fill="#6b7280" />
          <rect x="-25" y="-45" width="50" height="10" rx="5" fill="#9ca3af" />
          <path d="M-15,-30 L-15,0 M0,-30 L0,0 M15,-30 L15,0" stroke="#4b5563" strokeWidth="2" strokeDasharray="2,2" />
        </g>

        {/* City Elements */}
        <g transform="translate(200, 350)">
          {/* Fire Hydrant */}
          <rect x="-5" y="-20" width="10" height="20" fill="#dc2626" />
          <rect x="-10" y="-25" width="20" height="5" rx="2" fill="#dc2626" />
          <rect x="-10" y="-5" width="20" height="5" rx="2" fill="#dc2626" />
        </g>

        {/* Street Lamp */}
        <g transform="translate(500, 350)">
          <rect x="-2" y="-50" width="4" height="50" fill="#6b7280" />
          <circle cx="0" cy="-55" r="8" fill="#fcd34d" />
          <circle cx="0" cy="-55" r="10" fill="none" stroke="#6b7280" strokeWidth="2" />
        </g>
      </svg>
    </div>
  )
}
