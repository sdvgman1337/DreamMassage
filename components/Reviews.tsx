
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-32">
      <div className="container-wide">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 animate-on-scroll">
           <div>
            <span className="text-brand-goldDark font-sans text-xs tracking-[0.3em] uppercase font-extrabold pl-1">Отзывы клиентов</span>
            <h2 className="font-serif text-5xl md:text-6xl text-brand-dark mt-4">Доверие</h2>
           </div>
           <p className="text-brand-dark/60 max-w-md text-right md:text-left text-lg font-medium">
             Честные истории людей, которые доверили нам свое тело.
           </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review, index) => (
            <div 
              key={review.id}
              className="glass-card p-10 rounded-[2.5rem] relative flex flex-col justify-between group hover:bg-white animate-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-8 right-10 opacity-10 text-brand-gold group-hover:scale-110 transition-transform duration-500">
                <Quote size={80} />
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-brand-gold">
                   {[...Array(review.rating)].map((_, i) => (
                     <Star key={i} size={18} fill="currentColor" />
                   ))}
                </div>
                
                <p className="font-sans text-brand-dark/80 leading-relaxed font-medium italic mb-8">
                  "{review.text}"
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand-sage/20 flex items-center justify-center text-brand-sageDark font-serif font-bold text-xl">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-dark">{review.author}</h4>
                  <span className="text-xs uppercase tracking-widest text-brand-dark/40 font-bold">Гость студии</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
