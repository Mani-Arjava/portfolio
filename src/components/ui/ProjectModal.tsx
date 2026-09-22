"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { useState, useRef, useEffect } from "react";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [imageScale, setImageScale] = useState(1);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const scrollTop = element.scrollTop;
    const maxScroll = 100;

    // Calculate scale based on scroll (from 1 to 0.7)
    const scale = Math.max(0.7, 1 - scrollTop / maxScroll);
    setImageScale(scale);
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-white/10 shadow-2xl max-w-4xl w-full h-[85vh] overflow-hidden flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors backdrop-blur-sm"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Scrollable Content */}
              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto"
              >
                {/* Top Section - Image Left + Content Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8 sticky top-0 z-10 bg-gradient-to-b from-slate-900 to-slate-900/0 backdrop-blur-sm">
                  {/* Image - Left */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{
                      scale: imageScale,
                    }}
                    className="flex items-center justify-center origin-top-left"
                  >
                    <div className="w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="object-contain w-full h-auto"
                        priority
                      />
                    </div>
                  </motion.div>

                  {/* Content - Right */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col justify-start space-y-4"
                  >
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-white">
                      {project.title}
                    </h2>

                    {/* Project Overview */}
                    {project.overview && (
                      <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Overview
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                          {project.overview}
                        </p>
                      </div>
                    )}

                    {/* Technologies Preview */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Section - Full Width Content */}
                <div className="px-8 pb-8 space-y-6">
                  {/* Full Project Overview */}
                  {project.overview && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Project Overview
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.overview}
                      </p>
                    </motion.div>
                  )}

                  {/* Key Features */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.keyFeatures.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.02 }}
                            className="text-gray-400 text-sm flex items-start gap-2"
                          >
                            <span className="text-blue-400 mt-1 flex-shrink-0">
                              •
                            </span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* All Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Full Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + idx * 0.05 }}
                        >
                          <Badge>{tech}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex gap-4 pt-6 border-t border-white/10"
                  >
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-gray-300 hover:text-white"
                      >
                        <Code className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors text-blue-300 hover:text-blue-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
