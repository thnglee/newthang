export interface Project {
    id: string;
    slug: string;
    title: string;
    category: string;
    image: string;
    video?: string;
    description: string;
    techStack: string[];
    architect: string;
    externalLink?: string;
    githubLink?: string;
    gallery?: string[];
}

export const projects: Project[] = [
    {
        id: '01',
        slug: 'fiber',
        title: 'fiber',
        category: 'BROWSER EXTENSION',
        image: '/3.png',
        description: "A Vietnamese news summarization browser extension that works directly on Vietnamese news websites, embeded fact-check feature for non-friction use of fact-checking any content upon any websites.",
        techStack: ["React", "Chrome Extension API", "JavaScript", "Webpack"],
        architect: "Thang Lee",
        githubLink: "https://github.com/thnglee/fiber",
    },
    {
        id: '02',
        slug: 'nextcapy',
        title: 'nextcapy',
        category: 'FIRMWARE PROJECT',
        image: '/2.png',
        description: "A project that I was pursuing while participating in NextStart Incubator program. This is the backend and web-client of a system supporting an IoT device that acts as an AI companion for children.",
        techStack: ["C++", "PlatformIO", "Embedded C", "IoT"],
        architect: "Thang Lee",
        githubLink: "https://github.com/thnglee/nextcapy",
    },
    {
        id: '03',
        slug: 'taichinhxanh',
        title: 'taichinhxanh.info',
        category: 'LANDING PAGE',
        image: '/he.png',
        video: '/something_stupid.mp4',
        description: "A landing page for TCX JSC. that was made within a very short amount of time to support the funding round of the business.",
        techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        architect: "Thang Lee",
        githubLink: "https://github.com/thnglee/tcx",
    }
];
