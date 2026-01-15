import { Link } from 'react-router-dom';
import { Rocket, Box, Trash2, Play } from 'lucide-react';
import { useSimulationStore } from '../store/useSimulationStore';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const simulationHour = useSimulationStore((state) => state.simulationHour);
  const resetSimulation = useSimulationStore((state) => state.resetSimulation);
  const [hasSave, setHasSave] = useState(false);

  useEffect(() => {
    // Check if a save exists in localStorage
    const storage = localStorage.getItem('nebula-miner-simulation-storage');
    if (storage) {
      try {
        const parsed = JSON.parse(storage);
        if (parsed.state && parsed.state.simulationHour > 0) {
          setHasSave(true);
        }
      } catch (e) {
        console.error('Failed to parse save data', e);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-8 font-sans">
      <header className="mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-7xl font-bold tracking-tighter bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-2">
          Nebula Miner
        </h1>
        <p className="text-xl text-slate-400 mt-4 italic font-light">Extracting value from the cosmic void.</p>
      </header>
      
      <main className="w-full max-w-2xl flex flex-col items-center gap-8">
        <div className="flex flex-col sm:flex-row gap-6">
          {hasSave ? (
            <>
              <Link 
                to="/game" 
                className="group relative flex items-center gap-4 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
              >
                <Play className="w-6 h-6" />
                Continue (Hour {simulationHour})
              </Link>
              <button 
                onClick={() => {
                  if (confirm('Are you sure you want to start fresh? This will delete your current progress.')) {
                    resetSimulation();
                    setHasSave(false);
                  }
                }}
                className="group flex items-center gap-4 bg-slate-800 hover:bg-red-900/40 text-slate-200 px-8 py-4 rounded-xl font-bold text-lg border border-slate-700 transition-all hover:scale-105"
              >
                <Trash2 className="w-6 h-6 text-slate-400 group-hover:text-red-400" />
                Start Fresh
              </button>
            </>
          ) : (
            <Link 
              to="/game" 
              className="group relative flex items-center gap-4 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
            >
              <Rocket className="w-6 h-6 group-hover:animate-bounce" />
              Start Mining
            </Link>
          )}
          
          <Link 
            to="/playground" 
            className="group flex items-center gap-4 bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-4 rounded-xl font-bold text-lg border border-slate-700 transition-all hover:scale-105"
          >
            <Box className="w-6 h-6" />
            Component Playground
          </Link>
        </div>

        <section className="mt-12 text-center max-w-md">
          <p className="text-slate-500 text-sm leading-relaxed">
            A strategic browser-based space mining game. Build your fleet, explore nebulas, and dominate the cosmic economy.
          </p>
        </section>
      </main>

      <footer className="mt-auto pt-16 text-slate-600 text-xs tracking-widest uppercase">
        &copy; 2026 Nebula Miner Project
      </footer>
    </div>
  );
}
