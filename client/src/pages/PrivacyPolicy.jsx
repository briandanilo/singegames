import './Legal.css';

export default function PrivacyPolicy() {
  return (
    <main className="page legal-page">
      <div className="container">
        <div className="legal-header">
          <p className="section-label">Legal</p>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="legal-meta">Effective: January 1, 2024 &nbsp;|&nbsp; Last updated: June 1, 2025</p>
        </div>
        <div className="prose">
          <p>
            Singe Games ("we", "us", or "our") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website or play our games. Please read this policy carefully.
            If you disagree with its terms, please discontinue use of our services.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>1.1 Information You Provide</h3>
          <p>We collect information you voluntarily provide when you:</p>
          <ul>
            <li>Register for an account (username, email address, password)</li>
            <li>Fill out a contact form (name, email, message content)</li>
            <li>Purchase in-game items (billing address, payment method — processed by our payment provider)</li>
            <li>Participate in surveys, promotions, or beta programs</li>
            <li>Communicate with our support team</li>
          </ul>

          <h3>1.2 Information Collected Automatically</h3>
          <p>When you use our services, we automatically collect:</p>
          <ul>
            <li>Log data (IP address, browser type, pages visited, timestamps)</li>
            <li>Device information (hardware model, operating system, unique device identifiers)</li>
            <li>Gameplay data (session length, in-game actions, progress, achievements)</li>
            <li>Cookies and similar tracking technologies (see Section 6)</li>
          </ul>

          <h3>1.3 Information from Third Parties</h3>
          <p>
            If you connect a third-party account (e.g., Steam, Discord, Google, Apple) we may receive
            information from those platforms as permitted by their privacy policies and your settings.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and maintain our games and website</li>
            <li>Process transactions and send related information (receipts, confirmations)</li>
            <li>Send administrative communications (service updates, security alerts)</li>
            <li>Send marketing communications, where you have consented</li>
            <li>Prevent fraud, cheating, and abuse of our services</li>
            <li>Analyze usage to improve game design and user experience</li>
            <li>Comply with legal obligations</li>
            <li>Respond to your inquiries and provide customer support</li>
          </ul>

          <h2>3. Sharing Your Information</h2>
          <p>We do not sell your personal information. We may share it with:</p>
          <ul>
            <li><strong>Service providers</strong> — third parties that assist us in operating our services (hosting, analytics, payment processing, email delivery). They are contractually required to protect your data.</li>
            <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets, your information may be transferred as a business asset.</li>
            <li><strong>Law enforcement</strong> — when required by law, or to protect the rights, property, or safety of Singe Games, our players, or the public.</li>
            <li><strong>With your consent</strong> — in other cases with your explicit consent.</li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is active or as needed to
            provide you services. You may request deletion of your account and associated data at any time
            by contacting <a href="mailto:privacy@singegames.com">privacy@singegames.com</a>. We may retain
            certain information as required by law or for legitimate business purposes.
          </p>

          <h2>5. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict certain processing of your data</li>
            <li>Data portability (receive your data in a machine-readable format)</li>
            <li>Withdraw consent at any time, where processing is based on consent</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <p>
            To exercise any of these rights, email us at <a href="mailto:privacy@singegames.com">privacy@singegames.com</a>.
            We will respond within 30 days.
          </p>

          <h2>6. Cookies</h2>
          <p>
            We use cookies and similar technologies to operate our services. For details on what cookies
            we use and how to manage them, please see our <a href="/cookies">Cookie Policy</a>.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            Our services are not directed to children under 13 (or 16 in certain jurisdictions). We do
            not knowingly collect personal information from children. If we learn that we have collected
            such information, we will promptly delete it. If you believe a child has provided us with
            personal information, contact <a href="mailto:privacy@singegames.com">privacy@singegames.com</a>.
          </p>

          <h2>8. International Transfers</h2>
          <p>
            Singe Games operates globally. Your information may be transferred to and processed in countries
            other than your own. Where required, we implement appropriate safeguards (such as Standard
            Contractual Clauses) to protect your information during international transfers.
          </p>

          <h2>9. Security</h2>
          <p>
            We implement industry-standard technical and organizational measures to protect your personal
            information. However, no method of transmission over the internet is 100% secure, and we
            cannot guarantee absolute security.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes
            by posting the new policy on this page and updating the "Last updated" date above. Continued
            use of our services after changes constitutes acceptance of the revised policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            Questions about this Privacy Policy? Contact us at:
          </p>
          <ul>
            <li>Email: <a href="mailto:privacy@singegames.com">privacy@singegames.com</a></li>
            <li>Mailing address: Singe Games, 123 Developer Lane, Suite 400, Austin, TX 78701</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
