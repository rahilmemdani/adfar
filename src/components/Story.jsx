import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin } from 'lucide-react';

const Story = () => {
    const milestones = [
        {
            title: "First Met",
            date: "December 15, 2022",
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

                {/* Meet the Couple - Classical Wedding Style */}
                <div className="flex flex-col gap-24 mb-32">
                    {/* Farhaan */}
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2 flex justify-center"
                        >
                            <div className="relative w-3/4 aspect-[3/4] p-4 bg-white shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-700">
                                <div className="absolute inset-0 border border-gray-200 m-2 pointer-events-none" />
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                    alt="Farhaan"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full md:w-1/2 text-center md:text-left relative"
                        >
                            <h3 className="text-5xl md:text-6xl font-heading font-medium text-text mb-4">Farhaan</h3>
                            <div className="w-16 h-px bg-primary mb-6 mx-auto md:mx-0" />
                            <p className="text-xl md:text-2xl font-heading italic text-primary/80 mb-6 font-light">
                                "The one who brings the coffee and the bad jokes."
                            </p>
                            <p className="text-gray-500 font-light leading-relaxed max-w-md mx-auto md:mx-0">
                                Always searching for the perfect brew and the perfectly timed pun. He believes love is about finding someone who laughs at your jokes, even when they aren't funny.
                            </p>
                        </motion.div>
                    </div>

                    {/* Adeena */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2 flex justify-center"
                        >
                            <div className="relative w-3/4 aspect-[3/4] p-4 bg-white shadow-2xl rotate-[3deg] hover:rotate-0 transition-transform duration-700">
                                <div className="absolute inset-0 border border-gray-200 m-2 pointer-events-none" />
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                                    alt="Adeena"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full md:w-1/2 text-center md:text-right relative"
                        >
                            <h3 className="text-5xl md:text-6xl font-heading font-medium text-text mb-4">Adeena</h3>
                            <div className="w-16 h-px bg-primary mb-6 mx-auto md:ml-auto md:mr-0" />
                            <p className="text-xl md:text-2xl font-heading italic text-primary/80 mb-6 font-light">
                                "The one who brings the sunshine and the laughter."
                            </p>
                            <p className="text-gray-500 font-light leading-relaxed max-w-md mx-auto md:ml-auto md:mr-0">
                                A radiant soul who lights up every room she enters. She believes love is about growing together and finding joy in the smallest of moments.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Timeline - Wedding Theme */}
                <div className="relative mt-32">
                    {/* --- Desktop Central Line --- */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-pink-200/50 hidden md:block">
                        <motion.div
                            // style={{ height: lineHeight }}
                            className="w-full bg-primary origin-top"
                        />
                    </div>

                    {/* --- Mobile Left Line --- */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 via-primary/50 to-pink-200 md:hidden origin-top"
                    ></motion.div>

                    <div className="space-y-16 md:space-y-32 relative">
                        {/* Decorative Top Heart - Desktop */}
                        <div className="hidden md:flex absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 justify-center">
                            <Heart className="w-8 h-8 text-primary fill-pink-100 animate-pulse" />
                        </div>

                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* --- Mobile View Structure --- */}
                                <div className="flex md:hidden w-full relative pl-20">
                                    {/* Mobile Icon on Line */}
                                    {/* Fixed: Aligned to left-8 to match the vertical line */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                        className="absolute left-8 top-0 transform -translate-x-1/2 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.3)] border-2 border-pink-200"
                                    >
                                        <div className="text-primary scale-75">
                                            {item.icon}
                                        </div>
                                    </motion.div>

                                    {/* Mobile Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="w-full bg-white/80 backdrop-blur-sm p-6 rounded-[1.5rem] shadow-[0_8px_30px_-5px_rgba(250,218,221,0.6)] border border-pink-50 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-full border border-pink-100/50 rounded-[1.5rem] m-1 pointer-events-none" />
                                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-pink-50 rounded-full blur-2xl opacity-50" />

                                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block relative z-10">
                                            {item.date}
                                        </span>
                                        <h3 className="text-xl font-heading text-gray-800 mb-2 relative z-10">{item.title}</h3>
                                        <p className="text-gray-500 text-sm font-light leading-relaxed italic relative z-10">
                                            "{item.description}"
                                        </p>
                                    </motion.div>
                                </div>


                                {/* --- Desktop View Structure (Hidden on Mobile) --- */}

                                {/* Date/Content Side */}
                                <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'} text-center`}>
                                    <div className={`inline-block p-8 bg-white rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(250,218,221,0.5)] border border-pink-50 relative group hover:-translate-y-2 transition-transform duration-500`}>

                                        {/* Classic Ornament details */}
                                        <div className="absolute top-0 left-0 w-full h-full border-2 border-pink-100 rounded-[2rem] m-2 pointer-events-none opacity-50" />

                                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                                            {item.date}
                                        </span>
                                        <h3 className="text-3xl font-heading text-gray-800 mb-4">{item.title}</h3>
                                        <p className="text-gray-500 font-light leading-relaxed italic">
                                            "{item.description}"
                                        </p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="hidden md:flex z-10 w-16 h-16 bg-white rounded-full items-center justify-center shadow-xl border-4 border-pink-50 relative">
                                    <div className="absolute inset-0 rounded-full border border-pink-100 m-1 animate-[spin_8s_linear_infinite]" />
                                    <div className="text-primary">
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="hidden md:block w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
