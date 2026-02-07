
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export const AIChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: '¡Hola! Soy Gelat-IA, tu asistente de Dulce Vida. ¿Qué tipo de sabor se te antoja hoy? (Dulce, cítrico, cremoso...)' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
                throw new Error('API Key not found or placeholder');
            }

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Eres Gelat-IA, un experto sommelier de helados premium de "Dulce Vida". 
              Tu objetivo es recomendar sabores basados en el gusto del usuario, destacando nuestra herencia mexicana y calidad artesanal.
              
              MENÚ DE SABORES:
              SABORES MEXICANOS:
              - Mazapán de la Rosa (Cremoso y nostálgico)
              - Gansito Especial (Con trozos de pastelito y mermelada)
              - Cajeta de Celaya con Nuez de Castilla
              - Mango con Chamoy y Chilito Tajín (Sorbete/Paleta)
              - Mamey Real de Yucatán
              - Zapote Negro con Naranja (Tradicional)
              - Arroz con Leche y Canela de Ceilán
              - Rompope Artesanal con Pasas al Licor
              
              SABORES INTERNACIONALES:
              - Pistacho Siciliano Tostado (Gelato)
              - Vainilla Bourbon de Papantla
              - Chocolate Belga 70% Cacao
              - Frutos del Bosque Silvestres (Sorbete)
              - Coco Tostado del Pacífico
              
              INSTRUCCIONES:
              1. Responde de forma amable, premium, sofisticada pero cercana.
              2. Sé breve (máximo 2 párrafos). 
              3. Usa emojis de helados y elementos mexicanos 🍦🇲🇽.
              4. Si el usuario pide algo que no tenemos, sugiere lo más cercano.
              
              Usuario: ${userMsg}`
                        }]
                    }]
                })
            });

            const data = await response.json();
            const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "¡Lo siento! Mi mente se congeló un poco. ¿Podrías repetir eso? 🍦";

            setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Hubo un problema al conectar con mis sabores mágicos. Inténtalo de nuevo. 🍦" }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                aria-label="Abrir asistente IA"
                className="fixed bottom-6 right-6 z-[60] w-16 h-16 bg-brand-teal text-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white overflow-hidden group"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <MessageCircle size={30} className="relative z-10" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-24 right-6 z-[60] w-[90vw] md:w-[400px] h-[600px] glass rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-white/50"
                    >
                        {/* Header */}
                        <div className="bg-brand-teal p-6 text-white flex justify-between items-center bg-gradient-to-r from-brand-teal to-brand-teal/80">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold tracking-tight">Gelat-IA</h3>
                                    <p className="text-[10px] opacity-80 uppercase tracking-widest">Asistente Premium</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} aria-label="Cerrar asistente" className="hover:rotate-90 transition-transform">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                            {messages.map((m, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={i}
                                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-3xl text-sm ${m.role === 'user'
                                        ? 'bg-brand-dark text-white rounded-tr-none'
                                        : 'bg-white text-brand-dark rounded-tl-none shadow-sm'
                                        }`}>
                                        {m.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-4 rounded-3xl rounded-tl-none shadow-sm flex items-center space-x-2">
                                        <Loader2 className="animate-spin text-brand-teal" size={16} />
                                        <span className="text-xs text-gray-400">Preparando recomendación...</span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white/50 border-t border-white/50">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Escribe tu antojo aquí..."
                                    className="w-full pl-6 pr-14 py-4 rounded-2xl bg-white border border-transparent focus:border-brand-teal focus:ring-0 outline-none shadow-sm transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading}
                                    aria-label="Enviar mensaje"
                                    className="absolute right-2 top-2 w-10 h-10 bg-brand-teal text-white rounded-xl flex items-center justify-center hover:bg-brand-dark transition-all disabled:opacity-50"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
