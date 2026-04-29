import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCart } from '../CartContext';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const { showToast } = useCart();
  const ref = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Welcome to the Inner Circle!');
    setEmail('');
  };

  return (
    <section className="py-20 px-[5%] bg-gradient-to-br from-ink to-crimson-dark text-center border-t-[1.5px] border-gold/35">
      <div ref={ref}>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-gold mb-4">Join the Inner Circle</h2>
        <p className="reveal text-white/80 mb-8 max-w-lg mx-auto">
          Subscribe for exclusive access to new collections, private events, and member-only pricing.
        </p>
        <form onSubmit={handleSubmit} className="reveal flex max-w-lg mx-auto border-2 border-gold rounded overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 bg-white/5 text-white placeholder:text-white/40 outline-none font-sans text-base"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gold text-ink font-semibold uppercase tracking-widest transition-all hover:bg-crimson-light hover:text-white hover:border-l-crimson-light border-l-2 border-gold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
