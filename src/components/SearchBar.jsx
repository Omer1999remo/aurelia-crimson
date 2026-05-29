import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch, onClear }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === '' && onClear) {
      onClear();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
        className="w-full pl-12 pr-4 py-3 bg-white/5 border-2 border-gold/35 rounded text-white placeholder:text-white/40 outline-none transition-all focus:border-gold"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60 pointer-events-none" size={20} />
    </form>
  );
}
