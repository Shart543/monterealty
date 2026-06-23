import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', type: 'Квартира' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Эксперт свяжется с вами в течение 24 часов.");
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-cream-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cream-100/50 hidden lg:block -z-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-ink-dark mb-6 leading-tight">
            Узнайте стоимость<br/> вашей недвижимости
          </h2>
          <p className="text-ink-light font-sans text-sm md:text-base max-w-md mb-12 leading-relaxed">
            Бесплатная экспресс-оценка от наших аналитиков. 
            Результат в течение 24 часов. Строго конфиденциально.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md flex flex-col gap-8">
            <div className="relative group">
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-ink-light/40 py-3 text-ink-dark placeholder-transparent focus:outline-none focus:border-gold peer transition-colors"
                placeholder="Ваше имя"
              />
              <label className="absolute left-0 -top-3.5 text-ink-light text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold font-sans">
                Ваше имя
              </label>
            </div>

            <div className="relative group">
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-transparent border-b border-ink-light/40 py-3 text-ink-dark placeholder-transparent focus:outline-none focus:border-gold peer transition-colors"
                placeholder="Телефон"
              />
              <label className="absolute left-0 -top-3.5 text-ink-light text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold font-sans">
                Телефон
              </label>
            </div>

            <div className="relative group">
              <select 
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value})}
                className="w-full bg-transparent border-b border-ink-light/40 py-3 text-ink-dark focus:outline-none focus:border-gold appearance-none font-sans transition-colors cursor-pointer"
              >
                <option value="Квартира">Квартира</option>
                <option value="Дом">Дом / Вилла</option>
                <option value="Коммерция">Коммерческая недвижимость</option>
                <option value="Земельный участок">Земельный участок</option>
              </select>
            </div>

            <button 
              type="submit"
              className="mt-6 w-full bg-cream-50 border border-ink-dark text-ink-dark py-4 text-[11px] uppercase tracking-[2px] hover:bg-ink-dark hover:text-cream-50 transition-colors duration-300"
            >
              Получить оценку
            </button>

            <p className="text-center text-[9px] text-ink-light/70 uppercase tracking-[1px] mt-4 max-w-xs mx-auto">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </motion.div>

        {/* Right Side: Contact Info & Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col"
        >
          <div className="mb-12">
            <h3 className="text-2xl font-serif text-ink-dark mb-8">Контакты</h3>
            <ul className="space-y-6 font-sans text-sm text-ink">
              <li className="flex items-center gap-4 group">
                <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform"></span>
                Москва, Пречистенка, 8, офис 401
              </li>
              <li className="flex items-center gap-4 group">
                <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform"></span>
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-4 group">
                <span className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform"></span>
                info@monterealty.ru
              </li>
              <li className="flex items-center gap-4 text-ink-light">
                <span className="w-1.5 h-1.5 rounded-full bg-ink-light/30"></span>
                Пн-Пт: 10:00 — 20:00 | Сб: по записи
              </li>
            </ul>
          </div>

          <div className="w-full h-[300px] bg-cream-200 border border-cream-300 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center opacity-30 filter grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800")' }}></div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-gold mb-3 shadow-[0_0_20px_rgba(212,175,55,1)]"></span>
              <span className="text-[10px] uppercase tracking-[2px] text-ink-dark font-medium bg-cream-50/90 px-4 py-2 backdrop-blur-md">ОФИС MONTE REALTY</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default ContactForm;
