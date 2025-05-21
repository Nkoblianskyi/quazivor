import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function AccessDenied() {
  return (
    <div className="flex items-center justify-center py-16 bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="mb-6">You must be 18+ to enter this site.</p>
        <Link href="/">
          <Button className="w-full">Return to Homepage</Button>
        </Link>
      </div>
    </div>
  )
}
