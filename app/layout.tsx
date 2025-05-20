import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import CookieConsentBanner from "@/components/cookie-consent-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Top Irish Betting Site | Ireland's Best Betting Platforms",
  description:
    "Compare the best online betting sites in Ireland. Expert reviews, exclusive bonuses, and responsible gambling resources.",
  keywords: "irish betting sites, online betting ireland, best bookmakers ireland, betting platforms ireland",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="container mx-auto px-4 py-4">{children}</main>
          <Footer />
          <CookieConsentBanner />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
