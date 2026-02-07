
import React from 'react';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-cream py-20 border-t border-brand-teal/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-sm">D</div>
              <span className="text-xl font-extrabold tracking-tighter text-brand-dark">DULCE VIDA</span>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Dedicados a crear experiencias dulces inolvidables con ingredientes 100% naturales y procesos artesanales.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/people/Dulce-Vida/61578794474172/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#1877F2] hover:scale-110 transition-transform">
                <Facebook size={24} fill="#1877F2" />
              </a>
              <a href="https://www.facebook.com/people/Dulce-Vida/61578794474172/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#E4405F] hover:scale-110 transition-transform">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explorar</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#inicio" className="hover:text-brand-teal transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-brand-teal transition-colors">Sobre Nosotros</a></li>
              <li><a href="#sabores" className="hover:text-brand-teal transition-colors">Sabores</a></li>
              <li><a href="#contacto" className="hover:text-brand-teal transition-colors">Contacto</a></li>
            </ul>
          </div>


          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-6">Suscríbete para recibir noticias y ofertas dulces.</p>
            <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-brand-teal/10">
              <input type="email" placeholder="Tu email" className="bg-transparent border-none focus:ring-0 px-4 w-full text-sm outline-none" />
              <button className="bg-brand-teal text-white px-4 py-2 rounded-xl text-sm font-bold">Unirse</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-teal/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2024 Dulce Vida. Todos los derechos reservados.</p>
          <div className="flex items-center">
            Hecho con <Heart size={14} className="mx-1 text-brand-pink fill-brand-pink" /> por <span className="text-brand-dark font-bold ml-1">Full Stack Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
