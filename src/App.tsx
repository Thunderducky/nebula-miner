import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PlaygroundPage from './pages/PlaygroundPage';
import GamePage from './pages/GamePage';
import './index.css';

/**
 * Nebula Miner Main Application Entry
 * Uses HashRouter for seamless GitHub Pages deployment without 404 issues
 */
function App() {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-indigo-500/30">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/game" element={<GamePage />} />
          {/* Fallback to landing */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
