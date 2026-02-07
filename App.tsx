
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for premium feel
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans text-brand-dark selection:bg-brand-pink selection:text-white overflow-x-hidden">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-cream"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-brand-teal text-6xl mb-4"
            >
              🍦
            </motion.div>
            <h1 className="text-2xl font-bold tracking-tighter text-brand-teal">DULCE VIDA</h1>
          </motion.div>
        )}
      </AnimatePresence>

      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
