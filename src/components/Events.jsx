import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

const Events = () => {
    const events = [
        {
            title: "Haldi Ceremony",
            date: "October 23, 2025",
            time: "10:00 AM",
            venue: "The Taj Lands End - Poolside",
            dressCode: "Yellow & Bright",
            vibe: "Playful & Sunny",
            color: "bg-yellow-100",
        },
        {
            title: "Mehendi",
            date: "October 23, 2025",
            time: "4:00 PM",
            venue: "The Taj Lands End - Garden",
            dressCode: "Boho Chic",
            vibe: "Colorful & Artistic",
            color: "bg-green-100",
        },
        {
            title: "Sangeet",
            date: "December 23, 2025",
            time: "7:00 PM",
            venue: "Grand Ballroom, Taj Lands End",
            dressCode: "Indo-Western Glam",
            vibe: "Dance & Drama",
            color: "bg-purple-100",
        },
        {
            title: "Wedding Ceremony",
            date: "December 24, 2025",
            time: "4:00 PM",
            venue: "Sunset Terrace",
            dressCode: "Traditional Elegance",
            vibe: "Sacred & Serene",
            color: "bg-red-50",
        },
        {
            title: "Reception",
            date: "December 24, 2025",
            time: "8:00 PM",
            venue: "The Grand Lawn",
            dressCode: "Formal / Black Tie",
            vibe: "Celebration & Cheers",
            color: "bg-blue-50",
        },
    ];

    return (
        <section className="py-20 px-4 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent opacity-20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-heading font-bold text-center mb-24 text-text tracking-tight"
                >
                    The Celebrations
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -15,
                                scale: 1.02,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                            }}
                            className={`p-10 rounded-[2.5rem] ${event.color} bg-opacity-40 backdrop-blur-xl border border-white/40 transition-all duration-500 hover:bg-opacity-60`}
                        >
                            <div className="flex justify-between items-start mb-8">
                                <h3 className="text-4xl font-heading font-bold text-text tracking-tight">{event.title}</h3>
                                <Sparkles className="w-8 h-8 text-text-light opacity-30" />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-text-light text-lg">
                                    <Calendar className="w-6 h-6 text-primary" />
                                    <span className="font-light">{event.date}</span>
                                </div>
                                <div className="flex items-center gap-4 text-text-light text-lg">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-light">{event.time}</span>
                                </div>
                                <div className="flex items-center gap-4 text-text-light text-lg">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    <span className="font-light">{event.venue}</span>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-black/5 flex flex-col sm:flex-row gap-8 justify-between text-base">
                                <div>
                                    <span className="block font-bold text-text mb-2 uppercase tracking-widest text-xs">Dress Code</span>
                                    <span className="text-text-light font-light italic">{event.dressCode}</span>
                                </div>
                                <div>
                                    <span className="block font-bold text-text mb-2 uppercase tracking-widest text-xs">Vibe</span>
                                    <span className="text-text-light font-light italic">{event.vibe}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
