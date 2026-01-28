'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    relatedLink?: string;
    media?: {
        type: 'image' | 'video';
        src: string;
    }[];
}

const experiences: Experience[] = [
    {
        id: '01',
        role: 'Senior Frontend Developer',
        company: 'TechFlow Solutions',
        period: '2023 - Present',
        description: 'Leading the frontend architecture migration to Next.js 15. Improved performance by 40% and established a comprehensive design system used across 5 distinct products.',
        relatedLink: '#',
        media: [
            { type: 'image', src: '/vietmentor-1.png' },
            { type: 'image', src: '/vtis-1.png' }
        ]
    },
    {
        id: '02',
        role: 'Full Stack Engineer',
        company: 'Creative Pulse',
        period: '2021 - 2023',
        description: 'Developed scalable web applications using React and Node.js. Collaborated with design teams to implement pixel-perfect, responsive interfaces for high-profile clients.'
    },
    {
        id: '03',
        role: 'Frontend Developer',
        company: 'Digital Horizon',
        period: '2019 - 2021',
        description: 'Built interactive user interfaces for e-commerce platforms. Specialized in optimizing user experience and implementing accessible, semantic HTML/CSS.'
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 md:py-32 bg-obsidian text-white relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,164,126,0.05),transparent_40%)] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
                        Professional <span className="font-serif italic text-gold-accent">Experience</span>
                    </h2>
                    <p className="text-text-body/60 max-w-lg text-lg">
                        A timeline of my professional journey and contributions.
                    </p>
                </motion.div>

                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pl-8 md:pl-16">
                    {/* Timeline Line */}

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative group"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-5 h-5 md:w-6 md:h-6 rounded-full border border-white/20 bg-obsidian group-hover:border-gold-accent group-hover:bg-gold-accent/20 transition-colors duration-300">
                                <div className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-white group-hover:bg-gold-accent transition-colors duration-300" />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-gold-accent transition-colors duration-300">
                                    {exp.role}
                                </h3>
                                <span className="text-sm font-mono text-gold-accent/80 tracking-wider mt-1 md:mt-0">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="text-lg text-white/60 mb-4 font-medium">
                                {exp.company}
                            </div>

                            <p className="text-text-body leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>

                            {/* Media Tiles */}
                            {exp.media && (
                                <div className="grid grid-cols-2 gap-4 mt-6 max-w-2xl">
                                    {exp.media.map((item, i) => (
                                        <div key={i} className="relative aspect-video rounded-sm overflow-hidden bg-white/5 border border-white/10 group/media">
                                            <Image
                                                src={item.src}
                                                alt={`${exp.role} - Work sample ${i + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover/media:scale-105"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Link Button */}
                            {exp.relatedLink && (
                                <div className="mt-6">
                                    <Link
                                        href={exp.relatedLink}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-accent/30 text-white rounded-sm transition-all duration-300 group/btn"
                                    >
                                        <span className="text-sm font-medium tracking-wide text-white/90 group-hover:text-gold-accent transition-colors">View Project</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-white/70 group-hover:text-gold-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </Link>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
