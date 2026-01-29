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
        description: "A lightweight browser extension designed to improve browsing productivity. It features a minimalist interface and highly efficient resource usage.",
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
        description: "An innovative firmware project focusing on embedded systems optimization. This project involved low-level programming to enhance device performance and reliability.",
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
        description: "A comprehensive landing page for a financial service, designed to establish trust and clarity. The project focuses on accessible information architecture and clean, professional visuals to guide users through complex financial concepts.",
        techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        architect: "Thang Lee",
        githubLink: "https://github.com/thnglee/tcx",
    }
];
