import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const gameStore = (set) => ({
  gameState: [
    {
      playing: false,
    },
    {
      valid: false,
    }
  ],
  setState: set((state) => ({ 
    gameState: [
      {
        playing: !state.gameState[0].playing,
      },
      {
        valid: !state.gameState[1].valid,
      },
    ],
  })),
})

const useGameStore = create(
  devtools(
    persist(
      gameStore, { name: 'game' }
  )));

export default useGameStore 