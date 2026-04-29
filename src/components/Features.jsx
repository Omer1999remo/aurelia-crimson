import { features } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Features() {
  const ref = useScrollReveal();

  return (
    <section id="features" className="py-20 px-[5%] bg-gradient-to-br from-crimson-dark to-ink border-y-[1.5px] border-gold/35">
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="reveal text-center p-8 border-[1.5px] border-gold/35 rounded bg-ink/30 transition-all duration-300 hover:border-gold/70 hover:-translate-y-1.5 hover:bg-ink/50"
          >
            <div className="w-[70px] h-[70px] mx-auto mb-6 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center text-3xl text-gold">
              {f.icon}
            </div>
            <h3 className="text-gold text-xl font-serif mb-3">{f.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
