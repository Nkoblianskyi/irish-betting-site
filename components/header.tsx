"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center shadow-md">
              <Trophy className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-emerald-600 sm:block">Ireland's Best Betting Sites</span>
          </div>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-emerald-600" /> : <Menu className="h-6 w-6 text-emerald-600" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-emerald-700 hover:text-emerald-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-emerald-700 hover:text-emerald-500 transition-colors">
            About Us
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-sm font-medium text-emerald-700 hover:text-emerald-500 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-emerald-700 hover:text-emerald-500 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/cookie-policy"
            className="text-sm font-medium text-emerald-700 hover:text-emerald-500 transition-colors"
          >
            Cookie Policy
          </Link>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium text-emerald-700 hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-emerald-700 hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm font-medium text-emerald-700 hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-emerald-700 hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm font-medium text-emerald-700 hover:text-emerald-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
