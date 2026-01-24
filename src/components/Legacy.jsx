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
                <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "60px", marginTop: "60px" }}>
                    <h2>A Legacy in Frames</h2>
                    <img src="../public/hero.png" style={{
                        width: "max(360px,40vw)", height: "400px", marginTop: "60px"
                    }} />
                </div>
                <div className="container " style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "60px", marginTop: "60px" }}>

                    <h2>Choose your arena. Prove your edge</h2>
                    <p>Participate in hands-on workshops designed to upagrade your skills and prepare you for cutting-edge industries.</p>


                    <div className="card-3d" style={{ marginTop: "60px", marginBottom: "60px" }}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>

                </div>
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
