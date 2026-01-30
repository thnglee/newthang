'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    location?: string;
    skills?: string[];
    links?: {
        text: string;
        url: string;
    }[];
    media?: {
        type: 'image' | 'video';
        src: string;
    }[];
}

interface ExperienceItemProps {
    experience: Experience;
    index: number;
}

export function ExperienceItem({ experience, index }: ExperienceItemProps) {
    return (
        <motion.div
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
                    {experience.role}
                </h3>
                <div className="flex flex-col md:items-end">
                    <span className="text-sm font-mono text-gold-accent/80 tracking-wider mt-1 md:mt-0">
                        {experience.period}
                    </span>
                    {experience.location && (
                        <span className="text-xs text-white/40 mt-0.5">
                            {experience.location}
                        </span>
                    )}
                </div>
            </div>

            <div className="text-lg text-white/60 mb-4 font-medium">
                {experience.company}
            </div>

            <p className="text-text-body leading-relaxed max-w-2xl mb-4">
                {experience.description}
            </p>

            {/* Skills */}
            {experience.skills && (
                <div className="flex flex-wrap gap-2 mb-6 max-w-2xl">
                    <span className="text-sm text-white/60 mr-2">Gained skills:</span>
                    {experience.skills.map((skill, i) => (
                        <span key={i} className="text-sm text-gold-accent/90">
                            {skill}{i < experience.skills!.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </div>
            )}

            {/* Media Tiles */}
            {experience.media && (
                <div className="grid grid-cols-2 gap-4 mt-6 max-w-2xl">
                    {experience.media.map((item, i) => (
                        <div key={i} className="relative aspect-video rounded-sm overflow-hidden bg-white/5 border border-white/10 group/media">
                            <Image
                                src={item.src}
                                alt={`${experience.role} - Work sample ${i + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover/media:scale-105"
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Link Buttons */}
            {experience.links && (
                <div className="mt-6 flex flex-wrap gap-4">
                    {experience.links.map((link, i) => (
                        <Link
                            key={i}
                            href={link.url}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-accent/30 text-white rounded-sm transition-all duration-300 group/btn"
                        >
                            <span className="text-sm font-medium tracking-wide text-white/90 group-hover:text-gold-accent transition-colors">{link.text}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-white/70 group-hover:text-gold-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </Link>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
