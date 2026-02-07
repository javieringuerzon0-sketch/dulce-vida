
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Leaf } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: <Award className="text-brand-teal" size={32} />,
      title: "Calidad Premium",
      desc: "Ingredientes seleccionados de los mejores proveedores locales para un sabor inigualable."
    },
    {
      icon: <Leaf className="text-green-500" size={32} />,
      title: "100% Orgánico",
      desc: "Frutas frescas de temporada y procesos artesanales libres de conservantes artificiales."
    },
    {
      icon: <Heart className="text-brand-pink" size={32} />,
      title: "Hecho con Pasión",
      desc: "Cada receta es una creación única diseñada para despertar tus sentidos y alegrar tu día."
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-dark mb-4"
          >
            Nuestra Filosofía
          </motion.h2>
          <div className="w-24 h-1 bg-brand-teal mx-auto mb-6 rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            En Dulce Vida, no solo servimos helados; servimos momentos de felicidad pura creados bajo estándares de excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-[2rem] bg-brand-cream border border-transparent hover:border-brand-teal/20 transition-all hover:shadow-xl group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 rounded-[3rem] overflow-hidden shadow-2xl h-96">
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c39217d1-a21f-43bf-8aec-cac050cb9e3d_3840w.webp"
            alt="Nuestra Filosofía Dulce Vida"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
