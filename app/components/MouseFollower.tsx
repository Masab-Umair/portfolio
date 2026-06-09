"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MousePosition {
  x: number;
  y: number;
}

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-interactive");

      setIsHoveringClickable(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main cursor follower blob */}
      <motion.div
        className="pointer-events-none fixed z-40 mix-blend-screen"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
        style={{
          marginLeft: "-12px",
          marginTop: "-12px",
        }}
      >
        <motion.div
          animate={{
            scale: isHoveringClickable ? 1.5 : 1,
            opacity: isHoveringClickable ? 0.8 : 0.6,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
          className="w-6 h-6 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-full blur-xl"
        />
      </motion.div>

      {/* Background gradient blob following cursor */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        animate={{
          background: `radial-gradient(
            600px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59, 130, 246, 0.1) 0%,
            rgba(6, 182, 212, 0.05) 30%,
            rgba(9, 9, 11, 0) 100%
          )`,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 100,
        }}
      />
    </>
  );
}
