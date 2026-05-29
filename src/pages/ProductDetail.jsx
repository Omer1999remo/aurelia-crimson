import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, ChevronLeft, ChevronRight, Star, Check } from 'lucide-react';
import { products, mockReviews } from '../data';
import { useCart } from '../CartContext';
import { useWishlist } from '../context/WishlistContext';
import Button from '../components/ui/Button';

export default function ProductDetail() {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedQty, setSelectedQty] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const product = useMemo(() => products.find(p => String(p.id) === id), [id]);
  const reviews = useMemo(() => mockReviews.filter(r => r.product_id === Number(id)), [id]);
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product, id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ink flex flex-col items-center justify-center px-4">
        <h1 className="text-gold text-4xl font-serif mb-4">Product Not Found</h1>
        <p className="text-white/70 mb-6">The product you're looking for doesn't exist.</p>
        <Link to="/shop">
          <Button>Browse Collection</Button>
        </Link>
      </div>
    );
  }

  const images = product.images?.length > 0 ? product.images : [product.image];
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < selectedQty; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-ink pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-[5%]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="capitalize hover:text-gold transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gold">{product.name}</span>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-[500px] border-2 border-gold/35 rounded overflow-hidden bg-black/20">
              <img
                src={images[currentImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImage(prev => prev === 0 ? images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gold/90 rounded-full flex items-center justify-center text-ink hover:bg-gold transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => setCurrentImage(prev => prev === images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gold/90 rounded-full flex items-center justify-center text-ink hover:bg-gold transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-20 h-20 rounded overflow-hidden border-2 transition-all ${currentImage === i ? 'border-gold' : 'border-gold/25 hover:border-gold/50'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="text-gold text-xs tracking-widest uppercase mb-2">{product.category}</div>
              <h1 className="text-white text-4xl font-serif mb-3">{product.name}</h1>
              {product.badge && (
                <span className="inline-block bg-crimson-light text-white text-xs font-semibold px-4 py-1.5 rounded mb-4">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-gold text-3xl font-bold">${product.price?.toLocaleString()}</span>
              {product.original_price && (
                <>
                  <span className="text-white/40 line-through text-xl">${product.original_price.toLocaleString()}</span>
                  <span className="bg-crimson-light/20 text-crimson-light px-3 py-1 rounded text-sm font-medium">
                    Save ${(product.original_price - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-white/70 leading-relaxed">{product.description}</p>

            {/* Materials */}
            {product.materials && (
              <div className="border-t border-gold/20 pt-6">
                <h3 className="text-gold text-sm tracking-widest uppercase mb-3">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((m, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-gold/25 rounded text-white text-sm">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Stock Status */}
            <div className="flex items-center gap-3">
              {product.in_stock ? (
                <>
                  <Check size={20} className="text-green-400" />
                  <span className="text-white/70">
                    {product.stock_count > 5 ? 'In Stock' : `Only ${product.stock_count} left`}
                  </span>
                </>
              ) : (
                <span className="text-crimson-light">Out of Stock</span>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-gold/35 rounded">
                <button
                  onClick={() => setSelectedQty(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-white hover:text-gold transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-3 text-white">{selectedQty}</span>
                <button
                  onClick={() => setSelectedQty(q => Math.min(product.stock_count || 10, q + 1))}
                  className="px-4 py-3 text-white hover:text-gold transition-colors"
                >
                  +
                </button>
              </div>
              <Button onClick={handleAddToCart} disabled={!product.in_stock} className="flex-1 flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Add to Cart
              </Button>
              <button
                onClick={() => inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
                className={`w-14 h-14 border-2 rounded flex items-center justify-center transition-all ${inWishlist ? 'bg-crimson-light border-crimson-light text-white' : 'border-gold/35 text-gold hover:bg-gold hover:text-ink'}`}
              >
                <Heart size={24} fill={inWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Tabs */}
            <div className="border-t border-gold/20 pt-6 mt-6">
              <div className="flex gap-6 mb-6">
                {['details', 'care', 'shipping'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm uppercase tracking-widest border-b-2 transition-colors ${activeTab === tab ? 'border-gold text-gold' : 'border-transparent text-white/60 hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="text-white/70 text-sm leading-relaxed">
                {activeTab === 'details' && (
                  <div>
                    <p className="mb-3">{product.description}</p>
                    {product.dimensions && (
                      <div className="space-y-2">
                        {Object.entries(product.dimensions).map(([key, value]) => (
                          <div key={key} className="flex gap-2">
                            <span className="text-gold capitalize">{key}:</span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {activeTab === 'care' && (
                  <p>{product.care_instructions || 'Store in a cool, dry place. Clean with a soft cloth. Avoid contact with water, perfume, and chemicals. Remove before swimming or bathing.'}</p>
                )}
                {activeTab === 'shipping' && (
                  <div>
                    <p className="mb-2">Free standard shipping on all orders over $500.</p>
                    <p className="mb-2">Express shipping available at checkout.</p>
                    <p>All orders include insurance and signature confirmation.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section className="mt-16">
          <h2 className="text-gold text-3xl font-serif mb-8">Customer Reviews</h2>
          {reviews.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map(review => (
                <div key={review.id} className="bg-white/5 border border-gold/20 rounded p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < review.rating ? '#D4AF37' : 'none'} className="text-gold" />
                    ))}
                  </div>
                  <p className="text-white text-sm mb-3">{review.comment}</p>
                  <div className="text-white/60 text-xs">- {review.title || 'Verified Buyer'}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/60">No reviews yet. Be the first to review this product!</p>
          )}
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-gold text-3xl font-serif mb-8">You May Also Like</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-square rounded overflow-hidden border border-gold/35 mb-3">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <h3 className="text-white text-sm font-medium group-hover:text-gold transition-colors">{p.name}</h3>
                  <p className="text-gold text-sm">${p.price?.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
