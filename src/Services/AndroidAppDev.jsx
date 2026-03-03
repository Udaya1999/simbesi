import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async'; // SEO Integration
import { useNavigate } from "react-router-dom";
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

const INDUSTRIES = [
  { title: "Healthcare", img: healthImg, icon: "bi-heart-pulse", desc: "Turning unsettled questions into catalytic change through custom health tech." },
  { title: "Banking & Finance", img: bankImg, icon: "bi-bank", desc: "Secure, fast, and scalable financial software and mobile portals." },
  { title: "Education & E-Learning", img: eduImg, icon: "bi-mortarboard", desc: "Making education universal with powerful, interactive management tools." },
  { title: "Travel & Ticketing", img: travelImg, icon: "bi-ticket-perforated", desc: "Custom e-ticketing portals and kiosks leveraging modern technologies." },
  { title: "Real Estate & Housing", img: realEstateImg, icon: "bi-house-heart", desc: "Invincible real estate applications for maximum engagement and connectivity." },
  { title: "Events & Media", img: eventImg, icon: "bi-calendar-event", desc: "End-to-end entertainment solutions to streamline user experience." },
  { title: "Restaurants", img: restaurantImg, icon: "bi-egg-fried", desc: "Next-gen tech for order tracking, digital menus, and detailed reports." },
  { title: "Sports", img: sportsImg, icon: "bi-trophy", desc: "Channelizing revenue through high-traffic sports web and mobile platforms." }
];

const AndroidAppDev = () => {
    const navigate = useNavigate();
    const handleRedirectToStory2 = () => {
      navigate("/careers"); // Fixed typo from /carrers
    };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-out-quart' });
  }, []);

  return (
    <div className="android-service-page">
      {/* SEO METADATA SECTION */}
      <Helmet>
        <title>Android App Development Services | SIMBESI</title>
        <meta name="description" content="We help you step into the digital landscape with feature-packed mobile apps. Explore bespoke solutions for Healthcare, Finance, Education, and more." />
        <meta name="keywords" content="Android app development, mobile application services, custom mobile apps, cross-platform development, SIMBESI mobile solutions" />
        
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="Bespoke Android App Development | SIMBESI" />
        <meta property="og:description" content="Turning your ideas into feature-packed mobile applications with a remarkable brand presence." />
        <meta property="og:image" content={androidHeroImg} />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="hero-dark">
        <div className="container position-relative">
          <div className="row align-items-center min-vh-100 py-5">
            <div className="col-lg-7" data-aos="fade-right">
              <h6 className="text-android-green fw-bold tracking-widest text-uppercase mb-3">Mobile App Development</h6>
              <h1 className="display-3 fw-bold text-white mb-4">
                We WORK on your <span className="text-outline">IDEAS</span> <br /> 
                to make your <span className="text-android-green">IDEAS WORK</span>
              </h1>
              <p className="lead text-white-50 pe-lg-5">
                Join hands with SIMBESI. We help you step into the digital landscape with 
                feature-packed mobile apps, resulting in better online exposure and a 
                remarkable brand presence.
              </p>
              <div className="mt-5 d-flex flex-wrap gap-3">
                <button className="btn-glow" onClick={handleRedirectToStory2}>
                  Explore Careers
                </button>
                {/* <button className="btn-glass">Hire Our Team</button> */}
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
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className="fw-bold display-5 mb-4">Solving <span className="text-primary">Indigenous Intricacies</span></h2>
              <p className="fs-5 text-muted">
                We understand that below the surface, every business suffers from complexities 
                that drain operation costs. Lower efficiency and a constant tug of war with 
                productivity are challenges we tackle personally.
              </p>
              <div className="highlight-quote border-start border-4 border-primary ps-4 my-4">
                <p className="fst-italic text-dark fw-medium mb-0">
                  "It requires subtle observation and first-hand experience to find solutions 
                  that foster true efficiency."
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="feature-grid">
                 <div className="feature-item-pill">Native Solutions</div>
                 <div className="feature-item-pill">Cross-Platform Specialist</div>
                 <div className="feature-item-pill">Custom Development Strategies</div>
                 <div className="feature-item-pill">Bespoke Mobile Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY SOLUTIONS */}
      <section className="bg-light py-5">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-down">
            <h2 className="display-6 fw-bold">Proprietary Research for <span className="text-primary">Every Industry</span></h2>
            <p className="text-muted">Bespoke business solutions that keep you always one step ahead.</p>
          </div>

          <div className="row g-4">
            {INDUSTRIES.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="industry-card h-100 shadow-sm overflow-hidden">
                  <div className="industry-image-wrapper">
                    <img src={item.img} alt={`SIMBESI ${item.title} solutions`} className="industry-bg-img" />
                    <div className="industry-overlay">
                       <i className={`bi ${item.icon} fs-2 text-white`}></i>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="small text-muted">{item.desc}</p>
                    <a href="#" className="read-more-link">Read More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hero-dark { background: #001428; overflow: hidden; position: relative; }
        .text-android-green { color: #3DDC84; }
        .text-outline { -webkit-text-stroke: 1px rgba(255,255,255,0.5); color: transparent; }
        .tracking-widest { letter-spacing: 0.3em; }

        .btn-glow {
          background: #3DDC84; color: #001428; border: none; padding: 15px 40px; border-radius: 50px;
          font-weight: 800; text-transform: uppercase; transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(61, 220, 132, 0.4);
        }
        .btn-glow:hover { transform: translateY(-5px); box-shadow: 0 0 35px rgba(61, 220, 132, 0.6); }

        .btn-glass {
          background: rgba(255,255,255,0.05); color: white; border: 1px solid rgba(255,255,255,0.2);
          padding: 15px 40px; border-radius: 50px; backdrop-filter: blur(10px); transition: 0.3s;
        }

        .industry-card { border-radius: 20px; transition: 0.4s; border: none; }
        .industry-image-wrapper { height: 180px; position: relative; overflow: hidden; }
        .industry-bg-img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        .industry-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(13, 110, 253, 0.6); display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: 0.3s;
        }
        .industry-card:hover .industry-overlay { opacity: 1; }
        .industry-card:hover .industry-bg-img { transform: scale(1.1); }
        .industry-card:hover { transform: translateY(-10px); }

        .read-more-link {
          font-weight: 700; text-decoration: none; color: #0d6efd; font-size: 0.85rem;
          transition: gap 0.3s; display: inline-flex; align-items: center; gap: 5px;
        }
        .read-more-link:hover { gap: 10px; }

        .feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .feature-item-pill {
          background: #f8f9fa; padding: 20px; border-radius: 15px;
          font-weight: 700; color: #001428; text-align: center; border: 1px solid #eee;
        }

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