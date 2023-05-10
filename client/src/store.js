import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const gameStore = (set) => ({
  gameState: false,

  toggleGameState: () => {
    console.log("Toggling game state");
    set((state) => ({ gameState: !state.gameState }));
  },
});

const useGameStore = create(devtools(persist(gameStore, { name: "game" })));

export default useGameStore;
