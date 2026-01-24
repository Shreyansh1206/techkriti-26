const PastEvents = () => {
    return (
        <section id="past-events" className="section">
            <div className="container">
                <h2 className="section-title">Past Events</h2>
                <div className="grid">
                    {/* Placeholders for event images */}
                    <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ height: '200px', background: 'linear-gradient(45deg, hsl(var(--color-primary)), hsl(var(--color-secondary)))' }}></div>
                        <div style={{ padding: '1.5rem' }}>
                            <h3>Hackathon 2024</h3>
                            <p>48 hours of non-stop coding innovation.</p>
                        </div>
                    </div>
                    <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ height: '200px', background: 'linear-gradient(135deg, hsl(var(--color-accent)), hsl(var(--color-primary-dark)))' }}></div>
                        <div style={{ padding: '1.5rem' }}>
                            <h3>RoboWars</h3>
                            <p>Clash of the metal titans.</p>
                        </div>
                    </div>
                    <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ height: '200px', background: 'linear-gradient(to right, hsl(var(--color-bg-card)), hsl(var(--color-primary)))' }}></div>
                        <div style={{ padding: '1.5rem' }}>
                            <h3>AI Summit</h3>
                            <p>Exploring the frontiers of Artificial Intelligence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PastEvents;
