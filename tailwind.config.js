/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arcade': ['"Press Start 2P"', 'cursive'],
        'terminal': ['"VT323"', 'monospace'],
        'mono': ['"Share Tech Mono"', 'monospace'],
      },
      colors: {
        'neon-pink': '#ff00ff',
        'neon-cyan': '#00ffff',
        'neon-green': '#00ff41',
        'neon-yellow': '#ffff00',
        'neon-orange': '#ff6600',
        'neon-red': '#ff0040',
        'arcade-dark': '#0a0a0f',
        'arcade-panel': '#1a1a2e',
        'crt-green': '#33ff00',
        'crt-amber': '#ffb000',
      },
      animation: {
        'flicker': 'flicker 0.15s infinite',
        'scanline': 'scanline 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 1.5s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.95' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff' },
          '100%': { boxShadow: '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.3)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}