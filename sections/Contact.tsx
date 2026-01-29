'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-obsidian text-white relative border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-8xl font-light tracking-tighter mb-8 leading-[0.9]"
                        >
                            Let's build something <br />
                            <span className="font-serif italic text-gold-accent">exceptional</span>.
                        </motion.h2>
                        <p className="text-xl text-text-body max-w-lg">
                            Currently available for freelance projects and open to full-time opportunities.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="mailto:hello@newthang.dev"
                            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gold-accent text-black font-semibold uppercase tracking-widest text-sm overflow-hidden rounded-sm transition-transform active:scale-95"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start a Project
                                <Mail className="w-4 h-4" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
                        </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-mono uppercase tracking-widest text-white/50">Contact</h3>
                        <a href="mailto:hello@newthang.dev" className="text-2xl hover:text-gold-accent transition-colors">
                            hello@newthang.dev
                        </a>
                        <p className="text-text-body">+84 90 123 4567</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-mono uppercase tracking-widest text-white/50">Socials</h3>
                        <div className="flex flex-col gap-2">
                            <SocialLink href="https://github.com" label="GitHub" icon={Github} />
                            <SocialLink href="https://linkedin.com" label="LinkedIn" icon={Linkedin} />
                            <SocialLink href="https://twitter.com" label="Twitter" icon={Twitter} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-mono uppercase tracking-widest text-white/50">Location</h3>
                        <p className="text-2xl">Hanoi, Vietnam</p>
                        <p className="text-text-body">Remote & Global</p>
                    </div>
                </div>

                <div className="mt-24 text-center md:text-left flex flex-col md:flex-row justify-between items-center opacity-30 text-sm">
                    <p>&copy; {new Date().getFullYear()} Newthang. All Rights Reserved.</p>
                    <p>Designed & Developed by Thang Lee.</p>
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-gold-accent/5 to-transparent pointer-events-none blur-3xl" />
        </section>
    );
}

function SocialLink({ href, label, icon: Icon }: { href: string, label: string, icon: any }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-text-body hover:text-white transition-colors">
            <Icon className="w-4 h-4" />
            <span>{label}</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </a>
    );
}
