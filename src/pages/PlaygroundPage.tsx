import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FlaskConical, Palette, Layout, MousePointer2 } from 'lucide-react';

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState('buttons');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <nav className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <FlaskConical className="w-6 h-6 text-indigo-400" />
              Nebula Playground
            </h1>
          </div>
          <div className="flex gap-2">
            {[
              { id: 'buttons', icon: MousePointer2, label: 'Buttons' },
              { id: 'colors', icon: Palette, label: 'Theme' },
              { id: 'layout', icon: Layout, label: 'Layout' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl w-full mx-auto p-8">
        {activeTab === 'buttons' && (
          <div className="space-y-12 animate-in fade-in slide-in-from-top-2 duration-500">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-slate-400">Action Buttons</h2>
              <div className="flex flex-wrap gap-4 items-center bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-bold transition-all shadow-lg hover:shadow-indigo-500/20">
                  Primary Action
                </button>
                <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg font-bold border border-slate-700 transition-all">
                  Secondary Action
                </button>
                <button className="px-6 py-2 bg-transparent hover:bg-slate-800 rounded-lg font-bold border border-slate-700 text-slate-400 hover:text-white transition-all">
                  Ghost Button
                </button>
                <button className="px-6 py-2 bg-rose-600/10 hover:bg-rose-600 text-rose-500 hover:text-white rounded-lg font-bold border border-rose-600/20 transition-all">
                  Danger Zone
                </button>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-slate-400">Interactive States</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-indigo-500/50 transition-all cursor-pointer group">
                  <h4 className="font-bold mb-2 group-hover:text-indigo-400 transition-colors">Hover Target</h4>
                  <p className="text-sm text-slate-500">Notice the border and title color change on hover.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <h4 className="font-bold mb-2">Scan Effect</h4>
                  <p className="text-sm text-slate-500">Hover to see a light sweep through this card.</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'colors' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-in fade-in slide-in-from-top-2 duration-500">
            {[
              { name: 'Indigo', class: 'bg-indigo-500' },
              { name: 'Purple', class: 'bg-purple-500' },
              { name: 'Pink', class: 'bg-pink-500' },
              { name: 'Slate', class: 'bg-slate-500' },
              { name: 'Cyan', class: 'bg-cyan-500' },
              { name: 'Emerald', class: 'bg-emerald-500' },
              { name: 'Amber', class: 'bg-amber-500' },
              { name: 'Rose', class: 'bg-rose-500' },
            ].map((color) => (
              <div key={color.name} className="space-y-3">
                <div className={`h-24 w-full rounded-2xl ${color.class} shadow-lg shadow-${color.class.split('-')[1]}-500/20 border border-white/10`} />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-200">{color.name}</span>
                  <span className="text-xs font-mono text-slate-500">{color.class}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'layout' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-top-2 duration-500">
            <div className="h-40 w-full bg-slate-900 rounded-2xl border-2 border-dashed border-slate-800 flex items-center justify-center text-slate-700 font-bold italic">
              Reserved for Game Canvas/HUD Playground
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-32 bg-slate-900 rounded-xl border border-slate-800" />
              <div className="h-32 bg-slate-900 rounded-xl border border-slate-800" />
              <div className="h-32 bg-slate-900 rounded-xl border border-slate-800" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
