"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronRight, ChevronLeft, Quote, User, UserCircle, UserCog, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    icon: "User", // Lucide icon name
    iconColor: "text-amber-500",
    iconBg: "bg-amber-100",
    role: "Casual Gamer",
    rating: 5,
    text: "Urban Raccoon is the perfect game to unwind after work. The raccoon animations are adorable, and the gameplay is surprisingly strategic. I love finding new routes through the city!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    icon: "UserCircle", // Lucide icon name
    iconColor: "text-green-500",
    iconBg: "bg-green-100",
    role: "Mobile Gaming Enthusiast",
    rating: 5,
    text: "This game is so unique! I've never played anything where you get to be a raccoon before. The different environments keep things interesting, and I love the night-time stealth missions.",
  },
  {
    id: 3,
    name: "Michael Chen",
    icon: "UserCog", // Lucide icon name
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
    role: "Strategy Game Fan",
    rating: 4,
    text: "Urban Raccoon has surprising depth for a casual game. Planning your foraging routes and avoiding dangers requires real strategy. The only thing I'd improve is adding more character customization.",
  },
  {
    id: 4,
    name: "Emma Wilson",
    icon: "UserCheck", // Lucide icon name
    iconColor: "text-purple-500",
    iconBg: "bg-purple-100",
    role: "Wildlife Lover",
    rating: 5,
    text: "As someone who loves wildlife, I appreciate how this game teaches about raccoon behavior while being fun. The forest environments are beautifully designed and feel so immersive!",
  },
]

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">What Players Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of happy raccoons on their urban adventures
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-amber-300/20">
            <Quote className="w-32 h-32" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-amber-50 rounded-2xl p-8 md:p-12 shadow-xl relative z-10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex flex-col items-center">
                  <div
                    className={`w-24 h-24 rounded-full overflow-hidden border-4 border-amber-300 mb-4 flex items-center justify-center ${testimonials[current].iconBg}`}
                  >
                    {testimonials[current].icon === "User" && (
                      <User className={`h-12 w-12 ${testimonials[current].iconColor}`} />
                    )}
                    {testimonials[current].icon === "UserCircle" && (
                      <UserCircle className={`h-12 w-12 ${testimonials[current].iconColor}`} />
                    )}
                    {testimonials[current].icon === "UserCog" && (
                      <UserCog className={`h-12 w-12 ${testimonials[current].iconColor}`} />
                    )}
                    {testimonials[current].icon === "UserCheck" && (
                      <UserCheck className={`h-12 w-12 ${testimonials[current].iconColor}`} />
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{testimonials[current].name}</h3>
                  <p className="text-amber-700">{testimonials[current].role}</p>
                  <div className="flex mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[current].rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-gray-700 italic">"{testimonials[current].text}"</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-amber-300 text-amber-700 hover:bg-amber-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrent(idx)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === current ? "bg-amber-500 w-5" : "bg-amber-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-amber-300 text-amber-700 hover:bg-amber-100"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
