"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, GraduationCap } from "lucide-react";
import FadeInSection from "./FadeInSection";
import ShimmerOverlay from "./ShimmerOverlay";
import { experience, education } from "@/lib/data";

function TimelineCard({
  title,
  org,
  start,
  end,
  bullets,
  side,
  icon,
  accentColor,
  className,
  alwaysOpen = false,
}: {
  title: string;
  org: string;
  start: string;
  end: string;
  bullets: string[];
  side: "left" | "right";
  icon: React.ReactNode;
  accentColor: string;
  className?: string;
  alwaysOpen?: boolean;
}) {
  const [open, setOpen] = useState(alwaysOpen);

  return (
    <div className={`glass-card relative overflow-hidden rounded-[24px] p-6 ${className ?? ""}`}>
      <ShimmerOverlay />
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="flex items-center gap-3">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0"
            style={{ background: accentColor }}
          >
            {icon}
          </span>
          <div>
            <h3 className="text-[15px] font-bold text-[#191c1e] dark:text-[#dde6f0] leading-tight">{title}</h3>
            <p className="text-[13px] font-semibold" style={{ color: accentColor }}>{org}</p>
          </div>
        </div>
        {!alwaysOpen && (
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Collapse" : "Expand"}
            className="shrink-0 w-7 h-7 rounded-full bg-[#eceef0] dark:bg-[#1a2640] flex items-center justify-center text-[#434656] dark:text-[#8fa8c2] hover:bg-[#dde1ff] dark:hover:bg-[#243348] hover:text-[#0040e0] dark:hover:text-[#4e86b0] transition-colors"
          >
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={14} />
            </motion.div>
          </button>
        )}
      </div>

      <p className="text-[12px] text-[#747688] dark:text-[#5a7a96] font-semibold ml-12 mb-2">
        {start} — {end}
      </p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden ml-12 space-y-2 pt-1"
          >
            {bullets.map((b, i) => (
              <li key={i} className="text-[13.5px] text-[#434656] dark:text-[#8fa8c2] leading-[1.6] flex gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accentColor }} />
                {b}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// experience[0] = FyndMe (2025), experience[1] = NXON AI (2024)
// education[0]  = Illinois Tech (2024–2026), education[1] = Charusat (2020–2024)

export default function Timeline() {
  return (
    <section id="journey" className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <FadeInSection>
          <p className="text-[13px] font-semibold tracking-[0.1em] text-[#0040e0] dark:text-[#4e86b0] uppercase mb-3">
            Experience &amp; Education
          </p>
          <h2 className="text-[48px] font-extrabold tracking-[-0.02em] text-[#191c1e] dark:text-[#dde6f0] mb-16 leading-[1.1]">
            The Journey
          </h2>
        </FadeInSection>

        {/* Column headers */}
        <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] mb-8">
          <div className="flex items-center gap-2 text-[14px] font-bold text-[#191c1e] dark:text-[#dde6f0]">
            <Briefcase size={15} className="text-[#0040e0] dark:text-[#4e86b0]" /> Work Experience
          </div>
          <div />
          <div className="flex items-center gap-2 text-[14px] font-bold text-[#191c1e] dark:text-[#dde6f0]">
            <GraduationCap size={15} className="text-[#fc7127]" /> Education
          </div>
        </div>

        {/* ── Desktop: 3-row CSS grid ─────────────────────────────────────
            Row 1 → 2020  : [empty work]        | spine 2020 | Charusat (2020–2024)
            Row 2 → 2024  : [NXON AI]           | spine 2024 | IIT (2024–2026) ─┐
            Row 3 → 2025  : [FyndMe]            | spine 2025 |                  ─┘ spans rows 2–3
        ──────────────────────────────────────────────────────────────────── */}
        <div className="hidden md:block relative">
          {/* Spine line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#e0e3e5] dark:bg-[#243348]" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 80px 1fr",
              gridTemplateRows: "auto auto auto",
              rowGap: "24px",
            }}
          >
            {/* ── Spine dots ── */}
            <SpineDot year="2020" color="#fc7127" row={1} />
            <SpineDot year="2024" color="#0040e0" row={2} />
            <SpineDot year="2025" color="#0040e0" row={3} />

            {/* ── Work column ── */}

            {/* Row 1: no work before 2024 */}
            <div style={{ gridColumn: 1, gridRow: 1 }} />

            {/* Row 2: NXON AI */}
            <div style={{ gridColumn: 1, gridRow: 2 }} className="pr-10">
              <FadeInSection fromDirection="left">
                <TimelineCard
                  title={experience[1].role}
                  org={experience[1].company}
                  start={experience[1].start}
                  end={experience[1].end}
                  bullets={experience[1].bullets}
                  side="left"
                  icon={<Briefcase size={14} />}
                  accentColor="#0040e0"
                />
              </FadeInSection>
            </div>

            {/* Row 3: FyndMe */}
            <div style={{ gridColumn: 1, gridRow: 3 }} className="pr-10">
              <FadeInSection fromDirection="left">
                <TimelineCard
                  title={experience[0].role}
                  org={experience[0].company}
                  start={experience[0].start}
                  end={experience[0].end}
                  bullets={experience[0].bullets}
                  side="left"
                  icon={<Briefcase size={14} />}
                  accentColor="#0040e0"
                />
              </FadeInSection>
            </div>

            {/* ── Education column ── */}

            {/* Row 1: Charusat 2020–2024 */}
            <div style={{ gridColumn: 3, gridRow: 1 }} className="pl-10">
              <FadeInSection fromDirection="right" className="h-full">
                <TimelineCard
                  title={education[1].degree}
                  org={education[1].institution}
                  start={education[1].start}
                  end={education[1].end}
                  bullets={education[1].details}
                  side="right"
                  icon={<GraduationCap size={14} />}
                  accentColor="#fc7127"
                  className="h-full"
                />
              </FadeInSection>
            </div>

            {/* Rows 2–3: IIT 2024–2026 — spans both rows to stretch visually */}
            <div style={{ gridColumn: 3, gridRow: "2 / 4" }} className="pl-10">
              <FadeInSection fromDirection="right" className="h-full">
                <TimelineCard
                  title={education[0].degree}
                  org={education[0].institution}
                  start={education[0].start}
                  end={education[0].end}
                  bullets={education[0].details}
                  side="right"
                  icon={<GraduationCap size={14} />}
                  accentColor="#fc7127"
                  className="h-full"
                  alwaysOpen
                />
              </FadeInSection>
            </div>
          </div>
        </div>

        {/* ── Mobile: stacked ── */}
        <div className="md:hidden flex flex-col gap-6">
          <p className="text-[13px] font-bold text-[#191c1e] dark:text-[#dde6f0] flex items-center gap-2 mb-2">
            <Briefcase size={14} className="text-[#0040e0] dark:text-[#4e86b0]" /> Work Experience
          </p>
          {/* Most recent first */}
          <TimelineCard
            title={experience[0].role}
            org={experience[0].company}
            start={experience[0].start}
            end={experience[0].end}
            bullets={experience[0].bullets}
            side="left"
            icon={<Briefcase size={14} />}
            accentColor="#0040e0"
          />
          <TimelineCard
            title={experience[1].role}
            org={experience[1].company}
            start={experience[1].start}
            end={experience[1].end}
            bullets={experience[1].bullets}
            side="left"
            icon={<Briefcase size={14} />}
            accentColor="#0040e0"
          />

          <p className="text-[13px] font-bold text-[#191c1e] dark:text-[#dde6f0] flex items-center gap-2 mt-6 mb-2">
            <GraduationCap size={14} className="text-[#fc7127]" /> Education
          </p>
          <TimelineCard
            title={education[0].degree}
            org={education[0].institution}
            start={education[0].start}
            end={education[0].end}
            bullets={education[0].details}
            side="left"
            icon={<GraduationCap size={14} />}
            accentColor="#fc7127"
            alwaysOpen
          />
          <TimelineCard
            title={education[1].degree}
            org={education[1].institution}
            start={education[1].start}
            end={education[1].end}
            bullets={education[1].details}
            side="left"
            icon={<GraduationCap size={14} />}
            accentColor="#fc7127"
          />
        </div>
      </div>
    </section>
  );
}

function SpineDot({ year, color, row }: { year: string; color: string; row: number }) {
  return (
    <div
      style={{ gridColumn: 2, gridRow: row }}
      className="flex flex-col items-center gap-2 pt-6 z-10"
    >
      <span
        className="w-4 h-4 rounded-full bg-white dark:bg-[#1a2640] border-2 shadow-sm shrink-0"
        style={{ borderColor: color }}
      />
      <span className="text-[11px] font-bold text-[#747688] dark:text-[#5a7a96]">{year}</span>
    </div>
  );
}
