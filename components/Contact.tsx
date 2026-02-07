
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola Dulce Vida! Me llamo ${formData.name}. %0A%0A${formData.message}%0A%0ACorreo: ${formData.email}`;
    window.open(`https://wa.me/5215523175578?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8 tracking-tighter">¿Hablamos de <span className="text-brand-teal">Sabor</span>?</h2>
            <p className="text-gray-600 text-lg mb-12">
              ¿Tienes un evento especial o simplemente quieres saludarnos? Estamos aquí para escucharte y endulzar tu día.
            </p>

            <div className="space-y-8">
              {[
                { icon: <MapPin className="text-brand-teal" />, label: "Ubicación", val: "Paseo Álvaro Obregón #720 Int 1, Esterito, La Paz" },
                { icon: <Phone className="text-brand-teal" />, label: "Teléfono", val: "+52 55 2317 5578" },
                { icon: <Mail className="text-brand-teal" />, label: "Correo", val: "hola@dulcevida.com" },
                { icon: <Clock className="text-brand-teal" />, label: "Horario", val: "Lunes a Domingo: 12 PM - 10 PM" }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                    <p className="text-lg font-semibold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-cream p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full -mr-16 -mt-16" />
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl border border-transparent focus:border-brand-teal focus:ring-0 transition-all outline-none"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl border border-transparent focus:border-brand-teal focus:ring-0 transition-all outline-none"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Mensaje</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl border border-transparent focus:border-brand-teal focus:ring-0 transition-all outline-none resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-5 rounded-2xl bg-brand-dark text-white font-bold text-lg hover:bg-brand-dark/90 transition-all shadow-xl hover:-translate-y-1">
                Enviar por WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>

  );
};
