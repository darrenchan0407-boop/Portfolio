import type { Portfolio } from "../portfolio-types";

export const brunoPortfolio: Portfolio = {
  id: "bruno",
  fullName: "Bruno Fujita",
  contact: {
    email: "brunofujita588@gmail.com",
    phone: "+55 51 98341 6643",
    location: "Sao Paulo, Brazil",
    linkedin: "https://linkedin.com/in/bruno-fujita-6a03343b6",
  },
  hero: {
    headline: "HELLO",
    subheadline:
      "Senior Full Stack Engineer building performant web and mobile experiences backed by robust APIs and cloud-native infrastructure.",
    role: "Senior Full Stack Software Engineer",
    avatarImage: undefined,
  },
  about: {
    heading: "Designing and shipping modern digital products.",
    paragraphs: [
      "With 7 years of experience across React, Next.js, React Native, Flutter, and modern backend stacks in Go, Node.js, and Python, I build products that feel fast, reliable, and easy to evolve.",
      "I focus on clear architecture, performance from database to UI, and strong observability, so teams can move quickly without sacrificing stability.",
    ],
  },
  experiences: [
    {
      role: "Senior Software Engineer",
      company: "Navigate360",
      companyDomain: "navigate360.com",
      period: "May 2025 – Present",
      location: "Remote",
      description:
        "Owning full‑stack delivery for React/Next.js web experiences and backend services in Go and Node.js, with a focus on performance, reliability, and developer experience.",
      achievements: [
        "Built and maintained REST and GraphQL APIs in Go and Node.js, consumed by React and React Native clients.",
        "Introduced Kafka-based activity streams and RabbitMQ queues for workflows where ordering and retries mattered.",
        "Improved PostgreSQL performance through index tuning, query plan review, and Redis caching of hot paths.",
        "Wired up AWS infrastructure including VPC/IAM, RDS, S3, Lambda, and Kubernetes workloads managed via Terraform.",
        "Tightened CI/CD with GitHub Actions and Jenkins, covering build, test, Docker image publishing, and rollout gates.",
        "Embedded observability in features using Prometheus, Grafana, and ELK for faster incident triage.",
        "Validated and hardened API contracts for mobile clients (React Native and Flutter) around pagination and error semantics.",
      ],
    },
    {
      role: "Senior Full-Stack Developer",
      company: "Ceiba Software",
      companyDomain: "ceiba.com.co",
      period: "Aug 2023 – Mar 2025",
      location: "Remote",
      description:
        "Delivered customer-facing web apps in React/Next.js and backend services in Node.js and Python, deployed onto AWS with Docker and Kubernetes.",
      achievements: [
        "Mixed SSR pages with SPA-style interactions in React/Next.js for both performance and rich UX.",
        "Built REST and GraphQL APIs in Node.js and Python, tuned for mobile and web consumers.",
        "Containerized microservices and automated deployments via Kubernetes and GitHub Actions.",
        "Improved dashboard performance by optimizing PostgreSQL and MongoDB queries and adding Redis caching.",
        "Implemented async workflows using Kafka and RabbitMQ, moving long-running tasks off request threads.",
        "Hardened OAuth2/JWT flows, RBAC rules, TLS configuration, and secrets management in CI/CD.",
        "Instrumented services with Prometheus, Grafana, and ELK to reduce time-to-diagnose for production incidents.",
      ],
    },
    {
      role: "Full Stack Engineer",
      company: "CESAR",
      companyDomain: "cesar.org.br",
      period: "Jan 2019 – Jun 2023",
      location: "Recife, Brazil",
      description:
        "Built and maintained web and mobile products across React, React Native, Flutter, Spring Boot, and Node.js for multiple client engagements.",
      achievements: [
        "Developed React frontends and introduced TailwindCSS to speed up UI prototyping.",
        "Owned REST APIs in Spring Boot and Node.js for web and mobile apps, including auth and data access layers.",
        "Shipped cross-platform mobile features in React Native and Flutter, pairing with Swift/Kotlin engineers when native changes were needed.",
        "Designed schemas and managed migrations across PostgreSQL, MySQL, and MongoDB.",
        "Used Redis for caching and lightweight queues, reducing load on primary databases.",
        "Implemented Kafka-based event streams and RabbitMQ queues for analytics and background processing.",
        "Deployed containerized apps with Docker, then moved teams toward Kubernetes for consistent environments.",
        "Built CI/CD pipelines in Jenkins and GitHub Actions to standardize testing and deployments.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Microsoft",
      companyDomain: "microsoft.com",
      period: "Sep 2018 – Nov 2019",
      location: "Remote",
      description:
        "Contributed to internal TypeScript/React tooling and Node.js services, learning large-scale codebase practices and deployment workflows.",
      achievements: [
        "Implemented React components with predictable state and test coverage using Jest.",
        "Helped maintain Node.js Express endpoints for internal tools, tested with Postman and automated checks.",
        "Profiled slow pages and reduced redundant network calls in TypeScript clients.",
        "Added lightweight Redis caching for repeated reads in dev services.",
        "Containerized a small service with Docker and validated it in a Kubernetes-based dev environment.",
        "Participated in CI pipelines in Jenkins and GitHub-based tooling, fixing flaky tests and tightening steps.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "PopCapacity",
      description:
        "Warehouse marketplace connecting businesses with ideal storage solutions, featuring advanced search and analytics.",
      url: "https://popcapacity.com/",
      category: "Logistics Platform",
      tech: ["React", "Next.js", "TypeScript"],
      featured: true,
    },
    {
      id: 2,
      title: "Assessiv",
      description:
        "Digital SAT preparation platform with practice tests, progress tracking, and analytics for students and organizations.",
      url: "https://assessiv.com/",
      category: "EdTech",
      tech: ["React", "Analytics"],
      featured: true,
    },
    {
      id: 3,
      title: "PTC Atlanta",
      description:
        "Professional services site for a property tax consulting firm, focused on clarity and trust for enterprise clients.",
      url: "https://ptcatlanta.com/",
      category: "Professional Services",
      tech: ["React", "CMS"],
      featured: false,
    },
    {
      id: 4,
      title: "PolitiFact",
      description:
        "Fact-checking platform delivering accurate political information with real-time verification and reporting tools.",
      url: "https://www.politifact.com/",
      category: "Media",
      tech: ["React", "CMS"],
      featured: true,
    },
    {
      id: 5,
      title: "AQuest",
      description:
        "Creative production and technology company website with immersive visuals and case studies.",
      url: "https://www.aquest.it/",
      category: "Creative Agency",
      tech: ["React", "Next.js"],
      featured: false,
    },
    {
      id: 6,
      title: "Exodus",
      description:
        "Cryptocurrency wallet and platform with a focus on usability, security, and multi-asset support.",
      url: "https://www.exodus.com/",
      category: "Crypto / Fintech",
      tech: ["React", "Next.js"],
      featured: true,
    },
  ],
  theme: "warm",
  sections: ["hero", "about", "projects", "experience", "contact"],
  heroVariant: "bento",
  projectsVariant: "grid",
  experienceVariant: "default",
  contactVariant: "default",
  bento: {
    globeRegion: "br",
  },
};

