import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Top Irish Betting Site",
  description: "Learn about how we use cookies on Top Irish Betting Site.",
}

export default function CookiePage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. What Are Cookies</h2>
          <p className="text-muted-foreground">
            Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in
            your web browser and allows the website or a third-party to recognize you and make your next visit easier
            and the website more useful to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Cookies</h2>
          <p className="text-muted-foreground">We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 mt-2 text-muted-foreground">
            <li>To enable certain functions of the website</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>To enable advertisements delivery, including behavioral advertising</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Types of Cookies We Use</h2>
          <p className="text-muted-foreground">
            We use both session and persistent cookies on our website and we use different types of cookies to run the
            website:
          </p>
          <ul className="list-disc pl-6 mt-2 text-muted-foreground">
            <li>
              <strong>Essential cookies.</strong> These are cookies that are required for the operation of our website.
              They include, for example, cookies that enable you to log into secure areas of our website.
            </li>
            <li>
              <strong>Analytical/performance cookies.</strong> They allow us to recognize and count the number of
              visitors and to see how visitors move around our website when they are using it. This helps us to improve
              the way our website works, for example, by ensuring that users are finding what they are looking for
              easily.
            </li>
            <li>
              <strong>Functionality cookies.</strong> These are used to recognize you when you return to our website.
              This enables us to personalize our content for you and remember your preferences.
            </li>
            <li>
              <strong>Targeting cookies.</strong> These cookies record your visit to our website, the pages you have
              visited and the links you have followed. We will use this information to make our website and the
              advertising displayed on it more relevant to your interests.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. How to Manage Cookies</h2>
          <p className="text-muted-foreground">
            Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary
            from browser to browser, and from version to version. You can however obtain up-to-date information about
            blocking and deleting cookies via these links:
          </p>
          <ul className="list-disc pl-6 mt-2 text-muted-foreground">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" className="text-emerald-600 hover:underline">
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                className="text-emerald-600 hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                className="text-emerald-600 hover:underline"
              >
                Apple Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies"
                className="text-emerald-600 hover:underline"
              >
                Microsoft Internet Explorer
              </a>
            </li>
            <li>
              <a
                href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy"
                className="text-emerald-600 hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Changes to Our Cookie Policy</h2>
          <p className="text-muted-foreground">
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
            Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about our Cookie Policy, please contact us at info@topirishbettingsite.com.
          </p>
        </section>

        <p className="text-sm text-muted-foreground mt-8">Last updated: May 2025</p>
      </div>
    </div>
  )
}
