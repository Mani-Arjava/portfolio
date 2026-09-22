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
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 hover:border-blue-500/30 transition-all duration-300"
          >
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
                  <p className="text-blue-400 font-semibold">
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

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 pb-8 border-b border-white/10">
              <motion.div
                variants={itemVariants}
                className="rounded-lg bg-white/5 p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    Students Mentored
                  </p>
                </div>
                <p className="text-3xl font-bold text-white">
                  {mentoringData.studentsCount}+
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="rounded-lg bg-white/5 p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    Technologies
                  </p>
                </div>
                <p className="text-3xl font-bold text-white">
                  {mentoringData.technologies.length}
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="rounded-lg bg-white/5 p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-green-400" />
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    Achievements
                  </p>
                </div>
                <p className="text-3xl font-bold text-white">
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
                    <span className="text-blue-400 mt-1 flex-shrink-0">✓</span>
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
