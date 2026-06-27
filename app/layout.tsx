import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Isuru Ruwantha | Senior Software Engineer",
  description:
    "Senior Software Engineer with 5+ years of experience delivering scalable, production-grade applications using Java, Spring Boot, microservices, and modern frontend frameworks.",
  keywords: [
    "Isuru Ruwantha",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "Next.js",
    "React",
    "PostgreSQL",
    "Docker",
    "Sri Lanka",
  ],
  authors: [{ name: "Isuru Ruwantha" }],
  openGraph: {
    title: "Isuru Ruwantha | Senior Software Engineer",
    description:
      "Senior Software Engineer specialising in Java, Spring Boot, Next.js and React.",
    type: "website",
    locale: "en_US",
    url: "https://isururuwantha.vercel.app",
    siteName: "Isuru Ruwantha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isuru Ruwantha | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer specialising in Java, Spring Boot, Next.js and React.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-bg">{children}</body>
    </html>
  );
}
