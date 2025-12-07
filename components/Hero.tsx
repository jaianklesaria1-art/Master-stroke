
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // High quality indoor sports arena image
          backgroundImage: 'url("https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop")' 
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className="max-w-5xl space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <h2 className="text-brand-gold font-bold tracking-widest uppercase text-xs md:text-sm">
              From Open Grounds to Elite Indoor Spaces
            </h2>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight font-display uppercase">
            MASTER <span className="text-brand-rust">STROKE</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              DESIGN
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed font-light pl-1">
            Specializing in custom-built indoor turf, covered pickleball courts, and aesthetic functional interiors. We turn concepts into reality with precision.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center px-10 py-4 bg-brand-rust text-white font-bold rounded-sm transition-all hover:bg-brand-rustLight shadow-lg uppercase tracking-widest text-sm"
            >
              Get a Quote
            </a>
            <a 
              href="#gallery" 
              className="inline-flex justify-center items-center px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-sm transition-all hover:bg-white hover:text-brand-dark uppercase tracking-widest text-sm"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
