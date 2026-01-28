import { useState } from 'react';
import EntrepreneurialCard from '../components/entrepreneurial/EntrepreneurialCard';
import EntrepreneurialModal from '../components/entrepreneurial/EntrepreneurialModal';
import '../components/entrepreneurial/entrepreneurial.css';
import EntrepreneurialNavbar from '../components/entrepreneurial/EntrepreneurialNavbar';


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

      <EntrepreneurialNavbar />

      {/* HERO SECTION */}
      <section className="entre-hero">
        <h1 className="entre-main-title">
          TECHKRITI <span>2026</span>
        </h1>
        <p className="entre-tagline">
          neo. novus. singularity
        </p>
      </section>

      {/* CARDS SECTION */}
      <section className="entre-events">
        <EntrepreneurialCard
          title="Upstart Pioneer"
          description="For early-stage founders and disruptive ideas"
          onClick={() => setActiveTrack("startup")}
        />

        <EntrepreneurialCard
          title="Pitch Premier"
          description="High-stakes pitching and business strategy"
          onClick={() => setActiveTrack("business")}
        />
      </section>

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
