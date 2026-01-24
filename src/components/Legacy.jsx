const Legacy = () => {
    const milestones = [
        { year: '2020', title: 'Inception', desc: 'Started as a small coding meet.' },
        { year: '2022', title: 'National Level', desc: 'Witnessed participation from all over India.' },
        { year: '2024', title: 'Global Reach', desc: 'Hybrid mode with international speakers.' },
        { year: '2026', title: 'The Future', desc: 'Setting new benchmarks in tech fests.' }
    ];

    return (
        <section id="legacy" className="section">
            <div className="container">
                <h2 className="section-title">Our Legacy</h2>
                <div className="grid">
                    {milestones.map((m, index) => (
                        <div key={index} className="glass-card legacy-card" style={{ borderLeft: '4px solid hsl(var(--color-primary))' }}>
                            <span className="year highlight" style={{ fontSize: '1.5rem', fontWeight: '800' }}>{m.year}</span>
                            <h3>{m.title}</h3>
                            <p>{m.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Legacy;
