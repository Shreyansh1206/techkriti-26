const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About TechKriti</h2>
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
                    <div className="glass-card">
                        <h3 className="highlight">Visionary Innovation</h3>
                        <p>
                            TechKriti represents the pinnacle of technological convergence.
                            We bring together the brightest minds to solve tomorrow's challenges
                            using today's most advanced tools.
                        </p>
                        <p>
                            From AI to Blockchain, Sustainability to Space Tech, we cover it all.
                        </p>
                    </div>
                    <div className="about-stats glass-card" style={{ textAlign: 'center' }}>
                        <div className="stat-item">
                            <span className="stat-number highlight" style={{ fontSize: '3rem', fontWeight: 'bold' }}>50+</span>
                            <p>Events</p>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number highlight" style={{ fontSize: '3rem', fontWeight: 'bold' }}>10k+</span>
                            <p>Participants</p>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number highlight" style={{ fontSize: '3rem', fontWeight: 'bold' }}>2M+</span>
                            <p>Prize Pool</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
