export const profile = {
  name: "Mohab Atef El-Refaai",
  role: "Mechatronics Engineer / Embedded Systems",
  handle: "mohab@archlinux",
  location: "Al-Dakahlia, Egypt",
  linkedin: "https://linkedin.com/in/mohab-atef",
  email: "mohab.120240038@ejust.edu.eg",
  whatsapp: "+201557507071",
  whatsappDisplay: "+20 155 750 7071",
  cvUrl: "/MohabAtefEl-RefaaiCV.pdf",
  availability: "Open to internships",
  issue: "Portfolio / Vol. 01",
  coordinates: "Al-Dakahlia, EG — 31.05°N",
} as const;

export const about = {
  bio: "I'm a third-year Mechatronics Engineering student with a strong interest in embedded systems, automation, robotics, and intelligent control systems.",
  bioSecondary:
    "I develop Arduino-based projects and apply engineering principles to solve practical problems — turning sensors, control logic, and hardware into systems that work outside the simulator.",
  interests: ["Embedded Systems", "Robotics", "Control & Automation"],
} as const;

export const stats = [
  { value: "3rd", label: "Year / Mechatronics" },
  { value: "03", label: "Engineering builds" },
  { value: "18", label: "Skills logged" },
  { value: "06", label: "Student orgs" },
] as const;

export const resume = {
  summary:
    "Third-year Mechatronics Engineering student with a strong interest in embedded systems, automation, robotics, and intelligent control systems. Experienced in developing Arduino-based projects and applying engineering principles to solve practical problems. Actively involved in technical and professional student organizations, continuously developing technical expertise and teamwork skills while seeking opportunities to gain industry experience through internships.",
  timeline: [
    {
      period: "Sep 2024 — Jun 2028",
      title: "BSc Mechatronics, Robotics & Automation Engineering",
      org: "Egypt-Japan University of Science and Technology (E-JUST)",
      detail:
        "Third-year student based in Alexandria. Member of the Robotics Club, Xcellence Club, and IEEE Student Branch; engaged in technical workshops, engineering activities, and professional development initiatives.",
    },
    {
      period: "2024 — Present",
      title: "Vice Head — Smart Buildings, BMS & Automation Track",
      org: "AEE",
      detail:
        "Serving on the leadership team for the Smart Buildings, Building Management Systems, and Automation track.",
    },
    {
      period: "2024 — Present",
      title: "HR Member",
      org: "SWUG (SolidWorks User Group)",
      detail:
        "Supporting the student chapter's human resources and member engagement activities.",
    },
    {
      period: "2024 — Present",
      title: "Member",
      org: "E-JUST Microscopy Club & Xcellence Club",
      detail:
        "Active member of both student organizations, participating in technical and professional development activities.",
    },
  ],
} as const;

export type SkillCategory = {
  title: string;
  short: string;
  tone: "embedded" | "engineering" | "software" | "language";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Embedded",
    short: "07",
    tone: "embedded",
    skills: ["C/C++", "Python", "Arduino", "ESP32", "ATmega32", "Embedded Systems", "I2C / UART"],
  },
  {
    title: "Engineering",
    short: "05",
    tone: "engineering",
    skills: [
      "Sensors & Instrumentation",
      "Control Systems",
      "Robotics",
      "Circuit Prototyping",
      "Mechanical Design",
    ],
  },
  {
    title: "Software",
    short: "03",
    tone: "software",
    skills: ["ImageJ", "LTspice", "Arduino IDE"],
  },
  {
    title: "Languages",
    short: "03",
    tone: "language",
    skills: ["Arabic (Fluent)", "English (Fluent)", "Japanese (Basics)"],
  },
];

export const allSkills = skillCategories.flatMap((category) => category.skills);

export type Project = {
  slug: "solar" | "rover" | "gas";
  index: string;
  name: string;
  label: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  status: "Active" | "Completed";
  tone: "ink" | "paper" | "acid";
  highlights: string[];
  github?: string;
  privateBuild?: boolean;
};

export const projects: Project[] = [
  {
    slug: "solar",
    index: "01",
    name: "IoT Solar Monitor",
    label: "Sensors / I2C / Signal acquisition",
    description:
      "A microcontroller-based hardware testing rig that evaluates solar panel efficiency across varying thermal and humidity conditions. Voltage and current sensor outputs are routed through a dedicated I2C-based 16-bit analog-to-digital converter for precise acquisition.",
    stack: ["C/C++", "Arduino", "I2C", "16-bit ADC", "Sensors", "Instrumentation"],
    role: "Embedded Developer",
    year: "Apr 2026",
    status: "Completed",
    tone: "ink",
    highlights: [
      "Built a microcontroller-based rig to evaluate solar panel efficiency",
      "Routed voltage and current sensors through an I2C 16-bit ADC",
      "Configured I2C data lines (SDA/SCL) at the hardware level",
      "Managed 5V sensors interfacing with a 3.3V microcontroller",
    ],
    privateBuild: true,
  },
  {
    slug: "rover",
    index: "02",
    name: "Autonomous Robotic Vehicle",
    label: "Robotics / Motor control / Obstacle avoidance",
    description:
      "A microcontroller-driven robotic vehicle that processes real-time distance data from an ultrasonic sensor and drives DC motors through a motor driver for dynamic obstacle avoidance.",
    stack: [
      "C/C++",
      "Microcontroller",
      "Ultrasonic Sensor",
      "DC Motors",
      "Motor Driver",
      "Control Logic",
    ],
    role: "Embedded Developer",
    year: "Jun 2026",
    status: "Completed",
    tone: "paper",
    highlights: [
      "Programmed C/C++ control logic on a microcontroller",
      "Processed real-time distance data from an ultrasonic sensor",
      "Drove DC motors through a dedicated motor driver",
      "Implemented dynamic obstacle avoidance",
    ],
    privateBuild: true,
  },
  {
    slug: "gas",
    index: "03",
    name: "Automated Gas Detection & Alert System",
    label: "Safety / Sensors / Threshold logic",
    description:
      "A microcontroller-based safety monitoring system that interfaces an Arduino with an atmospheric gas sensor to detect hazardous leaks and trigger a localized alert when concentrations exceed safe limits.",
    stack: [
      "C/C++",
      "Arduino",
      "Gas Sensor",
      "Piezo Buzzer",
      "LED Indicators",
      "Threshold Logic",
    ],
    role: "Embedded Developer",
    year: "Aug 2026",
    status: "Completed",
    tone: "acid",
    highlights: [
      "Engineered a microcontroller-based safety monitoring system",
      "Developed C/C++ threshold logic for continuous gas sampling",
      "Triggered a piezo buzzer and red LED above safe limits",
      "Used a green LED for safe baseline and active system status",
    ],
    privateBuild: true,
  },
];

