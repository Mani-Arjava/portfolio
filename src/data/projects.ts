import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "CrossPlatform Store",
    description:
      "A cross-platform e-commerce app built with Flutter and Dart, featuring product browsing, cart management, and secure checkout. Runs natively on both Android and iOS from a single codebase.",
    image: "/images/project-1.jpg",
    technologies: ["Flutter", "Dart", "GCP", "REST API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "proj-2",
    title: "FitTrack Android",
    description:
      "A native Android fitness tracking app built with Kotlin, featuring workout logging, progress charts, and Google Fit integration. Uses MVVM architecture and Material Design 3.",
    image: "/images/project-2.jpg",
    technologies: ["Kotlin", "Android SDK", "Jetpack Compose", "Room DB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Inventory Manager",
    description:
      "A full-stack inventory management system with a Java backend and Bootstrap frontend. Features real-time stock updates, barcode scanning, and role-based access control.",
    image: "/images/project-3.jpg",
    technologies: ["Java", "Bootstrap", "PostgreSQL", "REST API"],
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "proj-4",
    title: "CloudTask API",
    description:
      "A scalable task management backend service deployed on Google Cloud Platform. Features Cloud Functions, Firestore integration, and automated CI/CD pipelines.",
    image: "/images/project-4.jpg",
    technologies: ["Python", "GCP", "Cloud Functions", "Firestore"],
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "proj-5",
    title: "MediConnect iOS",
    description:
      "A healthcare appointment booking app built with Flutter for iOS. Features doctor search, real-time scheduling, push notifications, and secure patient data handling.",
    image: "/images/project-5.jpg",
    technologies: ["Flutter", "Dart", "iOS", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "proj-6",
    title: "Analytics Dashboard",
    description:
      "A web-based data analytics dashboard inspired by Google Data Studio. Provides interactive charts, custom report generation, and Google Ads campaign performance tracking.",
    image: "/images/project-6.jpg",
    technologies: ["JavaScript", "Bootstrap", "Google Analytics", "Python"],
    githubUrl: "https://github.com",
    featured: false,
  },
];
