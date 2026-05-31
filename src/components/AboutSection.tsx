import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { about, education } from "../data/portfolio";
import { GraduationCap } from "lucide-react";

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="sec relative" style={{ background: "#1C1C21" }}>
      {/* UV atmosphere top-left */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: 500, height: 400,
          background: "radial-gradient(ellipse, rgba(45,0,107,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 56 }}
        >
          <p className="section-eyebrow">About Me</p>
          <h2 className="display-lg">
            The Story <span className="grad-cyan-uv">Behind the Code</span>
          </h2>
        </motion.div>

        {/* Stacked layout: Bio THEN Education */}
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.55 }}
            style={{ maxWidth: 768 }}
          >
            <p className="body-lg" style={{ marginBottom: 24 }}>{about.bio1}</p>
            <p className="body-md" style={{ marginBottom: 40 }}>{about.bio2}</p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {about.keywords.map((kw) => (
                <span key={kw} className="tag tag-cyan">{kw}</span>
              ))}
            </div>
          </motion.div>

          {/* Education Background */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.55 }}
            style={{ width: "100%" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <GraduationCap size={22} style={{ color: "#00E5FF" }} />
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "rgba(230,232,235,0.9)", margin: 0 }}>
                Education Background
              </h3>
            </div>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}>
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="card"
                  style={{
                    padding: 32,
                    background: "rgba(230,232,235,0.02)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
                      <div>
                        <h4 style={{ fontSize: 17, fontWeight: 600, marginBottom: 4, color: "#E6E8EB" }}>{edu.degree}</h4>
                        <p style={{ color: "#00E5FF", fontSize: 14, margin: 0 }}>{edu.institution}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span className="label" style={{ display: "block", marginBottom: 4, color: "rgba(230,232,235,0.4)" }}>{edu.period}</span>
                        <span className="label" style={{ display: "block", color: "rgba(0,229,255,0.7)" }}>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                    <div style={{ height: 1, width: "100%", marginBottom: 16, background: "rgba(230,232,235,0.08)" }} />
                    <p className="body-sm" style={{ color: "rgba(230,232,235,0.6)", lineHeight: 1.65 }}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
