import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Software Engineer",
    company: "Arjava Technologies",
    location: "On-site",
    startDate: "Jan 2023",
    endDate: "Present",
    description: [
      "Design and build scalable backend systems and APIs, handling high-throughput workloads with clean, maintainable architecture.",
      "Drive system design decisions — defining service boundaries, data models, caching strategies, and infrastructure on Google Cloud Platform.",
      "Lead development of cross-platform mobile applications using Flutter, delivering apps for both Android and iOS from a single codebase.",
      "Mentor junior developers on backend and mobile best practices, conduct code reviews, and drive adoption of clean architecture patterns.",
    ],
    technologies: ["System Design", "Backend", "GCP", "Python", "Flutter", "Dart", "Kotlin", "Android"],
  },
  {
    id: "exp-2",
    role: "Full Stack Developer",
    company: "Arjava Technologies",
    location: "On-site",
    startDate: "Mar 2022",
    endDate: "Dec 2022",
    description: [
      "Built full-stack web applications using Java and Bootstrap, delivering responsive and user-friendly interfaces for client projects.",
      "Developed Android applications with Kotlin and Java, integrating REST APIs and implementing Material Design components.",
      "Set up data analytics dashboards using Google Data Studio to provide clients with actionable business insights.",
    ],
    technologies: ["Java", "Kotlin", "Android", "Bootstrap", "Google Data Studio", "JavaScript"],
  },
  {
    id: "exp-3",
    role: "Software Engineering Trainee",
    company: "Arjava Technologies",
    location: "On-site",
    startDate: "Aug 2021",
    endDate: "Feb 2022",
    description: [
      "Developed and maintained Android applications using Java and Android SDK, following MVVM architecture patterns.",
      "Built responsive web pages with HTML, CSS, and JavaScript, ensuring cross-browser compatibility.",
      "Collaborated with senior engineers to integrate cloud services and deploy applications on GCP.",
    ],
    technologies: ["Java", "Android SDK", "HTML", "CSS", "JavaScript", "GCP"],
  },
  {
    id: "exp-4",
    role: "Intern",
    company: "Arjava Technologies",
    location: "Remote",
    startDate: "Jun 2021",
    endDate: "Jul 2021",
    description: [
      "Assisted in developing mobile app prototypes and learned Android development fundamentals with Java.",
      "Gained hands-on experience with version control using Git and agile development workflows.",
    ],
    technologies: ["Java", "Android Studio", "Git", "HTML", "CSS"],
  },
];
