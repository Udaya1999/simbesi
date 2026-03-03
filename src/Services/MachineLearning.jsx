import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Pro Tip: Using high-quality CDN placeholders for immediate "Live" feel
const ML_HERO_IMG = "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600";
const ML_SIDE_IMG = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800";

const ML_CATEGORIES = [
  { title: "Predictive Analytics", icon: "bi-graph-up-arrow", desc: "Forecast market trends and user behavior with high-precision statistical models." },
  { title: "NLP & Chatbots", icon: "bi-chat-quote-fill", desc: "Advanced Language Processing for human-like interaction and sentiment analysis." },
  { title: "Computer Vision", icon: "bi-eye-fill", desc: "Automated visual recognition for security, medical imaging, and retail." },
  { title: "Neural Networks", icon: "bi-cpu-fill", desc: "Deep Learning architectures modeled after the human brain for complex problem solving." }
];

const MachineLearning = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Initializing AOS with custom settings
    AOS.init({ duration: 1200, once: false, easing: 'ease-out-quint' });
  }, []);

  return (
    <div className="ml-page-wrapper">
      <Helmet>
        <title>Advanced Machine Learning & AI | SIMBESI</title>
        <meta name="description" content="Harness the power of AI with SIMBESI's custom Machine Learning solutions." />
      </Helmet>

      {/* --- 1. THE INTELLIGENT HERO --- */}
      <section className="ml-hero">
        {/* Fixed: Image is now a proper background layer */}
        <div className="hero-bg-image" style={{ backgroundImage: `url(${ML_HERO_IMG})` }}></div>
        <div className="hero-scanning-effect"></div>
        
        <div className="container position-relative z-3">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="ai-status-pill mb-4">
                <span className="spinning-loader"></span> Systems Active: Neural Core 3.0
              </div>
              <h1 className="display-1 fw-bold text-white mb-3">
                Shape Your <br />
                <span className="text-gradient-cyan">Vision with AI</span>
              </h1>
              <p className="lead-text text-white-50 mb-5">
                We transform raw data into <span className="text-white">autonomous intelligence</span>. 
                From predictive modeling to generative AI, we build the brains behind 
                the world's most innovative platforms.
              </p>
              <div className="ml-button-group d-flex gap-3">
                <button className="btn-ml-primary" onClick={() => navigate("/contact")}>
                  Initiate Project <i className="bi bi-robot ms-2"></i>
                </button>
                {/* <button className="btn-ml-outline" onClick={() => navigate("/services")}>
                  View Ecosystem
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. DATA ARCHITECTURE SECTION --- */}
      <section className="py-100 bg-black position-relative overflow-hidden">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="zoom-in-right">
              <div className="ml-visual-container">
                {/* Visual Orbits for AI feel */}
                <div className="data-orbit-1"></div>
                <div className="data-orbit-2"></div>
                <img src={ML_SIDE_IMG} alt="AI Model" className="ml-main-img img-fluid" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="display-4 fw-bold text-white mb-4">Scalable <span className="brand-cyan">Neural Systems</span></h2>
              <p className="text-white-50 mb-4">
                Our approach to Machine Learning is rooted in scalability and ethical AI. 
                We don't just build models; we build infrastructure that learns and evolves.
              </p>
              <div className="ml-spec-grid">
                {[
                  { label: "Data Sanitization", icon: "bi-layers-half" },
                  { label: "Model Training", icon: "bi-activity" },
                  { label: "API Deployment", icon: "bi-cloud-check" },
                  { label: "Continuous Learning", icon: "bi-arrow-repeat" }
                ].map((spec, i) => (
                  <div className="ml-spec-item" key={i}>
                    <i className={`${spec.icon} brand-cyan mb-2 d-block fs-3`}></i>
                    <span className="text-white fw-bold small text-uppercase ls-1">{spec.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE INTELLIGENCE BENTO --- */}
      <section className="py-100 brand-bg-navy-accent">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white">Core <span className="brand-cyan">Competencies</span></h2>
            <p className="text-white-50">Advanced algorithms for enterprise-grade solutions.</p>
          </div>
          <div className="row g-4">
            {ML_CATEGORIES.map((cat, index) => (
              <div className="col-lg-3 col-md-6" key={index} data-aos="flip-up" data-aos-delay={index * 100}>
                <div className="ml-bento-card">
                  <div className="bento-icon-wrapper">
                    <i className={`bi ${cat.icon}`}></i>
                  </div>
                  <h4 className="text-white mt-4 mb-3">{cat.title}</h4>
                  <p className="text-white-50 small mb-0">{cat.desc}</p>
                  <div className="bento-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .ml-page-wrapper { background: #00040a; overflow-x: hidden; }
        .brand-bg-navy-accent { background: #010a14; }
        .brand-cyan { color: #4bc9e1 !important; }
        
        .py-100 { padding: 100px 0; }
        .ls-1 { letter-spacing: 1px; }

        .text-gradient-cyan {
          background: linear-gradient(90deg, #4bc9e1, #0056b3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* --- HERO --- */
        .ml-hero { position: relative; min-height: 100vh; display: flex; align-items: center; background: #000; }
        
        .hero-bg-image {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          opacity: 0.4;
          mask-image: linear-gradient(to right, black 30%, transparent 90%);
        }

        .hero-scanning-effect {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 70% 50%, rgba(75, 201, 225, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .ai-status-pill {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.05); color: #4bc9e1;
          padding: 6px 20px; border-radius: 50px; border: 1px solid rgba(75, 201, 225, 0.3);
          font-family: monospace; font-size: 0.85rem;
        }

        .spinning-loader {
          width: 10px; height: 10px; border: 2px solid #4bc9e1;
          border-top-color: transparent; border-radius: 50%;
          animation: spin-loader 1s linear infinite;
        }

        /* --- VISUALS --- */
        .ml-visual-container { position: relative; padding: 40px; }
        .ml-main-img { 
          width: 100%; border-radius: 20px; 
          box-shadow: 0 0 50px rgba(75, 201, 225, 0.2);
          position: relative; z-index: 2;
        }
        
        .data-orbit-1, .data-orbit-2 {
          position: absolute; top: 50%; left: 50%;
          border: 1px dashed rgba(75, 201, 225, 0.3); border-radius: 50%;
        }
        .data-orbit-1 { width: 110%; height: 110%; animation: spin-orbit 20s linear infinite; margin-left: -55%; margin-top: -55%; }
        .data-orbit-2 { width: 130%; height: 130%; animation: spin-orbit 30s linear reverse infinite; margin-left: -65%; margin-top: -65%; }

        /* --- BENTO CARDS --- */
        .ml-bento-card {
          background: rgba(255,255,255,0.03); padding: 40px 30px; border-radius: 24px;
          height: 100%; border: 1px solid rgba(255,255,255,0.05);
          position: relative; overflow: hidden; transition: 0.4s;
        }
        .ml-bento-card:hover {
          background: rgba(75, 201, 225, 0.05);
          border-color: #4bc9e1; transform: translateY(-10px);
        }
        .bento-icon-wrapper {
          width: 60px; height: 60px; background: #4bc9e1; color: #000;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem; border-radius: 15px;
        }
        
        .bento-glow {
          position: absolute; bottom: -50px; right: -50px; width: 100px; height: 100px;
          background: radial-gradient(circle, rgba(75, 201, 225, 0.3) 0%, transparent 70%);
          filter: blur(20px); transition: 0.4s;
        }
        .ml-bento-card:hover .bento-glow { width: 200px; height: 200px; opacity: 0.6; }

        /* --- BUTTONS --- */
        .btn-ml-primary {
          background: #4bc9e1; color: #000; border: none; padding: 15px 40px;
          border-radius: 5px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 1px; transition: 0.3s;
        }
        .btn-ml-primary:hover { background: #fff; transform: translateY(-3px); }
        
        .btn-ml-outline {
          background: transparent; color: #fff; border: 1px solid #fff;
          padding: 15px 40px; border-radius: 5px; transition: 0.3s;
        }
        .btn-ml-outline:hover { border-color: #4bc9e1; color: #4bc9e1; }

        .ml-spec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .ml-spec-item { background: #01162e; padding: 25px; border-radius: 15px; text-align: center; border: 1px solid transparent; transition: 0.3s; }
        .ml-spec-item:hover { border-color: #4bc9e1; }

        @keyframes spin-loader { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        @media (max-width: 991px) {
          .ml-hero { text-align: center; }
          .ml-button-group { justify-content: center; flex-direction: column; }
          .hero-bg-image { mask-image: none; opacity: 0.2; }
          .ml-spec-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default MachineLearning;