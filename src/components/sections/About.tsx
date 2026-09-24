"use client";

import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { aboutData } from "@/data/about";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TypewriterText from "@/components/ui/TypewriterText";
import LaptopAnimation from "@/components/ui/LaptopAnimation";
import type { Stat } from "@/types";

function AnimatedStat({ stat, inView }: { stat: Stat; inView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      animate(count, stat.value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, count, stat.value]);

  return (
    <motion.div
      className="text-center p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:border-cyan-500/20 transition-all"
      whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.3)" }}
    >
      <div className="text-3xl font-bold text-white sm:text-4xl">
        <motion.span>{rounded}</motion.span>
        {stat.suffix && <span className="text-cyan-500">{stat.suffix}</span>}
      </div>
      <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={aboutData.title} subtitle={aboutData.subtitle} />

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="left">
            <LaptopAnimation />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="text-xs font-mono text-cyan-500/60 mb-4">// bio.txt</div>
              {aboutData.description.map((p, i) => (
                <div key={i}>
                  <TypewriterText
                    text={p}
                    delay={i * 400}
                    speed={20}
                    className="leading-relaxed text-gray-400"
                  />
                  {i < aboutData.description.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-cyan-500/20 via-transparent to-transparent mt-4" />
                  )}
                </div>
              ))}
            </div>

            <div ref={ref} className="mt-8 grid grid-cols-3 gap-6">
              {aboutData.stats.map((stat) => (
                <AnimatedStat key={stat.label} stat={stat} inView={inView} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
