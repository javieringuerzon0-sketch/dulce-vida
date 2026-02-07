
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { LazyImage } from './LazyImage';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Lucía Fernández",
      role: "Cliente Fiel",
      comment: "El gelato de pistacho es de otro mundo. Se nota la calidad en cada bocado. ¡El mejor lugar de la ciudad!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Andrés Reyes",
      role: "Foodie",
      comment: "Dulce Vida tiene un ambiente increíble y los sabores son súper auténticos. Las paletas de mango son mis favoritas.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Mariana Soto",
      role: "Visitante",
      comment: "Excelente atención y un menú muy variado. Los Tostilocos estaban espectaculares. ¡Altamente recomendado!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none hidden md:block">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <p className="text-gray-500 text-lg">Nuestra mayor recompensa es tu sonrisa.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-brand-teal/5 shadow-lg flex flex-col items-center text-center group transition-all transform-gpu"
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-teal/20 group-hover:border-brand-teal transition-colors">
                  <LazyImage
                    src={r.avatar}
                    alt={r.name}
                    width={150}
                    height={150}
                    rootMargin="400px 0px"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-brand-teal text-white w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <Star size={16} fill="white" />
                </div>
              </div>

              <p className="text-lg italic text-gray-600 mb-8 leading-relaxed">
                "{r.comment}"
              </p>

              <div className="mt-auto">
                <p className="font-bold text-brand-dark text-xl mb-1">{r.name}</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>
                <p className="mt-3 text-brand-teal text-xs font-black uppercase tracking-[0.2em]">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
