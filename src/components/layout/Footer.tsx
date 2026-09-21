import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";
import { socialLinks } from "@/data/socialLinks";
import SocialLinkComponent from "@/components/ui/SocialLink";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <a href="#" className="text-lg font-bold text-white">
              {siteConfig.name.split(" ")[0]}
              <span className="text-blue-500">.</span>
            </a>
            <p className="mt-1 text-sm text-gray-500">
              Building things for the web.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <SocialLinkComponent key={link.name} {...link} />
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
