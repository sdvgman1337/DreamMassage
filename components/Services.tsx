
import React, { useState } from 'react';
import { Clock, Star, ArrowUpRight, Crown, ChevronDown, Check, Sparkles, Gem } from 'lucide-react';
import { SERVICE_CATEGORIES, DIKIDI_LINK } from '../constants';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SERVICE_CATEGORIES[0].id);
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);
  
  const activeCategory = SERVICE_CATEGORIES.find(c => c.id === activeTab);

  const toggleService = (id: string) => {
    setExpandedServiceId(prev => prev === id ? null : id);
  };

  return (
    <section id="services" className="py-32 relative">
      <div className="container-wide relative z-10">
        
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8 animate-on-scroll">
           <div>
            <span className="text-brand-sageDark font-sans text-xs tracking-[0.3em] uppercase font-bold">Меню услуг</span>
            <h2 className="font-serif text-6xl md:text-7xl text-brand-dark mt-4">Прайс-лист</h2>
           </div>
           
           {/* Glass Tabs - Right aligned */}
           <div className="flex flex-wrap gap-2 p-2 rounded-full glass-panel backdrop-blur-xl">
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab(category.id);
                  setExpandedServiceId(null);
                }}
                className={`px-6 py-3 md:px-8 md:py-4 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-500 ${
                  activeTab === category.id
                    ? 'bg-brand-dark text-white shadow-lg font-bold'
                    : 'text-brand-dark/60 hover:text-brand-dark hover:bg-white/50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid - 1 Column for better readability of long texts, or 2 cols on wide screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {activeCategory?.items.map((service, index) => {
            const isPopular = service.popular;
            const hasPackages = service.packages && service.packages.length > 0;
            const isExpanded = expandedServiceId === service.id;
            
            return (
              <div 
                key={service.id} 
                className={`
                  relative rounded-[2rem] flex flex-col transition-all duration-500 group overflow-hidden
                  ${isPopular 
                    ? 'bg-gradient-to-br from-[#FFFCF5] to-[#F2E6D0] border border-brand-gold shadow-xl' 
                    : 'glass-card bg-white/60 hover:bg-white border border-white hover:border-brand-dark/10'
                  }
                `}
                style={{ animation: `fade-in-up 0.6s ease-out forwards ${index * 100}ms`, opacity: 0 }}
              >
                {/* Badges Container */}
                <div className="absolute top-0 right-0 p-4 z-20 flex flex-col gap-2 items-end">
                    {/* Popular Badge */}
                    {isPopular && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold text-white text-[10px] uppercase font-bold tracking-widest shadow-md">
                        <Crown size={12} fill="currentColor" />
                        Хит
                        </div>
                    )}
                    
                    {/* Subscription Badge */}
                    {hasPackages && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-sageDark text-white text-[10px] uppercase font-bold tracking-widest shadow-md">
                        <Gem size={12} className="stroke-2" />
                        Абонемент
                        </div>
                    )}
                </div>

                {/* Main Visible Content */}
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex flex-col gap-2 mb-4">
                     <div className="flex justify-between items-start">
                        <h3 className={`font-serif text-3xl leading-tight pr-8 ${isPopular ? 'text-brand-dark' : 'text-brand-dark group-hover:text-brand-goldDark transition-colors'}`}>
                          {service.name}
                        </h3>
                     </div>
                     {/* Short Description displayed in collapsed view */}
                     {service.description && (
                        <p className="text-brand-dark/60 text-sm font-medium leading-relaxed line-clamp-2 mt-2">
                           {service.description}
                        </p>
                     )}
                  </div>

                  {/* Price & Duration Row */}
                  <div className="flex items-end gap-4 mt-4">
                    <div className="flex flex-col">
                        <span className={`font-sans text-3xl font-bold whitespace-nowrap ${isPopular ? 'text-brand-dark' : 'text-brand-dark'}`}>
                            {service.price}
                        </span>
                        {service.oldPrice && (
                            <span className="text-brand-dark/40 line-through text-sm font-bold">
                                {service.oldPrice}
                            </span>
                        )}
                    </div>
                    
                    <div className="h-8 w-px bg-brand-dark/10 mx-2"></div>
                    
                    <div className="flex items-center text-xs uppercase tracking-widest gap-2 font-bold text-brand-sageDark pb-1.5">
                      <Clock size={16} />
                      {service.duration}
                    </div>
                  </div>
                </div>

                {/* Toggle Button Area */}
                <div 
                    className={`px-8 pb-6 flex justify-between items-center cursor-pointer ${isExpanded ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}
                    onClick={() => toggleService(service.id)}
                >
                     <span className="text-xs font-bold uppercase tracking-widest text-brand-goldDark flex items-center gap-2">
                        {isExpanded ? 'Свернуть' : 'Подробнее'}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                     </span>

                     <a 
                        href={DIKIDI_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
                          isPopular 
                          ? 'bg-brand-gold text-white shadow-lg hover:scale-110 hover:bg-brand-goldDark'
                          : 'bg-white border border-brand-dark/10 text-brand-dark hover:bg-brand-gold hover:border-brand-gold hover:text-white'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight size={20} />
                    </a>
                </div>

                {/* Expandable Details */}
                <div className={`
                    overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out
                    ${isExpanded ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}
                `}>
                    <div className="px-8 pb-8 pt-2 border-t border-brand-dark/5 mx-8 mt-2">
                        {/* Detailed Description */}
                        <p className="text-brand-dark/80 font-medium leading-relaxed mb-6 italic">
                            {service.fullDescription || service.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Expectations */}
                            {service.expectations && service.expectations.length > 0 && (
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold text-brand-sageDark mb-3 flex items-center gap-2">
                                        <Sparkles size={14} /> Вас ожидает
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.expectations.map((item, i) => (
                                            <li key={i} className="text-sm text-brand-dark/70 flex items-start gap-2">
                                                <span className="w-1 h-1 rounded-full bg-brand-gold mt-2 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Benefits */}
                            {service.benefits && service.benefits.length > 0 && (
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold text-brand-sageDark mb-3 flex items-center gap-2">
                                        <Check size={14} /> Эффект
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.benefits.map((item, i) => (
                                            <li key={i} className="text-sm text-brand-dark/70 flex items-start gap-2">
                                                <Check size={14} className="text-brand-sage mt-0.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Subscription Packages */}
                        {service.packages && service.packages.length > 0 && (
                          <div className="mt-8 pt-6 border-t border-brand-dark/5">
                            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-goldDark mb-4 flex items-center gap-2">
                                <Gem size={14} /> Выгодные абонементы
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.packages.map((pkg, i) => (
                                  <a 
                                    href={DIKIDI_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={i} 
                                    className="flex flex-col p-4 rounded-xl bg-gradient-to-br from-[#FFFCF5] to-[#F2EFE9] border border-brand-gold/30 hover:border-brand-gold hover:shadow-lg transition-all duration-300 group/pkg"
                                  >
                                    <div className="flex justify-between items-start mb-1">
                                      <span className="font-serif text-lg text-brand-dark font-bold leading-tight">
                                        {pkg.count} сеансов {pkg.name && <span className="block text-sm font-sans font-normal opacity-70 mt-0.5">{pkg.name}</span>}
                                      </span>
                                      <ArrowUpRight size={16} className="text-brand-gold opacity-0 group-hover/pkg:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-brand-goldDark font-bold text-xl mt-auto">
                                      {pkg.price}
                                    </span>
                                  </a>
                                ))}
                            </div>
                          </div>
                        )}
                    </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
