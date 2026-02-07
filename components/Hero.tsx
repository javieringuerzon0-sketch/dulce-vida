
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-brand-cream pt-32 pb-12 md:pt-20">
      {/* Decorative Elements - Reduced opacity for performance */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-12 w-64 h-64 bg-brand-pink opacity-10 blur-[80px] rounded-full pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-12 w-96 h-96 bg-brand-teal opacity-5 blur-[100px] rounded-full pointer-events-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left"
        >
          <span className="inline-block text-brand-teal font-bold tracking-[0.3em] uppercase mb-4 text-xs md:sm">
            Artesanía en cada cucharada
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[1.1] text-brand-dark mb-6 tracking-tighter">
            El Arte de la <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-pink">
              Dulzura Real.
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Descubre una sinfonía de sabores naturales, desde nieves tradicionales hasta gelatos sofisticados. Creados con pasión para quienes buscan lo extraordinario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5215523175578"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark text-white px-10 py-5 rounded-full text-center text-lg font-bold hover:bg-brand-teal transition-all shadow-lg active:scale-95 transform-gpu"
            >
              Pide por WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mt-8 md:mt-0"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transform md:rotate-3 md:hover:rotate-0 transition-transform duration-500 will-change-transform">
            <img
              src="/assets/hero.jpg"
              alt="Dulce Vida Premium"
              className="w-full h-[400px] md:h-[600px] object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-4 md:-left-6 z-20 bg-white/95 md:backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-xl flex items-center space-x-4 border border-white/50"
            >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl md:text-2xl">✨</div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Calidad</p>
              <p className="text-lg md:text-xl font-bold">100% Natural</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
