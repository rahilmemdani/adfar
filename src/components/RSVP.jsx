import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const RSVP = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        guests: 1,
        attending: 'yes',
        meal: 'veg',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <section id="rsvp" className="py-20 px-4 bg-white relative overflow-hidden">
            {/* Floating Shapes */}
            <motion.div
                className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30 blur-xl"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-30 blur-xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/60 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-white/60"
                >
                    {!isSubmitted ? (
                        <>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-text tracking-tight">
                                RSVP
                            </h2>
                            <p className="text-center text-text-light mb-12 text-lg font-light italic">
                                We'd love to celebrate with you!
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-light mb-2 block">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-primary outline-none transition-all text-lg placeholder-gray-300"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-light mb-2 block">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-primary outline-none transition-all text-lg placeholder-gray-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-light mb-2 block">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formState.phone}
                                            onChange={handleChange}
                                            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-primary outline-none transition-all text-lg placeholder-gray-300"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-light mb-2 block">Number of Guests</label>
                                        <input
                                            type="number"
                                            name="guests"
                                            min="1"
                                            max="5"
                                            value={formState.guests}
                                            onChange={handleChange}
                                            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-primary outline-none transition-all text-lg"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-light mb-2 block">Will you attend?</label>
                                        <select
                                            name="attending"
                                            value={formState.attending}
                                            onChange={handleChange}
                                            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-primary outline-none transition-all text-lg"
                                        >
                                            <option value="yes">Yes, with joy!</option>
                                            <option value="no">Regretfully, no</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-light mb-2 block">Meal Preference</label>
                                        <select
                                            name="meal"
                                            value={formState.meal}
                                            onChange={handleChange}
                                            className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-primary outline-none transition-all text-lg"
                                        >
                                            <option value="veg">Vegetarian</option>
                                            <option value="non-veg">Non-Vegetarian</option>
                                            <option value="vegan">Vegan</option>
                                            <option value="jain">Jain</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-text-light mb-2 block">Message to the Couple</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-200 focus:border-primary outline-none transition-all text-lg placeholder-gray-300 resize-none"
                                        placeholder="Write something sweet..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-5 bg-text text-white rounded-full font-bold text-lg tracking-widest shadow-xl flex items-center justify-center gap-3 hover:bg-gray-900 transition-all mt-8"
                                >
                                    <Send className="w-5 h-5" />
                                    Send RSVP
                                </motion.button>
                            </form>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-10"
                        >
                            <div className="mb-6 relative">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                >
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                                </motion.div>

                                {/* Floating Hearts Animation */}
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 text-pink-400"
                                        initial={{
                                            x: 0,
                                            y: 0,
                                            scale: 0,
                                            opacity: 1
                                        }}
                                        animate={{
                                            x: (Math.random() - 0.5) * 200,
                                            y: -Math.random() * 300 - 50,
                                            scale: Math.random() * 1 + 0.5,
                                            opacity: 0,
                                            rotate: Math.random() * 360
                                        }}
                                        transition={{
                                            duration: 2,
                                            ease: "easeOut",
                                            delay: Math.random() * 0.5
                                        }}
                                    >
                                        <Heart className="w-6 h-6 fill-current" />
                                    </motion.div>
                                ))}
                            </div>
                            <h3 className="text-3xl font-heading font-bold mb-4 text-text">Thank You!</h3>
                            <p className="text-text-light text-lg mb-8">
                                Your RSVP has been sent successfully. We can't wait to see you!
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-8 text-sm text-text-light underline hover:text-text"
                            >
                                Submit another response
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default RSVP;
