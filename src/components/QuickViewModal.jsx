import Modal from './ui/Modal';
import Button from './ui/Button';
import { useCart } from '../CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuickViewModal({ isOpen, onClose, product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Quick View" size="lg">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-[400px] rounded overflow-hidden border-2 border-gold/35">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-gold text-xs tracking-widest uppercase mb-2">{product.category}</div>
            <h2 className="text-white text-3xl font-semibold mb-3">{product.name}</h2>
            {product.badge && (
              <span className="inline-block bg-crimson-light text-white text-xs font-semibold px-3 py-1 rounded mb-4">
                {product.badge}
              </span>
            )}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-gold text-2xl font-bold">${product.price?.toLocaleString()}</span>
              {product.original_price && (
                <span className="text-white/40 line-through text-lg">${product.original_price.toLocaleString()}</span>
              )}
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">{product.description}</p>
            {product.materials && (
              <div className="mb-4">
                <div className="text-gold text-xs tracking-widest uppercase mb-2">Materials</div>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((m, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-gold/25 rounded text-white text-xs">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <Button onClick={handleAddToCart} className="flex-1 flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                Add to Cart
              </Button>
              <button
                onClick={handleToggleWishlist}
                className={`w-12 h-12 border-2 rounded flex items-center justify-center transition-all ${inWishlist ? 'bg-crimson-light border-crimson-light text-white' : 'border-gold/35 text-gold hover:bg-gold hover:text-ink'}`}
              >
                <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>
            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
              className="text-gold text-sm text-center underline underline-offset-4 hover:text-gold-light"
            >
              View Full Details
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
