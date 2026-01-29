'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    video?: string;
    href: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true, margin: "-100px" }}
            className="group flex flex-col gap-6"
        >
            <Link href={project.href} className="block w-full h-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface rounded-sm">

                    {/* Video Background (if available) - Plays on Hover */}
                    {project.video && (
                        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                            <video
                                src={project.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Image with hover zoom (Background) */}
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform z-0">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover opacity-90 transition-all duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Dark Gradient Overlay for text readability */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Center Circle Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-30">
                        <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                            <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Bottom Glass Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/40 backdrop-blur-md border-t border-white/10 flex justify-between items-center px-8 z-20">
                        <h3 className="text-2xl text-white font-light tracking-wide">
                            {project.title}
                        </h3>
                        <span className="text-xs font-mono uppercase tracking-widest text-gold-accent opacity-90">
                            {project.category}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
