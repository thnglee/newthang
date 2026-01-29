'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ProjectCard, Project } from '@/components/projects/ProjectCard';

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
        <section id="projects" className="pt-12 md:pt-16 pb-24 md:pb-32 bg-obsidian">
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
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

