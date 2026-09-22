"use client";

import { motion } from "framer-motion";
import { Terminal, GraduationCap } from "lucide-react";
import { experiences } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

const ElegantConnector = ({ index }: { index: number }) => {
  return (
    <svg
      className="absolute -left-8 w-8 top-0 bottom-0 pointer-events-none"
      viewBox="0 0 30 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`connector-grad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(34, 211, 238, 0.8)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
        </linearGradient>
      </defs>

      {/* Elegant connector line from left side */}
      <motion.line
        x1="25"
        y1="0"
        x2="25"
        y2="100"
        stroke={`url(#connector-grad-${index})`}
        strokeWidth="2"
        initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Connection point circle */}
      <motion.circle
        cx="25"
        cy="0"
        r="4"
        fill="rgb(34, 211, 238)"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      />
    </svg>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Experience" subtitle="Where I've worked" />

        {/* Professional timeline layout */}
        <div className="relative mt-16 space-y-8">
          {experiences.map((exp, idx) => {
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-8 group"
              >
                {/* Left connector line */}
                {idx > 0 && (
                  <div className="absolute -left-4 top-0 w-0.5 h-full bg-gradient-to-b from-cyan-500/0 via-cyan-400/60 to-cyan-500/0" />
                )}

                {/* Connector circle at top */}
                <motion.div
                  className="absolute -left-3.5 -top-1 w-5 h-5 rounded-full border-2 border-cyan-400 bg-slate-900 group-hover:border-cyan-300 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                  transition={{ duration: 0.3 }}
                />

                {/* Professional card */}
                <motion.div
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="relative group cursor-pointer"
                >
                  {/* Card border glow */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-cyan-500/20 blur opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Card background */}
                  <motion.div
                    className="relative rounded-lg border border-cyan-500/30 bg-slate-900/50 p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all"
                    animate={{
                      borderColor: [
                        "rgba(34, 211, 238, 0.3)",
                        "rgba(34, 211, 238, 0.4)",
                        "rgba(34, 211, 238, 0.3)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Date badge and role icon */}
                      <motion.div
                        className="mb-3 flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <span className="text-xs font-mono text-cyan-400">
                          ◆ {exp.startDate} – {exp.endDate}
                        </span>
                        {idx === 0 ? (
                          <Terminal className="w-4 h-4 text-cyan-400" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-cyan-400" />
                        )}
                      </motion.div>

                      {/* Current badge for first role */}
                      {idx === 0 && (
                        <motion.div
                          className="mb-3 inline-block text-xs px-2.5 py-1 rounded-full border border-green-500/50 bg-green-500/10 text-green-400 font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.12, duration: 0.3 }}
                        >
                          Currently working
                        </motion.div>
                      )}

                      {/* Role - prominent title */}
                      <motion.h3
                        className="mb-1 text-2xl font-bold text-white"
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        {exp.role}
                      </motion.h3>

                      {/* Company and location */}
                      <motion.div
                        className="mb-4 flex items-center gap-2 text-sm text-cyan-300/80"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="font-semibold">{exp.company}</span>
                        <span className="text-gray-600">•</span>
                        <span>{exp.location}</span>
                      </motion.div>

                      {/* Description - clean bullets */}
                      <motion.ul
                        className="mb-5 space-y-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                      >
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            className="flex gap-2.5 text-sm text-gray-300 leading-relaxed"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 + i * 0.05 }}
                          >
                            <span className="text-cyan-400 mt-1.5 shrink-0">●</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>

                      {/* Tech stack badges */}
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                      >
                        {exp.technologies.map((tech, i) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.35 + i * 0.05 }}
                          >
                            <Badge>{tech}</Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
