export default function Terms() {
  return (
    <div className="min-h-screen bg-ink pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-[5%]">
        <h1 className="text-gold text-5xl font-serif mb-8">Terms of Service</h1>
        <p className="text-white/60 text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="bg-white/5 border border-gold/35 rounded p-8 space-y-6 text-white/80">
          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">2. Use of Website</h2>
            <p className="leading-relaxed">
              You agree to use our website only for lawful purposes and in accordance with these Terms. You may not use our website in any way that could damage, disable, or impair the website.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">3. Products and Pricing</h2>
            <p className="leading-relaxed">
              All product descriptions, images, and prices are for informational purposes only. We reserve the right to modify product information and pricing at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">4. Orders and Payment</h2>
            <p className="leading-relaxed">
              When you place an order, you warrant that you are legally capable of entering into contracts. We reserve the right to refuse any order for any reason.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">5. Shipping and Delivery</h2>
            <p className="leading-relaxed">
              We ship to addresses within our service areas. Delivery times are estimates only and not guaranteed. Risk of loss passes to you upon delivery.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">6. Returns and Refunds</h2>
            <p className="leading-relaxed">
              We accept returns within 30 days of delivery for items in original condition. Custom or personalized items may not be returned.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">7. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website, including text, images, logos, and designs, is the property of Aurelia & Crimson and is protected by intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">8. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">9. Changes to Terms</h2>
            <p className="leading-relaxed">
              We may update these Terms from time to time. Continued use of our website after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">10. Contact</h2>
            <p className="leading-relaxed">
              For questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@aureliacrimson.com" className="text-gold hover:text-gold-light transition-colors">
                legal@aureliacrimson.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
