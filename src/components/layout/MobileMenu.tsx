"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { socialLinks } from "@/data/socialLinks";
import SocialLinkComponent from "@/components/ui/SocialLink";

interface MobileMenuProps {
  activeSection: string;
  onClose: () => void;
}

export default function MobileMenu({ activeSection, onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-lg pt-20"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <nav className="flex h-full flex-col items-center justify-center gap-8">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={onClose}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "text-2xl font-semibold transition-colors hover:text-blue-400",
              activeSection === link.href.slice(1)
                ? "text-blue-400"
                : "text-white"
            )}
          >
            {link.label}
          </motion.a>
        ))}
        <div className="mt-4 flex gap-4">
          {socialLinks.map((link) => (
            <SocialLinkComponent key={link.name} {...link} />
          ))}
        </div>
      </nav>
    </motion.div>
  );
}
