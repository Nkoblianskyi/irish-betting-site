export interface BettingSite {
  reviews: number
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
}

export const bettingSites: BettingSite[] = [
    {
    id: "betiton",
    name: "Betiton",
    logo: "/betiton.png",
    score: 9.9,
    bonus: "BET €10 GET €50",
    features: ["Live Streaming", "Cash Out Feature", "Mobile App"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betiton.com/en-ie/sport/",
    reviews: 3276,
  },
  {
    id: "mrplay",
    name: "Mr.Play",
    logo: "/mr-play.png",
    score: 9.8,
    bonus: "BET €5 GET €20",
    features: ["Betting Exchange", "Best Odds", "Cash Out"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://ie.mrplay.com/sport/",
    reviews: 2985,
  },
    {
    id: "quinn",
    name: "QuinnBet",
    logo: "/quinn.png",
    score: 9.7,
    bonus: "BET €10 GET €10",
    features: ["Fast Payouts", "Live Betting", "Loyalty Program"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.quinnbet.com/ie/sports",
    reviews: 2754,
  },

]
