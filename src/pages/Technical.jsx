import { useState } from 'react';

import TechnicalCard from '../components/technical/TechnicalCard';
import TechnicalModal from '../components/technical/TechnicalModal';
import TechnicalNavbar from '../components/technical/TechnicalNavbar';
import '../components/technical/technical.css';

const Technical = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const data = {
    business: {
      title: "Business Events",
      competitions: [
        "BizSim",
        "Case Forge"
      ]
    },
    mun: {
      title: "Model United Nations",
      competitions: [
        "UNGA",
        "UNSC"
      ]
    },
    robogames: {
      title: "Robogames",
      competitions: [
        "RoboRace",
        "RoboWar"
      ]
    },
    takeoff: {
      title: "Takeoff",
      competitions: [
        "Drone Dash",
        "Aerial Ops"
      ]
    },
    software: {
      title: "Software Corner",
      competitions: [
        "Code Relay",
        "Bug Bash"
      ]
    },
    mandakini: {
      title: "Mandakini",
      competitions: [
        "Astro Quiz",
        "Cosmic Hunt"
      ]
    },
    technovation: {
      title: "Technovation",
      competitions: [
        "InnovateX",
        "Tech Pitch"
      ]
    }
  };

  return (
    <div className="tech-page">

      <TechnicalNavbar />

      {/* HERO SECTION */}
      <section className="tech-hero">
        <h1 className="tech-title">
          TECHNICAL
        </h1>
        <p className="tech-tagline">
          *description of the category*
        </p>
      </section>

      {/* CARDS SECTION */}
      <section className="tech-events">
        <TechnicalCard
          title="Business Events"
          onClick={() => setActiveCategory("business")}
        />

        <TechnicalCard
          title="Model United Nations"
          onClick={() => setActiveCategory("mun")}
        />

        <TechnicalCard
          title="Robogames"
          onClick={() => setActiveCategory("robogames")}
        />

        <TechnicalCard
          title="Takeoff"
          onClick={() => setActiveCategory("takeoff")}
        />

        <TechnicalCard
          title="Software Corner"
          onClick={() => setActiveCategory("software")}
        />

        <TechnicalCard
          title="Mandakini"
          onClick={() => setActiveCategory("mandakini")}
        />

        <TechnicalCard
          title="Technovation"
          onClick={() => setActiveCategory("technovation")}
        />
      </section>

      {activeCategory && (
        <TechnicalModal
          category={data[activeCategory].title}
          competitions={data[activeCategory].competitions}
          onClose={() => setActiveCategory(null)}
        />
      )}

    </div>
  );
};

export default Technical;
