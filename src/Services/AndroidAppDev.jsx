import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async'; 
import { useNavigate, Link } from "react-router-dom"; // Added Link for navigation
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import androidHeroImg from "../assets/img/features-2.svg"; 
import techStackImg from "../assets/img/skills.png"; 

// --- Industry Image Imports ---
import healthImg from "../assets/img/byindustry/hc.jpg";
import bankImg from "../assets/img/byindustry/bfdev.jpg";
import eduImg from "../assets/img/byindustry/el1.jpg";
import travelImg from "../assets/img/byindustry/travel.jpg";
import realEstateImg from "../assets/img/byindustry/rh1.jpg";
import eventImg from "../assets/img/byindustry/et1.jpg";
import restaurantImg from "../assets/img/byindustry/restaurant2.png";
import sportsImg from "../assets/img/byindustry/sports7.jpg";

// UPDATED: Added 'path' for each industry to navigate to separate components
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

const AndroidAppDev = () => {


    const navigate = useNavigate();
    const handleRedirectToStory2 = () => {
      navigate("/careers"); 
    };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-out-quart' });
  }, []);

  return (
    <div className="android-service-page brand-bg-dark">
      <Helmet>
        <title>Android App Development Services | SIMBESI</title>
        <meta name="description" content="We help you step into the digital landscape with feature-packed mobile apps. Explore bespoke solutions for Healthcare, Finance, Education, and more." />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="hero-dark-unified">
        <div className="container position-relative">
          <div className="row align-items-center min-vh-100 py-5">
            <div className="col-lg-7" data-aos="fade-right">
              <h6 className="brand-cyan fw-bold tracking-widest text-uppercase mb-3">Mobile App Development</h6>
              <h1 className="display-3 fw-bold text-white mb-4">
                We WORK on your <span className="text-outline">IDEAS</span> <br /> 
                to make your <span className="brand-cyan">IDEAS WORK</span>
              </h1>
              <p className="lead text-white-50 pe-lg-5">
                Join hands with SIMBESI. We help you step into the digital landscape with 
                feature-packed mobile apps, resulting in better online exposure and a 
                remarkable brand presence.
              </p>
              <div className="mt-5 d-flex flex-wrap gap-3">
                <button className="btn-cyan-glow" onClick={handleRedirectToStory2}>
                  Explore Careers
                </button>
              </div>
            </div>
            <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="300">
               <div className="hero-blob-graphic text-center">
                  <img src={androidHeroImg} alt="SIMBESI Mobile App Development" className="img-fluid floating-device" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className="fw-bold display-5 mb-4 text-white">Solving <span className="brand-cyan">Indigenous Intricacies</span></h2>
              <p className="fs-5 text-light opacity-75">
                We understand that below the surface, every business suffers from complexities 
                that drain operation costs. Lower efficiency and a constant tug of war with 
                productivity are challenges we tackle personally.
              </p>
              <div className="highlight-quote border-start border-4 border-cyan ps-4 my-4">
                <p className="fst-italic text-light fw-medium mb-0">
                  "It requires subtle observation and first-hand experience to find solutions 
                  that foster true efficiency."
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="feature-grid">
                 <div className="feature-item-pill-dark">Native Solutions</div>
                 <div className="feature-item-pill-dark">Cross-Platform Specialist</div>
                 <div className="feature-item-pill-dark">Custom Development Strategies</div>
                 <div className="feature-item-pill-dark">Bespoke Mobile Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY SOLUTIONS */}
      <section className="py-5 brand-bg-navy-accent">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-down">
            <h2 className="display-6 fw-bold text-white">Proprietary Research for <span className="brand-cyan">Every Industry</span></h2>
            <p className="text-light opacity-50">Bespoke business solutions that keep you always one step ahead.</p>
          </div>

          <div className="row g-4">
            {INDUSTRIES.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="industry-card h-100 overflow-hidden border-0">
                  <div className="industry-image-wrapper">
                    <img src={item.img} alt={`SIMBESI ${item.title} solutions`} className="industry-bg-img" />
                    <div className="industry-overlay">
                       <i className={`bi ${item.icon} fs-2 text-white`}></i>
                    </div>
                  </div>
                  <div className="p-4 card-bg-navy d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="fw-bold text-white mb-2">{item.title}</h5>
                      <p className="small text-light opacity-75">{item.desc}</p>
                    </div>
                    {/* UPDATED: Changed <a> to <Link> for React Router navigation */}
                    <Link to={item.path} className="read-more-link-cyan mt-3">
                      Read More <i className="bi bi-arrow-right ms-1"></i>
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
          --brand-navy: #001f3f;
          --brand-cyan: #4bc9e1;
          --bg-dark: #00040a;      
          --card-bg: #01162e;      
        }

        .brand-bg-dark { background-color: var(--bg-dark); min-height: 100vh; overflow-x: hidden; }
        .brand-bg-navy-accent { background-color: #010a14; }
        .brand-cyan { color: var(--brand-cyan) !important; }
        .border-cyan { border-color: var(--brand-cyan) !important; }
        .card-bg-navy { background-color: var(--card-bg); }

        .hero-dark-unified { background: var(--bg-dark); overflow: hidden; position: relative; }
        .text-outline { -webkit-text-stroke: 1px rgba(255,255,255,0.3); color: transparent; }
        .tracking-widest { letter-spacing: 0.3em; }

        .btn-cyan-glow {
          background: var(--brand-cyan); color: var(--brand-navy); border: none; padding: 15px 40px; border-radius: 50px;
          font-weight: 800; text-transform: uppercase; transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(75, 201, 225, 0.3);
        }
        .btn-cyan-glow:hover { transform: translateY(-5px); box-shadow: 0 0 35px rgba(75, 201, 225, 0.5); color: var(--brand-navy); }

        .industry-card { border-radius: 20px; transition: 0.4s; background: var(--card-bg); }
        .industry-image-wrapper { height: 180px; position: relative; overflow: hidden; }
        .industry-bg-img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; opacity: 0.8; }
        
        .industry-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(75, 201, 225, 0.4); display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: 0.3s;
        }
        .industry-card:hover .industry-overlay { opacity: 1; }
        .industry-card:hover .industry-bg-img { transform: scale(1.1); opacity: 1; }
        .industry-card:hover { transform: translateY(-10px); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }

        .read-more-link-cyan {
          font-weight: 700; text-decoration: none !important; color: var(--brand-cyan); font-size: 0.85rem;
          transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 5px;
        }
        .read-more-link-cyan:hover { transform: translateX(5px); color: white; }

        .feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .feature-item-pill-dark {
          background: var(--card-bg); padding: 20px; border-radius: 15px;
          font-weight: 700; color: white; text-align: center; border: 1px solid rgba(75, 201, 225, 0.1);
          transition: 0.3s;
        }
        .feature-item-pill-dark:hover { border-color: var(--brand-cyan); color: var(--brand-cyan); }

        .floating-device { animation: float-y 5s infinite ease-in-out; }
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        @media (max-width: 991px) {
          .display-3 { font-size: 3rem; }
          .feature-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default AndroidAppDev;