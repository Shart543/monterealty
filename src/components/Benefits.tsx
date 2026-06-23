import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Key, TrendingUp, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <ShieldCheck size={28} strokeWidth={1} />,
      title: "Юридическая чистота",
      desc: "Полная проверка документов, истории объекта и рисков сделки."
    },
    {
      icon: <Key size={28} strokeWidth={1} />,
      title: "Эксклюзивная база",
      desc: "Доступ к закрытым объектам, которые не публикуются на открытых площадках."
    },
    {
      icon: <TrendingUp size={28} strokeWidth={1} />,
      title: "Инвестиционный подход",
      desc: "Аналитика рынка, оценка потенциала роста стоимости и доходности."
    },
    {
      icon: <Clock size={28} strokeWidth={1} />,
      title: "Сопровождение 24/7",
      desc: "Персональный менеджер на всех этапах от просмотра до регистрации права."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-ink-dark text-center"
          >
            Почему выбирают нас
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-16 h-[1px] bg-gold mt-8 origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-cream-100 p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500 ease-out"
            >
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold/10 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif text-ink-dark mb-4">{benefit.title}</h3>
              <p className="text-sm text-ink-light font-sans leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
