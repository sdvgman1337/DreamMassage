
import React, { useState } from 'react';
import { Award, GraduationCap, Sparkles, Quote, ZoomIn, User } from 'lucide-react';
import CertificatesModal from './CertificatesModal';

const About: React.FC = () => {
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false);

  const team = [
    {
      id: 'sergey',
      name: 'Сергей Киверь',
      role: 'Спортивный массажист — основатель студии',
      image: 'https://picsum.photos/id/1005/600/800', // Man
      details: [
        'Степени бакалавра и магистра в области физической культуры и спорта',
        'Квалификация «Техник — эстетист» в области массажа и SPA',
        'Сертификаты о повышении квалификации в области массажа и SPA-технологий'
      ],
      icon: <Award size={24} />
    },
    {
      id: 'bogdan',
      name: 'Лель Богдан',
      role: 'Спа — технолог',
      image: 'https://picsum.photos/id/338/600/800', // Abstract/Person vibe
      details: [
        'Сертифицированный специалист по классическому массажу',
        'Выполняет массажи в уникальной расслабляющей технике',
        'Специализируется на глубоких SPA-программах'
      ],
      icon: <Sparkles size={24} />
    },
    {
      id: 'elena',
      name: 'Елена Оленева',
      role: 'Массажист',
      image: 'https://picsum.photos/id/64/600/800', // Woman
      details: [
        'Массажист с медицинским образованием',
        'Выполняет все виды массажей и SPA-программы студии',
        'Дипломы и сертификаты о повышении квалификации'
      ],
      icon: <GraduationCap size={24} />
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 animate-on-scroll">
          <div>
            <span className="text-brand-sageDark font-sans text-xs tracking-[0.3em] uppercase font-extrabold pl-1 block mb-3">Команда</span>
            <h2 className="font-serif text-6xl md:text-7xl text-brand-dark leading-none">
              Наши мастера
            </h2>
          </div>
          <p className="font-sans text-lg text-brand-dark/60 max-w-lg leading-relaxed">
            Каждый специалист студии — это сочетание профессионального образования, опыта и искренней любви к своему делу.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {team.map((member, index) => (
            <div 
              key={member.id} 
              className="group rounded-[2.5rem] bg-white/40 border border-white hover:bg-white hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-500 overflow-hidden flex flex-col h-full glass-card animate-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Area */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors"></div>
                
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur text-brand-goldDark flex items-center justify-center shadow-lg">
                  {member.icon}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-3xl text-brand-dark mb-2 group-hover:text-brand-goldDark transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-brand-sageDark font-bold mb-6 min-h-[3em]">
                  {member.role}
                </p>
                
                <ul className="space-y-3 mt-auto">
                  {member.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-dark/70 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates & Philosophy Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Philosophy */}
            <div className="md:col-span-8 rounded-[2.5rem] glass-panel p-10 flex items-center bg-brand-dark text-white relative overflow-hidden group animate-on-scroll">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Quote size={100} />
                </div>
                <div className="relative z-10">
                   <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-white/90">
                     "Руки мастера — это инструмент, который настраивает ваше тело на частоту здоровья и спокойствия."
                   </p>
                </div>
            </div>

            {/* Clickable Certificates Block */}
            <div 
                className="md:col-span-4 rounded-[2.5rem] glass-card p-8 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-brand-gold hover:text-white transition-all duration-300 group relative border-brand-gold/30 animate-on-scroll"
                onClick={() => setIsCertificatesOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setIsCertificatesOpen(true)}
                style={{ transitionDelay: '200ms' }}
            >
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-goldDark mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <Award size={32} />
                </div>
                <h4 className="font-serif text-2xl font-bold mb-2">Лицензии и дипломы</h4>
                <p className="text-sm opacity-70 mb-4">Подтвержденная квалификация всей команды</p>
                
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold opacity-60 group-hover:opacity-100">
                    <ZoomIn size={14} />
                    <span>Смотреть</span>
                </div>
            </div>
        </div>
      </div>

      <CertificatesModal 
        isOpen={isCertificatesOpen} 
        onClose={() => setIsCertificatesOpen(false)} 
      />
    </section>
  );
};

export default About;
