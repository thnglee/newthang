'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem, Experience as ExperienceType } from '@/components/experience/ExperienceItem';

const experiences: ExperienceType[] = [
    {
        id: '01',
        role: 'Finance & E-commerce Operations',
        company: 'Tai Chinh Xanh JSC.',
        period: '09/2025 – 02/2026',
        location: 'Ha Noi',
        description: 'During this period of time, I had the opportunity to work alongside many talented individuals from the start-up ecosystem. I played a vital role in this business by managing the daily operations of finance and e-commerce. Our first brand, Softie, develops biological cleaning products powered by natural enzymes was getting attention from angle investors at the time.',
        skills: ['E-commerce', 'Management Accounting'],
        links: [
            { text: 'Website', url: 'https://www.taichinhxanh.info/' },
            { text: 'Article', url: 'https://tienphong.vn/nhung-ong-chu-sinh-vien-khoi-nghiep-xanh-post1802928.tpo?fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNDM3NjI2MzE2OTczNzg4AAEeGkoYZZsUdFcfhb7no7_bJsMJtXoL5ZxRInEbC4s2ldDWgwgD3kJzRwZS1XQ_aem_ZkNh2DnUVBg-S98zMQdueQ' }
        ],
        media: [
            { type: 'image', src: '/tcx.jpg' },
            { type: 'image', src: '/sof.jpg' }
        ]
    },
    {
        id: '02',
        role: 'Batch-1 Member - Tech Business Development',
        company: 'NextStart Incubator',
        period: '06/2025 – 10/2025',
        location: 'Hanoi',
        description: 'Within 4 months of crashing and burning, I’ve dived deep into the startup world — from market research and business ideation to product development and marketing. I failed often, learned fast, and grew even faster. Beyond building projects, I built resilience, adaptability, and a founder’s mindset. Most of all, I met incredible peers and discovered how beautiful the chaos of building something from nothing can be. ',
        skills: ['Front-end Development', 'DevOps', 'Business Development'],
        links: [
            { text: 'Article', url: 'https://trading.vietcap.com.vn/ai-news/post-detail/nextstart-incubator-vuon-uom-tai-nang-khoi-nghiep-chao-don-khoa-dau-tien' },
            { text: 'Project', url: 'nextcapy.studio' }
        ],
        media: [
            { type: 'image', src: '/ns.jpg' },
            { type: 'image', src: '/nss.jpg' }
        ]
    },
    {
        id: '03',
        role: 'VJ - Content Creator, UI/UX Testing, Bug Reporting',
        company: 'Thinkmay CO.,LTD',
        period: '06/2025 – 09/2025',
        location: 'Hanoi',
        description: 'I worked directly with the CEO to align creative content with broader business objectives and market positioning strategies. I also managed the end-to-end creative process, from conceptualization to final production, in short to make things grow. Other time I conducted UI testing of landing page to optimize convesion rate and ensure smooth user experience.',
        skills: ['Content Ideation & Production', 'Data-driven Decision Making'],
        links: [
            { text: 'Website', url: 'https://thinkmay.net/' },
            { text: 'Tiktok', url: 'https://www.tiktok.com/@thangoncloud' },
        ],
        media: [
            { type: 'image', src: '/1.png' },
            { type: 'image', src: '/tmay.png' }
        ]
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

