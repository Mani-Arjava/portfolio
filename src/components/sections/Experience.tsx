"use client";

import { experiences } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import StaggerContainer from "@/components/animations/StaggerContainer";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Experience" subtitle="Where I've worked" />

        <StaggerContainer className="relative" staggerDelay={0.2}>
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} experience={exp} index={i} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
