import React from 'react';

const AIProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery & AI Strategy",
      desc: "Analyze your business needs, define AI use cases, and create a comprehensive strategy aligned with your goals."
    },
    {
      number: "2",
      title: "Design & Prototyping",
      desc: "Interactive prototypes and user-centric designs that bring your intelligent app concept to life before development."
    },
    {
      number: "3",
      title: "AI Development & Training",
      desc: "Building your app with cutting-edge AI models, rigorous testing, and continuous model training for optimal performance."
    },
    {
      number: "4",
      title: "Launch & Continuous Learning",
      desc: "Deployment with ongoing monitoring, optimization, and model refinement to ensure your app keeps getting smarter."
    }
  ];

  return (
    <section className="process-seamless py-5">
      <div className="container py-5 text-center">
        <h2 className="process-main-title mb-3" data-aos="fade-up">
          From <span className="text-white">Idea</span> to <span className="text-brand-cyan">Intelligent App</span>
        </h2>
        <p className="process-subtitle mb-5 mx-auto" data-aos="fade-up" data-aos-delay="200">
          Our proven 4-step process ensures your AI-powered mobile app is delivered on time, on budget, and exceeds expectations.
        </p>

        <div className="row g-4 justify-content-center">
          {steps.map((step, idx) => (
            <div className="col-lg-3 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
              <div className="process-step-card">
                <div className="step-number-wrapper">
                  <span className="step-number">{step.number}</span>
                  <div className="number-glow"></div>
                </div>
                <h4 className="step-title mb-3">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
                <div className="connector-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        :root {
          --bg-midnight: #050814;    /* Seamless match with previous components */
          --simbesi-navy: #0A1332;   /* Card depth color */
          --simbesi-blue: #0046AD;   /* Logo Royal Blue */
          --simbesi-cyan: #00D2FF;   /* Logo Vibrant Cyan */
        }

        .process-seamless {
          background-color: var(--bg-midnight);
          color: white;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .process-main-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
        }

        .text-brand-cyan {
          color: var(--simbesi-cyan);
          text-shadow: 0 0 20px rgba(0, 210, 255, 0.4);
        }

        .process-subtitle {
          max-width: 700px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.1rem;
        }

        /* PROCESS CARD */
        .process-step-card {
          padding: 20px;
          height: 100%;
          position: relative;
          transition: transform 0.4s ease;
        }

        .process-step-card:hover {
          transform: translateY(-10px);
        }

        /* STEP NUMBER STYLING */
        .step-number-wrapper {
          width: 70px;
          height: 70px;
          background: var(--simbesi-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          position: relative;
          z-index: 2;
          box-shadow: 0 10px 20px rgba(0, 70, 173, 0.5);
        }

        .step-number {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 2rem;
          color: white;
        }

        .number-glow {
          position: absolute;
          inset: -4px;
          border: 2px solid var(--simbesi-cyan);
          border-radius: 50%;
          opacity: 0.3;
        }

        .process-step-card:hover .number-glow {
          animation: pulse-ring 1.5s infinite;
          opacity: 1;
        }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        .step-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
        }

        .step-desc {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* CONNECTOR LINE (Visual path between steps) */
        .connector-line {
          position: absolute;
          top: 55px;
          left: 50%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--simbesi-blue), transparent);
          z-index: 1;
          opacity: 0.2;
        }

        @media (max-width: 991px) {
          .connector-line { display: none; }
        }
      `}</style>
    </section>
  );
};

export default AIProcess;