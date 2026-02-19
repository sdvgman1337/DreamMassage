
import React, { useState, useEffect } from 'react';
import { Percent, ArrowRight } from 'lucide-react';
import { DIKIDI_LINK } from '../constants';

const PromoTimer: React.FC = () => {
  // Set the deadline to 12 hours from now
  const [deadline] = useState(() => {
    const date = new Date();
    date.setHours(date.getHours() + 12); 
    return date.getTime();
  });

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = deadline - new Date().getTime();
    
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  const timeBlocks = [
    { label: 'Часов', value: timeLeft.hours },
    { label: 'Минут', value: timeLeft.minutes },
    { label: 'Секунд', value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 animate-on-scroll">
      <div className="container-wide">
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl border-brand-gold/20">
          
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-transparent opacity-50"></div>
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Left Side: Offer Text */}
            <div className="text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold text-white text-[10px] font-bold tracking-widest uppercase mb-4 shadow-md">
                <Percent size={12} />
                Ограниченное предложение
              </div>
              <h3 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4 leading-tight">
                Успейте забронировать <br/> со скидкой <span className="text-brand-goldDark italic">-20%</span>
              </h3>
              <p className="text-brand-dark/70 font-medium text-lg">
                Специальная цена действует на все виды массажа и SPA-программы при записи онлайн.
              </p>
            </div>

            {/* Right Side: Timer & Action */}
            <div className="flex flex-col items-center gap-8">
              {/* Timer Row */}
              <div className="flex gap-4">
                {timeBlocks.map((block, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-20 h-24 md:w-24 md:h-28 rounded-2xl bg-white border border-brand-dark/5 shadow-inner flex flex-col items-center justify-center relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold/50"></div>
                      <span className="font-serif text-4xl md:text-5xl text-brand-dark font-bold tabular-nums group-hover:scale-110 transition-transform duration-300">
                        {String(block.value).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold mt-3">
                      {block.label}
                    </span>
                  </div>
                ))}
              </div>
              
              <a 
                href={DIKIDI_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-10 py-4 rounded-2xl bg-brand-dark text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-gold transition-all duration-300 shadow-xl hover:shadow-brand-gold/40 transform hover:-translate-y-1"
              >
                Записаться сейчас <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoTimer;
