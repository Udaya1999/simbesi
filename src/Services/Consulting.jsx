import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async'; // SEO Integration
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import consultingBanner from "../assets/img/services/aboutbanne1.jpg"; 
import { useNavigate } from "react-router-dom";

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
    navigate("/contact"); // Corrected typo from /carrers
  };

  return (
    <div className="consulting-clean-page">
      {/* SEO METADATA SECTION */}
      <Helmet>
        <title>IT Consulting & Strategic Tech Advisory | SIMBESI</title>
        <meta name="description" content="Engineering your vision with strategic advisory. We bridge the gap between complex business goals and robust technical execution." />
        <meta name="keywords" content="IT consulting, technology roadmap, digital transformation, tech stack audit, product strategy, SIMBESI consulting" />
        
        {/* Open Graph Tags for Professional Social Discovery */}
        <meta property="og:title" content="Strategic Technical Advisory | SIMBESI" />
        <meta property="og:description" content="Bridging the gap between complex business goals and robust technical execution." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* --- 1. MINIMALIST BANNER --- */}
      <section className="cons-banner" style={{ backgroundImage: `url(${consultingBanner})` }}>
        <div className="cons-banner-overlay">
          <div className="container" data-aos="fade-up">
            <span className="cons-tag">Strategic Advisory</span>
            <h1 className="cons-hero-title">Engineering <br/><strong>Your Vision.</strong></h1>
            <p className="cons-hero-desc">We bridge the gap between complex business goals and robust technical execution.</p>
          </div>
        </div>
      </section>

      {/* --- 2. THE CONSULTING PROCESS --- */}
      <section className="py-5 bg-white">
        <div className="container py-lg-5">
          <div className="row g-4">
            <div className="col-lg-4" data-aos="fade-right">
              <h2 className="section-h2">Our <span className="text-primary">Methodology</span></h2>
              <p className="text-muted mt-3">A systematic approach to solving complex organizational challenges through software excellence.</p>
              
              
              
              <button onClick={handleBookSection} className="btn-cons-outline mt-3">Book a Session</button>
            </div>
            <div className="col-lg-8">
              <div className="row g-3">
                {CONSULTING_SERVICES.map((item, index) => (
                  <div key={index} className="col-md-6" data-aos="zoom-in" data-aos-delay={index * 100}>
                    <div className="cons-item-card">
                      <div className="cons-number">{item.id}</div>
                      <h5 className="fw-bold mt-3">{item.title}</h5>
                      <p className="text-secondary small">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. CORE ADVISORY AREAS --- */}
      <section className="py-5 bg-light-gray border-top">
        <div className="container py-5 text-center">
            <div className="cons-label mb-2">Capabilities</div>
            <h3 className="fw-bold mb-5">High-Impact Technical Advisory</h3>
            
            

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
        .consulting-clean-page { font-family: 'Plus Jakarta Sans', sans-serif; color: #1a1a1a; background: #fff; }
        .bg-light-gray { background: #f8f9fa; }
        .text-primary { color: #0052cc !important; }

        /* --- Banner --- */
        .cons-banner { height: 450px; background-size: cover; background-position: center; position: relative; }
        .cons-banner-overlay { height: 100%; background: linear-gradient(to right, rgba(255,255,255,0.95) 30%, transparent); display: flex; align-items: center; }
        .cons-tag { color: #0052cc; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; }
        .cons-hero-title { font-size: 3.5rem; font-weight: 400; color: #1a1a1a; line-height: 1.1; margin: 15px 0; }
        .cons-hero-desc { max-width: 500px; color: #555; font-size: 1.1rem; }

        /* --- Cards --- */
        .cons-item-card { 
          padding: 30px; border: 1px solid #eef0f2; border-radius: 16px; 
          background: #fff; transition: 0.3s; height: 100%;
        }
        .cons-item-card:hover { border-color: #0052cc; box-shadow: 0 10px 30px rgba(0,82,204,0.05); transform: translateY(-5px); }
        .cons-number { font-family: monospace; color: #0052cc; font-weight: bold; font-size: 0.9rem; opacity: 0.6; }

        .section-h2 { font-size: 2.5rem; font-weight: 800; }
        .btn-cons-outline { 
            border: 2px solid #0052cc; color: #0052cc; background: transparent; 
            padding: 10px 25px; border-radius: 8px; font-weight: 700; transition: 0.3s;
        }
        .btn-cons-outline:hover { background: #0052cc; color: #fff; }

        /* --- Tech Boxes --- */
        .cons-tech-box {
            background: #fff; border: 1px solid #dee2e6; padding: 20px; 
            border-radius: 12px; font-weight: 600; color: #333; transition: 0.3s;
        }
        .cons-tech-box:hover { background: #0052cc; color: #fff; border-color: #0052cc; }
        .cons-label { font-weight: 700; color: #888; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1.5px; }

        @media (max-width: 991px) {
          .cons-hero-title { font-size: 2.5rem; }
          .cons-banner-overlay { background: rgba(255,255,255,0.9); text-align: center; justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default Consulting;