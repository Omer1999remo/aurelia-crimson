import { Link } from 'react-router-dom';

const footerData = {
  Brand: [
    { label: 'Our Story', to: '/about' },
    { label: 'Craftsmanship', to: '/about#craftsmanship' },
    { label: 'Sustainability', to: '/about#sustainability' },
    { label: 'Careers', to: '/contact' },
  ],
  'Client Care': [
    { label: 'Contact Us', to: '/contact' },
    { label: 'Shipping & Returns', to: '/shipping' },
    { label: 'Size Guide', to: '/shipping#size-guide' },
    { label: 'Care Instructions', to: '/shipping#care' },
  ],
  Boutiques: [
    { label: 'New York', to: '/contact#locations' },
    { label: 'Paris', to: '/contact#locations' },
    { label: 'Tokyo', to: '/contact#locations' },
    { label: 'Dubai', to: '/contact#locations' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Cookie Policy', to: '/privacy#cookies' },
    { label: 'Accessibility', to: '/terms#accessibility' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t-[1.5px] border-gold/35 pt-16 pb-8 px-[5%]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto mb-12">
        {Object.entries(footerData).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-gold text-base uppercase tracking-widest mb-6 pb-3 border-b-[1.5px] border-gold/35 inline-block">
              {title}
            </h4>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/60 text-sm transition-all hover:text-gold border-b border-transparent hover:border-gold/35 pb-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center pt-8 border-t border-gold/20 text-white/40 text-sm">
        &copy; 2024 AURELIA & CRIMSON. All rights reserved. Crafted with passion.
      </div>
    </footer>
  );
}
