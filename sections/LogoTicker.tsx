'use client';

import React from 'react';
import { motion } from 'framer-motion';

const companies = [
    'Tai Chinh Xanh JSC.',
    'NextStart Incubator',
    'ThinkMay CO.,LTD',
    // duplicates for seamless loop if needed, but we'll use a track
];

export function LogoTicker() {
    return (
        <div className="py-12 md:py-16 border-y border-white/5 bg-black/50 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-obsidian to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-obsidian to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden group">
                <motion.div
                    className="flex gap-16 md:gap-32 flex-shrink-0 pr-16 md:pr-32 items-center"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
                        <span
                            key={index}
                            className="text-white/30 text-lg md:text-xl font-bold uppercase tracking-widest whitespace-nowrap hover:text-white/60 transition-colors cursor-default"
                        >
                            {company}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
