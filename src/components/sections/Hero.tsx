"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { siteConfig } from "@/data/siteConfig";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";
import GradientBlob from "@/components/ui/GradientBlob";
import TerminalWindow from "@/components/ui/TerminalWindow";

const taglines = [
  "Backend Engineer",
  "System Design Expert",
  "Full-Stack Developer",
  "Mobile App Developer",
  "Flutter Developer",
  "Cloud & DevOps Engineer",
];

const socialIcons = [
  { icon: FiGithub, href: "https://github.com/Mani-Arjava", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/mani-rr-b93397201/", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://x.com/Mani_feel_bad", label: "Twitter" },
  { icon: FiMail, href: "mailto:pitchumaniece@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Decorative blobs */}
      <GradientBlob className="left-1/4 top-1/4 h-96 w-96 bg-cyan-500 opacity-12" />
      <GradientBlob className="right-1/4 bottom-1/4 h-80 w-80 bg-cyan-600 opacity-12" />

      <div className="relative z-10 grid grid-cols-1 gap-12 max-w-6xl lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          {/* Available indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-3 w-3 rounded-full bg-green-500 inline-block"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-5xl font-bold text-white sm:text-6xl lg:text-7xl"
          >
            {siteConfig.name}
            <span className="text-cyan-400">.</span>
          </motion.h1>

          {/* Typewriter tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 h-10 text-xl text-gray-400 sm:text-2xl lg:text-3xl"
          >
            <AnimatedText texts={taglines} className="font-light" />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            I design scalable backend systems and build full-stack applications. Specializing in system design, APIs, cloud infrastructure, Flutter, and mentoring developers.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 flex flex-wrap gap-4"
          >
            <Button variant="primary" size="lg" href="#projects">
              View My Work
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              Get In Touch
            </Button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4"
          >
            {socialIcons.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#22d3ee" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-gray-400 transition-colors hover:text-cyan-400"
                  aria-label={social.label}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right column - Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <TerminalWindow />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400 transition-colors"
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
