import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, Map } from 'lucide-react';

const Travel = () => {
    const travelInfo = [
        {
            icon: <Plane className="w-8 h-8 text-primary" />,
            title: "Getting Here",
            description: "The nearest airport is Chhatrapati Shivaji Maharaj International Airport (BOM). It's a 30-minute drive to the venue.",
        },
        {
            icon: <Hotel className="w-8 h-8 text-primary" />,
            title: "Accommodation",
            description: "We have reserved a block of rooms at The Taj Lands End. Mention 'Aarav & Ananya Wedding' for a special rate.",
        },
        {
            icon: <Map className="w-8 h-8 text-primary" />,
            title: "Local Tips",
            description: "Explore the Bandra Bandstand promenade or visit the historic Mount Mary Church while you're here.",
        },
    ];

    return (
        <section className="py-32 px-4 bg-secondary">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-heading font-bold text-center mb-24 text-text tracking-tight"
                >
                    Travel & Stay
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {travelInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-50 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mb-8 mx-auto">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4 text-center text-text">{item.title}</h3>
                            <p className="text-text-light leading-relaxed text-center font-light">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Travel;
