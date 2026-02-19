
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface CertificatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Placeholder images for certificates (vertical orientation)
const CERTIFICATES = [
  "https://picsum.photos/id/20/600/850", 
  "https://picsum.photos/id/24/600/850",
  "https://picsum.photos/id/42/600/850",
  "https://picsum.photos/id/60/600/850"
];

const CertificatesModal: React.FC<CertificatesModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when opening
  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % CERTIFICATES.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-xl transition-all duration-300"
      onClick={onClose}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
      >
        <X size={40} />
      </button>

      {/* Main Content */}
      <div 
        className="relative w-full h-full max-w-7xl mx-auto flex flex-col items-center justify-center p-4 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevImage}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-white transition-all backdrop-blur-md z-20 group"
        >
          <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
        </button>

        <button 
          onClick={nextImage}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-white transition-all backdrop-blur-md z-20 group"
        >
          <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Image Container */}
        <div className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center">
            <img 
              src={CERTIFICATES[currentIndex]} 
              alt={`Certificate ${currentIndex + 1}`}
              className="max-h-full max-w-full object-contain shadow-2xl rounded-lg animate-fade-in"
              key={currentIndex} // Force re-render for animation
            />
        </div>

        {/* Counter / Caption */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white/80 font-serif text-2xl tracking-widest">
            Сертификат {currentIndex + 1} <span className="text-brand-gold">/</span> {CERTIFICATES.length}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CertificatesModal;
