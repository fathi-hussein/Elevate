


export default function Hero() {
    return (
      <>
        <section className="hero">

            <div className="hero-content container">

                <div className="hero-text">

                    <div className="eyebrow">
                        <span className="status-dot"></span>
                        YOUR NEXT CHAPTER STARTS HERE
                    </div>
                     <h1>
                        Your future is full of 
                        <span> possibilities.</span>
                    </h1>

                    <p>
                        Discover courses, scholarships and programmes
                        designed to help you learn, grow and achieve more.
                    </p>

                    <div className="hero-actions">
                        <a href="explore" className="btn btn-primary">
                            Explore opportunities <span>→</span>
                        </a>
                        
                    </div>

                    
                    </div>


                <div className="hero-visual">

                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000"
                            alt="Students working together and learning"
                        />
                    </div>

                    

                    <div className="floating-card floating-bottom">
                     <div className="mini-icon">↗</div>
                        <div>
                            <strong>Your next opportunity</strong>
                            <small>Starts with one discovery.</small>
                        </div>
                    </div>

                </div>

          </div>

        </section>
        </>
    )
  }