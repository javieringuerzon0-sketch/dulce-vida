
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-cream pt-20">
      {/* Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-12 w-64 h-64 bg-brand-pink opacity-20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-12 w-96 h-96 bg-brand-teal opacity-10 blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-brand-teal font-bold tracking-[0.3em] uppercase mb-4 text-sm">
            Artesanía en cada cucharada
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-brand-dark mb-6 tracking-tighter">
            El Arte de la <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-pink">
              Dulzura Real.
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Descubre una sinfonía de sabores naturales, desde nieves tradicionales hasta gelatos sofisticados. Creados con pasión para quienes buscan lo extraordinario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5215523175578"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark text-white px-10 py-5 rounded-full text-center text-lg font-bold hover:bg-brand-teal transition-all shadow-lg hover:-translate-y-1"
            >
              Pide por WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="/assets/hero.jpg"
              alt="Dulce Vida Premium"
              className="w-full h-[600px] object-cover"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4"
          >
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">✨</div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Calidad</p>
              <p className="text-xl font-bold">100% Natural</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
