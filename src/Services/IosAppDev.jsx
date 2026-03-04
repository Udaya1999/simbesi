import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async'; 
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import iosHeroBanner from "../assets/img/services/aboutbanne1.jpg"; 
import iosSideImg from "../assets/img/servicesright.jpg"; 

// --- Industry Image Imports ---
import healthImg from "../assets/img/byindustry/hc.jpg";
import bankImg from "../assets/img/byindustry/bfdev.jpg";
import eduImg from "../assets/img/byindustry/el1.jpg";
import travelImg from "../assets/img/byindustry/travel.jpg";
import realEstateImg from "../assets/img/byindustry/rh1.jpg";
import eventImg from "../assets/img/byindustry/et1.jpg";
import restaurantImg from "../assets/img/byindustry/restaurant2.png";
import sportsImg from "../assets/img/byindustry/sports7.jpg";

const INDUSTRIES = [
  { title: "Healthcare", img: healthImg, icon: "bi-heart-pulse", desc: "Turning unsettled questions into catalytic change through custom health tech.", path: "/healthcare" },
  { title: "Banking & Finance", img: bankImg, icon: "bi-bank", desc: "Secure, fast, and scalable financial software and mobile portals.", path: "/BankingFinance" },
  { title: "Education & E-Learning", img: eduImg, icon: "bi-mortarboard", desc: "Making education universal with powerful, interactive management tools.", path: "/Education" },
  { title: "Travel & Ticketing", img: travelImg, icon: "bi-ticket-perforated", desc: "Custom e-ticketing portals and kiosks leveraging modern technologies.", path: "/TravelTicketing" },
  { title: "Real Estate & Housing", img: realEstateImg, icon: "bi-house-heart", desc: "Invincible real estate applications for maximum engagement and connectivity.", path: "/RealEstateHousing" },
  { title: "Events & Media", img: eventImg, icon: "bi-calendar-event", desc: "End-to-end entertainment solutions to streamline user experience.", path: "/EventsMedia" },
  { title: "Restaurants", img: restaurantImg, icon: "bi-egg-fried", desc: "Next-gen tech for order tracking, digital menus, and detailed reports.", path: "/Restaurants" },
  { title: "Sports", img: sportsImg, icon: "bi-trophy", desc: "Channelizing revenue through high-traffic sports web and mobile platforms.", path: "/Sports" }
];

