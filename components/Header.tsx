
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open - Simplified for performance
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Momentos', href: '#sabores' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 md:space-x-3"
        >
          <div className="w-9 h-9 md:w-10 md:h-10 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-lg md:xl relative overflow-hidden ring-2 md:ring-4 ring-white shadow-md">
            <span className="relative z-10">D</span>
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-brand-dark">DULCE VIDA</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-[0.2em] text-brand-dark/70 hover:text-brand-dark transition-all hover:-translate-y-0.5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <a href="https://www.facebook.com/people/Dulce-Vida/61578794474172/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-dark/40 hover:text-[#1877F2] hover:scale-110 transition-all">
            <Facebook size={20} fill="currentColor" />
          </a>
          <a href="https://www.facebook.com/people/Dulce-Vida/61578794474172/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-dark/40 hover:text-[#E4405F] hover:scale-110 transition-all">
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/5215523175578"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-dark text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-teal transition-all shadow-xl hover:-translate-y-1"
          >
            Pide en línea
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-3 text-brand-dark bg-white/50 rounded-xl backdrop-blur-md border border-white/50 hover:bg-white/70 active:bg-white/90 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleCloseMenu}
              className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[110] md:hidden"
              aria-label="Cerrar menú"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
              className="fixed top-0 right-0 w-[280px] h-screen bg-brand-cream z-[120] p-8 flex flex-col md:hidden shadow-2xl overflow-y-auto transform-gpu"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold">D</div>
                  <span className="font-black text-brand-dark tracking-tighter">DULCE VIDA</span>
                </div>
                <button
                  onClick={handleCloseMenu}
                  className="p-2 bg-brand-dark/5 rounded-full active:bg-brand-dark/20 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                  aria-label="Cerrar menú"
                >
                  <X size={24} className="text-brand-dark" />
                </button>
              </div>

              <nav className="flex flex-col space-y-5 flex-1 mt-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={handleCloseMenu}
                    className="text-2xl font-black text-brand-dark active:text-brand-teal transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <div className="space-y-6 pt-6 border-t border-brand-dark/10 mt-auto">
                <div className="flex space-x-6 justify-center">
                  <a href="https://www.facebook.com/people/Dulce-Vida/61578794474172/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook size={24} className="text-[#1877F2]" fill="currentColor" />
                  </a>
                  <a href="https://www.facebook.com/people/Dulce-Vida/61578794474172/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={24} className="text-[#E4405F]" />
                  </a>
                </div>

                <a
                  href="https://wa.me/5215523175578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-brand-teal text-white text-center py-4 rounded-xl text-base font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
                >
                  Pide Ahora
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
