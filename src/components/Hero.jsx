import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ink via-crimson-dark to-ink">
      {/* Animated glow */}
      <div className="absolute -top-1/2 -right-[20%] w-[800px] h-[800px] bg-gold/15 rounded-full animate-pulse-gold blur-3xl" />

      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        <p className="text-gold text-sm tracking-[4px] uppercase mb-6 animate-[fadeInUp_1s_ease]">
          Est. 2024
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-gradient-gold animate-[fadeInUp_1s_ease_0.2s_both]">
          Where Luxury<br />Meets Passion
        </h1>
        <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_1s_ease_0.4s_both]">
          Discover our exquisite collection of handcrafted jewelry and premium accessories, designed for those who demand nothing but perfection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_1s_ease_0.6s_both]">
          <a
            href="#products"
            className="group relative inline-block px-10 py-4 bg-gradient-to-br from-gold to-gold-dark text-ink font-semibold tracking-widest uppercase border-2 border-gold overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:border-gold-light"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative">Explore Collection</span>
          </a>
          <a
            href="#categories"
            className="inline-block px-10 py-4 bg-transparent text-gold font-semibold tracking-widest uppercase border-2 border-gold transition-all hover:bg-gold hover:text-ink"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 border-[1.5px] border-gold/50 rounded-full flex items-center justify-center animate-bounce-slow">
        <ChevronDown size={20} className="text-gold" />
      </div>
    </section>
  );
}
