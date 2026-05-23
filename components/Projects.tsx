"use client";

import { GitFork, ExternalLink, BookOpen, Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import FadeInSection from "./FadeInSection";
import ShimmerOverlay from "./ShimmerOverlay";
import { featuredProjects, research } from "@/lib/data";

// ── Featured card ────────────────────────────────────────
function FeaturedCard({ project }: { project: (typeof featuredProjects)[0] }) {
  const primaryUrl = project.demo || project.github;
  return (
    <div
      className="glass-card relative overflow-hidden rounded-[24px] p-8 flex flex-col gap-5 h-full
        ring-1 ring-[#0040e0]/15 dark:ring-[#4e86b0]/20
        shadow-[0_0_40px_rgba(0,64,224,0.07)] dark:shadow-[0_0_40px_rgba(78,134,176,0.10)]"
    >
      {/* Stretched link — z-0, behind all content */}
      {primaryUrl && (
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-0 rounded-[24px]"
          aria-label={`Open ${project.title}`}
        />
      )}
      <ShimmerOverlay />

      {/* All card content sits at z-10 so inner links remain clickable */}
      <div className="relative z-10 flex flex-col gap-5 h-full">
        {/* Badges row */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0040e0]/10 dark:bg-[#4e86b0]/15 text-[11px] font-bold text-[#0040e0] dark:text-[#4e86b0] uppercase tracking-[0.08em]">
            <Star size={10} className="fill-current" /> Featured
          </span>
          {project.label && (
            <span className="flex items-center gap-1.5 text-[12px] font-semibold text-[#a23f00] dark:text-[#fc7127]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
              {project.label}
            </span>
          )}
        </div>

        {/* Thumbnail or placeholder */}
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-[16px]"
          />
        ) : (
          <div className="w-full h-44 rounded-[16px] bg-gradient-to-br from-[#dde1ff] via-[#eef0ff] to-[#ffdbcd] dark:from-[#1a2640] dark:via-[#1e2a50] dark:to-[#1e2e3a] flex items-center justify-center">
            <span className="text-[44px] font-extrabold text-[#0040e0]/15 dark:text-[#4e86b0]/25 select-none tracking-tight">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        <h3 className="text-[22px] font-bold text-[#191c1e] dark:text-[#dde6f0] leading-tight">
          {project.title}
        </h3>
        <p className="text-[14.5px] text-[#434656] dark:text-[#8fa8c2] leading-[1.65] flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-[#eceef0] dark:bg-[#1a2640] text-[12px] font-semibold text-[#434656] dark:text-[#8fa8c2]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-1 border-t border-[#e0e3e5] dark:border-[#243348]">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-[#0040e0] dark:text-[#4e86b0] hover:text-[#2e5bff] dark:hover:text-[#5a96c4] transition-colors">
              <GitFork size={14} /> GitHub
            </a>
          )}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-[#a23f00] hover:text-[#fc7127] transition-colors">
              <ExternalLink size={14} /> Watch Demo
            </a>
          ) : (
            <span className="text-[13px] font-semibold text-[#747688] dark:text-[#5a7a96] cursor-default">
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── GitHub CTA ───────────────────────────────────────────
function GitHubCTA() {
  return (
    <FadeInSection>
      <a
        href="https://github.com/nr1306?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="group glass-card relative overflow-hidden rounded-[28px] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 cursor-pointer
          ring-1 ring-[#0040e0]/10 dark:ring-[#4e86b0]/15 block"
      >
        <ShimmerOverlay />

        {/* Decorative background text */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-[120px] md:text-[160px] font-extrabold leading-none select-none
            text-[#0040e0]/[0.04] dark:text-[#4e86b0]/[0.06] tracking-tighter"
        >
          ——
        </span>

        {/* Copy */}
        <div className="relative z-10 text-center md:text-left">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0040e0] dark:text-[#4e86b0] mb-3">
            Beyond this page
          </p>
          <h3 className="text-[32px] md:text-[40px] font-extrabold tracking-[-0.02em] text-[#191c1e] dark:text-[#dde6f0] leading-[1.1] mb-3">
            The rabbit hole<br className="hidden md:block" /> goes deeper.
          </h3>
          <p className="text-[15px] text-[#747688] dark:text-[#5a7a96] max-w-md leading-[1.65]">
            Ten more projects, late-night experiments, and work that didn&apos;t make the highlight reel — all on GitHub, unfiltered.
          </p>
        </div>

        {/* Button */}
        <div className="relative z-10 shrink-0">
          <span className="flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#0040e0] dark:bg-[#4e86b0] text-white font-semibold text-[15px]
            group-hover:bg-[#2e5bff] dark:group-hover:bg-[#5a96c4] transition-colors shadow-lg shadow-blue-200/50 dark:shadow-[#4e86b0]/20">
            Explore the archive
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </a>
    </FadeInSection>
  );
}

// ── Research card ────────────────────────────────────────
function ResearchCard({ work }: { work: (typeof research)[0] }) {
  return (
    <FadeInSection>
      <div className="glass-card relative overflow-hidden rounded-[24px] p-8 flex flex-col gap-5 h-full
        ring-1 ring-[#fc7127]/15 dark:ring-[#fc7127]/20">
        <ShimmerOverlay />

        <div className="flex items-start gap-3">
          <span className="w-10 h-10 rounded-full bg-[#ffdbcd] dark:bg-[#2a1a10] flex items-center justify-center text-[#a23f00] dark:text-[#fc7127] shrink-0">
            <BookOpen size={18} />
          </span>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#fc7127]">
              {work.venue} · {work.date}
            </span>
            <h3 className="text-[16px] font-bold text-[#191c1e] dark:text-[#dde6f0] leading-snug mt-1">
              {work.title}
            </h3>
          </div>
        </div>

        <p className="text-[14px] text-[#434656] dark:text-[#8fa8c2] leading-[1.65] flex-1">
          {work.summary}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {work.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 rounded-full bg-[#fff3ee] dark:bg-[#2a1a10] text-[11px] font-semibold text-[#a23f00] dark:text-[#fc7127]">
              {tag}
            </span>
          ))}
        </div>

        <a href={work.url} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[13px] font-semibold text-[#a23f00] dark:text-[#fc7127] hover:text-[#fc7127] transition-colors">
          <ExternalLink size={13} /> Read Publication
        </a>
      </div>
    </FadeInSection>
  );
}

// ── Main section ─────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">

        {/* Section header */}
        <FadeInSection>
          <p className="text-[13px] font-semibold tracking-[0.1em] text-[#0040e0] dark:text-[#4e86b0] uppercase mb-3">
            Selected Works
          </p>
          <h2 className="text-[48px] font-extrabold tracking-[-0.02em] text-[#191c1e] dark:text-[#dde6f0] mb-4 leading-[1.1]">
            Projects
          </h2>
          <p className="text-[16px] text-[#747688] dark:text-[#5a7a96] mb-16 max-w-xl">
            Selected systems I&apos;ve built across AI, backend infrastructure, healthcare, and product engineering.
          </p>
        </FadeInSection>

        {/* ── Featured ── */}
        <FadeInSection delay={0.05}>
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#0040e0] dark:text-[#4e86b0] mb-5 flex items-center gap-2">
            <Star size={11} className="fill-current" /> Featured Projects
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12" style={{ perspective: "1200px" }}>
          {featuredProjects.map((project, i) => (
            <FadeInSection key={project.id} delay={i * 0.07}>
              <FeaturedCard project={project} />
            </FadeInSection>
          ))}
        </div>

        {/* ── GitHub CTA ── */}
        <div className="mb-20">
          <GitHubCTA />
        </div>

        {/* ── Research Publications ── */}
        <FadeInSection>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#747688] dark:text-[#5a7a96]">
              Research Publications
            </p>
            <div className="flex-1 h-px bg-[#e0e3e5] dark:bg-[#243348]" />
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-6">
          {research.map((work) => (
            <ResearchCard key={work.id} work={work} />
          ))}
        </div>

      </div>
    </section>
  );
}
