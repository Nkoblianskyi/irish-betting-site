"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { bettingSites } from "@/lib/betting-sites"

export default function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem("hasVisitedBefore")

    if (!visited) {
      // Show modal after 2 seconds for new visitors
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("hasVisitedBefore", "true")
        setHasVisited(true)
      }, 2000)

      return () => clearTimeout(timer)
    } else {
      setHasVisited(true)
    }
  }, [])

  return (
    <>
      {/* Button to open modal (only shown after first visit) */}
      {hasVisited && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full px-6 py-3 shadow-lg"
          >
            Top Offers
          </Button>
        </div>
      )}

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] sm:max-w-[350px] p-2 max-h-[80vh]">
          <DialogHeader className="pb-2">
            <DialogTitle className="text-center text-xl font-bold text-emerald-800">Top Betting Offers</DialogTitle>
          </DialogHeader>

          <div className="space-y-2 py-1">
            {bettingSites.map((site) => (
              <div
                key={site.id}
                className="flex flex-col items-center p-2 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-full flex items-center justify-center mb-1 h-12">
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    width={100}
                    height={30}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <p className="text-xs font-medium mb-1 text-center text-emerald-600">{site.bonus}</p>
                <a
                  href={site.link}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-1.5 rounded-md transition-colors text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Bonus
                </a>
                <p className="text-[10px] text-emerald-500 mt-0.5 text-center">18+ T&Cs Apply</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
