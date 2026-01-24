const Hero = () => {
    return (
        <header className="hero">
            <div className="hero-bg">
                <div className="hero-overlay"></div>
                <img src="/hero.png" alt="Futuristic Background" className="hero-image" />
            </div>
            <div className="container hero-content">
                <h1 className="animate-fade-in">Innovate the <br />Future of Tech</h1>
                <p className="animate-fade-in" style={{ animationDelay: '0.2s', maxWidth: '600px' }}>
                    Join the revolution at TechKriti 26. Experience the cutting edge of technology, design, and innovation in a premium digital ecosystem.
                </p>
                <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-outline" style={{ marginLeft: '1rem' }}>Learn More</button>
                </div>
            </div>
        </header>
    );
};

export default Hero;
