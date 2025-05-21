"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  RefreshCw,
  Trees,
  Building2,
  Info,
  Leaf,
  Droplets,
  Bird,
  Squirrel,
  Trash2,
  ShoppingBag,
  Coffee,
  Sun,
  CloudRain,
  Wind,
  Snowflake,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

// Forest resources
const FOREST_RESOURCES = [
  { name: "Berry", icon: <div className="text-3xl">🍇</div>, points: 5, rarity: 0.2 },
  { name: "Apple", icon: <div className="text-3xl">🍎</div>, points: 3, rarity: 0.3 },
  { name: "Mushroom", icon: <div className="text-3xl">🍄</div>, points: 4, rarity: 0.25 },
  { name: "Water", icon: <Droplets className="h-8 w-8 text-blue-500" />, points: 2, rarity: 0.4 },
  { name: "Acorn", icon: <div className="text-3xl">🌰</div>, points: 6, rarity: 0.15 },
  { name: "Leaf", icon: <Leaf className="h-8 w-8 text-green-500" />, points: -1, rarity: 0.5 },
  { name: "Bird", icon: <Bird className="h-8 w-8 text-red-400" />, points: -3, rarity: 0.2 },
  { name: "Squirrel", icon: <Squirrel className="h-8 w-8 text-amber-600" />, points: -2, rarity: 0.3 },
]

// City resources
const CITY_RESOURCES = [
  { name: "Pizza", icon: <div className="text-3xl">🍕</div>, points: 7, rarity: 0.15 },
  { name: "Sandwich", icon: <div className="text-3xl">🥪</div>, points: 4, rarity: 0.25 },
  { name: "Trash", icon: <Trash2 className="h-8 w-8 text-gray-500" />, points: 2, rarity: 0.4 },
  { name: "Shopping Bag", icon: <ShoppingBag className="h-8 w-8 text-purple-500" />, points: 5, rarity: 0.2 },
  { name: "Coffee", icon: <Coffee className="h-8 w-8 text-amber-700" />, points: 3, rarity: 0.3 },
  { name: "Car", icon: <div className="text-3xl">🚗</div>, points: -4, rarity: 0.2 },
  { name: "Dog", icon: <div className="text-3xl">🐕</div>, points: -3, rarity: 0.25 },
  { name: "Person", icon: <div className="text-3xl">🚶</div>, points: -2, rarity: 0.3 },
]

// Weather conditions
const WEATHER_CONDITIONS = [
  { name: "Sunny", icon: Sun, modifier: 1, description: "Perfect foraging conditions" },
  { name: "Rainy", icon: CloudRain, modifier: 0.8, description: "Wet conditions make finding food harder" },
  { name: "Windy", icon: Wind, modifier: 0.9, description: "Wind scatters food and makes foraging difficult" },
  { name: "Snowy", icon: Snowflake, modifier: 0.7, description: "Snow covers food sources, survival is challenging" },
]

