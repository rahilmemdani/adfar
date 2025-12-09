import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Play } from 'lucide-react';

const Gallery = () => {
    const containerRef = useRef(null);

    // Curated high-quality items
    const galleryItems = [
        {
            id: 1,
            type: 'video',
            src: 'https://assets.mixkit.co/videos/preview/mixkit-couple-walking-in-the-beach-at-sunset-4045-large.mp4',
            className: 'md:col-span-2 md:row-span-2',
            title: "Sunset Walks"
        },
        {
            id: 2,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
            className: 'md:col-span-1 md:row-span-1',
            title: "The Vows"
        },
        {
            id: 3,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1605218427360-36390f855a2b?auto=format&fit=crop&q=80',
            className: 'md:col-span-1 md:row-span-2',
            title: "Haldi Joy"
        },
        {
            id: 4,
            type: 'video',
            src: 'https://assets.mixkit.co/videos/preview/mixkit-bride-holding-a-flower-bouquet-in-her-hands-4265-large.mp4',
            className: 'md:col-span-1 md:row-span-1',
            title: "Details"
        },
        {
            id: 5,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80',
            className: 'md:col-span-2 md:row-span-1',
            title: "Celebration"
        }
    ];

    return (
        <section id="gallery" className="py-20 md:py-32 bg-stone-50 relative overflow-hidden">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}
            />

            <div className="max-w-[95%] md:max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-20"
                >
                    <div className="flex justify-center mb-4">
                        <Heart className="w-6 h-6 text-primary fill-pink-100" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-heading font-medium text-gray-800 tracking-tight mb-4">
                        Our Memories
                    </h2>
                </motion.div>

                {/* DESKTOP: Cinematic Bento Grid */}
                <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-6 h-[800px]">
                    {galleryItems.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className={`relative rounded-2xl overflow-hidden shadow-lg border-4 border-white group cursor-pointer ${item.className}`}
                        >
                            {/* Content */}
                            <div className="w-full h-full relative">
                                {item.type === 'video' ? (
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover"
                                        muted
                                        loop
                                        playsInline
                                        autoPlay
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                )}

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="text-white font-heading text-2xl tracking-widest uppercase border-b border-white pb-1">
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* MOBILE: Interactive Film Roll (Horizontal Scroll) */}
                <div className="md:hidden">
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-4 -mx-4 scrollbar-hide">
                        {galleryItems.map((item) => (
                            <div
                                key={item.id}
                                className="snap-center shrink-0 w-[85vw] h-[60vh] rounded-3xl overflow-hidden relative shadow-xl border-[6px] border-white first:ml-4 last:mr-4"
                            >
                                {item.type === 'video' ? (
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover"
                                        muted
                                        loop
                                        playsInline
                                        autoPlay
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                                    <span className="text-white font-heading text-xl tracking-wider">
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Swipe indicator */}
                    <div className="flex justify-center gap-1 mt-4">
                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                        <div className="w-12 h-1 rounded-full bg-primary/40" />
                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Gallery;
