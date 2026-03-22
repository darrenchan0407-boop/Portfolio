import womanLogo from "@/assets/woman-logo.png";
import popcapacityImg from "@/assets/popcapacity.png";
import assessivImg from "@/assets/assessiv.png";
import ptcatlantaImg from "@/assets/ptcatlanta.png";
import politifactImg from "@/assets/politifact.png";
import lucidCareImg from "@/assets/lucid-care.png";
import nanotopiaImg from "@/assets/nanotopia.png";
import babypageImg from "@/assets/babypage.png";
import type { Portfolio } from "../portfolio-types";

export const xiaomengPortfolio: Portfolio = {
  id: "xiaomeng",
  fullName: "Xiaomeng Sun",
  contact: {
    email: "xiaomeng94311@gmail.com",
    phone: "(601) 552-3730",
    location: "Yorba Linda, CA",
    linkedin: "https://linkedin.com/in/xiaomeng-sun-4b068b8a",
  },
  hero: {
    headline: "HELLO",
    subheadline:
      "I specialize in building high-performance, scalable systems and elegant user experiences with modern technologies.",
    role: "Software Developer",
    avatarImage: womanLogo,
  },
  about: {
    heading: "Building scalable systems with modern tech.",
    paragraphs: [
      "With over 8 years of experience shipping production software at scale, I specialize in building systems that are fast, reliable, and maintainable. From React frontends to Go microservices, I craft solutions that solve real problems.",
      "I've led teams at both startups and enterprises, always pushing for engineering excellence and thoughtful architecture. My focus is on delivering value through clean code, robust testing, and pragmatic design decisions.",
    ],
  },
  experiences: [
    {
      role: "Software Developer",
      company: "Navigate360",
      companyDomain: "navigate360.com",
      period: "04/2025 — Present",
      description:
        "Leading full-stack development for customer-facing web experiences in React, Next.js, and TypeScript. Built scalable backend endpoints in Go and Node.js, implemented GraphQL APIs, and optimized infrastructure with Docker and Kubernetes.",
      achievements: [
        "Reduced deployment time by 60% through CI/CD optimization",
        "Implemented event-driven architecture with Apache Kafka",
        "Built robust authentication systems with OAuth2 + JWT",
      ],
    },
    {
      role: "Software Developer",
      company: "Belun Technology Company Limited",
      companyDomain: "belun.com",
      period: "10/2017 — 04/2025",
      description:
        "Built and maintained web applications in React, Next.js, and TypeScript. Owned backend services in Go and Node.js, designed PostgreSQL schemas, and implemented microservices architecture with Docker and Kubernetes.",
      achievements: [
        "Reduced production incidents by 35% through comprehensive testing",
        "Implemented performance monitoring with Prometheus and Grafana",
        "Led migration to microservices architecture",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "E-Xuncheng Technology Company Limited",
      companyDomain: "xuncheng.com",
      period: "06/2016 — 07/2016",
      description:
        "Built web UI features using HTML5, CSS3, and JavaScript. Worked on React prototypes, implemented REST APIs with Node.js, and gained experience with containerization using Docker.",
      achievements: [
        "Delivered consistent cross-browser UI components",
        "Built prototype REST API for internal testing",
        "Containerized development environment with Docker",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "PopCapacity",
      description:
        "Warehouse marketplace connecting businesses with ideal storage solutions. Features advanced search, detailed analytics, and seamless booking flow.",
      image: popcapacityImg,
      url: "https://popcapacity.com",
      category: "Logistics Platform",
      tech: ["React", "Next.js", "TypeScript", "Node.js"],
      featured: true,
    },
    {
      id: 2,
      title: "Assessiv",
      description:
        "Digital SAT preparation platform with curated practice tests, progress tracking, and detailed analytics for students and companies.",
      image: assessivImg,
      url: "https://assessiv.com",
      category: "EdTech Platform",
      tech: ["React", "Analytics", "Testing Platform"],
      featured: true,
    },
    {
      id: 3,
      title: "PTC Atlanta",
      description:
        "Boutique property tax consulting firm specializing in real estate tax minimization throughout the Southeast with litigation support.",
      image: ptcatlantaImg,
      url: "https://ptcatlanta.com",
      category: "Professional Services",
      tech: ["Custom CMS", "Responsive Design"],
      featured: false,
    },
    {
      id: 4,
      title: "PolitiFact",
      description:
        "Fact-checking platform delivering accurate political information with real-time verification and comprehensive reporting system.",
      image: politifactImg,
      url: "https://www.politifact.com",
      category: "Media Platform",
      tech: ["CMS", "Real-time Updates", "Content Management"],
      featured: true,
    },
    {
      id: 5,
      title: "Lucid Care",
      description:
        "Mental health data advocacy platform with HIPAA-compliant tracking, clinical insights, and personalized healthcare analytics.",
      image: lucidCareImg,
      url: "https://lucid.care",
      category: "HealthTech",
      tech: ["iOS App", "Healthcare Analytics", "HIPAA Compliance"],
      featured: true,
    },
    {
      id: 6,
      title: "Nanotopia",
      description:
        "Web3 gaming ecosystem with NFT integration, staking mechanisms, and immersive utopian world gameplay on Polygon network.",
      image: nanotopiaImg,
      url: "https://www.greenrabbitgame.io",
      category: "Web3 Gaming",
      tech: ["Blockchain", "Gaming", "NFT", "Polygon"],
      featured: true,
    },
    {
      id: 7,
      title: "BabyPage",
      description:
        "Custom baby book platform capturing milestones with AI-generated content, beautiful designs, and milestone tracking system.",
      image: babypageImg,
      url: "https://babypage.com",
      category: "Consumer App",
      tech: ["Mobile App", "AI Content", "E-commerce"],
      featured: false,
    },
  ],
  theme: "warm",
  sections: ["hero", "about", "projects", "experience", "contact"],
  heroVariant: "bento",
  projectsVariant: "grid",
  experienceVariant: "default",
  contactVariant: "default",
  bento: {
    globeRegion: "us",
  },
};

