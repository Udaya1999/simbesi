import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import AOS from "aos";
import "aos/dist/aos.css";

const Restaurants = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-out-quart' });
  }, []);

  const brandCyan = "#4bc9e1";
  const brandDark = "#00040a";
  const glassBg = "rgba(255, 255, 255, 0.03)";

  const techFeatures = [
    { 
      title: "Order Tracking", 
      icon: "bi-clock-history", 
      desc: "Real-time kitchen-to-door tracking systems for maximum efficiency."
    },
    { 
      title: "Digital Menus", 
      icon: "bi-qr-code-scan", 
      desc: "Interactive, contactless QR menus with instant update capabilities."
    },
    { 
      title: "Detailed Reports", 
      icon: "bi-graph-up", 
      desc: "Comprehensive analytics on sales, inventory, and peak-hour performance."
    },
    { 
      title: "Reservation Engine", 
      icon: "bi-calendar2-check", 
      desc: "Smart table management to reduce wait times and optimize seating."
    }
  ];

  return (
    <div className="restaurants-page" style={{ backgroundColor: brandDark, minHeight: "100vh", color: "white", overflowX: "hidden" }}>
      <Helmet>
        <title>Restaurant Tech Solutions | SIMBESI</title>
        <meta name="description" content="Next-gen tech for order tracking, digital menus, and detailed reports." />
      </Helmet>

      {/* 1. MINIMALIST OVERLAY HERO */}
      <section className="position-relative vh-100 d-flex align-items-center">
        {/* Background Decorative Element */}
        <div className="position-absolute top-50 start-50 translate-middle" style={{
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, rgba(75, 201, 225, 0.1) 0%, transparent 70%)`,
          zIndex: 1
        }}></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <span className="fw-bold text-uppercase mb-3 d-block" style={{ color: brandCyan, letterSpacing: '5px', fontSize: '0.8rem' }}>
                Culinary Innovation
              </span>
              <h1 className="display-1 fw-bold mb-4">
                Smart <br /> <span style={{ WebkitTextStroke: `1px ${brandCyan}`, color: 'transparent' }}>Dining</span>
              </h1>
              <p className="lead opacity-50 mb-5" style={{ maxWidth: '500px' }}>
                Transforming the hospitality experience with next-gen tech for order tracking, digital menus, and detailed reports.
              </p>
              <div className="d-flex gap-4">
                <Link to="/contact" className="btn-restaurant-main">
                  START UPGRADE
                </Link>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0" data-aos="zoom-out">
              <div className="hero-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Dining" 
                  className="img-fluid floating-img shadow-2-strong"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HORIZONTAL SCROLL-STYLE FEATURES */}
      <section className="py-5 bg-black bg-opacity-25">
        <div className="container">
          <div className="row g-4">
            {techFeatures.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="p-5 h-100 restaurant-feature-box">
                  <div className="icon-wrapper mb-4">
                    <i className={`bi ${item.icon}`} style={{ color: brandCyan }}></i>
                  </div>
                  <h4 className="fw-bold mb-3">{item.title}</h4>
                  <p className="small opacity-50 lh-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED ANALYTICS SLATE */}
      <section className="py-5 my-5">
        <div className="container">
          <div className="p-5 rounded-0 border-start border-info border-3" style={{ background: glassBg }} data-aos="fade-right">
             <h2 className="fw-bold mb-4">Drive Growth with <span style={{ color: brandCyan }}>Detailed Reports</span></h2>
             <p className="opacity-75 mb-0" style={{ maxWidth: '800px' }}>
                Our systems provide real-time market data and ROI projection tools to ensure your establishment remains profitable and efficient.
             </p>
             <Link to="/contact" className="mt-4 d-inline-block text-decoration-none fw-bold" style={{ color: brandCyan }}>
                View Reporting Features <i className="bi bi-arrow-right ms-2"></i>
             </Link>
          </div>
        </div>
      </section>

      <style>{`
        .btn-restaurant-main {
          background: ${brandCyan};
          color: ${brandDark};
          padding: 18px 45px;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: 2px;
          transition: 0.3s;
        }
        .btn-restaurant-main:hover {
          background: white;
          box-shadow: 0 0 30px rgba(75, 201, 225, 0.4);
        }
        .floating-img {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morph 15s linear infinite alternate;
        }
        .icon-wrapper i { font-size: 2.5rem; }
        .restaurant-feature-box {
          border: 1px solid rgba(255,255,255,0.05);
          background: transparent;
          transition: 0.4s;
        }
        .restaurant-feature-box:hover {
          background: ${glassBg};
          border-color: ${brandCyan};
          transform: translateY(-10px);
        }
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          100% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        }
        @media (max-width: 991px) {
          .display-1 { font-size: 4rem; }
        }
      `}</style>
    </div>
  );
};

export default Restaurants;