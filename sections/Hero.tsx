'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden">
            {/* Ghost Image Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                // style={{ backgroundImage: 'url(/hero-ghost.jpg)' }} // Placeholder, user needs to add image
                />
                {/* Gradient Fade to Black */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/80 to-obsidian" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-gold-accent text-sm md:text-base tracking-[0.2em] uppercase mb-4">
                        Frontend Developer for PATI
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic mb-2 tracking-tight">
                        Thắng Lê
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-8">
                        Expanding your reach through <span className="text-white font-normal">Ethical AI</span> & <span className="text-white font-normal">Customer-Centered Design</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"
                >
                    {/* Logo Strip (Placeholder for now) */}
                    <div className="w-full flex justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Add Logo SVGs here later */}
                        <span>Frontend</span>
                        <span>Ecommerce</span>
                        <span>Finance</span>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grid Lines (Optional, based on 'noir' feel) */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        </section>
    );
}
