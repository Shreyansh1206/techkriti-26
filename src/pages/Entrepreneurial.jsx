import { useState } from 'react';
import EntrepreneurialCard from '../components/entrepreneurial/EntrepreneurialCard';
import EntrepreneurialModal from '../components/entrepreneurial/EntrepreneurialModal';
import '../components/entrepreneurial/entrepreneurial.css';
import EntrepreneurialNavbar from '../components/entrepreneurial/EntrepreneurialNavbar';


const Entrepreneurial = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  const data = {
    entrepreneurial: {
      title: "Entrepreneurial Track",
      competitions: [
        { name: "Upstart Pioneer", desc: "Pitch your startup idea" },
        { name: "Pitch Premier", desc: "Build and present a prototype" }
      ]
    },
    fintech: {
      title: "Fintech Track",
      competitions: [
        { name: "Beat the Market", desc: "Solve real business cases" },
        { name: "Trade Quest", desc: "Crack market strategy problems" },
        { name: "Strategy Sprint", desc: "Description of strategy sprint"}
      ]
    }
  };

  return (
    <div className="entre-page">

      <EntrepreneurialNavbar />

      {/* HERO SECTION */}
      <section className="entre-hero">
        <h1 className="entre-main-title">
          ENTREPRENEURIAL
        </h1>
        <p className="entre-tagline">
          *description of the category*
        </p>
      </section>

      {/* CARDS SECTION */}
      <section className="entre-events">
        <EntrepreneurialCard
          title="Entrepreneurial"
          description="For early-stage founders and disruptive ideas"
          onClick={() => setActiveTrack("entrepreneurial")}
        />

        <EntrepreneurialCard
          title="Fintech"
          description="High-stakes pitching and business strategy"
          onClick={() => setActiveTrack("fintech")}
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
