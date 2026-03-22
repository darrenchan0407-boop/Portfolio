import type { Portfolio } from "../portfolio-types";

export const juanPortfolio: Portfolio = {
  id: "juan",
  fullName: "Juan David Sereno",
  contact: {
    email: "davidsereno278@gmail.com",
    phone: "+57 322 3040416",
    location: "Zipaquirá, Cundinamarca, Colombia",
    linkedin: "https://linkedin.com/in/juan-david-sereno",
    timezone: "America/Bogota",
  },
  hero: {
    headline: "HELLO",
    subheadline:
      "Senior Full Stack Software Engineer with 4 years of experience designing, building, and maintaining web and mobile applications using React, Next.js, TypeScript, HTML5, CSS3, TailwindCSS, and mobile stacks like React Native, Flutter, Swift, and Kotlin.",
    role: "Senior Full Stack Software Engineer",
    avatarImage: undefined,
  },
  about: {
    heading: "Building robust, scalable, and friendly digital products.",
    paragraphs: [
      "I’ve shipped backend services and REST/GraphQL APIs with Go (Golang), Node.js (Express), Python (Django/Flask), and Java (Spring Boot), backed by PostgreSQL/MySQL/MongoDB/Redis with hands-on query tuning and migrations.",
      "Comfortable running event-driven work with Kafka and RabbitMQ, and taking features end-to-end through Docker, Kubernetes, GitHub Actions/Jenkins, and Terraform on AWS/GCP/Azure.",
      "Known for digging into performance and reliability (observability with Prometheus/Grafana/ELK), tightening security (OAuth2/JWT/RBAC/TLS), and landing improvements that reduced latency by ~30% and cut deployment touch time by ~50%."
    ],
  },
  experiences: [
    {
      role: "Sr Full Stack Engineer / Consultant",
      company: "CloudNova Technologies",
      companyDomain: "cloudnova.com",
      period: "Jan 2024 - Dec 2025",
      location: "Remote",
      description: "Owned full-stack delivery for web and mobile workflows: React + Next.js (TypeScript) on the frontend, and Go (Golang) + Node.js (Express) services behind a REST API gateway.",
      achievements: [
        "Built mobile-facing APIs in Go (Golang) and Python (FastAPI/Flask-style services) for React Native and Flutter clients; kept payloads small and predictable so app screens stayed fast on spotty networks.",
        "Put together a GraphQL layer for a couple of high-churn client experiences, which cut down round-trips from React/Next.js and made versioning less painful than REST-only.",
        "Wired up Kafka streams for async jobs (notifications, analytics events) and used RabbitMQ where we needed simpler work queues and retries.",
        "PostgreSQL schema work was mine end-to-end—migrations, indexing, and query plans; tuned a few hot paths and saw ~30% lower p95 API latency in production.",
        "Used MongoDB with clear index strategies; cached read-heavy endpoints with Redis to stabilize spikes during marketing pushes.",
        "Shipped containerized services with Docker and Kubernetes; fixed rollout config issues (e.g., missing readinessProbe).",
        "Set up CI/CD with GitHub Actions and Jenkins: lint/test/build, Docker image publishing, and automated deploys; reduced manual release steps by ~50%.",
        "Infrastructure work included Terraform for AWS VPC layout and IAM policies; also touched serverless with AWS Lambda for lightweight webhook handlers and cron-style tasks.",
        "Tightened auth flows using OAuth2 + JWT, with RBAC at the service layer; rotated secrets through a secrets management flow and enforced TLS everywhere we terminated traffic.",
        "Monitoring/observability: added Prometheus metrics, Grafana dashboards, and ELK logging; used tracing to isolate a slow downstream dependency impacting Next.js SSR.",
        "Testing: Jest for React/Next.js, Go testing for handlers/services, and PyTest where Python made sense; ran Postman collections in CI for smoke checks.",
        "Mobile work included React Native feature delivery and Flutter UI iterations; collaborated with iOS (Swift) and Android (Kotlin) teammates on API contracts and release timing.",
        "Integrated third-party APIs (payments, messaging, analytics) with solid backoff/rate-limit handling; built idempotency into Node.js/Express endpoints to avoid double-charging.",
        "Mentored 2 junior engineers through code reviews across TypeScript and Go, focused on readable PRs, safer migrations, and predictable API error contracts."
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "Pacific Web Labs",
      companyDomain: "pacificweblabs.com",
      period: "Sep 2022 - Dec 2023",
      location: "Remote",
      description: "Shipped customer-facing web features in React and Next.js with TypeScript, using TailwindCSS for consistent UI and quicker iteration with design.",
      achievements: [
        "Built and maintained REST APIs in Node.js (Express) and Python (Django/Flask) that were consumed by both the Next.js web app and React Native mobile screens.",
        "Took on a Go (Golang) service for high-throughput endpoints; kept handlers tight and added Go testing coverage for the core business logic.",
        "Introduced GraphQL for a composite ‘dashboard’ view to reduce over-fetching from React and make client development smoother as requirements changed.",
        "PostgreSQL was the main system of record—wrote migrations, normalized schemas, and cleaned up slow queries with indexes and better join patterns.",
        "Added Redis caching for expensive reads and short-lived session-like data; improved perceived performance on a few heavy pages in Next.js.",
        "Worked with MongoDB for event/analytics documents and wrote data backfills in Python when tracking schemas shifted.",
        "Event-driven processing: used RabbitMQ for background jobs (emails, exports) and experimented with Kafka for streaming analytics events into downstream consumers.",
        "CI/CD: maintained GitHub Actions pipelines for TypeScript/Jest + Docker builds; deployments ran through Kubernetes with basic autoscaling rules for peak loads.",
        "Drove infrastructure changes in AWS (VPC networking basics, IAM permissions) and used Terraform for repeatable environments across staging and production.",
        "Security work included OAuth2 + JWT for user sessions, RBAC checks in Node.js middleware, and TLS configuration for public endpoints.",
        "Kept a close eye on production: instrumented services with Prometheus metrics and Grafana dashboards, and centralized logs into ELK for faster incident triage."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Virtual Andes Digital Marketing & IT Solutions OPC",
      companyDomain: "virtualandes.com",
      period: "May 2021 - Aug 2022",
      location: "Zipaquirá, Colombia",
      description: "Built responsive web apps with React (TypeScript), HTML5, and CSS3; used TailwindCSS where it sped up consistent landing pages and admin views.",
      achievements: [
        "Delivered backend endpoints with Node.js (Express) and Python (Django/Flask) for CRM-style features, lead capture flows, and content management REST APIs.",
        "Put together a small Java Spring Boot service for integrations where the client ecosystem already leaned Java; documented endpoints with Swagger/OpenAPI.",
        "Worked hands-on with PostgreSQL and MySQL: schema design, migrations, and query tuning; fixed a couple of slow reports by adding indexes and rewriting joins.",
        "Used MongoDB for flexible marketing/event payloads and set up TTL-style patterns where data had a clear retention window.",
        "Added Redis for caching and rate limiting on a few public-facing endpoints to keep traffic bursts from taking down the app.",
        "Implemented basic event-driven flows with RabbitMQ for async email sends and long-running exports; kept retries and dead-letter handling simple and reliable.",
        "Containerized services using Docker and ran them in Kubernetes for consistent dev/stage parity; learned quickly where resource limits were too tight and caused restarts.",
        "Wired up CI/CD with Jenkins for build/test/deploy; later migrated parts of the flow to GitHub Actions for faster feedback on TypeScript and Jest test runs.",
        "Integrated third-party APIs (ads platforms, analytics, and messaging) with careful error handling, timeouts, and Postman collections for regression testing.",
        "Security: implemented OAuth2/JWT-based auth where applicable, enforced RBAC in server routes, used TLS for external traffic, and handled secrets management via environment-level controls.",
        "Helped the team debug performance issues using logs shipped into an ELK-style stack, then added a few Prometheus metrics so we could see bottlenecks before customers did."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Popcapacity",
      description: "A platform for optimizing warehouse and logistics operations.",
      url: "https://popcapacity.com/",
      tech: ["React", "Next.js", "TypeScript", "Node.js", "Go", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Assessiv",
      description: "Assessment and analytics platform for education and HR.",
      url: "https://assessiv.com/",
      tech: ["React", "Next.js", "TypeScript", "Node.js", "Python", "MongoDB"]
    },
    {
      id: 3,
      title: "PTC Atlanta",
      description: "Professional training and certification services.",
      url: "https://ptcatlanta.com/",
      tech: ["React", "Next.js", "TypeScript", "Node.js", "Python"]
    },
    {
      id: 4,
      title: "PolitiFact",
      description: "Fact-checking and journalism platform.",
      url: "https://www.politifact.com/",
      tech: ["React", "Next.js", "TypeScript", "Node.js", "Python"]
    },
    {
      id: 5,
      title: "Lucid Care",
      description: "Healthcare and patient management platform.",
      url: "https://lucid.care/",
      tech: ["React", "Next.js", "TypeScript", "Node.js", "Python"]
    },
    {
      id: 6,
      title: "Green Rabbit Game",
      description: "Blockchain-based gaming platform.",
      url: "https://www.greenrabbitgame.io/",
      tech: ["React", "Next.js", "TypeScript", "Node.js", "Go"]
    },
    {
      id: 7,
      title: "Babypage",
      description: "Parenting and baby milestone tracking app.",
      url: "https://babypage.com/",
      tech: ["React", "Next.js", "TypeScript", "Node.js", "Python"]
    }
  ],
  theme: "warm",
  sections: ["hero", "about", "experience", "projects", "contact"],
  heroVariant: "bento",
  projectsVariant: "grid",
  experienceVariant: "default",
  contactVariant: "default",
  bento: {
    philosophyLead: "Interfaces you can feel.",
    showcaseTitle: "Founder of",
    showcaseGradientWord: "Rune",
    showcaseSubtitle: "Crafting digital experiences",
    globeRegion: "co",
  },
};
