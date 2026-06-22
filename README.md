# 🕹️ Retro Arcade Cabinet Portfolio

A highly immersive, premium 3D portfolio built with React, Three.js, and React Three Fiber. Features a fully interactive arcade cabinet with CRT screen effects, synthesizer audio, and a complete portfolio interface.

## ✨ Features

### 3D Environment
- **Arcade Room** — Dark ambient 1980s room with neon lights, grid floor, floating dust particles
- **Arcade Cabinet** — Detailed 3D model with wood-textured side panels, glowing decals, and physical controls
- **CRT Shader** — Custom GLSL shader with curved distortion, moving scanlines, phosphor glow, and vignette
- **Post-Processing** — Bloom effects for neon glow and screen glare

### Interactive Controls
- **Joystick** — Click and drag to tilt dynamically with audio feedback
- **Action Buttons** — 4 colored buttons (Red, Orange, Cyan, Green) with hover glow and depression
- **Coin Slot** — Click "INSERT COIN" for double-pitched chime and score boost
- **Camera System** — Smooth lerp transitions between room overview and screen close-up

### Screen Content (2D in 3D)
- **HUD** — Live score counter, stage tracker, player info, health bar
- **Hero Section** — Typewriter headline, animated 8-bit mascot, stats grid, CTA buttons
- **Works Section** — 6 game cartridge cards with hover effects and project details
- **Stack Section** — Interactive skill grid with LED indicators and proficiency bars
- **Terminal** — Working CLI with commands: `help`, `about`, `skills`, `works`, `contact`, `clear`, `reboot`
- **Contact Form** — Encrypted comms console with transmission animation

### Audio (Web Audio API)
- **Boot** — Rising synth-wave arpeggio
- **Hover** — Quick high-pitched blip
- **Click** — Satisfying electronic click
- **Coin** — Double-pitched metallic chime
- **Success** — Uplifting 8-bit victory fanfare
- **Joystick** — Movement feedback tone

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Navigate to the project directory
cd arcade-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## 🎮 Controls & Interaction

| Action | How To |
|--------|--------|
| Start the app | Click or press any key during boot sequence |
| Enter "Full Play Mode" | Double-click the CRT screen or click "INSERT COIN" |
| Return to room view | Click the "BACK" button on cabinet top |
| Tilt joystick | Click and drag the joystick ball |
| Press buttons | Click or hover over colored action buttons |
| Navigate screen | Use the tab navigation bar on the screen |
| Type in terminal | Click terminal input and type commands |

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **3D Engine**: Three.js + @react-three/fiber + @react-three/drei
- **Post-Processing**: @react-three/postprocessing (Bloom)
- **State**: Zustand
- **Styling**: Tailwind CSS
- **Audio**: Web Audio API (synthesizer-generated, no external files)
- **Fonts**: Press Start 2P, VT323, Share Tech Mono (Google Fonts)

## 📁 Project Structure

```
arcade-portfolio/
├── public/
│   └── arcade-icon.svg
├── src/
│   ├── components/
│   │   ├── arcade/
│   │   │   ├── ArcadeScene.tsx      # Main 3D scene composition
│   │   │   ├── ArcadeCabinet.tsx    # Cabinet model + controls
│   │   │   ├── ArcadeRoom.tsx       # Room environment
│   │   │   ├── FloatingDust.tsx     # Particle system
│   │   │   ├── CameraController.tsx # Camera transitions
│   │   │   └── CRTShader.tsx        # Custom GLSL shader
│   │   ├── screen/
│   │   │   ├── ArcadeScreen.tsx     # 2D UI projected on 3D
│   │   │   ├── HUD.tsx              # Score/stage header
│   │   │   ├── Navigation.tsx       # Tab navigation
│   │   │   ├── HeroSection.tsx      # Landing page
│   │   │   ├── WorksSection.tsx     # Portfolio cards
│   │   │   ├── StackSection.tsx     # Skills grid
│   │   │   ├── TerminalSection.tsx  # Interactive CLI
│   │   │   └── ContactSection.tsx   # Contact form
│   │   └── BootSequence.tsx         # Terminal boot animation
│   ├── hooks/
│   │   ├── useArcadeStore.ts        # Zustand state
│   │   └── useTypewriter.ts         # Typewriter effect
│   ├── lib/
│   │   └── AudioManager.ts          # Web Audio API synth
│   ├── App.tsx                      # Main app
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles + animations
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── postcss.config.js
```

## 🎨 Customization

### Changing Colors
Edit `tailwind.config.js`:
```js
colors: {
  'neon-pink': '#ff00ff',
  'neon-cyan': '#00ffff',
  // ...
}
```

### Adding Projects
Edit `src/components/screen/WorksSection.tsx`:
```js
const PROJECTS = [
  {
    title: 'YOUR PROJECT',
    category: 'CATEGORY',
    description: 'Description here',
    tech: ['React', 'Three.js'],
    color: '#ff00ff',
    stars: 100,
    forks: 20,
  },
  // ...
]
```

### Adding Terminal Commands
Edit `src/components/screen/TerminalSection.tsx`:
```js
const COMMANDS = {
  yourcommand: ['Line 1', 'Line 2'],
}
```

## 📝 License

MIT License — feel free to use this as a template for your own portfolio!

---

Built with 💜 and a lot of caffeine by a creative developer who misses the 80s.
