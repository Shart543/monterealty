import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, FileCheck, KeyRound } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <MessageSquare size={24} strokeWidth={1} />,
      title: "Заявка",
      desc: "Оставьте заявку на оценку или подбор. Мы свяжемся за 15 минут."
    },
    {
      icon: <Search size={24} strokeWidth={1} />,
      title: "Подбор / Анализ",
      desc: "Формируем шорт-лист объектов или проводим экспертизу вашей недвижимости."
    },
    {
      icon: <FileCheck size={24} strokeWidth={1} />,
      title: "Сопровождение",
      desc: "Юридическая проверка, переговоры, подготовка документов."
    },
    {
      icon: <KeyRound size={24} strokeWidth={1} />,
      title: "Сделка",
      desc: "Регистрация права, передача ключей, пост-сделочная поддержка."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-ink-dark mb-4"
          >
            Этапы содействия
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-16 h-[1px] bg-gold mt-8 origin-left"
          />
        </div>

        <div className="relative">
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] border-t border-dashed border-gold/40" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className="w-24 h-24 rounded-full bg-cream-50 border-2 border-gold/30 flex items-center justify-center text-ink-dark mb-8 group-hover:scale-110 group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 relative z-10">
                  {step.icon}
                  {/* Small step number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center text-[10px] font-sans font-bold shadow-sm">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-serif text-ink-dark mb-3">{step.title}</h3>
                <p className="text-sm text-ink-light font-sans max-w-[240px] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
