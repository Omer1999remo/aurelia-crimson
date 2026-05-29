export default function Privacy() {
  return (
    <div className="min-h-screen bg-ink pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-[5%]">
        <h1 className="text-gold text-5xl font-serif mb-8">Privacy Policy</h1>
        <p className="text-white/60 text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert prose-gold">
          <div className="bg-white/5 border border-gold/35 rounded p-8 space-y-6 text-white/80">
            <section>
              <h2 className="text-gold text-2xl font-serif mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information you provide directly, such as when you create an account, place an order, or contact us. This includes your name, email address, shipping address, phone number, and payment information.
              </p>
              <p className="leading-relaxed mt-3">
                We may also collect information about your browsing activity and device information when you visit our website through cookies and similar technologies.
              </p>
            </section>

            <section>
              <h2 className="text-gold text-2xl font-serif mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your purchases</li>
                <li>Provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-gold text-2xl font-serif mb-4">3. Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell your personal information. We may share your information with trusted third parties who assist us in operating our business, such as payment processors, shipping carriers, and service providers.
              </p>
            </section>

            <section>
              <h2 className="text-gold text-2xl font-serif mb-4">4. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-gold text-2xl font-serif mb-4">5. Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time.
              </p>
            </section>

            <section>
              <h2 className="text-gold text-2xl font-serif mb-4">6. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@aureliacrimson.com" className="text-gold hover:text-gold-light transition-colors">
                  privacy@aureliacrimson.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
