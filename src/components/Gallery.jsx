const Gallery = () => {
    // CSS-based placeholder images for gallery
    return (
        <section id="gallery" className="section">
            <div className="container">
                <h2 className="section-title">Gallery</h2>
                <div className="grid gallery-grid">
                    <div className="glass-card" style={{ height: '300px', background: 'hsl(var(--color-bg-card-hover))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="highlight">Coming Soon</span>
                    </div>
                    <div className="glass-card" style={{ height: '300px', background: 'hsl(var(--color-bg-card-hover))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="highlight">Coming Soon</span>
                    </div>
                    <div className="glass-card" style={{ height: '300px', background: 'hsl(var(--color-bg-card-hover))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="highlight">Coming Soon</span>
                    </div>
                    <div className="glass-card" style={{ height: '300px', background: 'hsl(var(--color-bg-card-hover))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="highlight">Coming Soon</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
