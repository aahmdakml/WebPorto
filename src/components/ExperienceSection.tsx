import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { experience } from "../data/portfolio";
import { CalendarDays, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const { ref, inView } = useInView();
  const [selected, setSelected] = useState(0);
  const exp = experience[selected];

  return (
    <section id="experience" className="sec relative" style={{ background: "#1C1C21" }}>
      {/* Subtle UV glow right */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 400, height: 600,
          background: "radial-gradient(ellipse, rgba(45,0,107,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 48 }}
        >
          <p className="section-eyebrow">Experience & Org</p>
          <h2 className="display-lg">
            Work & <span className="grad-cyan-uv">Contributions</span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: 48,
          alignItems: "start",
        }} className="experience-grid">
          {/* ── Sidebar list ── */}
          <div className="experience-tabs-wrapper">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="experience-tabs-container"
              style={{ display: "flex", gap: 8 }}
            >
              {experience.map((e, i) => (
                <button
                  key={e.role}
                  id={`exp-tab-${i}`}
                  className={`exp-tab ${selected === i ? "active" : ""}`}
                  onClick={() => setSelected(i)}
                >
                  <p className="exp-tab-title">{e.role}</p>
                  <p className="exp-tab-sub">{e.company}</p>
                </button>
              ))}
            </motion.div>
          </div>

          {/* ── Detail panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="card expanded-exp-card"
              style={{ minHeight: 320, maxWidth: "100%", overflow: "hidden", wordBreak: "break-word" }}
            >
              {/* Header */}
              <div
                className="expanded-exp-header"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 16,
                  marginBottom: 24,
                  borderRadius: 16,
                  background: "linear-gradient(135deg, rgba(0,229,255,0.08) 0%, rgba(0,229,255,0.02) 100%)",
                  border: "1px solid rgba(0,229,255,0.15)",
                  boxShadow: "0 4px 24px rgba(0,229,255,0.03)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 128,
                    height: 128,
                    borderRadius: "50%",
                    filter: "blur(40px)",
                    opacity: 0.2,
                    background: "#00E5FF",
                    transform: "translate(30%, -30%)",
                  }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", marginBottom: 6, fontFamily: "'Space Grotesk', sans-serif" }}>{exp.role}</h3>
                  <p style={{ color: "#00E5FF", fontSize: 16, fontWeight: 600, margin: 0 }}>{exp.company}</p>
                </div>
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 16px",
                    borderRadius: 12,
                    flexShrink: 0,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <CalendarDays size={14} style={{ color: "rgba(255,255,255,0.7)" }} />
                  <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, marginBottom: 24, background: "rgba(230,232,235,0.07)" }} />

              {/* Bullets */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                {exp.highlights.map((h, hi) => (
                  <li
                    key={hi}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.03)",
                      transition: "all 300ms ease",
                    }}
                    className="exp-bullet"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,255,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.03)";
                    }}
                  >
                    <div style={{
                      flexShrink: 0,
                      marginTop: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "rgba(0,229,255,0.1)",
                    }}>
                      <CheckCircle2 size={14} style={{ color: "#00E5FF", opacity: 0.9 }} />
                    </div>
                    <span className="body-md" style={{ color: "rgba(230,232,235,0.85)", lineHeight: 1.65 }}>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech chips */}
              {exp.tech && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingTop: 20, borderTop: "1px solid rgba(230,232,235,0.06)" }}>
                  {exp.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Responsive override for mobile: stack sidebar above detail */}
      <style>{`
        .expanded-exp-card { padding: 40px; }
        .expanded-exp-header { padding: 24px; }
        .exp-bullet { padding: 20px; gap: 16px; border-radius: 12px; }
        .experience-tabs-container {
          flex-direction: column;
        }

        @media (max-width: 1023px) {
          .experience-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 24px !important;
          }
          .experience-tabs-container {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 8px;
            scroll-snap-type: x mandatory;
          }
          .experience-tabs-container::-webkit-scrollbar {
            display: none;
          }
          .experience-tabs-wrapper {
            position: relative;
            margin: 0 -24px;
            width: auto;
          }
          .experience-tabs-container {
            padding: 0 48px 8px 24px !important;
          }
          .experience-tabs-wrapper::after {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0;
            width: 48px;
            background: linear-gradient(to right, transparent, var(--obs));
            pointer-events: none;
          }
          .exp-tab {
            width: auto !important;
            min-width: 220px;
            flex-shrink: 0;
            scroll-snap-align: start;
          }
        }

        @media (max-width: 768px) {
          .expanded-exp-card { padding: 16px; }
          .expanded-exp-header { padding: 16px; }
          .exp-bullet { padding: 12px; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
