const Theme = () => {
    return (
        <section id="theme" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, hsl(var(--color-secondary) / 0.1) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: -1
            }}></div>
            <div className="container">
                <h2 className="section-title">The Theme: <span className="highlight">Neon Horizon</span></h2>
                <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <p className="lead" style={{ fontSize: '1.25rem' }}>
                        Defining the boundaries where digital reality meets human creativity.
                    </p>
                    <p>
                        This year, we explore the "Neon Horizon" — a metaphor for the limitless potential
                        of future technologies. It represents a world illuminated by the glow of innovation
                        and the vibrant energy of creators like you.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Theme;
