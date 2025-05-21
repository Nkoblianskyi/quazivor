"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Mail, Phone, MapPin, Building, Mountain, Shield, Info } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacy: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Validate form
    if (!formData.name || !formData.email || !formData.message || !formData.privacy) {
      setError("Please fill in all required fields and accept the privacy policy.")
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitted(true)
      setShowConfirmation(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        privacy: false,
      })
    } catch (err) {
      setError("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Have questions about Rescue Hero or need assistance? Our team is here to help. Fill out the form below or
            use our contact information to get in touch.
          </p>

          {/* Important Disclaimer Banner */}
          <Alert className="mb-8 bg-blue-50 border-blue-200">
            <Info className="h-4 w-4 text-blue-700" />
            <AlertTitle className="text-blue-700">Educational Entertainment Only</AlertTitle>
            <AlertDescription className="text-blue-700">
              Rescue Hero is a free social game for entertainment and educational purposes only. No real money is
              involved, no gambling takes place, and no prizes are awarded. This is not a casino or gambling site.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Information */}
            <div>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <Building className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Quazivor Inc.</h2>
                      <p className="text-gray-600">Educational Gaming & Entertainment</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-8">
                    Quazivor is a developer of educational social games designed for pure entertainment. Our flagship
                    game, Urban Raccoon Survival, offers players an exciting adventure experience focused on raccoon
                    survival in forest and urban environments. Founded in 2020, we're committed to creating engaging,
                    responsible gaming experiences for adults.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-amber-700 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <span className="text-amber-600">contact@quazivor.com</span>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-amber-700 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <address className="not-italic text-gray-700">
                          46 Robson St
                          <br />
                          Vancouver, BC, V6B 2B5
                          <br />
                          Canada
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-amber-700 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <span className="text-amber-600">+1 604 165 3314</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust Signals Section */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-blue-700 mr-2" />
                      <h3 className="font-semibold">Our Commitments</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Educational entertainment with no real money involved</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Strict age verification for responsible gaming</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Data protection compliant with privacy regulations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>Transparent business practices</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold mb-3">Website</h3>
                    <p className="text-gray-700">quazivor.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Mountain className="h-6 w-6 text-blue-700" />
                    </div>
                    <h2 className="text-2xl font-bold">Send Us a Message</h2>
                  </div>

                  {error && (
                    <div className="bg-red-50 p-4 rounded-md flex items-start mb-6">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.privacy}
                        onCheckedChange={handleCheckboxChange}
                        required
                      />
                      <Label htmlFor="privacy" className="text-sm leading-tight">
                        I agree with the{" "}
                        <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </Link>{" "}
                        and consent to the processing of my personal data.
                        <span className="text-red-500">*</span>
                      </Label>
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Your information will be sent to info@zentriqa.com
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Educational Purpose Section */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-center">Educational Entertainment</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">No Real Money</h3>
                <p className="text-gray-600">
                  Our game involves no real money transactions. All points and rewards are virtual and have no monetary
                  value.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Educational Purpose</h3>
                <p className="text-gray-600">
                  Rescue Hero teaches about mountain safety, rescue operations, and the Canadian Rockies environment.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Social Gaming</h3>
                <p className="text-gray-600">
                  Our focus is on creating a fun, social experience that brings people together through adventure
                  scenarios.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold mb-2">Is Rescue Hero a gambling game?</h3>
                <p className="text-gray-700">
                  No, Rescue Hero is absolutely not a gambling game. It's a free social game for entertainment and
                  educational purposes only. There is no real money involved, no betting, and no prizes with monetary
                  value.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold mb-2">Why is there age verification?</h3>
                <p className="text-gray-700">
                  While our game contains no gambling elements, we require age verification (18+) because the game
                  simulates emergency rescue scenarios that may not be suitable for younger audiences.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold mb-2">What is the educational value of Rescue Hero?</h3>
                <p className="text-gray-700">
                  Rescue Hero teaches players about mountain safety, rescue operations, wilderness survival, and the
                  geography of the Canadian Rockies, all in an entertaining format.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold mb-2">Can I make in-game purchases?</h3>
                <p className="text-gray-700">
                  No, Rescue Hero does not support or require any real-money purchases. All game features are available
                  for free, and in-game points have no monetary value.
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6">Our Location</h2>
            <div className="bg-gray-200 rounded-lg p-8 text-center">
              <p className="text-lg font-medium">Quazivor Inc.</p>
              <p>46 Robson St, Vancouver, BC, V6B 2B5, Canada</p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
              Message Sent Successfully
            </DialogTitle>
            <DialogDescription>Thank you for contacting Zentriqa Inc.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-700">
              We have received your message and will get back to you as soon as possible, usually within 1-2 business
              days.
            </p>
            <p className="mt-2 text-gray-700">
              If your inquiry is urgent, please contact us directly at{" "}
              <span className="text-blue-600">+1 604 165 3314</span>.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowConfirmation(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
