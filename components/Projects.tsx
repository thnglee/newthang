'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    video?: string;
    href: string;
}

const projects: Project[] = [
    {
        id: '01',
        title: 'VietMentor',
        category: 'EDTECH PLATFORM',
        image: '/vietmentor-1.png',
        video: '/something_stupid.mp4',
        href: '#'
    },
    {
        id: '02',
        title: 'VTIS',
        category: 'TRANSPORT SOLUTIONS',
        image: '/vtis-1.png',
        href: '#'
    },
    {
        id: '03',
        title: 'VietMentor Mobile',
        category: 'UI/UX DESIGN',
        image: '/vietmentor-2.png',
        href: '#'
    },
    {
        id: '04',
        title: 'VTIS Admin',
        category: 'SYSTEM ARCHITECTURE',
        image: '/vtis-2.jpg',
        href: '#'
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 bg-obsidian">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-5xl md:text-7xl text-white font-light tracking-tight">
                            Selected <span className="font-serif italic text-gold-accent">Work</span>
                        </h2>
                    </div>
                    <Link
                        href="/projects"
                        className="group flex items-center gap-3 text-white/70 hover:text-gold-accent transition-colors duration-300 pb-2"
                    >
                        <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-gold-accent group-hover:border-gold-accent group-hover:text-black transition-all duration-300">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                        <span className="uppercase tracking-widest text-sm font-medium">See All</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
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
                            {/* Removed external text block */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
