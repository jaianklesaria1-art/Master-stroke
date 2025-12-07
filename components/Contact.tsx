
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    const mailtoLink = `mailto:masterstokes1@gmail.com?subject=New Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-brand-gold font-bold tracking-widest uppercase text-sm">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mt-4 mb-2">
              Let's Build
            </h2>
            <h2 className="text-3xl md:text-4xl font-heading text-brand-rust font-bold mb-8">
              मास्टर स्ट्रोक्स डिझाईन
            </h2>
            
            <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed max-w-md">
              Ready to transform your space? Contact us for a consultation regarding sports infrastructure or interior design projects.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="text-brand-gold mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Phone</h3>
                  <p className="text-slate-300 text-lg">+91 90298 88804</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="text-brand-gold mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Email</h3>
                  <p className="text-slate-300">masterstokes1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="text-brand-gold mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Studio</h3>
                  <p className="text-slate-300 leading-relaxed">
                    303, Reclon Building Premises,<br/>
                    Mg Road, Villeparle East,<br/>
                    Aamchi Mumbai - 400 057
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Inquiry Form */}
          <div className="bg-white text-slate-900 p-8 md:p-12 rounded-sm shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 font-display uppercase">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-brand-rust outline-none transition-all placeholder-slate-400"
                  placeholder="Your Name"
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-brand-rust outline-none transition-all placeholder-slate-400"
                    placeholder="+91..."
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-brand-rust outline-none transition-all placeholder-slate-400"
                    placeholder="email@address.com"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-brand-rust outline-none transition-all placeholder-slate-400"
                  placeholder="Tell us about your project..."
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-brand-rust hover:bg-brand-rustLight text-white font-bold uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
