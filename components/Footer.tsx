
import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-display font-bold text-white tracking-widest uppercase block">
                MASTER <span className="text-brand-rust">STROKE</span>
              </span>
              <span className="text-xl font-heading text-brand-gold font-bold block mt-1">
                मास्टर स्ट्रोक्स डिझाईन
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-500 mb-6">
              Interior | Sports | Turnkey
            </p>
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              Transforming open grounds into elite indoor sports spaces. We bridge the gap between rugged sports functionality and refined interior aesthetics.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xs text-brand-gold">Contact</h4>
            <div className="space-y-4 text-sm">
              <p className="text-white">+91 90298 88804</p>
              <p>masterstokes1@gmail.com</p>
              <p className="text-slate-500">
                303, Reclon Building Premises,<br/>
                Mg Road, Villeparle East,<br/>
                Aamchi Mumbai - 400 057
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xs text-brand-gold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-rust hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-rust hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-rust hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Master Stroke Design. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
