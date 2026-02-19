
import React from 'react';
import { ArrowRight, Star, Percent, Gift } from 'lucide-react';
import { DIKIDI_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 relative z-20">
            {/* Discount Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 backdrop-blur-md shadow-sm animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-goldDark"></span>
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-dark font-bold flex items-center gap-2">
                <Percent size={12} /> Скидка -20% на все услуги
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="font-handwriting text-[5.5rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem] xl:text-[15rem] leading-[0.8] text-brand-dark animate-fade-in-up delay-100 -ml-2 md:-ml-4">
              Dream <br/>
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-sageDark to-brand-goldDark pr-6">Massage</span>
                <svg className="absolute -bottom-2 md:-bottom-4 lg:-bottom-8 left-0 w-full h-4 md:h-8 lg:h-10 text-brand-gold/30 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
            </h1>
            
            {/* Description */}
            <p className="font-sans text-lg md:text-2xl text-brand-dark/80 max-w-2xl font-light leading-relaxed animate-fade-in-up delay-200">
              Пространство тишины и восстановления. Индивидуальный подход к вашему телу в атмосфере жидкого спокойствия.
            </p>

            {/* --- MOBILE SPECIFIC VISUAL BLOCK --- */}
            {/* Displayed only on screens smaller than lg */}
            <div className="block lg:hidden relative w-full max-w-[340px] h-[260px] mx-auto mt-8 mb-10 perspective-[1000px] animate-fade-in-up delay-200">
                {/* Decorative background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
                
                {/* Main Card Image */}
                <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl rotate-[-3deg] overflow-hidden border-[4px] border-white z-10">
                   <img src="https://picsum.photos/id/15/600/800" className="w-full h-full object-cover" alt="Atmosphere" />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
                </div>

                {/* Secondary Image (Behind) */}
                <div className="absolute top-2 right-[-10px] w-full h-full bg-white rounded-[2rem] shadow-lg rotate-[4deg] overflow-hidden border-[4px] border-white/60 z-0 opacity-80 scale-95">
                   <img src="https://picsum.photos/id/65/600/800" className="w-full h-full object-cover" alt="Detail" />
                </div>

                {/* Floating Gift Card Element (Mobile Version) */}
                <div className="absolute -bottom-5 -right-2 z-20 glass-panel p-4 rounded-2xl flex items-center gap-3 shadow-[0_15px_30px_rgba(42,38,34,0.15)] animate-float border border-white/60 backdrop-blur-xl bg-white/80">
                   <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold to-brand-goldDark flex items-center justify-center text-white shadow-md flex-shrink-0">
                      <Gift size={18} />
                   </div>
                   <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-brand-sageDark mb-0.5">Подарок</p>
                      <p className="font-serif text-lg leading-none text-brand-dark">Сертификат</p>
                   </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 animate-fade-in-up delay-300">
              <a 
                href={DIKIDI_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-brand-dark text-white font-bold uppercase tracking-wider hover:bg-brand-gold transition-all duration-300 shadow-2xl hover:shadow-brand-gold/50"
              >
                Получить скидку
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center justify-center sm:justify-start gap-5 px-8 py-5 rounded-2xl glass-panel group cursor-default hover:bg-white/90 transition-colors">
                <div className="flex -space-x-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-md transform group-hover:translate-x-1 transition-transform duration-500" style={{transitionDelay: `${i*100}ms`}}>
                      <img src={`https://picsum.photos/seed/${i+50}/100`} className="w-full h-full object-cover" alt="client" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-brand-dark font-bold">
                  <div className="flex text-brand-gold mb-1 justify-center sm:justify-start">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  Доверие клиентов
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Visual Side - Refined Collage Composition */}
          {/* Kept exclusively for Large Screens */}
          <div className="lg:col-span-7 relative h-[800px] hidden lg:block perspective-[2000px] pointer-events-none select-none translate-x-10">
             
             {/* 1. Background Abstract Shape (Soft Anchor) */}
             <div className="absolute top-[-5%] right-[-10%] w-[700px] h-[700px] rounded-full bg-brand-gold/5 blur-3xl z-0"></div>

             {/* 2. Back Image (Foundation) */}
             <div className="absolute top-0 right-[50px] w-[480px] h-[640px] rounded-[3rem] bg-white shadow-2xl rotate-[-6deg] overflow-hidden z-10 animate-float opacity-90 border-[10px] border-white transition-transform duration-700 hover:rotate-[-4deg] hover:scale-[1.02]">
                <img src="https://picsum.photos/id/15/800/1200" className="w-full h-full object-cover opacity-90" alt="Nature" />
                <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply"></div>
             </div>

             {/* 3. Middle Image (Focal Point) */}
             <div className="absolute top-[140px] right-[300px] w-[400px] h-[520px] rounded-[2.5rem] bg-white shadow-[0_30px_60px_-10px_rgba(0,0,0,0.3)] rotate-[4deg] overflow-hidden z-20 animate-float animation-delay-2000 border-[8px] border-white transition-transform duration-700 hover:rotate-[2deg] hover:scale-[1.02]">
                <img src="https://picsum.photos/id/20/600/800" className="w-full h-full object-cover" alt="Interior" />
             </div>

             {/* 4. Front Image (Detail/Accent - Left Side) */}
             <div className="absolute bottom-[120px] right-[540px] w-[280px] h-[360px] rounded-[2rem] bg-white shadow-xl rotate-[-8deg] overflow-hidden z-30 animate-float animation-delay-4000 border-[6px] border-white transition-transform duration-700 hover:rotate-[-6deg] hover:scale-[1.05]">
                <img src="https://picsum.photos/id/65/600/800" className="w-full h-full object-cover" alt="Detail" />
             </div>
             
             {/* 5. Gift Certificate Card (Integrated Floating Element) */}
             <div className="absolute bottom-[80px] right-[100px] w-[280px] glass-panel z-40 p-5 rounded-[1.5rem] flex items-center gap-4 backdrop-blur-2xl bg-white/70 border border-white/60 animate-float animation-delay-3000 shadow-[0_20px_40px_rgba(191,161,95,0.2)] rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-gold to-brand-goldDark flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <Gift size={20} />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-brand-dark/50 font-bold mb-0.5">Подарок</span>
                  <h3 className="font-serif text-lg text-brand-dark leading-none">Сертификат <br/>на услуги</h3>
                </div>
             </div>

             {/* Decorative: Thin Gold Lines/Circles */}
             <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] border border-brand-gold/20 rounded-full z-0 opacity-60"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fade-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
