import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{ borderTop: "1px solid rgba(230,232,235,0.06)", background: "#1C1C21" }}
    >
      <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left" style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "rgba(230,232,235,0.25)" }}>
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "rgba(230,232,235,0.5)", fontWeight: 600 }}>Ahmad Akmal Defatra</span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>React + Vite + Tailwind
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: <Linkedin size={15} />, href: profile.linkedin, label: "LinkedIn" },
            { icon: <Github size={15} />, href: "https://github.com/aahmdakml", label: "GitHub" },
            { icon: <Mail size={15} />, href: `mailto:${profile.email}`, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2 rounded-full transition-all duration-200"
              style={{ color: "rgba(230,232,235,0.25)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "#00E5FF";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,229,255,0.07)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "rgba(230,232,235,0.25)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
