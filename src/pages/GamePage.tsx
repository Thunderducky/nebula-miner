import { Link } from 'react-router-dom';
import { Construction, ArrowLeft } from 'lucide-react';

export default function GamePage() {
  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col items-center justify-center p-8 font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent opacity-50" />
      
      <main className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-lg">
        <div className="bg-indigo-500/10 p-6 rounded-full border border-indigo-500/20 animate-pulse">
          <Construction className="w-16 h-16 text-indigo-400" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl font-black tracking-tight text-white uppercase">Sector Restricted</h1>
          <p className="text-xl text-slate-400">
            The Nebula Miner engine is currently under heavy construction. Mining drills will be operational soon.
          </p>
        </div>

        <Link 
          to="/" 
          className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Return to Command Center
        </Link>
      </main>

      {/* Decorative stars/elements */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping [animation-delay:1s]" />
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white rounded-full animate-ping [animation-delay:2s]" />
    </div>
  );
}
