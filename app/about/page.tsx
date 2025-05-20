import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Top Irish Betting Site",
  description:
    "Learn about our team of betting experts and our mission to provide the best betting site reviews in Ireland.",
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">About Top Irish Betting Site</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-muted-foreground">
            At Top Irish Betting Site, our mission is to provide Irish bettors with accurate, up-to-date information
            about the best online betting platforms available in Ireland. We believe in transparency, honesty, and
            responsible gambling.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
          <p className="text-muted-foreground">
            Our team consists of experienced betting analysts, industry experts, and dedicated researchers who
            thoroughly test and evaluate each betting site we review. With decades of combined experience in the online
            betting industry, we have the knowledge and expertise to provide you with reliable recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Review Process</h2>
          <p className="text-muted-foreground">
            We take our review process seriously. Each betting site undergoes a comprehensive evaluation based on strict
            criteria, including licensing, bonus offers, user experience, market variety, odds quality, payment methods,
            customer support, and mobile compatibility. We regularly update our reviews to ensure the information
            remains current.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Responsible Gambling</h2>
          <p className="text-muted-foreground">
            We are committed to promoting responsible gambling. All the betting sites we recommend are licensed and
            regulated, ensuring they adhere to strict responsible gambling guidelines. We encourage our visitors to
            gamble responsibly and seek help if needed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions, suggestions, or concerns, please don't hesitate to contact us at
            info@topirishbettingsite.com. We value your feedback and are always looking to improve our service.
          </p>
        </section>
      </div>
    </div>
  )
}
