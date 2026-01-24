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
                    <img src="/legacy/drill1.jpg" style={{
                        width: "max(360px,40vw)", height: "400px", marginTop: "60px", objectFit: 'cover', borderRadius: '1rem'
                    }} />
                </div>
                <div className="container " style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "60px", marginTop: "60px" }}>

                    <h2>Choose your arena. Prove your edge</h2>
                    <p>Participate in hands-on workshops designed to upgrade your skills and prepare you for cutting-edge industries.</p>


                    <div className="card-3d" style={{ marginTop: "120px", marginBottom: "60px" }}>
                        <div style={{ backgroundImage: 'url(/legacy/JNT04314.jpg)', backgroundSize: 'cover' }}></div>
                        <div style={{ backgroundImage: 'url(/legacy/JNT05542.jpg)', backgroundSize: 'cover' }}></div>
                        <div style={{ backgroundImage: 'url(/legacy/JNT06044.jpg)', backgroundSize: 'cover' }}></div>
                        <div style={{ backgroundImage: 'url(/legacy/PAT00195.jpg)', backgroundSize: 'cover' }}></div>
                        <div style={{ backgroundImage: 'url(/legacy/drill1.jpg)', backgroundSize: 'cover' }}></div>
                    </div>

                </div>

            </div>
        </section>
    );
};



export default Legacy;
