
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, DIKIDI_LINK } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle internal links
    if (href.startsWith('#')) {
      e.preventDefault();
      
      const targetId = href.substring(1);
      
      // If href is just '#', scroll to top
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        // Calculate offset to account for fixed header
        // We use a safe offset that looks good with the header
        const headerOffset = 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div 
        className={`container-wide transition-all duration-500 rounded-2xl border ${
          isScrolled 
            ? 'glass-panel py-3 mt-0 border-white/60 shadow-lg' 
            : 'bg-transparent border-transparent py-5 mt-2'
        }`}
      >
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, '#')}
            className="font-serif text-3xl font-medium tracking-wide text-brand-dark"
          >
            Dream <span className="text-brand-gold italic">Massage</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-brand-dark/80 hover:text-brand-dark transition-colors font-sans text-xs tracking-[0.2em] uppercase relative group font-bold"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href={DIKIDI_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-3 rounded-xl font-sans text-xs font-bold tracking-widest uppercase text-white bg-brand-dark hover:bg-brand-gold transition-all duration-300 shadow-xl overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-brand-dark transition-colors">Запись онлайн</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-dark p-2 rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 z-40 bg-[#F2EFE9]/98 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.href} 
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-3xl font-serif text-brand-dark hover:text-brand-gold italic"
          >
            {item.label}
          </a>
        ))}
        <a 
          href={DIKIDI_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-10 py-4 rounded-full bg-brand-gold text-white font-bold tracking-widest shadow-xl uppercase text-sm"
        >
          Записаться
        </a>
      </div>
    </header>
  );
};

export default Header;
