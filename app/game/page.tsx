"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Plus,
  Minus,
  Maximize,
  Trophy,
  Star,
  Clock,
  Zap,
  Shield,
  Heart,
  Snowflake,
  Wind,
  CloudRain,
  Sun,
  Leaf,
  Home,
  RefreshCw,
  Search,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Nature resources and their educational values
const RESOURCES = {
  BERRY: { symbol: "🍇", value: 18, name: "Berries" },
  APPLE: { symbol: "🍎", value: 8, name: "Apple" },
  MUSHROOM: { symbol: "🍄", value: 10, name: "Mushroom" },
  WATER: { symbol: "💧", value: 15, name: "Water" },
  NEST: { symbol: "🏠", value: 7, name: "Nest" },
  LEAF: { symbol: "🍃", value: 5, name: "Leaf" },
  TRASH: { symbol: "🗑️", value: 12, name: "Trash" },
  ACORN: { symbol: "🌰", value: 20, name: "Acorn" },
  FISH: { symbol: "🐟", value: 25, name: "Fish" },
}

// Environment types that affect gameplay
const ENVIRONMENTS = [
  { name: "Forest", icon: Leaf, modifier: 1, description: "Rich in natural food sources" },
  { name: "City", icon: Home, modifier: 0.9, description: "Many hidden treasures in urban areas" },
  { name: "Park", icon: Leaf, modifier: 1.1, description: "Safe area with moderate resources" },
]

// Weather conditions that affect gameplay
const WEATHER_CONDITIONS = [
  { name: "Clear", icon: Sun, modifier: 1, description: "Perfect foraging conditions" },
  { name: "Rainy", icon: CloudRain, modifier: 0.8, description: "Wet conditions make finding food harder" },
  { name: "Windy", icon: Wind, modifier: 0.9, description: "Wind scatters food and makes foraging difficult" },
  { name: "Snowy", icon: Snowflake, modifier: 0.7, description: "Snow covers food sources, survival is challenging" },
]

// Foraging missions with different objectives
const FORAGING_MISSIONS = [
  {
    id: 1,
    name: "Backyard Buffet",
    description: "Find food in suburban backyards",
    objective: "Collect 3 different food items",
    reward: 500,
    difficulty: "Easy",
  },
  {
    id: 2,
    name: "Forest Feast",
    description: "Forage for natural food in the forest",
    objective: "Find berries and mushrooms",
    reward: 750,
    difficulty: "Medium",
  },
  {
    id: 3,
    name: "Urban Explorer",
    description: "Navigate the city to find the best food sources",
    objective: "Discover 5 hidden food caches",
    reward: 1000,
    difficulty: "Hard",
  },
  {
    id: 4,
    name: "Rainy Day Survival",
    description: "Find food during challenging weather",
    objective: "Collect water and find shelter",
    reward: 1200,
    difficulty: "Hard",
  },
  {
    id: 5,
    name: "Midnight Feast",
    description: "Forage at night when competition is lower",
    objective: "Find food without being detected",
    reward: 1500,
    difficulty: "Expert",
  },
]

// Equipment that can be used during gameplay
const EQUIPMENT = [
  {
    id: "extra_energy",
    name: "Extra Energy",
    description: "Get an additional free exploration attempt",
    icon: Zap,
    cost: 200,
    effect: "free_attempt",
  },
  {
    id: "food_stash",
    name: "Food Stash",
    description: "Save a resource for later use",
    icon: Shield,
    cost: 300,
    effect: "save_resource",
  },
  {
    id: "double_points",
    name: "Double Value",
    description: "Double the value of your next find",
    icon: Star,
    cost: 500,
    effect: "double_value",
  },
  {
    id: "keen_smell",
    name: "Keen Smell",
    description: "Increases chances of finding food",
    icon: Heart,
    cost: 400,
    effect: "boost_food",
  },
]

