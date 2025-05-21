"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Star, Shield, Zap, Eye } from "lucide-react"

const characters = [
  {
    id: "rocky",
    name: "Rocky",
    type: "Urban Explorer",
    description:
      "A street-smart raccoon who knows every alley and dumpster in the city. Rocky has mastered the art of urban survival.",
    stats: {
      agility: 85,
      strength: 70,
      intelligence: 90,
      stealth: 75,
    },
    abilities: [
      { name: "Dumpster Dive", icon: Zap, description: "Find rare items in trash cans with higher probability" },
      { name: "Street Smarts", icon: Eye, description: "Detect dangers in urban environments from further away" },
    ],
    image: "/characters/rocky.png",
  },
  {
    id: "willow",
    name: "Willow",
    type: "Forest Forager",
    description:
      "A nimble raccoon who prefers the tranquility of the forest. Willow can find food where others see nothing but leaves.",
    stats: {
      agility: 90,
      strength: 65,
      intelligence: 80,
      stealth: 95,
    },
    abilities: [
      { name: "Berry Finder", icon: Eye, description: "Locate hidden berry bushes and fruit trees" },
      { name: "Silent Paws", icon: Shield, description: "Move without making sound, avoiding predator detection" },
    ],
    image: "/characters/willow.png",
  },
  {
    id: "bandit",
    name: "Bandit",
    type: "Scavenger King",
    description: "The legendary raccoon who can survive anywhere. Bandit has seen it all and stolen most of it too.",
    stats: {
      agility: 80,
      strength: 85,
      intelligence: 95,
      stealth: 85,
    },
    abilities: [
      { name: "Master Thief", icon: Star, description: "Unlock containers that other raccoons cannot access" },
      { name: "Adaptable", icon: Shield, description: "Take less damage from environmental hazards" },
    ],
    image: "/characters/bandit.png",
  },
]

