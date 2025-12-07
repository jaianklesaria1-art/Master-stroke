
import React from 'react';
import { PaintBucket, LandPlot, Hammer, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Interior Design",
      subtitle: "Commercial & Residential",
      description: "We craft aesthetic yet functional interiors. From minimalist furniture concepts to complete residential makeovers (Living, Bedroom, Kitchen), we ensure every inch is utilized perfectly.",
      icon: <PaintBucket className="w-8 h-8" />,
      features: ["Residential Interiors", "Office Spaces & Lobbies", "Furniture & Lighting Design"]
    },
    {
      title: "Sports Infrastructure",
      subtitle: "Turf & Courts",
      description: "Transforming open grounds into elite arenas. We specialize in artificial turf, pickleball courts, padel courts, and multi-sport setups designed for performance.",
      icon: <LandPlot className="w-8 h-8" />,
      features: ["Cricket & Football Turf", "Pickleball & Padel", "Multi-sport Arenas"]
    },
    {
      title: "Turnkey Projects",
      subtitle: "Concept to Creation",
      description: "We handle everything from initial zoning sketches and layouts to civil work, fabrication, and tensile roofing. A complete end-to-end execution service.",
      icon: <Hammer className="w-8 h-8" />,
      features: ["Architectural Sketches & Zoning", "Tensile Structures & Sheds", "Civil & Fabrication"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-stone-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-brand-rust font-bold tracking-widest uppercase text-sm">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-3 uppercase">
              Our Services
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-slate-500 text-right font-light">
              Designing Spaces.<br/>Building Arenas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-sm shadow-sm group hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mb-8 p-4 bg-brand-gold/10 rounded-sm w-fit text-brand-rust group-hover:bg-brand-rust group-hover:text-white transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold font-display uppercase mb-1">{service.title}</h3>
              <p className="text-brand-rust font-medium text-sm uppercase tracking-wider mb-6">
                {service.subtitle}
              </p>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 border-t border-gray-100 pt-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                    <ArrowRight size={14} className="text-brand-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
