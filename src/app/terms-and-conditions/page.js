"use client";

const TermsAndConditions = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      
      <h1 className="text-3xl font-bold mb-8 text-[var(--primary)]">
        Terms & Conditions
      </h1>

      <div className="space-y-8 text-black/80 leading-relaxed">

        {/* Section 1 */}
        <div>
          <h2 className="text-xl mb-2">1. Introduction</h2>
          <p>
            Welcome to our platform. By accessing or using our website, you
            agree to comply with these Terms and Conditions. Please read them
            carefully before using our services.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl mb-2">2. Use of Our Services</h2>
          <p>
            You may use our website only for lawful purposes. You agree not to
            misuse our platform or attempt to access it using methods other
            than the interface provided.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl mb-2">3. Intellectual Property</h2>
          <p>
            All content on this website including text, graphics, logos, and
            digital products are the property of our platform and are protected
            by copyright and intellectual property laws.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl mb-2">4. User Responsibilities</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their
            accounts and ensuring that their use of the website does not harm
            other users or the platform.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-xl mb-2">5. Limitation of Liability</h2>
          <p>
            We are not responsible for any direct or indirect damages resulting
            from the use of our website or services.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-xl mb-2">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued
            use of the website means you accept the updated terms.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-xl mb-2">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms & Conditions, please
            contact us through our support page.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TermsAndConditions;