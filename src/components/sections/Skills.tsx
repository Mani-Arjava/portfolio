"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillIcon from "@/components/ui/SkillIcon";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/animations/StaggerContainer";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills & Technologies" subtitle="What I work with" />

        <StaggerContainer className="space-y-10" staggerDelay={0.15}>
          {skillCategories.map((category, catIdx) => {
            const colors = ["from-cyan-500/20", "from-blue-500/20", "from-purple-500/20", "from-green-500/20"];
            const borderColors = ["cyan-500/30", "blue-500/30", "purple-500/30", "green-500/30"];
            return (
              <motion.div
                key={category.name}
                variants={staggerItemVariants}
                className={`rounded-xl border border-white/10 bg-gradient-to-br ${colors[catIdx % 4]} to-white/[0.02] p-6 hover:border-${borderColors[catIdx % 4]} transition-all duration-300`}
              >
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {category.name}
                </h3>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <SkillIcon skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
