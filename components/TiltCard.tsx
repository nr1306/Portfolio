"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  liftY?: number;
  liftScale?: number;
};

export default function TiltCard({ children, className, maxTilt = 10, liftY = -6, liftScale = 1.03 }: Props) {
  const mouseX   = useMotionValue(0.5);
  const mouseY   = useMotionValue(0.5);
  const springX  = useSpring(mouseX, { stiffness: 180, damping: 18 });
  const springY  = useSpring(mouseY, { stiffness: 180, damping: 18 });
  const rotateY  = useTransform(springX, [0, 1], [-maxTilt, maxTilt]);
  const rotateX  = useTransform(springY, [0, 1], [maxTilt * 0.8, -maxTilt * 0.8]);
  const spotOpacity = useMotionValue(0);
  const spotSpring  = useSpring(spotOpacity, { stiffness: 180, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
    e.currentTarget.style.setProperty("--mouse-x", String(x));
    e.currentTarget.style.setProperty("--mouse-y", String(y));
  };

  const onMouseEnter = () => spotOpacity.set(1);

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    e.currentTarget.style.setProperty("--mouse-x", "0.5");
    e.currentTarget.style.setProperty("--mouse-y", "0.5");
    spotOpacity.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: liftScale, y: liftY }}
      transition={{ scale: { duration: 0.2 }, y: { duration: 0.2 } }}
      className={`relative ${className ?? ""}`}
    >
      {/* Glass spotlight — moves with mouse, appears on hover */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-10 glass-spotlight"
        style={{ opacity: spotSpring }}
        aria-hidden
      />
      {children}
    </motion.div>
  );
}
