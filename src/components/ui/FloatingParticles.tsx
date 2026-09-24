"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "dot" | "plus" | "zero" | "one" | "bracket";
}

const particleTypes = ["dot", "plus", "zero", "one", "bracket"] as const;

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 12 + 12,
    delay: Math.random() * 2,
    type: particleTypes[Math.floor(Math.random() * particleTypes.length)] as Particle["type"],
  }));
}

function ParticleSymbol({ type, size }: { type: Particle["type"]; size: number }) {
  switch (type) {
    case "plus":
      return (
        <span style={{ fontSize: `${size * 3}px` }} className="text-cyan-400/40">
          +
        </span>
      );
    case "zero":
      return (
        <span style={{ fontSize: `${size * 4}px` }} className="text-blue-400/30 font-mono">
          0
        </span>
      );
    case "one":
      return (
        <span style={{ fontSize: `${size * 4}px` }} className="text-cyan-400/30 font-mono">
          1
        </span>
      );
    case "bracket":
      return (
        <span style={{ fontSize: `${size * 5}px` }} className="text-cyan-400/20 font-mono">
          &lt;
        </span>
      );
    case "dot":
    default:
      return (
        <div
          style={{
            width: `${size * 2}px`,
            height: `${size * 2}px`,
          }}
          className="rounded-full bg-cyan-400/50"
        />
      );
  }
}

export default function FloatingParticles() {
  const particles = useMemo(() => generateParticles(25), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, Math.random() > 0.5 ? 15 : -15],
            x: [0, Math.random() > 0.5 ? 10 : -10],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ParticleSymbol type={particle.type} size={particle.size} />
        </motion.div>
      ))}
    </div>
  );
}
