import React from 'react';

const WhyChoose = () => {
  const techStack = [
    { name: "TensorFlow", desc: "Deep Learning Framework" },
    { name: "PyTorch", desc: "Neural Network Library" },
    { name: "OpenCV", desc: "Computer Vision" },
    { name: "GPT APIs", desc: "Language Models" },
    { name: "Flutter", desc: "Cross-Platform Apps" },
    { name: "React Native", desc: "Mobile Development" }
  ];

  return (
    <section className="why-choose-seamless py-5">
      {/* Google Fonts Import */}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@500;600;700;800&display=swap');
      </style>

      <div className="container py-5">
        <div className="row g-5 align-items-start">
          
          {/* Left Side: Value Propositions */}
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="section-title mb-5">
              Why Choose <span className="text-brand-cyan">Simbesi</span> for AI Development?
            </h2>
            
            <div className="feature-list">
              {[
                { title: "End-to-End AI Integration", text: "Complete AI lifecycle from strategy and design to deployment and continuous learning" },
                { title: "Proven Track Record in AI Mobile Apps", text: "150+ successful AI-powered applications across healthcare, finance, retail, and more" },
                { title: "Deep Expertise: CNN, RNN, LSTM, NLP, OpenCV", text: "Expert team with hands-on experience in advanced neural networks and AI frameworks" },
                { title: "Agile, Transparent & Client-Focused Process", text: "Regular updates, collaborative approach, and complete project visibility at every stage" }
              ].map((item, idx) => (
                <div className="feature-item-exact d-flex align-items-start gap-3 mb-4" key={idx}>
                  <div className="check-box-brand">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="text-content">
                    <h5 className="feature-item-title mb-1">{item.title}</h5>
                    <p className="feature-item-desc mb-2">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Exact Tech Grid */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="row g-3">
              {techStack.map((tech, idx) => (
                <div className="col-6" key={idx}>
                  <div className="tech-card-brand">
                    <h5 className="tech-title-brand">{tech.name}</h5>
                    <p className="tech-desc-brand">{tech.desc}</p>
                    <div className="hover-glow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        :root {
          /* SEAMLESS BACKGROUND MATCH */
          --bg-midnight: #050814; 
          --simbesi-navy: #0A1332;  /* Lighter navy for cards */
          --simbesi-blue: #0046AD;  
          --simbesi-cyan: #00D2FF;  
          --simbesi-white: #FFFFFF;
        }

        .why-choose-seamless { 
          background-color: var(--bg-midnight); /* MATCHES TOP/BOTTOM SECTIONS */
          color: var(--simbesi-white);
          font-family: 'Inter', sans-serif;
          border: none;
        }

        .section-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          max-width: 550px;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--simbesi-white);
        }

        .text-brand-cyan {
          color: var(--simbesi-cyan);
          text-shadow: 0 0 15px rgba(0, 210, 255, 0.3);
        }

        .feature-item-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 1.25rem;
          color: var(--simbesi-white);
        }

        .feature-item-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.5); /* Slightly dimmer for better hierarchy */
          line-height: 1.6;
        }

        .check-box-brand {
          background: var(--simbesi-blue);
          color: var(--simbesi-cyan);
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 4px;
          box-shadow: 0 4px 10px rgba(0, 70, 173, 0.4);
        }

        /* TECH CARDS */
        .tech-card-brand {
          background: var(--simbesi-navy); /* Lighter than BG for depth */
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          height: 140px; 
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          padding: 24px;
          position: relative;
          overflow: hidden;
        }

        .tech-card-brand:hover {
          background: rgba(0, 70, 173, 0.15);
          border-color: var(--simbesi-cyan);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }

        .tech-title-brand {
          font-family: 'Outfit', sans-serif;
          color: var(--simbesi-cyan);
          font-weight: 700;
          font-size: 1.35rem;
          margin-bottom: 6px;
          z-index: 1;
        }

        .tech-desc-brand {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          margin-bottom: 0;
          z-index: 1;
        }

        .hover-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(0, 210, 255, 0.1) 0%, transparent 70%);
          top: 100%;
          transition: 0.4s;
        }

        .tech-card-brand:hover .hover-glow {
          top: 0;
        }

        @media (max-width: 768px) {
          .section-title { font-size: 2.4rem; }
          .tech-card-brand { height: 130px; }
        }
      `}</style>
    </section>
  );
};

export default WhyChoose;