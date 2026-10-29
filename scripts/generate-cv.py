from fpdf import FPDF
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public" / "MohabAtefEl-RefaaiCV.pdf"

INK = (16, 16, 16)
PAPER = (242, 240, 234)
ACID = (212, 255, 0)
RUST = (194, 65, 12)
MUTED = (80, 80, 80)


class CV(FPDF):
    def header(self):
        pass

    def footer(self):
        self.set_y(-12)
        self.set_draw_color(*INK)
        self.set_line_width(0.4)
        self.line(16, self.get_y(), 194, self.get_y())
        self.set_font("Helvetica", "", 7.5)
        self.set_text_color(*MUTED)
        self.cell(0, 5, "Mohab Atef El-Refaai  /  mohab.120240038@ejust.edu.eg  /  linkedin.com/in/mohab-atef", 0, 0, "L")
        self.cell(0, 5, f"0{self.page_no()}", 0, 0, "R")


def section(pdf: FPDF, title: str):
    if pdf.get_y() > 268:
        pdf.add_page()
    y = pdf.get_y() + 1.5
    pdf.set_fill_color(*ACID)
    pdf.rect(16, y + 1.2, 3.2, 3.2, "F")
    pdf.set_xy(22, y)
    pdf.set_font("Helvetica", "B", 9.5)
    pdf.set_text_color(*INK)
    pdf.cell(0, 5.5, title.upper(), 0, 1, "L")
    pdf.set_draw_color(*INK)
    pdf.set_line_width(0.5)
    pdf.line(16, pdf.get_y() + 0.8, 194, pdf.get_y() + 0.8)
    pdf.ln(3.2)


def body(pdf: FPDF, text: str, size=9, lh=4.2):
    pdf.set_font("Helvetica", "", size)
    pdf.set_text_color(*INK)
    pdf.multi_cell(0, lh, text, align="L")
    pdf.ln(1.2)


def entry(pdf: FPDF, period: str, title: str, org: str, detail: str):
    pdf.set_font("Helvetica", "B", 8)
    pdf.set_text_color(*RUST)
    pdf.cell(38, 4.2, period.upper(), 0, 0, "L")
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(*INK)
    pdf.cell(0, 4.2, title, 0, 1, "L")
    pdf.set_x(54)
    pdf.set_font("Helvetica", "I", 8.6)
    pdf.set_text_color(*MUTED)
    pdf.cell(0, 3.8, org, 0, 1, "L")
    pdf.set_x(54)
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(*INK)
    pdf.multi_cell(140, 4.0, detail, align="L")
    pdf.ln(1.4)


pdf = CV(format="A4")
pdf.set_title("Mohab Atef El-Refaai - CV")
pdf.set_author("Mohab Atef El-Refaai")
pdf.set_subject("Mechatronics Engineer / Embedded Systems")
pdf.set_keywords("Mechatronics, Embedded Systems, Robotics, Automation, Arduino, ESP32, Portfolio")
pdf.set_creator("Mohab Atef El-Refaai Portfolio")
pdf.set_auto_page_break(auto=True, margin=15)
pdf.set_margins(16, 16, 16)
pdf.add_page()

# Dark header band
pdf.set_fill_color(*INK)
pdf.rect(0, 0, 210, 48, "F")

pdf.set_xy(16, 11)
pdf.set_font("Helvetica", "B", 25)
pdf.set_text_color(*PAPER)
pdf.cell(0, 12, "MOHAB ATEF EL-REFAAI", 0, 1, "L")

pdf.set_xy(16, 24)
pdf.set_font("Helvetica", "B", 10.5)
pdf.set_text_color(*ACID)
pdf.cell(0, 5, "MECHATRONICS ENGINEER  /  EMBEDDED SYSTEMS", 0, 1, "L")

