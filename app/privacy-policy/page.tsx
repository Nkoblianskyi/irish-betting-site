import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Top Irish Betting Site",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="text-muted-foreground">
            We may collect personal information that you voluntarily provide to us when you interact with our website.
            This may include your name, email address, and any other information you choose to provide.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="text-muted-foreground">
            We may use the information we collect for various purposes, including to:
          </p>
          <ul className="list-disc pl-6 mt-2 text-muted-foreground">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Cookies</h2>
          <p className="text-muted-foreground">
            We use cookies and similar tracking technologies to track activity on our website and hold certain
            information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
          <p className="text-muted-foreground">
            We may employ third-party companies and individuals due to the following reasons:
          </p>
          <ul className="list-disc pl-6 mt-2 text-muted-foreground">
            <li>To facilitate our website</li>
            <li>To provide the website on our behalf</li>
            <li>To perform website-related services</li>
            <li>To assist us in analyzing how our website is used</li>
          </ul>
          <p className="text-muted-foreground mt-2">
            These third parties have access to your Personal Information only to perform these tasks on our behalf and
            are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p className="text-muted-foreground">
            The security of your data is important to us, but remember that no method of transmission over the Internet,
            or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
            protect your Personal Information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at info@topirishbettingsite.com.
          </p>
        </section>

        <p className="text-sm text-muted-foreground mt-8">Last updated: May 2025</p>
      </div>
    </div>
  )
}
