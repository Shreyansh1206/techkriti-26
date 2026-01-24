import { useState, useEffect } from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">TechKriti<span className="highlight">26</span></div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact" className="btn btn-primary sm">Join Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg">
            <div className="hero-overlay"></div>
            <img src="/hero.png" alt="Futuristic Background" className="hero-image" />
        </div>
        <div className="container hero-content">
          <h1 className="animate-fade-in">Innovate the <br />Future of Tech</h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.2s', maxWidth: '600px' }}>
            Join the revolution at TechKriti 26. Experience the cutting edge of technology, design, and innovation in a premium digital ecosystem.
          </p>
          <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline" style={{ marginLeft: '1rem' }}>Learn More</button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="section-title">Why TechKriti?</h2>
          <div className="grid">
            <div className="glass-card">
              <h3>Innovation</h3>
              <p>Pushing the boundaries of what's possible with cutting-edge workshops and hackathons.</p>
            </div>
            <div className="glass-card">
              <h3>Community</h3>
              <p>Connect with thousands of developers, designers, and tech enthusiasts from around the globe.</p>
            </div>
            <div className="glass-card">
              <h3>Growth</h3>
              <p>Accelerate your career and skills with mentorship from industry leaders.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
            <p>&copy; 2026 TechKriti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
