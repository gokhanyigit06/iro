import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İrem Çağan | Full Stack Developer",
  description: "Yaratıcı ve işlevsel dijital deneyimler tasarlayan bir Full Stack Developer.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Portfolio", "İrem Çağan"],
  authors: [{ name: "İrem Çağan" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
