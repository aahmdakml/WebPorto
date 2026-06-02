import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { projects, type ProjectCategory } from "../data/portfolio";

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Hardware & IoT", value: "iot" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "AI & Data", value: "ai" },
];

export default function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory>("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Open first one by default
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
              onClick={() => {
                setActive(f.value);
                setExpandedIndex(null); // Reset accordion on filter change
              }}
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
                transition: "all 0.2s ease"
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

        {/* Tech Directory Accordion List */}
        <motion.div layout className="flex flex-col gap-3">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: isExpanded ? "linear-gradient(90deg, rgba(0,229,255,0.06) 0%, transparent 100%)" : "rgba(28, 28, 33, 0.4)",
                    border: isExpanded ? "1px solid rgba(0,229,255,0.3)" : "1px solid rgba(230,232,235,0.08)",
                    borderLeft: isExpanded ? "3px solid #00E5FF" : "1px solid rgba(230,232,235,0.08)",
                    borderRadius: 12,
                    marginBottom: 12,
                    overflow: "hidden",
                    boxShadow: isExpanded ? "0 0 32px rgba(0,229,255,0.05)" : "none",
                  }}
                  className={`group transition-all duration-300 ${!isExpanded && "hover:border-[rgba(0,229,255,0.2)] hover:bg-[rgba(255,255,255,0.02)]"}`}
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                    style={{
                      width: "100%",
                      cursor: "pointer",
                      background: "transparent",
                      border: "none",
                    }}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 text-left project-row-header"
                  >
                    <div className="flex flex-col gap-1 flex-1 w-full">
                      <div className="flex items-start md:items-center justify-between md:justify-start gap-3 w-full md:w-auto">
                        <div className="flex items-center gap-3">
                          <span className="label transition-colors duration-300" style={{ color: isExpanded ? "#00E5FF" : "rgba(0,229,255,0.5)" }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="heading-sm pr-4 md:pr-0 transition-colors duration-300 group-hover:text-cyan-400" style={{ color: isExpanded ? "#fff" : "rgba(230,232,235,0.9)", lineHeight: 1.4 }}>
                            {project.title}
                          </h3>
                        </div>
                        {/* Mobile chevron */}
                        <svg 
                          width="20" height="20" viewBox="0 0 24 24" fill="none" 
                          className="md:hidden flex-shrink-0 mt-1"
                          style={{
                            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                            opacity: 0.5
                          }}
                        >
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="body-sm" style={{ paddingLeft: 30, color: "rgba(230,232,235,0.5)" }}>
                        {project.subtitle} • {project.year}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pl-[30px] md:pl-0 w-full md:w-auto justify-between md:justify-end">
                      <span
                        className="label uppercase tracking-widest"
                        style={{
                          fontSize: 10,
                          padding: "4px 8px",
                          borderRadius: 4,
                          background: project.status === "ongoing" ? "rgba(0,229,255,0.1)" : "rgba(230,232,235,0.1)",
                          color: project.status === "ongoing" ? "#00E5FF" : "rgba(230,232,235,0.6)",
                          border: project.status === "ongoing" ? "1px solid rgba(0,229,255,0.2)" : "1px solid transparent"
                        }}
                      >
                        {project.status}
                      </span>
                      
                      {/* Desktop chevron */}
                      <svg 
                        width="20" height="20" viewBox="0 0 24 24" fill="none" 
                        className="hidden md:block"
                        style={{
                          transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                          opacity: 0.5
                        }}
                      >
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>

                  {/* Expanded Detail Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          className="flex flex-col lg:flex-row expanded-project-content"
                          style={{ borderTop: "1px solid rgba(230,232,235,0.05)", gap: "32px" }}
                        >
                          {/* Image Container */}
                          <div className="lg:w-1/3 flex-shrink-0">
                            <div
                              style={{
                                width: "100%",
                                aspectRatio: "16/9",
                                borderRadius: 8,
                                overflow: "hidden",
                                background: "rgba(0,0,0,0.5)",
                                border: "1px solid rgba(230,232,235,0.1)"
                              }}
                            >
                              <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
                                className="hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>
                          </div>

                          {/* Content Detail */}
                          <div className="flex flex-col gap-4 flex-1">
                            <p className="body-md" style={{ color: "rgba(230,232,235,0.85)" }}>
                              {project.description}
                            </p>

                            <ul style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: 0, listStyle: "none" }}>
                              {project.highlights.map((hl, idx) => (
                                <li key={idx} className="body-sm flex gap-3 items-start" style={{ color: "rgba(230,232,235,0.65)" }}>
                                  <span style={{ color: "#00E5FF", marginTop: 2 }}>▹</span>
                                  {hl}
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-2" style={{ marginTop: "16px" }}>
                              {project.tech.map((t, idx) => (
                                <span
                                  key={idx}
                                  className="label"
                                  style={{
                                    fontSize: 11,
                                    padding: "4px 10px",
                                    borderRadius: 9999,
                                    background: "rgba(230,232,235,0.06)",
                                    color: "rgba(230,232,235,0.7)",
                                  }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .project-row-header {
          padding: 24px 32px;
        }
        .expanded-project-content {
          padding: 40px;
        }
        @media (max-width: 768px) {
          .project-row-header {
            padding: 20px 24px;
          }
          .expanded-project-content {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
}
