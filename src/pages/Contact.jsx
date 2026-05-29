import { useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const locations = [
  {
    city: 'New York',
    address: '689 Fifth Avenue',
    details: 'New York, NY 10022',
    hours: 'Mon-Sat: 10am-7pm, Sun: 12pm-5pm',
    phone: '+1 (212) 555-0100'
  },
  {
    city: 'Paris',
    address: '8 Place Vendôme',
    details: 'Paris 75001, France',
    hours: 'Mon-Sat: 10am-7pm',
    phone: '+33 1 55 55 01 00'
  },
  {
    city: 'Tokyo',
    address: 'Ginza Six, 6-10-1 Ginza',
    details: 'Chuo-ku, Tokyo 104-0061',
    hours: 'Daily: 10am-8pm',
    phone: '+81 3-5555-0100'
  },
  {
    city: 'Dubai',
    address: 'Dubai Mall, Financial Center Road',
    details: 'Dubai, UAE',
    hours: 'Daily: 10am-10pm',
    phone: '+971 4 555 0100'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ink pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-[5%]">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-gold text-5xl font-serif mb-4">Contact Us</h1>
          <p className="text-white/70">We're here to assist you in any way we can</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Form */}
          <div className="bg-white/5 border border-gold/35 rounded p-8">
            <h2 className="text-gold text-2xl font-serif mb-6">Send a Message</h2>

            {submitted ? (
              <div className="text-center py-12">
                <Send className="mx-auto text-gold mb-4" size={48} />
                <h3 className="text-white text-xl mb-2">Message Sent!</h3>
                <p className="text-white/60">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <Input label="Name" name="name" value={formData.name} onChange={handleChange} required />
                <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
                <div className="mb-6">
                  <label className="block text-white mb-2 text-sm">
                    Message <span className="text-crimson-light">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border-2 border-gold/35 rounded text-white placeholder:text-white/40 outline-none transition-all focus:border-gold resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-gold/35 rounded p-6">
              <Mail className="text-gold mb-3" size={24} />
              <h3 className="text-white font-semibold mb-1">Email Us</h3>
              <a href="mailto:contact@aureliacrimson.com" className="text-gold hover:text-gold-light transition-colors">
                contact@aureliacrimson.com
              </a>
            </div>

            <div className="bg-white/5 border border-gold/35 rounded p-6">
              <Phone className="text-gold mb-3" size={24} />
              <h3 className="text-white font-semibold mb-1">Call Us</h3>
              <a href="tel:+12125550100" className="text-gold hover:text-gold-light transition-colors">
                +1 (212) 555-0100
              </a>
            </div>

            <div className="bg-white/5 border border-gold/35 rounded p-6">
              <MapPin className="text-gold mb-3" size={24} />
              <h3 className="text-white font-semibold mb-1">Visit Our Flagship</h3>
              <p className="text-white/70">
                689 Fifth Avenue<br />
                New York, NY 10022
              </p>
            </div>
          </div>
        </div>

        {/* Locations */}
        <section>
          <h2 className="text-gold text-3xl font-serif text-center mb-12">Our Boutiques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, i) => (
              <div key={i} className="bg-white/5 border border-gold/35 rounded p-6 hover:border-gold/50 transition-all">
                <h3 className="text-gold text-xl font-serif mb-3">{loc.city}</h3>
                <div className="text-white text-sm space-y-1 mb-4">
                  <p>{loc.address}</p>
                  <p>{loc.details}</p>
                </div>
                <div className="text-white/60 text-sm space-y-1">
                  <p>{loc.hours}</p>
                  <a href={`tel:${loc.phone}`} className="text-gold hover:text-gold-light transition-colors">
                    {loc.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
