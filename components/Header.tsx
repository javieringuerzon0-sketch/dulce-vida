
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

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Momentos', href: '#sabores' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'py-3 glass shadow-sm' : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
        >
          <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-xl relative overflow-hidden ring-4 ring-white shadow-lg">
            <span className="relative z-10">D</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-brand-dark">DULCE VIDA</span>
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
          className="md:hidden p-2 text-brand-dark bg-white/50 rounded-xl backdrop-blur-md border border-white/50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-brand-cream/98 backdrop-blur-xl z-[90] flex flex-col items-center justify-center space-y-10 md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-black text-brand-dark hover:text-brand-teal transition-colors tracking-tighter"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-8 pt-8"
            >
              <a href="https://www.facebook.com/people/Dulce-Vida/61578794474172/" target="_blank" rel="noopener noreferrer" className="text-[#1877F2]">
                <Facebook size={32} fill="#1877F2" />
              </a>
              <a href="https://www.facebook.com/people/Dulce-Vida/61578794474172/" target="_blank" rel="noopener noreferrer" className="text-[#E4405F]">
                <Instagram size={32} />
              </a>
            </motion.div>

            <motion.a
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="https://wa.me/5215523175578"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-teal text-white px-12 py-5 rounded-full text-xl font-black uppercase tracking-widest shadow-2xl"
            >
              Pide Ahora
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
