"use client";

import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <FadeInSection>
          <p className="text-[13px] font-semibold tracking-[0.1em] text-[#0040e0] dark:text-[#4e86b0] uppercase mb-3">
            About me
          </p>
          <h2 className="text-[48px] font-extrabold tracking-[-0.02em] text-[#191c1e] dark:text-[#dde6f0] mb-16 leading-[1.1]">
            About Me
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <FadeInSection delay={0.1}>
            <p className="text-[18px] leading-[1.7] text-[#434656] dark:text-[#8fa8c2] mb-6">
              I&apos;m a full-stack software engineer who gravitates toward systems where reliability
              actually matters — production SaaS workflows, real-time device pipelines, AI agent
              architectures. I care about the seams between things: API contracts, auth boundaries,
              the gap between what a service promises and what it delivers under load.
            </p>
            <p className="text-[18px] leading-[1.7] text-[#434656] dark:text-[#8fa8c2] mb-10">
              Currently finishing my M.S. in Computer Science at Illinois Tech, I&apos;ve shipped
              across IoT platforms, SaaS backends, and AI-driven products. I write code that
              holds up, document the decisions that aren&apos;t obvious, and ship things I&apos;d
              want to maintain six months later.
            </p>

            {/* Skill chips */}
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
          </FadeInSection>

          {/* Photo / Avatar */}
          <FadeInSection delay={0.2} fromDirection="right">
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto md:mx-0 rounded-[24px] overflow-hidden glass-card">
              <Image
                src="/profile.jpg"
                alt="Nesh Rochwani"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/20 dark:ring-[#4e86b0]/20 pointer-events-none" />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
