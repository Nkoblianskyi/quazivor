"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is Urban Raccoon a gambling game?",
    answer:
      "No, Urban Raccoon is absolutely not a gambling game. It's a free social game for entertainment and educational purposes only. There is no real money involved, no betting, and no prizes with monetary value.",
  },
  {
    question: "Why is there age verification?",
    answer:
      "While our game contains no gambling elements, we require age verification (18+) because the game contains some themes and challenges that may not be suitable for younger audiences.",
  },
  {
    question: "What is the educational value of Urban Raccoon?",
    answer:
      "Urban Raccoon teaches players about raccoon behavior, urban wildlife adaptation, foraging strategies, and environmental awareness, all in an entertaining format.",
  },
  {
    question: "Can I make in-game purchases?",
    answer:
      "No, Urban Raccoon does not support or require any real-money purchases. All game features are available for free, and in-game points have no monetary value.",
  },
  {
    question: "Is the game available on mobile devices?",
    answer:
      "Yes! Urban Raccoon is available on both iOS and Android devices, as well as through your web browser. Your progress syncs across all platforms.",
  },
  {
    question: "How do I report a bug or issue with the game?",
    answer:
      "You can report bugs or issues through our contact form or by emailing contact@quazivor.com. Please include details about what happened and what device you're using.",
  },
]

export default function FaqSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to know about Urban Raccoon</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600">
              Still have questions?{" "}
              <a href="/contact" className="text-amber-600 hover:underline font-medium">
                Contact our support team
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
