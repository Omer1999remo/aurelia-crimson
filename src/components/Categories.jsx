import { categories } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Categories() {
  const ref = useScrollReveal();

  return (
    <section id="categories" className="py-24 px-[5%] bg-cream text-ink border-y-[1.5px] border-gold/35">
      <div ref={ref}>
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-crimson-dark mb-4 relative inline-block">
            Curated Collections
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-crimson-light" />
          </h2>
          <p className="text-charcoal mt-6 text-lg">Each piece tells a story of craftsmanship and elegance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="reveal group relative h-[400px] overflow-hidden cursor-pointer rounded border-2 border-transparent transition-all duration-400 hover:border-gold/70 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-crimson/90 via-crimson/20 to-transparent flex flex-col justify-end p-8 transition-all duration-300 group-hover:from-crimson/95 group-hover:to-gold/20 border border-gold/20 rounded group-hover:border-gold/50">
                <h3 className="text-gold text-3xl font-serif mb-2">{cat.title}</h3>
                <p className="text-white text-sm opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
