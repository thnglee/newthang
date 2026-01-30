'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/data/projects';

interface ProjectRowProps {
    project: Project;
    index: number;
}

export function ProjectRow({ project, index }: ProjectRowProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 0.61, 0.36, 1] // Custom cubic-bezier for smooth, premium feel
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="group border-b border-white/10 py-8 hover:border-gold-accent/30 transition-all duration-500"
        >
            <Link href={`/projects/${project.slug}`} className="flex items-center gap-6 md:gap-8">
                {/* Icon/Image */}
                <motion.div
                    className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full overflow-hidden bg-surface border border-white/10 group-hover:border-gold-accent/50 transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                >
                    <Image
                        src={project.icon}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                        <h3 className="text-xl md:text-2xl font-light text-white group-hover:text-gold-accent transition-colors duration-500">
                            {project.title}
                        </h3>
                        <span className="text-xs font-mono uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors duration-500">
                            {project.category}
                        </span>
                    </div>
                    <p className="text-sm md:text-base text-white/60 line-clamp-1 md:line-clamp-2 font-light group-hover:text-white/80 transition-colors duration-500">
                        {project.description}
                    </p>
                </div>

                {/* Button */}
                <div className="flex-shrink-0 hidden md:flex items-center gap-2 text-white/50 group-hover:text-gold-accent transition-colors duration-500">
                    <span className="text-sm font-mono uppercase tracking-widest">See More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 ease-out" />
                </div>

                {/* Mobile Arrow */}
                <div className="flex-shrink-0 md:hidden">
                    <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-gold-accent group-hover:translate-x-2 transition-all duration-500 ease-out" />
                </div>
            </Link>
        </motion.div>
    );
}
