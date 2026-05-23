"use client";

import {
  Dumbbell,
  Mountain,
  BookOpen,
  ChefHat,
  Bike,
} from "lucide-react";
import FadeInSection from "./FadeInSection";
import { hobbies } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell size={24} />,
  Mountain: <Mountain size={24} />,
  BookOpen: <BookOpen size={24} />,
  ChefHat: <ChefHat size={24} />,
  Bike: <Bike size={24} />,
};

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <FadeInSection>
          <p className="text-[13px] font-semibold tracking-[0.1em] text-[#0040e0] dark:text-[#4e86b0] uppercase mb-3">
            Life outside code
          </p>
          <h2 className="text-[48px] font-extrabold tracking-[-0.02em] text-[#191c1e] dark:text-[#dde6f0] mb-16 leading-[1.1]">
            Beyond the Keyboard
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4" style={{ perspective: "1000px" }}>
          {hobbies.map((hobby, i) => (
            <FadeInSection key={hobby.id} delay={i * 0.07}>
              <div className="glass-card rounded-[24px] p-6 flex flex-col items-center gap-3 text-center overflow-hidden">
                <span className="w-12 h-12 rounded-full bg-[#dde1ff] dark:bg-[#1e3050] flex items-center justify-center text-[#0040e0] dark:text-[#4e86b0]">
                  {iconMap[hobby.icon]}
                </span>
                <span className="text-[14px] font-semibold text-[#191c1e] dark:text-[#dde6f0]">
                  {hobby.label}
                </span>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
