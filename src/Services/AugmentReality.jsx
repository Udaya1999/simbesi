import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import arBanner from "../assets/img/services/aboutbanne1.jpg"; 
import arSideImg from "../assets/img/byindustry/ar.png"; 

const AR_OFFERS = [
  { title: "Marker-Based AR", icon: "bi-qr-code-scan", desc: "Scan triggers like QR codes to reveal 3D models and interactive digital content instantly." },
  { title: "Markerless AR", icon: "bi-geo-alt", desc: "Deploy digital objects in real-world spaces using GPS and accelerometers for immersion." },
  { title: "Projection-Based AR", icon: "bi-projector", desc: "Project artificial light onto surfaces to create interactive touch-sensitive digital overlays." },
  { title: "Superimposition AR", icon: "bi-layers-half", desc: "Replace or augment the view of an object with a newly rendered digital perspective." },
  { title: "AR Retail Solutions", icon: "bi-cart-check", desc: "Virtual 'try-before-you-buy' experiences for furniture, makeup, and apparel through mobile." },
  { title: "Gamified Marketing", icon: "bi-controller", desc: "Boost user engagement with AR-driven brand stories and interactive gaming elements." }
];

const AugmentReality = () => {
    const navigate = useNavigate();
     const handleRedirectToStory = () => {
      navigate("/contact"); 
    };

  useEffect(() => {
    AOS.init({ duration: 800, once: false, easing: 'ease-out-back' });
  }, []);

  return (
    <div className="ar-impact-wrapper">
      {/* 1. CYBER HERO SECTION */}
      <section className="ar-hero" style={{ backgroundImage: `url(${arBanner})` }}>
        <div className="ar-hero-overlay">
          <div className="container" data-aos="zoom-out-up">
            <div className="ar-hero-content text-center">
              <div className="ar-scan-line"></div>
              <h4 className="ar-top-label">Spatial Computing Engaged</h4>
              <h1 className="ar-display-title">AUGMENTED <span className="ar-glow-text">REALITY</span></h1>
              <p className="ar-hero-sub">Rewriting the laws of perception through immersive digital layers.</p>
              <div className="ar-hero-btns mt-4">
                <button className="ar-btn-primary">INITIATE SYSTEM</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE TECH SECTION */}
      
      <section className="py-5 bg-darker overflow-hidden">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="ar-section-title">Visual <span className="text-cyan">Intelligence</span></h2>
              <div className="ar-accent-bar mb-4"></div>
              <p className="ar-text-muted mb-4">
                We don't just overlay images; we merge digital DNA with the physical world. Our AR systems utilize 
                advanced SLAM (Simultaneous Localization and Mapping) to ensure your virtual assets stay anchored.
              </p>
              
              <ul className="ar-tech-list list-unstyled">
                {["6-DOF Tracking Support", "Real-time Occlusion Handling", "Photorealistic Rendering"].map((item, i) => (
                  <li key={i} className="mb-3 d-flex align-items-center">
                    <span className="ar-bullet"></span> {item}
                  </li>
                ))}
              </ul>

              <button className="ar-btn-outline mt-4" onClick={handleRedirectToStory}>
                JOIN THE FRONTIER <i className="bi bi-chevron-right"></i>
              </button>
            </div>

            <div className="col-lg-6" data-aos="flip-right">
              <div className="ar-viz-container">
                <div className="ar-corner tl"></div> <div className="ar-corner tr"></div>
                <div className="ar-corner bl"></div> <div className="ar-corner br"></div>
                <img src={arSideImg} alt="AR" className="img-fluid ar-main-image" />
                <div className="ar-data-stream">01011001 110101</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITY GRID */}
      <section className="py-5 bg-black">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-down">
            <h2 className="text-white fw-bold">SYSTEM <span className="text-cyan">MODULES</span></h2>
            <p className="text-secondary">High-performance AR integration components.</p>
          </div>

          <div className="row g-4">
            {AR_OFFERS.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="ar-impact-card">
                  <div className="ar-card-shine"></div>
                  <div className="ar-icon-wrap">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h5 className="ar-card-title">{item.title}</h5>
                  <p className="ar-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .ar-impact-wrapper { background: #000; color: #fff; font-family: 'Inter', sans-serif; overflow: hidden; }
        .text-cyan { color: #00f2ff; }
        .bg-darker { background: #080808; }

        /* --- HERO --- */
        .ar-hero { height: 75vh; background-size: cover; background-position: center; position: relative; }
        .ar-hero-overlay { height: 100%; background: linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(0,242,255,0.1) 100%); display: flex; align-items: center; }
        .ar-display-title { font-size: 5rem; font-weight: 900; letter-spacing: -2px; line-height: 0.9; }
        .ar-glow-text { color: #00f2ff; text-shadow: 0 0 30px rgba(0, 242, 255, 0.8); }
        .ar-top-label { color: #00f2ff; text-transform: uppercase; letter-spacing: 6px; font-size: 0.8rem; margin-bottom: 20px; }
        .ar-scan-line { position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: rgba(0, 242, 255, 0.5); box-shadow: 0 0 15px #00f2ff; animation: scanMove 4s infinite linear; }
        @keyframes scanMove { 0% { top: 0%; } 100% { top: 100%; } }

        /* --- IMAGE VIZ --- */
        .ar-viz-container { position: relative; padding: 30px; background: rgba(0, 242, 255, 0.03); border: 1px solid rgba(0, 242, 255, 0.1); }
        .ar-corner { position: absolute; width: 20px; height: 20px; border: 2px solid #00f2ff; }
        .tl { top: -2px; left: -2px; border-right: 0; border-bottom: 0; }
        .tr { top: -2px; right: -2px; border-left: 0; border-bottom: 0; }
        .bl { bottom: -2px; left: -2px; border-right: 0; border-top: 0; }
        .br { bottom: -2px; right: -2px; border-left: 0; border-top: 0; }
        .ar-main-image { border-radius: 4px; filter: grayscale(30%) contrast(120%); }
        .ar-data-stream { position: absolute; bottom: 10px; right: 10px; font-family: monospace; font-size: 0.7rem; color: #00f2ff; opacity: 0.5; }

        /* --- CARDS --- */
        .ar-impact-card {
          background: #111; border: 1px solid #222; padding: 40px 30px; position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); overflow: hidden; height: 100%;
        }
        .ar-impact-card:hover {
          border-color: #00f2ff; transform: scale(1.05) translateY(-10px);
          background: #161616; box-shadow: 0 10px 30px rgba(0, 242, 255, 0.2);
        }
        .ar-card-shine {
          position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(0, 242, 255, 0.05), transparent);
          transform: skewX(-25deg); transition: 0.5s;
        }
        .ar-impact-card:hover .ar-card-shine { left: 150%; }
        .ar-icon-wrap { font-size: 2.5rem; color: #00f2ff; margin-bottom: 20px; text-shadow: 0 0 10px #00f2ff; }
        .ar-card-title { font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; }
        .ar-card-desc { color: #888; font-size: 0.9rem; line-height: 1.6; }

        /* --- BUTTONS --- */
        .ar-btn-primary {
          background: #00f2ff; color: #000; border: none; padding: 14px 40px; font-weight: 900;
          text-transform: uppercase; letter-spacing: 2px; clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
          transition: 0.3s;
        }
        .ar-btn-primary:hover { background: #fff; transform: scale(1.1); box-shadow: 0 0 20px #00f2ff; }
        .ar-btn-outline {
          background: transparent; border: 1px solid #00f2ff; color: #00f2ff; padding: 10px 25px;
          text-transform: uppercase; font-weight: 700; font-size: 0.8rem; transition: 0.3s;
        }
        .ar-btn-outline:hover { background: #00f2ff; color: #000; }

        @media (max-width: 991px) {
          .ar-display-title { font-size: 3rem; }
        }
      `}</style>
    </div>
  );
};

export default AugmentReality;