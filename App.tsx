
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import PromoTimer from './components/PromoTimer';

const App: React.FC = () => {
  // Global scroll animation observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-x-hidden text-brand-dark">
      {/* Background Layer 1: Ambient Blobs */}
      <div className="fixed inset-0 z-[-3] pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-[#E1DBCF] rounded-full mix-blend-multiply filter blur-[90px] opacity-80 animate-blob"></div>
        <div className="absolute top-[30%] right-[-10%] w-[700px] h-[700px] bg-[#D8E0DC] rounded-full mix-blend-multiply filter blur-[90px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] bg-[#F0E6D2] rounded-full mix-blend-multiply filter blur-[90px] opacity-80 animate-blob animation-delay-4000"></div>
      </div>

      {/* Background Layer 2: Botanical / Zen Line Art Decorations */}
      <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden">
        {/* Top Right Branch */}
        <svg className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-[0.03] text-brand-dark transform rotate-12" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M100,200 Q120,100 180,50 M120,150 Q160,120 190,100 M120,150 Q80,120 50,100 M100,200 Q80,100 20,50" />
          <path d="M180,50 Q190,40 200,50 M190,100 Q200,90 200,110" />
          <circle cx="20" cy="50" r="2" fill="currentColor" />
          <circle cx="180" cy="50" r="2" fill="currentColor" />
        </svg>

        {/* Middle Left Organic Curve */}
        <svg className="absolute top-[40%] -left-40 w-[800px] h-[800px] opacity-[0.04] text-brand-goldDark" viewBox="0 0 500 500" fill="none" stroke="currentColor" strokeWidth="0.8">
           <path d="M0,250 C150,350 350,150 500,250" />
           <path d="M0,270 C160,370 340,170 500,270" opacity="0.5" />
        </svg>

        {/* Bottom Right Zen Stones Abstract */}
        <svg className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.03] text-brand-dark" viewBox="0 0 200 200">
           <path d="M100,180 Q150,180 150,160 Q150,140 100,140 Q50,140 50,160 Q50,180 100,180 Z" fill="currentColor" />
           <path d="M100,135 Q140,135 140,115 Q140,95 100,95 Q60,95 60,115 Q60,135 100,135 Z" fill="currentColor" />
           <path d="M100,90 Q120,90 120,75 Q120,60 100,60 Q80,60 80,75 Q80,90 100,90 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Background Layer 3: Texture/Pattern Overlay */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.4]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topography" x="0" y="0" width="100%" height="100%" patternUnits="userSpaceOnUse">
               <filter id="noiseFilter">
                 <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch"/>
               </filter>
               <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.15"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topography)"/>
        </svg>
      </div>

      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <About />
        <PromoTimer />
        <Services />
        <Reviews />
        <FAQ />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
