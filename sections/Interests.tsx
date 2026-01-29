'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Music, Book, Cpu, Mountain, Code } from 'lucide-react';

const interests = [
    {
        id: '01',
        name: 'Photography',
        icon: Camera,
        description: 'Capturing urban landscapes and street noir.'
    },
    {
        id: '02',
        name: 'Synthesizers',
        icon: Music,
        description: 'Exploring analog sound design and modular synthesis.'
    },
    {
        id: '03',
        name: 'Sci-Fi Literature',
        icon: Book,
        description: 'Reading classics from Asimov, Philip K. Dick, and Gibson.'
    },
    {
        id: '04',
        name: 'Tech Hardware',
        icon: Cpu,
        description: 'Building custom mechanical keyboards and PC rigs.'
    },
    {
        id: '05',
        name: 'Hiking',
        icon: Mountain,
        description: 'Seeking silence in high-altitude environments.'
    },
    {
        id: '06',
        name: 'Open Source',
        icon: Code,
        description: 'Contributing to developer tools and libraries.'
    }
];

export function Interests() {
    return (
        <section id="interests" className="py-24 md:py-32 bg-obsidian text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
                            Personal <span className="font-serif italic text-gold-accent">Interests</span>
                        </h2>
                        <p className="text-text-body/60 max-w-lg text-lg">
                            Beyond keyframes and components.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={interest.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 border border-white/10 bg-surface hover:border-gold-accent/30 transition-all duration-300 rounded-sm flex flex-col items-start gap-4 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <interest.icon className="w-24 h-24 text-white" />
                            </div>

                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-obsidian group-hover:border-gold-accent group-hover:text-gold-accent transition-colors duration-300 z-10">
                                <interest.icon className="w-5 h-5" />
                            </div>

                            <div className="z-10">
                                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-gold-accent transition-colors duration-300">
                                    {interest.name}
                                </h3>
                                <p className="text-sm text-text-body group-hover:text-white/80 transition-colors duration-300">
                                    {interest.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
