import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const team = [
    {
      name: "Александр Морозов",
      role: "Основатель и CEO",
      exp: "14 лет в элитной недвижимости",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Елена Васильева",
      role: "Главный аналитик",
      exp: "10 лет опыта",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Дмитрий Орлов",
      role: "Руководитель отдела аренды",
      exp: "8 лет опыта",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="team" className="py-32 px-6 md:px-12 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-ink-dark mb-4"
          >
            Ведущие эксперты
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-16 h-[1px] bg-gold mt-8 origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {team.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-full aspect-[3/4] overflow-hidden mb-8 bg-cream-200">
                <img 
                  src={person.img} 
                  alt={person.name} 
                  className="w-full h-full object-cover filter grayscale contrast-125 sepia-[0.1] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0"
                />
              </div>
              <h3 className="text-2xl font-serif text-ink-dark mb-2">{person.name}</h3>
              <p className="text-[11px] uppercase tracking-[2px] text-gold mb-3">{person.role}</p>
              <p className="text-sm text-ink-light font-sans mb-6">{person.exp}</p>
              
              <button className="text-[11px] uppercase tracking-[2px] text-ink-dark border-b border-ink-dark/30 pb-1 hover:border-gold hover:text-gold transition-colors">
                Связаться
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
