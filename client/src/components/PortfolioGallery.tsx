'use client';

import { useState } from 'react';
import { portfolioItems, getCategoryLabel } from '@/data/portfolio';

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'stills', label: 'Stills' },
    { id: 'fotografia', label: 'Fotografía' },
    { id: 'makeoff', label: 'Make Off' }
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl text-white mb-12 tracking-widest" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", fontWeight: 700 }}>Nuestro Portafolio</h1>
          <div className="h-1 w-24 mb-8" style={{ background: 'linear-gradient(to right, #D946EF, #F59E0B, transparent)' }}></div>
          <p className="text-lg max-w-2xl" style={{ color: '#A1A1AA', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
            Una selección de nuestros trabajos más recientes. Stills de videoclips, sesiones fotográficas y momentos behind-the-scenes que capturan la esencia de cada proyecto.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-6 py-2 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: activeCategory === cat.id ? '#D946EF' : '#1C1C1E',
                color: activeCategory === cat.id ? '#FFFFFF' : '#A1A1AA',
                boxShadow: activeCategory === cat.id ? '0 0 20px rgba(217, 70, 239, 0.5)' : 'none',
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                fontWeight: 500
              }}
            >
              {cat.label}
            </button>
          ))}        </div>

        {/* Masonry Grid - Seamless Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`rounded-lg overflow-hidden transition-all duration-300 group cursor-pointer ${
                item.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
              style={{
                backgroundColor: '#1C1C1E',
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
              }}
            >
              {/* Image Container */}
              <div 
                className={`relative overflow-hidden ${item.featured ? 'aspect-video' : 'aspect-square'}`} 
                style={{ backgroundColor: '#1C1C1E' }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{
                    transform: item.rotation ? `rotate(${item.rotation}deg)` : 'rotate(0deg)',
                    transformOrigin: 'center'
                  }}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4" style={{ background: 'linear-gradient(to top, rgba(10, 10, 10, 0.8), transparent)' }}>
                  <h3 className="text-white text-lg tracking-wider" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#F59E0B', fontFamily: "'Inter', system-ui, -apple-system, sans-serif", fontWeight: 500 }}>
                    {getCategoryLabel(item.category)}
                  </p>
                </div>

                {/* Magenta accent on hover */}
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500" style={{ backgroundColor: '#D946EF' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg" style={{ color: '#A1A1AA' }}>
              No hay proyectos en esta categoría
            </p>
          </div>
        )}
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
