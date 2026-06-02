// CV Data – Ahmad Akmal Defatra

export const stats = [
  { value: "10+", label: "Projects" },
  { value: "2", label: "Internships" },
  { value: "5", label: "Awards" },
];

export const about = {
  bio1:
    "Hi, I'm Ahmad. As a Computer Engineering student at ITS Surabaya, I love building technology that works in the real world. My expertise lies in bridging the gap between physical hardware (like IoT devices) and scalable software (like enterprise web apps and AI tools).",
  bio2:
    "Whether I'm designing custom circuit boards with ESP32 or developing full-stack web platforms with React and Node.js, I'm driven by a passion for solving practical problems. I enjoy taking ideas from raw concepts all the way to deployed, reliable solutions.",
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

export const education = [
  {
    institution: "Institut Teknologi Sepuluh Nopember (ITS)",
    degree: "Bachelor of Computer Engineering",
    period: "2023 – Present",
    location: "Surabaya, ID",
    gpa: "3.44 / 4.00",
    description:
      "Focusing on embedded systems, telematics, and software engineering. I actively serve as a Practicum Assistant at the M-IOT Lab and participate in various research projects that combine AI with hardware.",
  },
  {
    institution: "SMA PU Al Bayan",
    degree: "Science / MIPA",
    period: "2020 – 2023",
    location: "Sukabumi, ID",
    gpa: "92/100",
    description:
      "Graduated with a strong foundation in Mathematics and Natural Sciences, which helped shape my logical thinking and algorithmic problem-solving skills.",
  },
];

export const profile = {
  name: "Ahmad Akmal Defatra",
  tagline: "Computer Engineering Student",
  bio: "Hi, I'm a Computer Engineering student at ITS Surabaya. I bridge the gap between hardware engineering and modern software development, building everything from IoT infrastructure to full-stack enterprise applications.",
  roles: ["Embedded Systems Engineer", "Full-Stack Developer", "IoT Specialist", "AI Enthusiast"],
  summary:
    "A dedicated Computer Engineering student at ITS with hands-on experience in embedded systems, IoT telemetry, and full-stack development. I enjoy tackling complex technical challenges and turning them into practical, user-friendly solutions.",
  location: "Surabaya, Indonesia",
  email: "ahmadadefatra@gmail.com",
  phone: "+62-812-8395-6235",
  linkedin: "https://www.linkedin.com/in/ahmad-akmal-defatra-152482271/",
  github: "https://github.com/aahmdakml",
  cv: "./assets/CV_Ahmad_Akmal_Defatra.pdf",
  avatar: "./assets/foto.png",
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
      "I helped develop the 'brain' of an industrial solar panel cleaning robot, ensuring it operates safely and efficiently in the field.",
      "My work involved programming the motor controls, handling remote commands, and building safety features to prevent hardware failures.",
      "I also spent time in the field troubleshooting and refining the system to ensure smooth operation.",
    ],
    highlights: [
      "Designed a custom ESP32-based circuit board (PCB) tailored for the robot's needs",
      "Wrote reliable firmware for motor control, remote operation, and safety watchdogs",
      "Successfully integrated a 24V battery system with high-torque motors",
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
      "I had the rewarding opportunity to mentor over 80 students, guiding them through the fundamentals of computer networks using MikroTik.",
      "I designed hands-on practicum modules that made complex topics like Firewalls, VPNs, and QoS easier to understand and apply.",
    ],
    highlights: [
      "Mentored and evaluated 80+ students on network infrastructure",
      "Created practical learning modules for Wireless, NAT, and VPN configurations",
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
      "During my internship, I contributed to an enterprise HR application used daily by hundreds of employees.",
      "I focused on building a smooth, user-friendly mobile experience using Flutter, ensuring employees could easily manage their leave and approvals.",
      "I also collaborated on the company's internal Transport Management System.",
    ],
    highlights: [
      "Developed Flutter HRIS modules (Leave, Assets, Approvals) for hundreds of employees",
      "Implemented seamless multi-module navigation with state preservation",
      "Contributed to the internal Transport Management System (TMS) within the SCM ERP",
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
      "I built a digital-twin prototype for a real hydropower plant (PLTA Dieng) to simulate and optimize operational scenarios.",
      "I integrated a Reinforcement Learning model to improve efficiency and created a visual dashboard so operators could easily see the data in real-time.",
    ],
    highlights: [
      "Developed an end-to-end digital twin architecture for PLTA Dieng",
      "Engineered a Reinforcement Learning pipeline that achieved ~80% performance accuracy",
      "Built a FastAPI backend and a geospatial UI using Leaflet.js for live simulations",
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
      "I facilitated lab sessions and mentored more than 60 students in foundational programming concepts.",
      "To make learning engaging, I evaluated their final projects which involved building interactive games using the logic they learned.",
    ],
    highlights: [
      "Facilitated weekly lab sessions for 60+ students across 12 teams",
      "Mentored students through their final game development projects",
    ],
    tech: ["Python", "C++", "JavaScript", "Algorithms"],
  },
  {
    company: "Mage 11",
    role: "Lead Web Developer",
    period: "Jan 2025 – Nov 2025",
    location: "Surabaya, ID",
    color: "blue",
    icon: "🧑‍💻",
    description: [
      "I led a team of 11 to build a brand-new event platform from scratch. Since 90% of my team members were non-developers, I focused heavily on mentoring and teaching technical skills to bridge the gap.",
      "I adopted a hybrid project management approach—combining Waterfall for planning and Agile for execution—to keep the development cycle adaptable yet structured.",
    ],
    highlights: [
      "Built an event platform from scratch with no legacy code",
      "Mentored a cross-functional team of 11, facilitating technical sessions and team bonding",
      "Successfully delivered the project on time by blending Waterfall and Agile methodologies",
    ],
    tech: ["Project Management", "Agile", "Mentoring", "Web Development"],
  },
  {
    company: "UKM Robotika ITS",
    role: "Project Officer",
    period: "June 2025 – Sept 2025",
    location: "Surabaya, ID",
    color: "purple",
    icon: "🤖",
    description: [
      "I led a 15-person team through a 3-month execution cycle, restructuring the organization into specialized divisions to maximize our operational efficiency.",
      "When faced with offline limitations, I pioneered our transition to online events, ultimately delivering a flagship webinar that far exceeded our goals.",
    ],
    highlights: [
      "Led and restructured a 15-person team into 4 specialized divisions for better efficiency",
      "Pioneered the shift to online activities, hosting a flagship webinar for 650 participants",
      "Achieved 216% of the participant target with a 92/100 satisfaction rate",
    ],
    tech: ["Leadership", "Event Management", "Operations"],
  },
  {
    company: "BEM FTEIC",
    role: "Pemandu (Management Facilitator)",
    period: "Oct 2024 – Dec 2025",
    location: "Surabaya, ID",
    color: "emerald",
    icon: "🗣️",
    description: [
      "I facilitated management and strategic thinking sessions for engineering students, creating an environment that encouraged interactive discussion rather than passive listening.",
      "My goal was to help students strengthen their teamwork and management capacity through structured 'discussion-like' presentations.",
    ],
    highlights: [
      "Conducted 5+ management sessions, guiding over 30 participants per session",
      "Designed interactive discussion formats to foster strategic thinking and teamwork",
    ],
    tech: ["Public Speaking", "Facilitation", "Management"],
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
    image: "./assets/project_erp.png",
    description:
      "A custom-built ERP designed specifically for a local rice milling business. I spent time in the field understanding their daily challenges to build a system that seamlessly manages their procurement, inventory, and finances.",
    highlights: [
      "Mapped out business processes through direct field interviews and user surveys",
      "Built a full enterprise platform using the PERN Stack and Cloudflare R2",
      "Integrated an AI Analyst feature using Claude to automatically generate structured financial reports",
      "Created automated, professional PDF generation for business summaries",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Cloudflare R2", "Claude LLM API", "TypeScript"],
    color: "emerald",
  },
  {
    title: "Intelligent AWD-Based Precision Irrigation",
    subtitle: "System Designer & Developer",
    year: "2026",
    category: "iot" as ProjectCategory,
    status: "ongoing",
    image: "./assets/project_irrigation.png",
    description:
      "A smart irrigation system that helps farmers optimize their water usage. It combines hardware sensors in the field with weather forecasts and machine learning to recommend the best times to water crops.",
    highlights: [
      "Built a custom STM32-based sensor node using nRF and GSM telemetry to collect field data",
      "Developed a full-stack platform with FastAPI and Leaflet.js for geographic data visualization",
      "Integrated live weather data from BMKG to make smarter, weather-aware recommendations",
      "Designed a custom algorithm to simulate waterflow and find the most efficient irrigation routes",
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
    image: "./assets/project_solar_robot.png",
    description:
      "I developed the embedded software for an industrial robot designed to clean solar panels remotely. The project required a strong focus on precise motor control and safety to prevent hardware damage.",
    highlights: [
      "Engineered a custom ESP32-based circuit board with advanced 24V battery management",
      "Wrote precise control firmware for high-torque encoder motors",
      "Implemented a reliable remote-command system with built-in safety watchdogs",
      "Troubleshot hardware and software issues on-site during field testing",
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
    image: "./assets/project_digital_twin.png",
    description:
      "A research project where I built a digital replica of a real hydropower plant (PLTA Dieng). By simulating different scenarios, the system helps find ways to optimize energy production.",
    highlights: [
      "Designed an end-to-end digital twin system, from data collection to the user interface",
      "Trained a Reinforcement Learning model that achieved ~80% performance in internal evaluations",
      "Created a fast, responsive backend using FastAPI and a geographic map interface with Leaflet.js",
      "Planned out the entire user experience in Figma before writing any code",
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
    image: "./assets/project_hris.png",
    description:
      "I contributed to an enterprise HR mobile app that hundreds of employees use every day. My focus was on making the user interface smooth and ensuring that data loaded quickly and reliably.",
    highlights: [
      "Built key mobile modules for Leave, Assets, and Approvals using Flutter",
      "Implemented complex, real-time approval workflows with dynamic status updates",
      "Contributed to the company's internal Transport Management System",
      "Wrote clear technical documentation to help the team maintain the code after my internship",
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
    image: "./assets/project_irrigation.png",
    description:
      "An early Proof-of-Concept for monitoring soil conditions. I used a combination of ESP32 sensors and a Raspberry Pi to collect data, analyze it with machine learning, and display it on a live dashboard.",
    highlights: [
      "Established reliable MQTT communication between ESP32 sensors and a Raspberry Pi",
      "Deployed a Random Forest machine learning model on the edge device with ~80% accuracy",
      "Built a real-time dashboard using FastAPI and TypeScript that updates every 2 seconds",
      "Used SQLite for lightweight, reliable data storage right on the edge device",
    ],
    tech: ["ESP32", "Raspberry Pi", "MQTT", "FastAPI", "Random Forest", "Python", "SQLite"],
    color: "cyan",
  },
  {
    title: "Rice Price Analytics Platform",
    subtitle: "Full-stack Developer & System Analyst",
    year: "2025",
    category: "ai" as ProjectCategory,
    status: "completed",
    image: "./assets/project_erp.png",
    description:
      "A B2B analytics tool designed to track rice market trends. The platform automatically scrapes data, uses AI to analyze market sentiment, and generates easy-to-read reports.",
    highlights: [
      "Built a Python web scraper to automatically collect data from multiple sources",
      "Integrated Gemini 1.5 Flash to analyze text sentiment and organize messy data",
      "Generated visual insights like Word Clouds and rankings for the cheapest regions",
      "Allowed users to export their reports easily as CSV, JSON, or browser snapshots",
    ],
    tech: ["Vite", "React", "TypeScript", "Node.js", "Express", "Gemini API", "PapaParse"],
    color: "purple",
  },
  {
    title: "Autonomous Robot 'Red Spider'",
    subtitle: "Systems Engineer",
    year: "2025",
    category: "iot" as ProjectCategory,
    status: "completed",
    image: "./assets/project_solar_robot.png",
    description:
      "A hybrid robotic vehicle that can navigate autonomously or be controlled remotely via Bluetooth. I designed a 'Smart Reverse' feature to help it intelligently avoid obstacles in its path.",
    highlights: [
      "Integrated 5 ultrasonic sensors to give the robot a wide field of view and eliminate blind spots",
      "Developed a 'Smart Reverse' algorithm that detects open paths to steer the robot safely away from danger",
      "Built a companion Flutter mobile app for emergency Bluetooth manual overrides",
      "Ensured smooth autonomous navigation with real-time collision prevention",
    ],
    tech: ["ESP32", "C++", "Flutter", "Bluetooth", "Ultrasonic Sensors"],
    color: "cyan",
  },
  {
    title: "Jump Coach AI",
    subtitle: "Mobile Sensor Tester & UI/UX Designer",
    year: "2025",
    category: "ai" as ProjectCategory,
    status: "completed",
    image: "./assets/project_hris.png",
    description:
      "A mobile app concept designed to estimate a user's vertical jump height using built-in smartphone sensors. I led the UI/UX design and conducted extensive sensor testing to find the most accurate measurement method.",
    highlights: [
      "Designed the complete app interface with 8 UI pages and mapped out the user flow",
      "Conducted black-box testing comparing gyroscope and barometer accuracy",
      "Discovered that barometer data yielded much better and reliable jump height estimations",
    ],
    tech: ["Figma", "UI/UX", "Sensor Testing", "Mobile Design"],
    color: "purple",
  },
  {
    title: "Smart Thermal Regulation Chamber",
    subtitle: "IoT Engineer",
    year: "2025",
    category: "iot" as ProjectCategory,
    status: "completed",
    image: "./assets/project_irrigation.png",
    description:
      "A precision heating chamber built to maintain a highly stable temperature of 27.0°C. I designed a hysteresis control algorithm and a dual-interface dashboard that allowed both autonomous operation and manual overrides.",
    highlights: [
      "Engineered a system to maintain temperature within a tight ±0.5°C tolerance",
      "Integrated a PTC heater and exhaust fan, controlled via a 2-channel relay",
      "Built a dashboard that supports both automatic temperature control and manual maintenance overrides",
    ],
    tech: ["IoT", "Thermal Control", "Relays", "Dashboard UI"],
    color: "cyan",
  },
  {
    title: "ATmega16 High-Speed Downloader",
    subtitle: "Hardware Engineer",
    year: "2026",
    category: "iot" as ProjectCategory,
    status: "completed",
    image: "./assets/project_solar_robot.png",
    description:
      "A low-level hardware project where I designed and manually soldered an ATmega16 minimum system. I focused on making the layout as compact as possible, which significantly sharpened my trace-level hardware understanding.",
    highlights: [
      "Assembled a compact ATmega16 minimum system and 1.5 MHz downloader on perfboard",
      "Manually configured drivers and compiled C code using WinAVR and Zadig",
      "Troubleshot and repaired corroded board connections to ensure reliable data transfer",
    ],
    tech: ["ATmega16", "PCB Soldering", "C", "WinAVR"],
    color: "emerald",
  },
  {
    title: "Automatic Gate Prototype",
    subtitle: "IoT Engineer",
    year: "2025",
    category: "iot" as ProjectCategory,
    status: "completed",
    image: "./assets/project_irrigation.png",
    description:
      "A mini automatic gate system that detects object movement and direction using ultrasonic sensors. I built a companion web interface to monitor gate activity and control it manually in emergencies.",
    highlights: [
      "Used ultrasonic sensors and a servo motor to accurately simulate gate actuation",
      "Developed a web-based interface for live monitoring and emergency manual overrides",
      "Set up an event logging system to record and trace every object detection event",
    ],
    tech: ["Ultrasonic Sensors", "Servo Control", "Web Dashboard"],
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
