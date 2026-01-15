import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface SimulationState {
  // Constants
  version: string;
  
  // Simulation state
  simulationHour: number;
  accumulator: number;
  tickDuration: number;
  lastTimestamp: number;
  isPaused: boolean;

  // Actions
  advanceSimulation: (deltaTime: number) => void;
  setTickDuration: (duration: number) => void;
  togglePause: () => void;
  resetSimulation: () => void;
}

export const useSimulationStore = create<SimulationState>()(
  persist(
    (set, get) => ({
      version: '1.0.0',
      simulationHour: 0,
      accumulator: 0,
      tickDuration: 1000, // 1000ms = 1 game hour
      lastTimestamp: 0,
      isPaused: false,

      advanceSimulation: (deltaTime: number) => {
        const state = get();
        if (state.isPaused) return;

        let newAccumulator = state.accumulator + deltaTime;
        let newSimulationHour = state.simulationHour;

        // "Catch-up" logic: if multiple ticks have passed, process them all
        while (newAccumulator >= state.tickDuration) {
          newSimulationHour += 1;
          newAccumulator -= state.tickDuration;
          
          // Here is where we would trigger tick-based game logic
          // console.log(`Tick ${newSimulationHour} processed`);
        }

        set({
          simulationHour: newSimulationHour,
          accumulator: newAccumulator,
        });
      },

      setTickDuration: (duration: number) => set({ tickDuration: duration }),
      
      togglePause: () => set((state) => ({ isPaused: !state.isPaused })),

      resetSimulation: () => set({
        simulationHour: 0,
        accumulator: 0,
        lastTimestamp: performance.now(),
      }),
    }),
    {
      name: 'nebula-miner-simulation-storage',
      storage: createJSONStorage(() => localStorage),
      // We only want to persist certain fields. 
      // lastTimestamp and accumulator are often better off reset on reload to avoid jumping
      partialize: (state) => ({
        version: state.version,
        simulationHour: state.simulationHour,
        tickDuration: state.tickDuration,
      }),
    }
  )
);
