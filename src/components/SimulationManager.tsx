import { useEffect, useRef } from 'react';
import { useSimulationStore } from '../store/useSimulationStore';

export const SimulationManager = () => {
  const advanceSimulation = useSimulationStore((state) => state.advanceSimulation);
  const isPaused = useSimulationStore((state) => state.isPaused);
  const requestRef = useRef<number>(0);
  const lastTimestampRef = useRef<number>(0);

  const animate = (time: number) => {
    if (lastTimestampRef.current !== 0) {
      const deltaTime = time - lastTimestampRef.current;
      advanceSimulation(deltaTime);
    }
    lastTimestampRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Reset timestamp when unpausing or starting
    if (!isPaused) {
      lastTimestampRef.current = performance.now();
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
    }

    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused, advanceSimulation]);

  // This is a logic-only component
  return null;
};
