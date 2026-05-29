import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useAuth } from '../context/AuthContext';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { CreditCard, Truck, Check } from 'lucide-react';

const ORDERS_KEY = 'mock_orders';

function getStoredOrders() {
  const raw = localStorage.getItem(ORDERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function storeOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { cart, clearCart, totalPrice } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    full_name: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state_province: '',
    postal_code: '',
    country: '',
    phone: '',
  });

  const [payment, setPayment] = useState({
    card_number: '',
    expiry: '',
    cvv: '',
    name_on_card: '',
  });

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'shipping') {
      setShipping(prev => ({ ...prev, [name]: value }));
    } else {
      setPayment(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      await processOrder();
    }
  };

  const processOrder = async () => {
    setLoading(true);

    try {
      const orderId = crypto.randomUUID().slice(0, 8);
      const order = {
        id: orderId,
        created_at: new Date().toISOString(),
        status: 'pending',
        total: totalPrice,
        order_items: cart.map(item => ({
          id: crypto.randomUUID().slice(0, 8),
          product_name: item.name,
          product_image: item.image,
          quantity: item.qty,
          price: item.price,
        })),
      };

      const orders = getStoredOrders();
      orders.unshift(order);
      storeOrders(orders);

      clearCart();
      navigate('/order-confirmation', { state: { orderId: order.id } });
    } catch (err) {
      console.error('Order failed:', err);
      alert('Order processing failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { id: 1, label: 'Shipping', icon: Truck },
    { id: 2, label: 'Payment', icon: CreditCard },
    { id: 3, label: 'Review', icon: Check },
  ];

  return (
    <div className="min-h-screen bg-ink pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-[5%]">
        <h1 className="text-gold text-4xl font-serif text-center mb-8">Checkout</h1>

        <div className="flex items-center justify-center gap-4 mb-12">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${step >= s.id ? 'border-gold bg-gold text-ink' : 'border-gold/30 text-gold/30'}`}>
                <s.icon size={18} />
              </div>
              <span className={`ml-2 text-sm ${step >= s.id ? 'text-gold' : 'text-white/40'}`}>{s.label}</span>
              {i < steps.length - 1 && (
                <div className={`w-12 h-0.5 mx-4 ${step > s.id ? 'bg-gold' : 'bg-gold/20'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white/5 border border-gold/35 rounded p-8">
              {step === 1 && (
                <div>
                  <h2 className="text-white text-2xl font-serif mb-6">Shipping Address</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input label="Full Name" name="full_name" value={shipping.full_name} onChange={(e) => handleChange(e, 'shipping')} required />
                    <Input label="Phone" name="phone" value={shipping.phone} onChange={(e) => handleChange(e, 'shipping')} required />
                    <div className="md:col-span-2">
                      <Input label="Address Line 1" name="address_line1" value={shipping.address_line1} onChange={(e) => handleChange(e, 'shipping')} required />
                    </div>
                    <div className="md:col-span-2">
                      <Input label="Address Line 2" name="address_line2" value={shipping.address_line2} onChange={(e) => handleChange(e, 'shipping')} />
                    </div>
                    <Input label="City" name="city" value={shipping.city} onChange={(e) => handleChange(e, 'shipping')} required />
                    <Input label="State/Province" name="state_province" value={shipping.state_province} onChange={(e) => handleChange(e, 'shipping')} required />
                    <Input label="Postal Code" name="postal_code" value={shipping.postal_code} onChange={(e) => handleChange(e, 'shipping')} required />
                    <Input label="Country" name="country" value={shipping.country} onChange={(e) => handleChange(e, 'shipping')} required />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-white text-2xl font-serif mb-6">Payment Details</h2>
                  <div className="space-y-4">
                    <Input label="Name on Card" name="name_on_card" value={payment.name_on_card} onChange={(e) => handleChange(e, 'payment')} required />
                    <Input label="Card Number" name="card_number" value={payment.card_number} onChange={(e) => handleChange(e, 'payment')} placeholder="1234 5678 9012 3456" required />
                    <div className="grid grid-cols-2 gap-4">
                      <Input label="Expiry" name="expiry" value={payment.expiry} onChange={(e) => handleChange(e, 'payment')} placeholder="MM/YY" required />
                      <Input label="CVV" name="cvv" value={payment.cvv} onChange={(e) => handleChange(e, 'payment')} placeholder="123" required />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-white text-2xl font-serif mb-6">Review Your Order</h2>
                  <div className="space-y-6">
                    <div className="border-b border-gold/20 pb-4">
                      <h3 className="text-gold text-sm uppercase tracking-widest mb-3">Shipping Address</h3>
                      <p className="text-white">
                        {shipping.full_name}<br />
                        {shipping.address_line1}<br />
                        {shipping.address_line2 && <>{shipping.address_line2}<br /></>}
                        {shipping.city}, {shipping.state_province} {shipping.postal_code}<br />
                        {shipping.country}
                      </p>
                    </div>
                    <div className="border-b border-gold/20 pb-4">
                      <h3 className="text-gold text-sm uppercase tracking-widest mb-3">Payment Method</h3>
                      <p className="text-white">Card ending in {payment.card_number.slice(-4)}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <Button type="button" variant="secondary" onClick={() => setStep(step - 1)} className="flex-1">
                    Back
                  </Button>
                )}
                <Button type="submit" loading={loading} className="flex-1">
                  {step === 3 ? 'Place Order' : 'Continue'}
                </Button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-gold/35 rounded p-6 sticky top-24">
              <h3 className="text-white text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded border border-gold/25" />
                    <div className="flex-1">
                      <div className="text-white text-sm">{item.name}</div>
                      <div className="text-gold text-sm">Qty: {item.qty}</div>
                    </div>
                    <div className="text-white text-sm">${(item.price * item.qty).toLocaleString()}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gold/20 pt-4 space-y-2">
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gold text-lg font-bold pt-2 border-t border-gold/20">
                  <span>Total</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
