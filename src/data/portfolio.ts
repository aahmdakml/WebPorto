// CV Data – Ahmad Akmal Defatra

export const stats = [
  { value: "8+", label: "Projects" },
  { value: "3", label: "Internships" },
  { value: "5", label: "Awards" },
];

export const about = {
  bio1:
    "Computer Engineering student at ITS Surabaya — bridging firmware and enterprise systems. I build IoT infrastructure, ERPs, and AI tools with a focus on real-world impact.",
  bio2:
    "I thrive at the intersection of hardware and software. From designing ESP32 PCBs to developing React/Node.js apps and integrating LLM APIs, my goal is always robust, scalable solutions.",
  keywords: [
    "T-Shaped Engineer",
    "IoT & Embedded",
    "Full-Stack",
    "AgriTech",
    "AI/ML",
    "ITS Surabaya",
    "GPA 3.44",
  ],
};

// profile.bio alias

export const education = [
  {
    institution: "Institut Teknologi Sepuluh Nopember (ITS)",
    degree: "Bachelor of Computer Engineering",
    period: "2022 – Present",
    location: "Surabaya, ID",
    gpa: "3.44 / 4.00",
    description:
      "Specializing in embedded systems, telematics, and software engineering. Active in M-IOT Lab as a Practicum Assistant and involved in multiple research projects integrating AI with hardware.",
  },
  {
    institution: "SMA Negeri 1 Cerme",
    degree: "Science / MIPA",
    period: "2019 – 2022",
    location: "Gresik, ID",
    gpa: "-",
    description:
      "Graduated with a focus on Mathematics and Natural Sciences. Built a strong foundation in logical thinking and algorithmic problem solving.",
  },
];

export const profile = {
  name: "Ahmad Akmal Defatra",
  tagline: "Computer Engineering Student",
  bio: "Computer Engineering student at ITS — bridging bare-metal firmware and enterprise-grade systems. I build IoT infrastructure, ERP platforms, and AI-powered tools with real-world deployment in mind.",
  roles: ["Embedded Systems Engineer", "Full-Stack Developer", "IoT Systems Builder", "AI/ML Integrator"],
  summary:
    "Computer Engineering student at ITS with hands-on experience in embedded systems, IoT telemetry, full-stack digitalization, and hardware-software troubleshooting.",
  location: "Surabaya, Indonesia",
  email: "ahmadadefatra@gmail.com",
  phone: "+62-812-8395-6235",
  linkedin: "https://www.linkedin.com/in/ahmad-akmal-defatra-152482271/",
  github: "https://github.com/aahmdakml",
  cv: "src\public\assets\CV_Ahmad_Akmal_Defatra.pdf",
  avatar: "/assets/foto.png",
  gpa: "3.44",
  university: "Institut Teknologi Sepuluh Nopember (ITS)",
};

export const skills = {
  languages: ["Python", "C/C++", "JavaScript", "TypeScript", "PHP", "Dart"],
  embedded: ["ESP32", "STM32", "ATmega16", "Raspberry Pi 4B", "PCB Design", "Soldering", "Motor Control", "Sensor Integration", "Power Electronics"],
  iot: ["MQTT", "GSM Telemetry", "nRF RF", "Digital Twin (PoC)", "Real-time Dashboard", "Edge Computing"],
  ai: ["Random Forest", "Reinforcement Learning", "Sensor-based DSS", "LLM API (Claude, Gemini)"],
  frontend: ["React.js", "Flutter", "Leaflet.js (GIS)", "Tailwind CSS", "Figma (UI/UX)", "Vite", "TypeScript"],
  backend: ["Node.js", "Laravel", "PERN Stack", "FastAPI", "REST API", "Cloudflare R2", "PostgreSQL", "SQLite"],
  devops: ["Docker", "Git/GitHub", "PLC Programming (basics)", "VS Code"],
  domain: ["ERP/HRIS Development", "Business Process Modeling", "Workflow Digitalization", "Technical Documentation & SOP"],
};

