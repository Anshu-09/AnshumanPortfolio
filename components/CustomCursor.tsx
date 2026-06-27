"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [mounted, setMounted] = useState(false);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 500, mass: 0.2 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 500, mass: 0.2 });
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] h-8 w-8 rounded-full border border-accent/30 bg-accent/5"
        style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9999] h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
