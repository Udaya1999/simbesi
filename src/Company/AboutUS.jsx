import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import techInnovationImg from "../assets/img/skills.png";
import teamGlobeImg from "../assets/img/aboutus1.png";
import visionPyramid from "../assets/img/about.jpg"; 
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
  const navigate = useNavigate();
  
  // 1. STATE FOR "WHY CHOOSE"
  const [partnerIndex, setPartnerIndex] = useState(0);
  const activePartner = WHY_PARTNER_DATA[partnerIndex];

  // 2. STATE FOR "VISION & MISSION" (Now at the bottom)
  const [visionTab, setVisionTab] = useState("vision");
  const visionKeys = useMemo(() => ["vision", "mission", "expertise"], []);

  const visionData = useMemo(() => ({
    vision: {
      title: "Our Vision",
      lead: "Create enduring value for clients whilst being a pioneer in the latest technology.",
      body: "Our vision supports us as a rock-solid foundation to be a leader in the IT industry and foster a relationship of trust with our clients."
    },
    mission: {
      title: "Our Mission",
      lead: "To empower businesses through seamless digital integration and innovative software development strategies.",
      body: "We strive to bridge the gap between complex technology and practical business solutions."
    },
    expertise: {
      title: "Our Expertise",
      lead: "Highly experienced developers making sure every product meets specific requirements.",
      body: "From cloud architecture to custom mobile applications, we build with scalability in mind."
    }
  }), []);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false, mirror: true, easing: 'ease-out-back' });

    // Auto-cycle Why Choose (4s)
    const partnerTimer = setInterval(() => {
      setPartnerIndex((prev) => (prev + 1) % WHY_PARTNER_DATA.length);
    }, 4000);

    // Auto-cycle Vision (3.5s)
    const visionTimer = setInterval(() => {
      setVisionTab((prev) => {
        const nextIdx = (visionKeys.indexOf(prev) + 1) % visionKeys.length;
        return visionKeys[nextIdx];
      });
    }, 3500);

    return () => {
      clearInterval(partnerTimer);
      clearInterval(visionTimer);
    };
  }, [visionKeys]);

  return (
    <div className="modern-about pb-5">
      {/* --- 1. HERO SECTION --- */}
      <section className="hero-visual d-flex align-items-center">
        <div className="animated-bg-shape"></div>
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="zoom-out-right">
              <div className="glass-tag mb-3">#DigitalFuture</div>
              <h1 className="hero-title">Who We <span className="text-gradient">Are</span></h1>
              <p className="hero-para">
                Simbesi isn't just a tech company. We are the architects of <strong>digital evolution</strong>.
              </p>
              <button onClick={() => navigate("/contact")} className="btn-modern mt-4">Discover More</button>
            </div>
            <div className="col-lg-6 text-center" data-aos="flip-left">
              <img src={techInnovationImg} alt="Simbesi" className="img-fluid floating-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. WHY CHOOSE SECTION --- */}
      <section className="partner-reveal py-5">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-down">
            <h2 className="section-heading">Why Choose <span className="text-logo-blue">Simbesi?</span></h2>
            <p className="text-muted">Interactive Innovation at your fingertips</p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="row g-3">
                {WHY_PARTNER_DATA.map((item, index) => (
                  <div key={item.id} className="col-6">
                    <div 
                      className={`nav-pill-card ${partnerIndex === index ? 'active' : ''}`}
                      onClick={() => setPartnerIndex(index)}
                    >
                      <i className={`bi ${item.icon}`}></i>
                      <span>{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Content with Fixed Margins/Paddings */}
            <div className="col-lg-7">
              <div className="theater-card shadow-lg border-0">
                <div className="theater-header">
                   <div className="browser-dots"><span></span><span></span><span></span></div>
                   <span className="tab-name text-dark fw-bold small text-uppercase">{activePartner.title}</span>
                </div>
                <div className="theater-body p-4 p-md-5"> 
                  <div className="row align-items-center g-4">
                    <div className="col-md-7 content-animate" key={activePartner.id}>
                      <h3 className="fw-bold mb-3 display-6">{activePartner.title}</h3>
                      <p className="text-muted fs-5 leading-relaxed">{activePartner.text}</p>
                    </div>
                    <div className="col-md-5 text-center">
                      <img src={activePartner.img} className="img-fluid" alt="Feature" style={{maxHeight: '180px', objectFit: 'contain'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. VISION & MISSION SECTION (AT BOTTOM) --- */}
      
      <section className="container py-5 mt-5 mb-5 border-top">
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-5 mb-md-0" data-aos="fade-right">
            <div className="position-relative d-inline-block">
               <img src={visionPyramid} alt="Strategy" className="img-fluid rounded-5 shadow-sm" />
               <div className="position-absolute top-100 start-50 translate-middle-x bg-logo-blue rounded-circle mt-3 pulse-dot"></div>
            </div>
          </div>

          <div className="col-md-7 ps-md-5" data-aos="fade-left">
            <h6 className="text-logo-blue text-uppercase fw-bold mb-2 tracking-2">Our Core Values</h6>
            <h2 className="display-5 fw-bold text-dark mb-4">Vision & Mission</h2>
            
            <nav>
              <ul className="nav nav-pills custom-pill-nav mb-4">
                {visionKeys.map((key) => (
                  <li className="nav-item" key={key}>
                    <button 
                      className={`nav-link ${visionTab === key ? 'active' : ''} px-4 py-2 me-3 rounded-pill fw-bold border border-2 text-uppercase small`} 
                      onClick={() => setVisionTab(key)}
                      type="button">
                      {key}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="tab-content pt-2">
              <div className="tab-pane fade show active" key={visionTab}>
                <h4 className="fw-bold text-dark mb-3">{visionData[visionTab].title}</h4>
                <p className="fs-5 text-dark fw-medium border-start border-logo-blue border-4 ps-3 mb-3">
                  {visionData[visionTab].lead}
                </p>
                <p className="text-muted lead fs-6">{visionData[visionTab].body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        :root { --logo-blue: #0046AD; --dark: #001428; --accent: #00d4ff; }
        
        .text-logo-blue { color: var(--logo-blue) !important; }
        .bg-logo-blue { background-color: var(--logo-blue) !important; }
        .border-logo-blue { border-color: var(--logo-blue) !important; }

        .hero-visual { min-height: 80vh; background: var(--dark); position: relative; overflow: hidden; color: white; }
        .text-gradient { background: linear-gradient(90deg, #fff, var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-title { font-size: 4.5rem; font-weight: 800; line-height: 1.1; }

        .btn-modern {
          padding: 12px 40px;
          background: var(--logo-blue);
          color: white; border: none; border-radius: 50px; font-weight: 600;
          transition: 0.3s ease; box-shadow: 0 10px 20px rgba(0, 70, 173, 0.3);
        }
        .btn-modern:hover { transform: translateY(-3px); background: #003a8f; box-shadow: 0 15px 25px rgba(0, 70, 173, 0.4); }

        .nav-pill-card { padding: 25px 15px; background: #f8f9fa; border-radius: 20px; cursor: pointer; transition: 0.3s; display: flex; flex-direction: column; align-items: center; gap: 10px; border: 1px solid transparent; }
        .nav-pill-card.active { background: var(--dark); color: white; transform: scale(1.05); }

        .custom-pill-nav .nav-link { color: var(--logo-blue); border-color: transparent; }
        .custom-pill-nav .nav-link.active { background-color: var(--logo-blue); color: white; border-color: var(--logo-blue); }

        .theater-card { background: white; border-radius: 25px; overflow: hidden; }
        .theater-header { background: #f1f3f5; padding: 15px 25px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #dee2e6; }
        .browser-dots span { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 6px; }
        .browser-dots span:nth-child(1) { background: #ff5f56; }
        .browser-dots span:nth-child(2) { background: #ffbd2e; }
        .browser-dots span:nth-child(3) { background: #27c93f; }

        .content-animate { animation: fadeInScale 0.6s ease-out; }
        @keyframes fadeInScale { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        
        .pulse-dot { width: 15px; height: 15px; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(0, 70, 173, 0.7); } 70% { box-shadow: 0 0 0 15px rgba(0, 70, 173, 0); } 100% { box-shadow: 0 0 0 0 rgba(0, 70, 173, 0); } }

        @media (max-width: 768px) { .hero-title { font-size: 3rem; } }
      `}</style>
    </div>
  );
};

export default AboutUs;