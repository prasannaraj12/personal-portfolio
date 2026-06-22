import { create } from 'zustand'

export type CameraMode = 'room' | 'screen'

interface ArcadeState {
  cameraMode: CameraMode
  score: number
  stage: string
  playerName: string
  coinInserted: boolean
  bootSequenceComplete: boolean
  screenContent: 'hero' | 'works' | 'stack' | 'terminal' | 'contact'
  terminalOutput: string[]
  isTyping: boolean

  // Actions
  setCameraMode: (mode: CameraMode) => void
  incrementScore: (amount?: number) => void
  setStage: (stage: string) => void
  setPlayerName: (name: string) => void
  insertCoin: () => void
  setBootComplete: () => void
  setScreenContent: (content: ArcadeState['screenContent']) => void
  addTerminalOutput: (text: string) => void
  setIsTyping: (typing: boolean) => void
  resetTerminal: () => void
}

export const useArcadeStore = create<ArcadeState>((set) => ({
  cameraMode: 'room',
  score: 0,
  stage: '01: HERO',
  playerName: 'PRASANNA RAJ',
  coinInserted: false,
  bootSequenceComplete: false,
  screenContent: 'hero',
  terminalOutput: [
    'System initialized...',
    'Loading portfolio modules...',
    'Type "help" for available commands',
  ],
  isTyping: false,

  setCameraMode: (mode) => set({ cameraMode: mode }),
  incrementScore: (amount = 10) => set((state) => ({ score: state.score + amount })),
  setStage: (stage) => set({ stage }),
  setPlayerName: (name) => set({ playerName: name }),
  insertCoin: () => set((state) => ({ 
    coinInserted: true, 
    score: state.score + 100,
    stage: '02: READY'
  })),
  setBootComplete: () => set({ bootSequenceComplete: true }),
  setScreenContent: (content) => set({ screenContent: content }),
  addTerminalOutput: (text) => set((state) => ({ 
    terminalOutput: [...state.terminalOutput, text] 
  })),
  setIsTyping: (typing) => set({ isTyping: typing }),
  resetTerminal: () => set({ 
    terminalOutput: ['System reset. Type "help" for commands.'] 
  }),
}))