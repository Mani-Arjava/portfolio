"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import useScrollDirection from "@/hooks/useScrollDirection";
import useActiveSection from "@/hooks/useActiveSection";
import MobileMenu from "./MobileMenu";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();
  const activeSection = useActiveSection();

  return (
    <>
      <ScrollProgress />
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          isAtTop ? "bg-transparent" : "bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5"
        )}
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === "down" && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#"
            className="text-lg font-bold text-white transition-colors hover:text-cyan-400"
          >
            {siteConfig.shortName}
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-cyan-400",
                    activeSection === link.href.slice(1)
                      ? "text-cyan-400"
                      : "text-gray-400"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-all duration-300",
                  mobileOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-all duration-300",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-all duration-300",
                  mobileOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            activeSection={activeSection}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
