"use client";

import { socialLinks } from "@/data/socialLinks";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import SocialLinkComponent from "@/components/ui/SocialLink";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Get In Touch" subtitle="Contact me" />

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Let&apos;s work together
            </h3>
            <p className="mb-6 leading-relaxed text-gray-400">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Drop me a message and
              I&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <SocialLinkComponent key={link.name} {...link} />
              ))}
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
