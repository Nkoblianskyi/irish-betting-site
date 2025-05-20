import Image from "next/image"
import { Star } from "lucide-react"
import { bettingSites } from "@/lib/betting-sites"

export default function BettingSites() {
  return (
    <section className="py-2 md:py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center text-emerald-800">
          Top Irish Betting Sites
        </h2>

        <div className="space-y-3 md:space-y-6">
          {bettingSites.map((site) => (
            <div
              key={site.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-shadow"
            >
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="flex items-center p-2 border-b">
                  <div className="w-1/4 flex justify-center">
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={site.name}
                      width={80}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <div className="w-2/4 px-2">
                    <h3 className="font-bold text-sm text-emerald-800">{site.name}</h3>
                    <p className="text-xs text-emerald-600">{site.bonus}</p>
                  </div>
                  <div className="w-1/4 flex flex-col items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(site.score / 2)
                              ? "text-yellow-400 fill-yellow-400"
                              : i < site.score / 2
                                ? "text-yellow-400 fill-yellow-400 opacity-50"
                                : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-emerald-700">{site.score.toFixed(1)}/10</span>
                  </div>
                </div>
                <div className="p-2 flex justify-between items-center">
                  <div className="w-3/5">
                    <p className="text-xs text-emerald-500 mb-1">{site.reviews.toLocaleString()} reviews</p>
                    <div className="flex flex-wrap gap-1">
                      {site.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="text-xs bg-emerald-50 text-emerald-700 px-1 py-0.5 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-2/5 pl-2">
                    <a
                      href={site.link}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2 px-2 rounded-md transition-colors font-medium text-xs block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Bonus
                    </a>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-12 md:gap-4">
                {/* Logo */}
                <div className="md:col-span-2 flex items-center justify-center p-4 bg-gray-50">
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    width={120}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>

                {/* Bonus */}
                <div className="md:col-span-3 flex flex-col justify-center p-4">
                  <h3 className="font-bold text-lg mb-1 text-emerald-800">{site.name}</h3>
                  <p className="text-sm text-emerald-600 font-medium">{site.bonus}</p>
                  <div className="mt-1 text-xs text-emerald-500">{site.reviews.toLocaleString()} reviews</div>
                </div>

                {/* Rating */}
                <div className="md:col-span-2 flex flex-col items-center justify-center p-4 border-l border-r border-gray-200">
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(site.score / 2)
                            ? "text-yellow-400 fill-yellow-400"
                            : i < site.score / 2
                              ? "text-yellow-400 fill-yellow-400 opacity-50"
                              : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-emerald-700">{site.score.toFixed(1)}/10</span>
                </div>

                {/* Features */}
                <div className="md:col-span-3 p-4 border-l border-gray-200">
                  <ul className="space-y-1">
                    {site.features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-start">
                        <span className="text-emerald-600 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="md:col-span-2 p-4 flex flex-col items-center justify-center border-l border-gray-200">
                  <a
                    href={site.link}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 px-4 rounded-md transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Bonus
                  </a>
                  <p className="text-xs text-emerald-600 mt-2 text-center">18+ T&Cs Apply</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 md:mt-8 text-center">
          <p className="text-xs md:text-sm text-emerald-600 max-w-3xl mx-auto">
            All betting sites listed are fully licensed and regulated in Ireland. Terms and conditions apply to all
            bonus offers. Please gamble responsibly.
          </p>
        </div>
      </div>
    </section>
  )
}
