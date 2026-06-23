import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Каталог', href: '#catalog' },
    { name: 'Услуги', href: '#services' },
    { name: 'О нас', href: '#about' },
    { name: 'Команда', href: '#team' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-cream-100/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Top Left Text */}
          <div className="w-32 flex items-center">
            <span className="text-[11px] uppercase tracking-[2px] text-ink hidden md:inline">Premium</span>
          </div>

          {/* Logo */}
          <a href="#" className="flex flex-col items-center justify-center flex-1">
            <h1 className={`font-serif text-3xl md:text-4xl tracking-wide text-ink-dark`}>
              MONTE
            </h1>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold mt-1">
              Realty
            </span>
          </a>

          {/* Right Action / Hamburger */}
          <div className="w-32 flex justify-end items-center">
            <div className="hidden md:block">
              <a href="#contact" className="text-[11px] uppercase tracking-[1.5px] text-ink hover:text-gold transition-colors">
                Связаться
              </a>
            </div>
            <button 
              className="md:hidden text-ink-dark"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center mt-4 space-x-12">
           {navLinks.map((link) => (
             <a 
               key={link.name} 
               href={link.href}
               className="text-[12px] uppercase tracking-[2px] text-ink hover:text-ink-dark transition-colors relative group"
             >
               {link.name}
               <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-gold group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
             </a>
           ))}
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-cream-50 flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-16">
               <div className="flex flex-col">
                  <span className="font-serif text-2xl text-ink-dark">MONTE</span>
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-gold">Realty</span>
               </div>
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-ink-dark">
                 <X size={28} strokeWidth={1} />
               </button>
            </div>
            <div className="flex flex-col space-y-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-widest uppercase text-ink-dark"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 border border-gold text-ink-dark px-8 py-3 text-[12px] uppercase tracking-[2px]"
              >
                Оценить недвижимость
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
