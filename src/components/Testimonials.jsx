import { testimonials } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 px-[5%] bg-cream text-ink">
      <div ref={ref}>
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-crimson-dark mb-4 relative inline-block">
            Clientele Voices
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-crimson-light" />
          </h2>
          <p className="text-charcoal mt-6 text-lg">Stories from those who wear our passion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal bg-white p-10 border-[1.5px] border-gold/30 border-l-[5px] border-l-gold rounded shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
            >
              <div className="text-gold text-xl mb-4">★★★★★</div>
              <p className="italic text-charcoal leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-4 pt-6 border-t border-gold/20">
                <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-crimson-light to-gold flex items-center justify-center text-white font-semibold text-lg border-2 border-gold">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-crimson-dark font-semibold">{t.author}</h4>
                  <p className="text-gray-500 text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