const IosAppDev = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false, 
      easing: 'ease-out-back' 
    });
  }, []);

  return (
    <div className="ios-service-page brand-bg-dark">
      <Helmet>
        <title>Premium iOS App Development Services | SIMBESI</title>
        <meta name="description" content="SIMBESI specializes in high-end iOS development for the premium Apple ecosystem." />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="ios-hero-modern">
        <div className="ios-bg-accent" style={{ backgroundImage: `url(${iosHeroBanner})` }}></div>
        
        <div className="container position-relative z-3">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-7" data-aos="zoom-out-up">
              
              <div className="glass-badge-wrapper mb-4">
                <span className="modern-badge">
                  <span className="pulse-dot"></span> Swift & Objective-C Excellence
                </span>
              </div>

              <div className="hero-text-bracket">
                <h1 className="ultra-display text-white">
                  We WORK on your <br />
                  <span className="brand-cyan-glow">IDEAS</span>
                </h1>
                <h2 className="sub-display text-white-50">
                  to make your <span className="brand-cyan">IDEAS WORK</span>
                </h2>
              </div>

              <p className="modern-lead mt-4">
                SIMBESI specializes in high-end iOS development. We bridge the gap 
                between <span className="text-white">luxury design</span> and <span className="text-white">technical performance</span>.
              </p>

              <div className="hero-action-footer mt-5 d-flex flex-wrap gap-3">
                <button className="btn-modern-primary" onClick={() => navigate("/careers")}>
                  Explore Careers <i className="bi bi-arrow-up-right ms-2"></i>
                </button>
                <button className="btn-modern-link" onClick={() => navigate("/contact")}>
                  Contact Architect <span className="link-line"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & SIDE IMAGE */}
      <section className="py-5 overflow-hidden">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="flip-left" data-aos-duration="1500">
              <div className="ios-side-frame position-relative">
                <img src={iosSideImg} alt="iOS Architecture" className="img-fluid rounded-5 shadow-lg" />
                <div className="floating-glass-card">
                   <h5 className="mb-0 fw-bold brand-cyan">99.9%</h5>
                   <small className="text-white">Crash-Free Sessions</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="display-5 fw-bold mb-4 text-white">Mastering <span className="brand-cyan">iOS Intricacies</span></h2>
              <p className="fs-5 text-light opacity-75 mb-4">
                iOS users expect perfection. We minimize indigenous complexities through proprietary research to drive productivity and seamless UX.
              </p>
              
              <div className="row g-3">
                {["Native Swift UI", "Apple Watch Kits", "Secure FaceID Auth", "iCloud Integration"].map((item, i) => (
                  <div className="col-6" key={i}>
                    <div className="ios-glass-mini-card">
                      <i className="bi bi-check-circle-fill brand-cyan me-2"></i> 
                      <span className="text-white fw-bold small">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY SOLUTIONS */}
      <section className="py-5 brand-bg-navy-accent">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-6 mb-3 text-white">Industry-Specific <span className="brand-cyan">Innovation</span></h2>
            <p className="text-light opacity-50 mx-auto" style={{ maxWidth: '700px' }}>Custom iOS solutions that keep your business one step ahead in the digital landscape.</p>
          </div>

          <div className="row g-4">
            {INDUSTRIES.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay={index * 100}>
                <div className="ios-industry-card-dark overflow-hidden h-100 d-flex flex-column">
                  <div className="industry-img-container">
                    <img src={item.img} alt={item.title} className="industry-img" />
                    <div className="industry-icon-overlay-brand">
                      <i className={`bi ${item.icon} text-white fs-2`}></i>
                    </div>
                  </div>
                  <div className="p-4 flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="fw-bold mb-2 text-white">{item.title}</h5>
                      <p className="small text-light opacity-75 mb-3">{item.desc}</p>
                    </div>
                    <Link to={item.path} className="text-decoration-none brand-cyan fw-bold small d-inline-flex align-items-center transition-link">
                      Read More <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        :root {
          --brand-cyan: #4bc9e1;
          --bg-dark: #00040a;
          --card-bg: #01162e;
        }

        .brand-bg-dark { background-color: var(--bg-dark); min-height: 100vh; }
        .brand-bg-navy-accent { background-color: #010a14; }
        .brand-cyan { color: var(--brand-cyan) !important; }

        /* --- HERO --- */
        .ios-hero-modern { position: relative; background: var(--bg-dark); overflow: hidden; }
        .ios-bg-accent {
          position: absolute; top: 0; right: -5%; width: 50%; height: 80%;
          background-size: cover; background-position: center; border-radius: 40px 0 0 40px;
          opacity: 0.5; mask-image: linear-gradient(to left, black 60%, transparent 100%);
          z-index: 1;
        }

        .ultra-display { font-size: clamp(3rem, 8vw, 5rem); font-weight: 800; line-height: 0.9; letter-spacing: -2px; }
        .sub-display { font-size: clamp(1.5rem, 4vw, 3rem); font-weight: 300; margin-top: 10px; }
        .brand-cyan-glow { color: var(--brand-cyan); text-shadow: 0 0 30px rgba(75, 201, 225, 0.4); }

        .modern-badge {
          background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(75, 201, 225, 0.3);
          color: var(--brand-cyan); padding: 10px 24px; border-radius: 100px; font-size: 0.85rem;
          backdrop-filter: blur(10px); display: inline-flex; align-items: center;
        }

        .pulse-dot {
          height: 8px; width: 8px; background-color: var(--brand-cyan); border-radius: 50%;
          display: inline-block; margin-right: 12px; box-shadow: 0 0 8px var(--brand-cyan);
          animation: pulse-cyan 2s infinite;
        }

        .modern-lead {
          font-size: 1.1rem; color: rgba(255,255,255,0.6); max-width: 550px;
          line-height: 1.6; border-left: 2px solid var(--brand-cyan); padding-left: 25px;
        }

        /* --- BUTTONS --- */
        .btn-modern-primary {
          background: var(--brand-cyan); color: #000; border: none; padding: 16px 40px;
          font-weight: 700; text-transform: uppercase; transition: 0.3s ease;
        }
        .btn-modern-primary:hover { background: #fff; transform: translateY(-5px); }

        .btn-modern-link {
          background: transparent; color: #fff; border: none; font-weight: 600;
          position: relative; padding: 10px 0;
        }
        .link-line { position: absolute; bottom: 0; left: 0; width: 30px; height: 2px; background: var(--brand-cyan); transition: 0.4s; }
        .btn-modern-link:hover .link-line { width: 100%; }

        /* --- CARDS --- */
        .ios-industry-card-dark {
          background: var(--card-bg); border-radius: 20px; border: 1px solid rgba(75, 201, 225, 0.1);
          transition: 0.4s ease;
        }
        .ios-industry-card-dark:hover { transform: translateY(-10px); border-color: var(--brand-cyan); }

        .industry-img-container { position: relative; height: 180px; overflow: hidden; }
        .industry-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
        .industry-icon-overlay-brand {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(75, 201, 225, 0.2); display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: 0.3s; backdrop-filter: blur(2px);
        }
        .ios-industry-card-dark:hover .industry-icon-overlay-brand { opacity: 1; }

        .floating-glass-card {
          position: absolute; bottom: 20px; right: -10px; background: rgba(1, 22, 46, 0.9);
          backdrop-filter: blur(10px); padding: 15px; border-radius: 15px; border: 1px solid var(--brand-cyan);
        }

        .ios-glass-mini-card {
          background: rgba(255,255,255,0.03); padding: 15px; border-radius: 12px;
          border: 1px solid rgba(75, 201, 225, 0.1);
        }

        .transition-link { transition: 0.3s; }
        .transition-link:hover { color: #fff !important; transform: translateX(5px); }

        @keyframes pulse-cyan {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(75, 201, 225, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(75, 201, 225, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(75, 201, 225, 0); }
        }

        @media (max-width: 991px) {
          .ultra-display { font-size: 3rem; }
          .sub-display { font-size: 1.8rem; }
          .ios-bg-accent { width: 100%; right: 0; opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default IosAppDev;