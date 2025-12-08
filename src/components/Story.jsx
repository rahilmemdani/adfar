import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';

const Story = () => {
    const milestones = [
        {
            title: "First Met",
            date: "June 15, 2022",
            description: "A chance encounter at a coffee shop that changed everything.",
            icon: <MapPin className="w-6 h-6 text-white" />,
        },
        {
            title: "First Date",
            date: "July 01, 2022",
            description: "Dinner under the stars, talking until the restaurant closed.",
            icon: <Calendar className="w-6 h-6 text-white" />,
        },
        {
            title: "The Proposal",
            date: "December 24, 2024",
            description: "He got down on one knee, and she said yes!",
            icon: <Heart className="w-6 h-6 text-white" />,
        },
    ];

    return (
        <section className="py-32 px-4 bg-secondary overflow-hidden relative">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-heading font-bold text-center mb-24 text-text tracking-tight"
                >
                    Our Story
                </motion.h2>

                {/* Bride & Groom Cards */}
                <div className="flex flex-col md:flex-row justify-center gap-10 mb-20">
                    {['Groom', 'Bride'].map((role, index) => (
                        <motion.div
                            key={role}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/40 backdrop-blur-xl p-10 rounded-[2rem] shadow-2xl w-full md:w-1/3 border border-white/60 hover:shadow-pink-100/50 transition-all duration-500"
                        >
                            <div className="w-40 h-40 mx-auto bg-gray-100 rounded-full mb-8 overflow-hidden border-4 border-white shadow-lg">
                                {/* Placeholder Image */}
                                <div className="w-full h-full bg-gradient-to-br from-primary to-pink-200 opacity-80"></div>
                            </div>
                            <h3 className="text-3xl font-heading font-bold text-center mb-4 text-text">{role === 'Groom' ? 'Aarav' : 'Ananya'}</h3>
                            <p className="text-center text-text-light text-lg font-light leading-relaxed italic">
                                {role === 'Groom'
                                    ? "The one who brings the coffee and the bad jokes."
                                    : "The one who brings the sunshine and the laughter."}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative mt-32">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}
                            >
                                <div className="w-5/12"></div>

                                {/* Icon */}
                                <div className="z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-pink-100">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="w-5/12">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                                    >
                                        <span className="text-sm text-primary font-bold uppercase tracking-[0.2em] mb-2 block">
                                            {item.date}
                                        </span>
                                        <h3 className="text-2xl font-heading font-bold mb-3 text-text">{item.title}</h3>
                                        <p className="text-text-light font-light leading-relaxed">{item.description}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
