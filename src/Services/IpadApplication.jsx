import React, { useEffect } from "react";
import { useNavigate,Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import ipadBanner from "../assets/img/services/aboutbanne1.jpg"; 
import ipadSideImg from "../assets/img/services/mobileappdev1.jpg"; 

const IPAD_OFFERS = [
  { 
    title: "Feasible Expertise", 
    icon: "bi-activity", 
    desc: "As we have been working for years in the sphere of application development, we venture to develop captivating and engrossing apps." 
  },
  { 
    title: "iPad App Developing Crew", 
    icon: "bi-broadcast-pin", 
    desc: "Our crew scrutinizes a clutch of certified application developers who have clustered various projects so far." 
  },
  { 
    title: "Endowment of Code", 
    icon: "bi-easel", 
    desc: "We authenticate to deliver 100% ownership and privacy of code to our clients that fetch the client's trust in us for a strong client base." 
  },
  { 
    title: "Flourishing Services", 
    icon: "bi-bounding-box-circles", 
    desc: "We are persuaded by providing reasonable and worthy virtues to our clients to satisfy them at low prices." 
  },
  { 
    title: "Advance Technologies", 
    icon: "bi-calendar-check", 
    desc: "We develop the use of the latest technologies under the latest version of ios for the development of iPad applications." 
  },
  { 
    title: "Technical Support", 
    icon: "bi-chat-dots", 
    desc: "In case of any technical glitches, we are here to provide technical support to our clients until further instructions and even after the completion of the project." 
  }
];

const IpadApplication = () => {
  
    const navigate = useNavigate();
     const handleRedirectToStory2 = () => {
      navigate("/carrers"); 
    };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-out-quart' });
  }, []);

  return (
    <div className="ipad-app-page-unique">
      {/* 1. MINIMALIST HERO SECTION */}
      <section className="ipad-hero-minimal" style={{ backgroundImage: `url(${ipadBanner})` }}>
        <div className="hero-glass-overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center" data-aos="fade-down">
                <span className="ipad-category-tag">Premium Tablet Solutions</span>
                <h1 className="hero-title mt-3">iPad App <span className="text-gradient">Development</span></h1>
                <p className="hero-subtitle mx-auto">Scaling your vision to the big screen with precision and elegance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MODERN ASYMMETRIC CONTENT SECTION */}
      <section className="ipad-content-split py-5">
        <div className="container py-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 position-relative" data-aos="fade-right">
              <div className="image-stack">
                <div className="image-stack-bg"></div>
                <img src={ipadSideImg} alt="iPad Development" className="img-fluid main-img shadow-2xl" />
                <div className="floating-stat-card">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Code Ownership</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5" data-aos="fade-left">
              <div className="content-header mb-4">
                <h2 className="section-title-unique">Redefining the <br/><strong>iPad Experience</strong></h2>
              </div>
              <p className="description-text">
                SIMBESI stands at the forefront of <strong>iPad application development in India</strong>. 
                Our team of dedicated developers specializes in crafting high-efficiency, 
                visually stunning applications tailored for the iPad ecosystem.
              </p>
              
              <div className="custom-feature-grid mt-4">
                {[
                  { label: "Precedent app development", icon: "bi-layers" },
                  { label: "App renovation", icon: "bi-magic" },
                  { label: "App stipulation", icon: "bi-file-earmark-check" },
                  { label: "App evaluation", icon: "bi-search" }
                ].map((item, i) => (
                  <div className="feature-item-inline" key={i}>
                    <div className="dot-icon"><i className={`bi ${item.icon}`}></i></div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <button className="btn-modern-primary mt-5" onClick={handleRedirectToStory2}>
                Explore Careers <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEOMORPHIC OFFER GRID */}
      <section className="ipad-offers-section py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="grid-title">We <span>Offer</span></h2>
          </div>
          
          <div className="row g-4">
            {IPAD_OFFERS.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={index * 50}>
                <div className="ipad-glass-card">
                  <div className="card-top-accent" />
                  <div className="icon-sphere mb-4">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h5 className="card-title-unique">{item.title}</h5>
                  <p className="card-desc-unique">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        :root {
          --ipad-accent: #0071e3;
          --ipad-dark: #1d1d1f;
          --ipad-soft-gray: #f5f5f7;
          --ipad-gradient: linear-gradient(135deg, #0071e3 0%, #00d4ff 100%);
        }

        .ipad-app-page-unique {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background-color: #fff;
          color: var(--ipad-dark);
          overflow-x: hidden;
        }

        /* --- HERO --- */
        .ipad-hero-minimal {
          height: 60vh;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .hero-glass-overlay {
          height: 100%;
          background: rgba(29, 29, 31, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
        }
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          color: white;
        }
        .text-gradient {
          background: var(--ipad-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ipad-category-tag {
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .hero-subtitle {
          color: rgba(255,255,255,0.8);
          font-size: 1.25rem;
          max-width: 600px;
        }

        /* --- CONTENT SECTION --- */
        .image-stack {
          position: relative;
          z-index: 1;
        }
        .image-stack-bg {
          position: absolute;
          top: 30px;
          left: -30px;
          width: 100%;
          height: 100%;
          background: var(--ipad-soft-gray);
          border-radius: 20px;
          z-index: -1;
        }
        .main-img {
          border-radius: 20px;
          transition: transform 0.5s ease;
        }
        .main-img:hover { transform: scale(1.02); }

        .floating-stat-card {
          position: absolute;
          bottom: 40px;
          right: -20px;
          background: white;
          padding: 20px 30px;
          border-radius: 15px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          animation: float 4s infinite ease-in-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .stat-number { font-size: 1.8rem; font-weight: 800; color: var(--ipad-accent); }
        .stat-label { font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: #666; }

        .section-title-unique {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.1;
        }
        .custom-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .feature-item-inline {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          color: #444;
        }
        .dot-icon {
          width: 32px; height: 32px;
          background: var(--ipad-soft-gray);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: var(--ipad-accent);
        }

        .btn-modern-primary {
          background: var(--ipad-dark);
          color: white;
          border: none;
          padding: 16px 40px;
          border-radius: 12px;
          font-weight: 600;
          transition: 0.3s;
        }
        .btn-modern-primary:hover {
          background: var(--ipad-accent);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 113, 227, 0.3);
        }

        /* --- OFFERS GRID --- */
        .ipad-offers-section { background: #fafafa; }
        .grid-title span { color: var(--ipad-accent); position: relative; }
        
        .ipad-glass-card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          height: 100%;
          border: 1px solid rgba(0,0,0,0.03);
          transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          overflow: hidden;
        }
        .card-top-accent {
          position: absolute;
          top: 0; left: 0; width: 0%; height: 4px;
          background: var(--ipad-gradient);
          transition: 0.4s;
        }
        .ipad-glass-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.06);
        }
        .ipad-glass-card:hover .card-top-accent { width: 100%; }

        .icon-sphere {
          width: 60px; height: 60px;
          background: var(--ipad-soft-gray);
          color: var(--ipad-accent);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          transition: 0.4s;
        }
        .ipad-glass-card:hover .icon-sphere {
          background: var(--ipad-accent);
          color: white;
        }
        .card-title-unique { font-weight: 700; margin-bottom: 15px; }
        .card-desc-unique { color: #666; font-size: 0.95rem; line-height: 1.6; }

        @media (max-width: 991px) {
          .hero-title { font-size: 2.8rem; }
          .section-title-unique { font-size: 2.2rem; }
          .custom-feature-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default IpadApplication;