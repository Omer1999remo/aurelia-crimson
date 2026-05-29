import { Link, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import { CircleCheck as CheckCircle } from 'lucide-react';

export default function OrderConfirmation() {
  const location = useLocation();
  const orderId = location.state?.orderId;

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center">
        <CheckCircle className="mx-auto text-gold mb-6" size={80} />
        <h1 className="text-gold text-4xl font-serif mb-4">Order Confirmed!</h1>
        <p className="text-white/70 text-lg mb-2">Thank you for your purchase</p>
        {orderId && (
          <p className="text-white/60 mb-8">Order #{orderId.slice(0, 8).toUpperCase()}</p>
        )}
        <p className="text-white/60 mb-8">
          A confirmation email has been sent to your email address. You will receive tracking information once your order ships.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/shop">
            <Button>Continue Shopping</Button>
          </Link>
          <Link to="/account">
            <Button variant="secondary">View Orders</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
