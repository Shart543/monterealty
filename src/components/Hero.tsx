import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/60 rounded-full blur-[1px]"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [null, 0, Math.random() * 0.5 + 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-cream-100">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: 'url("/hero-bg.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50/20 via-transparent to-cream-50/80"></div>
      </div>

      <Particles />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-[11px] uppercase tracking-[0.3em] text-ink mb-6"
        >
          Элитная недвижимость в Москве
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[100px] leading-[1.05] text-white mix-blend-overlay">
            MONTE REALTY
          </h1>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[100px] leading-[1.05] text-cream-50 absolute top-0 left-0 w-full drop-shadow-xl pointer-events-none" style={{ textShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
            MONTE REALTY
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-ink max-w-xl font-sans leading-[2] text-balance"
        >
          Подбор, оценка и сопровождение сделок с премиальной недвижимостью. <br/>
          Персональный подход и абсолютная конфиденциальность.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1 }}
           className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <a href="#catalog" className="px-8 py-4 bg-cream-50/90 backdrop-blur-sm text-ink-dark border border-ink/10 text-[11px] uppercase tracking-[2px] hover:bg-cream-100 transition-all duration-300">
            Каталог объектов
          </a>
          <a href="#contact" className="px-8 py-4 border border-ink-dark text-ink-dark text-[11px] uppercase tracking-[2px] hover:bg-ink-dark hover:text-cream-50 transition-all duration-300">
            Оценить недвижимость
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 flex flex-col items-center z-10"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-ink mb-3">Скролл</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-7 rounded-full border border-ink/30 flex items-center justify-center text-ink"
        >
          <ArrowDown size={12} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
