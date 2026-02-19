
import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram } from 'lucide-react';
import { DIKIDI_LINK, WHATSAPP_LINK, WHATSAPP_PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="pt-20 pb-10 px-4">
      <div className="container-wide glass-panel rounded-[3rem] p-8 md:p-12 relative overflow-hidden bg-white/60 border-white/80 shadow-2xl">
        {/* Glow effect inside footer */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/20 rounded-full filter blur-[100px] pointer-events-none mix-blend-multiply"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10 mb-12">
          
          {/* Brand Big */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-10">
            <div>
              <h2 className="font-serif text-6xl md:text-8xl text-brand-dark leading-none mb-6">
                Dream <br/><span className="italic text-brand-goldDark">Massage</span>
              </h2>
              <p className="text-brand-dark/60 font-medium max-w-sm text-lg">
                Создаем реальность, где ваше тело обретает гармонию. 
              </p>
            </div>
            
            <div>
               <a 
                href={DIKIDI_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-brand-dark text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300 shadow-xl"
              >
                Записаться
              </a>
            </div>
          </div>

          {/* Links & Contacts */}
          <div className="lg:col-span-4 space-y-10">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-brand-sageDark font-extrabold">Контакты</h4>
            <div className="space-y-6">
              <a href={`tel:${WHATSAPP_PHONE}`} className="flex items-center gap-6 text-brand-dark hover:text-brand-gold transition-colors group">
                <span className="w-14 h-14 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:border-brand-gold/50 transition-colors bg-white shadow-sm">
                  <Phone size={24} />
                </span>
                <span className="text-2xl font-light">{WHATSAPP_PHONE}</span>
              </a>
              
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-brand-dark hover:text-green-700 transition-colors group">
                <span className="w-14 h-14 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:border-green-600/50 transition-colors bg-white shadow-sm">
                  <MessageCircle size={24} />
                </span>
                <span className="text-2xl font-light">Написать в WhatsApp</span>
              </a>

              <div className="flex items-center gap-6 text-brand-dark/70">
                <span className="w-14 h-14 rounded-full border border-brand-dark/10 flex items-center justify-center bg-white shadow-sm flex-shrink-0">
                  <MapPin size={24} />
                </span>
                <span className="text-base font-medium leading-relaxed">г. Кронштадт, пр-кт Ленина, д16,<br/> помещение 332</span>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-brand-sageDark font-extrabold">Часы работы</h4>
            <div className="p-8 rounded-[2rem] bg-white/80 border border-white space-y-3 shadow-lg">
              <p className="text-brand-dark text-xl font-bold">Ежедневно</p>
              <p className="font-serif text-4xl text-brand-goldDark">10:00 — 22:00</p>
              <p className="text-xs text-brand-dark/50 mt-2 font-bold uppercase tracking-wide">По предварительной записи</p>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all shadow-md border border-brand-dark/5">
                 <Instagram size={20} />
              </a>
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-dark hover:bg-[#0077FF] hover:text-white transition-all shadow-md border border-brand-dark/5">
                 {/* Custom SVG for VK since it's not in standard Lucide */}
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0729 13.5644C13.2927 13.5644 12.3521 11.233 12.3521 11.233C12.3521 11.233 12.3521 7.73303 13.9146 7.73303C15.3416 7.73303 16.0083 6.75387 16.0083 6.75387C16.0083 6.75387 17.8938 10.9768 18.2375 11.531C18.6667 12.2226 18.5917 12.3518 18.5917 12.3518L18.6292 12.3394C18.6292 12.3394 20.3708 12.083 21.0562 10.6394C21.7375 9.2062 21.3625 7.63937 21.3625 7.63937L23.9521 7.63103C23.9521 7.63103 25.4354 11.233 23.3688 14.281C21.6667 16.7915 19.3479 16.3935 19.3479 16.3935C19.3479 16.3935 19.3146 18.7249 18.0646 19.0165C16.2771 19.4332 15.6812 17.4124 15.6812 17.4124C15.6812 17.4124 12.7833 17.2665 11.5229 19.381C10.6271 20.8852 11.7229 22.1249 11.7229 22.1249H7.6625C7.6625 22.1249 8.01875 18.8124 4.88125 15.7979C1.86875 12.902 1.34375 12.8729 1.34375 12.8729L1.31458 9.07077C1.31458 9.07077 5.25208 9.91452 9.03542 14.1645C9.03542 14.1645 10.3958 15.827 10.5188 14.2229C10.6438 12.6187 9.87292 11.8895 9.87292 11.8895C9.87292 11.8895 6.95625 11.802 5.16667 9.59577C4.4125 8.6666 4.70625 7.69345 4.70625 7.69345H8.79167C8.79167 7.69345 9.00625 8.95387 10.2792 9.12887C11.5521 9.30387 11.4188 7.3247 11.4188 7.3247C11.4188 7.3247 11.2312 3.65178 14.4646 3.93095C15.5417 4.0247 15.7021 5.39553 15.7021 5.39553C15.7021 5.39553 15.6021 8.8122 17.0604 9.13303C18.5188 9.45387 19.2771 7.63103 19.2771 7.63103H22.1646C22.1646 7.63103 22.2562 10.7497 19.5875 13.081C17.3917 14.9999 15.0729 13.5644 15.0729 13.5644Z" />
                 </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-inner border border-brand-dark/5 relative z-10 bg-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.603787258045!2d29.71539637719662!3d59.99967266209503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696342cb233b293%3A0x6734d7072465355a!2z0L_RgC3Rgi4g0JvQtdC90LjQvdCwLCAxNiwg0JrRgNC-0L3RiNGC0LDQtNGCLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTk3NzYw!5e0!3m2!1sru!2sru!4v1710000000000!5m2!1sru!2sru" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Studio Location"
            className="filter grayscale-[20%] contrast-[0.9]"
          ></iframe>
        </div>

        <div className="border-t border-brand-dark/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-dark/40 uppercase tracking-widest font-bold">
          <p>&copy; 2026 Dream Massage.</p>
          <p>Designed by Egor Sizov</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
