"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/socialLinks";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import SocialLinkComponent from "@/components/ui/SocialLink";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Get In Touch" subtitle="Contact me" />

        {/* Background watermark */}
        <motion.div
          className="absolute top-0 left-0 text-[300px] font-mono font-bold text-cyan-400/[0.02] select-none pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          &lt;/&gt;
        </motion.div>

        <div className="relative z-10 grid gap-12 lg:grid-cols-2 rounded-2xl border border-white/10 bg-white/[0.02] p-8 lg:p-12 hover:border-cyan-500/20 transition-all backdrop-blur-sm">
          <ScrollReveal direction="left">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Let&apos;s work together
              </h3>
              <p className="mb-8 leading-relaxed text-gray-400">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach out.
              </p>

              {/* Email */}
              <div className="mb-8">
                <p className="mb-2 text-sm text-gray-500 uppercase tracking-wider">Email</p>
                <a
                  href="mailto:pitchumaniece@gmail.com"
                  className="text-lg font-semibold text-cyan-400 hover:text-cyan-300 transition-colors break-all"
                >
                  pitchumaniece@gmail.com
                </a>
              </div>

              {/* Decorative terminal snippet */}
              <motion.div
                className="mb-8 rounded-lg border border-cyan-400/20 bg-slate-950/60 p-4 font-mono text-xs text-cyan-400 overflow-x-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div>$ <span className="text-cyan-300">curl -X POST</span> /connect</div>
                <div className="text-gray-500 mt-1">{"→ opening connection..."}</div>
              </motion.div>

              {/* Social Links */}
              <div>
                <p className="mb-4 text-sm text-gray-500 uppercase tracking-wider">Follow</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <SocialLinkComponent key={link.name} {...link} />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
