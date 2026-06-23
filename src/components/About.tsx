import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-cream-100 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-serif text-ink-dark mb-8"
        >
          О нас
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-ink text-lg md:text-xl font-serif leading-relaxed text-balance"
        >
          Monte Realty — это бутик-агентство элитной недвижимости в Москве. 
          Мы не просто продаем квадратные метры, мы подбираем пространство, 
          которое станет идеальным отражением вашего статуса и образа жизни. 
          Наш приоритет — безупречный сервис и строгая конфиденциальность.
        </motion.p>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-16 h-[1px] bg-gold mx-auto mt-12"
        />
      </div>
    </section>
  );
};

export default About;
