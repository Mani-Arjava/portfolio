"use client";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";
import GradientBlob from "@/components/ui/GradientBlob";

const taglines = [
  "Backend Engineer",
  "System Design Engineer",
  "Full-Stack Developer",
  "Mobile App Developer",
  "Flutter Developer",
  "Cloud & DevOps Engineer",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Decorative blobs */}
      <GradientBlob className="left-1/4 top-1/4 h-96 w-96 bg-blue-500" />
      <GradientBlob className="right-1/4 bottom-1/4 h-80 w-80 bg-purple-500" />

      <div className="relative z-10 max-w-4xl text-center">
        <motion.p
          className="mb-4 text-sm font-medium tracking-widest text-blue-400 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {siteConfig.name}
          <span className="text-blue-500">.</span>
        </motion.h1>

        <motion.div
          className="mb-8 h-10 text-xl text-gray-400 sm:text-2xl lg:text-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatedText texts={taglines} className="font-light" />
        </motion.div>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I design scalable backend systems and build full-stack applications.
          Specializing in system design, APIs, cloud infrastructure, Flutter,
          and mobile development with a passion for clean, performant code.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button variant="primary" size="lg" href="#projects">
            View My Work
          </Button>
          <Button variant="secondary" size="lg" href="#contact">
            Get In Touch
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-blue-400 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.6 },
          y: { delay: 1.2, duration: 1.5, repeat: Infinity },
        }}
        aria-label="Scroll to about section"
      >
        <FiArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
