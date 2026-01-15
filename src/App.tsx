import './App.css'

function App() {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>Nebula Miner</h1>
        <p className="tagline">Extracting value from the cosmic void.</p>
      </header>
      
      <main className="content">
        <section className="intro">
          <h2>Welcome to Nebula Miner</h2>
          <p>This is the beginning of a cosmic journey. Stay tuned for more features.</p>
        </section>
        
        <div className="status-card">
          <h3>Current Status</h3>
          <p>Project: Initialized</p>
          <p>Ready for Deployment: Yes</p>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Nebula Miner Project</p>
      </footer>
    </div>
  )
}

export default App
