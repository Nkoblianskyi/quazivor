"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Squirrel, Trees, Building2, Apple, Trash2, Droplets, AlertTriangle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function RaccoonTools() {
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
      name: "Forest Foraging",
      description: "Find natural food sources like berries, nuts, and fruits in the forest",
      icon: Trees,
      color: "text-green-600",
      animation: "hover:scale-110 hover:rotate-12 transition-all duration-300",
    },
    {
      name: "Urban Scavenging",
      description: "Search through urban areas for discarded food and other treasures",
      icon: Building2,
      color: "text-gray-700",
      animation: "hover:scale-110 hover:translate-y-1 transition-all duration-300",
    },
    {
      name: "Food Collection",
      description: "Gather and store food for times when resources are scarce",
      icon: Apple,
      color: "text-red-600",
      animation: "hover:scale-110 hover:rotate-180 transition-all duration-700",
    },
    {
      name: "Trash Exploration",
      description: "Master the art of finding valuable items in trash cans",
      icon: Trash2,
      color: "text-amber-600",
      animation: "hover:scale-110 hover:translate-x-1 transition-all duration-300",
    },
    {
      name: "Water Finding",
      description: "Locate clean water sources essential for survival",
      icon: Droplets,
      color: "text-blue-600",
      animation: "hover:scale-110 hover:pulse transition-all duration-300",
    },
    {
      name: "Raccoon Skills",
      description: "Use your natural raccoon abilities like dexterous paws and keen smell",
      icon: Squirrel,
      color: "text-amber-700",
      animation: "hover:scale-110 hover:-translate-y-1 transition-all duration-300",
    },
  ]

  return (
    <section className="py-16 bg-brand-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Raccoon Survival Skills</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          As an Urban Raccoon, you'll need to master various survival skills to thrive in both forest and city
          environments. Learn to forage, scavenge, and adapt to become the ultimate survivor!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center ${tool.animation}`}
                >
                  <tool.icon className={`h-8 w-8 ${tool.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-center">{tool.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-brand-500 to-brand-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Survival Environments</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Your raccoon adventures will take you through diverse environments, from lush forests to bustling city
            streets. Each location presents unique challenges and opportunities for finding food and shelter.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
              <Trees className="h-10 w-10 mx-auto text-white mb-2 animate-pulse" />
              <p className="font-medium">Dense Forest</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
              <Building2 className="h-10 w-10 mx-auto text-white mb-2 animate-pulse" />
              <p className="font-medium">Urban Streets</p>
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
                <path d="M8 3H2v15h6V3z" />
                <path d="M22 3h-6v15h6V3z" />
                <path d="M2 18h20" />
                <path d="M7 21l5-3 5 3" />
              </svg>
              <p className="font-medium">Suburban Parks</p>
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
                <path d="M12 2v8" />
                <path d="M4 10h16" />
                <path d="M2 8.5V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.5" />
                <path d="M6 16v2" />
                <path d="M18 16v2" />
              </svg>
              <p className="font-medium">Restaurant Alleys</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-accent-500 hover:bg-accent-600 text-white text-xl px-8 py-6 animate-bounce relative"
            onClick={handleStartGame}
          >
            <span className="absolute -top-2 -right-2 bg-brand-800 text-brand-100 text-xs font-bold px-2 py-1 rounded-full border-2 border-white">
              18+
            </span>
            Start Foraging Adventure
          </Button>
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
              </p>
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
