'use client';

import React from 'react';
import Link from 'next/link';
import { ProjectRow } from '@/components/projects/ProjectRow';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

export function Projects() {
    return (
        <section id="projects" className="pt-24 md:pt-32 pb-24 md:pb-32 bg-obsidian">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-5xl md:text-7xl text-white font-light tracking-tight">
                            Selected <span className="font-serif italic text-gold-accent">Work</span>
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <ProjectRow key={project.id} project={project} index={index} />
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="border-b border-white/10 py-8"
                    >
                        <div className="flex items-center justify-center p-8 md:p-12">
                            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed text-center font-serif italic max-w-3xl">
                                "Beside these 3 projects, I also joined in multiple projects with Xpath, Thinkmay, NextTech, which I'm not able to showcase any past progress..."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

