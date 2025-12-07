
import React, { useState } from 'react';
import { Project } from '../types';

// These placeholders are chosen to closely match your uploaded portfolio.
// TO USE YOUR OWN IMAGES:
// 1. Create a folder named 'assets' in your 'public' folder.
// 2. Put your images there (e.g., 'turf1.jpg', 'bedroom.jpg').
// 3. Change the 'image' path below to '/assets/turf1.jpg'.

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Urban Stadium Sports Turf', 
    category: 'Turf', 
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop' // Matches the Green/Red pitch turf
  },
  { 
    id: 2, 
    title: 'Robson Santana Office', 
    category: 'Interior', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop' // Matches the glass partition office
  },
  { 
    id: 3, 
    title: 'Grey Cravings Cafe', 
    category: 'Interior', 
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop' // Matches the outdoor cafe vibe
  },
  { 
    id: 4, 
    title: 'Desai Residence Entrance', 
    category: 'Interior', 
    image: 'https://images.unsplash.com/photo-1628745277864-4a873c88bb7a?q=80&w=2070&auto=format&fit=crop' // Matches the modern door/nameplate
  },
  { 
    id: 5, 
    title: 'Master Bedroom - Blue Theme', 
    category: 'Interior', 
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop' // Matches the blue headboard bedroom
  },
  { 
    id: 6, 
    title: 'Pramal Life Facade', 
    category: 'Structures', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' // Matches the commercial building exterior
  },
  { 
    id: 7, 
    title: 'Zoning & Concept Sketch', 
    category: 'Sketches', 
    image: 'https://images.unsplash.com/photo-1628151016004-e3664d4b29c9?q=80&w=2070&auto=format&fit=crop' // Matches the hand-drawn plan
  },
  { 
    id: 8, 
    title: 'Tensile Roofing Structure', 
    category: 'Structures', 
    image: 'https://images.unsplash.com/photo-1519817914152-d2d8ee9bb6a7?q=80&w=2070&auto=format&fit=crop' // Matches the white tensile roof
  }
];

const categories = ['All', 'Turf', 'Interior', 'Sketches', 'Structures'];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-rust font-bold tracking-widest uppercase text-sm">Our Portfolio</span>
            <h2 className="text-4xl font-display font-bold text-slate-900 uppercase mt-2">
              Selected Works
            </h2>
            <p className="text-slate-500 mt-4 max-w-lg">
              A collection of our finest transformations, from conceptual sketches to realized structures.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`pb-1 text-sm font-bold uppercase tracking-wider transition-all border-b-2 ${
                  filter === cat 
                    ? 'text-brand-rust border-brand-rust' 
                    : 'text-slate-400 border-transparent hover:text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative aspect-[4/5] overflow-hidden cursor-pointer rounded-sm shadow-md bg-gray-200">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-display font-bold uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
