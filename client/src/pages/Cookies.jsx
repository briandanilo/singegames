import './Legal.css';

export default function Cookies() {
  return (
    <main className="page legal-page">
      <div className="container">
        <div className="legal-header">
          <p className="section-label">Legal</p>
          <h1 className="section-title">Cookie Policy</h1>
          <p className="legal-meta">Effective: January 1, 2024 &nbsp;|&nbsp; Last updated: June 1, 2025</p>
        </div>
        <div className="prose">
          <p>
            This Cookie Policy explains how Singe Games uses cookies and similar tracking technologies
            when you visit our website or play our games. It should be read alongside our{' '}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device by websites you visit. They are widely
            used to make websites work, improve efficiency, and provide information to site owners.
            We also use similar technologies such as pixel tags, web beacons, and local storage.
          </p>

          <h2>2. Types of Cookies We Use</h2>

          <h3>Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for our services to function. They enable you to log in,
            maintain your session, and access secure areas. You cannot opt out of these cookies
            as the Services cannot function without them.
          </p>

          <h3>Performance & Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website and games —
            pages visited, time spent, errors encountered. We use this data to improve the experience.
            Examples: Google Analytics, Mixpanel.
          </p>

          <h3>Functional Cookies</h3>
          <p>
            These remember choices you make (language, region, display preferences) to provide a
            more personalized experience. Refusing these may affect certain features.
          </p>

          <h3>Targeting & Advertising Cookies</h3>
          <p>
            These cookies track your browsing across sites to deliver relevant ads and measure
            campaign effectiveness. We work with third-party advertising partners who may set
            these cookies. You can opt out via the links in Section 4.
          </p>

          <h2>3. Third-Party Cookies</h2>
          <p>
            Some cookies on our site are set by third-party services we use, including:
          </p>
          <ul>
            <li>Google Analytics — usage analytics</li>
            <li>Discord — embedded widgets and login</li>
            <li>Stripe — secure payment processing</li>
            <li>Intercom — customer support chat</li>
          </ul>
          <p>
            These third parties have their own privacy policies and we recommend reviewing them.
          </p>

          <h2>4. Managing Cookies</h2>
          <p>You can control cookies in the following ways:</p>
          <ul>
            <li><strong>Browser settings</strong> — Most browsers allow you to refuse or delete cookies. Check your browser's help documentation for instructions.</li>
            <li><strong>Our cookie banner</strong> — When you first visit our site, you can accept or reject non-essential cookies via our consent banner.</li>
            <li><strong>Opt-out tools</strong> — For advertising cookies, use the <a href="https://optout.aboutads.info/" target="_blank" rel="noreferrer">DAA opt-out</a> or <a href="https://youronlinechoices.eu/" target="_blank" rel="noreferrer">Your Online Choices</a>.</li>
          </ul>
          <p>
            Note: Blocking all cookies may affect the functionality of our services.
          </p>

          <h2>5. Cookie Retention</h2>
          <p>
            Session cookies expire when you close your browser. Persistent cookies remain on your
            device until they expire or you delete them. Most of our persistent cookies expire
            within 12 months.
          </p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. The updated version will be indicated
            by the "Last updated" date above.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            Questions about cookies? Email <a href="mailto:privacy@singegames.com">privacy@singegames.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
