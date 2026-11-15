import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0B0D10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Prasanna Raj R — AI / ML Engineer",
  description:
    "Portfolio of Prasanna Raj R, an AI/ML engineer specializing in Generative AI, LLM applications, Agentic AI systems, and fine-tuned open-weight language models.",
  keywords: [
    "Prasanna Raj R",
    "Prasannaraj",
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI",
    "Agentic AI",
    "LLM Fine-Tuning",
    "LangGraph",
    "LangChain",
    "FastAPI",
    "AgentDB",
    "CrawlNews",
    "Sri Sairam College of Engineering",
    "Bengaluru",
  ],
  authors: [{ name: "Prasanna Raj R" }],
  creator: "Prasanna Raj R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prasannaraj.dev",
    title: "Prasanna Raj R — AI / ML Engineer",
    description:
      "Interactive Windows 11 Desktop Portfolio of Prasanna Raj R, an AI/ML Engineer specializing in Generative AI, LLM applications, Agentic AI systems, and fine-tuned open-weight models.",
    siteName: "Prasanna Raj R Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasanna Raj R — AI / ML Engineer",
    description:
      "Interactive Windows 11 Desktop Portfolio of Prasanna Raj R, an AI/ML Engineer specializing in Generative AI, LLM applications, Agentic AI systems, and fine-tuned open-weight models.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prasanna Raj R",
    jobTitle: "AI / ML Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Crawl Corp India Private Limited",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sri Sairam College of Engineering, Bengaluru",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Agentic AI",
      "LLM Fine-Tuning (QLoRA / PEFT)",
      "LangChain & LangGraph",
      "FastAPI & Node.js Backend",
      "Full-Stack AI Applications",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0B0D10] text-[#F5F7FA] overflow-hidden">
        {children}
      </body>
    </html>
  );
}
