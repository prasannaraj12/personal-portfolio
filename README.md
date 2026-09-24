# Prasannaraj Portfolio

> Interactive Windows 11-inspired AI/ML engineer portfolio.

An interactive desktop operating system environment presenting the engineering projects, research milestones, verified credentials, and technical background of **Prasannaraj**, an AI / ML Engineer and BE Artificial Intelligence & Machine Learning student at Sri Sairam College of Engineering, Bangalore.

*Disclaimer: This portfolio is an independent creative project inspired by the visual design and window interaction patterns of Windows 11 Fluent Design. It is not an official Microsoft product and is not affiliated with or endorsed by Microsoft Corporation.*

---

## Overview

Unlike traditional dashboard-based portfolios, this project structures information discovery strictly through native-style desktop applications:
- **Clean Desktop**: High-resolution wallpaper canvas with authentic desktop shortcuts, restrained negative space, and right-click desktop context menu.
- **File Explorer (Projects)**: Browse 8 production AI projects with breadcrumb paths (`This PC > Projects`), ribbon actions, left navigation tree, and detailed engineering case studies.
- **Settings (Skills)**: Windows 11 Settings architecture with administrator profile header, domain categorization, and structured capability lists.
- **Document Viewer (Resume)**: Native document reader toolbar (`Print / PDF`, `LinkedIn`, `GitHub`) with responsive paper-sheet typography.
- **Windows Terminal**: PowerShell console canvas (`PS C:\Users\Prasannaraj>`) supporting interactive portfolio commands (`whoami`, `projects`, `skills`, `clear`, etc.).
- **AI Research Lab**: Engineering workbench featuring pipeline architecture dataflows, model catalogs, and verification assertions.
- **This PC (System Properties)**: Candidate specifications, hardware configurations, and verified metrics.

---

## Features

- **Window Management System**:
  - Dragging, resizing, minimizing to taskbar, maximizing/restoring, and z-index focus stacking.
  - Strict 8px window geometry and 34px title bar chrome with red `#E81123` close control.
- **Start Menu**:
  - Centered Windows 11 flyout with quick search (`Ctrl + K`), pinned core apps, recommended recent project shortcuts, and user profile power menu.
- **Docked Taskbar**:
  - Centered app launcher with active window indicator pills, system tray (clock, audio, network, notifications), and recruiter fast-track mode.
- **Prasanna AI Assistant**:
  - Built-in intelligent assistant strictly scoped to verified portfolio knowledge, answering questions without external token leaks or hallucinations.
- **Responsive Architecture**:
  - Fully responsive from mobile devices (375px–414px) to 4K displays (1920px+).

---

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.3.6 (App Router, Turbopack)
- **Runtime & UI**: [React](https://react.dev/) 19.2.8
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 & Vanilla CSS Design Tokens
- **Iconography**: Official [Microsoft Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons) (`@fluentui/react-icons`) and authentic Windows 11 vector assets
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment & Hosting**: [Vercel](https://vercel.com/)

---

## Featured Projects

1. **TRUST-CV / BLOCK SENTINAL**: Offline air-gapped Computer Vision integrity assurance platform with cryptographic evidence verification (**210 / 210 passing tests**).
2. **SATQUERY AI**: Multispectral satellite image visual question answering (VQA) using dual-branch ResNet-18 and attention networks.
3. **CRAWLNEWS**: Full-stack multi-agent news intelligence and swarm ingestion engine built with Node.js, Express, Playwright, and RSS parsers.
4. **FAKEO**: AI-powered misinformation detection classifier with XGBoost, spaCy, and Tesseract OCR.
5. **URBANBLOOM AI**: Smart urban agriculture and automated irrigation ecosystem with ESP32 IoT microcontrollers and Gemini AI telemetry.
6. **PLAYER RE-IDENTIFICATION**: Real-time sports computer vision tracking system utilizing YOLOv5 and DeepSORT.
7. **RENTYOURMATE**: Trusted companion booking marketplace built on Flutter, Node.js, and PostgreSQL.
8. **CHEST X-RAY AI**: Radiographic pulmonary disease localization using DenseNet121, U-Net, and Grad-CAM interpretability.

---

## AI Assistant (Prasanna AI)

Prasanna AI operates under strict boundary guardrails:
- **Scope**: Answers questions exclusively regarding Prasannaraj's projects, experience, skills, certifications, and contact details.
- **Privacy & Safety**: Client-side deterministic knowledge engine requiring no external API credentials, eliminating API key leakage risks.
- **Fallback Response**: Unrelated queries receive:
  > *"I can only answer questions about Prasannaraj and information available in this portfolio."*

---

## Local Development

### Prerequisites
- Node.js 18.18+ or 20+
- npm 9+ or pnpm 8+

### Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/your-username/prasannaraj-portfolio.git
cd prasannaraj-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Copy `.env.example` to `.env.local` if custom runtime configurations are needed:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Public canonical site URL for SEO metadata | `https://prasannaraj.dev` |

*Note: No secret keys are required to build or run the portfolio.*

---

## Production Build

To test the production build locally:

```bash
# Build the production bundle
npm run build

# Start the production server
npm run start
```

Turbopack will compile optimized static pages with zero TypeScript errors.

---

## Deployment

### GitHub
```bash
git init
git add .
git commit -m "Initial commit: Windows 11 AI Engineer Portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/prasannaraj-portfolio.git
git push -u origin main
```

### Vercel Deployment
1. Log in to [Vercel](https://vercel.com/).
2. Click **Add New...** → **Project**.
3. Import your `prasannaraj-portfolio` GitHub repository.
4. Vercel automatically detects **Next.js**.
5. Leave default build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. Click **Deploy**.
