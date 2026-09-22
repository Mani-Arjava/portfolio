"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { staggerItemVariants } from "@/components/animations/StaggerContainer";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/types";

const gradients = [
  "from-cyan-500/30 to-blue-500/20",
  "from-purple-500/30 to-pink-500/20",
  "from-green-500/30 to-teal-500/20",
  "from-orange-500/30 to-red-500/20",
  "from-violet-500/30 to-purple-500/20",
  "from-emerald-500/30 to-cyan-500/20",
  "from-indigo-500/30 to-blue-500/20",
];

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const isFeatured = index < 4;
  const gradientClass = gradients[index % gradients.length];

  return (
    <motion.div
      variants={staggerItemVariants}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.08] flex flex-col h-full cursor-pointer"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br flex-shrink-0"
        style={{backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`}}
      >
        {/* Featured badge */}
        {isFeatured && (
          <motion.div
            className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full border border-cyan-400/50 bg-cyan-500/20 text-xs font-bold text-cyan-300 backdrop-blur"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            ⭐ Featured
          </motion.div>
        )}

        {/* Scan-line animation on hover */}
        <motion.div
          className="absolute inset-0 h-1 bg-gradient-to-b from-cyan-400/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100"
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
        />

        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          priority={false}
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-400 line-clamp-2 flex-grow">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-cyan-400"
              aria-label={`View ${project.title} source code`}
            >
              <FiGithub className="h-4 w-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-cyan-400"
              aria-label={`View ${project.title} live demo`}
            >
              <FiExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
