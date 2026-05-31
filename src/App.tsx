import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function Divider() {
  return (
    <div className="wrap">
      <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(230,232,235,0.06) 30%, rgba(230,232,235,0.06) 70%, transparent)" }} />
    </div>
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: "#1C1C21", color: "#E6E8EB", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <CertificationsSection />
        <Divider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
