"use client";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      
      <h1 className="text-3xl font-bold mb-2 text-[var(--primary)]">
        Privacy Policy
      </h1>


      <div className="mt-10 space-y-8 text-black/80 leading-relaxed">

        {/* 1 */}
        <div>
          <h2 className="text-xl mb-2">1. Introduction</h2>
          <p>
            Salil Javeri ("we," "our," "us") is committed to protecting your
            personal information. This Privacy Policy explains how we collect,
            use, store, and share your data when you use our website and mobile application.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-xl mb-2">2. Information We Collect</h2>
          
          <p className="mb-2 font-medium">Personal Information:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Name, email address, and phone number (at registration)</li>
            <li>Billing information (processed by Razorpay — not stored by us)</li>
            <li>Device information and IP address</li>
          </ul>

          <p className="mb-2 font-medium">Usage Data:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Books read or listened to</li>
            <li>Reading and listening duration and progress</li>
            <li>App interaction and feature usage</li>
          </ul>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-xl mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To create and manage your account</li>
            <li>To process payments via Razorpay</li>
            <li>To deliver subscribed content</li>
            <li>To send billing notifications and service updates</li>
            <li>To personalize book recommendations</li>
            <li>To improve platform performance</li>
          </ul>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-xl mb-2">4. Payment Data</h2>
          <p>
            All payment transactions are handled by Razorpay Payment Gateway.
            We do not store credit card, debit card, UPI, or banking information
            on our servers. Razorpay's Privacy Policy applies to payment data.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-xl mb-2">5. Data Sharing</h2>
          <p className="mb-2">
            We do not sell or rent your personal data. We may share data with:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Razorpay (for payment processing)</li>
            <li>Cloud hosting providers (for data storage)</li>
            <li>Analytics tools (for usage insights, in anonymized form)</li>
            <li>Legal authorities (if required by law)</li>
          </ul>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-xl mb-2">6. Cookies</h2>
          <p>
            Our website uses cookies for session management, analytics, and
            personalization. You can control cookies through your browser
            settings. Disabling cookies may affect platform functionality.
          </p>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-xl mb-2">7. Data Retention</h2>
          <p>
            We retain your account data for as long as your account is active.
            Upon account deletion, data is removed within 30 days, except where
            retention is required by law.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-xl mb-2">8. Your Rights</h2>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1 mb-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and data</li>
            <li>Opt out of promotional communications</li>
          </ul>
          <p>
            To exercise these rights, email: info@saliljaveri.com
          </p>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-xl mb-2">9. Data Security</h2>
          <p>
            We implement industry-standard security measures including SSL
            encryption. However, no method of transmission over the internet
            is 100% secure.
          </p>
        </div>

        {/* 10 */}
        <div>
          <h2 className="text-xl mb-2">10. Children's Privacy</h2>
          <p>
            The platform is not intended for children below 13 years of age.
            We do not knowingly collect data from children. If discovered,
            such data will be deleted immediately.
          </p>
        </div>

        {/* 11 */}
        <div>
          <h2 className="text-xl mb-2">11. Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Users will be
            notified of significant changes via email or in-app notification.
          </p>
        </div>

        {/* 12 */}
        <div>
          <h2 className="text-xl mb-2">12. Contact</h2>
          <p>
            Email: info@saliljaveri.com <br />
            Location: Mumbai, Maharashtra, India
          </p>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;