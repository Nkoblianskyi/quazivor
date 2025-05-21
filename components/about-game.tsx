"use client"

import { useEffect, useState } from "react"

export default function AboutGame() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Urban Raccoon</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-amber-700">Raccoon Survival Adventure</h3>
            <p className="mb-4 text-gray-700">
              Urban Raccoon is a social game for entertainment. No purchases, no winnings, no monetary value. Guide your
              raccoon through forest and city environments, forage for food, and survive the challenges of urban
              wildlife.
            </p>
            <p className="mb-4 text-gray-700">
              Navigate through challenging environments, avoid dangers like traffic and predators, and find the best
              food sources. Earn points by successfully foraging and completing survival challenges.
            </p>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Game Features:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Realistic forest and urban environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Engaging foraging missions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Fun point system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Compete with friends on the leaderboard</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden bg-amber-50 p-2">
              <ForestSceneAnimation />
            </div>
            <div className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden bg-amber-50 p-2">
              <CitySceneAnimation />
            </div>
            <div className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden bg-amber-50 p-2">
              <RaccoonAnimation />
            </div>
            <div className="relative h-40 md:h-48 lg:h-56 rounded-lg overflow-hidden bg-amber-50 p-2">
              <ForagingAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ForestSceneAnimation() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Sky */}
      <rect x="0" y="0" width="300" height="200" fill="#dbeafe" />

      {/* Sun */}
      <circle cx="50" cy="40" r="20" fill="#fcd34d" className="animate-pulse" />

      {/* Clouds */}
      <g className="cloud" style={{ animation: "float 30s infinite linear" }}>
        <ellipse cx="80" cy="30" rx="20" ry="10" fill="white" />
        <ellipse cx="70" cy="25" rx="15" ry="10" fill="white" />
        <ellipse cx="90" cy="25" rx="15" ry="12" fill="white" />
      </g>

      <g className="cloud" style={{ animation: "float 20s infinite linear", animationDelay: "-10s" }}>
        <ellipse cx="200" cy="50" rx="25" ry="12" fill="white" />
        <ellipse cx="190" cy="45" rx="15" ry="10" fill="white" />
        <ellipse cx="210" cy="40" rx="20" ry="15" fill="white" />
      </g>

      {/* Forest Ground */}
      <rect x="0" y="150" width="300" height="50" fill="#065f46" />

      {/* Trees */}
      <g className="tree" transform="translate(30, 160) scale(0.5)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#064e3b" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#064e3b" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#064e3b" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(70, 170) scale(0.4)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#064e3b" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#064e3b" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#064e3b" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(230, 160) scale(0.5)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#064e3b" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#064e3b" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#064e3b" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      <g className="tree" transform="translate(270, 170) scale(0.4)">
        <path d="M0,0 L20,-30 L-20,-30 Z" fill="#064e3b" />
        <path d="M0,-25 L15,-50 L-15,-50 Z" fill="#064e3b" />
        <path d="M0,-45 L10,-65 L-10,-65 Z" fill="#064e3b" />
        <rect x="-5" y="0" width="10" height="15" fill="#7f1d1d" />
      </g>

      {/* Bushes */}
      <circle cx="120" cy="170" r="15" fill="#065f46" />
      <circle cx="140" cy="175" r="10" fill="#065f46" />
      <circle cx="180" cy="170" r="12" fill="#065f46" />

      {/* Mushrooms */}
      <g transform="translate(150, 180)">
        <rect x="-2" y="-5" width="4" height="5" fill="#d6d3d1" />
        <ellipse cx="0" cy="-5" rx="6" ry="3" fill="#ef4444" />
        <circle cx="2" cy="-6" r="1" fill="white" />
      </g>

      <g transform="translate(100, 185)">
        <rect x="-1.5" y="-4" width="3" height="4" fill="#d6d3d1" />
        <ellipse cx="0" cy="-4" rx="4" ry="2" fill="#f59e0b" />
      </g>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateX(-30px); }
          50% { transform: translateX(30px); }
          100% { transform: translateX(-30px); }
        }
        .cloud {
          animation: float 30s infinite ease-in-out;
        }
      `}</style>
    </svg>
  )
}

function CitySceneAnimation() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Sky */}
      <rect x="0" y="0" width="300" height="200" fill="#bfdbfe" />

      {/* City Skyline */}
      <path
        d="M0,100 L30,100 L30,70 L50,70 L50,90 L70,90 L70,50 L90,50 L90,80 L110,80 L110,60 L130,60 L130,90 L150,90 L150,70 L170,70 L170,100 L190,100 L190,80 L210,80 L210,90 L230,90 L230,70 L250,70 L250,100 L270,100 L270,85 L300,85 L300,200 L0,200 Z"
        fill="#1f2937"
      />

      {/* Street */}
      <rect x="0" y="150" width="300" height="50" fill="#4b5563" />
      <rect x="0" y="175" width="300" height="2" fill="white" strokeDasharray="10,10" />

      {/* Buildings with Windows */}
      <rect x="40" y="70" width="20" height="80" fill="#374151" />
      <rect x="45" y="80" width="5" height="8" fill="#f9fafb" />
      <rect x="55" y="80" width="5" height="8" fill="#f9fafb" />
      <rect x="45" y="95" width="5" height="8" fill="#f9fafb" />
      <rect x="55" y="95" width="5" height="8" fill="#f9fafb" />
      <rect x="45" y="110" width="5" height="8" fill="#f9fafb" />
      <rect x="55" y="110" width="5" height="8" fill="#f9fafb" />
      <rect x="45" y="125" width="5" height="8" fill="#f9fafb" />
      <rect x="55" y="125" width="5" height="8" fill="#f9fafb" />

      <rect x="100" y="60" width="25" height="90" fill="#374151" />
      <rect x="105" y="70" width="6" height="10" fill="#f9fafb" />
      <rect x="115" y="70" width="6" height="10" fill="#f9fafb" />
      <rect x="105" y="85" width="6" height="10" fill="#f9fafb" />
      <rect x="115" y="85" width="6" height="10" fill="#f9fafb" />
      <rect x="105" y="100" width="6" height="10" fill="#f9fafb" />
      <rect x="115" y="100" width="6" height="10" fill="#f9fafb" />
      <rect x="105" y="115" width="6" height="10" fill="#f9fafb" />
      <rect x="115" y="115" width="6" height="10" fill="#f9fafb" />
      <rect x="105" y="130" width="6" height="10" fill="#f9fafb" />
      <rect x="115" y="130" width="6" height="10" fill="#f9fafb" />

      {/* Street Elements */}
      <g transform="translate(200, 160)">
        {/* Fire Hydrant */}
        <rect x="-3" y="-10" width="6" height="10" fill="#ef4444" />
        <rect x="-5" y="-12" width="10" height="2" rx="1" fill="#ef4444" />
        <rect x="-5" y="-3" width="10" height="2" rx="1" fill="#ef4444" />
      </g>

      <g transform="translate(250, 150)">
        {/* Street Lamp */}
        <rect x="-1" y="-20" width="2" height="20" fill="#6b7280" />
        <circle cx="0" cy="-22" r="3" fill="#fcd34d" />
        <circle cx="0" cy="-22" r="4" fill="none" stroke="#6b7280" strokeWidth="1" />
      </g>

      {/* Trash Can */}
      <g transform="translate(70, 160)">
        <rect x="-7" y="-15" width="14" height="15" rx="2" fill="#6b7280" />
        <rect x="-8" y="-17" width="16" height="2" rx="1" fill="#9ca3af" />
      </g>

      {/* Car */}
      <g transform="translate(150, 165)">
        <rect x="-15" y="-8" width="30" height="8" rx="2" fill="#3b82f6" />
        <rect x="-12" y="-12" width="24" height="4" rx="1" fill="#60a5fa" />
        <circle cx="-10" cy="0" r="3" fill="#1f2937" />
        <circle cx="10" cy="0" r="3" fill="#1f2937" />
      </g>
    </svg>
  )
}

function RaccoonAnimation() {
  const [position, setPosition] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev + 1 * direction
        if (newPosition > 30 || newPosition < -30) {
          setDirection((d) => -d)
        }
        return newPosition
      })
    }, 100)
    return () => clearInterval(interval)
  }, [direction])

  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="300" height="200" fill="#f3f4f6" />

      {/* Ground */}
      <rect x="0" y="150" width="300" height="50" fill="#d1d5db" />

      {/* Raccoon */}
      <g transform={`translate(${150 + position}, 130)`}>
        {/* Body */}
        <ellipse cx="0" cy="0" rx="25" ry="15" fill="#4b5563" />

        {/* Head */}
        <circle cx="20" cy="-10" r="15" fill="#4b5563" />

        {/* Face Mask */}
        <path d="M10,-15 C15,-20 25,-20 30,-15 C30,-10 25,-5 20,-5 C15,-5 10,-10 10,-15" fill="#e5e7eb" />

        {/* Eyes */}
        <circle cx="15" cy="-12" r="3" fill="#1f2937" />
        <circle cx="25" cy="-12" r="3" fill="#1f2937" />
        <circle cx="15" cy="-13" r="1" fill="white" />
        <circle cx="25" cy="-13" r="1" fill="white" />

        {/* Nose */}
        <circle cx="20" cy="-8" r="2" fill="#1f2937" />

        {/* Ears */}
        <circle cx="12" cy="-18" r="5" fill="#4b5563" />
        <circle cx="28" cy="-18" r="5" fill="#4b5563" />

        {/* Tail */}
        <path d="M-25,0 C-35,10 -35,-10 -25,0" stroke="#4b5563" strokeWidth="6" fill="none" />
        <path d="M-25,0 C-35,10 -35,-10 -25,0" stroke="#9ca3af" strokeWidth="4" strokeDasharray="3,3" fill="none" />

        {/* Legs */}
        <rect x="-15" y="10" width="6" height="12" rx="3" fill="#4b5563" />
        <rect x="-5" y="10" width="6" height="12" rx="3" fill="#4b5563" />
        <rect x="5" y="10" width="6" height="12" rx="3" fill="#4b5563" />
        <rect x="15" y="10" width="6" height="12" rx="3" fill="#4b5563" />

        {/* Paws */}
        <circle cx="-12" cy="22" r="3" fill="#1f2937" />
        <circle cx="-2" cy="22" r="3" fill="#1f2937" />
        <circle cx="8" cy="22" r="3" fill="#1f2937" />
        <circle cx="18" cy="22" r="3" fill="#1f2937" />
      </g>

      {/* Food Items */}
      <g transform="translate(80, 160)">
        <circle cx="0" cy="0" r="5" fill="#ef4444" /> {/* Apple */}
        <path d="M0,-5 C2,-8 4,-6 2,-4" stroke="#065f46" strokeWidth="1" fill="none" />
      </g>

      <g transform="translate(220, 165)">
        <ellipse cx="0" cy="0" rx="8" ry="3" fill="#fbbf24" /> {/* Bread */}
        <path d="M-5,-1 C-3,-2 3,-2 5,-1" stroke="#fbbf24" strokeWidth="1" fill="none" />
      </g>

      <g transform="translate(180, 170)">
        <path d="M-3,-3 L0,3 L3,-3 Z" fill="#fef3c7" /> {/* Cheese */}
      </g>
    </svg>
  )
}

function ForagingAnimation() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="300" height="200" fill="#e5e7eb" />

      {/* Trash Can */}
      <g transform="translate(150, 120)">
        <rect x="-30" y="-50" width="60" height="70" rx="5" fill="#6b7280" />
        <rect x="-35" y="-55" width="70" height="10" rx="5" fill="#9ca3af" />
        <path d="M-20,-40 L-20,10 M0,-40 L0,10 M20,-40 L20,10" stroke="#4b5563" strokeWidth="3" strokeDasharray="3,3" />
        {/* Trash Items */}
        <path d="M-25,-20 L-15,-30 L-5,-20 L5,-30 L15,-20 L25,-30 L25,-10 L-25,-10 Z" fill="#d1d5db" />
        <circle cx="-10" cy="-15" r="5" fill="#ef4444" /> {/* Apple core */}
        <rect x="5" cy="-20" width="10" height="5" fill="#fbbf24" /> {/* Banana peel */}
      </g>

      {/* Raccoon */}
      <g transform="translate(150, 150)">
        {/* Body */}
        <ellipse cx="0" cy="0" rx="25" ry="15" fill="#4b5563" />

        {/* Head (looking up into trash can) */}
        <circle cx="0" cy="-20" r="15" fill="#4b5563" />

        {/* Face Mask */}
        <path d="M-10,-25 C-5,-30 5,-30 10,-25 C10,-20 5,-15 0,-15 C-5,-15 -10,-20 -10,-25" fill="#e5e7eb" />

        {/* Eyes */}
        <circle cx="-5" cy="-22" r="3" fill="#1f2937" />
        <circle cx="5" cy="-22" r="3" fill="#1f2937" />
        <circle cx="-5" cy="-23" r="1" fill="white" />
        <circle cx="5" cy="-23" r="1" fill="white" />

        {/* Nose */}
        <circle cx="0" cy="-18" r="2" fill="#1f2937" />

        {/* Ears */}
        <circle cx="-8" cy="-28" r="5" fill="#4b5563" />
        <circle cx="8" cy="-28" r="5" fill="#4b5563" />

        {/* Tail */}
        <path d="M-25,0 C-35,10 -35,-10 -25,0" stroke="#4b5563" strokeWidth="6" fill="none" />
        <path d="M-25,0 C-35,10 -35,-10 -25,0" stroke="#9ca3af" strokeWidth="4" strokeDasharray="3,3" fill="none" />

        {/* Front Legs (reaching up) */}
        <rect x="-15" y="-5" width="6" height="15" rx="3" fill="#4b5563" transform="rotate(-30 -15 -5)" />
        <rect x="15" y="-5" width="6" height="15" rx="3" fill="#4b5563" transform="rotate(30 15 -5)" />

        {/* Back Legs */}
        <rect x="-15" y="10" width="6" height="12" rx="3" fill="#4b5563" />
        <rect x="15" y="10" width="6" height="12" rx="3" fill="#4b5563" />

        {/* Paws */}
        <circle cx="-20" cy="5" r="3" fill="#1f2937" />
        <circle cx="20" cy="5" r="3" fill="#1f2937" />
        <circle cx="-15" cy="22" r="3" fill="#1f2937" />
        <circle cx="15" cy="22" r="3" fill="#1f2937" />
      </g>

      {/* Ground */}
      <rect x="0" y="170" width="300" height="30" fill="#9ca3af" />
    </svg>
  )
}
