export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  loading = false,
  className = '',
  ...props
}) {
  const variants = {
    primary: 'bg-gradient-to-br from-gold to-gold-dark text-ink border-2 border-gold hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(212,175,55,0.3)] hover:border-gold-light',
    secondary: 'bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-ink',
    outline: 'bg-transparent text-white border-2 border-white/30 hover:border-gold hover:text-gold',
    danger: 'bg-crimson-light text-white border-2 border-crimson-light hover:bg-crimson',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`uppercase tracking-widest font-semibold relative overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </span>
    </button>
  );
}
