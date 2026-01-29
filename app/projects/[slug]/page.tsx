import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { projects } from '@/data/projects';

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-obsidian text-white pt-20 md:pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/50 hover:text-gold-accent transition-colors mb-8 md:mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-mono tracking-widest uppercase">Back to Portfolio</span>
                </Link>

                {/* Header Section */}
                <div className="mb-12 md:mb-20">
                    <span className="text-gold-accent font-mono text-sm tracking-widest uppercase mb-4 block">
                        {project.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
                        {project.title}
                    </h1>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column: Media & Description */}
                    <div className="lg:col-span-8 flex flex-col gap-16">
                        {/* Main Media */}
                        <div className="w-full aspect-video bg-surface border border-white/5 rounded-sm overflow-hidden relative">
                            {project.video ? (
                                <video
                                    src={project.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>

                        {/* Description (Editorial Style) */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-16">
                            <div className="md:col-span-4">
                                <h3 className="text-sm font-mono uppercase tracking-widest text-white/50">
                                    Concept & Challenge
                                </h3>
                            </div>
                            <div className="md:col-span-8">
                                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed font-serif">
                                    {project.description}
                                </p>
                            </div>
                        </div>

                        {/* Image Gallery (Placeholder for now if no gallery) */}
                        {[1, 2].map((i) => (
                            <div key={i} className="w-full aspect-[4/3] bg-surface/50 border border-white/5 rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src={project.image} // Using main image as placeholder since gallery isn't populated yet
                                    alt={`${project.title} detail ${i}`}
                                    fill
                                    className="object-cover opacity-80"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Sidebar Info */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32 flex flex-col gap-12">
                            {/* Project Info Block */}
                            <div className="flex flex-col gap-8 p-8 bg-surface border border-white/5 rounded-sm">
                                <div>
                                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
                                        Architect / Lead
                                    </h4>
                                    <p className="text-lg text-white font-light">
                                        {project.architect}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {(project.externalLink || project.githubLink) && (
                                    <div className="pt-8 border-t border-white/5 flex flex-col gap-3">
                                        <a
                                            href={project.externalLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between w-full bg-gold-accent text-black px-6 py-4 rounded-sm hover:bg-white transition-colors duration-300"
                                        >
                                            <span className="font-mono text-sm uppercase tracking-widest">
                                                Visit Project
                                            </span>
                                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </a>
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center justify-between w-full bg-white/5 text-white px-6 py-4 rounded-sm hover:bg-white/10 transition-colors duration-300 border border-white/10"
                                            >
                                                <span className="font-mono text-sm uppercase tracking-widest">
                                                    View Source
                                                </span>
                                                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
