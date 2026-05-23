"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ShimmerOverlay() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });
  const [playCount, setPlayCount] = useState(0);
  const wasInView = useRef(false);

  useEffect(() => {
    if (inView && !wasInView.current) {
      setPlayCount((c) => c + 1);
    }
    wasInView.current = inView;
  }, [inView]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden z-20"
      aria-hidden
    >
      {playCount > 0 && (
        <motion.div
          key={playCount}
          initial={{ x: "-110%", skewX: -20 }}
          animate={{ x: "220%", skewX: -20 }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay: 0.38 }}
          className="absolute top-0 bottom-0 w-[55%]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 40%, rgba(255,255,255,0.30) 50%, rgba(255,255,255,0.18) 60%, transparent 100%)",
          }}
        />
      )}
    </div>
  );
}
