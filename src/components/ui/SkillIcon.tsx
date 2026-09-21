"use client";

import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiKotlin,
  SiDart,
  SiRust,
  SiFlutter,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiGooglecloud,
  SiPostman,
  SiJira,
  SiGit,
  SiCloudflare,
  SiSupabase,
  SiLooker,
  SiChartdotjs,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";
import type { Skill } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiOpenjdk,
  SiKotlin,
  SiDart,
  SiRust,
  SiFlutter,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiGooglecloud,
  SiPostman,
  SiJira,
  FaMicrosoft,
  SiGit,
  SiCloudflare,
  SiSupabase,
  SiLooker,
  SiChartdotjs,
  FaAws,
};

interface SkillIconProps {
  skill: Skill;
}

export default function SkillIcon({ skill }: SkillIconProps) {
  const Icon = iconMap[skill.icon];

  return (
    <div className="group flex flex-col items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/5">
      {Icon && (
        <Icon className="h-8 w-8 text-gray-400 transition-colors group-hover:text-blue-400" />
      )}
      <span className="text-xs font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
        {skill.name}
      </span>
    </div>
  );
}
