import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem } from '@/data/portfolio';

interface ImageModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  clickPosition?: { x: number; y: number };
}

export default function ImageModal({ item, isOpen, onClose, onNext, onPrev, clickPosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 } }: ImageModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Trigger animation on mount
      setTimeout(() => setIsAnimating(true), 10);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => onClose(), 300);
  };

  if (!isOpen || !item) return null;

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      stills: 'STILLS',
      fotografia: 'FOTOGRAFÍA',
      makeoff: 'MAKE OFF'
    };
    return labels[category] || category;
  };

  // Calcular transformación inicial desde la posición del click
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const offsetX = clickPosition.x - centerX;
  const offsetY = clickPosition.y - centerY;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: isAnimating ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0)',
        transition: 'background-color 0.4s ease-out'
      }}
      onClick={handleClose}
    >
      {/* Close Button - Top Right */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 z-20 p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
        aria-label="Close modal"
        style={{
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.3s ease-out 0.1s, transform 0.3s ease-out 0.1s'
        }}
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Main Image Container - Zoom Effect from Click Position */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
        style={{
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating 
            ? 'translate(0, 0) scale(1)' 
            : `translate(${offsetX * 0.3}px, ${offsetY * 0.3}px) scale(0.8)`,
          transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
          transformOrigin: `${clickPosition.x}px ${clickPosition.y}px`
        }}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Previous Button - Left Center */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 group"
          aria-label="Previous image"
          style={{
            opacity: isAnimating ? 1 : 0,
            transform: isAnimating ? 'translateX(0) translateY(-50%)' : 'translateX(-20px) translateY(-50%)',
            transition: 'opacity 0.3s ease-out 0.15s, transform 0.3s ease-out 0.15s'
          }}
        >
          <ChevronLeft className="w-8 h-8 text-white group-hover:text-[#D946EF] transition-colors duration-300" />
        </button>
      )}

      {/* Next Button - Right Center */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-lg transition-all duration-300 hover:bg-white/10 group"
          aria-label="Next image"
          style={{
            opacity: isAnimating ? 1 : 0,
            transform: isAnimating ? 'translateX(0) translateY(-50%)' : 'translateX(20px) translateY(-50%)',
            transition: 'opacity 0.3s ease-out 0.15s, transform 0.3s ease-out 0.15s'
          }}
        >
          <ChevronRight className="w-8 h-8 text-white group-hover:text-[#D946EF] transition-colors duration-300" />
        </button>
      )}

      {/* Image Info - Top Left */}
      <div
        className="absolute top-6 md:top-8 left-6 md:left-8 z-20 text-left"
        onClick={(e) => e.stopPropagation()}
        style={{
          opacity: isAnimating ? 1 : 0,
          transform: isAnimating ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'opacity 0.3s ease-out 0.2s, transform 0.3s ease-out 0.2s'
        }}
      >
        <p
          className="text-xs md:text-sm tracking-widest font-semibold mb-2"
          style={{ color: '#D946EF', fontFamily: "'Inter', system-ui, -apple-system, sans-serif", letterSpacing: '0.15em' }}
        >
          {getCategoryLabel(item.category)}
        </p>
        <h2
          className="text-lg md:text-xl text-white font-bold"
          style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
        >
          {item.title}
        </h2>
        {item.description && (
          <p
            className="text-sm md:text-base max-w-sm mt-2"
            style={{ color: '#A1A1AA', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
          >
            {item.description}
          </p>
        )}
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
