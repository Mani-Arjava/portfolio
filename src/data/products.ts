import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "tap-time",
    image: "/image/tap-time.png",
    alt: "Tap Time Mockup",
    name: "Tap Time",
    subtitle: "Employee Time & Attendance Tracker",
    features: [
      "Staff check in/out with real-time tracking across all devices.",
      "Daily and salary-based reports for managers to monitor attendance.",
      "Full employee management with role-based access control.",
      "Available on web, iOS and Android for on-the-go access.",
    ],
    imageLeft: true,
  },
  {
    id: "goddard",
    image: "/image/goddard-webapp.png",
    alt: "Goddard Mockup",
    name: "Goddard",
    subtitle: "Daycare School Management Platform",
    features: [
      "Comprehensive student management for daycare administrators.",
      "Parent portal for real-time communication and updates.",
      "Staff scheduling and shift management tools.",
      "Integrated billing system for seamless fee collection.",
    ],
    imageLeft: false,
  },
];
