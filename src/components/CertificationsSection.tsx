import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { certifications, awards } from "../data/portfolio";
import { BadgeCheck, Trophy } from "lucide-react";

export default function CertificationsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="certifications" className="sec relative" style={{ background: "#1C1C21" }}>
      <div className="dot-grid absolute inset-0 opacity-50 pointer-events-none" />

      <div className="wrap relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 48 }}
        >
          <p className="section-eyebrow">Recognition</p>
          <h2 className="display-lg">
            Certifications <span className="grad-cyan-uv">&amp; Awards</span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 48,
        }} className="certs-grid">
          {/* Certifications */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <BadgeCheck size={18} style={{ color: "#00E5FF" }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(230,232,235,0.6)" }}>
                Professional Certifications
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {certifications.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: -14 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.05 + 0.15 }}
                  className="card-sm group"
                  style={{
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    position: "relative",
                    overflow: "hidden",
                    background: "rgba(230,232,235,0.02)",
                    border: "1px solid rgba(230,232,235,0.06)",
                    transition: "border-color 0.3s ease, transform 0.3s ease",
                    flexWrap: "wrap",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,255,0.2)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(230,232,235,0.06)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: 3,
                      background: "linear-gradient(to bottom, #00E5FF, transparent)",
                      transition: "opacity 300ms ease",
                      opacity: 0,
                    }}
                    className="group-hover:!opacity-100"
                  />
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: "#E6E8EB", lineHeight: 1.4, margin: 0 }}>
                      {c.name}
                    </p>
                    <p style={{ fontSize: 12, color: "rgba(230,232,235,0.45)", marginTop: 4, margin: "4px 0 0 0" }}>{c.issuer}</p>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "rgba(0,229,255,0.5)",
                      flexShrink: 0,
                    }}
                  >
                    {c.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <Trophy size={18} style={{ color: "#FACC15" }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(230,232,235,0.6)" }}>
                Scholarships &amp; Awards
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {awards.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, x: 14 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.09 + 0.15 }}
                  className="card-sm group"
                  style={{
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    position: "relative",
                    overflow: "hidden",
                    background: "rgba(230,232,235,0.02)",
                    border: "1px solid rgba(230,232,235,0.06)",
                    transition: "border-color 0.3s ease, transform 0.3s ease",
                    flexWrap: "wrap",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(250,204,21,0.2)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(230,232,235,0.06)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      width: 3,
                      background: "linear-gradient(to bottom, #FACC15, transparent)",
                      transition: "opacity 300ms ease",
                      opacity: 0,
                    }}
                    className="group-hover:!opacity-100"
                  />
                  <span style={{ fontSize: 18 }}>🏆</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 500, color: "#E6E8EB", lineHeight: 1.4, margin: 0 }}>
                      {a.name}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "rgba(230,232,235,0.3)",
                      flexShrink: 0,
                    }}
                  >
                    {a.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 760px) {
          .certs-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
