import type { Portfolio } from "../portfolio-types";

export const ducPortfolio: Portfolio = {
  id: "duc",
  fullName: "Duc Chu",
  contact: {
    email: "namvotri1905@gmail.com",
    phone: "+84 869 987 598",
    location: "Hanoi Capital Region, Vietnam",
    linkedin: "https://linkedin.com/in/duc-chu-2424883b3",
  },
  hero: {
    headline: "HELLO",
    subheadline:
      "Senior Full Stack Software Engineer focused on performant web and mobile experiences, robust backends, and reliable cloud infrastructure.",
    role: "Senior Full Stack Software Engineer",
    avatarImage: undefined,
  },
  about: {
    heading: "Shipping full-stack products with performance and reliability.",
    paragraphs: [
      "Senior Full Stack Software Engineer with 5 years of experience designing, building, and maintaining web and mobile applications using React, Next.js, TypeScript, TailwindCSS, React Native, Flutter, and native mobile stacks.",
      "Strong backend experience shipping REST and GraphQL APIs with Go, Node.js, Python, and Java, plus event-driven systems using Kafka and RabbitMQ, and running cloud infrastructure on AWS with Docker, Kubernetes, Terraform, and CI/CD.",
    ],
  },
  experiences: [
    {
      role: "Senior Software Engineer",
      company: "Vin",
      companyDomain: "vingroup.net",
      period: "04/2024 – 02/2026",
      location: "Hanoi Capital Region, Vietnam",
      description:
        "Owned end-to-end delivery for customer-facing web and mobile flows across React, Next.js, React Native, and Flutter, with backend services in Go and Node.js and event-driven pipelines on Kafka and RabbitMQ.",
      achievements: [
        "Tightened Core Web Vitals by balancing SSR/CSR in React and Next.js experiences.",
        "Shipped mobile features in React Native and Flutter, including native bridge work and store release workflows for iOS and Android.",
        "Designed and implemented REST and GraphQL APIs with clean OpenAPI specs and predictable versioning.",
        "Reduced production risk by hardening async workflows with Kafka/RabbitMQ, retries, and dead-letter queues.",
        "Improved performance and scalability by tuning PostgreSQL queries, adding indexes, and introducing DynamoDB for hot key/value access paths.",
        "Cut CI/CD pipeline times by ~40% via caching and GitHub Actions optimizations.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Moatable",
      companyDomain: "moatable.com",
      period: "05/2021 – 04/2024",
      location: "Hanoi Capital Region, Vietnam",
      description:
        "Full‑stack product work spanning React/Next.js web, React Native mobile, Go/Node.js/Python services, and AWS infrastructure with Terraform, Kafka, and Kubernetes.",
      achievements: [
        "Built and maintained SEO-sensitive Next.js pages with SSR while keeping heavy dashboards performant via client-only bundles.",
        "Implemented mobile-facing REST APIs in Go and Node.js designed to stay stable across app versions.",
        "Introduced Python/Flask utilities for background jobs and webhook processing, covered by PyTest.",
        "Used Kafka and RabbitMQ to move long-running work off the request path, including tested poison-message handling.",
        "Tuned PostgreSQL queries, fixed N+1 patterns, and added Redis caching to drop p95 latency by ~35% on critical endpoints.",
        "Containerized services with Docker and deployed them with Kubernetes and Helm, keeping environments close to production.",
      ],
    },
    {
      role: "Web Development Intern",
      company: "Amazon",
      companyDomain: "amazon.com",
      period: "09/2020 – 05/2021",
      location: "Hanoi, Vietnam",
      description:
        "Built internal web tooling in React and TypeScript, backend APIs in Node.js and Java/Spring Boot, and contributed to a Docker-based development environment.",
      achievements: [
        "Shipped frequent UI improvements that reduced manual steps for operators using React and TypeScript.",
        "Implemented Node.js REST endpoints and documented API contracts for future teams.",
        "Contributed to a Java/Spring Boot service with improvements around request validation and response shaping.",
        "Helped stitch in PostgreSQL-backed data views and learned practical lessons around slow joins and indexing.",
        "Participated in a Docker-based dev environment and resolved environment drift issues between local and CI.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Matrue Cannabis",
      description: "E-commerce storefront for a cannabis brand with modern UX and product browsing.",
      url: "https://matruecannabis.com/en/",
      category: "E-commerce",
      tech: ["React", "Next.js", "TypeScript"],
      featured: true,
    },
    {
      id: 2,
      title: "Lower",
      description: "Digital mortgage and lending experience focused on performance and conversion.",
      url: "https://www.lower.com/",
      category: "Fintech",
      tech: ["React", "Next.js"],
      featured: true,
    },
    {
      id: 3,
      title: "Tinkering Monkey",
      description: "Design agency website built with WordPress, WP Bakery, and WooCommerce.",
      url: "https://www.tinkeringmonkey.com/",
      category: "Design Agency",
      tech: ["WordPress", "WP Bakery", "WooCommerce", "PHP"],
      featured: true,
    },
    {
      id: 4,
      title: "Maxobiz",
      description: "Design agency site with rich animations and custom branding experiences.",
      url: "https://www.maxobiz.com/",
      category: "Design Agency",
      tech: ["PHP", "GSAP"],
      featured: false,
    },
    {
      id: 5,
      title: "Tiny Hands Online",
      description: "Jewelry store with a focus on product storytelling and detailed visuals.",
      url: "https://tinyhandsonline.com/",
      category: "E-commerce",
      tech: ["React", "E-commerce"],
      featured: false,
    },
    {
      id: 6,
      title: "SoYoung US",
      description: "Lunch bag and accessories storefront with a focus on brand and merchandising.",
      url: "https://us.soyoung.ca/",
      category: "E-commerce",
      tech: ["React", "E-commerce"],
      featured: true,
    },
  ],
  theme: "warm",
  sections: ["hero", "projects", "experience", "about", "contact"],
  heroVariant: "bento",
  projectsVariant: "gallery",
  experienceVariant: "compact",
  contactVariant: "minimal",
  bento: {
    globeRegion: "sea",
  },
};

