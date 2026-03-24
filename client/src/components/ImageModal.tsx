import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { PortfolioItem } from '@/data/portfolio';

interface ImageModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function ImageModal({ item, isOpen, onClose, onNext, onPrev }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext?.();
      if (e.key === 'ArrowLeft') onPrev?.();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !item) return null;

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      stills: 'STILLS',
      fotografia: 'FOTOGRAFÍA',
      makeoff: 'MAKE OFF'
    };
    return labels[category] || category;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full h-full max-w-6xl max-h-screen flex flex-col items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 z-10 p-2 rounded-lg transition-all duration-300 hover:bg-white/10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Image Container */}
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
          <img
            src={item.image}
            alt={item.alt}
            className="max-w-full max-h-[70vh] object-contain rounded-lg"
          />

          {/* Details Section */}
          <div className="w-full text-center">
            <p
              className="text-xs md:text-sm tracking-widest font-semibold mb-2"
              style={{ color: '#D946EF', fontFamily: "'Inter', system-ui, -apple-system, sans-serif", letterSpacing: '0.15em' }}
            >
              {getCategoryLabel(item.category)}
            </p>
            <h2
              className="text-2xl md:text-3xl text-white font-bold mb-3"
              style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
            >
              {item.title}
            </h2>
            {item.description && (
              <p
                className="text-base md:text-lg max-w-2xl mx-auto"
                style={{ color: '#A1A1AA', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
              >
                {item.description}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        {(onPrev || onNext) && (
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
            {onPrev && (
              <button
                onClick={onPrev}
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10"
                style={{ color: '#D946EF', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
              >
                ← Anterior
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10"
                style={{ color: '#D946EF', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
              >
                Siguiente →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
