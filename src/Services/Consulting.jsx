import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async'; 
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

// --- Asset Imports ---
import consultingBanner from "../assets/img/services/aboutbanne1.jpg"; 

const CONSULTING_SERVICES = [
  { id: "01", title: "Tech Stack Audit", desc: "Evaluating your current architecture for scalability, security, and performance bottlenecks." },
  { id: "02", title: "Digital Transformation", desc: "Modernizing legacy systems with cloud-native solutions and microservices." },
  { id: "03", title: "Product Strategy", desc: "Defining MVP features, technical roadmaps, and go-to-market engineering plans." },
  { id: "04", title: "Cloud Optimization", desc: "Strategic planning for AWS/Azure migrations and infrastructure cost reduction." }
];

const Consulting = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const navigate = useNavigate();
  const handleBookSection = () => {
    navigate("/contact"); 
  };

  return (
    <div className="consulting-clean-page brand-bg-dark">
      <Helmet>
        <title>IT Consulting & Strategic Tech Advisory | SIMBESI</title>
        <meta name="description" content="Engineering your vision with strategic advisory. We bridge the gap between complex business goals and robust technical execution." />
      </Helmet>
      
      {/* --- 1. FIXED BANNER SECTION --- */}
      <section className="cons-banner" style={{ backgroundImage: `url(${consultingBanner})` }}>
        <div className="cons-banner-overlay">
          <div className="container" data-aos="fade-up">
            <span className="cons-tag brand-cyan">Strategic Advisory</span>
            <h1 className="cons-hero-title text-white">Engineering <br/><strong className="brand-cyan">Your Vision.</strong></h1>
            <p className="cons-hero-desc text-light opacity-75">We bridge the gap between complex business goals and robust technical execution.</p>
          </div>
        </div>
      </section>

      {/* --- 2. THE CONSULTING PROCESS --- */}
      <section className="py-5">
        <div className="container py-lg-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4" data-aos="fade-right">
              <h2 className="section-h2 text-white">Our <span className="brand-cyan">Methodology</span></h2>
              <p className="text-light opacity-75 mt-3">A systematic approach to solving complex organizational challenges through software excellence.</p>
              <button onClick={handleBookSection} className="btn-cyan mt-4 rounded-pill px-5 py-2 fw-bold">
                Book a Session
              </button>
            </div>
            <div className="col-lg-8">
              <div className="row g-3">
                {CONSULTING_SERVICES.map((item, index) => (
                  <div key={index} className="col-md-6" data-aos="zoom-in" data-aos-delay={index * 100}>
                    <div className="cons-item-card border-0">
                      <div className="cons-number brand-cyan">{item.id}</div>
                      <h5 className="fw-bold mt-3 brand-cyan">{item.title}</h5>
                      <p className="text-light opacity-75 small">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. CORE ADVISORY AREAS --- */}
      <section className="py-5 brand-bg-navy-accent">
        <div className="container py-5 text-center">
            <div className="cons-label mb-2 brand-cyan opacity-75">Capabilities</div>
            <h3 className="fw-bold mb-5 text-white">High-Impact Technical Advisory</h3>
            <div className="row g-4 justify-content-center">
                {["Enterprise Architecture", "Cybersecurity Strategy", "AI/ML Integration", "Agile Coaching"].map((tech, idx) => (
                    <div key={idx} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={idx * 50}>
                        <div className="cons-tech-box">
                            {tech}
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

        .brand-bg-dark { background-color: var(--bg-dark); min-height: 100vh; overflow-x: hidden; }
        .brand-bg-navy-accent { background-color: #010a14; }
        .brand-cyan { color: var(--brand-cyan) !important; }

        /* --- Banner Adjustment --- */
        .cons-banner { 
          height: 500px; 
          background-color: #001226; /* Matches the image background color */
          background-size: contain;   /* Ensures image isn't cut off */
          background-repeat: no-repeat;
          background-position: right center; /* Keeps the robot visible on the right */
          position: relative; 
        }

        .cons-banner-overlay { 
          height: 100%; 
          /* Darker gradient on the left to make text readable, transparent on the right to show the robot */
          background: linear-gradient(to right, var(--bg-dark) 35%, rgba(0, 4, 10, 0.2) 70%, transparent); 
          display: flex; 
          align-items: center; 
        }

        .cons-tag { font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; }
        .cons-hero-title { font-size: 4rem; line-height: 1.1; margin: 15px 0; }
        .cons-hero-desc { max-width: 500px; font-size: 1.1rem; }

        .cons-item-card { 
          padding: 35px; border-radius: 20px; background: var(--card-bg); 
          transition: 0.4s; height: 100%;
          border: 1px solid rgba(75, 201, 225, 0.1) !important;
        }
        .cons-item-card:hover { border-color: var(--brand-cyan) !important; transform: translateY(-10px); }
        .cons-number { font-family: 'Courier New', monospace; font-weight: bold; font-size: 1.1rem; }
        .section-h2 { font-size: 2.8rem; font-weight: 800; }
        
        .btn-cyan { background-color: var(--brand-cyan); border: none; color: var(--brand-navy); transition: 0.3s; }
        .btn-cyan:hover { background-color: white; transform: scale(1.05); }

        .cons-tech-box {
            background: var(--card-bg); border: 1px solid rgba(75, 201, 225, 0.1); 
            padding: 25px; border-radius: 15px; font-weight: 600; color: #fff; transition: 0.4s;
        }
        .cons-tech-box:hover { background: var(--brand-cyan); color: var(--brand-navy); }

        @media (max-width: 991px) {
          .cons-hero-title { font-size: 2.8rem; }
          .cons-banner { background-position: center; background-size: cover; } /* Back to cover for mobile for better filling */
          .cons-banner-overlay { background: rgba(0, 4, 10, 0.7); text-align: center; justify-content: center; }
          .cons-hero-desc { margin: 0 auto; }
        }
      `}</style>
    </div>
  );
};

export default Consulting;