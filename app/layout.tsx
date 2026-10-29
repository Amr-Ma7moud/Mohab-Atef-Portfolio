import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: "./fonts/archivo-black.woff2",
  variable: "--font-display",
  weight: "400",
  display: "swap",
  preload: true,
});

const body = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const mono = localFont({
  src: "./fonts/jetbrains-mono.woff2",
  variable: "--font-mono",
  weight: "100 800",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Mohab Atef El-Refaai — Mechatronics Engineer",
  description:
    "Mechatronics engineering student building embedded systems, automation, and robotics. Selected projects, experience, and a working shell.",
  keywords: [
    "Mohab Atef El-Refaai",
    "mechatronics engineer",
    "embedded systems",
    "robotics",
    "Arduino",
    "ESP32",
    "portfolio",
  ],
  openGraph: {
    title: "Mohab Atef El-Refaai — Mechatronics Engineer",
    description:
      "I build machines that move. Embedded systems, robotics, and control — where code meets the physical world.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Mohab Atef El-Refaai — Mechatronics Engineer",
    description:
      "I build machines that move. Embedded systems, robotics, and control — where code meets the physical world.",
  },
};

export const viewport: Viewport = {
  themeColor: "#101010",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
