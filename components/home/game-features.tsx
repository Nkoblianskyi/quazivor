"use client"

import { motion } from "framer-motion"
import { Trees, Building2, Apple, Trash2, Droplets, PawPrintIcon as Paw, Moon, ShieldAlert } from "lucide-react"

const features = [
  {
    icon: Trees,
    title: "Forest Survival",
    description: "Navigate through dense forests, find natural food sources, and avoid predators.",
    color: "bg-green-100 text-green-700",
    delay: 0.1,
  },
  {
    icon: Building2,
    title: "Urban Exploration",
    description: "Explore city streets, parks, and alleys to discover hidden treasures and food.",
    color: "bg-gray-100 text-gray-700",
    delay: 0.2,
  },
  {
    icon: Apple,
    title: "Food Collection",
    description: "Gather berries, fruits, nuts, and other food to maintain your energy levels.",
    color: "bg-red-100 text-red-700",
    delay: 0.3,
  },
  {
    icon: Trash2,
    title: "Dumpster Diving",
    description: "Master the art of finding valuable items and food in trash cans and dumpsters.",
    color: "bg-amber-100 text-amber-700",
    delay: 0.4,
  },
  {
    icon: Droplets,
    title: "Water Finding",
    description: "Locate clean water sources essential for survival in both environments.",
    color: "bg-blue-100 text-blue-700",
    delay: 0.5,
  },
  {
    icon: Paw,
    title: "Raccoon Skills",
    description: "Use your natural raccoon abilities like dexterous paws and keen smell.",
    color: "bg-purple-100 text-purple-700",
    delay: 0.6,
  },
  {
    icon: Moon,
    title: "Night Adventures",
    description: "Take advantage of your nocturnal nature to explore when humans are asleep.",
    color: "bg-indigo-100 text-indigo-700",
    delay: 0.7,
  },
  {
    icon: ShieldAlert,
    title: "Danger Avoidance",
    description: "Avoid cars, dogs, and other threats that could end your raccoon adventure.",
    color: "bg-rose-100 text-rose-700",
    delay: 0.8,
  },
]

export default function GameFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Master Your Raccoon Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Survive and thrive in both natural and urban environments with these essential raccoon abilities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
