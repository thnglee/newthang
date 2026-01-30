export interface Project {
    id: string;
    slug: string;
    title: string;
    category: string;
    icon: string;        // Icon for project cards/tiles
    image: string;       // Main hero image for detail page
    video?: string;
    description: string;
    techStack: string[];
    externalLink?: string;
    githubLink?: string;
    gallery?: string[];  // Additional images for detail page
}

export const projects: Project[] = [
    {
        id: '01',
        slug: 'fiber',
        title: 'fiber',
        category: 'BROWSER EXTENSION',
        icon: '/3.png',        // Icon for project card
        image: '/fiber/fiber.png',       // Main hero image
        video: '/fiber/fiber.mp4',
        description: "A Vietnamese news summarization browser extension that works directly on Vietnamese news websites, embedded fact-check feature for non-friction use of fact-checking any content upon any websites.",
        techStack: ["Plasmo", "React", "TypeScript", "Tailwind CSS", "Next.js", "OpenAI API", "Tavily API"],
        externalLink: "https://fiber.vercel.app",
        githubLink: "https://github.com/thnglee/fiber",
        gallery: [
            '/fiber/fiber1.png',
            '/fiber/fiber2.png',
            '/fiber/fiber3.png',
            '/fiber/fiber4.png'
        ],
    },
    {
        id: '02',
        slug: 'nextcapy',
        title: 'nextcapy',
        category: 'FIRMWARE PROJECT',
        icon: '/2.png',        // Icon for project card
        image: '/capy/capy1.jpg',       // Main hero image
        description: `A project that I was pursuing while participating in NextStart Incubator program. This is the backend and web-client of a system supporting an IoT device that acts as an AI companion for children. 
        My task was to fully customize the UI/UX into a Vietnamese-friendly version while deploying the system on a customized server to analyze token usages and costs of different LLMs.`,
        techStack: ["Vue.js", "Python", "Docker", "Digital Ocean"],
        externalLink: "https://nextcapy.studio",
        githubLink: "https://github.com/NextCapy/capy-server",
        gallery: [
            '/capy/capy2.jpg'
        ],
    },
    {
        id: '03',
        slug: 'taichinhxanh',
        title: 'taichinhxanh.info',
        category: 'LANDING PAGE',
        icon: '/he.png',       // Icon for project card
        image: '/tcx/tcx.jpg',      // Main hero image
        video: '/tcx/tcx.mp4',
        description: "A landing page for TCX JSC. that was made within a very short amount of time to support the funding round of the business.",
        techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        externalLink: "https://taichinhxanh.info",
        githubLink: "https://github.com/thnglee/tcx",
    }
];
