import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ola McCartney | Engineer & Inventor",
  description:
    "Portfolio of Ola McCartney — Engineer, Inventor, and Author. Showcasing patents, publications, and engineering projects. Clarity Trumps Complexity.",
  keywords: [
    "Ola McCartney",
    "Engineer",
    "Inventor",
    "Patents",
    "Portfolio",
    "Author",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
