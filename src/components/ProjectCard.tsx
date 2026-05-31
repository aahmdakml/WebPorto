import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  year: string;
  category: string;
  status: string;
  image: string;
  description: string;
  highlights: string[];
  tech: string[];
  color: string;
};

export default function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
  featured?: boolean;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      whileHover={{ y: -4 }}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        borderRadius: 20,
        overflow: "hidden",
        cursor: "default",
        background: "#222229",
        border: "1px solid rgba(230,232,235,0.07)",
        transition: "border-color 280ms ease, box-shadow 280ms ease, transform 280ms ease",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(0,229,255,0.22)";
        el.style.boxShadow = "0 4px 40px rgba(0,229,255,0.07), 0 0 0 1px rgba(0,229,255,0.06)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(230,232,235,0.07)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 220, overflow: "hidden", flexShrink: 0 }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 500ms ease", opacity: 0.65 }}
          className="group-hover:scale-[1.05]"
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(34,34,41,0) 30%, rgba(34,34,41,0.98) 100%)",
          }}
        />
        {/* UV tint */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.3,
            background: "linear-gradient(135deg, rgba(45,0,107,0.4) 0%, transparent 60%)",
          }}
        />

        {/* Status badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 10px",
            borderRadius: 9999,
            background: project.status === "ongoing" ? "rgba(0,229,255,0.12)" : "rgba(230,232,235,0.07)",
            border: project.status === "ongoing" ? "1px solid rgba(0,229,255,0.25)" : "1px solid rgba(230,232,235,0.10)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            style={{
              width: 6, height: 6, borderRadius: "50%",
              background: project.status === "ongoing" ? "#00E5FF" : "rgba(230,232,235,0.3)",
            }}
          />
          <span
            style={{
              fontSize: 10,
              fontFamily: "'JetBrains Mono', monospace",
              color: project.status === "ongoing" ? "#00E5FF" : "rgba(230,232,235,0.35)",
            }}
          >
            {project.status === "ongoing" ? "live" : "done"}
          </span>
        </div>

        {/* Year */}
        <span
          style={{
            position: "absolute",
            bottom: 12,
            left: 16,
            fontSize: 10,
            fontFamily: "'JetBrains Mono', monospace",
            color: "rgba(230,232,235,0.3)",
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: 32, display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, color: "#E6E8EB", lineHeight: 1.35, margin: 0 }}>
            {project.title}
          </h3>
          <ExternalLink
            size={18}
            style={{ flexShrink: 0, marginTop: 2, color: "rgba(230,232,235,0.25)", transition: "color 200ms ease" }}
          />
        </div>
        <p style={{ fontSize: 13, fontFamily: "'JetBrains Mono', monospace", color: "rgba(230,232,235,0.4)", marginBottom: 16, margin: "0 0 16px 0" }}>
          {project.subtitle}
        </p>
        <p style={{ fontSize: 14, color: "rgba(230,232,235,0.55)", lineHeight: 1.75, marginBottom: 20, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
          {project.description}
        </p>

        {/* Highlights */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
          {project.highlights.slice(0, 2).map((h, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span
                style={{
                  width: 6, height: 6, borderRadius: "50%", marginTop: 8, flexShrink: 0,
                  background: "#00E5FF", opacity: 0.5,
                }}
              />
              <span style={{ fontSize: 13, color: "rgba(230,232,235,0.45)", lineHeight: 1.65 }}>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingTop: 16, borderTop: "1px solid rgba(230,232,235,0.06)" }}
        >
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          {project.tech.length > 5 && (
            <span className="tag">+{project.tech.length - 5}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
