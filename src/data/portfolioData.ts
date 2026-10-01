export interface Project {
  id: string;
  title: string;
  category: 'web' | 'systems' | 'iot' | 'database';
  categoryLabel: string;
  tagline: string;
  image: string;
  tags: string[];
  metadata: string;
  year: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: { name: string; role: string }[];
  githubUrl: string;
  demoUrl?: string;
  role: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    highlight?: boolean;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skillsCovered: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  gpa: string;
  honors: string[];
  keyCourses: string[];
}

export const STUDENT_INFO = {
  name: "Jamela Kyle Parado",
  title: "Information Technology Student & Aspiring Systems Developer",
  status: "Available for OJT / Tech Internships (2025–2026)",
  email: "jamelakyleparado03@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Manila, Philippines (Open to Remote / Hybrid)",
  bio: "Senior-year Bachelor of Science in Information Technology student with hands-on experience in full-stack web applications, database management, and network systems. Driven by solving real-world friction through clean architecture, automated workflows, and reliable infrastructure.",
  stats: [
    { label: "Cumulative GWA", value: "1.28", note: "Dean's Lister" },
    { label: "Academic & Lab Projects", value: "14+", note: "Full-Stack & Systems" },
    { label: "Git Commits & Logs", value: "500+", note: "Documented Work" },
    { label: "Capstone Progress", value: "100%", note: "Lead Systems Architect" }
  ],
  portraitImage: "/src/assets/images/student_portrait_jamela_1790863440948.jpg"
};

