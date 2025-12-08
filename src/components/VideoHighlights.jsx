import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoHighlights = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    const videos = [
        { id: 1, src: "https://assets.mixkit.co/videos/preview/mixkit-couple-walking-in-the-beach-at-sunset-4045-large.mp4", title: "Sunset Walk" },
        { id: 2, src: "https://assets.mixkit.co/videos/preview/mixkit-bride-holding-a-flower-bouquet-in-her-hands-4265-large.mp4", title: "The Bouquet" },
        { id: 3, src: "https://assets.mixkit.co/videos/preview/mixkit-indian-bride-applying-turmeric-paste-on-her-face-4266-large.mp4", title: "Haldi Ceremony" },
        { id: 4, src: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-couple-showing-their-rings-4267-large.mp4", title: "The Rings" },
        { id: 5, src: "https://assets.mixkit.co/videos/preview/mixkit-couple-walking-in-the-beach-at-sunset-4045-large.mp4", title: "Beach Love" },
    ];

    return (
        <section className="py-32 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-heading font-bold text-center text-text tracking-tight"
                >
                    Moments in Motion
                </motion.h2>
                <p className="text-center text-text-light mt-4 text-lg italic">
                    Relive the magic, one frame at a time.
                </p>
            </div>

            <div ref={containerRef} className="relative w-full">
                <motion.div
                    style={{ x }}
                    className="flex gap-8 px-4 w-max"
                >
                    {[...videos, ...videos].map((video, index) => (
                        <motion.div
                            key={`${video.id}-${index}`}
                            className="relative w-[400px] h-[600px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <video
                                src={video.src}
                                className="w-full h-full object-cover"
                                loop
                                muted
                                playsInline
                                onMouseOver={e => e.target.play()}
                                onMouseOut={e => e.target.pause()}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-white text-2xl font-heading font-bold">{video.title}</h3>
                                <div className="flex items-center gap-2 text-white/80 mt-2">
                                    <Play className="w-4 h-4 fill-current" />
                                    <span className="text-sm uppercase tracking-widest">Watch Clip</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default VideoHighlights;
