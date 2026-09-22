"use client";

import { motion } from "framer-motion";
import { mentoringData } from "@/data/mentoring";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { Users, Award, BookOpen } from "lucide-react";

export default function Mentoring() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="mentoring" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Mentoring & Teaching" subtitle="Empowering the next generation" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 space-y-8"
        >
          {/* Main Card */}
          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group"
          >
            {/* AI Network visualization */}
            <motion.svg
              className="absolute top-4 right-4 w-64 h-64 text-cyan-400 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              viewBox="0 0 200 200"
              fill="none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.25 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {/* Central mentor node */}
              <motion.circle
                cx="100"
                cy="100"
                r="6"
                fill="currentColor"
                animate={{ r: [6, 8, 6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Student nodes */}
              {[
                { x: 50, y: 50, label: "Student 1" },
                { x: 150, y: 50, label: "Student 2" },
                { x: 50, y: 150, label: "Student 3" },
                { x: 150, y: 150, label: "Student 4" },
                { x: 100, y: 30, label: "Student 5" },
                { x: 100, y: 170, label: "Student 6" },
              ].map((node, idx) => (
                <g key={`student-${idx}`}>
                  {/* Connection line */}
                  <motion.line
                    x1="100"
                    y1="100"
                    x2={node.x}
                    y2={node.y}
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                  />

                  {/* Student node */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="3"
                    fill="currentColor"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                  />
                </g>
              ))}

              {/* Data flow animation */}
              {[0, 1, 2].map((flow) => (
                <motion.circle
                  key={`flow-${flow}`}
                  r="2"
                  fill="currentColor"
                  opacity="0.8"
                  animate={{
                    cx: [100, 150, 100],
                    cy: [100, 50, 100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: flow * 0.8,
                  }}
                />
              ))}
            </motion.svg>

            {/* Large background number */}
            <motion.div
              className="absolute top-0 left-0 text-[180px] font-mono font-bold text-cyan-400/5 select-none pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              50+
            </motion.div>
            {/* Header */}
            <div className="mb-8">
              <motion.div
                variants={itemVariants}
                className="flex items-start justify-between mb-4"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {mentoringData.role}
                  </h3>
                  <p className="text-cyan-400 font-semibold">
                    {mentoringData.organization}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">
                    {mentoringData.startDate} — {mentoringData.endDate}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Key Stats with animated arcs */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/10">
              <motion.div
                variants={itemVariants}
                className="rounded-lg bg-white/5 p-4 relative group/stat"
              >
                {/* Animated arc background */}
                <motion.svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                >
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(34, 211, 238, 0.2)"
                    strokeWidth="2"
                    strokeDasharray="141"
                    initial={{ strokeDashoffset: 141 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                </motion.svg>
                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    Students Mentored
                  </p>
                </div>
                <p className="text-3xl font-bold text-white relative z-10">
                  {mentoringData.studentsCount}+
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="rounded-lg bg-white/5 p-4 relative group/stat"
              >
                {/* Animated arc background */}
                <motion.svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                >
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(168, 85, 247, 0.2)"
                    strokeWidth="2"
                    strokeDasharray="141"
                    initial={{ strokeDashoffset: 141 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                  />
                </motion.svg>
                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    Technologies
                  </p>
                </div>
                <p className="text-3xl font-bold text-white relative z-10">
                  {mentoringData.technologies.length}
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="rounded-lg bg-white/5 p-4 relative group/stat"
              >
                {/* Animated arc background */}
                <motion.svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                >
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(34, 197, 94, 0.2)"
                    strokeWidth="2"
                    strokeDasharray="141"
                    initial={{ strokeDashoffset: 141 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </motion.svg>
                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <Award className="w-5 h-5 text-green-400" />
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    Achievements
                  </p>
                </div>
                <p className="text-3xl font-bold text-white relative z-10">
                  {mentoringData.achievements.length}
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div variants={itemVariants} className="mb-8 space-y-3">
              {mentoringData.description.map((desc, idx) => (
                <motion.p
                  key={idx}
                  variants={itemVariants}
                  className="text-gray-300 leading-relaxed"
                >
                  {desc}
                </motion.p>
              ))}
            </motion.div>

            {/* Technologies */}
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Technologies & Skills Taught
              </h4>
              <div className="flex flex-wrap gap-2">
                {mentoringData.technologies.map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge>{tech}</Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {mentoringData.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
