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
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={staggerItemVariants}>
              <h3 className="mb-4 text-lg font-semibold text-white">
                {category.name}
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                {category.skills.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
