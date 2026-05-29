export default function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  ...props
}) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-white mb-2 text-sm font-medium">
          {label}
          {required && <span className="text-crimson-light ml-1">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 bg-white/5 border-2 ${error ? 'border-crimson-light' : 'border-gold/35'} rounded text-white placeholder:text-white/40 outline-none transition-all focus:border-gold`}
        {...props}
      />
      {error && (
        <p className="text-crimson-light text-xs mt-1">{error}</p>
      )}
    </div>
  );
}
