"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-16 text-center">
      <p className="mb-2 text-sm font-medium tracking-widest text-blue-400 uppercase">
        {subtitle}
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-500" />
    </ScrollReveal>
  );
}
