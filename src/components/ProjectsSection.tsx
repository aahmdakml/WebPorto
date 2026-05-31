import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { projects, type ProjectCategory } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Hardware & IoT", value: "iot" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "AI & Data", value: "ai" },
];

export default function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory>("all");
  const { ref, inView } = useInView();

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="sec relative" style={{ background: "#1C1C21" }}>
      <div className="dot-grid absolute inset-0 opacity-60 pointer-events-none" />

      {/* Cyan glow center-bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 700, height: 300,
          background: "radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="wrap relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 48 }}
        >
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="display-lg">
            Things I've <span className="grad-cyan-uv">Shipped</span>
          </h2>
          <p className="body-md" style={{ marginTop: 12, maxWidth: 520 }}>
            From field-deployed IoT hardware to enterprise ERPs and AI-powered analytics.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 40 }}
          id="project-filter-bar"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              id={`filter-${f.value}`}
              onClick={() => setActive(f.value)}
              style={{
                padding: "8px 18px",
                fontSize: 13,
                borderRadius: 9999,
                background: active === f.value ? "#00E5FF" : "rgba(230,232,235,0.06)",
                color: active === f.value ? "#1C1C21" : "rgba(230,232,235,0.55)",
                border: active === f.value ? "1px solid #00E5FF" : "1px solid rgba(230,232,235,0.10)",
                boxShadow: active === f.value ? "0 0 24px rgba(0,229,255,0.25)" : "none",
                fontWeight: active === f.value ? 700 : 500,
                cursor: "pointer",
                outline: "none",
              }}
            >
              {f.label}
            </button>
          ))}
          <span
            className="label"
            style={{ marginLeft: "auto", color: "rgba(230,232,235,0.25)" }}
          >
            {filtered.length} / {projects.length}
          </span>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: 32,
            }}
            className="projects-grid"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                inView={inView}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Responsive: single column on small screens */}
      <style>{`
        @media (max-width: 860px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
