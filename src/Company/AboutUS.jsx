import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Moved to top level
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import techInnovationImg from "../assets/img/skills.png";
import teamGlobeImg from "../assets/img/aboutus1.png";
import costImg from "../assets/img/features-1.svg"; 
import supportImg from "../assets/img/features-2.svg";
import experienceImg from "../assets/img/features-3.svg";
import innovateImg from "../assets/img/features-4.svg";
import relationImg from "../assets/img/features-5.svg";
import qualityImg from "../assets/img/features-6.svg";

const WHY_PARTNER_DATA = [
  { id: "cost", title: "Cost Effective", icon: "bi-binoculars", img: costImg, text: "Save thousands in overhead while gaining elite development power." },
  { id: "support", title: "Flexible Support", icon: "bi-box-seam", img: supportImg, text: "A chameleon-like support model that adapts to your scaling needs." },
  { id: "exp", title: "Deep Experience", icon: "bi-sun", img: experienceImg, text: "Battle-tested developers who have built world-class architectures." },
  { id: "innovate", title: "Innovation First", icon: "bi-command", img: innovateImg, text: "We don't just code; we engineer creative solutions for hard problems." },
  { id: "relation", title: "Client Oriented", icon: "bi-easel", img: relationImg, text: "Transparent partnerships where your ROI is our primary metric." },
  { id: "quality", title: "Quality Driven", icon: "bi-map", img: qualityImg, text: "Vetted code quality that ensures your product scales without debt." }
];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(WHY_PARTNER_DATA[0]);
  const navigate = useNavigate(); // Correct: Call at top level

  useEffect(() => {
    AOS.init({ 
        duration: 1200, 
        once: false, 
        mirror: true,
        easing: 'ease-out-back' 
    });
  }, []);

  const handleRedirectToStory = () => {
    navigate("/contact"); 
  };

  return (
    <div className="modern-about">
      {/* --- HERO SECTION --- */}
      <section className="hero-visual d-flex align-items-center">
        <div className="animated-bg-shape"></div>
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="zoom-out-right">
              <div className="glass-tag mb-3">#DigitalFuture</div>
              <h1 className="hero-title">
                Who We <span className="text-gradient">Are</span>
              </h1>
              <p className="hero-para">
                Simbesi isn't just a tech company. We are the architects of 
                <strong> digital evolution</strong>. We transform legacy ideas 
                into future-proof realities.
              </p>
              <button onClick={handleRedirectToStory} className="btn-modern mt-4">Discover More</button>
            </div>
            <div className="col-lg-6" data-aos="flip-left" data-aos-delay="300">
              <div className="hero-blob-wrapper">
                <img src={techInnovationImg} alt="Simbesi" className="img-fluid floating-hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE PARTNER SECTION --- */}
      
      <section className="partner-reveal py-5">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-down">
            <h2 className="section-heading">Why Choose <span className="text-primary">Simbesi?</span></h2>
            <p className="text-muted">Interactive Innovation at your fingertips</p>
          </div>

          <div className="row g-4 align-items-center">
            {/* Left: Navigation Grid */}
            <div className="col-lg-5">
              <div className="row g-3">
                {WHY_PARTNER_DATA.map((item, index) => (
                  <div key={item.id} className="col-6" data-aos="fade-right" data-aos-delay={index * 100}>
                    <div 
                      className={`nav-pill-card ${activeTab.id === item.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(item)}
                    >
                      <i className={`bi ${item.icon}`}></i>
                      <span>{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: The Content Theater */}
            <div className="col-lg-7" data-aos="zoom-in-up">
              <div className="theater-card shadow-lg">
                <div className="theater-header">
                   <div className="browser-dots"><span></span><span></span><span></span></div>
                   <span className="tab-name text-dark fw-bold">{activeTab.title}</span>
                </div>
                <div className="theater-body">
                  <div className="row align-items-center g-4">
                    <div className="col-md-6 content-animate" key={activeTab.id}>
                      <h3 className="fw-bold mb-3">{activeTab.title}</h3>
                      <p className="text-muted fs-5">{activeTab.text}</p>
                    </div>
                    <div className="col-md-6 text-center">
                      <img src={activeTab.img} className="img-fluid reveal-img" alt="Illustration" style={{maxHeight: '200px'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISION SECTION --- */}
      <section className="vision-skew py-5">
        <div className="container py-5">
          <div className="row align-items-center flex-row-reverse g-5">
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="display-4 fw-bold">Our Vision</h2>
              <div className="line-grow mb-4"></div>
              <p className="text-muted fs-5">
                We believe code is an art form. Every pixel and every function 
                is designed to make your business more competitive in a 
                hyper-digital world.
              </p>
            </div>
            <div className="col-lg-6" data-aos="perspective-reveal">
              <div className="vision-image-frame">
                <img src={teamGlobeImg} alt="Vision" className="img-fluid rounded-5 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        :root {
          --primary: #0d6efd;
          --accent: #00d4ff;
          --dark: #001428;
        }

        .hero-visual {
          min-height: 90vh;
          background: var(--dark);
          position: relative;
          overflow: hidden;
          color: white;
        }

        .animated-bg-shape {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(13,110,253,0.15) 0%, transparent 70%);
          top: -200px;
          right: -100px;
          border-radius: 50%;
          animation: pulse-bg 10s infinite alternate;
        }

        @keyframes pulse-bg {
          0% { transform: scale(1) translate(0,0); }
          100% { transform: scale(1.2) translate(-50px, 50px); }
        }

        .text-gradient {
          background: linear-gradient(90deg, #fff, var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-title { font-size: 4.5rem; font-weight: 800; line-height: 1.1; }
        .hero-para { font-size: 1.25rem; opacity: 0.8; max-width: 500px; margin-top: 20px; }

        .glass-tag {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 5px 15px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.2);
          font-size: 0.9rem;
        }

        .btn-modern {
          padding: 12px 35px;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.4s;
          box-shadow: 0 10px 20px rgba(13, 110, 253, 0.3);
        }

        .nav-pill-card {
          padding: 25px 15px;
          background: #f8f9fa;
          border-radius: 20px;
          cursor: pointer;
          transition: 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .nav-pill-card.active {
          background: var(--dark);
          color: white;
          transform: scale(1.05);
        }

        .theater-card { background: white; border-radius: 25px; overflow: hidden; }
        .theater-header { background: #f1f3f5; padding: 12px 20px; display: flex; align-items: center; justify-content: space-between; }
        .browser-dots span { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 6px; }
        .browser-dots span:nth-child(1) { background: #ff5f56; }
        .browser-dots span:nth-child(2) { background: #ffbd2e; }
        .browser-dots span:nth-child(3) { background: #27c93f; }

        .content-animate { animation: slideInText 0.6s ease-out forwards; }
        @keyframes slideInText { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }

        .floating-hero { animation: hero-float 6s ease-in-out infinite; }
        @keyframes hero-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }

        .line-grow { width: 80px; height: 5px; background: var(--primary); border-radius: 50px; }
      `}</style>
    </div>
  );
};

export default AboutUs;