export const experience = [
  {
    company: "PV-Cloost (Energy Startup)",
    role: "Embedded Software Engineer",
    period: "April 2026 – Present",
    location: "Surabaya, ID",
    color: "cyan",
    icon: "⚡",
    description: [
      "Engineered embedded components for an industrial solar panel cleaning robot.",
      "Developed motor control, remote handling, and safety watchdog firmware.",
      "Conducted hardware-software troubleshooting during field deployment.",
    ],
    highlights: [
      "Designed ESP32-based custom PCB for industrial solar panel robot",
      "Firmware: motor control, remote-command handling, safety watchdog",
      "8S 24V battery system + 24V high-torque encoder motor integration",
    ],
    tech: ["ESP32", "C/C++", "PCB Design", "24V BMS", "Motor Control"],
  },
  {
    company: "M-IOT Lab – ITS",
    role: "Computer Network Practicum Assistant",
    period: "May 2026 – June 2026",
    location: "Surabaya, ID",
    color: "emerald",
    icon: "🌐",
    description: [
      "Guided 80+ students on MikroTik-based infrastructure and network architecture.",
      "Developed practicum modules covering Wireless, Firewall, NAT, VPN, and QoS.",
    ],
    highlights: [
      "Led practice sessions for 80+ students on MikroTik infrastructure",
      "Developed practicum modules: Wireless, Firewall, NAT, VPN, QoS",
    ],
    tech: ["MikroTik", "IPv4/IPv6", "VPN", "QoS", "Firewall"],
  },
  {
    company: "PT. Saraswanti Utama Group",
    role: "Software Engineer Intern",
    period: "Jan 2026 – Mar 2026",
    location: "Surabaya, ID",
    color: "purple",
    icon: "🏢",
    description: [
      "Developed Flutter frontend modules for an enterprise HRIS used by hundreds of employees.",
      "Implemented IndexedStack routing for multi-module navigation and state preservation.",
      "Contributed to the internal Transport Management System (TMS) within the SCM ERP.",
    ],
    highlights: [
      "Flutter HRIS modules serving hundreds of employees: Leave, Assets, Approval, E-Catalog",
      "IndexedStack-based state preservation for complex multi-module navigation",
      "Contributed to Transport Management System (TMS) for internal SCM ERP",
    ],
    tech: ["Flutter", "Dart", "REST API", "State Management"],
  },
  {
    company: "Research Center ITS (KATD)",
    role: "Digital Twin Developer Intern",
    period: "Oct 2025 – Nov 2025",
    location: "Surabaya, ID",
    color: "blue",
    icon: "🔬",
    description: [
      "Built a digital-twin prototype for a hydropower plant (PLTA Dieng) to simulate operational scenarios.",
      "Engineered an RL learning pipeline achieving ~80% performance accuracy.",
      "Developed a FastAPI backend and Leaflet.js visualization for live scenario predictions.",
    ],
    highlights: [
      "End-to-end digital twin for real PLTA Dieng hydropower plant",
      "RL pipeline achieving ~80% performance on internal evaluation",
      "FastAPI + Leaflet.js geospatial visualization UI",
    ],
    tech: ["Python", "FastAPI", "Reinforcement Learning", "Leaflet.js", "Figma"],
  },
  {
    company: "M-IOT Lab – ITS",
    role: "Basic Programming Practicum Assistant",
    period: "Sep 2025 – Dec 2025",
    location: "Surabaya, ID",
    color: "emerald",
    icon: "💻",
    description: [
      "Facilitated lab sessions and mentored 60+ students in foundational programming.",
      "Evaluated final game development projects focused on algorithmic logic.",
    ],
    highlights: [
      "Facilitated weekly lab sessions for 60+ students across 12 teams",
      "Guided final-project game development as comprehensive logic test",
    ],
    tech: ["Python", "C++", "JavaScript", "Algorithms"],
  },
];

// Backward-compat alias
export const experiences = experience;

