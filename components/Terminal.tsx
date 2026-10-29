"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import {
  allSkills,
  neofetchLines,
  profile,
  projects,
  resume,
  terminalData,
} from "@/data/portfolio";

type LineKind = "command" | "output" | "muted" | "error" | "ok";

type TermLine = {
  id: number;
  kind: LineKind;
  text: string;
  prompt?: string;
};

const initialLines: TermLine[] = [
  { id: 1, kind: "muted", text: terminalData.motd },
  { id: 2, kind: "command", text: "whoami", prompt: `${profile.handle} ~ %` },
  {
    id: 3,
    kind: "output",
    text: "Mohab Atef El-Refaai — Mechatronics Engineer / Embedded Systems",
  },
  { id: 4, kind: "command", text: "cat README.md", prompt: `${profile.handle} ~ %` },
  {
    id: 5,
    kind: "output",
    text: "Mechatronics engineering student focused on embedded systems, automation, and the control layer between code and hardware.",
  },
  { id: 6, kind: "output", text: "Type `help` to see available commands." },
];

const archLogo = [
  "      /\\",
  "     /  \\",
  "    /    \\",
  "   /  ,,  \\",
  "  /  |  |  \\",
  " /_-''    ''-_\\",
];

function formatNeofetch() {
  const info = [
    profile.handle,
    "-------------------",
    ...neofetchLines.map(([label, value]) => `${label.padEnd(9)}: ${value}`),
  ];

  const rows = Math.max(archLogo.length, info.length);
  return Array.from({ length: rows }, (_, index) => {
    const logo = (archLogo[index] ?? "").padEnd(20, " ");
    return `${logo}${info[index] ?? ""}`;
  }).join("\n");
}

function formatProjects() {
  return projects
    .map(
      (project) =>
        `${project.index}  ${project.name}\n    ${project.role} / ${project.year} / ${project.status}\n    ${project.stack.join(" · ")}`,
    )
    .join("\n\n");
}

const manuals: Record<string, string> = {
  help: "help — list available commands",
  ls: "ls — list directory contents",
  cd: "cd — change the virtual directory",
  pwd: "pwd — print working directory",
  cat: "cat <file> — read a virtual file",
  whoami: "whoami — print the current user",
  projects: "projects — list selected builds",
  skills: "skills — list the toolkit",
  contact: "contact — print direct lines",
  neofetch: "neofetch — print system information",
  echo: "echo <text> — print text",
  date: "date — print the current date",
  clear: "clear — clear the terminal",
  history: "history — show command history",
  tree: "tree — show the portfolio tree",
  uname: "uname — print system information",
  uptime: "uptime — tell me how long I've been up",
  fortune: "fortune — print a random developer fortune",
  banner: "banner — print the MOHAB banner",
  open: "open <linkedin|cv|projects|contact|email> — open a destination",
  man: "man <command> — show a command manual",
  ll: "ll — detailed directory listing",
};

