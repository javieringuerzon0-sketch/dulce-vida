
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const moments = [
  { id: 1, img: '/assets/momentos/momento-1.jpg' },
  { id: 2, img: '/assets/momentos/momento-2.jpg' },
  { id: 3, img: '/assets/momentos/momento-3.jpg' },
  { id: 4, img: '/assets/momentos/momento-4.jpg' },
  { id: 5, img: '/assets/momentos/momento-5.jpg' },
  { id: 6, img: '/assets/momentos/momento-6.jpg' },
];

export const Products: React.FC = () => {
  return (
    <section id="sabores" className="py-24 bg-brand-cream/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter"
          >
            <span className="text-brand-dark">Momentos</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-pink to-brand-lavender animate-gradient-x">
              Dulce Vida
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            className="h-2 bg-gradient-to-r from-brand-teal to-brand-pink mx-auto mb-6 rounded-full"
          />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Capturando la esencia de nuestra pasión artesanal en cada detalle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {moments.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="gpu-accelerated group relative p-1 rounded-2xl bg-gradient-to-br from-brand-teal/10 via-white to-brand-pink/10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50"
              >
                <div className="bg-white p-2 rounded-[calc(1rem-2px)]">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                    <img
                      src={m.img}
                      alt={`Dulce Vida Momento ${m.id}`}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
