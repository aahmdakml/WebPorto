import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Github, Mail, MapPin, Sparkles } from "lucide-react";
import { profile, stats } from "../data/portfolio";
import Typewriter from "./Typewriter";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#1C1C21" }}
    >
      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      {/* UV glow — top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%", right: "-5%",
          width: 700, height: 700,
          background: "radial-gradient(circle, rgba(45,0,107,0.35) 0%, transparent 65%)",
          filter: "blur(2px)",
        }}
      />
      {/* Cyan glow — bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%", left: "-5%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="wrap w-full pt-28 lg:pt-32 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0,229,255,0.07)",
                border: "1px solid rgba(0,229,255,0.18)",
              }}
            >
              <span className="pulse-glow w-2 h-2 rounded-full" style={{ background: "#00E5FF" }} />
              <span className="label" style={{ color: "#00E5FF" }}>
                Available for opportunities
              </span>
              <MapPin size={11} style={{ color: "rgba(0,229,255,0.6)" }} />
              <span className="label" style={{ color: "rgba(0,229,255,0.6)" }}>Indonesia</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="display-xl mb-2"
            >
              {profile.name.split(" ").slice(0, 2).join(" ")}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="display-xl grad-cyan-uv mb-6"
            >
              {profile.name.split(" ").slice(2).join(" ")}
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <span style={{ color: "rgba(0,229,255,0.5)", fontFamily: "'JetBrains Mono', monospace", fontSize: 15 }}>
                &gt;
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 15, color: "rgba(230,232,235,0.7)" }}>
                <Typewriter
                  words={[
                    "IoT Systems Builder",
                    "Embedded Engineer",
                    "Full-Stack Developer",
                    "AI/ML Practitioner",
                    "AgriTech Innovator",
                  ]}
                />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="body-lg mb-8 max-w-lg"
            >
              {profile.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 24,
                marginBottom: 36,
                marginTop: 24
              }}
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn btn-primary"
                id="hero-view-projects"
              >
                <Sparkles size={15} />
                View Projects
              </button>
              <a href={profile.cv} download id="hero-download-cv" className="btn btn-ghost">
                Download CV
              </a>
            </motion.div>

            {/* Social + email row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              {[
                { icon: <Linkedin size={16} />, href: profile.linkedin, id: "hero-linkedin" },
                { icon: <Github size={16} />, href: "https://github.com/AhmadADefatra", id: "hero-github" },
                { icon: <Mail size={16} />, href: `mailto:${profile.email}`, id: "hero-email-icon" },
              ].map((s) => (
                <a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(230,232,235,0.07)",
                    border: "1px solid rgba(230,232,235,0.10)",
                    color: "rgba(230,232,235,0.5)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,255,0.35)";
                    (e.currentTarget as HTMLElement).style.color = "#00E5FF";
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,229,255,0.07)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(230,232,235,0.10)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(230,232,235,0.5)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(230,232,235,0.07)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
              <span className="body-sm ml-1">{profile.email}</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Photo Placeholder ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col items-center justify-center gap-8"
          >
            {/* Photo frame */}
            <div className="relative float-y">
              {/* Spinning outer ring */}
              <div
                className="spin-slow absolute -inset-3 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 60%, #00E5FF, #2D006B, transparent 100%)",
                  padding: 2,
                  borderRadius: "50%",
                }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ background: "#1C1C21" }}
                />
              </div>

              {/* Photo container */}
              <div
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(45,0,107,0.4) 0%, rgba(0,229,255,0.06) 100%)",
                  border: "2px dashed rgba(0,229,255,0.25)",
                }}
              >
                {/* Placeholder state — replace with <img> when you have your photo */}
                <div className="flex flex-col items-center gap-3 text-center px-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(0,229,255,0.10)", border: "1px solid rgba(0,229,255,0.2)" }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="#00E5FF" strokeWidth="1.5" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p style={{ fontSize: 12, color: "rgba(0,229,255,0.7)", fontFamily: "'JetBrains Mono', monospace" }}>
                    Your Photo Here
                  </p>
                  <p style={{ fontSize: 10, color: "rgba(230,232,235,0.3)", fontFamily: "'JetBrains Mono', monospace" }}>
                    /public/assets/avatar.png
                  </p>
                </div>
              </div>

              {/* Tags floating around the photo */}
              <div
                className="absolute -top-2 -right-4 px-3 py-1.5 rounded-full text-[11px] font-medium"
                style={{
                  background: "rgba(45,0,107,0.8)",
                  border: "1px solid rgba(0,229,255,0.2)",
                  color: "#E6E8EB",
                  backdropFilter: "blur(12px)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                ITS · Surabaya
              </div>
              <div
                className="absolute -bottom-2 -left-6 px-3 py-1.5 rounded-full text-[11px] font-mono"
                style={{
                  background: "rgba(0,229,255,0.10)",
                  border: "1px solid rgba(0,229,255,0.25)",
                  color: "#00E5FF",
                  backdropFilter: "blur(12px)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                GPA {profile.gpa} / 4.00
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p
                    className="display-md grad-cyan-uv"
                    style={{ lineHeight: 1 }}
                  >
                    {s.value}
                  </p>
                  <p className="body-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "rgba(230,232,235,0.3)" }}
      >
        <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>scroll</span>
        <ArrowDown size={14} className="pulse-glow" />
      </motion.div>
    </section>
  );
}
