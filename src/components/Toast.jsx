import { useCart } from '../CartContext';

export default function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div
      key={toast.id}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[3000] bg-crimson-light text-white px-10 py-4 border-2 border-gold rounded shadow-[0_10px_30px_rgba(0,0,0,0.3)] font-medium animate-toast-in"
    >
      {toast.message}
    </div>
  );
}
