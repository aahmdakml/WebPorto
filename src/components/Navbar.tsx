import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("");
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      let cur = "";
      for (const { href } of links) {
        const el = document.getElementById(href.slice(1));
        if (el && window.scrollY >= el.offsetTop - 160) cur = href.slice(1);
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Full-Width Sticky Navbar ── */}
      <motion.header
        className="nav-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 300ms ease",
          background: scrolled ? "rgba(28, 28, 33, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(140%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(140%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div
          className="nav-container"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            id="nav-logo"
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 18,
              cursor: "pointer",
              background: "linear-gradient(135deg, #00E5FF 0%, #2D006B 100%)",
              color: "#1C1C21",
              fontFamily: "'Space Grotesk', sans-serif",
              border: "none",
              outline: "none",
            }}
          >
            A
          </button>

          {/* Center Nav Links */}
          <nav
            style={{
              gap: 8,
            }}
            className="hidden md:flex items-center"
          >
            {links.map(({ label, href }) => (
              <button
                key={href}
                id={`nav-${label.toLowerCase()}`}
                onClick={() => scrollTo(href)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 9999,
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 200ms ease",
                  color: active === href.slice(1) ? "#00E5FF" : "rgba(230,232,235,0.6)",
                  background: active === href.slice(1) ? "rgba(0,229,255,0.08)" : "transparent",
                  border: "none",
                  outline: "none",
                }}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right CTA */}
          <button
            id="nav-contact-cta"
            onClick={() => scrollTo("#contact")}
            className="hidden md:inline-flex items-center"
            style={{
              gap: 8,
              padding: "10px 24px",
              borderRadius: 9999,
              background: "#00E5FF",
              color: "#1C1C21",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              outline: "none",
              boxShadow: "0 0 24px rgba(0,229,255,0.2)",
            }}
          >
            Contact Me
          </button>

          {/* Mobile toggle */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{
              padding: 8,
              borderRadius: 9999,
              color: "rgba(230,232,235,0.6)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <style>{`
        @media (max-width: 768px) {
          .nav-header {
            background: transparent !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            border-bottom: none !important;
            box-shadow: none !important;
            pointer-events: none;
          }
          .nav-container {
            justify-content: flex-end !important;
          }
          #nav-logo {
            display: none !important;
          }
          #nav-mobile-toggle {
            pointer-events: auto;
            background: rgba(28, 28, 33, 0.85) !important;
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.08) !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.3) !important;
            padding: 10px !important;
          }
        }
      `}</style>

      {/* ── Mobile menu Dropdown ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 74,
              left: 24,
              right: 24,
              zIndex: 40,
              background: "rgba(28, 28, 33, 0.95)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(230,232,235,0.08)",
              borderRadius: 16,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
            className="md:hidden"
          >
            {links.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => { scrollTo(href); setOpen(false); }}
                style={{
                  textAlign: "left",
                  padding: "12px 16px",
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 500,
                  color: active === href.slice(1) ? "#00E5FF" : "rgba(230,232,235,0.7)",
                  background: active === href.slice(1) ? "rgba(0,229,255,0.08)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => { scrollTo("#contact"); setOpen(false); }}
              style={{
                marginTop: 8,
                textAlign: "center",
                padding: "12px 16px",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 600,
                background: "#00E5FF",
                color: "#1C1C21",
                border: "none",
                cursor: "pointer",
              }}
            >
              Contact Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