// Achievements that can be unlocked
const ACHIEVEMENTS = [
  {
    id: "first_forage",
    name: "First Forage",
    description: "Complete your first foraging mission",
    icon: Trophy,
    unlocked: false,
    reward: 100,
  },
  {
    id: "big_find",
    name: "Big Feast",
    description: "Find over 500 points worth of resources in a single exploration",
    icon: Star,
    unlocked: false,
    reward: 200,
  },
  {
    id: "weather_master",
    name: "Weather Survivor",
    description: "Complete a mission in all weather conditions",
    icon: Sun,
    unlocked: false,
    reward: 300,
  },
  {
    id: "mission_expert",
    name: "Foraging Expert",
    description: "Complete 5 different foraging missions",
    icon: Trophy,
    unlocked: false,
    reward: 500,
  },
]

export default function GamePage() {
  // Game state
  const [score, setScore] = useState(1000)
  const [energy, setEnergy] = useState(10)
  const [isSearching, setIsSearching] = useState(false)
  const [level, setLevel] = useState(1)
  const [experience, setExperience] = useState(0)
  const [experienceToNextLevel, setExperienceToNextLevel] = useState(1000)
  const [activeEquipment, setActiveEquipment] = useState(null)
  const [ownedEquipment, setOwnedEquipment] = useState({})
  const [currentWeather, setCurrentWeather] = useState(WEATHER_CONDITIONS[0])
  const [currentEnvironment, setCurrentEnvironment] = useState(ENVIRONMENTS[0])
  const [activeMission, setActiveMission] = useState(null)
  const [completedMissions, setCompletedMissions] = useState([])
  const [unlockedAchievements, setUnlockedAchievements] = useState([])
  const [showAchievementNotification, setShowAchievementNotification] = useState(false)
  const [newAchievement, setNewAchievement] = useState(null)
  const [savedResources, setSavedResources] = useState([])
  const [gameStats, setGameStats] = useState({
    totalSearches: 0,
    totalFinds: 0,
    biggestFind: 0,
    missionsCompleted: 0,
  })

  // Habitat zones (3x5 grid of resources)
  const [habitatZones, setHabitatZones] = useState([
    [RESOURCES.BERRY.symbol, RESOURCES.APPLE.symbol, RESOURCES.MUSHROOM.symbol],
    [RESOURCES.WATER.symbol, RESOURCES.NEST.symbol, RESOURCES.LEAF.symbol],
    [RESOURCES.TRASH.symbol, RESOURCES.ACORN.symbol, RESOURCES.FISH.symbol],
    [RESOURCES.BERRY.symbol, RESOURCES.WATER.symbol, RESOURCES.ACORN.symbol],
    [RESOURCES.APPLE.symbol, RESOURCES.LEAF.symbol, RESOURCES.FISH.symbol],
  ])

  // Animation state
  const [isRotating, setIsRotating] = useState(false)
  const [resourcesFound, setResourcesFound] = useState([])

  // Game history
  const [gameHistory, setGameHistory] = useState([])
  const historyRef = useRef(null)

  // Initialize game
  useEffect(() => {
    // Change weather every 5 minutes
    const weatherInterval = setInterval(() => {
      const randomWeather = WEATHER_CONDITIONS[Math.floor(Math.random() * WEATHER_CONDITIONS.length)]
      setCurrentWeather(randomWeather)
    }, 300000)

    return () => clearInterval(weatherInterval)
  }, [])

  // Scroll to bottom of history when updated
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight
    }
  }, [gameHistory])

  // Energy controls
  const increaseEnergy = () => {
    if (energy < 100) setEnergy(energy + 10)
  }

  const decreaseEnergy = () => {
    if (energy > 10) setEnergy(energy - 10)
  }

  const maxEnergy = () => {
    setEnergy(100)
  }

  // Acquire equipment
  const acquireEquipment = (equipment) => {
    if (score >= equipment.cost) {
      setScore(score - equipment.cost)
      setOwnedEquipment({
        ...ownedEquipment,
        [equipment.id]: (ownedEquipment[equipment.id] || 0) + 1,
      })

      addToHistory(`Acquired ${equipment.name} for ${equipment.cost} points`)
    }
  }

  // Activate equipment
  const activateEquipment = (equipment) => {
    if (ownedEquipment[equipment.id] > 0) {
      setActiveEquipment(equipment)
      setOwnedEquipment({
        ...ownedEquipment,
        [equipment.id]: ownedEquipment[equipment.id] - 1,
      })

      addToHistory(`Activated ${equipment.name}`)
    }
  }

  // Save a resource
  const saveResource = (resourceSymbol, zoneIndex, positionIndex) => {
    if (activeEquipment && activeEquipment.effect === "save_resource") {
      const resourceType = Object.values(RESOURCES).find((r) => r.symbol === resourceSymbol)

      if (resourceType) {
        setSavedResources([...savedResources, { type: resourceType, quantity: 1 }])
        setActiveEquipment(null)
        addToHistory(`Saved ${resourceType.name} for later use`)
      }
    }
  }

  // Select a mission
  const selectMission = (mission) => {
    setActiveMission(mission)
    addToHistory(`Started mission: ${mission.name}`)
  }

  // Change environment
  const changeEnvironment = (environment) => {
    setCurrentEnvironment(environment)
    addToHistory(`Moved to ${environment.name} environment`)
  }

  // Add entry to game history
  const addToHistory = (message) => {
    const timestamp = new Date().toLocaleTimeString()
    setGameHistory([...gameHistory, { message, timestamp }])
  }

  // Check for patterns in habitat zones
  const checkForPatterns = () => {
    const foundResources = []
    let totalValue = 0

    // Check rows
    for (let row = 0; row < 3; row++) {
      const rowSymbols = habitatZones.map((zone) => zone[row])

      // Check for patterns (3 or more of the same)
      for (let i = 0; i < rowSymbols.length - 2; i++) {
        if (rowSymbols[i] === rowSymbols[i + 1] && rowSymbols[i] === rowSymbols[i + 2]) {
          const resourceType = Object.values(RESOURCES).find((r) => r.symbol === rowSymbols[i])
          if (resourceType) {
            foundResources.push({ type: resourceType, quantity: 3, pattern: "row" })
            totalValue += resourceType.value * 3
          }
        }
      }
    }

    // Check columns (each habitat zone)
    for (let col = 0; col < habitatZones.length; col++) {
      const colSymbols = habitatZones[col]

      // Check if all 3 symbols in a column are the same
      if (colSymbols[0] === colSymbols[1] && colSymbols[0] === colSymbols[2]) {
        const resourceType = Object.values(RESOURCES).find((r) => r.symbol === colSymbols[0])
        if (resourceType) {
          foundResources.push({ type: resourceType, quantity: 3, pattern: "column" })
          totalValue += resourceType.value * 3
        }
      }
    }

    // Check diagonals (only possible in a 3x3 section)
    // Main diagonal (top-left to bottom-right)
    if (habitatZones[0][0] === habitatZones[1][1] && habitatZones[0][0] === habitatZones[2][2]) {
      const resourceType = Object.values(RESOURCES).find((r) => r.symbol === habitatZones[0][0])
      if (resourceType) {
        foundResources.push({ type: resourceType, quantity: 3, pattern: "diagonal" })
        totalValue += resourceType.value * 3
      }
    }

    // Secondary diagonal (top-right to bottom-left)
    if (habitatZones[0][2] === habitatZones[1][1] && habitatZones[0][2] === habitatZones[2][0]) {
      const resourceType = Object.values(RESOURCES).find((r) => r.symbol === habitatZones[0][2])
      if (resourceType) {
        foundResources.push({ type: resourceType, quantity: 3, pattern: "diagonal" })
        totalValue += resourceType.value * 3
      }
    }

    // Apply weather modifier
    totalValue = Math.floor(totalValue * currentWeather.modifier)

    // Apply environment modifier
    totalValue = Math.floor(totalValue * currentEnvironment.modifier)

    // Apply double value if active
    if (activeEquipment && activeEquipment.effect === "double_value") {
      totalValue *= 2
      setActiveEquipment(null)
      addToHistory("Double Value equipment applied!")
    }

    return { foundResources, totalValue }
  }

  // Check if mission is completed
  const checkMissionCompletion = (resources) => {
    if (!activeMission) return false

    // Check mission objectives (simplified for this example)
    let completed = false

    switch (activeMission.id) {
      case 1: // Backyard Buffet
        completed = new Set(resources.map((r) => r.type.name)).size >= 3
        break
      case 2: // Forest Feast
        completed =
          resources.some((r) => r.type.name === "Berries") && resources.some((r) => r.type.name === "Mushroom")
        break
      case 3: // Urban Explorer
        completed = resources.length >= 5
        break
      case 4: // Rainy Day Survival
        completed = resources.some((r) => r.type.name === "Water") && resources.some((r) => r.type.name === "Nest")
        break
      case 5: // Midnight Feast
        completed = currentWeather.name === "Clear" && resources.length >= 3
        break
    }

    if (completed) {
      // Award mission reward
      const reward = activeMission.reward
      setScore((score) => score + reward)

      // Add to completed missions
      if (!completedMissions.includes(activeMission.id)) {
        setCompletedMissions([...completedMissions, activeMission.id])
      }

      // Update stats
      setGameStats({
        ...gameStats,
        missionsCompleted: gameStats.missionsCompleted + 1,
      })

      // Add experience
      addExperience(reward / 2)

      // Add to history
      addToHistory(`Mission completed: ${activeMission.name}! Earned ${reward} points.`)

      // Check for achievements
      checkAchievements("mission_completed")

      // Reset active mission
      setActiveMission(null)

      return true
    }

    return false
  }

  // Add experience points and level up if needed
  const addExperience = (amount) => {
    const newExperience = experience + amount

    if (newExperience >= experienceToNextLevel) {
      // Level up
      const newLevel = level + 1
      setLevel(newLevel)
      setExperience(newExperience - experienceToNextLevel)
      setExperienceToNextLevel(Math.floor(experienceToNextLevel * 1.5))

      // Reward for level up
      const levelUpReward = newLevel * 100
      setScore((score) => score + levelUpReward)

      addToHistory(`Level up! You are now level ${newLevel}. Earned ${levelUpReward} points.`)
    } else {
      setExperience(newExperience)
    }
  }

  // Check for achievements
  const checkAchievements = (trigger, data = {}) => {
    const newUnlocked = []

    ACHIEVEMENTS.forEach((achievement) => {
      if (unlockedAchievements.includes(achievement.id)) return

      let unlocked = false

      switch (achievement.id) {
        case "first_forage":
          unlocked = trigger === "mission_completed" && gameStats.missionsCompleted === 1
          break
        case "big_find":
          unlocked = trigger === "find" && data.amount >= 500
          break
        case "weather_master":
          // This would need more complex tracking of weather conditions during missions
          break
        case "mission_expert":
          unlocked = completedMissions.length >= 5
          break
      }

      if (unlocked) {
        newUnlocked.push(achievement.id)

        // Award achievement reward
        setScore((score) => score + achievement.reward)

        // Show notification
        setNewAchievement(achievement)
        setShowAchievementNotification(true)
        setTimeout(() => setShowAchievementNotification(false), 5000)

        addToHistory(`Achievement unlocked: ${achievement.name}! Earned ${achievement.reward} points.`)
      }
    })

    if (newUnlocked.length > 0) {
      setUnlockedAchievements([...unlockedAchievements, ...newUnlocked])
    }
  }

  // Main game search function
  const searchForResources = () => {
    if (isSearching) return

    // Check if player has enough energy
    if (score < energy) {
      addToHistory("Not enough points for exploration!")
      return
    }

    setIsSearching(true)
    setIsRotating(true)
    setScore(score - energy)

    // Update stats
    setGameStats({
      ...gameStats,
      totalSearches: gameStats.totalSearches + 1,
    })

    // Add to history
    addToHistory(`Exploration started with ${energy} energy`)

    // Simulate rotating habitat zones
    const rotationInterval = setInterval(() => {
      setHabitatZones((prevZones) => {
        return prevZones.map((zone) => {
          // Randomly shuffle the resources in each zone
          const shuffled = [...zone]
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
          }
          return shuffled
        })
      })
    }, 100)

    // Stop rotation after 2 seconds
    setTimeout(() => {
      clearInterval(rotationInterval)
      setIsRotating(false)

      // Generate final result
      const finalZones = habitatZones.map((zone) => {
        // Apply keen smell equipment if active
        if (activeEquipment && activeEquipment.effect === "boost_food") {
          // Increase chance of food symbols
          return zone.map((symbol) => {
            const boostChance = Math.random()
            if (boostChance < 0.3) {
              return Math.random() < 0.5 ? RESOURCES.APPLE.symbol : RESOURCES.BERRY.symbol
            }
            return symbol
          })
        }
        return zone
      })

      setHabitatZones(finalZones)

      // Check for patterns and calculate rewards
      const { foundResources, totalValue } = checkForPatterns()

      // Update resources found
      setResourcesFound([...resourcesFound, ...foundResources])

      // Update score with findings
      if (totalValue > 0) {
        setScore((score) => score + totalValue)

        // Update stats
        setGameStats({
          ...gameStats,
          totalFinds: gameStats.totalFinds + 1,
          biggestFind: Math.max(gameStats.biggestFind, totalValue),
        })

        // Add experience
        addExperience(totalValue / 10)

        // Check for big find achievement
        if (totalValue >= 500) {
          checkAchievements("find", { amount: totalValue })
        }

        // Log findings
        foundResources.forEach((resource) => {
          addToHistory(
            `Found ${resource.quantity} ${resource.type.name} in a ${resource.pattern}! +${resource.type.value * resource.quantity} points`,
          )
        })

        addToHistory(`Total resources found: ${totalValue} points!`)
      } else {
        addToHistory("No resource patterns found this time.")
      }

      // Check mission completion
      checkMissionCompletion(foundResources)

      // Check if we should give a free search from equipment
      if (activeEquipment && activeEquipment.effect === "free_attempt") {
        addToHistory("Extra Energy equipment activated! Free exploration coming up.")
        setTimeout(() => {
          setActiveEquipment(null)
          searchForResources()
        }, 1000)
      } else {
        setIsSearching(false)
      }
    }, 2000)
  }

  return (
    <div className="py-8 bg-gradient-to-b from-brand-50 to-brand-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="bg-brand-600 text-white px-3 py-1 rounded-lg mr-2">
              <span className="text-xs font-bold">LEVEL {level}</span>
            </div>
            <div className="w-32 bg-gray-200 rounded-full h-2.5 mr-2">
              <div
                className="bg-brand-500 h-2.5 rounded-full"
                style={{ width: `${(experience / experienceToNextLevel) * 100}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600">
              {experience}/{experienceToNextLevel} XP
            </span>
          </div>
          <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">18+</div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Game Area - 3 columns wide */}
          <div className="lg:col-span-3">
            <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl font-bold">Quazivor Raccoon Adventure</h1>
                  <div className="flex items-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center bg-brand-100 px-3 py-1 rounded-lg mr-3">
                            <currentWeather.icon className="h-4 w-4 text-brand-600 mr-1" />
                            <span className="text-sm font-medium">{currentWeather.name}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{currentWeather.description}</p>
                          <p className="text-sm text-gray-500">Resource modifier: {currentWeather.modifier}x</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    {activeMission && (
                      <Badge variant="outline" className="bg-brand-100 text-brand-700 border-brand-300">
                        Mission: {activeMission.name}
                      </Badge>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-2">
                  Виключно для розважальних цілей. Без реальних грошей. Без виграшів. Все віртуальне і не несе ніякої
                  цінності. Повністю безкоштовно для використання. Для користувачів 18+.
                </p>

                <div className="flex justify-between items-center mb-6">
                  <div className="bg-brand-600 text-white px-4 py-2 rounded-lg">
                    <p className="text-sm">Resources</p>
                    <p className="text-2xl font-bold">{score}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decreaseEnergy}
                      disabled={energy <= 10 || isSearching}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>

                    <div className="bg-gray-100 px-4 py-2 rounded-lg">
                      <p className="text-sm">Energy per search</p>
                      <p className="text-xl font-bold">{energy}</p>
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={increaseEnergy}
                      disabled={energy >= 100 || isSearching}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>

                    <Button variant="outline" onClick={maxEnergy} disabled={energy >= 100 || isSearching}>
                      <Maximize className="h-4 w-4 mr-2" />
                      Max
                    </Button>
                  </div>
                </div>

                {/* Environment Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">Select Environment</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {ENVIRONMENTS.map((env) => (
                      <Button
                        key={env.name}
                        variant={currentEnvironment.name === env.name ? "default" : "outline"}
                        className={`h-auto py-3 ${currentEnvironment.name === env.name ? "bg-brand-600" : ""}`}
                        onClick={() => changeEnvironment(env)}
                        disabled={isSearching}
                      >
                        <div className="flex flex-col items-center">
                          <env.icon className="h-6 w-6 mb-1" />
                          <span>{env.name}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Main Habitat Zones */}
                <div className="bg-gradient-to-b from-brand-600 to-brand-800 p-6 rounded-xl mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">Habitat: {currentEnvironment.name}</h3>
                    <Badge className="bg-brand-200 text-brand-800">{currentWeather.name} Weather</Badge>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-5 gap-2">
                      {habitatZones.map((zone, zoneIndex) => (
                        <div key={zoneIndex} className="bg-white/20 rounded-lg overflow-hidden">
                          <div className="grid grid-rows-3 h-48">
                            {zone.map((symbol, symbolIndex) => (
                              <div
                                key={`${zoneIndex}-${symbolIndex}`}
                                className={`flex items-center justify-center text-4xl border-b border-white/20 h-16 relative
                                  ${activeEquipment?.effect === "save_resource" ? "cursor-pointer hover:bg-white/30" : ""}
                                  ${isRotating ? "animate-pulse" : ""}`}
                                onClick={() => saveResource(symbol, zoneIndex, symbolIndex)}
                              >
                                {symbol}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white text-xl py-6"
                    onClick={searchForResources}
                    disabled={isSearching || score < energy}
                  >
                    {isSearching ? (
                      <div className="flex items-center">
                        <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                        Searching...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Search className="h-5 w-5 mr-2" />
                        Search for Resources
                      </div>
                    )}
                  </Button>
                </div>

                {/* Collected Resources */}
                {resourcesFound.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3">Recently Found Resources</h3>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {resourcesFound.slice(-8).map((resource, index) => (
                          <div key={index} className="bg-white rounded-lg p-2 flex items-center border border-gray-200">
                            <div className="text-2xl mr-2">{resource.type.symbol}</div>
                            <div>
                              <p className="text-sm font-medium">{resource.type.name}</p>
                              <p className="text-xs text-gray-500">Found in {resource.pattern}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Saved Resources */}
                {savedResources.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3">Saved Resources</h3>
                    <div className="bg-brand-50 rounded-lg p-4 border border-brand-200">
                      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
                        {savedResources.map((resource, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-lg p-2 flex flex-col items-center justify-center text-center border border-brand-200"
                          >
                            <div className="text-2xl mb-1">{resource.type.symbol}</div>
                            <p className="text-xs font-medium">{resource.type.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center">
                      <Trophy className="h-4 w-4 mr-2 text-brand-500" />
                      Active Equipment
                    </h3>
                    {activeEquipment ? (
                      <div className="flex items-center bg-brand-100 p-2 rounded-lg">
                        <activeEquipment.icon className="h-5 w-5 text-brand-600 mr-2" />
                        <div>
                          <p className="font-medium">{activeEquipment.name}</p>
                          <p className="text-xs text-gray-600">{activeEquipment.description}</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No active equipment</p>
                    )}

                    <h4 className="font-medium mt-3 mb-2">Your Equipment:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {EQUIPMENT.map((equipment) => (
                        <Button
                          key={equipment.id}
                          variant="outline"
                          size="sm"
                          className={`text-xs justify-start ${ownedEquipment[equipment.id] ? "bg-brand-50" : "opacity-50"}`}
                          disabled={!ownedEquipment[equipment.id] || isSearching}
                          onClick={() => activateEquipment(equipment)}
                        >
                          <equipment.icon className="h-3 w-3 mr-1" />
                          {equipment.name}
                          {ownedEquipment[equipment.id] ? ` (${ownedEquipment[equipment.id]})` : ""}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-brand-600" />
                      Activity Log
                    </h3>
                    <div className="h-32 overflow-y-auto text-sm space-y-1 bg-white p-2 rounded-lg" ref={historyRef}>
                      {gameHistory.length === 0 ? (
                        <p className="text-gray-500 italic">No activity yet</p>
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

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Educational Information:</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Raccoons are omnivores that eat both plants and animals</li>
                    <li>• They are highly adaptable and can thrive in various environments</li>
                    <li>• Raccoons have sensitive front paws that help them find food</li>
                    <li>• They are primarily nocturnal animals, most active at night</li>
                    <li>• Raccoons can remember solutions to tasks for up to three years</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Side Panel - 1 column wide */}
          <div className="lg:col-span-1">
            <Tabs defaultValue="missions" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="missions">Missions</TabsTrigger>
                <TabsTrigger value="equipment">Equipment</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
              </TabsList>

              <TabsContent value="missions" className="space-y-4">
                <Card>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Foraging Missions</h3>
                    <p className="text-sm text-gray-600 mb-4">Complete missions to earn bonus points and experience!</p>

                    <div className="space-y-3">
                      {FORAGING_MISSIONS.map((mission) => {
                        const isCompleted = completedMissions.includes(mission.id)
                        const isActive = activeMission?.id === mission.id

                        return (
                          <div
                            key={mission.id}
                            className={`border rounded-lg p-3 ${
                              isCompleted
                                ? "bg-green-50 border-green-200"
                                : isActive
                                  ? "bg-brand-50 border-brand-300"
                                  : "border-gray-200"
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <h4 className="font-bold">{mission.name}</h4>
                              <Badge
                                variant="outline"
                                className={
                                  mission.difficulty === "Easy"
                                    ? "bg-green-100 text-green-800 border-green-300"
                                    : mission.difficulty === "Medium"
                                      ? "bg-brand-100 text-brand-700 border-brand-300"
                                      : mission.difficulty === "Hard"
                                        ? "bg-brand-100 text-brand-700 border-brand-300"
                                        : "bg-red-100 text-red-800 border-red-300"
                                }
                              >
                                {mission.difficulty}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{mission.description}</p>
                            <div className="mt-2 text-xs bg-gray-100 p-2 rounded">
                              <strong>Objective:</strong> {mission.objective}
                            </div>
                            <div className="flex justify-between items-center mt-2">
                              <div className="text-sm">
                                <strong>Reward:</strong> {mission.reward} points
                              </div>
                              {isCompleted ? (
                                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                                  Completed
                                </Badge>
                              ) : isActive ? (
                                <Badge variant="outline" className="bg-brand-100 text-brand-700 border-brand-300">
                                  Active
                                </Badge>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  disabled={isSearching || activeMission !== null}
                                  onClick={() => selectMission(mission)}
                                >
                                  Start
                                </Button>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="equipment" className="space-y-4">
                <Card>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Raccoon Equipment</h3>
                    <p className="text-sm text-gray-600 mb-4">Exchange points for equipment to help with foraging!</p>

                    <div className="space-y-3">
                      {EQUIPMENT.map((equipment) => (
                        <div key={equipment.id} className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-center">
                            <div className="bg-brand-100 p-2 rounded-lg mr-3">
                              <equipment.icon className="h-5 w-5 text-brand-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold">{equipment.name}</h4>
                              <p className="text-sm text-gray-600">{equipment.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium mb-1">{equipment.cost} points</div>
                              <Button
                                size="sm"
                                variant="outline"
                                disabled={score < equipment.cost || isSearching}
                                onClick={() => acquireEquipment(equipment)}
                              >
                                Exchange
                              </Button>
                            </div>
                          </div>
                          {ownedEquipment[equipment.id] > 0 && (
                            <div className="mt-2 text-xs bg-brand-50 p-2 rounded">
                              You have: {ownedEquipment[equipment.id]}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="stats" className="space-y-4">
                <Card>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Game Statistics</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-gray-600 mb-1">Raccoon Stats</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="text-xs text-gray-500">Level</div>
                            <div className="font-bold">{level}</div>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="text-xs text-gray-500">Experience</div>
                            <div className="font-bold">
                              {experience}/{experienceToNextLevel}
                            </div>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="text-xs text-gray-500">Total Searches</div>
                            <div className="font-bold">{gameStats.totalSearches}</div>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="text-xs text-gray-500">Successful Finds</div>
                            <div className="font-bold">{gameStats.totalFinds}</div>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="text-xs text-gray-500">Biggest Find</div>
                            <div className="font-bold">{gameStats.biggestFind}</div>
                          </div>
                          <div className="bg-gray-100 p-2 rounded">
                            <div className="text-xs text-gray-500">Missions Completed</div>
                            <div className="font-bold">{gameStats.missionsCompleted}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm text-gray-600 mb-1">Achievements</h4>
                        <div className="space-y-2">
                          {ACHIEVEMENTS.map((achievement) => {
                            const isUnlocked = unlockedAchievements.includes(achievement.id)

                            return (
                              <div
                                key={achievement.id}
                                className={`border rounded p-2 flex items-center ${
                                  isUnlocked ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200 opacity-75"
                                }`}
                              >
                                <div className={`p-1 rounded-full mr-2 ${isUnlocked ? "bg-green-100" : "bg-gray-200"}`}>
                                  <achievement.icon
                                    className={`h-4 w-4 ${isUnlocked ? "text-green-700" : "text-gray-500"}`}
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{achievement.name}</div>
                                  <div className="text-xs text-gray-600">{achievement.description}</div>
                                </div>
                                <div className="text-xs font-medium">
                                  {isUnlocked ? "Unlocked" : `+${achievement.reward}`}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm text-gray-600 mb-1">Resource Values</h4>
                        <div className="grid grid-cols-3 gap-1">
                          {Object.values(RESOURCES).map((resource) => (
                            <div key={resource.name} className="text-center p-1">
                              <div className="text-2xl">{resource.symbol}</div>
                              <div className="text-xs">{resource.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Achievement notification */}
      {showAchievementNotification && newAchievement && (
        <div className="fixed bottom-4 right-4 bg-green-100 border border-green-300 rounded-lg p-4 shadow-lg max-w-xs animate-in slide-in-from-right">
          <div className="flex items-start">
            <div className="bg-green-200 p-2 rounded-full mr-3">
              <Trophy className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <h4 className="font-bold text-green-800">Achievement Unlocked!</h4>
              <p className="font-medium">{newAchievement.name}</p>
              <p className="text-sm text-gray-700">{newAchievement.description}</p>
              <p className="text-sm font-medium mt-1">+{newAchievement.reward} points</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