export default function GamePage() {
  // Game state
  const [score, setScore] = useState(100)
  const [isSearching, setIsSearching] = useState(false)
  const [environment, setEnvironment] = useState("forest")
  const [currentWeather, setCurrentWeather] = useState(WEATHER_CONDITIONS[0])
  const [resourcesFound, setResourcesFound] = useState([])
  const [gameHistory, setGameHistory] = useState([])
  const historyRef = useRef(null)
  const [grid, setGrid] = useState(generateEmptyGrid())
  const [showInfoModal, setShowInfoModal] = useState(false)

  // Initialize game
  useEffect(() => {
    // Change weather every 3 minutes
    const weatherInterval = setInterval(() => {
      const randomWeather = WEATHER_CONDITIONS[Math.floor(Math.random() * WEATHER_CONDITIONS.length)]
      setCurrentWeather(randomWeather)
      addToHistory(`Weather changed to ${randomWeather.name}`)
    }, 180000)

    return () => clearInterval(weatherInterval)
  }, [])

  // Scroll to bottom of history when updated
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight
    }
  }, [gameHistory])

  // Generate empty 3x3 grid
  function generateEmptyGrid() {
    return Array(3)
      .fill()
      .map(() => Array(3).fill(null))
  }

  // Add entry to game history
  const addToHistory = (message) => {
    const timestamp = new Date().toLocaleTimeString()
    setGameHistory([...gameHistory, { message, timestamp }])
  }

  // Change environment
  const changeEnvironment = (newEnvironment) => {
    setEnvironment(newEnvironment)
    addToHistory(`Moved to ${newEnvironment} environment`)
  }

  // Get random resource based on environment
  const getRandomResource = () => {
    const resources = environment === "forest" ? FOREST_RESOURCES : CITY_RESOURCES

    // Use rarity to determine probability
    const totalRarity = resources.reduce((sum, resource) => sum + resource.rarity, 0)
    let random = Math.random() * totalRarity

    for (const resource of resources) {
      random -= resource.rarity
      if (random <= 0) {
        return resource
      }
    }

    return resources[0] // Fallback
  }

  // Fill grid with random resources
  const fillGrid = () => {
    const newGrid = generateEmptyGrid()

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        newGrid[row][col] = getRandomResource()
      }
    }

    return newGrid
  }

  // Calculate points from grid
  const calculatePoints = (grid) => {
    let totalPoints = 0
    const foundResources = []

    // Check each cell
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row][col]) {
          const resource = grid[row][col]
          totalPoints += resource.points
          foundResources.push(resource)
        }
      }
    }

    // Apply weather modifier
    totalPoints = Math.floor(totalPoints * currentWeather.modifier)

    return { totalPoints, foundResources }
  }

  // Main game search function
  const searchForResources = () => {
    if (isSearching) return

    // Check if player has enough points
    if (score < 10) {
      addToHistory("Not enough points for exploration!")
      return
    }

    setIsSearching(true)
    setScore(score - 10) // Cost to search

    // Add to history
    addToHistory(`Started exploring the ${environment}`)

    // Simulate searching
    setTimeout(() => {
      const newGrid = fillGrid()
      setGrid(newGrid)

      // Calculate results
      const { totalPoints, foundResources } = calculatePoints(newGrid)

      // Update score
      setScore((score) => score + totalPoints)

      // Update resources found
      setResourcesFound([...resourcesFound, ...foundResources])

      // Log findings
      if (totalPoints > 0) {
        addToHistory(`Found resources worth ${totalPoints} points!`)
      } else if (totalPoints < 0) {
        addToHistory(`Encountered obstacles, lost ${Math.abs(totalPoints)} points.`)
      } else {
        addToHistory("Found nothing of value this time.")
      }

      setIsSearching(false)
    }, 1500)
  }

  return (
    <div className="py-8 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Urban Raccoon Adventure</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => setShowInfoModal(true)}>
              <Info className="h-4 w-4 mr-1" />
              About
            </Button>
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">18+</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Game Area - 2 columns wide */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center bg-amber-100 px-3 py-1 rounded-lg mr-3">
                            <currentWeather.icon className="h-4 w-4 text-amber-600 mr-1" />
                            <span className="text-sm font-medium">{currentWeather.name}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{currentWeather.description}</p>
                          <p className="text-sm text-gray-500">Resource modifier: {currentWeather.modifier}x</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <div className="bg-amber-600 text-white px-4 py-2 rounded-lg">
                      <p className="text-sm">Points</p>
                      <p className="text-2xl font-bold">{score}</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 italic max-w-xs text-right">
                    Free social simulation game. No real money. For entertainment only. Ages 18+.
                  </p>
                </div>

                {/* Environment Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Choose Environment</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant={environment === "forest" ? "default" : "outline"}
                      className={`h-auto py-3 ${environment === "forest" ? "bg-green-600" : ""}`}
                      onClick={() => changeEnvironment("forest")}
                      disabled={isSearching}
                    >
                      <div className="flex flex-col items-center">
                        <Trees className="h-6 w-6 mb-1" />
                        <span>Forest</span>
                      </div>
                    </Button>

                    <Button
                      variant={environment === "city" ? "default" : "outline"}
                      className={`h-auto py-3 ${environment === "city" ? "bg-slate-600" : ""}`}
                      onClick={() => changeEnvironment("city")}
                      disabled={isSearching}
                    >
                      <div className="flex flex-col items-center">
                        <Building2 className="h-6 w-6 mb-1" />
                        <span>City</span>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Main Grid */}
                <div
                  className={`bg-gradient-to-b ${environment === "forest" ? "from-green-600 to-green-800" : "from-slate-600 to-slate-800"} p-6 rounded-xl mb-6`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {environment === "forest" ? "Forest Exploration" : "City Exploration"}
                    </h3>
                    <Badge className="bg-amber-200 text-amber-800">{currentWeather.name} Weather</Badge>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-3 gap-2">
                      {grid.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                          <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`bg-white/20 rounded-lg overflow-hidden flex items-center justify-center h-24 ${isSearching ? "animate-pulse" : ""}`}
                          >
                            {cell ? (
                              <div className="flex flex-col items-center">
                                {cell.icon}
                                <span className="text-white text-xs mt-1">
                                  {cell.points > 0 ? `+${cell.points}` : cell.points}
                                </span>
                              </div>
                            ) : (
                              <div className="text-white/30 text-xs">?</div>
                            )}
                          </div>
                        )),
                      )}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white text-xl py-6"
                    onClick={searchForResources}
                    disabled={isSearching || score < 10}
                  >
                    {isSearching ? (
                      <div className="flex items-center">
                        <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                        Searching...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        {environment === "forest" ? (
                          <>
                            <Trees className="h-5 w-5 mr-2" />
                            Explore Forest (10 points)
                          </>
                        ) : (
                          <>
                            <Building2 className="h-5 w-5 mr-2" />
                            Explore City (10 points)
                          </>
                        )}
                      </div>
                    )}
                  </Button>
                </div>

                {/* Activity Log */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Activity Log:</h3>
                  <div className="h-32 overflow-y-auto text-sm space-y-1 bg-white p-2 rounded-lg" ref={historyRef}>
                    {gameHistory.length === 0 ? (
                      <p className="text-gray-500 italic">No activity yet. Start exploring!</p>
                    ) : (
                      gameHistory.map((entry, index) => (
                        <div key={index} className="text-xs">
                          <span className="text-gray-500">{entry.timestamp}</span>: {entry.message}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Side Panel - 1 column wide */}
          <div className="lg:col-span-1">
            <Tabs defaultValue="guide" className="w-full">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="guide">Guide</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="guide" className="space-y-4">
                <Card>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">How to Play</h3>
                    <div className="space-y-3 text-sm">
                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                        <h4 className="font-bold flex items-center">
                          <span className="text-amber-600 mr-2">1.</span> Choose Your Environment
                        </h4>
                        <p className="mt-1">
                          Select between forest and city environments. Each has unique resources to discover.
                        </p>
                      </div>

                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                        <h4 className="font-bold flex items-center">
                          <span className="text-amber-600 mr-2">2.</span> Explore for Resources
                        </h4>
                        <p className="mt-1">
                          Spend 10 points to search for resources. You'll discover various items that can add or
                          subtract points.
                        </p>
                      </div>

                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                        <h4 className="font-bold flex items-center">
                          <span className="text-amber-600 mr-2">3.</span> Watch the Weather
                        </h4>
                        <p className="mt-1">
                          Weather conditions affect your findings. Sunny days are best for foraging!
                        </p>
                      </div>

                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                        <h4 className="font-bold flex items-center">
                          <span className="text-amber-600 mr-2">4.</span> Collect Points
                        </h4>
                        <p className="mt-1">
                          Accumulate as many points as possible to become the ultimate urban raccoon!
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
                      <h4 className="font-bold text-blue-700">Educational Note:</h4>
                      <p className="mt-1 text-sm">
                        Raccoons are highly adaptable animals that can thrive in both forest and urban environments.
                        They have dexterous front paws and can remember solutions to tasks for up to three years!
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="space-y-4">
                <Card>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Forest Resources</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {FOREST_RESOURCES.map((resource, index) => (
                        <div
                          key={index}
                          className="flex items-center p-2 bg-green-50 rounded-lg border border-green-100"
                        >
                          <div className="mr-2">{resource.icon}</div>
                          <div>
                            <p className="font-medium text-sm">{resource.name}</p>
                            <p className={`text-xs ${resource.points >= 0 ? "text-green-600" : "text-red-600"}`}>
                              {resource.points >= 0 ? `+${resource.points}` : resource.points} points
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold mb-2 mt-4">City Resources</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {CITY_RESOURCES.map((resource, index) => (
                        <div
                          key={index}
                          className="flex items-center p-2 bg-slate-50 rounded-lg border border-slate-100"
                        >
                          <div className="mr-2">{resource.icon}</div>
                          <div>
                            <p className="font-medium text-sm">{resource.name}</p>
                            <p className={`text-xs ${resource.points >= 0 ? "text-green-600" : "text-red-600"}`}>
                              {resource.points >= 0 ? `+${resource.points}` : resource.points} points
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold mb-2 mt-4">Weather Effects</h3>
                    <div className="space-y-2">
                      {WEATHER_CONDITIONS.map((weather, index) => (
                        <div key={index} className="flex items-center p-2 bg-blue-50 rounded-lg border border-blue-100">
                          <weather.icon className="h-6 w-6 text-blue-500 mr-2" />
                          <div>
                            <p className="font-medium text-sm">{weather.name}</p>
                            <p className="text-xs text-gray-600">Point modifier: {weather.modifier}x</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      <Dialog open={showInfoModal} onOpenChange={setShowInfoModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Info className="h-5 w-5 text-amber-500 mr-2" />
              About Urban Raccoon Adventure
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col space-y-4 py-4">
            <div className="bg-amber-50 p-4 rounded-md text-sm">
              <p className="font-bold mb-2">This is a free social simulation game:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>For entertainment purposes only</li>
                <li>No real money involved</li>
                <li>No prizes or rewards</li>
                <li>Everything is virtual with no monetary value</li>
                <li>Completely free to use</li>
                <li>For users 18+</li>
              </ul>
              <p className="mt-3">
                Urban Raccoon Adventure is an educational simulation that teaches about raccoon behaviour and survival
                strategies in different environments.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-md text-sm">
              <p className="font-bold mb-2">Educational Value:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Learn about raccoon adaptability in different environments</li>
                <li>Understand foraging strategies of urban wildlife</li>
                <li>Discover how weather affects animal behaviour</li>
                <li>Explore the challenges faced by wildlife in urban settings</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={() => setShowInfoModal(false)}>
              I Understand
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
