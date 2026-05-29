import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children, title, size = 'md' }) {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 z-[1500] animate-fade-in"
      />
      <div className="fixed inset-0 z-[1600] flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`bg-[#111] border-2 border-gold rounded w-full ${sizes[size]} max-h-[90vh] overflow-y-auto pointer-events-auto animate-slide-up`}
        >
          <div className="sticky top-0 bg-[#111] border-b border-gold/35 p-6 flex justify-between items-center">
            <h3 className="text-gold text-2xl font-serif">{title}</h3>
            <button
              onClick={onClose}
              className="w-10 h-10 border-2 border-gold/35 flex items-center justify-center text-white transition-all hover:text-crimson-light hover:border-crimson-light"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
