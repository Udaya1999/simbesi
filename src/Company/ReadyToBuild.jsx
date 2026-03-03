import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReadyToBuild = () => {
    const navigate = useNavigate();
    const handleExpert = () => navigate("/contact");
  return (
    <section className="cta-minimal-section py-5">
      <div className="container py-5 text-center">
        {/* Content sits directly on the main background */}
        <h2 className="cta-title mb-4" data-aos="fade-up">
          Ready to Build Your <span className="text-brand-cyan">AI-Powered App?</span>
        </h2>
        
        <p className="cta-subtitle mb-5 mx-auto" data-aos="fade-up" data-aos-delay="200">
          Let's turn your idea into an intelligent mobile experience
        </p>
        
        <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="400">
          <button onClick={handleExpert} className="btn-brand-gradient">
            Talk to Our AI Experts 
            <span className="ms-2">→</span>
          </button>
        </div>
      </div>

      <style>{`
        :root {
          /* SEAMLESS BRAND COLORS */
          --bg-midnight: #050814;    
          --simbesi-blue: #0046AD;   
          --simbesi-cyan: #00D2FF;   
        }

        .cta-minimal-section {
          background-color: var(--bg-midnight); /* Matches your entire page theme */
          color: white;
          font-family: 'Inter', sans-serif;
          border: none;
        }

        .cta-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          letter-spacing: -1px;
          line-height: 1.1;
        }

        .text-brand-cyan {
          color: var(--simbesi-cyan);
          /* Subtle text glow for a high-end AI feel */
          text-shadow: 0 0 25px rgba(0, 210, 255, 0.2);
        }

        .cta-subtitle {
          max-width: 650px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.25rem;
          line-height: 1.6;
        }

        /* LOGO-INSPIRED GRADIENT BUTTON */
        .btn-brand-gradient {
          background: linear-gradient(90deg, var(--simbesi-blue), var(--simbesi-cyan));
          color: white;
          border: none;
          padding: 20px 50px;
          border-radius: 50px;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1.15rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0, 70, 173, 0.3);
        }

        .btn-brand-gradient:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 45px rgba(0, 210, 255, 0.4);
          filter: brightness(1.1);
        }

        @media (max-width: 768px) {
          .cta-title { font-size: 2.4rem; }
          .btn-brand-gradient { padding: 18px 35px; width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default ReadyToBuild;