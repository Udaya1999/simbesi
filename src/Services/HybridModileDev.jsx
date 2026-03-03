import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import hybridBanner from "../assets/img/services/aboutbanne1.jpg"; 
import hybridSideImg from "../assets/img/servicesright.jpg"; 

const WE_OFFER = [
  { 
    title: "CROSS-PLATFORM APP DEVELOPMENT", 
    icon: "bi-activity", 
    desc: "Our Flutter developer has good hands-on experience developing secure, robust, and scalable, high-quality web and mobile applications for both the platform, i.e., Android and iOS." 
  },
  { 
    title: "ADVANCED AND NATIVE APP DEVELOPMENT", 
    icon: "bi-broadcast-pin", 
    desc: "Flutter offers flexibility for better performance and scalability. Our Flutter developers are specialized in their niche and can quickly integrate native features." 
  },
  { 
    title: "API DEVELOPMENT AND MIGRATION", 
    icon: "bi-easel", 
    desc: "Our skilled professionals are always ready to fulfill all the requirements of the products. Our experts will help you to build and deploy all the APIs successfully." 
  },
  { 
    title: "FLUTTER APP DESIGN SERVICES", 
    icon: "bi-bounding-box-circles", 
    desc: "Flutter app development means deploying apps that are faster and robust. We are here to help you design flutter apps for easy navigation and maintenance." 
  },
  { 
    title: "FLUTTER APP UPGRADE", 
    icon: "bi-calendar-check", 
    desc: "We can help to flawlessly migrate to the advanced version of Flutter for better business opportunities, security upgrades, and high-level performances." 
  },
  { 
    title: "SUPPORT AND MAINTENANCE", 
    icon: "bi-chat-dots", 
    desc: "Our professional team offers various engagement models for better support and maintenance services to improve your applications' quality and fix bugs." 
  }
];

const HybridMobileDev = () => {
  
      const navigate = useNavigate();
       const handleRedirectToStory2 = () => {
        navigate("/carrers"); 
      };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="hybrid-dev-page">
      {/* 1. TOP BANNER SECTION */}
      <section className="hybrid-banner" style={{ backgroundImage: `url(${hybridBanner})` }}>
        <div className="banner-overlay">
          <div className="container h-100 d-flex align-items-center justify-content-center text-center">
            <div data-aos="zoom-in">
              <h1 className="display-2 fw-bold text-white mb-3">Hybrid App Development</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="/" className="text-white text-decoration-none">Home</a></li>
                  <li className="breadcrumb-item active text-info" aria-current="page">Hybrid Solutions</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TEXT WITH SIDE IMAGE SECTION (Increased Padding) */}
      <section className="py-5 bg-white my-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h6 className="text-info fw-bold text-uppercase mb-3">Innovation at Scale</h6>
              <h2 className="display-5 fw-bold mb-4">We WORK on your <span className="text-primary">IDEAS</span> to make your <span className="text-primary">IDEAS WORK</span></h2>
              <p className="lead text-muted mb-4">
                Hybrid apps are the future of cost-effective digital presence. We specialize in 
                bespoke strategies that minimize "indigenous challenges" while driving 
                productivity through a single codebase.
              </p>
              <div className="mt-4 d-flex gap-3">
                {/* CAREER REDIRECT */}
                <button className="btn btn-primary btn-lg rounded-pill px-5" onClick={handleRedirectToStory2}>
                  Explore Careers
                </button>
                <button className="btn btn-outline-primary btn-lg rounded-pill px-5">Our Methodology</button>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="hybrid-image-container p-2 shadow-lg rounded-4">
                <img src={hybridSideImg} alt="Hybrid Development" className="img-fluid rounded-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WE OFFER - 6 GRID BOXES (Added Section Spacing) */}
      <section className="py-5 bg-light pb-5 mb-5">
        <div className="container py-5">
          <div className="text-center mb-5 pb-4" data-aos="fade-up">
            <h2 className="display-6 fw-bold">We <span className="text-primary">Offer</span></h2>
            <div className="underline mx-auto"></div>
          </div>
          
          <div className="row g-5 justify-content-center">
            {WE_OFFER.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="offer-card border-0 shadow-sm">
                  {/* Icon Wrapper with Light Gray Background */}
                  <div className="icon-wrapper">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted small mb-0 lh-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hybrid-banner {
          height: 400px;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .banner-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0, 31, 63, 0.7);
        }

        /* --- WE OFFER GRID --- */
        .offer-card {
          background: white;
          padding: 60px 25px 40px;
          border-radius: 12px;
          text-align: center;
          height: 100%;
          position: relative;
          transition: all 0.3s ease-in-out;
        }
        
        .offer-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }

        /* LIGHT GRAY ROUND DOTS */
        .icon-wrapper {
          width: 70px; height: 70px;
          background: #e9ecef; /* Light gray background */
          color: #0d6efd; /* Blue icon */
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem;
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          border: 4px solid white; /* Keeps it distinct from the card */
          transition: 0.3s;
        }

        .offer-card:hover .icon-wrapper {
          background: #0d6efd; /* Turns blue on card hover */
          color: white;
        }

        .underline {
          width: 50px;
          height: 4px;
          background: #0d6efd;
          margin-top: 15px;
          border-radius: 2px;
        }

        /* Section Spacing Class */
        .my-5 { margin-top: 5rem !important; margin-bottom: 5rem !important; }

        @media (max-width: 991px) {
          .hybrid-banner { height: 300px; }
          .my-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
        }
      `}</style>
    </div>
  );
};

export default HybridMobileDev;