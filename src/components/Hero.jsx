import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const Hero = () => {
    // Parallax effect for mouse move
    const ref = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const springConfig = { damping: 25, stiffness: 150 };
    const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
    const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);
    const moveXReverse = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), springConfig);
    const moveYReverse = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);

    // Text Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    const characterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: 90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    const AnimatedText = ({ text, className }) => (
        <motion.div className={`flex overflow-hidden ${className}`} variants={containerVariants} initial="hidden" animate="visible">
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={characterVariants} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>
    );

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-center px-4"
        >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                {/* Baby Pink Overlay - Stronger opacity for the requested shade */}
                <div className="absolute inset-0 bg-pink-300/40 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-pink-200/20 via-transparent to-black/60 z-10" />

                {/* Cinematic Grain Overlay */}
                <div className="absolute inset-0 opacity-30 pointer-events-none z-10 mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                    alt="Couple Background"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Floating Aura Shapes */}
            <motion.div
                style={{ x: moveX, y: moveY }}
                className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-pink-400/30 rounded-full blur-[100px] mix-blend-screen opacity-40 z-0"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                style={{ x: moveXReverse, y: moveYReverse }}
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-400/20 rounded-full blur-[120px] mix-blend-screen opacity-40 z-0"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute z-10 text-white/40"
                    initial={{
                        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                        y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
                        scale: Math.random() * 0.5 + 0.3,
                    }}
                    animate={{
                        y: -100,
                        opacity: [0, 1, 0],
                        rotate: Math.random() * 360,
                    }}
                    transition={{
                        duration: Math.random() * 15 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5,
                    }}
                >
                    {Math.random() > 0.5 ? <Heart className="w-4 h-4" fill="currentColor" /> : <Sparkles className="w-3 h-3" />}
                </motion.div>
            ))}

            {/* Content */}
            <div className="z-20 relative text-white flex flex-col items-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 className="text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase mb-4 md:mb-8 font-light text-pink-100/90">
                        The Wedding Of
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-6 md:mb-10 w-full">
                    <AnimatedText
                        text="Farhaan"
                        className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
                    />
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, type: "spring" }}
                        className="text-4xl md:text-6xl text-primary font-heading italic font-light px-2"
                    >
                        &
                    </motion.span>
                    <AnimatedText
                        text="Adeena"
                        className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                    className="text-lg md:text-2xl italic mb-12 font-light tracking-wide text-pink-50/90 max-w-lg leading-relaxed"
                >
                    "Love that defies gravity"
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center w-full z-30"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-12 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm md:text-base font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-gray-900 transition-all duration-300 group"
                        onClick={() => document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="relative z-10">RSVP Now</span>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(250, 218, 221, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-12 py-4 bg-primary/20 backdrop-blur-md border border-primary/30 text-white rounded-full text-sm md:text-base font-medium tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300"
                        onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Gallery
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 cursor-pointer z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
