import { Link } from 'react-router-dom';
import { Construction, ArrowLeft, Save, Pause, Play, RefreshCw } from 'lucide-react';
import { useSimulationStore } from '../store/useSimulationStore';
import { SimulationManager } from '../components/SimulationManager';

export default function GamePage() {
  const simulationHour = useSimulationStore((state) => state.simulationHour);
  const isPaused = useSimulationStore((state) => state.isPaused);
  const togglePause = useSimulationStore((state) => state.togglePause);
  const resetSimulation = useSimulationStore((state) => state.resetSimulation);

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col items-center justify-center p-8 font-sans overflow-hidden">
      <SimulationManager />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent opacity-50" />
      
      <main className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-lg">
        <div className="bg-indigo-500/10 p-6 rounded-full border border-indigo-500/20 animate-pulse">
          <Construction className="w-16 h-16 text-indigo-400" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-black tracking-tight text-white uppercase">Sector Restricted</h1>
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl shadow-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-indigo-400 font-bold mb-1">Simulation Time</div>
            <div className="text-6xl font-mono tabular-nums text-white">
              {Math.floor(simulationHour / 24).toString().padStart(3, '0')}
              <span className="text-indigo-500 text-2xl mx-1">d</span>
              {(simulationHour % 24).toString().padStart(2, '0')}
              <span className="text-indigo-500 text-2xl ml-1">h</span>
            </div>
          </div>
          <p className="text-xl text-slate-400">
            The Nebula Miner engine is currently under heavy construction. Mining drills will be operational soon.
          </p>
          <p className="text-sm text-slate-500 italic font-light animate-pulse">
            Galactic Mining License awaiting approval...
          </p>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={togglePause}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
          >
            {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            {isPaused ? 'Resume' : 'Pause'}
          </button>
          
          <button 
            onClick={() => {
              if (confirm('Reset simulation hour to 0?')) resetSimulation();
            }}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
          >
            <RefreshCw className="w-5 h-5" />
            Reset
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Return to Command Center
          </Link>
          <div className="flex items-center gap-2 text-slate-500 text-sm justify-center">
            <Save className="w-4 h-4" />
            <span>Auto-saving enabled</span>
          </div>
        </div>
      </main>

      {/* Decorative stars/elements */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping [animation-delay:1s]" />
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white rounded-full animate-ping [animation-delay:2s]" />
    </div>
  );
}
