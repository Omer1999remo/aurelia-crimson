export default function Shipping() {
  return (
    <div className="min-h-screen bg-ink pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-[5%]">
        <h1 className="text-gold text-5xl font-serif mb-8">Shipping & Returns</h1>

        <div className="bg-white/5 border border-gold/35 rounded p-8 space-y-8 text-white/80">
          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">Shipping Information</h2>
            <div className="bg-white/5 border border-gold/25 rounded p-4 mb-6">
              <h3 className="text-white font-semibold mb-2">Free Standard Shipping</h3>
              <p className="text-white/60">On all orders over $500</p>
            </div>

            <table className="w-full mb-6">
              <thead>
                <tr className="text-gold text-sm uppercase tracking-widest">
                  <th className="text-left pb-3">Method</th>
                  <th className="text-left pb-3">Timeframe</th>
                  <th className="text-right pb-3">Cost</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-gold/20">
                  <td className="py-3">Standard Shipping</td>
                  <td className="py-3">5-7 business days</td>
                  <td className="py-3 text-right">Free *</td>
                </tr>
                <tr className="border-t border-gold/20">
                  <td className="py-3">Express Shipping</td>
                  <td className="py-3">2-3 business days</td>
                  <td className="py-3 text-right">$35</td>
                </tr>
                <tr className="border-t border-gold/20">
                  <td className="py-3">Overnight Shipping</td>
                  <td className="py-3">Next business day</td>
                  <td className="py-3 text-right">$75</td>
                </tr>
              </tbody>
            </table>
            <p className="text-white/60 text-xs">* Free on orders over $500. Orders under $500: $15 standard shipping.</p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">Insurance & Packaging</h2>
            <p className="leading-relaxed">
              All orders are fully insured during transit and require signature confirmation upon delivery. Each piece is packaged in our signature velvet presentation box, accompanied by a certificate of authenticity and care card.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">Return Policy</h2>
            <div className="bg-white/5 border border-gold/25 rounded p-4 mb-6">
              <h3 className="text-white font-semibold mb-2">30-Day Returns</h3>
              <p className="text-white/60">Full refund on unworn items in original packaging</p>
            </div>

            <h3 className="text-white font-semibold mb-3">How to Return</h3>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Contact our customer service team to initiate a return</li>
              <li>Receive a prepaid shipping label and return authorization</li>
              <li>Pack the item(s) securely in original packaging</li>
              <li>Drop off at an authorized shipping location</li>
              <li>Receive refund within 5-7 business days of receipt</li>
            </ol>

            <h3 className="text-white font-semibold mb-3">Non-Returnable Items</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Custom or personalized pieces</li>
              <li>Items marked as final sale</li>
              <li>Items worn or damaged by customer</li>
              <li>Items without original packaging or certificates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">Exchanges</h2>
            <p className="leading-relaxed">
              If you'd like to exchange your item for a different size, color, or piece entirely, please contact our customer service team. We'll be happy to assist with finding your perfect match.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">International Shipping</h2>
            <p className="leading-relaxed mb-4">
              We ship to over 50 countries worldwide. International orders may be subject to customs duties and import taxes, which are the responsibility of the recipient.
            </p>
            <p className="leading-relaxed">
              International shipping times vary by destination. Please contact our customer service team for specific details about shipping to your location.
            </p>
          </section>

          <section>
            <h2 className="text-gold text-2xl font-serif mb-4">Questions?</h2>
            <p className="leading-relaxed">
              Contact our customer service team at{' '}
              <a href="mailto:shipping@aureliacrimson.com" className="text-gold hover:text-gold-light transition-colors">
                shipping@aureliacrimson.com
              </a>{' '}
              or call{' '}
              <a href="tel:+12125550100" className="text-gold hover:text-gold-light transition-colors">
                +1 (212) 555-0100
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
