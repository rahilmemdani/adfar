import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Heart } from 'lucide-react'; // Assuming Heart icon is needed for floating elements

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Pre-Wedding', 'Haldi', 'Sangeet', 'Wedding', 'Reception'];

    const mediaItems = [
        { id: 1, type: 'image', category: 'Pre-Wedding', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80', height: 'h-64 md:h-96', color: 'bg-pink-100' },
        { id: 2, type: 'video', category: 'Pre-Wedding', src: 'https://assets.mixkit.co/videos/preview/mixkit-couple-walking-in-the-beach-at-sunset-4045-large.mp4', height: 'h-64', color: 'bg-blue-100' },
        { id: 3, type: 'image', category: 'Haldi', src: 'https://images.unsplash.com/photo-1605218427360-36390f855a2b?auto=format&fit=crop&q=80', height: 'h-64', color: 'bg-yellow-100' },
        { id: 4, type: 'image', category: 'Sangeet', src: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&q=80', height: 'h-64 md:h-80', color: 'bg-purple-100' },
        { id: 5, type: 'video', category: 'Wedding', src: 'https://assets.mixkit.co/videos/preview/mixkit-bride-holding-a-flower-bouquet-in-her-hands-4265-large.mp4', height: 'h-64 md:h-96', color: 'bg-red-100' },
        { id: 6, type: 'image', category: 'Reception', src: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80', height: 'h-64', color: 'bg-indigo-100' },
        { id: 7, type: 'image', category: 'Wedding', src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80', height: 'h-64', color: 'bg-pink-200' },
        { id: 8, type: 'video', category: 'Haldi', src: 'https://assets.mixkit.co/videos/preview/mixkit-indian-bride-applying-turmeric-paste-on-her-face-4266-large.mp4', height: 'h-64 md:h-80', color: 'bg-yellow-200' },
        { id: 9, type: 'image', category: 'Sangeet', src: 'https://images.unsplash.com/photo-1623692454743-858807b525f1?auto=format&fit=crop&q=80', height: 'h-64', color: 'bg-purple-200' },
    ];

    const filteredItems = filter === 'All' ? mediaItems : mediaItems.filter(item => item.category === filter);

    return (
        <section id="gallery" className="py-32 px-4 bg-secondary relative overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-pink-200/30"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Heart fill="currentColor" className="w-12 h-12" />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-heading font-bold text-center mb-12 text-text tracking-tight"
                >
                    Floating Memories
                </motion.h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${filter === cat
                                    ? 'bg-primary text-white shadow-lg scale-105'
                                    : 'bg-white text-text-light hover:bg-pink-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                layoutId={`card-${item.id}`}
                                onClick={() => setSelectedId(item.id)}
                                className={`relative cursor-pointer rounded-3xl overflow-hidden ${item.height} ${item.color} shadow-lg hover:shadow-2xl transition-all duration-500 group`}
                            >
                                {item.type === 'video' ? (
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover"
                                        muted
                                        loop
                                        onMouseOver={e => e.target.play()}
                                        onMouseOut={e => e.target.pause()}
                                    />
                                ) : (
                                    <img src={item.src} alt={item.category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-pink-900/20 group-hover:bg-pink-900/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="text-white font-light tracking-[0.2em] uppercase text-sm border border-white/50 px-6 py-2 rounded-full backdrop-blur-sm">
                                        {item.type === 'video' ? 'Play Video' : 'View Photo'}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                className="bg-transparent max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-3xl relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {(() => {
                                    const item = mediaItems.find(i => i.id === selectedId);
                                    return item?.type === 'video' ? (
                                        <video
                                            src={item.src}
                                            className="w-full h-full object-contain max-h-[85vh] rounded-3xl shadow-2xl"
                                            autoPlay
                                            controls
                                        />
                                    ) : (
                                        <img
                                            src={item?.src}
                                            alt="Gallery"
                                            className="w-full h-full object-contain max-h-[85vh] rounded-3xl shadow-2xl"
                                        />
                                    );
                                })()}

                                <button
                                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-colors"
                                    onClick={() => setSelectedId(null)}
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
