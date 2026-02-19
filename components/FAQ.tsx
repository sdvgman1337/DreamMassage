
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Helper to detect links in text
  const renderAnswer = (text: string) => {
    return text.split('\n').map((str, index, array) => (
      <React.Fragment key={index}>
        {str.split(/(https?:\/\/[^\s]+)/g).map((part, i) => 
          part.match(/^https?:\/\//) ? (
            <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-brand-goldDark underline hover:text-brand-dark transition-colors">
              {part}
            </a>
          ) : (
            part
          )
        )}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section id="faq" className="py-32 bg-white/30 backdrop-blur-sm">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 animate-on-scroll">
           <div className="text-left">
            <span className="text-brand-goldDark font-sans text-xs tracking-[0.3em] uppercase font-extrabold pl-1">Информация</span>
            <h2 className="font-serif text-5xl md:text-6xl text-brand-dark mt-4">Частые вопросы</h2>
           </div>
           <p className="text-brand-dark/60 max-w-md text-right md:text-left text-lg font-medium">
             Все, что вы хотели узнать о наших процедурах и этикете.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === item.id;
            
            return (
              <div 
                key={item.id}
                className="animate-on-scroll"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div 
                  className={`
                    rounded-[2rem] overflow-hidden transition-all duration-500 border h-fit
                    ${isOpen 
                      ? 'bg-white shadow-xl border-brand-gold/30' 
                      : 'bg-white/40 border-white hover:bg-white/60 hover:shadow-lg'
                    }
                  `}
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full px-8 py-6 flex justify-between items-start text-left group gap-4"
                  >
                    <span className={`font-serif text-xl transition-colors duration-300 ${isOpen ? 'text-brand-dark' : 'text-brand-dark/80'}`}>
                      {item.question}
                    </span>
                    
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 mt-1
                      ${isOpen ? 'bg-brand-gold text-white rotate-180' : 'bg-brand-dark/5 text-brand-dark group-hover:bg-brand-gold/20'}
                    `}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <div 
                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-8 pb-8 pt-2">
                        <p className="text-brand-dark/70 font-sans leading-relaxed text-base">
                          {renderAnswer(item.answer)}
                        </p>
                      </div>
                    </div>
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

export default FAQ;
