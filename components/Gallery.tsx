
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://picsum.photos/id/28/1200/800",
    "https://picsum.photos/id/106/600/600",
    "https://picsum.photos/id/292/600/600",
    "https://picsum.photos/id/252/800/600",
    "https://picsum.photos/id/433/600/800"
  ];

  return (
    <section className="py-32">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-on-scroll">
          <div>
            <span className="text-brand-goldDark font-sans text-xs tracking-[0.3em] uppercase font-extrabold pl-1">Галерея</span>
            <h2 className="font-serif text-5xl md:text-6xl text-brand-dark mt-4">Атмосфера</h2>
          </div>
          <p className="text-brand-dark/60 max-w-md text-right md:text-left text-lg font-medium">
             Визуальное погружение в пространство, где время замедляет свой ход.
          </p>
        </div>
        
        {/* Full Width Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-6 h-[700px] md:h-[800px]">
          {/* Main large image */}
          <div className="col-span-2 row-span-2 rounded-[2.5rem] overflow-hidden relative group shadow-2xl animate-on-scroll">
             <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
             <img src={images[0]} alt="Atmosphere" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
             <div className="absolute bottom-8 left-8 z-20">
               <span className="glass-panel px-6 py-3 rounded-full text-sm text-brand-dark font-bold bg-white/90 backdrop-blur-md shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                 Интерьер студии
               </span>
             </div>
          </div>
          
          {/* Top right */}
          <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative group shadow-lg animate-on-scroll" style={{ transitionDelay: '100ms' }}>
             <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent z-10 transition-colors"></div>
             <img src={images[1]} alt="Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          
          {/* Top right wide */}
          <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative group shadow-lg animate-on-scroll" style={{ transitionDelay: '200ms' }}>
             <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent z-10 transition-colors"></div>
             <img src={images[2]} alt="Tools" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>

          {/* Bottom small */}
          <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative group shadow-lg animate-on-scroll" style={{ transitionDelay: '100ms' }}>
             <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent z-10 transition-colors"></div>
             <img src={images[3]} alt="Relax" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>

          {/* Bottom right */}
          <div className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative group shadow-lg animate-on-scroll" style={{ transitionDelay: '200ms' }}>
             <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent z-10 transition-colors"></div>
             <img src={images[4]} alt="Spa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
