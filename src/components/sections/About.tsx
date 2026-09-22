"use client";

import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { aboutData } from "@/data/about";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";
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
    <div className="text-center">
      <div className="text-3xl font-bold text-white sm:text-4xl">
        <motion.span>{rounded}</motion.span>
        {stat.suffix && <span className="text-cyan-500">{stat.suffix}</span>}
      </div>
      <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={aboutData.title} subtitle={aboutData.subtitle} />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:mx-0">
              <Image
                src={aboutData.image}
                alt={aboutData.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-4">
              {aboutData.description.map((p, i) => (
                <p key={i} className="leading-relaxed text-gray-400">
                  {p}
                </p>
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