export const PROJECTS: Project[] = [
  {
    id: "edutrack-portal",
    title: "EduTrack: Unified Campus Portal & Enrollment System",
    category: "web",
    categoryLabel: "Full-Stack Web",
    tagline: "Centralized academic portal for course enrollment, real-time grading, and prerequisite validation.",
    image: "/src/assets/images/project_campus_portal_1790863457714.jpg",
    tags: ["React 19", "Node.js", "Express", "PostgreSQL", "Docker", "Tailwind CSS"],
    metadata: "Lead Architect · Capstone System · 2025",
    year: "2025",
    problem: "Manual course registration and paper-based prerequisite validation caused server congestion and student enrollment bottlenecks during peak semesters.",
    solution: "Engineered an ACID-compliant enrollment system with role-based dashboards for students, instructors, and registrars with automated prerequisite enforcement.",
    keyFeatures: [
      "Role-Based Access Control (RBAC) with secure session handling",
      "Automated prerequisite validation engine preventing illegal enrollments",
      "Dynamic schedule conflict detection using time-slot overlap algorithms",
      "One-click PDF official curriculum checklist and grade slip generation"
    ],
    techStack: [
      { name: "React + Vite", role: "Client-side SPA with responsive UI" },
      { name: "Node.js & Express", role: "REST API server & middleware" },
      { name: "PostgreSQL", role: "Relational database with schema constraints" },
      { name: "Docker", role: "Containerized deployment and development environment" }
    ],
    githubUrl: "https://github.com/jamelakyle/edutrack-campus-portal",
    demoUrl: "https://edutrack-demo.internal",
    role: "Project Lead & Full-Stack Developer"
  },
  {
    id: "netpulse-monitor",
    title: "NetPulse: Campus Lab Network Topology & Latency Monitor",
    category: "systems",
    categoryLabel: "Systems & Networking",
    tagline: "Automated network health probe tracking switch availability, ping latency, and packet loss.",
    image: "/src/assets/images/project_network_monitor_1790863471952.jpg",
    tags: ["Python", "FastAPI", "WebSockets", "Linux", "Chart.js", "Bash"],
    metadata: "Network Lab Project · Systems & Telemetry · 2025",
    year: "2025",
    problem: "Campus computer lab technicians lacked immediate visibility when workstation subnets or laboratory switches dropped during practical exams.",
    solution: "Developed an asynchronous daemon that continuously pings defined subnet ranges, reports packet jitter via WebSockets, and alerts on network anomalies.",
    keyFeatures: [
      "Subnet IP sweeping and live ARP table status visualization",
      "WebSocket streaming of latency and jitter graphs updated every 2 seconds",
      "Automated alert dispatcher when packet loss exceeds threshold (>5%)",
      "Exportable CSV network incident audit logs for laboratory reports"
    ],
    techStack: [
      { name: "Python & Scapy", role: "Network packet crafting and ICMP probes" },
      { name: "FastAPI", role: "Asynchronous backend with WebSocket endpoints" },
      { name: "Linux / Debian", role: "Host environment with systemd background service" },
      { name: "Chart.js", role: "Real-time streaming telemetry charts" }
    ],
    githubUrl: "https://github.com/jamelakyle/netpulse-network-monitor",
    role: "Systems Administrator & Script Developer"
  },
  {
    id: "labsense-iot",
    title: "LabSense: Server Room Environmental & Power Telemetry",
    category: "iot",
    categoryLabel: "IoT & Automation",
    tagline: "Microcontroller telemetry system monitoring server rack climate, heat dissipation, and emergency relay status.",
    image: "/src/assets/images/project_smart_lab_iot_1790863485878.jpg",
    tags: ["ESP32", "C++", "MQTT", "Node.js", "InfluxDB", "Tailwind CSS"],
    metadata: "IoT & Hardware Integration · Research Project · 2024",
    year: "2024",
    problem: "Server room air-conditioning failures during weekends posed severe thermal throttling risks to university physical servers.",
    solution: "Designed an IoT sensor module utilizing ESP32 microcontrollers with DHT22 and current sensors streaming telemetry to an MQTT broker.",
    keyFeatures: [
      "Dual DHT22 temperature and humidity sensing with hysteresis calibration",
      "Emergency threshold buzzer and relay actuator for auxiliary exhaust fans",
      "MQTT broker publish/subscribe architecture for fault-tolerant telemetry",
      "Responsive monitoring dashboard showing live gauges and trend lines"
    ],
    techStack: [
      { name: "ESP32 (C++/Arduino)", role: "Sensor firmware and WiFi telemetry client" },
      { name: "MQTT (Mosquitto)", role: "Lightweight message broker" },
      { name: "Node.js Service", role: "Time-series database ingest worker" },
      { name: "InfluxDB", role: "Time-series persistence for telemetry metrics" }
    ],
    githubUrl: "https://github.com/jamelakyle/labsense-server-iot",
    role: "Hardware & IoT Developer"
  },
  {
    id: "secupass-inventory",
    title: "SecuPass: IT Asset & Hardware Checkout Management",
    category: "database",
    categoryLabel: "Database & IT Ops",
    tagline: "Internal department inventory system for workstation assets, peripheral loaners, and software licenses.",
    image: "/src/assets/images/project_campus_portal_1790863457714.jpg",
    tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    metadata: "Database Administration Course · Systems · 2024",
    year: "2024",
    problem: "Hardware borrowing for student projects resulted in missing cables, unreturned development boards, and untracked software licenses.",
    solution: "Created an asset checkout system with barcode scanning support, automated due-date reminders, and asset condition logging upon return.",
    keyFeatures: [
      "Equipment catalog with serial number tracking and status toggles",
      "Checkout and check-in transaction history with student ID validation",
      "Asset lifecycle tracking (operational, under maintenance, retired)",
      "Automated overdue email reminders via SMTP integration"
    ],
    techStack: [
      { name: "TypeScript", role: "End-to-end type safety" },
      { name: "Prisma ORM", role: "Relational database modeling and migrations" },
      { name: "PostgreSQL", role: "Primary relational storage" },
      { name: "Tailwind CSS", role: "Clean administrative interface" }
    ],
    githubUrl: "https://github.com/jamelakyle/secupass-it-inventory",
    role: "Database Designer & Backend Developer"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Scripting",
    description: "Core languages used for system logic, algorithms, and rapid automation.",
    skills: [
      { name: "TypeScript", level: "Proficient", experience: "2 Years", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", experience: "3 Years", highlight: true },
      { name: "Python", level: "Proficient", experience: "2 Years", highlight: true },
      { name: "SQL (PostgreSQL/MySQL)", level: "Advanced", experience: "3 Years", highlight: true },
      { name: "Java (OOP/Data Structures)", level: "Intermediate", experience: "2 Years" },
      { name: "C++ (Embedded / Systems)", level: "Intermediate", experience: "1.5 Years" },
      { name: "Bash / Shell Scripting", level: "Proficient", experience: "2 Years" }
    ]
  },
  {
    title: "Web & Systems Engineering",
    description: "Modern frameworks and server technologies for scalable applications.",
    skills: [
      { name: "React 19 & Next.js", level: "Advanced", experience: "2.5 Years", highlight: true },
      { name: "Node.js & Express", level: "Advanced", experience: "2.5 Years", highlight: true },
      { name: "RESTful API Architecture", level: "Advanced", experience: "3 Years", highlight: true },
      { name: "Tailwind CSS & Responsive UI", level: "Advanced", experience: "3 Years", highlight: true },
      { name: "State Management (Zustand/Hooks)", level: "Proficient", experience: "2 Years" },
      { name: "WebSockets & Event-Driven I/O", level: "Intermediate", experience: "1.5 Years" }
    ]
  },
  {
    title: "Networking & IT Infrastructure",
    description: "Hands-on experience configuring, securing, and diagnosing networks.",
    skills: [
      { name: "TCP/IP, Subnetting & CIDR", level: "Advanced", experience: "3 Years", highlight: true },
      { name: "Cisco Packet Tracer / IOS", level: "Proficient", experience: "2.5 Years", highlight: true },
      { name: "Linux Server Admin (Ubuntu)", level: "Proficient", experience: "2 Years", highlight: true },
      { name: "DNS, DHCP, NAT & Routing", level: "Proficient", experience: "2.5 Years" },
      { name: "Wireshark Packet Analysis", level: "Intermediate", experience: "1.5 Years" },
      { name: "Nginx Reverse Proxy & SSL", level: "Intermediate", experience: "1 Year" }
    ]
  },
  {
    title: "Databases, DevOps & Tools",
    description: "Storage engines, containerization, and modern version control workflows.",
    skills: [
      { name: "PostgreSQL & Relational Schema", level: "Advanced", experience: "3 Years", highlight: true },
      { name: "Docker & Container Basics", level: "Intermediate", experience: "1.5 Years", highlight: true },
      { name: "Git & GitHub Collaboration", level: "Advanced", experience: "3 Years", highlight: true },
      { name: "Prisma & Drizzle ORM", level: "Proficient", experience: "2 Years" },
      { name: "Postman API Testing", level: "Proficient", experience: "2 Years" },
      { name: "VS Code & Linux CLI", level: "Advanced", experience: "3 Years" }
    ]
  }
];

export const EDUCATION: EducationItem = {
  degree: "Bachelor of Science in Information Technology",
  field: "Major in Systems Development & Network Administration",
  institution: "Polytechnic / State University",
  period: "2022 – 2026 (Expected Graduation)",
  location: "Metro Manila, Philippines",
  gpa: "1.28 GWA (Consistent Dean's Lister / Top 5% of Batch)",
  honors: [
    "Dean's Honor Roll (Academic Years 2022 - 2025)",
    "Capstone Project of the Semester (EduTrack System)",
    "Student IT Society Active Member & Peer Tutor"
  ],
  keyCourses: [
    "Data Structures & Algorithm Analysis",
    "Database Management Systems & SQL",
    "Computer Networks & Subnet Administration",
    "System Analysis, Design & Architecture",
    "Information Assurance & Cyber Security",
    "Web Application Development & Cloud Computing",
    "Operating Systems & Linux Kernel Concepts"
  ]
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-ccna",
    title: "CCNA: Introduction to Networks (ITN)",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialId: "CSCO-ITN-98421",
    skillsCovered: ["IPv4/IPv6 Subnetting", "Ethernet Switching", "Router Configuration", "Network Security Basics"]
  },
  {
    id: "cert-aws",
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    credentialId: "AWS-ACF-71044",
    skillsCovered: ["EC2 & S3 Basics", "VPC Networking", "IAM Security Roles", "Cloud Economics"]
  },
  {
    id: "cert-fcc",
    title: "Responsive Web Design & JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-JS-2023-JP",
    skillsCovered: ["DOM Manipulation", "ES6 Algorithms", "CSS Flexbox/Grid", "Accessibility"]
  },
  {
    id: "cert-google",
    title: "Google IT Support: Operating Systems & System Admin",
    issuer: "Google / Coursera",
    date: "2023",
    credentialId: "GOOG-IT-44910",
    skillsCovered: ["Linux Administration", "Package Management", "Process Scheduling", "Disaster Recovery"]
  }
];
