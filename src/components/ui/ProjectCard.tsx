"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { staggerItemVariants } from "@/components/animations/StaggerContainer";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.08]"
    >
      <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
        <div className="flex h-full items-center justify-center text-sm text-gray-500">
          {project.title}
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-blue-400"
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
              className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-blue-400"
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
