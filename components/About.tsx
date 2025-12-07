
import React from 'react';
import { Ruler, Trophy, PenTool } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Company Philosophy */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="lg:w-1/2">
            <span className="text-brand-rust font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4 mb-8 uppercase leading-tight">
              Crafting Enhanced <br/> Lifestyles
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              Master Stroke is a sports and interior design firm that transforms open outdoor sports grounds into premium covered indoor arenas. We specialize in custom-built indoor turf, covered pickleball courts, multi-sport arenas, and aesthetic yet functional interior design.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-sm border border-slate-200 group-hover:border-brand-gold transition-colors">
                  <Ruler className="text-brand-rust" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-sm">Precision</h4>
                  <p className="text-sm text-slate-500">Meticulous planning and execution.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-sm border border-slate-200 group-hover:border-brand-gold transition-colors">
                  <Trophy className="text-brand-rust" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-sm">Quality</h4>
                  <p className="text-sm text-slate-500">Elite materials for elite performance.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-sm border border-slate-200 group-hover:border-brand-gold transition-colors">
                  <PenTool className="text-brand-rust" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-sm">Innovation</h4>
                  <p className="text-sm text-slate-500">Modern design thinking.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute top-0 right-0 w-3/4 h-full bg-slate-100 -z-10 rounded-sm"></div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" 
              alt="Architectural Sketches" 
              className="w-full h-auto shadow-xl rounded-sm transform translate-y-8 -translate-x-8"
            />
          </div>
        </div>

        {/* Founder Bio */}
        <div className="bg-slate-900 text-white p-8 md:p-16 rounded-sm relative overflow-hidden">
          {/* Decorative Brush Stroke */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-rust opacity-20 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
            <div className="md:col-span-1">
              <div className="aspect-[3/4] overflow-hidden rounded-sm border-4 border-white/10 relative">
                 {/* Using a placeholder silhouette for Mayuresh as per best practice when real photo URL isn't permanent */}
                 <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Mayuresh" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute bottom-0 left-0 w-full bg-brand-gold p-2 text-center text-slate-900 font-bold uppercase tracking-wider text-sm">
                  The Founder
                </div>
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-3xl font-display font-bold uppercase">Mayuresh</h3>
              <p className="text-slate-300 font-light leading-relaxed text-lg">
                Mayuresh has been active in the fields of interior design and sports infrastructure for over a decade. He is known for integrating design thinking and aesthetic sensibilities into high-quality sports facilities.
              </p>
              <p className="text-slate-300 font-light leading-relaxed text-lg">
                He nurtures his clients’ passion and ambition, delivering state-of-the-art infrastructure that aligns with their vision. Committed to quality, value, and timely execution, he strives for excellence with a clear focus on transforming ideas into reality.
              </p>
              <p className="text-brand-gold italic font-medium text-xl pt-4 border-t border-white/10">
                "His work goes beyond creating designs—he is dedicated to crafting enhanced lifestyles."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
