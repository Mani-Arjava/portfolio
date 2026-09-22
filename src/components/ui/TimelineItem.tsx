"use client";

import { motion } from "framer-motion";
import { staggerItemVariants } from "@/components/animations/StaggerContainer";
import Badge from "@/components/ui/Badge";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div variants={staggerItemVariants} className="relative flex gap-6 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-[19px] top-10 h-full w-px bg-white/10 last:hidden" />

      {/* Dot */}
      <motion.div
        className="relative z-10 mt-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-cyan-500 bg-[#0a0a0a]"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <motion.div
          className="h-3 w-3 rounded-full bg-cyan-500"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex-1 rounded-xl border border-white/10 bg-white/5 p-6 hover:border-cyan-500/30 transition-all"
        whileHover={{ borderColor: "rgba(34, 211, 238, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
      >
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-cyan-400">
            {experience.startDate} — {experience.endDate}
          </span>
          <span className="text-sm text-gray-500">• {experience.location}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{experience.role}</h3>
        <p className="mb-3 text-base font-medium text-gray-300">
          {experience.company}
        </p>
        <ul className="mb-4 space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed text-gray-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/60" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
