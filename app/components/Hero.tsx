"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

interface MousePosition {
  x: number;
  y: number;
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const handleScrollDown = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 pb-20"
    >
      {/* Animated background mesh */}
      {isClient && (
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            background: `radial-gradient(
              800px at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(59, 130, 246, 0.15) 0%,
              rgba(139, 92, 246, 0.08) 25%,
              rgba(6, 182, 212, 0.05) 50%,
              rgba(9, 9, 11, 0) 100%
            )`,
          }}
          transition={{
            type: "spring",
            damping: 40,
            stiffness: 100,
          }}
        />
      )}

      {/* Content container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center"
      >
        {/* Main headline */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-zinc-50">MASAB UMAIR</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Full Stack Developer
            </span>
            <br />
            <span className="text-zinc-400">&amp; Creative Lead</span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          I build high-performance web applications and custom software
          architectures that help international brands and local businesses
          scale smoothly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleScrollDown}
            className="cursor-interactive group relative px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-zinc-950 font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            View My Work
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.a
            href="mailto:umairmasab935@gmail.com"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-interactive px-8 py-4 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-50 font-semibold text-lg flex items-center gap-2 transition-all duration-300 hover:bg-zinc-900/50"
          >
            <Mail className="w-5 h-5" />
            Let&apos;s Talk
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
        </motion.div>
      </motion.div>
    </section>
  );
}
