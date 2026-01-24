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
                <h2 className="section-title"><span className="highlight">Neo-Nous Singularita</span></h2>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', opacity: 0.85 }}>
                    <p style={{
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        lineHeight: '2',
                        letterSpacing: '0.05em',
                        color: 'hsl(var(--color-text-main))',
                        fontWeight: '300'
                    }}>
                        Neo-Nous Singularita is the journey<br />
                        from new intelligence,<br />
                        to inner awareness,<br />
                        to cosmic transcendence:<br />
                        revealing that the human body and the universe<br />
                        are reflections of the same underlying order.
                    </p>
                    <div style={{
                        marginTop: '3rem',
                        height: '1px',
                        width: '100px',
                        background: 'hsl(var(--color-primary))',
                        margin: '3rem auto',
                        opacity: 0.5
                    }}></div>
                </div>
            </div>
        </section>
    );
};

export default Theme;
