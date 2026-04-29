import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '../CartContext';

export default function CartSidebar() {
  const {
    cart, isOpen, closeCart, removeFromCart, updateQty, clearCart, totalPrice, showToast
  } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      showToast('Your cart is empty');
      return;
    }
    showToast('Proceeding to checkout...');
    setTimeout(() => {
      alert('Thank you for your purchase! This is a demo checkout.');
      clearCart();
      closeCart();
    }, 1000);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/70 z-[1500] transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full max-w-[450px] h-screen bg-[#111] border-l-[3px] border-gold z-[2000] flex flex-col transition-all duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-8 border-b-[1.5px] border-gold/35 flex justify-between items-center">
          <h3 className="text-gold font-serif text-2xl">Your Selection</h3>
          <button
            onClick={closeCart}
            className="w-10 h-10 border-[1.5px] border-gold/35 flex items-center justify-center text-white transition-all hover:text-crimson-light hover:border-crimson-light"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center p-12 text-white/50 border-[1.5px] border-dashed border-gold/30 rounded m-4">
              Your cart is empty
            </div>
          ) : (
            cart.map(item => (
              <div
                key={item.id}
                className="flex gap-4 p-6 mb-4 border-[1.5px] border-gold/20 rounded bg-white/[0.02] animate-slide-in transition-all hover:border-gold/50 hover:bg-white/[0.04]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover border-[1.5px] border-gold/35 rounded"
                />
                <div className="flex-1">
                  <div className="text-white font-semibold mb-1">{item.name}</div>
                  <div className="text-gold font-bold">${item.price.toLocaleString()}</div>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-7 h-7 border-[1.5px] border-gold/35 bg-transparent text-white flex items-center justify-center transition-all hover:bg-gold hover:text-ink hover:border-gold"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-white text-sm">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-7 h-7 border-[1.5px] border-gold/35 bg-transparent text-white flex items-center justify-center transition-all hover:bg-gold hover:text-ink hover:border-gold"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-crimson-light text-xs mt-2 underline underline-offset-[3px] transition-colors hover:text-crimson"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t-[1.5px] border-gold/35 bg-[#0a0a0a]">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gold/20">
            <span className="text-white/70 text-lg">Total</span>
            <span className="text-gold font-bold text-2xl">${totalPrice.toLocaleString()}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full py-4 bg-gradient-to-br from-gold to-gold-dark text-ink font-semibold uppercase tracking-widest border-2 border-gold transition-all hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(212,175,55,0.3)] hover:border-gold-light"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}
