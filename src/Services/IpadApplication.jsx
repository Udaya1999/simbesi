import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false, 
      easing: 'ease-out-quart' 
    });
  }, []);

  return (
    <div className="ipad-app-page-unique brand-bg-dark">
      {/* 1. HERO SECTION */}
      <section className="ipad-hero-minimal" style={{ backgroundImage: `url(${ipadBanner})` }}>
        <div className="hero-glass-overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center" data-aos="fade-down">
                <span className="ipad-category-tag">Premium Tablet Solutions</span>
                <h1 className="hero-title mt-3 text-white">iPad App <span className="brand-cyan">Development</span></h1>
                <p className="hero-subtitle mx-auto text-light opacity-75">Scaling your vision to the big screen with precision and elegance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT SPLIT SECTION (Gaps Removed) */}
      <section className="py-5">
        <div className="container py-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 position-relative" data-aos="fade-right">
              <div className="image-stack">
                <div className="image-stack-bg"></div>
                <img src={ipadSideImg} alt="iPad Development" className="img-fluid main-img shadow-lg" />
                <div className="floating-stat-card">
                  <span className="stat-number brand-cyan">100%</span>
                  <span className="stat-label">Code Ownership</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5" data-aos="fade-left">
              <div className="content-header mb-4">
                <h2 className="section-title-unique text-white">Redefining the <br/><strong className="brand-cyan">iPad Experience</strong></h2>
              </div>
              <p className="description-text text-light opacity-75">
                SIMBESI stands at the forefront of <strong>iPad application development</strong>. 
                Our team specializes in crafting high-efficiency, visually stunning 
                applications tailored for the Apple ecosystem.
              </p>
              
              <div className="custom-feature-grid mt-4">
                {[
                  { label: "Precedent app development", icon: "bi-layers" },
                  { label: "App renovation", icon: "bi-magic" },
                  { label: "App stipulation", icon: "bi-file-earmark-check" },
                  { label: "App evaluation", icon: "bi-search" }
                ].map((item, i) => (
                  <div className="feature-item-inline text-light" key={i}>
                    <div className="dot-icon"><i className={`bi ${item.icon}`}></i></div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <button className="btn-cyan mt-5 rounded-pill px-5 py-3 fw-bold" onClick={() => navigate("/careers")}>
                Explore Careers <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ANIMATED OFFER GRID (Continuous Background) */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="grid-title text-white">We <span className="brand-cyan">Offer</span></h2>
            <div className="underline-cyan mx-auto"></div>
          </div>
          
          <div className="row g-4">
            {IPAD_OFFERS.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="ipad-glass-card border-0">
                  <div className="icon-sphere mb-4 animate-float">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h5 className="card-title-unique brand-cyan">{item.title}</h5>
                  <p className="card-desc-unique text-light opacity-75">{item.desc}</p>
                  <div className="card-accent-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        :root {
          --brand-navy: #001f3f;
          --brand-cyan: #4bc9e1;
          --bg-dark: #00040a;
          --card-bg: #01162e;
        }

        .brand-bg-dark { 
          background-color: var(--bg-dark); 
          min-height: 100vh;
          overflow-x: hidden;
        }

        .brand-cyan { color: var(--brand-cyan) !important; }

        /* --- HERO --- */
        .ipad-hero-minimal {
          height: 60vh;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .hero-glass-overlay {
          height: 100%;
          background: linear-gradient(to bottom, rgba(0, 4, 10, 0.4), var(--bg-dark));
          display: flex;
          align-items: center;
        }
        .hero-title { font-size: 4rem; font-weight: 800; }
        .ipad-category-tag {
          background: rgba(75, 201, 225, 0.2);
          color: var(--brand-cyan);
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
        }

        /* --- CONTENT SECTION --- */
        .image-stack-bg {
          position: absolute; top: 20px; left: -20px; width: 100%; height: 100%;
          background: var(--brand-navy);
          border-radius: 20px; z-index: -1;
        }
        .main-img { border-radius: 20px; transition: 0.5s; }

        .floating-stat-card {
          position: absolute; bottom: 30px; right: -10px;
          background: var(--card-bg);
          padding: 15px 25px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          border: 1px solid var(--brand-cyan);
          animation: floatStat 4s infinite ease-in-out;
        }
        @keyframes floatStat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .stat-number { font-size: 1.8rem; font-weight: 800; }
        .stat-label { font-size: 0.7rem; text-transform: uppercase; color: #fff; }

        /* --- BUTTONS --- */
        .btn-cyan {
          background-color: var(--brand-cyan);
          border: none;
          color: var(--brand-navy);
          transition: 0.3s;
        }
        .btn-cyan:hover {
          background-color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(75, 201, 225, 0.3);
        }

        /* --- CARDS --- */
        .ipad-glass-card {
          background: var(--card-bg);
          padding: 45px 30px;
          border-radius: 24px;
          height: 100%;
          transition: 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .ipad-glass-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .icon-sphere {
          width: 65px; height: 65px;
          background: var(--brand-navy);
          color: var(--brand-cyan);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.6rem;
          transition: 0.4s;
          border: 2px solid rgba(75, 201, 225, 0.2);
        }
        .ipad-glass-card:hover .icon-sphere {
          background: var(--brand-cyan);
          color: var(--brand-navy);
          transform: rotateY(180deg);
        }

        .card-accent-line {
          position: absolute; bottom: 0; left: 0; width: 0; height: 4px;
          background: var(--brand-cyan);
          transition: 0.5s;
        }
        .ipad-glass-card:hover .card-accent-line { width: 100%; }

        .underline-cyan {
          width: 60px; height: 4px;
          background: var(--brand-cyan);
          margin-top: 15px;
          border-radius: 2px;
        }

        .dot-icon {
          width: 32px; height: 32px;
          background: var(--brand-navy);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: var(--brand-cyan);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 3s infinite ease-in-out; }

        @media (max-width: 991px) {
          .hero-title { font-size: 2.8rem; }
          .custom-feature-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default IpadApplication;