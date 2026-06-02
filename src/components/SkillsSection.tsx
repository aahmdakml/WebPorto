import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { skills } from "../data/portfolio";

const groups = [
  { label: "Languages",           items: skills.languages },
  { label: "Embedded & Hardware", items: skills.embedded },
  { label: "IoT & Systems",       items: skills.iot },
  { label: "AI / ML",             items: skills.ai },
  { label: "Frontend & Mobile",   items: skills.frontend },
  { label: "Backend & API",       items: skills.backend },
  { label: "DevOps & Tools",      items: skills.devops },
  { label: "Domain Knowledge",    items: skills.domain },
];

const coreSkills = [
  "ESP32 / STM32",
  "C / C++",
  "React / Next.js",
  "Python",
  "MQTT / IoT Protocol",
  "PostgreSQL",
  "TypeScript",
  "Tailwind CSS"
];

const allSkills = [
  ...skills.languages, ...skills.embedded, ...skills.iot,
  ...skills.ai, ...skills.frontend, ...skills.backend, ...skills.devops,
];

export default function SkillsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="sec relative overflow-hidden" style={{ background: "#1C1C21" }}>
      {/* UV glow top-right */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 500, height: 400,
          background: "radial-gradient(ellipse, rgba(45,0,107,0.20) 0%, transparent 65%)",
        }}
      />

      <div className="wrap relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 56 }}
        >
          <p className="section-eyebrow">Technical Skills</p>
          <h2 className="display-lg">
            My Tech <span className="grad-cyan-uv">Arsenal</span>
          </h2>
        </motion.div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 64,
        }}>
          {/* Top: Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="card"
            style={{ padding: "40px 48px" }}
          >
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 32, color: "rgba(0,229,255,0.8)", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Core Competencies
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
              {coreSkills.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="hover:-translate-y-1 transition-transform duration-300"
                  style={{
                    padding: "10px 20px",
                    borderRadius: 9999,
                    background: "rgba(0,229,255,0.08)",
                    border: "1px solid rgba(0,229,255,0.2)",
                    color: "#00E5FF",
                    fontSize: 14,
                    fontWeight: 600,
                    boxShadow: "0 0 20px rgba(0,229,255,0.05)",
                    fontFamily: "'Space Grotesk', sans-serif",
                    cursor: "default"
                  }}
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom: category grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
            className="skills-category-grid"
          >
            {groups.map((g, gi) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + gi * 0.05 }}
                style={{
                  padding: 24,
                  borderRadius: 16,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  background: "linear-gradient(135deg, rgba(0,229,255,0.06) 0%, rgba(45,0,107,0.15) 100%)",
                  border: "1px solid rgba(0,229,255,0.15)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,255,0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,229,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,255,0.15)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
                }}
              >
                {/* Corner highlight */}
                <div
                  style={{
                    position: "absolute",
                    top: -48,
                    right: -48,
                    width: 128,
                    height: 128,
                    borderRadius: "50%",
                    filter: "blur(40px)",
                    opacity: 0.3,
                    background: "#00E5FF",
                    transition: "opacity 300ms ease",
                  }}
                />
                <p
                  className="label"
                  style={{ marginBottom: 16, color: "rgba(0,229,255,0.8)", fontSize: 12, position: "relative", zIndex: 1, fontWeight: 600, letterSpacing: "0.05em" }}
                >
                  {g.label}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, position: "relative", zIndex: 1, marginTop: "auto" }}>
                  {g.items.map((item) => (
                    <span key={item} className="tag" style={{ fontSize: 12, padding: "6px 12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Marquee ticker ── */}
      <div
        style={{
          marginTop: 112,
          paddingTop: 24,
          paddingBottom: 24,
          overflow: "hidden",
          borderTop: "1px solid rgba(230,232,235,0.06)",
          borderBottom: "1px solid rgba(230,232,235,0.06)",
        }}
      >
        <div className="marquee" style={{ display: "flex", gap: 32, whiteSpace: "nowrap", width: "max-content" }}>
          {[...allSkills, ...allSkills].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="label"
              style={{ color: "rgba(230,232,235,0.18)", fontSize: 11, letterSpacing: "0.12em" }}
            >
              {s}
              <span style={{ margin: "0 8px", color: "rgba(0,229,255,0.25)" }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 860px) {
          .skills-category-grid {
            grid-template-columns: 1fr !important;
          }
          .core-skills-grid {
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
