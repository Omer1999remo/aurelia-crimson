import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import { Mail, Lock, User } from 'lucide-react';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await signUp(email, password, fullName);
      navigate('/account');
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/">
            <h1 className="text-gold text-3xl font-serif mb-2">AURELIA & CRIMSON</h1>
          </Link>
          <p className="text-white/60 text-sm">Join the inner circle</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border-2 border-gold/35 rounded p-8">
          <h2 className="text-white text-2xl font-serif mb-6 text-center">Create Account</h2>

          {error && (
            <div className="bg-crimson-light/20 border border-crimson-light rounded p-3 mb-4 text-crimson-light text-sm">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-white mb-2 text-sm">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" size={18} />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Your name"
                className="w-full pl-12 pr-4 py-3 bg-white/5 border-2 border-gold/35 rounded text-white placeholder:text-white/40 outline-none transition-all focus:border-gold"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2 text-sm">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full pl-12 pr-4 py-3 bg-white/5 border-2 border-gold/35 rounded text-white placeholder:text-white/40 outline-none transition-all focus:border-gold"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2 text-sm">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="At least 6 characters"
                className="w-full pl-12 pr-4 py-3 bg-white/5 border-2 border-gold/35 rounded text-white placeholder:text-white/40 outline-none transition-all focus:border-gold"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white mb-2 text-sm">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" size={18} />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Repeat password"
                className="w-full pl-12 pr-4 py-3 bg-white/5 border-2 border-gold/35 rounded text-white placeholder:text-white/40 outline-none transition-all focus:border-gold"
              />
            </div>
          </div>

          <Button type="submit" loading={loading} className="w-full mb-4">
            Create Account
          </Button>

          <div className="text-center text-sm text-white/60">
            Already have an account?{' '}
            <Link to="/login" className="text-gold hover:text-gold-light underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
