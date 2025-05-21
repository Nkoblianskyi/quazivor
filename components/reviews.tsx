import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

// Mock data for reviews
const reviews = [
  {
    id: 1,
    name: "Alex Thompson",
    rating: 5,
    comment: "I love the graphics and chill vibe of the raccoon survival game!",
    date: "April 28, 2025",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    comment: "No stress, no money, just fun. Great idea with the raccoon theme!",
    date: "April 25, 2025",
  },
  {
    id: 3,
    name: "Michael Chen",
    rating: 4,
    comment: "The forest and city environments are beautiful. I enjoy playing this in my free time.",
    date: "April 22, 2025",
  },
  {
    id: 4,
    name: "Emma Wilson",
    rating: 5,
    comment: "Love competing with friends on the leaderboard. Pure entertainment!",
    date: "April 20, 2025",
  },
]

export default function Reviews() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Player Feedback</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                </div>
                <p className="mb-4 text-gray-700">"{review.comment}"</p>
                <p className="font-medium">- {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
