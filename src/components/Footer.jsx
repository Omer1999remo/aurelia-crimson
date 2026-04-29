import { footerLinks } from '../data';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t-[1.5px] border-gold/35 pt-16 pb-8 px-[5%]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto mb-12">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-gold text-base uppercase tracking-widest mb-6 pb-3 border-b-[1.5px] border-gold/35 inline-block">
              {title}
            </h4>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/60 text-sm transition-all hover:text-gold border-b border-transparent hover:border-gold/35 pb-0.5 inline-block"
                  >
                    {link}
                  </a>
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
