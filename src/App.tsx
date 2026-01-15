function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-8 font-sans">
      <header className="mb-12 text-center">
        <h1 className="text-6xl font-bold tracking-tighter bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-2">
          Nebula Miner
        </h1>
        <p className="text-xl text-slate-400 mt-2 italic font-light">Extracting value from the cosmic void.</p>
      </header>
      
      <main className="w-full max-w-2xl space-y-8">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-slate-200">Welcome to Nebula Miner</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            This is the beginning of a cosmic journey. Stay tuned for more features.
          </p>
        </section>
        
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl shadow-2xl">
          <h3 className="text-xl font-bold mb-4 text-indigo-400 uppercase tracking-widest">Current Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
              <span className="text-slate-400">Project</span>
              <span className="font-mono text-indigo-300">Initialized</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
              <span className="text-slate-400">Ready for Deployment</span>
              <span className="text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Yes
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-slate-400">Styling</span>
              <span className="font-mono text-cyan-400 text-sm bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">Tailwind CSS v4</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto pt-16 text-slate-500 text-sm">
        <p>&copy; 2026 Nebula Miner Project</p>
      </footer>
    </div>
  )
}

export default App
