import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async'; 
import { useNavigate } from "react-router-dom";
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
  { title: "Healthcare", img: healthImg, icon: "bi-heart-pulse-fill", desc: "Turning unsettled questions into catalytic change through custom health tech." },
  { title: "Banking & Finance", img: bankImg, icon: "bi-shield-lock-fill", desc: "Secure, fast, and scalable financial software and mobile applications." },
  { title: "Education & E-Learning", img: eduImg, icon: "bi-book-half", desc: "Making education universal with powerful, interactive management tools." },
  { title: "Travel & Ticketing", img: travelImg, icon: "bi-airplane-engines", desc: "Custom e-ticketing portals and kiosks leveraging modern technologies." },
  { title: "Real Estate & Housing", img: realEstateImg, icon: "bi-building-up", desc: "Invincible real estate applications for web and smartphones." },
  { title: "Events & Media", img: eventImg, icon: "bi-mic-fill", desc: "End-to-end entertainment solutions to streamline user experience." },
  { title: "Restaurants", icon: "bi-shop", img: restaurantImg, desc: "Next-gen tech for order tracking, digital menus, and detailed reports." },
  { title: "Sports", icon: "bi-dribbble", img: sportsImg, desc: "Platforms like sports web and mobile apps that channelize revenue." }
];

const IosAppDev = () => {
  const navigate = useNavigate();
  const handleRedirectToStory = () => navigate("/careers");
  const handlebtn = () => navigate("/contact");

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-out-back' });
  }, []);

  return (
    <div className="ios-service-page brand-bg-dark">
      <Helmet>
        <title>Premium iOS App Development Services | SIMBESI</title>
        <meta name="description" content="SIMBESI specializes in high-end iOS development for the premium Apple ecosystem." />
      </Helmet>

      {/* 1. HERO SECTION (Banner Fix Applied) */}
     <section className="ios-hero-modern">
  {/* The background image is now a floating card on the right for depth */}
  <div className="ios-bg-accent" style={{ backgroundImage: `url(${iosHeroBanner})` }}></div>
  
  <div className="container position-relative z-3">
    <div className="row min-vh-100 align-items-center">
      <div className="col-lg-7" data-aos="zoom-out-up">
        
        {/* Floating Glass Badge */}
        <div className="glass-badge-wrapper mb-4">
          <span className="modern-badge">
            <span className="pulse-dot"></span> Swift & Objective-C Excellence
          </span>
        </div>

        {/* Large Typography with Bracketing */}
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

        {/* Asymmetrical Buttons */}
        <div className="hero-action-footer mt-5">
          <button className="btn-modern-primary" onClick={handleRedirectToStory}>
            Explore Careers <i className="bi bi-arrow-up-right ms-2"></i>
          </button>
          <button className="btn-modern-link ms-lg-4" onClick={handlebtn}>
            Contact Architect <span className="link-line"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>{`
  .ios-hero-modern {
    position: relative;
    background: #00040a; /* Matches your Home.jsx bg */
    overflow: hidden;
    min-vh: 100vh;
  }

  /* Moves the image to the right with a sharp geometric crop */
  .ios-bg-accent {
    position: absolute;
    top: 0%;
    right: -5%;
    width: 50%;
    height: 80%;
    background-size: cover;
    background-position: center;
    border-radius: 40px 0 0 40px;
    opacity: 0.5;
    mask-image: linear-gradient(to left, black 60%, transparent 100%);
    z-index: 1;
  }

  /* Badge with a soft pulse animation */
  .modern-badge {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(75, 201, 225, 0.3);
    color: #4bc9e1;
    padding: 10px 24px;
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
    display: inline-flex;
    align-items: center;
  }

  .pulse-dot {
    height: 8px;
    width: 8px;
    background-color: #4bc9e1;
    border-radius: 50%;
    display: inline-block;
    margin-right: 12px;
    box-shadow: 0 0 8px #4bc9e1;
    animation: pulse-cyan 2s infinite;
  }

  /* Typography */
  .ultra-display {
    font-size: 5rem;
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -2px;
  }

  .sub-display {
    font-size: 3rem;
    font-weight: 300;
    margin-top: 10px;
  }

  .brand-cyan-glow {
    color: #4bc9e1;
    text-shadow: 0 0 30px rgba(75, 201, 225, 0.4);
  }

  .modern-lead {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.6);
    max-width: 550px;
    line-height: 1.6;
    border-left: 2px solid #4bc9e1;
    padding-left: 25px;
  }

  /* Primary Button - Boxy & Techy */
  .btn-modern-primary {
    background: #4bc9e1;
    color: #000;
    border: none;
    padding: 18px 45px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .btn-modern-primary:hover {
    background: #fff;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.4);
  }

  /* Link Button with Animated Underline */
  .btn-modern-link {
    background: transparent;
    color: #fff;
    border: none;
    font-weight: 600;
    position: relative;
    padding: 10px 0;
  }

  .link-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background: #4bc9e1;
    transition: 0.4s;
  }

  .btn-modern-link:hover .link-line {
    width: 100%;
  }

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

      {/* 2. PHILOSOPHY & SIDE IMAGE */}
      <section className="py-5 overflow-hidden">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="flip-left" data-aos-duration="1500">
              <div className="ios-side-frame">
                <img src={iosSideImg} alt="iOS Architecture" className="img-fluid rounded-5 shadow-2xl" />
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
                      <span className="text-white">{item}</span>
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
            <p className="text-light opacity-50 max-w-700 mx-auto">Custom iOS solutions that keep your business one step ahead in the digital landscape.</p>
          </div>

          <div className="row g-4">
            {INDUSTRIES.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay={index * 100}>
                <div className="ios-industry-card-dark overflow-hidden">
                  <div className="industry-img-container">
                    <img src={item.img} alt={item.title} className="card-img-top industry-img" />
                    <div className="industry-icon-overlay-brand">
                      <i className={`bi ${item.icon} text-white fs-2`}></i>
                    </div>
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold mb-2 text-white">{item.title}</h5>
                    <p className="small text-light opacity-75 mb-3">{item.desc}</p>
                    <button className="brand-link-btn">
                      Read More <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
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

        .brand-bg-dark { background-color: var(--bg-dark); min-height: 100vh; }
        .brand-bg-navy-accent { background-color: #010a14; }
        .brand-cyan { color: var(--brand-cyan) !important; }

        /* --- HERO --- */
        .ios-hero { 
          background-size: contain; 
          background-repeat: no-repeat;
          background-position: right center; 
          background-color: #001226;
          position: relative; 
        }
        .ios-hero-overlay {
          background: linear-gradient(90deg, var(--bg-dark) 40%, rgba(0,0,0,0.3) 100%);
        }

        /* --- BUTTONS & BADGES --- */
        .brand-badge { 
          background: rgba(75, 201, 225, 0.1); 
          color: var(--brand-cyan); 
          padding: 8px 20px; 
          border-radius: 50px; 
          font-weight: 700; 
          font-size: 0.8rem; 
          display: inline-block; 
          border: 1px solid rgba(75, 201, 225, 0.3); 
        }

        .btn-cyan-ios { 
          background: var(--brand-cyan); color: var(--brand-navy); 
          border: none; padding: 14px 35px; border-radius: 12px; 
          font-weight: 700; transition: 0.3s; 
        }
        .btn-cyan-ios:hover { background: white; transform: translateY(-3px); }

        .btn-outline-ios { 
          background: rgba(255,255,255,0.05); color: white; 
          border: 1px solid rgba(255,255,255,0.2); 
          padding: 14px 35px; border-radius: 12px; transition: 0.3s; 
        }

        /* --- CARDS & GLASS --- */
        .ios-glass-mini-card { 
          background: var(--card-bg); 
          padding: 15px; border-radius: 15px; 
          border: 1px solid rgba(75, 201, 225, 0.1);
        }

        .ios-industry-card-dark { 
          background: var(--card-bg); 
          border-radius: 24px; border: 1px solid rgba(75, 201, 225, 0.1); 
          height: 100%; transition: 0.4s; 
        }
        .ios-industry-card-dark:hover { 
          transform: scale(1.03); 
          border-color: var(--brand-cyan); 
          box-shadow: 0 15px 35px rgba(0,0,0,0.5);
        }

        .floating-glass-card {
          position: absolute; bottom: 30px; right: 20px;
          background: rgba(1, 22, 46, 0.8);
          backdrop-filter: blur(10px);
          padding: 20px; border-radius: 20px;
          border: 1px solid var(--brand-cyan);
        }

        .industry-img-container { position: relative; height: 180px; overflow: hidden; }
        .industry-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }
        .industry-icon-overlay-brand {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(75, 201, 225, 0.2); 
          display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s;
        }
        .ios-industry-card-dark:hover .industry-icon-overlay-brand { opacity: 1; }

        .brand-link-btn { 
          border: none; background: transparent; color: var(--brand-cyan); 
          font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; gap: 5px; 
        }

        @media (max-width: 991px) {
          .ios-hero { background-size: cover; background-position: center; }
          .ios-hero-overlay { background: rgba(0,0,0,0.8); }
        }
      `}</style>
    </div>
  );
};

export default IosAppDev;