pdf.set_xy(16, 32)
pdf.set_font("Helvetica", "", 8.2)
pdf.set_text_color(*PAPER)
pdf.cell(0, 4.4, "Al-Dakahlia, Egypt   |   mohab.120240038@ejust.edu.eg   |   +20 155 750 7071", 0, 1, "L")
pdf.set_x(16)
pdf.cell(0, 4.4, "linkedin.com/in/mohab-atef", 0, 1, "L")

pdf.set_y(54)

section(pdf, "Profile")
body(
    pdf,
    "Third-year Mechatronics Engineering student with a strong interest in embedded systems, automation, robotics, and intelligent control systems. Experienced in developing Arduino-based projects and applying engineering principles to solve practical problems. Actively involved in technical and professional student organizations, continuously developing technical expertise and teamwork skills while seeking opportunities to gain industry experience through internships.",
)

section(pdf, "Education")
entry(
    pdf,
    "Sep 2024 - Jun 2028",
    "BSc Mechatronics, Robotics & Automation Engineering",
    "Egypt-Japan University of Science and Technology (E-JUST) / Alexandria, Egypt",
    "Member of the Robotics Club, Xcellence Club, and IEEE Student Branch. Engaged in technical workshops, engineering activities, and professional development initiatives.",
)

section(pdf, "Selected Projects")
entry(
    pdf,
    "Apr 2026",
    "IoT Solar Monitor - Embedded Developer",
    "C/C++ / Arduino / I2C / 16-bit ADC",
    "Built a microcontroller-based hardware testing rig to evaluate solar panel efficiency across varying thermal and humidity conditions. Routed voltage and current sensor outputs through an I2C 16-bit ADC, configured SDA/SCL lines, and managed 5V sensors interfacing with a 3.3V microcontroller.",
)
entry(
    pdf,
    "Jun 2026",
    "Autonomous Robotic Vehicle - Embedded Developer",
    "C/C++ / Ultrasonic Sensor / DC Motors / Motor Driver",
    "Programmed C/C++ control logic on a microcontroller, processing real-time distance data from an ultrasonic sensor and driving DC motors through a motor driver for dynamic obstacle avoidance.",
)
entry(
    pdf,
    "Aug 2026",
    "Automated Gas Detection & Alert System - Embedded Developer",
    "C/C++ / Arduino / Gas Sensor / Buzzer / LEDs",
    "Engineered a microcontroller-based safety monitoring system that samples atmospheric gas data, applies C/C++ threshold logic, and triggers a piezo buzzer and red LED when concentrations exceed safe limits, with a green LED for safe baseline status.",
)

section(pdf, "Extracurriculars & Leadership")
for period, title, org, detail in [
    ("2024 - Present", "Vice Head - Smart Buildings, BMS & Automation Track", "AEE", "Serving on the leadership team for the Smart Buildings, Building Management Systems, and Automation track."),
    ("2024 - Present", "HR Member", "SWUG (SolidWorks User Group)", "Supporting the student chapter's human resources and member engagement activities."),
    ("2024 - Present", "Member", "E-JUST Microscopy Club & Xcellence Club", "Active member of both student organizations, participating in technical and professional development activities."),
]:
    entry(pdf, period, title, org, detail)

section(pdf, "Skills")
pdf.set_font("Helvetica", "", 9)
pdf.set_text_color(*INK)
skills = [
    ("Programming & Embedded", "C/C++, Python, Arduino, ESP32, ATmega32, Embedded Systems, I2C / UART"),
    ("Engineering", "Sensors & Instrumentation, Control Systems, Robotics, Circuit Prototyping, Mechanical Design"),
    ("Software", "ImageJ, LTspice, Arduino IDE"),
    ("Languages", "Arabic (Fluent), English (Fluent), Japanese (Basics)"),
]
for label, value in skills:
    pdf.set_font("Helvetica", "B", 8.4)
    pdf.cell(40, 4.7, label.upper(), 0, 0, "L")
    pdf.set_font("Helvetica", "", 9)
    pdf.multi_cell(0, 4.7, value)
    pdf.ln(0.8)

OUT.parent.mkdir(parents=True, exist_ok=True)
pdf.output(str(OUT))
print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")
