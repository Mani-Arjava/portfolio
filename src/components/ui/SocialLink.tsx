"use client";

import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
};

interface SocialLinkProps {
  name: string;
  url: string;
  icon: string;
  className?: string;
}

export default function SocialLinkComponent({
  name,
  url,
  icon,
  className,
}: SocialLinkProps) {
  const Icon = iconMap[icon];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all duration-300 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10",
        className
      )}
    >
      {Icon && <Icon className="h-5 w-5" />}
    </a>
  );
}
