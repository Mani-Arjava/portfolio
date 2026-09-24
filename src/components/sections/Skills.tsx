"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillIcon from "@/components/ui/SkillIcon";
import ServerVisualization from "@/components/ui/ServerVisualization";
import StaggerContainer, {
  staggerItemVariants,
} from "@/components/animations/StaggerContainer";

const circuitPatternSVG = (opacity: string) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg stroke='%2322d3ee' stroke-width='1' fill='none' opacity='${opacity}'%3E%3Cline x1='10' y1='10' x2='70' y2='10'/%3E%3Cline x1='70' y1='10' x2='70' y2='70'/%3E%3Cline x1='70' y1='70' x2='10' y2='70'/%3E%3Cline x1='10' y1='70' x2='10' y2='10'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='70' cy='10' r='2'/%3E%3Ccircle cx='70' cy='70' r='2'/%3E%3Ccircle cx='10' cy='70' r='2'/%3E%3C/g%3E%3C/svg%3E`;

export default function Skills() {
  const proficiencyConfig = [
    { label: "Expert", className: "border-green-400/30 text-green-300 bg-green-400/5" },
    { label: "Proficient", className: "border-blue-400/30 text-blue-300 bg-blue-400/5" },
    { label: "Familiar", className: "border-gray-400/30 text-gray-300 bg-gray-400/5" },
    { label: "Familiar", className: "border-gray-400/30 text-gray-300 bg-gray-400/5" },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills & Technologies" subtitle="What I work with" />

        {/* Server Infrastructure Visualization */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ServerVisualization />
        </motion.div>

        <div className="relative">
          {/* Connector spine line on desktop */}
          <motion.div
            className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/0 via-cyan-400/60 to-cyan-500/0"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ transformOrigin: "top" }}
          />

          <StaggerContainer className="space-y-10 relative z-10" staggerDelay={0.15}>
            {skillCategories.map((category, catIdx) => {
              const colors = ["from-cyan-500/20", "from-blue-500/20", "from-cyan-500/20", "from-blue-500/20"];
              const borderColors = ["cyan-500/40", "blue-500/40", "cyan-500/40", "blue-500/40"];
              const proficiency = proficiencyConfig[catIdx];

              return (
                <motion.div
                  key={category.name}
                  variants={staggerItemVariants}
                  className={`rounded-xl border border-white/10 bg-gradient-to-br ${colors[catIdx % 4]} to-white/[0.02] p-6 hover:border-${borderColors[catIdx % 4]} transition-all duration-300 relative group overflow-hidden`}
                  style={{
                    backgroundImage: `url('${circuitPatternSVG("0.03")}')`,
                    backgroundPosition: "top right",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "200px 200px",
                  }}
                >
                  {/* Left connector circle on desktop */}
                  <motion.div
                    className="hidden lg:block absolute -left-[14px] top-6 w-6 h-6 rounded-full border-2 border-cyan-400 bg-slate-900 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  />

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      {category.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full border font-medium ${proficiency.className}`}>
                      {proficiency.label}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 relative z-10">
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
      </div>
    </section>
  );
}
