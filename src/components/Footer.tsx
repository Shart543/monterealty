import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cream-100 pt-20 pb-10 px-6 md:px-12 text-ink-dark border-t border-ink/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          <div className="flex flex-col">
            <a href="#" className="flex flex-col mb-6">
              <h1 className="font-serif text-3xl tracking-wide text-ink-dark">
                MONTE
              </h1>
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold mt-1">
                Realty
              </span>
            </a>
            <p className="text-ink text-sm font-sans max-w-xs leading-relaxed">
              Эксклюзивные решения на рынке премиальной недвижимости. Искусство жить достойно.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-serif text-lg mb-6 text-ink-dark">Навигация</h4>
            <ul className="space-y-4 font-sans text-sm text-ink">
              <li><a href="#catalog" className="hover:text-gold transition-colors">Каталог объектов</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Услуги и сервис</a></li>
              <li><a href="#team" className="hover:text-gold transition-colors">Наша команда</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Оценка недвижимости</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-serif text-lg mb-6 text-ink-dark">Связь</h4>
            <ul className="space-y-4 font-sans text-sm text-ink">
              <li>+7 (495) 123-45-67</li>
              <li>info@monterealty.ru</li>
              <li>г. Москва, Пречистенка, 8, офис 401</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-ink/60">
          <p>© {new Date().getFullYear()} MONTE REALTY. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gold transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
