import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Heart, User } from 'lucide-react';
import { useCart } from '../CartContext';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar() {
  const { totalItems, toggleCart } = useCart();
  const { user } = useAuth();
  const { wishlist } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  const navLinks = isHome
    ? [
        { label: 'Home', to: '/#home' },
        { label: 'Collections', to: '/#categories' },
        { label: 'Shop', to: '/shop' },
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
      ]
    : [
        { label: 'Home', to: '/' },
        { label: 'Shop', to: '/shop' },
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
      ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-[5%] transition-all duration-300 border-b-[1.5px] border-gold/35 backdrop-blur-md ${
        scrolled ? 'py-4 bg-ink/98' : 'py-6 bg-ink/95'
      }`}
    >
      <Link to="/" className="font-serif text-gold text-2xl font-bold tracking-widest">
        AURELIA <span className="text-crimson-light">&</span> CRIMSON
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-white text-sm font-medium tracking-widest uppercase relative group transition-colors hover:text-gold"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>

      {/* Right Side Icons */}
      <div className="hidden md:flex items-center gap-3">
        <Link
          to={user ? '/account' : '/login'}
          className="p-2.5 border-[1.5px] border-gold/35 rounded-full transition-all hover:border-gold hover:bg-gold/10 flex items-center justify-center"
        >
          <User size={18} className="text-gold" />
        </Link>

        <Link
          to="/wishlist"
          className="relative p-2.5 border-[1.5px] border-gold/35 rounded-full transition-all hover:border-gold hover:bg-gold/10 flex items-center justify-center"
        >
          <Heart size={18} className="text-gold" />
          {wishlist.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-gold text-ink text-[0.7rem] font-semibold w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-ink">
              {wishlist.length}
            </span>
          )}
        </Link>

        <button
          onClick={toggleCart}
          className="relative p-2.5 border-[1.5px] border-gold/35 rounded-full transition-all hover:border-gold hover:bg-gold/10 flex items-center justify-center"
        >
          <ShoppingBag size={18} className="text-gold" />
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-crimson-light text-white text-[0.7rem] font-semibold w-[22px] h-[22px] rounded-full flex items-center justify-center border-2 border-ink">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gold p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-ink/98 border-b border-gold/35 md:hidden">
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-sm font-medium tracking-widest uppercase block py-2 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-gold/20">
              <Link
                to={user ? '/account' : '/login'}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-gold"
              >
                <User size={20} />
                <span className="text-sm font-medium">{user ? 'Account' : 'Sign In'}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-gold"
              >
                <Heart size={20} />
                <span className="text-sm font-medium">Wishlist ({wishlist.length})</span>
              </Link>
            </li>
            <li>
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
