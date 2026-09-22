"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const code = `// developer.config.ts

const mani = {
  name: "Pitchaimani Rajaram",
  role: "Senior Software Engineer",
  company: "Arjava Technologies",
  stack: {
    backend: ["Python", "Java", "Kotlin", "Rust"],
    mobile: ["Flutter", "Dart", "Android"],
    frontend: ["React", "Svelte", "Next.js"],
    cloud: ["GCP", "AWS"],
  },
  mentored: "50+ students",
  available: true,  // open to opportunities ✓
}`;

interface Token {
  text: string;
  type: "keyword" | "string" | "comment" | "punctuation" | "boolean" | "normal";
}

const tokenize = (code: string): Token[] => {
  const tokens: Token[] = [];
  let i = 0;

  while (i < code.length) {
    // Comments
    if (code[i] === "/" && code[i + 1] === "/") {
      let comment = "";
      while (i < code.length && code[i] !== "\n") {
        comment += code[i];
        i++;
      }
      tokens.push({ text: comment, type: "comment" });
      continue;
    }

    // Strings
    if (code[i] === '"' || code[i] === "'") {
      const quote = code[i];
      let str = quote;
      i++;
      while (i < code.length && code[i] !== quote) {
        str += code[i];
        i++;
      }
      if (i < code.length) str += code[i++];
      tokens.push({ text: str, type: "string" });
      continue;
    }

    // Keywords and booleans
    const keywordMatch = code.slice(i).match(/^(const|return|true|false|null|undefined|function)\b/);
    if (keywordMatch) {
      const keyword = keywordMatch[1];
      if (keyword === "true" || keyword === "false") {
        tokens.push({ text: keyword, type: "boolean" });
      } else {
        tokens.push({ text: keyword, type: "keyword" });
      }
      i += keyword.length;
      continue;
    }

    // Punctuation
    if ("{}[]:,;()".includes(code[i])) {
      tokens.push({ text: code[i], type: "punctuation" });
      i++;
      continue;
    }

    // Normal (whitespace, identifiers, numbers)
    let normal = "";
    while (i < code.length && !"{}[]:,;()\"'/".includes(code[i]) && code[i] !== "\n") {
      normal += code[i];
      i++;
      if (code[i - 1] === "/" && code[i] === "/") break;
    }
    if (normal) {
      tokens.push({ text: normal, type: "normal" });
    }

    // Newline
    if (code[i] === "\n") {
      tokens.push({ text: "\n", type: "normal" });
      i++;
    }
  }

  return tokens;
};

interface TypedToken extends Token {
  displayed: number;
}

export default function TerminalWindow() {
  const [displayedTokens, setDisplayedTokens] = useState<TypedToken[]>([
    { text: "", type: "normal", displayed: 0 },
  ]);

  useEffect(() => {
    const tokens = tokenize(code);
    let tokenIndex = 0;
    let charIndex = 0;

    const type = setInterval(() => {
      if (tokenIndex >= tokens.length) {
        clearInterval(type);
        return;
      }

      const current = tokens[tokenIndex];
      charIndex++;

      if (charIndex >= current.text.length) {
        charIndex = 0;
        tokenIndex++;
      }

      setDisplayedTokens(
        tokens.slice(0, tokenIndex).map((t, i) => ({
          ...t,
          displayed: i === tokenIndex ? charIndex : t.text.length,
        }))
      );
    }, 35);

    return () => clearInterval(type);
  }, []);

  const getTokenColor = (type: string) => {
    switch (type) {
      case "keyword":
        return "text-cyan-400";
      case "string":
        return "text-green-400";
      case "comment":
        return "text-gray-500";
      case "boolean":
        return "text-orange-400";
      case "punctuation":
        return "text-gray-400";
      default:
        return "text-gray-300";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full rounded-xl border border-white/10 bg-[#0d1117] overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-3 font-mono text-xs text-gray-500">~/mani</span>
      </div>

      {/* Content */}
      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
        {displayedTokens.map((token, idx) => (
          <span key={idx} className={getTokenColor(token.type)}>
            {token.text.slice(0, token.displayed)}
          </span>
        ))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="text-cyan-400"
        >
          |
        </motion.span>
      </div>
    </motion.div>
  );
}
