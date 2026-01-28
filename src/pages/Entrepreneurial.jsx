import { useState } from 'react';

import EntrepreneurialCard from '../components/entrepreneurial/EntrepreneurialCard';
import EntrepreneurialModal from '../components/entrepreneurial/EntrepreneurialModal';
import '../components/entrepreneurial/entrepreneurial.css';

const Entrepreneurial = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  const data = {
    startup: {
      title: "Startup Track",
      competitions: [
        { name: "Pitch Perfect", desc: "Pitch your startup idea" },
        { name: "Prototype Sprint", desc: "Build and present a prototype" }
      ]
    },
    business: {
      title: "Business Track",
      competitions: [
        { name: "Case Conquest", desc: "Solve real business cases" },
        { name: "Market Mayhem", desc: "Crack market strategy problems" }
      ]
    }
  };

  return (
    <div className="entre-page">
      <h1 className="entre-title">Entrepreneurial Events</h1>

      <div className="entre-cards">
        <EntrepreneurialCard
          title="Startup Track"
          description="For startup pitches and product ideas"
          onClick={() => setActiveTrack("startup")}
        />

        <EntrepreneurialCard
          title="Business Track"
          description="Strategy and consulting challenges"
          onClick={() => setActiveTrack("business")}
        />
      </div>

      {activeTrack && (
        <EntrepreneurialModal
          track={data[activeTrack].title}
          competitions={data[activeTrack].competitions}
          onClose={() => setActiveTrack(null)}
        />
      )}
    </div>
  );
};

export default Entrepreneurial;
