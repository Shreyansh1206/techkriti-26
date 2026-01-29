import { useState } from 'react';
import TechnicalModal from '../components/technical/TechnicalModal';
import TechnicalNavbar from '../components/technical/technicalNavBar';
import TechnicalCard from '../components/technical/TechnicalCard';
import '../components/technical/technical.css';

const Technical = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const data = {
    "Business Events": ["BizSim", "Case Forge"],
    "Model United Nations": ["UNGA", "UNSC"],
    "Robogames": ["RoboRace", "RoboWar"],
    "Takeoff": ["Drone Dash", "Aerial Ops"],
    "Software Corner": ["Code Relay", "Bug Bash"],
    "Mandakini": ["Astro Quiz", "Cosmic Hunt"],
    "Technovation": ["InnovateX", "Tech Pitch"]
  };

  return (
    <div className="tech-page">

      <TechnicalNavbar />

      <section className="tech-hero">
        <h1 className="tech-title">TECHKRITI 2026</h1>
        <p className="tech-tagline">neo. novus. singularity</p>
      </section>

      <section className="tech-events">
        {Object.keys(data).map((category, idx) => (
          <TechnicalCard
            key={idx}
            title={category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </section>

      {activeCategory && (
        <TechnicalModal
          category={activeCategory}
          competitions={data[activeCategory]}
          onClose={() => setActiveCategory(null)}
        />
      )}

    </div>
  );
};

export default Technical;