export type ProjectCategory = "all" | "fullstack" | "iot" | "ai";

export const projects = [
  {
    title: "Rice Milling Management System (ERP)",
    subtitle: "Full-stack Developer & System Analyst",
    year: "2026",
    category: "fullstack" as ProjectCategory,
    status: "ongoing",
    image: "/assets/project_erp.png",
    description:
      "A custom ERP for a UMKM rice milling operation, built from field insights. Manages procurement, inventory, and finance.",
    highlights: [
      "Built business process flows from direct field interviews & surveys",
      "Full ERP with PERN Stack + Cloudflare R2 storage",
      "AI Analyst feature using Claude LLM API for structured financial reporting",
      "Automated formatted PDF generation for business reports",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Cloudflare R2", "Claude LLM API", "TypeScript"],
    color: "emerald",
  },
  {
    title: "Intelligent AWD-Based Precision Irrigation DSS",
    subtitle: "System Designer & Developer",
    year: "2026",
    category: "iot" as ProjectCategory,
    status: "ongoing",
    image: "/assets/project_irrigation.png",
    description:
      "An IoT-driven Alternate Wetting & Drying (AWD) irrigation DSS combining field sensing, weather APIs, and ML recommendations.",
    highlights: [
      "STM32-based sensing node with BMP/DHT/HC-SR04 sensors, nRF RF & GSM telemetry",
      "PERN + FastAPI + WebODM/GIS + Leaflet geo-visualization",
      "BMKG weather API integration for weather-aware recommendations",
      "Custom waterflow simulation algorithm for best-case scenario routing",
    ],
    tech: ["STM32", "MQTT", "GSM", "FastAPI", "Leaflet.js", "PostgreSQL", "Python"],
    color: "cyan",
  },
  {
    title: "Solar Panel Cleaning Robot",
    subtitle: "Embedded Software Engineer @ PV-Cloost",
    year: "2026",
    category: "iot" as ProjectCategory,
    status: "ongoing",
    image: "/assets/project_solar_robot.png",
    description:
      "Embedded firmware for an industrial remote-controlled solar panel cleaning robot, focusing on motor precision and safety constraints.",
    highlights: [
      "ESP32-based custom PCB with 8S 24V battery management",
      "24V high-torque encoder motor control firmware",
      "Remote-command handling with safety behavior & watchdog",
      "Hardware-software troubleshooting during field testing",
    ],
    tech: ["ESP32", "C/C++", "PCB Design", "24V BMS", "DC-DC", "Motor Control"],
    color: "cyan",
  },
  {
    title: "Digital Twin – PLTA Hydropower Plant",
    subtitle: "Digital Twin Developer Intern @ ITS Research",
    year: "2025",
    category: "ai" as ProjectCategory,
    status: "completed",
    image: "/assets/project_digital_twin.png",
    description:
      "A Proof-of-Concept digital twin for PLTA Dieng. Used Reinforcement Learning and geospatial UI for scenario simulations.",
    highlights: [
      "End-to-end digital twin architecture from data pipeline to user UI",
      "Reinforcement Learning pipeline achieving ~80% performance",
      "FastAPI backend + Leaflet.js geospatial visualization",
      "Designed complete UI/UX in Figma before implementation",
    ],
    tech: ["Python", "FastAPI", "Reinforcement Learning", "Leaflet.js", "TypeScript", "Figma"],
    color: "purple",
  },
  {
    title: "Enterprise HRIS – Flutter Modules",
    subtitle: "Software Engineer Intern @ PT. Saraswanti Utama Group",
    year: "2026",
    category: "fullstack" as ProjectCategory,
    status: "completed",
    image: "/assets/project_hris.png",
    description:
      "Contributed Flutter modules to an enterprise HRIS (Auth, Leave, Assets, Workflow), serving hundreds of daily active employees.",
    highlights: [
      "Multi-module HRIS with IndexedStack-based state preservation",
      "Complex approval workflow UI with real-time status updates",
      "Contributed to TMS (Transport Management System) for SCM ERP",
      "Produced technical documentation for module handover",
    ],
    tech: ["Flutter", "Dart", "REST API", "State Management", "Enterprise ERP"],
    color: "purple",
  },
  {
    title: "AIoT Smart Irrigation (PoC)",
    subtitle: "System Engineer",
    year: "2025",
    category: "iot" as ProjectCategory,
    status: "completed",
    image: "/assets/project_irrigation.png",
    description:
      "Soil-condition monitoring PoC via ESP32 & Raspberry Pi. Features MQTT telemetry, an RF decision model, and real-time dashboarding.",
    highlights: [
      "ESP32 ↔ Raspberry Pi 4B via MQTT over WiFi",
      "Random Forest model deployed on RPi with ~80% accuracy",
      "Real-time FastAPI + TypeScript dashboard with ~2s refresh",
      "SQLite persistence for lightweight edge data storage",
    ],
    tech: ["ESP32", "Raspberry Pi", "MQTT", "FastAPI", "Random Forest", "Python", "SQLite"],
    color: "cyan",
  },
  {
    title: "Rice Price / Quality Analytics (B2B)",
    subtitle: "Full-stack Developer & System Analyst",
    year: "2025",
    category: "ai" as ProjectCategory,
    status: "completed",
    image: "/assets/project_erp.png",
    description:
      "B2B analytics platform for rice market tracking. Features Python scraping, Gemini LLM sentiment analysis, and formatted reporting.",
    highlights: [
      "Python web scraping with multi-source data ingestion",
      "Gemini 1.5 Flash for sentiment analysis and data normalization",
      "Word Cloud (SVG) generation + Top 10 cheapest region ranking",
      "Exported CSV/JSON reports + browser snapshots",
    ],
    tech: ["Vite", "React", "TypeScript", "Node.js", "Express", "Gemini API", "PapaParse"],
    color: "purple",
  },
  {
    title: "ESP32 Autonomous Hybrid Vehicle 'Red Spider'",
    subtitle: "Systems Engineer",
    year: "2025",
    category: "iot" as ProjectCategory,
    status: "completed",
    image: "/assets/project_solar_robot.png",
    description:
      "A dual-mode robotic vehicle with autonomous navigation and BLE override, utilizing 'Smart Reverse' for intelligent obstacle evasion.",
    highlights: [
      "5-sensor ultrasonic array for wide frontal & blind-spot coverage",
      '"Smart Reverse" logic detecting open paths and steering safely',
      "Bluetooth emergency override via Flutter mobile app",
      "Autonomous navigation with real-time collision prevention",
    ],
    tech: ["ESP32", "C++", "Flutter", "Bluetooth", "Ultrasonic Sensors"],
    color: "cyan",
  },
];

export const certifications = [
  { name: "Cloud – Docker Training", issuer: "KodeKloud", date: "May 2026" },
  { name: "PLC Fundamental – PLC Programming from Scratch", issuer: "Udemy", date: "May 2026" },
  { name: "SOP & WI Professional Training", issuer: "Talentiv", date: "Jan 2026" },
  { name: "Financial Reporting with Microsoft Excel", issuer: "Binus Center", date: "Oct 2025" },
  { name: "Laravel, Node.js, and React.js Training", issuer: "WebHooz", date: "Aug 2024" },
  { name: "CCNA – Cisco Certified Network Associate", issuer: "Course-Net", date: "July 2023" },
  { name: "IELTS Band 6.0", issuer: "IELTS", date: "Dec 2022" },
];

export const awards = [
  { name: "HETI Student Youngpreneurship (HETI SY) Grantee", year: "2026" },
  { name: "Program Pembinaan Mahasiswa Wirausaha (P2MW) Grantee", year: "2026" },
  { name: "KaCer Scholarship Awardee", year: "2025" },
  { name: "Bakti BCA Scholarship", year: "2024" },
  { name: "ELITS Scholarship Program", year: "2024" },
];
