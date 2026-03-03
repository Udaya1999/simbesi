import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import hybridBanner from "../assets/img/services/aboutbanne1.jpg"; 
import hybridSideImg from "../assets/img/servicesright.jpg"; 

const WE_OFFER = [
  { 
    title: "CROSS-PLATFORM APP DEVELOPMENT", 
    icon: "bi-activity", 
    desc: "Our Flutter developer has good hands-on experience developing secure, robust, and scalable, high-quality web and mobile applications for both platforms, i.e., Android and iOS." 
  },
  { 
    title: "ADVANCED AND NATIVE APP DEVELOPMENT", 
    icon: "bi-broadcast-pin", 
    desc: "Flutter offers flexibility for better performance and scalability. Our Flutter developers are specialized in their niche and can quickly integrate native features." 
  },
  { 
    title: "API DEVELOPMENT AND MIGRATION", 
    icon: "bi-easel", 
    desc: "Our skilled professionals are always ready to fulfill all the requirements of the products. Our experts will help you to build and deploy all the APIs successfully." 
  },
  { 
    title: "FLUTTER APP DESIGN SERVICES", 
    icon: "bi-bounding-box-circles", 
    desc: "Flutter app development means deploying apps that are faster and robust. We are here to help you design flutter apps for easy navigation and maintenance." 
  },
  { 
    title: "FLUTTER APP UPGRADE", 
    icon: "bi-calendar-check", 
    desc: "We can help to flawlessly migrate to the advanced version of Flutter for better business opportunities, security upgrades, and high-level performances." 
  },
  { 
    title: "SUPPORT AND MAINTENANCE", 
    icon: "bi-chat-dots", 
    desc: "Our professional team offers various engagement models for better support and maintenance services to improve your applications' quality and fix bugs." 
  }
];

const HybridMobileDev = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false,
      mirror: true 
    });
  }, []);

  return (
    <div className="hybrid-dev-page brand-bg-dark">
      {/* 1. TOP BANNER SECTION */}
      <section className="hybrid-banner" style={{ backgroundImage: `url(${hybridBanner})` }}>
        <div className="banner-overlay">
          <div className="container h-100 d-flex align-items-center justify-content-center text-center">
            <div data-aos="zoom-in">
              <h1 className="display-2 fw-bold text-white mb-3">Hybrid App Development</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-white text-decoration-none opacity-75">Home</a>
                  </li>
                  <li className="breadcrumb-item active brand-cyan" aria-current="page">
                    Hybrid Solutions
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TEXT WITH SIDE IMAGE SECTION */}
      <section className="py-5">
        <div className="container py-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h6 className="brand-cyan fw-bold text-uppercase mb-3">Innovation at Scale</h6>
              <h2 className="display-5 fw-bold mb-4 text-white">
                We WORK on your <span className="brand-cyan">IDEAS</span> to make your <span className="brand-cyan">IDEAS WORK</span>
              </h2>
              <p className="lead text-light opacity-75 mb-4">
                Hybrid apps are the future of cost-effective digital presence. We specialize in 
                bespoke strategies that minimize "indigenous challenges" while driving 
                productivity through a single codebase.
              </p>
              <div className="mt-4 d-flex gap-3">
                <button 
                  className="btn btn-cyan btn-lg rounded-pill px-5 fw-bold shadow-sm" 
                  onClick={() => navigate("/careers")}
                >
                  Explore Careers
                </button>
                <button className="btn btn-outline-light btn-lg rounded-pill px-5">
                  Our Methodology
                </button>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="image-glow-container p-1 rounded-4">
                <img src={hybridSideImg} alt="Hybrid Development" className="img-fluid rounded-4 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WE OFFER - ANIMATED GRID */}
      <section className="py-5 position-relative">
        <div className="container py-5">
          <div className="text-center mb-5 pb-4" data-aos="fade-down">
            <h2 className="display-6 fw-bold text-white">
              We <span className="brand-cyan">Offer</span>
            </h2>
            <div className="underline-cyan mx-auto"></div>
          </div>
          
          <div className="row g-4 justify-content-center">
            {WE_OFFER.map((item, index) => (
              <div 
                key={index} 
                className="col-md-6 col-lg-4" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="offer-card border-0">
                  {/* Floating Icon Wrapper */}
                  <div className="icon-wrapper animate-float">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h5 className="fw-bold mb-3 brand-cyan">{item.title}</h5>
                  <p className="text-light opacity-75 small mb-0 lh-lg">{item.desc}</p>
                  
                  {/* Decorative card element */}
                  <div className="card-accent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* --- BRAND THEME VARIABLES --- */
        :root {
          --brand-navy: #001f3f;
          --brand-cyan: #4bc9e1;
          --bg-dark: #00040a;      /* Deep black-navy background */
          --card-bg: #01162e;      /* Subtle dark blue for depth */
        }

        .brand-bg-dark { 
          background-color: var(--bg-dark); 
          min-height: 100vh;
          color: white;
          overflow-x: hidden;
        }

        .brand-cyan { color: var(--brand-cyan) !important; }

        /* --- BANNER --- */
        .hybrid-banner {
          height: 450px;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .banner-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to bottom, rgba(0, 4, 10, 0.3), var(--bg-dark));
        }

        /* --- BUTTONS --- */
        .btn-cyan {
          background-color: var(--brand-cyan);
          border-color: var(--brand-cyan);
          color: var(--brand-navy);
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .btn-cyan:hover {
          background-color: white;
          border-color: white;
          transform: translateY(-3px);
        }

        /* --- IMAGE GLOW --- */
        .image-glow-container {
          background: linear-gradient(45deg, var(--brand-navy), var(--brand-cyan));
          position: relative;
        }

        /* --- ANIMATED OFFER CARDS --- */
        .offer-card {
          background: var(--card-bg);
          padding: 65px 25px 40px;
          border-radius: 20px;
          text-align: center;
          height: 100%;
          position: relative;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          border: 1px solid rgba(75, 201, 225, 0.05) !important;
          z-index: 1;
        }
        
        .offer-card:hover {
          transform: translateY(-15px);
          border-color: var(--brand-cyan) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 15px rgba(75, 201, 225, 0.1);
        }

        .icon-wrapper {
          width: 70px; height: 70px;
          background: var(--brand-navy);
          color: var(--brand-cyan);
          border-radius: 15px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem;
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          border: 4px solid var(--bg-dark);
          transition: all 0.4s ease;
        }

        .offer-card:hover .icon-wrapper {
          background: var(--brand-cyan);
          color: var(--brand-navy);
          transform: translateX(-50%) rotate(360deg);
          border-radius: 50%;
        }

        /* --- ANIMATIONS --- */
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .underline-cyan {
          width: 60px; height: 4px;
          background: var(--brand-cyan);
          margin-top: 15px;
          border-radius: 2px;
          transition: width 0.6s ease;
        }
        section:hover .underline-cyan { width: 100px; }

        .card-accent {
          position: absolute;
          bottom: 0; left: 0; width: 0; height: 3px;
          background: var(--brand-cyan);
          transition: width 0.4s ease;
          border-radius: 0 0 20px 20px;
        }
        .offer-card:hover .card-accent { width: 100%; }

        @media (max-width: 991px) {
          .hybrid-banner { height: 350px; }
          .display-2 { font-size: 3rem; }
        }
      `}</style>
    </div>
  );
};

export default HybridMobileDev;