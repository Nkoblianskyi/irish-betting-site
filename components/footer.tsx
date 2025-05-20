import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Legal links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Site Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Center: Responsible Gambling */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Responsible Gambling</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-indigo-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                <Link href="https://www.gambleaware.org/" className="transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/gamble-aware.png"
                    alt="gamble-aware"
                    width={120}
                    height={100}
                    className="mb-2 mt-4"
                  />
                </Link>
              </div>

              <div className="bg-indigo-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                <Link href="https://gamblingcare.ie/" className="transition-transform duration-300 hover:scale-105">
                  <Image src="/GamblingCare-w.png" alt="GamCare" width={120} height={100} className="mb-2 mt-4" />
                </Link>
              </div>

              <div className="bg-indigo-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                <Link
                  href="https://www.problemgambling.ie/"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src="/extern-problem.png"
                    alt="extern-problem"
                    width={120}
                    height={100}
                    className="mb-2 mt-4"
                  />
                </Link>
              </div>

              <div className="bg-indigo-900/50 p-3 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 flex-col">
                <Link
                  href="https://www.gamcare.org.uk/"
                  className="transition-transform duration-300 hover:scale-105 mt-4"
                >
                  <Image src="/gamcare.png" alt="GambleAware" width={120} height={100} className="mb-2 mt-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Disclaimer */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Disclaimer</h3>
            <p className="text-xs text-gray-300">
              The services and promotional offers featured here are intended exclusively for individuals aged 18 or
              older located in Ireland. We do not bear responsibility for third-party terms. Gambling involves risk and
              should be approached responsibly.
            </p>
            <p className="text-xs text-emerald-400 mt-4">Contact: info@topirishbettingsite.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs text-emerald-400">&copy; {currentYear} Top Irish Betting Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
