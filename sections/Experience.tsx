'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem, Experience as ExperienceType } from '@/components/experience/ExperienceItem';

const experiences: ExperienceType[] = [
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
                        <ExperienceItem key={exp.id} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

