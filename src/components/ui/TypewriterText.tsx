"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function TypewriterText({
  text,
  delay = 0,
  speed = 30,
  className = "",
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Wait for the delay before starting
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isAnimating) return;

    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isAnimating, text, speed]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
      className={className}
    >
      {displayedText}
      {displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="text-cyan-400"
        >
          |
        </motion.span>
      )}
    </motion.p>
  );
}
