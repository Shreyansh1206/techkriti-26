

import EventCard from '../components/UI/EventCard';

import '../components/technical/technical.css';

const Technical = () => {




  return (
    <div className="tech-page">



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
        <EventCard
          title="Business Events"
          description="Strategic competitions testing your business acumen"
          to="/events/event-details/business"
          image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2371"
        />

        <EventCard
          title="Model United Nations"
          description="Debate, collaborate, and solve global issues"
          to="/events/event-details/mun"
          image="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=2532"
        />

        <EventCard
          title="Robogames"
          description="Battle of the bots and autonomous systems"
          to="/events/event-details/robogames"
          image="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&q=80&w=2534"
        />

        <EventCard
          title="Takeoff"
          description="Aerial robotics and drone challenges"
          to="/events/event-details/takeoff"
          image="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2370"
        />

        <EventCard
          title="Software Corner"
          description="Coding challenges and software development"
          to="/events/event-details/software"
          image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2370"
        />

        <EventCard
          title="Mandakini"
          description="Unravel the mysteries of the cosmos"
          to="/events/event-details/mandakini"
          image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2372"
        />

        <EventCard
          title="Technovation"
          description="Showcase your innovative projects"
          to="/events/event-details/technovation"
          image="https://images.unsplash.com/photo-1531297461136-2f568ed61688?auto=format&fit=crop&q=80&w=2370"
        />
      </section>

    </div>
  );
};

export default Technical;
