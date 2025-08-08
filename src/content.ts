export type SocialLink = {
  label: "Email" | "LinkedIn" | "GitHub" | "X" | "Website" | string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string; // e.g. "Jan 2022"
  end: string; // e.g. "Present" or "Dec 2023"
  location?: string;
  summary?: string;
  highlights?: string[];
  technologies?: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  technologies?: string[];
  link?: string;
  repo?: string;
  image?: string; // path under public/
};

export type TimelineItem = {
  title: string;
  period: string;
  description?: string;
  technologies?: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  start: string;
  end: string;
  location?: string;
  details?: string[];
  images?: string[]; // Array of image paths for thesis documentation
  thesisLink?: string; // Link to the thesis document
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProfileContent = {
  name: string;
  role: string;
  location?: string;
  summary: string;
  email?: string;
  socials: SocialLink[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  languages?: string[];
  profileImage?: string; // remote URL or /public path
  bannerImage?: string; // remote URL or /public path
  timeline?: TimelineItem[];
};

// NOTE: We could not fetch LinkedIn details automatically due to access restrictions.
// Update the placeholders below with your actual data, or share a resume and we can auto-fill.
export const profile: ProfileContent = {
  name: "Michal Sousedík",
  role: "Senior Frontend Engineer (Angular, TypeScript, NgRx, Nx)",
  location: "Prague, Czechia",
  summary:
    "Impact‑driven frontend engineer specializing in Angular, TypeScript, RxJS, NgRx, and Nx monorepos. I build robust, accessible, and scalable web apps with clear architecture and strong state management. I enjoy turning complex domain rules into elegant UIs, establishing team standards, and mentoring engineers.",
  email: "",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/michal-soused%C3%ADk-9a4b87144/" },
  ],
  profileImage: "https://i.pravatar.cc/240?u=michal.sousedik",
  bannerImage: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000&auto=format&fit=crop",
  skills: [
    { title: "Top skills", items: ["Angular", "TypeScript", "RxJS", "NgRx", "Nx"] },
    { title: "Testing/Quality", items: ["Cypress", "Jasmine", "JUnit", "CI/CD"] },
    { title: "Backend", items: ["Java", "Spring", "Spring Boot", "REST", "Hibernate"] },
    { title: "Data/DB", items: ["SQL", "Oracle"] },
    {
      title: "Architecture",
      items: [
        "Event Sourcing",
        "State Management",
        "Monorepos",
        "System Architecture",
        "Requirements Analysis",
        "UML",
      ],
    },
    { title: "Tools", items: ["Git", "Maven"] },
  ],
  experience: [
    {
      company: "Commerzbank AG",
      role: "Frontend Developer",
      start: "Oct 2020",
      end: "Present",
      location: "Prague, Czechia",
      summary:
        "Designed and delivered core frontend capabilities for digital account opening and platform-wide state management in an Nx monorepo.",
      highlights: [
        "Designed and implemented the frontend for the digital account opening process",
        "Co‑created a dynamic form engine enabling configurable, multi‑step flows",
        "Built an event‑sourced, state‑centric solution across an Nx monorepo",
        "Established architectural guidelines and code quality practices",
        "Interviewed candidates and mentored newcomers for faster onboarding",
      ],
      technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "Nx", "Cypress", "Jasmine", "REST"],
    },
    {
      company: "Commerzbank AG",
      role: "Full Stack Engineer",
      start: "Dec 2018",
      end: "Oct 2020",
      location: "Prague, Czechia",
      summary:
        "Built features across Angular frontends and Spring Boot backends for KYC and client offboarding workflows.",
      highlights: [
        "Developed modules for a Know Your Customer (KYC) application",
        "Designed the architecture of Angular apps with a Spring Boot backend for client offboarding",
        "Implemented REST APIs, data models, and automated testing",
      ],
      technologies: ["Angular", "TypeScript", "Spring", "Spring Boot", "REST", "Oracle", "Hibernate", "Maven", "JUnit"],
    },
    {
      company: "Commerzbank AG",
      role: "Java Developer",
      start: "Jul 2017",
      end: "Oct 2020",
      location: "Prague, Czechia",
      summary:
        "Delivered backend modules and internal reporting, modernized legacy stacks, and optimized data‑heavy processing.",
      highlights: [
        "Designed and developed modules for a cash‑flow monitoring system",
        "Migrated the application from Java 6/JSF to Java 8/PrimeFaces",
        "Implemented an engine for generating data‑intensive Excel reports",
        "Developed a multithreaded solution for efficiently loading complex data tables",
      ],
      technologies: ["Java", "Spring", "Hibernate", "JSF", "PrimeFaces", "Maven", "JUnit", "Oracle", "SQL"],
    },
  ],
  projects: [
    // Example:
    // {
    //   name: "Project Name",
    //   description: "One-line value-focused description.",
    //   technologies: ["Next.js", "TypeScript", "Tailwind"],
    //   link: "https://example.com",
    //   repo: "https://github.com/username/repo",
    //   image: "/projects/example.png",
    // },
  ],
  education: [
    {
      school: "Czech Technical University in Prague",
      degree: "Master's degree, Computer Software Engineering",
      start: "2018",
      end: "2020",
      location: "Prague, Czechia",
      details: [
        "Developed a native iOS application for employee management in small and medium-sized enterprises",
        "Technology Stack: Swift programming language for modern, safe iOS development",
        "Architecture: Implemented MVVM (Model-View-ViewModel) pattern for clean separation of UI code from business logic and data management",
        "Navigation: Designed coordinator pattern for modular navigation control between screens without cluttering ViewControllers",
        "Backend Integration: Built REST API communication layer for JSON data handling (employees, invoices, profiles, and related resources)",
        "UI/UX: Created native UIKit components with custom animations and role-based UI design tailored to each user role",
        "Testing: Established comprehensive testing suite including unit tests for ViewModels, UI tests for interface correctness, and heuristic evaluations for usability",
        "Scalability: Ensured the technology stack and architectural choices support scalability, maintainability, and smooth user experience",
      ],
      images: [
        "/thesis-images/sequence-diagram-authorization.png",
        "/thesis-images/ios-app-prototypes.png", 
        "/thesis-images/ios-app-screenshots.png"
      ],
      thesisLink: "https://dspace.cvut.cz/bitstream/handle/10467/92929/F8-DP-2021-Sousedik-Michal-thesis.pdf?sequence=-1&isAllowed=y",
    },
    {
      school: "Czech Technical University in Prague",
      degree: "Bachelor's degree, Faculty of Information Technology",
      start: "2015",
      end: "2018",
      location: "Prague, Czechia",
      details: [
        "Bachelor's Thesis (2018) – Android Application for DayWork.cz",
        "Developed and implemented two core Android modules for the DayWork.cz platform:",
        "• Job Listings: Displaying part-time opportunities, profile editing, and filtering tools for job-seekers",
        "• Chat & Sync: Real-time messaging and data synchronization between workers and employers",
        "Delivered a polished, production-ready application integrated into the main DayWork.cz app, showcasing strong skills in Android development, UI/UX, and client–server communication",
        "Researched modern approaches to business process modeling and automation",
        "Designed UML diagrams for complex business workflows",
        "Implemented prototype system using Java and Spring Framework",
        "Analyzed requirements gathering and system architecture patterns",
      ],
      thesisLink: "https://dspace.cvut.cz/bitstream/handle/10467/76829/F8-BP-2018-Sousedik-Michal-thesis.pdf?sequence=-1&isAllowed=y",
    },
  ],
  languages: ["English", "Czech"],
  timeline: [
    {
      title: "Frontend Developer — Commerzbank AG",
      period: "Oct 2020 → Present",
      description: "Designed and implemented the frontend application for the account opening process. Co-created an engine for generating dynamic forms. Developed a scalable event-sourced solution based on the Nx monorepo architecture. Established architectural guidelines for the development team. Conducted interviews for job applicants. Provided mentorship and guidance to newcomers, assisting them in their onboarding and learning process.",
      technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "Nx", "Cypress", "Jasmine", "REST"],
    },
    {
      title: "Full Stack Engineer — Commerzbank AG",
      period: "Dec 2018 → Oct 2020",
      description: "Developed modules for a Know Your Customer (KYC) application. Designed the architecture of Angular-based applications with a Spring Boot backend for the offboarding process of existing clients.",
      technologies: ["Angular", "TypeScript", "Spring", "Spring Boot", "REST", "Oracle", "Hibernate", "Maven", "JUnit"],
    },
    {
      title: "Java Developer — Commerzbank AG",
      period: "Jul 2017 → Oct 2020",
      description: "Designed and developed modules for a cash flow monitoring system. Successfully migrated the application from Java 6 and JSF to Java 8 and Primefaces. Implemented an engine for generating data-intensive Excel reports. Developed a multithreaded solution for efficiently loading complex data tables.",
      technologies: ["Java", "Spring", "Hibernate", "JSF", "PrimeFaces", "Maven", "JUnit", "Oracle", "SQL"],
    },
  ],
};


