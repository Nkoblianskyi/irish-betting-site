import type { Metadata } from "next"
import Hero from "@/components/hero"
import BettingSites from "@/components/betting-sites"
import HowWeRank from "@/components/how-we-rank"
import ResponsibleGambling from "@/components/responsible-gambling"
import TopOffersModal from "@/components/top-offers-modal"

export const metadata: Metadata = {
  title: "Top Irish Betting Site | Ireland's Best Betting Platforms",
  description:
    "Compare the best online betting sites in Ireland. Expert reviews, exclusive bonuses, and responsible gambling resources.",
}

export default function Home() {
  return (
    <div className={`relative min-h-screen bg-background/80 bg-[url('/bg2.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/40 before:z-[-1]`}>
      <TopOffersModal />
      <Hero />
      <BettingSites />
      <HowWeRank />
      <ResponsibleGambling />
    </div>
  )
}