export default function CharacterShowcase() {
  const [currentCharacter, setCurrentCharacter] = useState(0)

  const nextCharacter = () => {
    setCurrentCharacter((prev) => (prev + 1) % characters.length)
  }

  const prevCharacter = () => {
    setCurrentCharacter((prev) => (prev - 1 + characters.length) % characters.length)
  }

  const character = characters[currentCharacter]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Choose Your Raccoon</h2>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Each raccoon has unique abilities and specialties to help you survive
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            key={character.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-amber-800/50 to-amber-950/50 rounded-2xl p-8 backdrop-blur-sm border border-amber-700/50"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-3xl font-bold text-amber-400">{character.name}</h3>
                <p className="text-amber-300">{character.type}</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-amber-400 hover:bg-amber-800/50"
                  onClick={prevCharacter}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-amber-400 hover:bg-amber-800/50"
                  onClick={nextCharacter}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <p className="text-amber-100 mb-6">{character.description}</p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-amber-300">Stats</h4>
              <div className="space-y-3">
                {Object.entries(character.stats).map(([stat, value]) => (
                  <div key={stat} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="capitalize text-amber-200">{stat}</span>
                      <span className="text-amber-400">{value}/100</span>
                    </div>
                    <div className="w-full bg-amber-950 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-amber-300">Special Abilities</h4>
              <div className="space-y-3">
                {character.abilities.map((ability, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-amber-900/30 rounded-lg p-3 border border-amber-700/30"
                  >
                    <div className="bg-amber-700/50 p-2 rounded-lg mr-3">
                      <ability.icon className="h-5 w-5 text-amber-300" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-amber-300">{ability.name}</h5>
                      <p className="text-sm text-amber-200">{ability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            key={`image-${character.id}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-brand-700/20 rounded-full blur-3xl opacity-70" />

            {/* Animated Raccoon Illustrations */}
            {character.id === "rocky" && (
              <div className="relative w-[400px] h-[500px]">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {/* Urban Raccoon - Rocky */}
                  <g className="raccoon">
                    {/* Body */}
                    <ellipse
                      cx="200"
                      cy="300"
                      rx="80"
                      ry="60"
                      fill="#4b5563"
                      className="animate-pulse"
                      style={{ animationDuration: "4s" }}
                    />

                    {/* Tail */}
                    <path
                      d="M120,300 C80,250 60,350 120,300"
                      stroke="#4b5563"
                      strokeWidth="20"
                      fill="none"
                      className="animate-[wiggle_3s_ease-in-out_infinite]"
                    />
                    <path
                      d="M120,300 C80,250 60,350 120,300"
                      stroke="#9ca3af"
                      strokeWidth="16"
                      strokeDasharray="10,10"
                      fill="none"
                      className="animate-[wiggle_3s_ease-in-out_infinite]"
                    />

                    {/* Head */}
                    <circle cx="240" cy="220" r="60" fill="#4b5563" />

                    {/* Face Mask */}
                    <path
                      d="M200,200 C220,180 260,180 280,200 C280,220 260,240 240,240 C220,240 200,220 200,200"
                      fill="#e5e7eb"
                    />

                    {/* Eyes */}
                    <circle cx="225" cy="210" r="12" fill="#1f2937">
                      <animate attributeName="r" values="12;10;12" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="255" cy="210" r="12" fill="#1f2937">
                      <animate attributeName="r" values="12;10;12" dur="3s" repeatCount="indefinite" />
                    </circle>

                    {/* Eye Shine */}
                    <circle cx="220" cy="205" r="4" fill="white" />
                    <circle cx="250" cy="205" r="4" fill="white" />

                    {/* Nose */}
                    <circle cx="240" cy="225" r="8" fill="#1f2937" />

                    {/* Ears */}
                    <circle cx="210" cy="180" r="15" fill="#4b5563">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 210 180"
                        to="5 210 180"
                        dur="2s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </circle>
                    <circle cx="270" cy="180" r="15" fill="#4b5563">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 270 180"
                        to="-5 270 180"
                        dur="2s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </circle>

                    {/* Legs */}
                    <rect x="160" y="340" width="20" height="40" rx="10" fill="#4b5563">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        values="0,0; 5,0; 0,0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect x="220" y="340" width="20" height="40" rx="10" fill="#4b5563">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        values="0,0; -5,0; 0,0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </rect>

                    {/* Arms */}
                    <rect x="150" y="280" width="20" height="50" rx="10" fill="#4b5563" transform="rotate(-20 150 280)">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="-20 150 280"
                        to="-25 150 280"
                        dur="2s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </rect>
                    <rect x="230" y="280" width="20" height="50" rx="10" fill="#4b5563" transform="rotate(20 250 280)">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="20 250 280"
                        to="25 250 280"
                        dur="2s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </rect>

                    {/* City Elements */}
                    <rect x="290" y="380" width="60" height="80" fill="#1f2937" />
                    <rect x="300" y="390" width="10" height="10" fill="#e5e7eb" />
                    <rect x="320" y="390" width="10" height="10" fill="#e5e7eb" />
                    <rect x="300" y="410" width="10" height="10" fill="#e5e7eb" />
                    <rect x="320" y="410" width="10" height="10" fill="#e5e7eb" />
                    <rect x="300" y="430" width="10" height="10" fill="#e5e7eb" />
                    <rect x="320" y="430" width="10" height="10" fill="#e5e7eb" />

                    {/* Trash Can */}
                    <rect x="100" y="400" width="40" height="60" rx="5" fill="#6b7280" />
                    <rect x="95" y="395" width="50" height="10" rx="5" fill="#9ca3af" />
                    <path
                      d="M110,410 L110,450 M130,410 L130,450"
                      stroke="#4b5563"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />

                    {/* Pizza Slice in Hand */}
                    <path d="M270,310 L290,290 L310,310 Z" fill="#fbbf24" />
                    <path d="M280,300 L285,305 L290,300" fill="#ef4444" />
                  </g>
                </svg>
              </div>
            )}

            {character.id === "willow" && (
              <div className="relative w-[400px] h-[500px]">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {/* Forest Raccoon - Willow */}
                  <g className="raccoon">
                    {/* Forest Background Elements */}
                    <path d="M50,450 L100,350 L150,450 Z" fill="#064e3b" />
                    <path d="M300,450 L350,320 L400,450 Z" fill="#064e3b" />
                    <rect x="70" y="450" width="10" height="30" fill="#7f1d1d" />
                    <rect x="320" y="450" width="10" height="30" fill="#7f1d1d" />

                    {/* Body */}
                    <ellipse
                      cx="200"
                      cy="300"
                      rx="70"
                      ry="55"
                      fill="#4b5563"
                      className="animate-pulse"
                      style={{ animationDuration: "4s" }}
                    />

                    {/* Tail */}
                    <path
                      d="M130,300 C90,250 70,350 130,300"
                      stroke="#4b5563"
                      strokeWidth="20"
                      fill="none"
                      className="animate-[wiggle_2.5s_ease-in-out_infinite]"
                    />
                    <path
                      d="M130,300 C90,250 70,350 130,300"
                      stroke="#9ca3af"
                      strokeWidth="16"
                      strokeDasharray="10,10"
                      fill="none"
                      className="animate-[wiggle_2.5s_ease-in-out_infinite]"
                    />

                    {/* Head */}
                    <circle cx="230" cy="220" r="55" fill="#4b5563" />

                    {/* Face Mask */}
                    <path
                      d="M195,200 C215,180 245,180 265,200 C265,220 245,240 230,240 C215,240 195,220 195,200"
                      fill="#e5e7eb"
                    />

                    {/* Eyes */}
                    <circle cx="215" cy="210" r="10" fill="#1f2937">
                      <animate attributeName="r" values="10;8;10" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="245" cy="210" r="10" fill="#1f2937">
                      <animate attributeName="r" values="10;8;10" dur="4s" repeatCount="indefinite" />
                    </circle>

                    {/* Eye Shine */}
                    <circle cx="212" cy="207" r="3" fill="white" />
                    <circle cx="242" cy="207" r="3" fill="white" />

                    {/* Nose */}
                    <circle cx="230" cy="225" r="6" fill="#1f2937" />

                    {/* Ears */}
                    <circle cx="205" cy="180" r="12" fill="#4b5563">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 205 180"
                        to="8 205 180"
                        dur="3s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </circle>
                    <circle cx="255" cy="180" r="12" fill="#4b5563">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 255 180"
                        to="-8 255 180"
                        dur="3s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </circle>

                    {/* Legs */}
                    <rect x="170" y="335" width="15" height="35" rx="7" fill="#4b5563">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        values="0,0; 3,0; 0,0"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect x="215" y="335" width="15" height="35" rx="7" fill="#4b5563">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        values="0,0; -3,0; 0,0"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </rect>

                    {/* Arms */}
                    <rect x="160" y="280" width="15" height="40" rx="7" fill="#4b5563" transform="rotate(-15 160 280)">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="-15 160 280"
                        to="-20 160 280"
                        dur="2.5s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </rect>
                    <rect x="225" y="280" width="15" height="40" rx="7" fill="#4b5563" transform="rotate(15 240 280)">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="15 240 280"
                        to="20 240 280"
                        dur="2.5s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </rect>

                    {/* Berries in Hand */}
                    <circle cx="150" cy="300" r="8" fill="#7e22ce">
                      <animate attributeName="r" values="8;7;8" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="160" cy="295" r="8" fill="#7e22ce">
                      <animate attributeName="r" values="8;7.5;8" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="155" cy="305" r="8" fill="#7e22ce">
                      <animate attributeName="r" values="8;7.2;8" dur="3s" repeatCount="indefinite" />
                    </circle>

                    {/* Leaves */}
                    <path d="M180,180 C200,160 220,180 180,180" fill="#065f46">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 180 180"
                        to="10 180 180"
                        dur="4s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </path>
                    <path d="M280,180 C260,160 240,180 280,180" fill="#065f46">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 280 180"
                        to="-10 280 180"
                        dur="4s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </path>
                  </g>
                </svg>
              </div>
            )}

            {character.id === "bandit" && (
              <div className="relative w-[400px] h-[500px]">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {/* Scavenger King - Bandit */}
                  <g className="raccoon">
                    {/* Mixed Environment Elements */}
                    <rect x="50" y="400" width="100" height="80" fill="#1f2937" opacity="0.3" />
                    <path d="M300,450 L350,350 L400,450 Z" fill="#064e3b" opacity="0.3" />

                    {/* Body */}
                    <ellipse
                      cx="200"
                      cy="300"
                      rx="85"
                      ry="65"
                      fill="#4b5563"
                      className="animate-pulse"
                      style={{ animationDuration: "3.5s" }}
                    />

                    {/* Tail */}
                    <path
                      d="M115,300 C75,240 55,360 115,300"
                      stroke="#4b5563"
                      strokeWidth="25"
                      fill="none"
                      className="animate-[wiggle_3.5s_ease-in-out_infinite]"
                    />
                    <path
                      d="M115,300 C75,240 55,360 115,300"
                      stroke="#9ca3af"
                      strokeWidth="20"
                      strokeDasharray="12,12"
                      fill="none"
                      className="animate-[wiggle_3.5s_ease-in-out_infinite]"
                    />

                    {/* Head */}
                    <circle cx="250" cy="210" r="65" fill="#4b5563" />

                    {/* Face Mask */}
                    <path
                      d="M210,190 C235,165 265,165 290,190 C290,215 265,240 250,240 C235,240 210,215 210,190"
                      fill="#e5e7eb"
                    />

                    {/* Eyes */}
                    <circle cx="230" cy="200" r="14" fill="#1f2937">
                      <animate attributeName="r" values="14;12;14" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="270" cy="200" r="14" fill="#1f2937">
                      <animate attributeName="r" values="14;12;14" dur="3.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Eye Shine */}
                    <circle cx="225" cy="195" r="5" fill="white" />
                    <circle cx="265" cy="195" r="5" fill="white" />

                    {/* Nose */}
                    <circle cx="250" cy="220" r="10" fill="#1f2937" />

                    {/* Ears */}
                    <circle cx="215" cy="170" r="18" fill="#4b5563">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 215 170"
                        to="5 215 170"
                        dur="2.5s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </circle>
                    <circle cx="285" cy="170" r="18" fill="#4b5563">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 285 170"
                        to="-5 285 170"
                        dur="2.5s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </circle>

                    {/* Legs */}
                    <rect x="150" y="345" width="25" height="45" rx="12" fill="#4b5563">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        values="0,0; 5,0; 0,0"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect x="225" y="345" width="25" height="45" rx="12" fill="#4b5563">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        values="0,0; -5,0; 0,0"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </rect>

                    {/* Arms */}
                    <rect x="140" y="280" width="25" height="55" rx="12" fill="#4b5563" transform="rotate(-20 140 280)">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="-20 140 280"
                        to="-25 140 280"
                        dur="3s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </rect>
                    <rect x="235" y="280" width="25" height="55" rx="12" fill="#4b5563" transform="rotate(20 260 280)">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="20 260 280"
                        to="25 260 280"
                        dur="3s"
                        repeatCount="indefinite"
                        additive="sum"
                      />
                    </rect>

                    {/* Crown */}
                    <path d="M220,150 L250,130 L280,150 L270,170 L230,170 Z" fill="#fbbf24">
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="translate"
                        values="0,0; 0,-3; 0,0"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <circle cx="235" cy="160" r="5" fill="#ef4444" />
                    <circle cx="250" cy="155" r="5" fill="#3b82f6" />
                    <circle cx="265" cy="160" r="5" fill="#10b981" />

                    {/* Treasure Bag */}
                    <path
                      d="M300,320 C320,300 340,320 330,340 C320,360 280,360 270,340 C260,320 280,300 300,320"
                      fill="#d97706"
                    >
                      <animate
                        attributeName="transform"
                        attributeType="XML"
                        type="scale"
                        values="1,1; 1.05,0.95; 1,1"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <circle cx="290" cy="330" r="3" fill="#fbbf24" />
                    <circle cx="310" cy="325" r="3" fill="#fbbf24" />
                    <circle cx="300" cy="340" r="3" fill="#fbbf24" />
                  </g>
                </svg>
              </div>
            )}
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {characters.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentCharacter(idx)}
                className={`w-3 h-3 rounded-full ${idx === currentCharacter ? "bg-amber-400" : "bg-amber-700"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
  @keyframes wiggle {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
  }
`}</style>
    </section>
  )
}
