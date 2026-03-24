"use client";
import { useEffect } from "react";
const TermsAndConditions = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      
      <h1 className="text-3xl font-bold mb-2 text-[var(--primary)]">
        Terms & Conditions
      </h1>

      

      <div className="mt-10 space-y-8 text-black/80 leading-relaxed">

        {/* 1 */}
        <div>
          <h2 className="text-xl mb-2">1. Introduction</h2>
          <p>
            These Terms and Conditions ("Terms") govern your access to and use
            of the Salil Javeri platform (website and mobile application).
            By registering, subscribing, or using the platform, you agree to
            be bound by these Terms. If you do not agree, please discontinue use.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-xl mb-2">2. Platform Overview</h2>
          <p>
            The platform provides access to eBooks and Audiobooks authored or
            curated by Salil Javeri. Content is available through subscription-based
            plans (Basic, Pro, Premium). Access is valid only with an active subscription.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-xl mb-2">3. Eligibility</h2>
          <p>
            Users must be at least 13 years old. Users under 18 must have
            parental or guardian consent. By using the platform, you confirm
            that you meet these requirements.
          </p>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-xl mb-2">4. User Account</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You must provide accurate and current information.</li>
            <li>You are responsible for your account credentials.</li>
            <li>Account sharing is strictly prohibited.</li>
            <li>We may suspend accounts that violate these Terms.</li>
          </ul>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-xl mb-2">5. Subscription</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Subscriptions auto-renew monthly unless cancelled.</li>
            <li>Plan benefits are non-transferable.</li>
            <li>Access resets on each billing cycle.</li>
          </ul>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-xl mb-2">6. Payment</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>All payments are securely processed via Razorpay.</li>
            <li>Prices include applicable taxes unless stated otherwise.</li>
            <li>We do not store card or bank details.</li>
          </ul>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-xl mb-2">7. Cancellation & Refund</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You can cancel anytime from account settings.</li>
            <li>Access continues until billing period ends.</li>
            <li>No refunds for partially used plans.</li>
            <li>Technical refund requests reviewed within 7 days.</li>
          </ul>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-xl mb-2">8. Content Access & Restrictions</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Content is licensed, not sold.</li>
            <li>For personal, non-commercial use only.</li>
            <li>No copying, sharing, or redistribution allowed.</li>
            <li>Offline access is device-restricted.</li>
          </ul>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-xl mb-2">9. Intellectual Property</h2>
          <p>
            All books, audio, graphics, logos, and platform design are the
            intellectual property of Salil Javeri. Unauthorized use is prohibited.
          </p>
        </div>

        {/* 10 */}
        <div>
          <h2 className="text-xl mb-2">10. Prohibited Conduct</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sharing account credentials</li>
            <li>Bypassing platform security</li>
            <li>Using platform commercially</li>
            <li>Uploading harmful content</li>
            <li>Reverse engineering the app</li>
          </ul>
        </div>

        {/* 11 */}
        <div>
          <h2 className="text-xl mb-2">11. Availability</h2>
          <p>
            We strive for uninterrupted service but do not guarantee it.
            Maintenance updates will be communicated when possible.
          </p>
        </div>

        {/* 12 */}
        <div>
          <h2 className="text-xl mb-2">12. Termination</h2>
          <p>
            We may suspend or terminate accounts that violate these Terms
            without prior notice.
          </p>
        </div>

        {/* 13 */}
        <div>
          <h2 className="text-xl mb-2">13. Limitation of Liability</h2>
          <p>
            The platform is provided "as is." We are not liable for any
            indirect or consequential damages.
          </p>
        </div>

        {/* 14 */}
        <div>
          <h2 className="text-xl mb-2">14. Governing Law</h2>
          <p>
            These Terms are governed by Indian law. Jurisdiction lies in
            Mumbai, Maharashtra.
          </p>
        </div>

        {/* 15 */}
        <div>
          <h2 className="text-xl mb-2">15. Contact</h2>
          <p>
            Email: saliljaveri27@gmail.com <br />
            Phone: 8329928955 <br />
            Location: Mumbai, Maharashtra, India
          </p>
        </div>

      </div>
    </section>
  );
};

export default TermsAndConditions;