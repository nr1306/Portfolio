"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  fromDirection?: "up" | "left" | "right";
};

export default function FadeInSection({
  children,
  className,
  delay = 0,
  fromDirection = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const initial = {
    up:    { opacity: 0, y: 32, scale: 0.97 },
    left:  { opacity: 0, x: -40, scale: 0.97 },
    right: { opacity: 0, x: 40,  scale: 0.97 },
  }[fromDirection];

  const animate = inView
    ? { opacity: 1, y: 0, x: 0, scale: 1 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
