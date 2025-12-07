
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // Custom Logo Component
  const BrandLogo = ({ scrolled }: { scrolled: boolean }) => (
    <div className="flex items-center gap-2">
      <svg width="180" height="60" viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 md:h-12 w-auto transition-all duration-300">
        <path d="M10 25 C 60 10, 110 20, 115 75" stroke={scrolled ? "#8B2316" : "#FFFFFF"} strokeWidth="5" fill="none" strokeLinecap="round" />
        <rect x="110" y="35" width="5" height="40" fill={scrolled ? "#8B2316" : "#FFFFFF"} />
        <rect x="108" y="70" width="9" height="10" fill={scrolled ? "#8B2316" : "#FFFFFF"} />
        <rect x="120" y="10" width="5" height="65" fill={scrolled ? "#8B2316" : "#FFFFFF"} />
        <rect x="118" y="70" width="9" height="10" fill={scrolled ? "#8B2316" : "#FFFFFF"} />
        <text x="15" y="35" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="28" fill={scrolled ? "#8B2316" : "#FFFFFF"} letterSpacing="1">MASTER</text>
        <text x="15" y="58" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="28" fill={scrolled ? "#8B2316" : "#FFFFFF"} letterSpacing="1">STROKE</text>
        <text x="15" y="78" fontFamily="Oswald, sans-serif" fontWeight="600" fontSize="16" fill={scrolled ? "#8B2316" : "#FFFFFF"} letterSpacing="4">DESIGN</text>
      </svg>
    </div>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex-shrink-0">
          <BrandLogo scrolled={isScrolled} />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium tracking-widest uppercase text-xs transition-all duration-300 hover:text-brand-rust relative group ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-rust transition-all duration-300 group-hover:w-full`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isScrolled ? 'text-brand-rust' : 'text-white'} transition-colors`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 border-t border-gray-100 h-screen">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-800 font-display font-bold text-3xl uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
