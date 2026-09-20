import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Debjit Mandal | AI/ML • Digital Twins • Disaster Resilience",
  description:
    "Portfolio of Debjit Mandal — AI/ML, digital twin systems, disaster resilience, research, and engineering.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}