"use client";

import { motion } from "framer-motion";

export default function ServerVisualization() {
  const servers = [
    { x: 20, y: 30, label: "API", color: "cyan" },
    { x: 50, y: 10, label: "DB", color: "blue" },
    { x: 80, y: 35, label: "Cache", color: "purple" },
    { x: 35, y: 70, label: "Queue", color: "green" },
    { x: 65, y: 75, label: "Storage", color: "orange" },
  ];

  const colorMap = {
    cyan: "#22d3ee",
    blue: "#3b82f6",
    purple: "#a855f7",
    green: "#10b981",
    orange: "#f97316",
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="w-full h-80 max-w-md mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Connection lines */}
      {servers.map((server, idx) => {
        const nextServer = servers[(idx + 1) % servers.length];
        return (
          <motion.line
            key={`line-${idx}`}
            x1={server.x}
            y1={server.y}
            x2={nextServer.x}
            y2={nextServer.y}
            stroke={colorMap[server.color as keyof typeof colorMap]}
            strokeWidth="0.5"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
          />
        );
      })}

      {/* Central hub */}
      <motion.circle
        cx="50"
        cy="50"
        r="8"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />

      {/* Pulsing center dot */}
      <motion.circle
        cx="50"
        cy="50"
        r="2"
        fill="#22d3ee"
        animate={{ r: [2, 4, 2], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Server nodes */}
      {servers.map((server, idx) => (
        <g key={`server-${idx}`}>
          {/* Connection line from node to center */}
          <motion.line
            x1={server.x}
            y1={server.y}
            x2="50"
            y2="50"
            stroke={colorMap[server.color as keyof typeof colorMap]}
            strokeWidth="0.4"
            opacity="0.2"
          />

          {/* Server node */}
          <motion.circle
            cx={server.x}
            cy={server.y}
            r="4"
            fill="none"
            stroke={colorMap[server.color as keyof typeof colorMap]}
            strokeWidth="1"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.15, duration: 0.5 }}
            animate={{ r: [4, 5, 4] }}
          />

          {/* Inner circle - activity indicator */}
          <motion.circle
            cx={server.x}
            cy={server.y}
            r="2"
            fill={colorMap[server.color as keyof typeof colorMap]}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + idx * 0.15, duration: 0.4 }}
            animate={{ opacity: [0.8, 0.3, 0.8] }}
          />

          {/* Label */}
          <motion.text
            x={server.x}
            y={server.y + 8}
            fontSize="2"
            fill={colorMap[server.color as keyof typeof colorMap]}
            textAnchor="middle"
            opacity="0.8"
            className="font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + idx * 0.1 }}
          >
            {server.label}
          </motion.text>
        </g>
      ))}

      {/* Animated data packets */}
      {[0, 1, 2].map((packet) => (
        <motion.circle
          key={`packet-${packet}`}
          cx="50"
          cy="50"
          r="1"
          fill="#22d3ee"
          initial={{ cx: 50, cy: 50, opacity: 0 }}
          animate={{
            cx: [50, servers[packet].x, 50],
            cy: [50, servers[packet].y, 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: packet * 1,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.svg>
  );
}