export const certificates = [
  {
    serial: "DOM / 001",
    year: "CORE",
    mark: "EMB",
    title: "Embedded Systems",
    issuer: "Firmware & microcontrollers",
    detail:
      "Microcontroller-based development with C/C++, Arduino, ESP32, and ATmega32. Comfortable working at the hardware level with I2C/UART and 3.3V/5V interfaces.",
    skills: ["C/C++", "Arduino", "ESP32", "ATmega32", "I2C / UART"],
  },
  {
    serial: "DOM / 002",
    year: "CORE",
    mark: "CTL",
    title: "Control & Automation",
    issuer: "Sensing, logic, actuation",
    detail:
      "Sensor integration, instrumentation, and control logic for systems that measure, decide, and actuate in real time.",
    skills: ["Sensors", "Instrumentation", "Control Systems", "Automation"],
  },
  {
    serial: "DOM / 003",
    year: "APPLIED",
    mark: "ROB",
    title: "Robotics",
    issuer: "Autonomous platforms",
    detail:
      "Motor control, ultrasonic distance sensing, and obstacle-avoidance behavior on microcontroller-driven platforms.",
    skills: ["Robotics", "Motor Control", "Ultrasonic Sensing", "Embedded C/C++"],
  },
  {
    serial: "DOM / 004",
    year: "TOOLING",
    mark: "MECH",
    title: "Mechanical & Prototyping",
    issuer: "Design & simulation",
    detail:
      "Circuit prototyping and mechanical design, supported by simulation and imaging tools used throughout engineering coursework.",
    skills: ["Circuit Prototyping", "Mechanical Design", "LTspice", "ImageJ"],
  },
] as const;

export const neofetchLines: [string, string][] = [
  ["OS", "Arch Linux x86_64"],
  ["Host", "E-JUST Makerspace"],
  ["Board", "ESP32 / ATmega32"],
  ["Toolchain", "avr-gcc / arduino-cli"],
  ["Editor", "NVIM / Arduino IDE"],
  ["Terminal", "tmux / kitty"],
  ["Shell", "zsh 5.9"],
  ["Year", "3rd — Mechatronics"],
  ["Packages", "1284 (pacman)"],
  ["Memory", "7.2GiB / 15.5GiB"],
];

export const terminalData = {
  commands: [
    "help",
    "ls",
    "cd",
    "pwd",
    "cat",
    "whoami",
    "projects",
    "skills",
    "contact",
    "neofetch",
    "echo",
    "date",
    "clear",
    "exit",
    "history",
    "tree",
    "uname",
    "uptime",
    "fortune",
    "banner",
    "open",
    "man",
    "ll",
  ],
  banner: `
  __  __  ___  _  _    _    ____
 |  \\/  |/ _ \\| || |  / \\  | __ )
 | |\\/| | | | | || |_/ _ \\ |  _ \\
 | |  | | |_| |__   _/ ___ \\| |_) |
 |_|  |_|\\___/   |_|/_/   \\_\\____/
`,
  fortunes: [
    "There are 10 types of people in the world: those who understand binary, and those who don't.",
    "It works on the breadboard.",
    "My code works, I have no idea why.",
    "Measure twice, solder once.",
    "An engineer's favorite debugging tool is still a fresh pair of eyes.",
  ],
  uptimes: [
    "up 42 days, 13:37,  1 user,  load average: 0.00, 0.01, 0.05",
    "up 1 year, 0 days, 0 mins, 0 users, load average: 99.99, 99.99, 99.99 (send help)",
    "up 2 mins, 1 user, load average: 0.10, 0.05, 0.01 (just powered on)",
  ],
  motd: "Measure twice, solder once.",
  easterEgg: {
    bootLines: [
      "[ OK ] Probing I2C bus ...",
      "[ OK ] Calibrating sensor array ...",
      "[ OK ] Spinning up motor drivers ...",
      "[ OK ] Bypassing safety interlocks ...",
      "[ OK ] Access granted.",
    ],
    secret:
      "You found the root shell. The hidden track is `firmware/` — where the physical world meets undefined behavior.",
  },
} as const;
