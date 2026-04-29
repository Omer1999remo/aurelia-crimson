import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../CartContext';

export default function Navbar() {
  const { totalItems, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Collections', href: '#categories' },
    { label: 'Shop', href: '#products' },
    { label: 'Why Us', href: '#features' },
    { label: 'Reviews', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-[5%] transition-all duration-300 border-b-[1.5px] border-gold/35 backdrop-blur-md ${
        scrolled ? 'py-4 bg-ink/98' : 'py-6 bg-ink/95'
      }`}
    >
      <a href="#" className="font-serif text-gold text-2xl font-bold tracking-widest">
        AURELIA <span className="text-crimson-light">&</span> CRIMSON
      </a>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-white text-sm font-medium tracking-widest uppercase relative group transition-colors hover:text-gold"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gold p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Cart Icon */}
      <button
        onClick={toggleCart}
        className="relative p-2.5 border-[1.5px] border-gold/35 rounded-full transition-all hover:border-gold hover:bg-gold/10 hidden md:flex items-center justify-center"
      >
        <ShoppingBag size={20} className="text-gold" />
        <span className="absolute -top-1.5 -right-1.5 bg-crimson-light text-white text-[0.7rem] font-semibold w-[22px] h-[22px] rounded-full flex items-center justify-center border-2 border-ink">
          {totalItems}
        </span>
      </button>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-ink/98 border-b border-gold/35 md:hidden">
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-sm font-medium tracking-widest uppercase block py-2 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-gold/20">
              <button
                onClick={() => { toggleCart(); setMobileOpen(false); }}
                className="flex items-center gap-3 text-gold"
              >
                <ShoppingBag size={20} />
                <span className="text-sm font-medium">Cart ({totalItems})</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
