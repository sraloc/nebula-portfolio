import { useState, useRef } from 'react';
import { portfolioItems, getCategoryLabel, PortfolioItem } from '@/data/portfolio';
import ImageModal from './ImageModal';

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const imageRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'stills', label: 'Stills' },
    { id: 'fotografia', label: 'Fotografía' },
    { id: 'makeoff', label: 'Make Off' }
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleImageClick = (item: PortfolioItem, event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    setClickPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  const handleNextImage = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    }
  };

  const handlePrevImage = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs md:text-sm tracking-widest font-semibold mb-4" style={{ color: '#D946EF', fontFamily: "'Inter', system-ui, -apple-system, sans-serif", letterSpacing: '0.15em' }}>PORTAFOLIO</p>
          <h1 className="text-4xl md:text-5xl text-white mb-12 tracking-widest" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", fontWeight: 700 }}>Nuestro Portafolio</h1>
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
          ))}
        </div>

        {/* Masonry Grid - Dynamic Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem',
            gridAutoRows: '250px',
            gridAutoFlow: 'dense'
          }}
        >
          {filteredItems.map((item, index) => {
            // Determinar gridColumn y gridRow basado en featured y aspectRatio
            let gridColumn = 'span 1';
            let gridRow = 'span 1';
            
            if (item.aspectRatio === 'vertical') {
              gridColumn = 'span 1';
              gridRow = 'span 2';
            } else if (item.aspectRatio === 'horizontal') {
              gridColumn = 'span 2';
              gridRow = 'span 1';
            }

            return (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) imageRefs.current[item.id] = el;
                }}
                style={{
                  gridColumn,
                  gridRow,
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
                }}
                className="rounded-lg overflow-hidden transition-all duration-300 group cursor-pointer"
                onClick={(e) => handleImageClick(item, e)}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'scale(1)';
                }}
              >
                {/* Image Container */}
                <div 
                  className="relative overflow-hidden w-full h-full" 
                  style={{ backgroundColor: '#1C1C1E' }}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4" style={{ background: 'linear-gradient(to top, rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.4), transparent)' }}>
                    <h3 className="text-white text-sm md:text-base tracking-wider" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", fontWeight: 600 }}>
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm" style={{ color: '#F59E0B', fontFamily: "'Inter', system-ui, -apple-system, sans-serif", fontWeight: 500 }}>
                      {getCategoryLabel(item.category)}
                    </p>
                  </div>

                  {/* Magenta accent on hover */}
                  <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500" style={{ backgroundColor: '#D946EF' }}></div>
                </div>
              </div>
            );
          })}
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

      {/* Image Modal */}
      <ImageModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
        clickPosition={clickPosition}
      />

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

        @media (max-width: 768px) {
          [style*="grid-template-columns"] {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)) !important;
            grid-auto-rows: 150px !important;
          }
        }

        @media (max-width: 480px) {
          [style*="grid-template-columns"] {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)) !important;
            grid-auto-rows: 120px !important;
          }
        }
      `}</style>
    </div>
  );
}
