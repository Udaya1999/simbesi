import React, { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet-async'; // SEO Integration
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Asset Imports
import lifeHeroBanner from "../assets/img/services/aboutbanne1.jpg"; 
import workWithUsImg from "../assets/img/services/why-us.png";
import cultureImg from "../assets/img/aboutbanner.png";
import benefitsImg from "../assets/img/culture2.png";

const JOBS_DATA = [
  { title: "HR Associate", exp: "6 Months - 2 Years", type: "Full Time" },
  { title: "iOS Developer", exp: "1 - 2 Years", type: "Remote" },
  { title: "Android Developer", exp: "1 - 3 Years", type: "Hybrid" },
  { title: "Software Engineer", exp: "Freshers", type: "On-Site" },
];

const LifeSimbesi = () => {
  const jobBoardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-quad' });
  }, []);

  const scrollToJobs = () => {
    jobBoardRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRedirectToStory = () => {
    navigate("/testimonials"); 
  };

  return (
    <div className="overflow-hidden bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* SEO METADATA SECTION */}
      <Helmet>
        <title>Life @ Simbesi | Our Culture & Values</title>
        <meta name="description" content="Simbesi has provided me with the tools to grow beyond my expectations. Experience a workplace defined by curiosity, collaboration, and cutting-edge tech." />
        <meta name="keywords" content="Life at Simbesi, Simbesi work culture, software engineering careers, employee benefits, tech workplace" />
        
        {/* Social Preview Tags */}
        <meta property="og:title" content="Workplace Culture & Life at Simbesi" />
        <meta property="og:description" content="Explore a career defined by curiosity and collaboration. Join our squad today." />
        <meta property="og:image" content={lifeHeroBanner} />
      </Helmet>

      {/* 1. LAYERED HERO SECTION */}
      <section className="position-relative d-flex align-items-center justify-content-center py-5 bg-dark" style={{ minHeight: "80vh" }}>
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img 
            src={lifeHeroBanner} 
            alt="SIMBESI Workspace" 
            className="w-100 h-100 object-fit-cover opacity-50"
            style={{ filter: "contrast(1.2) brightness(0.6)" }}
          />
          <div className="hero-mesh-overlay"></div>
        </div>

        <div className="container position-relative z-1">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 text-center text-lg-start" data-aos="fade-up">
              <span className="badge rounded-pill bg-primary bg-opacity-25 text-primary px-3 py-2 mb-3 border border-primary border-opacity-50">
                JOIN OUR SQUAD
              </span>
              <h1 className="display-3 fw-900 text-white mb-4 ls-neg-2">
                Life At <span className="text-gradient-primary">Simbesi</span>
              </h1>
              <p className="fs-5 text-white-50 mb-5 fw-light lh-base" style={{ maxWidth: "550px" }}>
                We don’t just build software; we build careers. Experience a workplace 
                defined by curiosity, collaboration, and cutting-edge tech.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <button onClick={scrollToJobs} className="btn btn-primary btn-lg px-4 rounded-3 shadow-blue transition-all">
                  View Openings
                </button>
                <button onClick={handleRedirectToStory} className="btn btn-outline-light btn-lg px-4 rounded-3 transition-all">
                  Our Story
                </button>
              </div>
            </div>

            <div className="col-lg-6" data-aos="zoom-in-left" data-aos-delay="200">
              <div className="hero-visual-box shadow-2xl position-relative">
                <img src={benefitsImg} alt="SIMBESI Benefits" className="img-fluid rounded-4 border-glass" />
                <div className="floating-info-card shadow-lg">
                  <div className="d-flex align-items-center gap-2">
                    <div className="pulse-green"></div>
                    <span className="small fw-bold text-dark">10+ New Hires this month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CULTURE & VALUES SECTION */}
      <section className="py-5 position-relative">
        <div className="container py-5">
          {/* Phase 01: Culture */}
          <div className="row g-4 align-items-center mb-5 pb-lg-5">
            <div className="col-lg-5" data-aos="fade-right">
                <div className="position-relative p-3">
                    <img src={workWithUsImg} alt="SIMBESI Culture" className="img-fluid rounded-5 shadow-sm bg-light p-2" />
                    <div className="exp-badge shadow">Values First</div>
                </div>
            </div>
            <div className="col-lg-7 ps-lg-5" data-aos="fade-left">
              <h6 className="text-primary fw-bold tracking-widest text-uppercase">Phase 01</h6>
              <h2 className="display-5 fw-bold text-navy mb-4">A Culture That Inspires</h2>
              <p className="text-secondary fs-5 mb-4 border-start border-primary border-4 ps-4">
                Each employee at SIMBESI is an asset and is given equal opportunity to grow. 
                Our team members experience an open and learning work culture.
              </p>
              <div className="row g-3">
                {['Creative Liberty', 'Zero Hierarchy', 'Mentor Support', 'Open Expression'].map((item, i) => (
                  <div className="col-auto" key={i}>
                    <div className="px-3 py-2 bg-light rounded-pill border small fw-bold text-navy shadow-sm"># {item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phase 02: Benefits */}
          <div className="row g-4 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-7 pe-lg-5 text-lg-end" data-aos="fade-right">
              <h6 className="text-primary fw-bold tracking-widest text-uppercase">Phase 02</h6>
              <h2 className="display-5 fw-bold text-navy mb-4">Perks That Matter</h2>
              <p className="text-secondary fs-5 mb-4 border-end border-primary border-4 pe-4">
                Your well-being isn't a "perk" to us—it's a priority. We design 
                our benefits to support your life, not just your work.
              </p>
              <p className="text-muted mb-4">
                From hybrid opportunities and training funds to comprehensive leave packages 
                for modern families, we ensure you have what you need to succeed.
              </p>
              <div className="d-flex gap-2 justify-content-lg-end">
                 <span className="badge bg-navy-subtle text-navy border px-3 py-2 rounded-pill">Hybrid Work</span>
                 <span className="badge bg-navy-subtle text-navy border px-3 py-2 rounded-pill">Training Funds</span>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
                <div className="position-relative p-3">
                    <img src={cultureImg} alt="SIMBESI Growth Mindset" className="img-fluid rounded-5 shadow-sm bg-light p-2" />
                    <div className="exp-badge-alt shadow">Growth Mindset</div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MODERN JOB BOARD */}
      <section ref={jobBoardRef} className="bg-dark py-5">
        <div className="container py-5">
          <div className="row mb-5 justify-content-between align-items-end">
            <div className="col-lg-6 text-white">
              <h2 className="display-6 fw-bold">Ready to make an impact?</h2>
              <p className="text-white-50">Explore our active roles and find your perfect fit.</p>
            </div>
            <div className="col-lg-auto">
              <a href="mailto:hr@simbesi.com" className="text-primary fw-bold text-decoration-none border-bottom border-primary pb-1">
                Send CV Directly →
              </a>
            </div>
          </div>

          <div className="row g-4">
            {JOBS_DATA.map((job, idx) => (
              <div className="col-md-6 col-lg-3" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="job-tile-modern p-4 rounded-4 h-100 transition-all">
                   <div className="d-flex justify-content-between mb-4">
                      <div className="icon-box-sm bg-primary bg-opacity-10 text-primary rounded-3">
                        <i className="bi bi-rocket-takeoff-fill"></i>
                      </div>
                      <span className="small text-white-50">{job.type}</span>
                   </div>
                   <h5 className="text-white fw-bold mb-2">{job.title}</h5>
                   <p className="small text-white-50 mb-4">{job.exp}</p>
                   <a href="mailto:hr@simbesi.com" className="btn btn-sm btn-outline-primary w-100 rounded-pill py-2">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .fw-900 { font-weight: 900; }
        .ls-neg-2 { letter-spacing: -2px; }
        .text-navy { color: #001d3d; }
        .bg-navy-subtle { background-color: #e6f0ff; }
        
        .text-gradient-primary {
          background: linear-gradient(90deg, #0d6efd, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-mesh-overlay {
          position: absolute; top:0; left:0; width:100%; height:100%;
          background: linear-gradient(45deg, rgba(13,110,253,0.1) 0%, rgba(0,0,0,0.8) 100%);
        }

        .border-glass { border: 8px solid rgba(255,255,255,0.1); backdrop-filter: blur(4px); }
        
        .floating-info-card {
          position: absolute; bottom: 20px; right: -20px;
          background: white; padding: 12px 20px; border-radius: 12px;
          animation: floatY 4s ease-in-out infinite;
          z-index: 2;
        }

        .exp-badge, .exp-badge-alt {
          position: absolute; top: 30px; padding: 10px 20px;
          background: #0d6efd; color: white; font-weight: bold;
          border-radius: 0 50px 50px 0; font-size: 0.8rem;
          z-index: 2;
        }
        .exp-badge-alt { right: 0; border-radius: 50px 0 0 50px; background: #001d3d; }

        .job-tile-modern {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .job-tile-modern:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: #0d6efd;
          transform: translateY(-8px);
        }

        .pulse-green {
          width: 10px; height: 10px; background: #28a745;
          border-radius: 50%; animation: pulseG 2s infinite;
        }

        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulseG {
          0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(40, 167, 69, 0); }
          100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
        }
        
        .shadow-blue { box-shadow: 0 10px 25px rgba(13,110,253,0.4); }
        .transition-all { transition: all 0.3s ease; }
      `}</style>
    </div>
  );
};

export default LifeSimbesi;