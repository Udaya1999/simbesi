import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async'; // SEO Integration
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
  { title: "Healthcare", img: healthImg, icon: "bi-heart-pulse-fill", color: "#ff2d55", desc: "Turning unsettled questions into catalytic change through custom health tech." },
  { title: "Banking & Finance", img: bankImg, icon: "bi-shield-lock-fill", color: "#007aff", desc: "Secure, fast, and scalable financial software and mobile applications." },
  { title: "Education & E-Learning", img: eduImg, icon: "bi-book-half", color: "#5856d6", desc: "Making education universal with powerful, interactive management tools." },
  { title: "Travel & Ticketing", img: travelImg, icon: "bi-airplane-engines", color: "#af52de", desc: "Custom e-ticketing portals and kiosks leveraging modern technologies." },
  { title: "Real Estate & Housing", img: realEstateImg, icon: "bi-building-up", color: "#ff9500", desc: "Invincible real estate applications for web and smartphones." },
  { title: "Events & Media", img: eventImg, icon: "bi-mic-fill", color: "#ff3b30", desc: "End-to-end entertainment solutions to streamline user experience." },
  { title: "Restaurants", icon: "bi-shop", img: restaurantImg, color: "#34c759", desc: "Next-gen tech for order tracking, digital menus, and detailed reports." },
  { title: "Sports", icon: "bi-dribbble", img: sportsImg, color: "#5ac8fa", desc: "Platforms like sports web and mobile apps that channelize revenue." }
];

const IosAppDev = () => {
  const navigate = useNavigate();
  const handleRedirectToStory = () => {
    navigate("/careers"); // Corrected typo from /carrers
  };
   const handlebtn = () => {
    navigate("/contact"); // Corrected typo from /carrers
  };

  useEffect(() => {
    AOS.init({ duration: 1200, once: false, easing: 'ease-out-back' });
  }, []);

  return (
    <div className="ios-service-page">
      {/* SEO METADATA SECTION */}
      <Helmet>
        <title>Premium iOS App Development Services | SIMBESI</title>
        <meta name="description" content="SIMBESI specializes in high-end iOS development. We bridge the gap between luxury design and technical performance for the premium Apple ecosystem." />
        <meta name="keywords" content="iOS development, Swift developer, Apple app development, iPhone app services, SIMBESI iOS solutions, custom iOS apps" />
        
        {/* Open Graph Tags for Social Discovery */}
        <meta property="og:title" content="High-End iOS Development Excellence | SIMBESI" />
        <meta property="og:description" content="Technical performance meets luxury design. Build your premium Apple presence with us." />
        <meta property="og:image" content={iosSideImg} />
      </Helmet>

      {/* 1. PREMIUM IOS HERO SECTION */}
      <section className="ios-hero" style={{ backgroundImage: `url(${iosHeroBanner})` }}>
        <div className="ios-hero-overlay"></div>
        <div className="container position-relative z-3">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-8" data-aos="fade-right">
              <span className="ios-badge mb-3">Swift & Objective-C Excellence</span>
              <h1 className="display-2 fw-bold text-white mb-4">
                We WORK on your <span className="ios-gradient-text">IDEAS</span> <br /> 
                to make your <span className="ios-gradient-text">IDEAS WORK</span>
              </h1>
              <p className="lead text-white-50 mb-5 max-w-600">
                SIMBESI specializes in high-end iOS development. We bridge the gap 
                between luxury design and technical performance to give your brand 
                the premium Apple ecosystem presence it deserves.
              </p>
              <div className="d-flex gap-3">
                <button className="btn-apple-primary" onClick={handleRedirectToStory}>Explore Careers</button>
                <button onClick={handlebtn} className="btn-apple-outline">Contact Architect</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY & SIDE IMAGE SECTION */}
      <section className="py-5 bg-white overflow-hidden">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="ios-side-frame">
                <img src={iosSideImg} alt="SIMBESI iOS Technical Architecture" className="img-fluid rounded-5 shadow-2xl" />
                <div className="floating-blur-card">
                   <h5 className="mb-0 fw-bold">99.9%</h5>
                   <small>Crash-Free Sessions</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="display-5 fw-bold mb-4">Mastering <span className="text-ios-blue">Indigenous Intricacies</span></h2>
              <p className="fs-5 text-muted mb-4">
                iOS users expect perfection. We understand the indigenous complexities 
                that drain operational efficiency. Our proprietary research minimizes 
                these challenges to drive productivity.
              </p>
              
              

              <div className="row g-3">
                {["Native Swift UI", "Apple Watch Kits", "Secure FaceID Auth", "iCloud Integration"].map((item, i) => (
                  <div className="col-6" key={i}>
                    <div className="ios-mini-card">
                      <i className="bi bi-check-circle-fill text-ios-blue me-2"></i> {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY SOLUTIONS */}
      <section className="bg-soft-gray py-5">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-6 mb-3">Industry-Specific <span className="ios-gradient-text-alt">Innovation</span></h2>
            <p className="text-muted max-w-700 mx-auto">We incorporate conventional research to bespoke business solutions that keep you always one step ahead.</p>
          </div>

          <div className="row g-4">
            {INDUSTRIES.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="ios-industry-card overflow-hidden">
                  <div className="industry-img-container">
                    <img src={item.img} alt={`iOS Solutions for ${item.title}`} className="card-img-top industry-img" />
                    <div className="industry-icon-overlay" style={{ backgroundColor: `${item.color}cc` }}>
                      <i className={`bi ${item.icon} text-white fs-2`}></i>
                    </div>
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold mb-2">{item.title}</h5>
                    <p className="small text-muted mb-3">{item.desc}</p>
                    <button className="ios-link-btn">
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
          --ios-blue: #007aff;
          --ios-dark: #1c1c1e;
          --ios-silver: #f5f5f7;
        }

        .ios-hero { background-size: cover; background-position: center; position: relative; overflow: hidden; }
        .ios-hero-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%);
        }
        .ios-gradient-text {
          background: linear-gradient(180deg, #fff 30%, var(--ios-blue) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        .ios-industry-card { background: white; border-radius: 24px; border: 1px solid #eee; height: 100%; transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .ios-industry-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }

        .industry-img-container { position: relative; height: 180px; overflow: hidden; }
        .industry-img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s ease; }
        .industry-icon-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s ease;
        }
        .ios-industry-card:hover .industry-icon-overlay { opacity: 1; }
        .ios-industry-card:hover .industry-img { transform: scale(1.1); }

        .btn-apple-primary { background: white; color: black; border: none; padding: 14px 35px; border-radius: 12px; font-weight: 700; transition: 0.3s; }
        .btn-apple-primary:hover { background: var(--ios-blue); color: white; transform: scale(1.05); }

        .btn-apple-outline { background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 14px 35px; border-radius: 12px; backdrop-filter: blur(10px); transition: 0.3s; }

        .ios-badge { background: rgba(0, 122, 255, 0.15); color: var(--ios-blue); padding: 8px 20px; border-radius: 50px; font-weight: 700; font-size: 0.8rem; display: inline-block; border: 1px solid rgba(0, 122, 255, 0.3); }

        .ios-mini-card { background: #f5f5f7; padding: 15px; border-radius: 15px; font-weight: 600; color: #1c1c1e; font-size: 0.9rem; }

        .ios-link-btn { border: none; background: transparent; color: var(--ios-blue); font-weight: 700; font-size: 0.85rem; padding: 0; display: flex; align-items: center; gap: 5px; }

        .bg-soft-gray { background: #fbfbfd; }
        .text-ios-blue { color: #007aff; }
      `}</style>
    </div>
  );
};

export default IosAppDev;