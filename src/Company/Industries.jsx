import React from 'react';

const Industries = () => {
  const industries = [
    "FinTech", "Retail", "Education", "Enterprise", "On-Demand", 
    "Healthcare"
  ];

  return (
    <section className="industries-section py-5">
      <div className="container py-5 text-center">
        <h2 className="industries-title mb-3" data-aos="fade-up">
          Industries We <span className="text-brand-cyan">Empower</span>
        </h2>
        <p className="industries-subtitle mb-5 mx-auto" data-aos="fade-up" data-aos-delay="200">
          Delivering intelligent mobile solutions across diverse sectors
        </p>

        {/* Scrolling Marquee Container */}
        <div className="marquee-wrapper" data-aos="zoom-in" data-aos-delay="400">
          <div className="marquee-content">
            {/* Double the list for seamless looping */}
            {[...industries, ...industries].map((item, idx) => (
              <div className="industry-tag" key={idx}>
                {item}
              </div>
            ))}
          </div>
          {/* Faded edges for rich viewing experience */}
          <div className="marquee-fade-left"></div>
          <div className="marquee-fade-right"></div>
        </div>
      </div>

      <style>{`
        :root {
          --bg-midnight: #050814;    /* Exact seamless background */
          --simbesi-navy: #0A1332;   /* Tag background */
          --simbesi-blue: #0046AD;   /* Logo Royal Blue */
          --simbesi-cyan: #00D2FF;   /* Logo Vibrant Cyan */
        }

        .industries-section {
          background-color: var(--bg-midnight);
          color: white;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .industries-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
        }

        .text-brand-cyan {
          color: var(--simbesi-cyan);
          text-shadow: 0 0 15px rgba(0, 210, 255, 0.3);
        }

        .industries-subtitle {
          max-width: 600px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 1.1rem;
        }

        /* MARQUEE ANIMATION */
        .marquee-wrapper {
          position: relative;
          width: 100%;
          padding: 20px 0;
          display: flex;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          gap: 20px;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .industry-tag {
          flex: 0 0 auto;
          padding: 12px 35px;
          background: var(--simbesi-navy);
          border: 1px solid rgba(0, 210, 255, 0.2);
          border-radius: 50px;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 1.1rem;
          color: white;
          transition: all 0.3s ease;
          cursor: default;
        }

        .industry-tag:hover {
          background: var(--simbesi-blue);
          border-color: var(--simbesi-cyan);
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0, 210, 255, 0.4);
        }

        /* RICH GRADIENT FADES */
        .marquee-fade-left, .marquee-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 2;
          pointer-events: none;
        }

        .marquee-fade-left {
          left: 0;
          background: linear-gradient(to right, var(--bg-midnight), transparent);
        }

        .marquee-fade-right {
          right: 0;
          background: linear-gradient(to left, var(--bg-midnight), transparent);
        }

        @media (max-width: 768px) {
          .industries-title { font-size: 2.2rem; }
          .industry-tag { padding: 10px 25px; font-size: 0.95rem; }
        }
      `}</style>
    </section>
  );
};

export default Industries;