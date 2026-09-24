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
  title: "Prasannaraj — AI / ML Engineer",
  description:
    "Portfolio of Prasannaraj, an AI/ML engineer focused on Generative AI, Agentic AI, Computer Vision, NLP, and intelligent systems.",
  keywords: [
    "Prasannaraj",
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI",
    "Agentic AI",
    "Computer Vision",
    "NLP",
    "TRUST-CV",
    "SatQuery AI",
    "CrawlNews",
    "Sri Sairam College of Engineering",
    "Bangalore",
  ],
  authors: [{ name: "Prasannaraj" }],
  creator: "Prasannaraj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prasannaraj.dev",
    title: "Prasannaraj — AI / ML Engineer",
    description:
      "Interactive Windows 11 Desktop Portfolio of Prasannaraj, an AI/ML Engineer focused on Generative AI, Agentic AI, Computer Vision, and full-stack intelligent systems.",
    siteName: "Prasannaraj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasannaraj — AI / ML Engineer",
    description:
      "Interactive Windows 11 Desktop Portfolio of Prasannaraj, an AI/ML Engineer focused on Generative AI, Agentic AI, Computer Vision, and full-stack intelligent systems.",
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
    name: "Prasannaraj",
    jobTitle: "AI / ML Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Crawl Corp India (CCI)",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sri Sairam College of Engineering, Bangalore",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Agentic AI",
      "Computer Vision",
      "Natural Language Processing",
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
