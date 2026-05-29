import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import Button from '../components/ui/Button';
import { Heart } from 'lucide-react';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-ink pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-[5%]">
        <div className="text-center mb-12">
          <Heart className="mx-auto text-gold mb-4" size={48} />
          <h1 className="text-gold text-5xl font-serif mb-4">Your Wishlist</h1>
          <p className="text-white/70">{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved</p>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlist.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/60 text-xl mb-4">Your wishlist is empty</p>
            <Link to="/shop">
              <Button>Browse Collection</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
