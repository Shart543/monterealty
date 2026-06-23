import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Maximize, Building2 } from 'lucide-react';

const Catalog = () => {
  const items = [
    {
      id: 1,
      price: "42 500 000 ₽",
      location: "Москва, Хамовники",
      specs: { beds: 4, area: 185, floor: "7/12" },
      type: "ПРОДАЖА",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      price: "28 000 000 ₽",
      location: "Покровский бульвар",
      specs: { beds: 3, area: 142, floor: "4/8" },
      type: "ПРОДАЖА",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      price: "15 000 000 ₽",
      location: "Барвиха",
      specs: { beds: 5, area: 320, floor: "Дом" },
      type: "ПРОДАЖА",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      price: "65 000 000 ₽",
      location: "Остоженка",
      specs: { beds: 4, area: 240, floor: "Пентхаус" },
      type: "ПРОДАЖА",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      price: "3 500 000 ₽/год",
      location: "Патриаршие пруды",
      specs: { beds: 2, area: 110, floor: "3/6" },
      type: "АРЕНДА",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      price: "21 000 000 ₽",
      location: "Раменки",
      specs: { beds: 3, area: 160, floor: "12/24" },
      type: "ПРОДАЖА",
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="catalog" className="py-32 px-6 md:px-12 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-ink-dark mb-4"
          >
            Актуальные объекты
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-ink-light text-sm md:text-base font-sans max-w-2xl"
          >
            Подборка премиальной недвижимости для жизни и инвестиций
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-16 h-[1px] bg-gold mt-8 origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3] w-full bg-cream-200">
                <img 
                  src={item.img} 
                  alt={item.location} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-cream-50/90 backdrop-blur-sm px-3 py-1 text-[10px] font-sans uppercase tracking-[2px] text-ink-dark">
                  {item.type}
                </div>
              </div>
              
              <div className="pt-6 pb-2 flex flex-col flex-1">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-2xl font-display text-ink-dark tracking-wide">{item.price}</h3>
                </div>
                <p className="text-gold text-xs font-sans uppercase tracking-[1px] mb-6">{item.location}</p>
                
                <div className="flex gap-6 mb-8 border-t border-ink-light/20 pt-6">
                  <div className="flex items-center gap-2 text-ink-light">
                    <Bed size={14} strokeWidth={1} />
                    <span className="text-xs">{item.specs.beds} спальни</span>
                  </div>
                  <div className="flex items-center gap-2 text-ink-light">
                    <Maximize size={14} strokeWidth={1} />
                    <span className="text-xs">{item.specs.area} м²</span>
                  </div>
                  <div className="flex items-center gap-2 text-ink-light">
                    <Building2 size={14} strokeWidth={1} />
                    <span className="text-xs">{item.specs.floor}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <span className="text-[11px] uppercase tracking-[2px] text-ink-dark group-hover:text-gold transition-colors flex items-center gap-2">
                    Подробнее 
                    <span className="w-8 h-[1px] bg-current transform origin-left transition-transform duration-300 group-hover:scale-x-150"></span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
