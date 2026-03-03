import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Premium CDN Assets for Computer Vision
const VISION_HERO = "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=1600";
const OBJECT_DETECTION_IMG = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800";

const VISION_SERVICES = [
  { title: "Object Detection", icon: "bi-bounding-box", desc: "Real-time identification and localization of multiple objects within a single frame." },
  { title: "Facial Recognition", icon: "bi-person-bounding-box", desc: "Biometric security and emotion analysis using high-fidelity spatial mapping." },
  { title: "OCR Systems", icon: "bi-file-earmark-text", desc: "Extracting structured data from handwritten or printed text with 99% accuracy." },
  { title: "Medical Imaging", icon: "bi-scan", desc: "AI-assisted diagnostics for MRI, X-ray, and CT scans to detect early anomalies." }
];

const ComputerVision = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: false, easing: 'ease-in-out-back' });
  }, []);

  return (
    <div className="vision-page-wrapper">
      <Helmet>
        <title>Computer Vision Solutions | SIMBESI</title>
        <meta name="description" content="SIMBESI: Giving machines the power of sight through advanced CV algorithms." />
      </Helmet>

      {/* --- 1. THE VIEW-FINDER HERO --- */}
      <section className="vision-hero">
        <div className="vision-overlay-grid"></div>
        <div className="hero-img-layer" style={{ backgroundImage: `url(${VISION_HERO})` }}></div>
        
        <div className="container position-relative z-3">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-8" data-aos="zoom-out">
              <div className="vision-tag mb-4">
                <span className="dot-blink"></span> [LENS_READY: 100%]
              </div>
              <h1 className="display-2 fw-bold text-white mb-4">
                Giving Your <br />
                <span className="brand-cyan-glow">Software Eyes</span>
              </h1>
              <p className="lead text-white-50 mb-5 max-w-600">
                SIMBESI builds high-performance Vision systems that process visual data 
                at the speed of thought. We bridge the gap between pixels and actionable insights.
              </p>
              <div className="d-flex gap-3 mt-4">
                <button className="btn-vision-main" onClick={() => navigate("/contact")}>Analyze Project</button>
                {/* <button className="btn-vision-outline" onClick={() => navigate("/services")}>View Toolkit</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. THE DETECTION ARCHITECTURE --- */}
      <section className="py-5 bg-black position-relative">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-lg-2" data-aos="fade-left">
              <div className="vision-scan-box">
                <img src={OBJECT_DETECTION_IMG} alt="Object Detection" className="img-fluid rounded-4" />
                <div className="scan-line"></div>
                {/* Visual Targeting Brackets */}
                <div className="bracket br-tl"></div>
                <div className="bracket br-tr"></div>
                <div className="bracket br-bl"></div>
                <div className="bracket br-br"></div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1" data-aos="fade-right">
              <h2 className="display-4 fw-bold text-white mb-4">Unrivaled <span className="brand-cyan">Spatial Logic</span></h2>
              <p className="text-white-50 fs-5 mb-5">
                Our vision models excel in environments where accuracy is non-negotiable. 
                From autonomous drones to surgical robots, we provide the visual intelligence layer.
              </p>
              <div className="row g-4">
                {["Edge Processing", "Low Latency", "Multi-Object Tracking", "Custom Labels"].map((item, i) => (
                  <div className="col-6" key={i}>
                    <div className="vision-stat-card">
                      <h6 className="brand-cyan text-uppercase mb-1">{item}</h6>
                      <div className="vision-progress">
                        <div className="progress-fill" style={{ width: `${85 + (i*3)}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. VISION CAPABILITIES --- */}
      <section className="py-5 brand-bg-navy-accent">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold text-white">Visual <span className="brand-cyan">Toolkit</span></h2>
            <p className="text-white-50">Enterprise-grade CV solutions for any industry.</p>
          </div>
          <div className="row g-4">
            {VISION_SERVICES.map((tool, index) => (
              <div className="col-lg-3 col-md-6" key={index} data-aos="flip-right" data-aos-delay={index * 100}>
                <div className="vision-card">
                  <div className="vision-icon-box">
                    <i className={`bi ${tool.icon}`}></i>
                  </div>
                  <h5 className="text-white mt-4 mb-3">{tool.title}</h5>
                  <p className="small text-white-50">{tool.desc}</p>
                  <div className="card-border-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .vision-page-wrapper { background: #00040a; overflow-x: hidden; }
        .brand-bg-navy-accent { background: #010a14; }
        .brand-cyan { color: #4bc9e1; }
        .brand-cyan-glow { color: #4bc9e1; text-shadow: 0 0 20px rgba(75, 201, 225, 0.4); }

        /* --- HERO --- */
        .vision-hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; }
        .hero-img-layer {
          position: absolute; inset: 0; background-size: cover; background-position: center;
          opacity: 0.35; filter: grayscale(50%);
        }
        .vision-overlay-grid {
          position: absolute; inset: 0; 
          background-image: radial-gradient(rgba(75, 201, 225, 0.1) 1px, transparent 1px);
          background-size: 30px 30px; z-index: 2;
        }

        .vision-tag {
          background: rgba(0, 0, 0, 0.7); border: 1px solid #4bc9e1; color: #4bc9e1;
          display: inline-flex; align-items: center; gap: 10px; padding: 5px 15px;
          border-radius: 4px; font-family: 'Courier New', monospace; font-weight: bold;
        }

        /* --- SCANNING BOX --- */
        .vision-scan-box { position: relative; padding: 20px; }
        .scan-line {
          position: absolute; top: 0; left: 0; width: 100%; height: 2px;
          background: #4bc9e1; box-shadow: 0 0 15px #4bc9e1;
          z-index: 3; animation: scan-move 4s linear infinite;
        }

        .bracket { position: absolute; width: 30px; height: 30px; border: 2px solid #4bc9e1; z-index: 3; }
        .br-tl { top: 0; left: 0; border-right: 0; border-bottom: 0; }
        .br-tr { top: 0; right: 0; border-left: 0; border-bottom: 0; }
        .br-bl { bottom: 0; left: 0; border-right: 0; border-top: 0; }
        .br-br { bottom: 0; right: 0; border-left: 0; border-top: 0; }

        /* --- CARDS --- */
        .vision-card {
          background: #01162e; padding: 40px 25px; border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.05); position: relative;
          height: 100%; transition: 0.4s; overflow: hidden;
        }
        .vision-card:hover { transform: translateY(-10px); border-color: #4bc9e1; }
        .vision-icon-box { font-size: 2.5rem; color: #4bc9e1; }
        
        .vision-stat-card { background: rgba(255,255,255,0.03); padding: 15px; border-radius: 10px; }
        .vision-progress { height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; margin-top: 10px; }
        .progress-fill { height: 100%; background: #4bc9e1; border-radius: 2px; }

        /* --- BUTTONS --- */
        .btn-vision-main {
          background: #4bc9e1; color: #000; border: none; padding: 16px 40px;
          font-weight: 700; border-radius: 4px; transition: 0.3s;
        }
        .btn-vision-main:hover { background: #fff; box-shadow: 0 0 20px rgba(75, 201, 225, 0.4); }
        .btn-vision-outline {
          background: transparent; color: #fff; border: 1px solid #fff;
          padding: 16px 40px; border-radius: 4px; transition: 0.3s;
        }

        @keyframes scan-move { 
          0%, 100% { top: 0%; } 
          50% { top: 100%; } 
        }

        .dot-blink { 
          width: 8px; height: 8px; background: #4bc9e1; border-radius: 50%;
          animation: blink 1s infinite;
        }

        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        @media (max-width: 991px) {
          .vision-hero { text-align: center; }
          .d-flex { justify-content: center; flex-direction: column; }
          .hero-img-layer { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default ComputerVision;