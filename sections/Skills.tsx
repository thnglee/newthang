'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const skills = [
    {
        id: '01',
        title: 'Web Design',
        description: 'Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.',
        href: '/#web-design'
    },
    {
        id: '02',
        title: 'Development',
        description: 'Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.',
        href: '/#development'
    },
    {
        id: '03',
        title: 'Content & SEO',
        description: 'Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.',
        href: '/#content-seo'
    }
];

export function Skills() {
    return (
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#0A0A0A] border border-white/5 p-8 md:p-12 hover:border-gold-accent/30 transition-colors duration-500"
                    >
                        <div className="flex flex-col h-full justify-between gap-12">
                            <div>
                                <span className="text-xs font-mono text-gray-600 block mb-6 group-hover:text-gold-accent transition-colors">
                                    {skill.id}
                                </span>
                                <h3 className="text-xl md:text-2xl font-light tracking-wide text-white mb-4">
                                    {skill.title}
                                </h3>
                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>

                            <Link
                                href={skill.href}
                                className="flex items-center gap-3 text-xs md:text-sm text-gray-500 group-hover:text-white transition-colors uppercase tracking-wider"
                            >
                                <div className="p-2 rounded-full border border-white/10 group-hover:border-gold-accent group-hover:bg-gold-accent/10 transition-colors">
                                    <ArrowUpRight className="w-4 h-4 group-hover:text-gold-accent" />
                                </div>
                                About {skill.title}
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
