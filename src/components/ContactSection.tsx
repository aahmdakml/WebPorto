import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { profile } from "../data/portfolio";
import { Mail, Linkedin, Github, Phone, Download, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    id: "contact-email",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "Ahmad Akmal Defatra",
    href: profile.linkedin,
    id: "contact-linkedin",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "AhmadADefatra",
    href: "https://github.com/aahmdakml",
    id: "contact-github",
  },
  {
    icon: <Phone size={18} />,
    label: "WhatsApp",
    value: profile.phone,
    href: "https://wa.me/6281283956235",
    id: "contact-whatsapp",
  },
];

export default function ContactSection() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="sec relative overflow-hidden" style={{ background: "#1C1C21" }}>
      {/* UV ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(45,0,107,0.30) 0%, transparent 70%)",
        }}
      />
      {/* Cyan top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 600, height: 200,
          background: "radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="wrap relative">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: 48,
          alignItems: "start",
        }} className="contact-grid">
          {/* Left: Text & Contact Cards */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <p className="section-eyebrow">Get In Touch</p>
            <h2 className="display-lg" style={{ marginBottom: 20 }}>
              Let's Build <span className="grad-cyan-uv">Something Great</span>
            </h2>
            <p className="body-lg" style={{ marginBottom: 64, maxWidth: 440 }}>
              Open to embedded systems, full-stack, IoT, or AgriTech roles. Let's connect.
            </p>

            {/* Contact grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
              marginBottom: 64,
              textAlign: "left",
            }} className="contact-cards-grid">
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={c.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08 + 0.2 }}
                  whileHover={{ y: -3 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: 16,
                    background: "#222229",
                    border: "1px solid rgba(230,232,235,0.07)",
                    transition: "border-color 250ms ease, box-shadow 250ms ease",
                    textDecoration: "none",
                    minWidth: 0,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(0,229,255,0.22)";
                    el.style.boxShadow = "0 4px 32px rgba(0,229,255,0.06)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(230,232,235,0.07)";
                    el.style.boxShadow = "none";
                  }}
                  className="contact-card-item"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        background: "rgba(0,229,255,0.08)",
                        border: "1px solid rgba(0,229,255,0.15)",
                        color: "#00E5FF",
                      }}
                    >
                      {c.icon}
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="hidden sm:block"
                      style={{ color: "rgba(230,232,235,0.2)", marginLeft: "auto" }}
                    />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: "rgba(230,232,235,0.4)", marginBottom: 4, margin: "0 0 4px 0" }}>
                      {c.label}
                    </p>
                    <p style={{ fontSize: 14, fontWeight: 500, color: "#E6E8EB", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {c.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Download CV */}
            <motion.a
              href={profile.cv}
              download
              id="contact-download-cv"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.55 }}
              whileHover={{ scale: 1.02 }}
              className="btn btn-primary"
              style={{ fontSize: 15, padding: "14px 32px", width: "fit-content", display: "inline-flex" }}
            >
              <Download size={16} />
              Download Full CV
            </motion.a>
          </motion.div>

          {/* Right: Send Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.55 }}
            className="card"
            style={{
              padding: 40,
              background: "linear-gradient(145deg, rgba(230,232,235,0.02) 0%, rgba(230,232,235,0.01) 100%)",
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24, color: "#E6E8EB" }}>Send a Message</h3>
            <form
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Portfolio Contact: ${formData.get('subject')}`);
                const body = encodeURIComponent(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`);
                window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label htmlFor="name" style={{ fontSize: 14, color: "rgba(230,232,235,0.7)" }}>Name</label>
                  <input
                    type="text" name="name" id="name" required placeholder="John Doe"
                    style={{
                      width: "100%",
                      background: "#1C1C21",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      padding: "12px 16px",
                      fontSize: 14,
                      color: "#E6E8EB",
                      outline: "none",
                      transition: "border-color 200ms ease",
                    }}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = "#00E5FF"}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label htmlFor="email" style={{ fontSize: 14, color: "rgba(230,232,235,0.7)" }}>Email</label>
                  <input
                    type="email" name="email" id="email" required placeholder="john@example.com"
                    style={{
                      width: "100%",
                      background: "#1C1C21",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      padding: "12px 16px",
                      fontSize: 14,
                      color: "#E6E8EB",
                      outline: "none",
                      transition: "border-color 200ms ease",
                    }}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = "#00E5FF"}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label htmlFor="subject" style={{ fontSize: 14, color: "rgba(230,232,235,0.7)" }}>Subject</label>
                <input
                  type="text" name="subject" id="subject" required placeholder="Project Inquiry"
                  style={{
                    width: "100%",
                    background: "#1C1C21",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    padding: "12px 16px",
                    fontSize: 14,
                    color: "#E6E8EB",
                    outline: "none",
                    transition: "border-color 200ms ease",
                  }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = "#00E5FF"}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label htmlFor="message" style={{ fontSize: 14, color: "rgba(230,232,235,0.7)" }}>Message</label>
                <textarea
                  name="message" id="message" rows={4} required placeholder="Hello Ahmad..."
                  style={{
                    width: "100%",
                    background: "#1C1C21",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 12,
                    padding: "12px 16px",
                    fontSize: 14,
                    color: "#E6E8EB",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 200ms ease",
                  }}
                  onFocus={e => (e.target as HTMLElement).style.borderColor = "#00E5FF"}
                  onBlur={e => (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "14px 0",
                  fontSize: 15,
                  marginTop: 8,
                  background: "#00E5FF",
                  color: "#1C1C21",
                }}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        .contact-card-item {
          padding: 24px;
        }
        @media (max-width: 820px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .contact-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .contact-card-item {
            padding: 16px;
          }
        }
        @media (max-width: 480px) {
          .contact-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .contact-card-item {
            padding: 12px 16px;
          }
        }
      `}</style>
    </section>
  );
}
