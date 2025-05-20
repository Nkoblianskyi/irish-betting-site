import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | Top Irish Betting Site",
  description: "Read our terms and conditions for using Top Irish Betting Site.",
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using topirishbettingsite.com, you accept and agree to be bound by the terms and provisions
            of this agreement. If you do not agree to abide by these terms, please do not use this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Age Restriction</h2>
          <p className="text-muted-foreground">
            The content on this website is intended for individuals who are at least 18 years old. By accessing this
            site, you confirm that you are at least 18 years of age.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Disclaimer</h2>
          <p className="text-muted-foreground">
            The information provided on topirishbettingsite.com is for general informational purposes only. While we
            strive to provide accurate and up-to-date information, we make no representations or warranties of any kind,
            express or implied, about the completeness, accuracy, reliability, suitability, or availability of the
            information contained on the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. External Links</h2>
          <p className="text-muted-foreground">
            Our website may contain links to external websites that are not provided or maintained by us. We do not
            guarantee the accuracy, relevance, timeliness, or completeness of any information on these external
            websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Affiliate Disclosure</h2>
          <p className="text-muted-foreground">
            We may receive compensation from the betting sites we review. This compensation may impact how and where
            sites appear on the page, including the order in which they appear. However, this does not influence our
            evaluations. All site reviews are based on our objective analysis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Responsible Gambling</h2>
          <p className="text-muted-foreground">
            We promote responsible gambling and encourage users to be aware of the risks associated with gambling. If
            you believe you may have a gambling problem, please seek help from professional organizations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Changes to Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right to modify these terms at any time. We encourage users to check this page regularly for
            any changes. Your continued use of the website following the posting of changes constitutes your acceptance
            of those changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Contact Information</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms and Conditions, please contact us at
            info@topirishbettingsite.com.
          </p>
        </section>

        <p className="text-sm text-muted-foreground mt-8">Last updated: May 2025</p>
      </div>
    </div>
  )
}