export default function Terminal() {
  const [lines, setLines] = useState<TermLine[]>(initialLines);
  const [input, setInput] = useState("");
  const [cwd, setCwd] = useState("~");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [busy, setBusy] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lineId = useRef(initialLines.length + 1);

  useEffect(() => {
    const output = outputRef.current;
    if (output) output.scrollTop = output.scrollHeight;
  }, [lines]);

  const prompt = `${profile.handle} ${cwd} %`;

  function pushLine(text: string, kind: LineKind = "output") {
    setLines((current) => [
      ...current,
      { id: lineId.current++, kind, text },
    ]);
  }

  function pushCommand(command: string, commandPrompt: string) {
    setLines((current) => [
      ...current,
      { id: lineId.current++, kind: "command", text: command, prompt: commandPrompt },
    ]);
  }

  const sleep = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

  async function execute(raw: string) {
    const commandLine = raw.trim();
    if (!commandLine) {
      pushCommand("", prompt);
      return;
    }

    pushCommand(commandLine, prompt);
    setHistory((current) => [...current, commandLine]);
    setHistoryIndex(-1);
    setInput("");

    const [command, ...args] = commandLine.split(/\s+/);
    const name = command.toLowerCase();

    switch (name) {
      case "help": {
        pushLine("Available commands:", "output");
        pushLine(terminalData.commands.join("  "), "output");
        pushLine("Also: sudo, rm", "muted");
        break;
      }

      case "ls": {
        pushLine("about.txt   contact.txt   projects/   skills.txt   cv.pdf   README.md", "output");
        break;
      }

      case "ll": {
        pushLine(
          "total 18\n-rw-r--r--  1 mohab mohab   412 about.txt\n-rw-r--r--  1 mohab mohab   289 contact.txt\ndrwxr-xr-x  3 mohab mohab  4096 projects/\n-rw-r--r--  1 mohab mohab   671 skills.txt\n-rw-r--r--  1 mohab mohab 98211 cv.pdf\n-rw-r--r--  1 mohab mohab   134 README.md",
          "output",
        );
        break;
      }

      case "pwd": {
        const path = cwd === "~" ? "/home/mohab" : cwd === "/" ? "/" : `/home/mohab/${cwd.replace(/^~\//, "")}`;
        pushLine(path);
        break;
      }

      case "cd": {
        const target = args[0];
        if (!target || target === "~" || target === "/home/mohab") {
          setCwd("~");
          break;
        }
        if (target === ".." || target === "../") {
          setCwd("~");
          break;
        }
        if (target === "projects" || target === "~/projects") {
          setCwd("~/projects");
          break;
        }
        if (target === "/") {
          setCwd("/");
          break;
        }
        pushLine(`cd: no such file or directory: ${target}`, "error");
        break;
      }

      case "cat": {
        const file = args[0];
        if (!file) {
          pushLine("cat: missing file operand", "error");
          break;
        }

        const files: Record<string, string> = {
          "README.md":
            "Mechatronics engineering student focused on embedded systems, automation, and the control layer between code and hardware.\nType `help` to explore.",
          "about.txt": `${profile.name} — ${profile.role}\n\n${resume.summary}\n\nFocus: Embedded systems, robotics, control & automation.`,
          "contact.txt": `Email:    ${profile.email}\nWhatsApp: ${profile.whatsappDisplay}\nLinkedIn: ${profile.linkedin}`,
          "skills.txt": allSkills.join(" · "),
          "projects.json": JSON.stringify(
            projects.map((project) => ({
              name: project.name,
              role: project.role,
              year: project.year,
              status: project.status,
              stack: project.stack,
            })),
            null,
            2,
          ),
        };

        if (files[file]) {
          pushLine(files[file]);
        } else {
          pushLine(`cat: ${file}: No such file or directory`, "error");
        }
        break;
      }

      case "whoami": {
        pushLine("Mohab Atef El-Refaai — Mechatronics Engineer / Embedded Systems");
        break;
      }

      case "projects": {
        pushLine(formatProjects());
        pushLine("Open a case study from the selected work section above.", "muted");
        break;
      }

      case "skills": {
        pushLine(allSkills.join("  ·  "));
        pushLine("18 skills logged.", "muted");
        break;
      }

      case "contact": {
        pushLine(
          `Email:    ${profile.email}\nWhatsApp: ${profile.whatsappDisplay}\nLinkedIn: ${profile.linkedin}\nCV:       ${profile.cvUrl}`,
        );
        break;
      }

      case "neofetch": {
        pushLine(formatNeofetch());
        break;
      }

      case "echo": {
        pushLine(args.join(" "));
        break;
      }

      case "date": {
        pushLine(new Date().toString());
        break;
      }

      case "clear": {
        setLines([]);
        break;
      }

      case "exit": {
        pushLine("There is no exit. Only more shipping.", "muted");
        break;
      }

      case "history": {
        if (!history.length) {
          pushLine("history: no commands yet", "muted");
        } else {
          pushLine(history.map((item, index) => `${String(index + 1).padStart(4)}  ${item}`).join("\n"));
        }
        break;
      }

      case "tree": {
        pushLine(
          "portfolio/\n├── about.txt\n├── contact.txt\n├── cv.pdf\n├── README.md\n├── projects/\n│   ├── iot-solar-monitor/\n│   ├── autonomous-rover/\n│   └── gas-detection/\n└── skills.txt",
        );
        break;
      }

      case "uname": {
        pushLine("Linux archlinux 6.12.8-arch1-1 x86_64 GNU/Linux");
        break;
      }

      case "uptime": {
        pushLine(terminalData.uptimes[Math.floor(Math.random() * terminalData.uptimes.length)]);
        break;
      }

      case "fortune": {
        pushLine(terminalData.fortunes[Math.floor(Math.random() * terminalData.fortunes.length)]);
        break;
      }

      case "banner": {
        pushLine(terminalData.banner);
        break;
      }

      case "open": {
        const target = args[0]?.toLowerCase();
        if (!target) {
          pushLine("open: missing target", "error");
          break;
        }
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth";
        if (target === "projects" || target === "work") {
          document.getElementById("work")?.scrollIntoView({ behavior });
          pushLine("Opening selected work …", "muted");
        } else if (target === "contact") {
          document.getElementById("contact")?.scrollIntoView({ behavior });
          pushLine("Opening contact …", "muted");
        } else if (target === "linkedin") {
          window.open(profile.linkedin, "_blank", "noopener,noreferrer");
          pushLine("Opening LinkedIn …", "muted");
        } else if (target === "cv") {
          window.open(profile.cvUrl, "_blank", "noopener,noreferrer");
          pushLine("Opening CV …", "muted");
        } else if (target === "email" || target === "mail") {
          window.location.href = `mailto:${profile.email}`;
          pushLine(`Opening mail to ${profile.email} …`, "muted");
        } else {
          pushLine(`open: unknown target: ${target}`, "error");
        }
        break;
      }

      case "man": {
        const page = args[0]?.toLowerCase();
        if (!page) {
          pushLine("What manual page do you want?", "muted");
        } else if (manuals[page]) {
          pushLine(manuals[page]);
        } else {
          pushLine(`No manual entry for ${page}`, "error");
        }
        break;
      }

      case "sudo": {
        setBusy(true);
        pushLine("We trust you have received the usual lecture from the local System Administrator.", "muted");
        await sleep(280);
        for (const line of terminalData.easterEgg.bootLines) {
          pushLine(line, "ok");
          await sleep(180);
        }
        pushLine(terminalData.easterEgg.secret);
        pushLine("Hint: the rest of the portfolio is still above ground.", "muted");
        setBusy(false);
        break;
      }

      case "rm": {
        if (args.includes("-rf") && args.some((arg) => arg === "/" || arg === "/*")) {
          pushLine("Nice try. The build is protected.", "error");
        } else {
          pushLine("rm: permission denied", "error");
        }
        break;
      }

      default: {
        pushLine(`zsh: command not found: ${command}`, "error");
        pushLine("Type `help` for a list of commands.", "muted");
      }
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      void execute(input);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!history.length) return;
      const nextIndex = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex] ?? "");
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex < 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex] ?? "");
      }
      return;
    }

    if (event.ctrlKey && event.key.toLowerCase() === "l") {
      event.preventDefault();
      setLines([]);
    }
  }

  function runFromChip(command: string) {
    void execute(command);
    inputRef.current?.focus();
  }

  return (
    <div
      className="terminal"
      id="terminal"
      onClick={(event) => {
        const target = event.target as HTMLElement;
        if (target.closest("button, a, input")) return;
        inputRef.current?.focus();
      }}
    >
      <div className="terminal__bar">
        <span className="terminal__lights" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{profile.handle}: ~/portfolio</span>
        <span>zsh</span>
      </div>

      <div
        className="terminal__output"
        id="terminalOutput"
        ref={outputRef}
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
      >
        {lines.map((line) => (
          <div className={`term-line term-line--${line.kind}`} key={line.id}>
            {line.kind === "command" ? (
              <>
                <span className="term-prompt">{line.prompt}</span> {line.text}
              </>
            ) : (
              line.text
            )}
          </div>
        ))}
      </div>

      <div className="terminal__prompt">
        <label className="sr-only" htmlFor="terminalInput">
          Terminal command input
        </label>
        <span className="terminal__prompt-text" aria-hidden="true">
          {prompt}
        </span>
        <input
          id="terminalInput"
          ref={inputRef}
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder={busy ? "working…" : "type a command…"}
          aria-label="Terminal command input"
        />
      </div>

      <div className="terminal__status">
        <span>MOTD: {terminalData.motd}</span>
        <span>UTF-8 / ZSH 5.9</span>
      </div>

      <div className="terminal__chips" aria-label="Suggested terminal commands">
        {["neofetch", "projects", "cat about.txt", "sudo"].map((command) => (
          <button
            type="button"
            className="command-chip"
            data-command={command}
            key={command}
            onClick={() => runFromChip(command)}
          >
            {command}
          </button>
        ))}
      </div>
    </div>
  );
}
