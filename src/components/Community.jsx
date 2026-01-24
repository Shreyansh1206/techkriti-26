const Community = () => {
    return (
        <section id="community" className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <div className="glass-card" style={{
                    background: 'linear-gradient(to right, hsl(var(--color-primary) / 0.1), hsl(var(--color-secondary) / 0.1))',
                    borderColor: 'hsl(var(--color-primary) / 0.5)'
                }}>
                    <h2 style={{ marginBottom: '1rem' }}>Join Our Community</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Be a part of the conversation. Get instant updates, exclusive content,
                        and network with fellow tech enthusiasts on our WhatsApp Community.
                    </p>
                    <a href="#" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        Join WhatsApp Group
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Community;
