import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const team = [
  {
    name: 'Elena Blackwood',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19ee04d2b?w=400&h=400&fit=crop',
    bio: 'With 25 years of experience in luxury jewelry design, Elena founded Aurelia & Crimson to create pieces that become family heirlooms.'
  },
  {
    name: 'Marcus Chen',
    role: 'Master Artisan',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'A third-generation jeweler trained in both Swiss and Florentine techniques, Marcus oversees all handcrafted pieces.'
  },
  {
    name: 'Sophia Laurent',
    role: 'Design Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    bio: 'Former designer at major European houses, Sophia brings contemporary elegance to our collections.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-ink pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1459411552884-841359cdb345?w=1200&h=600&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 to-ink" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-gold text-5xl md:text-6xl font-serif mb-4">Our Story</h1>
          <p className="text-white/70 text-lg">Crafting luxury since 2024</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-[5%]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-gold text-3xl font-serif mb-6">The Beginning</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Aurelia & Crimson was born from a passion for exceptional craftsmanship and a vision to create jewelry that tells stories. Our founder, Elena Blackwood, spent decades in the ateliers of Paris and Milan before bringing her expertise home.
              </p>
              <p className="text-white/70 leading-relaxed">
                Named for the golden light (Aurelia) and deep passion (Crimson) that guides our work, each piece represents the perfect balance of artistry and precision.
              </p>
            </div>
            <div className="h-[400px] rounded overflow-hidden border-2 border-gold/35">
              <img src="https://images.unsplash.com/photo-1617038220319-27695aebe493?w=600&h=800&fit=crop" alt="Workshop" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="h-[400px] rounded overflow-hidden border-2 border-gold/35 order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1611652022419-a9d77ca7e6e1?w=600&h=800&fit=crop" alt="Craftsmanship" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-gold text-3xl font-serif mb-6">Master Crafted</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Every piece in our collection is handcrafted by master artisans with decades of experience. We use only ethically sourced 18k gold, platinum, and the finest gemstones.
              </p>
              <p className="text-white/70 leading-relaxed">
                Our workshop combines time-honored techniques with innovative design, resulting in pieces that are both contemporary and timeless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-crimson-dark to-ink">
        <div className="max-w-6xl mx-auto px-[5%]">
          <h2 className="text-gold text-4xl font-serif text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gold/35 rounded bg-ink/30">
              <div className="text-gold text-4xl mb-4">✦</div>
              <h3 className="text-gold text-xl font-serif mb-3">Excellence</h3>
              <p className="text-white/70 text-sm">We never compromise on quality. Each piece meets the highest standards before leaving our workshop.</p>
            </div>
            <div className="text-center p-8 border border-gold/35 rounded bg-ink/30">
              <div className="text-gold text-4xl mb-4">◈</div>
              <h3 className="text-gold text-xl font-serif mb-3">Integrity</h3>
              <p className="text-white/70 text-sm">All materials are ethically sourced. We partner with certified suppliers who share our commitment to sustainability.</p>
            </div>
            <div className="text-center p-8 border border-gold/35 rounded bg-ink/30">
              <div className="text-gold text-4xl mb-4">✦</div>
              <h3 className="text-gold text-xl font-serif mb-3">Service</h3>
              <p className="text-white/70 text-sm">From consultation to aftercare, we provide white-glove service that matches the quality of our pieces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gold text-4xl font-serif text-center mb-16">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold/35 transition-all group-hover:border-gold">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-gold text-xl font-serif">{member.name}</h3>
                <p className="text-white/60 text-sm mb-3">{member.role}</p>
                <p className="text-white/70 text-sm px-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5%] text-center">
        <h2 className="text-gold text-3xl font-serif mb-4">Experience the Collection</h2>
        <p className="text-white/70 mb-8 max-w-lg mx-auto">
          Visit one of our boutiques or explore our collection online. Our team is ready to help you find your perfect piece.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/shop">
            <Button>Shop Collection</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
