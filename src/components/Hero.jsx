import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-center px-4">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <div className="absolute inset-0 bg-pink-500/20 mix-blend-overlay z-10" /> {/* Soft Pastel Pink Overlay */}
                <div className="absolute inset-0 bg-black/10 z-10" /> {/* Slight dark overlay for text contrast */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-pink-and-blue-ink-swirl-1176-large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Floating Background Shapes */}
            <motion.div
                className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-30 blur-2xl"
                animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-48 h-48 bg-accent rounded-full opacity-40 blur-3xl"
                animate={{
                    y: [0, -30, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-300 rounded-full opacity-20 blur-xl"
                animate={{
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating Hearts/Petals */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-pink-200/40 z-10"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight + 100,
                        scale: Math.random() * 0.5 + 0.5,
                        rotate: Math.random() * 360,
                    }}
                    animate={{
                        y: -100,
                        rotate: Math.random() * 360,
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10,
                    }}
                >
                    <Heart fill="currentColor" className="w-8 h-8" />
                </motion.div>
            ))}

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="z-20 relative text-white"
            >
                <h2 className="text-xl md:text-3xl tracking-[0.3em] uppercase mb-6 font-light">
                    The Wedding Of
                </h2>
                <h1 className="text-7xl md:text-9xl font-heading font-bold mb-8 drop-shadow-lg">
                    Aarav <span className="text-primary italic font-light">&</span> Ananya
                </h1>
                <p className="text-xl md:text-2xl italic mb-12 font-light tracking-wide opacity-90">
                    "Love that defies gravity"
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12 z-30 relative">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(250, 218, 221, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-lg font-semibold tracking-widest hover:bg-white hover:text-text transition-all duration-500"
                        onClick={() => document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' })}
                    >
                        RSVP Now
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(250, 218, 221, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-primary/80 backdrop-blur-md border border-white/30 text-white rounded-full text-lg font-semibold tracking-widest hover:bg-white hover:text-primary transition-all duration-500"
                        onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Gallery
                    </motion.button>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-white rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
