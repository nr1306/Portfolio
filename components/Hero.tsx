"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { skills } from "@/lib/data";

const taglines = [
  "Building reliable AI-backed systems.",
  "Shipping software that holds up.",
  "Full-stack engineering with AI depth.",
  "Backend, AI, and cloud systems.",
];

const stats = [
  { value: "14", label: "Projects"           },
  { value: "2",  label: "Publications"       },
  { value: "3",  label: "Production Systems" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const blobX = useSpring(rawX, { stiffness: 60, damping: 20 });
  const blobY = useSpring(rawY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      rawX.set((e.clientX - left) / width);
      rawY.set((e.clientY - top) / height);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, [rawX, rawY]);

  const [taglineIdx, setTaglineIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const target = taglines[taglineIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTaglineIdx((i) => (i + 1) % taglines.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, taglineIdx]);

  useEffect(() => {
    const id = setInterval(() => setBlink((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-20"
      id="hero"
    >
      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, var(--vignette-color) 0%, transparent 100%)",
        }}
      />

      {/* Cursor-reactive cobalt blob */}
      <motion.div
        style={{ left: blobX, top: blobY, x: "-50%", y: "-50%" }}
        className="pointer-events-none absolute w-[700px] h-[700px] rounded-full"
        aria-hidden
      >
        <div className="absolute inset-0 rounded-full blur-[130px] opacity-40"
          style={{ background: "radial-gradient(circle, #2e5bff 0%, #0040e0 60%, transparent 100%)" }} />
      </motion.div>

      {/* Cursor-reactive terracotta blob */}
      <motion.div
        style={{ left: blobX, top: blobY, x: "20%", y: "20%" }}
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full"
        aria-hidden
      >
        <div className="absolute inset-0 rounded-full blur-[110px] opacity-25"
          style={{ background: "radial-gradient(circle, #fc7127 0%, #a23f00 60%, transparent 100%)" }} />
      </motion.div>

      {/* Two-column layout */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: intro + bio + stats + CTAs ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Name */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="hero-name text-[64px] lg:text-[72px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#191c1e] dark:text-[#dde6f0] mb-4"
            >
              Nesh Rochwani
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-[20px] font-semibold text-[#434656] dark:text-[#8fa8c2] mb-8 h-7"
            >
              {displayed}
              <span
                className="inline-block w-[2px] h-[1.1em] bg-[#0040e0] dark:bg-[#4e86b0] ml-[2px] align-middle"
                style={{ opacity: blink ? 1 : 0 }}
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-[17px] leading-[1.7] text-[#434656] dark:text-[#8fa8c2] mb-4"
            >
              I&apos;m a full-stack software engineer focused on production systems where reliability
              actually matters — SaaS workflows, AI-backed applications, real-time pipelines, and
              cloud-native backends.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-[17px] leading-[1.7] text-[#434656] dark:text-[#8fa8c2] mb-10"
            >
              I recently completed my M.S. in Computer Science at Illinois Tech. My work spans API
              design, authentication, backend reliability, AI orchestration, and products built for
              real users — not polished demos that fall apart under load.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex items-center mb-10"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center">
                  <div className="pr-8 text-center first:pl-0">
                    <p className="text-[36px] font-extrabold text-[#191c1e] dark:text-[#dde6f0] leading-none tracking-tight">
                      {s.value}
                    </p>
                    <p className="text-[11px] font-semibold text-[#747688] dark:text-[#5a7a96] mt-1.5 uppercase tracking-[0.1em]">
                      {s.label}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-10 bg-[#e0e3e5] dark:bg-[#243348] mr-8" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 flex-wrap mb-8"
            >
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-[#0040e0] dark:bg-[#4e86b0] text-white font-semibold text-[15px] hover:bg-[#2e5bff] dark:hover:bg-[#5a96c4] transition-colors shadow-lg shadow-blue-200 dark:shadow-[#4e86b0]/20"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full glass font-semibold text-[15px] text-[#191c1e] dark:text-[#dde6f0] hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
              >
                <Mail size={16} />
                Get in touch
              </a>
            </motion.div>

          </motion.div>

          {/* ── RIGHT: photo + skills ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {/* Profile photo */}
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto md:mx-0 rounded-[24px] overflow-hidden glass-card">
              <Image
                src="/profile1.png"
                alt="Nesh Rochwani"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/20 dark:ring-[#4e86b0]/20 pointer-events-none" />
            </div>

            {/* Skills chips */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.label}
                  className="px-4 py-1.5 rounded-full glass text-[13px] font-semibold text-[#191c1e] dark:text-[#dde6f0] border border-[rgba(255,255,255,0.4)] dark:border-[rgba(78,134,176,0.2)]"
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#747688] dark:text-[#5a7a96] hover:text-[#0040e0] dark:hover:text-[#4e86b0] transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
