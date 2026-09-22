"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LaptopAnimation() {
  return (
    <motion.div className="relative w-full h-full flex items-center justify-center py-12">
      {/* Laptop container */}
      <motion.div
        className="relative w-full max-w-2xl h-96"
        initial={{ rotateX: 90 }}
        whileInView={{ rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        {/* Laptop screen */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl overflow-hidden p-4"
          animate={{ boxShadow: ["0 0 30px rgba(34,211,238,0.3)", "0 0 50px rgba(34,211,238,0.5)", "0 0 30px rgba(34,211,238,0.3)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Laptop bezel border */}
          <div className="absolute inset-4 rounded-xl border-8 border-gray-800 pointer-events-none z-30">
            {/* Camera notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-gray-800 rounded-full border-2 border-gray-700" />
          </div>

          {/* Screen content - profile with data overlay */}
          <motion.div
            className="absolute inset-5 rounded-lg overflow-hidden bg-contain bg-no-repeat bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/images/profile.png')" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >


          </motion.div>

          {/* Screen glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent pointer-events-none"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Laptop base */}
        <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-b-3xl shadow-lg" />

        {/* Reflection */}
        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-2xl h-12 bg-gradient-to-b from-cyan-500/20 to-transparent blur-xl rounded-full"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
}
