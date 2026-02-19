
import React from 'react';
import { Leaf, ShieldCheck, Award, Sparkles, LucideIcon } from 'lucide-react';
import { BENEFITS } from '../constants';

const iconMap: Record<string, LucideIcon> = {
  Leaf: Leaf,
  ShieldCheck: ShieldCheck,
  Award: Award,
  Sparkles: Sparkles,
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-32">
      <div className="container-wide">
        
        {/* New Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <span className="text-brand-goldDark font-sans text-xs tracking-[0.3em] uppercase font-extrabold">Наши ценности</span>
          <h2 className="font-serif text-5xl md:text-7xl text-brand-dark mt-6 mb-8 leading-tight">
            Почему тело выбирает нас
          </h2>
          <p className="text-brand-dark/60 font-medium text-lg leading-relaxed">
             Мы создали стандарты качества, которые позволяют вам полностью отключиться от внешнего мира. Это не просто массаж — это ритуал заботы.
          </p>
        </div>

        {/* Wide Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.iconName];
            return (
              <div 
                key={benefit.id} 
                className="glass-card p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[320px] group bg-white/80 hover:bg-white animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start">
                   <div className="w-16 h-16 rounded-2xl bg-[#F2EFE9] border border-brand-dark/5 flex items-center justify-center text-brand-dark group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shadow-inner">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-6xl font-serif text-brand-dark/5 group-hover:text-brand-gold/20 transition-colors">
                    0{index + 1}
                  </span>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-serif text-2xl font-bold text-brand-dark mb-4 group-hover:translate-x-1 transition-transform">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-dark/60 font-medium leading-relaxed group-hover:text-brand-dark/80 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
