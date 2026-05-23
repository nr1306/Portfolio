"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import FadeInSection from "./FadeInSection";

// Replace with your Formspree form ID after signing up at formspree.io
const FORMSPREE_ID = "xykvjvqb";

type FormState = { name: string; email: string; message: string };
const empty: FormState = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm(empty);
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 5000);
      }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-[120px] px-6">
      <div className="max-w-[640px] mx-auto text-center">
        <FadeInSection>
          <p className="text-[13px] font-semibold tracking-[0.1em] text-[#0040e0] dark:text-[#4e86b0] uppercase mb-3">
            Get in touch
          </p>
          <h2 className="text-[48px] font-extrabold tracking-[-0.02em] text-[#191c1e] dark:text-[#dde6f0] mb-4 leading-[1.1]">
            Let&apos;s Connect
          </h2>
          <p className="text-[17px] text-[#434656] dark:text-[#8fa8c2] mb-12 leading-[1.7]">
            Open to software engineering roles where backend reliability, AI systems, and product execution matter.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <form onSubmit={handleSubmit} className="glass-card rounded-[24px] p-8 text-left flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#191c1e] dark:text-[#dde6f0]">Name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="px-4 py-3 rounded-[16px] bg-white/60 dark:bg-[#1a2640]/60 border border-[rgba(255,255,255,0.5)] dark:border-[rgba(78,134,176,0.2)] backdrop-blur text-[15px] text-[#191c1e] dark:text-[#dde6f0] placeholder:text-[#747688] dark:placeholder:text-[#5a7a96] outline-none focus:border-[#0040e0] dark:focus:border-[#4e86b0] focus:ring-2 focus:ring-[#0040e0]/20 dark:focus:ring-[#4e86b0]/20 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#191c1e] dark:text-[#dde6f0]">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="hello@example.com"
                className="px-4 py-3 rounded-[16px] bg-white/60 dark:bg-[#1a2640]/60 border border-[rgba(255,255,255,0.5)] dark:border-[rgba(78,134,176,0.2)] backdrop-blur text-[15px] text-[#191c1e] dark:text-[#dde6f0] placeholder:text-[#747688] dark:placeholder:text-[#5a7a96] outline-none focus:border-[#0040e0] dark:focus:border-[#4e86b0] focus:ring-2 focus:ring-[#0040e0]/20 dark:focus:ring-[#4e86b0]/20 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#191c1e] dark:text-[#dde6f0]">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What's on your mind?"
                className="px-4 py-3 rounded-[16px] bg-white/60 dark:bg-[#1a2640]/60 border border-[rgba(255,255,255,0.5)] dark:border-[rgba(78,134,176,0.2)] backdrop-blur text-[15px] text-[#191c1e] dark:text-[#dde6f0] placeholder:text-[#747688] dark:placeholder:text-[#5a7a96] outline-none focus:border-[#0040e0] dark:focus:border-[#4e86b0] focus:ring-2 focus:ring-[#0040e0]/20 dark:focus:ring-[#4e86b0]/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-[#0040e0] dark:bg-[#4e86b0] text-white font-semibold text-[15px] hover:bg-[#2e5bff] dark:hover:bg-[#5a96c4] active:scale-95 transition-all disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send Message"}
            </button>
          </form>
        </FadeInSection>

        {/* Social links */}
        <FadeInSection delay={0.2}>
          <div className="flex items-center justify-center gap-5 mt-10">
            <a
              href="https://github.com/nr1306"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-[#191c1e] dark:text-[#8fa8c2] hover:text-[#0040e0] dark:hover:text-[#4e86b0] hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/nesh-rochwani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-[#191c1e] dark:text-[#8fa8c2] hover:text-[#0040e0] dark:hover:text-[#4e86b0] hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </FadeInSection>
      </div>

      {/* Success toast */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 flex items-center gap-3 px-5 py-4 rounded-[16px] bg-[#0040e0] dark:bg-[#4e86b0] text-white shadow-xl z-50"
          >
            <CheckCircle2 size={18} />
            <span className="text-[14px] font-semibold">Message sent — I&apos;ll be in touch!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error toast */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 flex items-center gap-3 px-5 py-4 rounded-[16px] bg-red-500 text-white shadow-xl z-50"
          >
            <AlertCircle size={18} />
            <span className="text-[14px] font-semibold">Something went wrong — try again.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
