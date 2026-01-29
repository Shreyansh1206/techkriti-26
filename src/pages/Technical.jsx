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
        "Product Challenge",
        "Pitch Premiere",
        "Blockchain Nexus"
      ]
    },
    mun: {
      title: "Model United Nations",
      competitions: [
        "UNHRC",
        "Lok Sabha",
        "UNSC"
      ]
    },
    robogames: {
      title: "Robogames",
      competitions: [
        "iarc",
        "robowars",
        "manoeveur",
        "techriti grand prix"
      ]
    },
    takeoff: {
      title: "Takeoff",
      competitions: [
        "idrl",
        "multirotor",
        "skysparks",
        "hovermania"
      ]
    },
    software: {
      title: "Software Corner",
      competitions: [
        "speed quant",
        "code & compete",
        "ctf"
      ]
    },
    mandakini: {
      title: "Mandakini",
      competitions: [
        "Astro Quiz",
        "observe analyse & sovle"
      ]
    },
    technovation: {
      title: "Technovation",
      competitions: [
        "TIC (Techkriti Innovation Challenge)",
        "III (Industry Institute Interaction)"
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
