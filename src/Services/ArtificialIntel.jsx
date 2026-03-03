import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import aiBanner from "../assets/img/services/aboutbanne1.jpg"; 
import aiSideImg from "../assets/img/byindustry/ai.png"; 

const AI_OFFERS = [
  { 
    title: "Machine Learning", 
    icon: "bi-cpu", 
    desc: "We build systems that learn and improve from experience without being explicitly programmed, optimizing your business logic automatically." 
  },
  { 
    title: "Natural Language Processing", 
    icon: "bi-chat-left-dots", 
    desc: "Enable your machines to understand, interpret, and generate human language through advanced sentiment analysis and chatbots." 
  },
  { 
    title: "Computer Vision", 
    icon: "bi-eye", 
    desc: "Our AI solutions can identify and process images and videos just like human sight, perfect for security and automated inspection." 
  },
  { 
    title: "Predictive Analytics", 
    icon: "bi-graph-up-arrow", 
    desc: "Utilize historical data to predict future outcomes, allowing your company to stay ahead of market trends and user behavior." 
  },
  { 
    title: "AI Strategy & Consulting", 
    icon: "bi-lightbulb", 
    desc: "We help you identify the right AI opportunities for your business model, ensuring a high ROI on your digital transformation." 
  },
  { 
    title: "Neural Network Integration", 
    icon: "bi-hub", 
    desc: "Deep learning models that mimic the human brain to solve complex patterns in big data and large-scale enterprise environments." 
  }
];

const ArtificialIntel = () => {
    const navigate = useNavigate();
     const handleRedirectToStory = () => {
      navigate("/contact"); 
    };
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <div className="ai-page-wrapper">
      {/* 1. NEON HERO SECTION */}
      <section className="ai-hero" style={{ backgroundImage: `url(${aiBanner})` }}>
        <div className="ai-hero-overlay">
          <div className="container text-center" data-aos="zoom-out">
            <div className="ai-badge mb-3">Next-Gen Intelligence</div>
            <h1 className="ai-main-title">Artificial <span className="neon-text">Intelligence</span></h1>
            <p className="ai-hero-p mx-auto">Transforming raw data into autonomous decisions and digital evolution.</p>
          </div>
        </div>
      </section>

      {/* 2. CORE INTELLIGENCE SECTION */}
      <section className="py-5 bg-dark text-white overflow-hidden">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <h2 className="ai-section-heading">Cognitive <br/><span className="text-cyan">Solutions</span> for Enterprise</h2>
              <div className="ai-glow-line mb-4"></div>
              <p className="text-secondary mb-4">
                SIMBESI integrates cutting-edge Artificial Intelligence to redefine how businesses operate. 
                From automating mundane tasks to uncovering deep insights from massive datasets, our AI 
                ecosystem is designed to scale with your ambition.
              </p>
              
              <div className="ai-feature-list row g-3">
                {[
                  "Advanced Neural Networks",
                  "Automated Decision Engines",
                  "Real-time Data Processing",
                  "Scalable AI Architectures"
                ].map((text, i) => (
                  <div key={i} className="col-md-6 d-flex align-items-center gap-2">
                    <div className="ai-check-icon"><i className="bi bi-shield-check"></i></div>
                    <span className="small text-light">{text}</span>
                  </div>
                ))}
              </div>

              <button className="btn-ai-neon mt-5" onClick={handleRedirectToStory}>
                Join AI Team <i className="bi bi-terminal ms-2"></i>
              </button>
            </div>

            <div className="col-lg-5 d-flex justify-content-center" data-aos="fade-left">
                <div className="ai-image-frame-v2">
                    <div className="ai-scanner-line"></div>
                    <img src={aiSideImg} alt="AI Neural System" className="img-fluid ai-img-optimized" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEURAL GRID OFFERS */}
      <section className="py-5 bg-black">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="text-white fw-bold">Intelligent <span className="text-violet">Capabilities</span></h2>
            <p className="text-secondary">Precision-engineered AI modules for modern challenges.</p>
          </div>

          <div className="row g-4">
            {AI_OFFERS.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="flip-left" data-aos-delay={index * 100}>
                <div className="ai-card">
                  <div className="ai-card-glow"></div>
                  <div className="ai-icon-container">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h5 className="text-white mt-4 mb-3 fw-bold">{item.title}</h5>
                  <p className="text-secondary small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .ai-page-wrapper {
          background-color: #000;
          font-family: 'Inter', sans-serif;
        }

        /* --- HERO --- */
        .ai-hero { height: 500px; background-size: cover; background-position: center; position: relative; }
        .ai-hero-overlay {
          position: absolute; top:0; left:0; width:100%; height:100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4));
          display: flex; align-items: center; justify-content: center;
        }
        .ai-main-title { font-size: 4.5rem; font-weight: 900; color: white; }
        .neon-text { color: #00ffff; text-shadow: 0 0 15px rgba(0, 255, 255, 0.5); }
        .ai-badge {
          display: inline-block; padding: 5px 15px; background: rgba(0, 255, 255, 0.1);
          border: 1px solid #00ffff; color: #00ffff; border-radius: 50px; font-size: 0.8rem;
          text-transform: uppercase; letter-spacing: 2px;
        }

        /* --- OPTIMIZED IMAGE BOX --- */
        .ai-image-frame-v2 {
          position: relative;
          max-width: 400px; /* Constraints image size */
          width: 100%;
          border: 2px solid rgba(0, 255, 255, 0.2);
          padding: 15px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.03);
          animation: floatAI 5s infinite ease-in-out;
        }
        
        .ai-img-optimized {
          border-radius: 12px;
          width: 100%;
          height: auto;
          filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.1));
        }

        @keyframes floatAI {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* --- SCANNER --- */
        .ai-scanner-line {
          position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: #00ffff;
          box-shadow: 0 0 15px #00ffff; z-index: 10; animation: scan 3s linear infinite;
        }
        @keyframes scan { 0% { top: 0%; } 50% { top: 100%; } 100% { top: 0%; } }

        /* --- BUTTONS & CARDS --- */
        .btn-ai-neon {
          background: transparent; border: 1px solid #00ffff; color: #00ffff;
          padding: 12px 35px; border-radius: 5px; font-weight: 600; transition: 0.3s;
        }
        .btn-ai-neon:hover { background: #00ffff; color: #000; box-shadow: 0 0 20px #00ffff; }

        .ai-card {
          background: #111; border: 1px solid #222; padding: 40px 30px; border-radius: 20px;
          transition: 0.4s; height: 100%;
        }
        .ai-card:hover { border-color: #00ffff; transform: translateY(-10px); }
        
        .ai-glow-line { width: 80px; height: 4px; background: #00ffff; box-shadow: 0 0 10px #00ffff; }
        .text-cyan { color: #00ffff; }
        .text-violet { color: #bc13fe; }

        @media (max-width: 991px) {
          .ai-main-title { font-size: 2.8rem; }
          .ai-image-frame-v2 { max-width: 300px; margin: 0 auto; }
        }
      `}</style>
    </div>
  );
};

export default ArtificialIntel;