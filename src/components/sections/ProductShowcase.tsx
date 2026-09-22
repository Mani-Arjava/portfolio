"use client";

import { products } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section id="featured-products" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Products"
          subtitle="What I've shipped"
        />

        <div className="space-y-20 mt-16">
          {products.map((product) => {
            const isImageLeft = product.imageLeft;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Image Column */}
                <div
                  className={`flex justify-center ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isImageLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="relative w-full max-w-sm"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        className="object-cover"
                        priority={false}
                      />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />
                  </motion.div>
                </div>

                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className={`flex flex-col justify-center ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg text-cyan-400 font-semibold mb-6">
                    {product.subtitle}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>AWS</Badge>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
