import React from 'react';

const AICapabilities = () => {
  const capabilities = [
    {
      title: "Emotion & Sentiment Tracking",
      icon: "😊",
      className: "animate-float",
      desc: "Real-time emotion detection using facial recognition and sentiment analysis. Track user emotions, body language, and voice tone for actionable insights."
    },
    {
      title: "Real-time Object Detection",
      icon: "🎯",
      className: "animate-target",
      desc: "Advanced computer vision for instant object recognition, tracking, and classification. Perfect for AR applications, retail, security, and industrial automation."
    },
    {
      title: "Intelligent Recommendation Engines",
      icon: "🧩",
      className: "animate-puzzle",
      desc: "Machine learning-powered personalization systems that understand user behavior, preferences, and patterns to deliver highly relevant recommendations."
    }
  ];

  return (
    <section className="capabilities-seamless py-5">
      <div className="container py-5 text-center">
        <div className="badge-brand mb-3" data-aos="fade-down">Future-Ready Tech</div>
        <h2 className="section-title-brand mb-3" data-aos="fade-up">Our AI Capabilities</h2>
        <p className="section-subtitle-brand mb-5 mx-auto" data-aos="fade-up" data-aos-delay="200">
          Advanced artificial intelligence features that power next-generation mobile applications.
        </p>

        <div className="row g-4 justify-content-center">
          {capabilities.map((item, idx) => (
            <div className="col-lg-4 col-md-6" key={idx} data-aos="zoom-in" data-aos-delay={idx * 150}>
              <div className="capability-glass-card">
                <div className="icon-sphere-brand">
                  <span className={`icon-inner ${item.className}`}>{item.icon}</span>
                  <div className="glow-ring"></div>
                </div>
                <h4 className="cap-title mb-3">{item.title}</h4>
                <p className="cap-desc">{item.desc}</p>
                <div className="border-glow-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        :root {
          --bg-midnight: #050814; 
          --card-navy: #0A1332;   
          --simbesi-blue: #0046AD;
          --simbesi-cyan: #00D2FF;
        }

        .capabilities-seamless {
          background-color: var(--bg-midnight);
          color: white;
          font-family: 'Inter', sans-serif;
        }

        /* --- EMOJI ANIMATIONS --- */
        .icon-inner {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        /* Floating Smile */
        .capability-glass-card:hover .animate-float {
          animation: floatingEmoji 2s ease-in-out infinite;
        }

        /* Pulsing Target */
        .capability-glass-card:hover .animate-target {
          animation: pulseTarget 1.5s ease-in-out infinite;
        }

        /* Wiggling Puzzle */
        .capability-glass-card:hover .animate-puzzle {
          animation: wigglePuzzle 1s ease-in-out infinite;
        }

        @keyframes floatingEmoji {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        @keyframes pulseTarget {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); filter: drop-shadow(0 0 10px var(--simbesi-cyan)); }
          100% { transform: scale(1); }
        }

        @keyframes wigglePuzzle {
          0%, 100% { transform: rotate(0); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }

        /* --- CARD & ICON STYLES --- */
        .capability-glass-card {
          background: var(--card-navy);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 28px;
          padding: 50px 35px;
          height: 100%;
          position: relative;
          transition: all 0.5s ease;
          overflow: hidden;
        }

        .icon-sphere-brand {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          font-size: 2.5rem;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glow-ring {
          position: absolute;
          inset: -2px;
          border: 2px solid var(--simbesi-cyan);
          border-radius: 50%;
          opacity: 0;
          transition: 0.4s;
        }

        .capability-glass-card:hover .glow-ring {
          opacity: 1;
          animation: ring-expand 1.5s infinite;
        }

        @keyframes ring-expand {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        .cap-title { font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 1.5rem; }
        .cap-desc { color: rgba(255, 255, 255, 0.4); font-size: 0.95rem; line-height: 1.7; }

        .border-glow-overlay {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          padding: 1px;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          transition: 0.5s;
        }

        .capability-glass-card:hover .border-glow-overlay {
          background: linear-gradient(135deg, var(--simbesi-blue), var(--simbesi-cyan));
        }

        .badge-brand {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(0, 210, 255, 0.05);
          border: 1px solid rgba(0, 210, 255, 0.3);
          border-radius: 30px;
          color: var(--simbesi-cyan);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.8rem;
        }
      `}</style>
    </section>
  );
};

export default AICapabilities;