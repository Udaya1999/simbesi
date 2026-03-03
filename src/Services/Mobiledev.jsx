import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import crossHeroImg from "../assets/img/features-2.svg"; 
import crossSideImg from "../assets/img/skills.png"; 

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
  { title: "Healthcare", img: healthImg, icon: "bi-heart-pulse", color: "#00d2ff", desc: "Digital health solutions built for cross-device patient monitoring." },
  { title: "Banking & Finance", img: bankImg, icon: "bi-safe2", color: "#3a7bd5", desc: "Unified secure portals for seamless cross-platform financial transactions." },
  { title: "Education & E-Learning", img: eduImg, icon: "bi-laptop", color: "#6a11cb", desc: "Interactive learning environments that work on any mobile OS." },
  { title: "Travel & Ticketing", img: travelImg, icon: "bi-map", color: "#2575fc", desc: "Booking engines designed for high-velocity cross-platform scaling." },
  { title: "Real Estate & Housing", img: realEstateImg, icon: "bi-house-gear", color: "#f2994a", desc: "Connected property management tools for agents on the move." },
  { title: "Events & Media", img: eventImg, icon: "bi-play-circle", color: "#eb5757", desc: "Engagement-focused entertainment apps with unified streaming logic." },
  { title: "Restaurants", img: restaurantImg, icon: "bi-bag-check", color: "#27ae60", desc: "Streamlined order tracking solutions for both iOS and Android users." },
  { title: "Sports", img: sportsImg, icon: "bi-activity", color: "#2f80ed", desc: "Real-time sports data platforms with channelized revenue streams." }
];

const MobileDev = () => {
    const navigate = useNavigate();
         const handleRedirectToStory2 = () => {
          navigate("/carrers"); 
        };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-out-back' });
  }, []);

  return (
    <div className="mobile-dev-page">
      {/* 1. DUAL-THEME HERO SECTION */}
      <section className="cross-hero">
        <div className="container">
          <div className="row min-vh-100 align-items-center py-5">
            <div className="col-lg-7" data-aos="fade-up">
              <div className="platform-pills mb-4">
                <span className="pill flutter">Flutter</span>
                <span className="pill react-native">React Native</span>
                <span className="pill pwa">PWA</span>
              </div>
              <h1 className="display-3 fw-bold text-white mb-4">
                One <span className="text-gradient-cross">Codebase</span>, <br />
                Limitless <span className="text-white">Possibilities.</span>
              </h1>
              <p className="lead text-white-50 mb-5">
                We WORK on your <strong>IDEAS</strong> to make your <strong>IDEAS WORK</strong> across every platform. 
                Our cross-platform solutions allow you to dominate the market without burning 
                a hole in your pocket.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn-cross-primary" onClick={handleRedirectToStory2}>Explore Careers</button>
                <button className="btn-cross-outline">Unified Strategy</button>
              </div>
            </div>
            <div className="col-lg-5 text-center" data-aos="zoom-in">
              <img src={crossHeroImg} alt="Cross Platform" className="img-fluid floating-hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE EFFICIENCY PHILOSOPHY */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-lg-2" data-aos="fade-left">
              <h2 className="display-5 fw-bold mb-4">Solving Complexities via <span className="text-primary">Unified Engineering</span></h2>
              <p className="fs-5 text-muted">
                Every industry faces "Indigenous Intricacies" that spike operational costs. 
                Whether it's fragmented user data or productivity tug-of-wars, our 
                cross-platform approach eliminates redundancy.
              </p>
              <blockquote className="custom-quote mt-4">
                "We understand better, that is why we deliver better. Our proprietary research drives 
                efficiency to keep your business always one step ahead."
              </blockquote>
            </div>
            <div className="col-lg-6 order-lg-1" data-aos="fade-right">
              <div className="side-img-wrapper">
                <img src={crossSideImg} alt="Tech Skills" className="img-fluid rounded-4" />
                <div className="efficiency-tag">
                   <span>Reduced Dev Time by 40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY SOLUTIONS: HYBRID GRID */}
      <section className="bg-light py-5">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-down">
            <h2 className="display-6 fw-bold mb-3">Bespoke <span className="text-primary">Vertical Solutions</span></h2>
            <p className="text-muted">Proprietary research translated into multi-platform digital assets.</p>
          </div>

          <div className="row g-4">
            {INDUSTRIES.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="cross-industry-card">
                  <div className="img-box">
                    <img src={item.img} alt={item.title} />
                    <div className="icon-overlay" style={{ background: item.color }}>
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                  </div>
                  <div className="content-box">
                    <h5>{item.title}</h5>
                    <p className="text-muted small">{item.desc}</p>
                    <a href="#" className="read-more-btn" style={{ color: item.color }}>
                      Discover More <i className="bi bi-arrow-right-short"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* --- CROSS PLATFORM THEME --- */
        .cross-hero {
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          position: relative;
          overflow: hidden;
        }
        .text-gradient-cross {
          background: linear-gradient(to right, #00d2ff, #3a7bd5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* --- PILLS --- */
        .platform-pills { display: flex; gap: 10px; flex-wrap: wrap; }
        .pill {
          padding: 5px 15px; border-radius: 20px; font-size: 0.75rem; 
          font-weight: 700; text-transform: uppercase; border: 1px solid rgba(255,255,255,0.2);
          color: white; background: rgba(255,255,255,0.05);
        }
        .pill.flutter { border-color: #02569B; color: #02569B; background: #fff; }
        .pill.react-native { border-color: #61DAFB; color: #61DAFB; }

        /* --- BUTTONS --- */
        .btn-cross-primary {
          background: #3a7bd5; color: white; border: none;
          padding: 15px 40px; border-radius: 50px; font-weight: 700;
          transition: 0.3s; box-shadow: 0 10px 20px rgba(58, 123, 213, 0.3);
        }
        .btn-cross-primary:hover { transform: translateY(-3px); background: #00d2ff; }

        .btn-cross-outline {
          background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3);
          padding: 15px 40px; border-radius: 50px; transition: 0.3s;
        }

        /* --- INDUSTRY CARDS --- */
        .cross-industry-card {
          background: white; border-radius: 20px; overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05); height: 100%;
          transition: 0.3s ease;
        }
        .cross-industry-card:hover { transform: translateY(-10px); }
        
        .img-box { position: relative; height: 160px; }
        .img-box img { width: 100%; height: 100%; object-fit: cover; }
        .icon-overlay {
          position: absolute; bottom: -20px; right: 20px;
          width: 50px; height: 50px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 1.5rem; border: 4px solid white;
        }

        .content-box { padding: 35px 25px 25px; }
        .read-more-btn { 
          text-decoration: none; font-weight: 700; font-size: 0.85rem; 
          display: flex; align-items: center; gap: 5px; 
        }

        /* --- UTILS --- */
        .custom-quote {
          border-left: 5px solid #3a7bd5; padding-left: 20px;
          font-style: italic; color: #444; font-weight: 500;
        }
        .side-img-wrapper { position: relative; }
        .efficiency-tag {
          position: absolute; top: 20px; right: 20px;
          background: rgba(255,255,255,0.9); backdrop-filter: blur(10px);
          padding: 10px 20px; border-radius: 50px; font-weight: 800;
          color: #3a7bd5; font-size: 0.8rem; box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .floating-hero-img { animation: floatHero 6s infinite ease-in-out; }
        @keyframes floatHero {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default MobileDev;