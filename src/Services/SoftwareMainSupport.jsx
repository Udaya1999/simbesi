import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async'; // SEO Integration
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import bannerImg from "../assets/img/services/aboutbanne1.jpg"; 
import imgAppSupport from "../assets/img/m1.jpg";
import imgMaintenance from "../assets/img/m2.jpg";
import imgSecurity from "../assets/img/m3.jpg";
import imgDatabase from "../assets/img/m4.jpg";
import imgCloud from "../assets/img/m5.jpg";
import imgMonitoring from "../assets/img/m6.jpg";
import imgDevOps from "../assets/img/m7.jpg";

const SUPPORT_SERVICES = [
  { id: "01", title: "Software App Support", img: imgAppSupport, status: "Active", desc: "L1-L3 troubleshooting and end-user assistance." },
  { id: "02", title: "System Maintenance", img: imgMaintenance, status: "Scheduled", desc: "Proactive patches and legacy system optimization." },
  { id: "03", title: "Security Management", img: imgSecurity, status: "Secure", desc: "Vulnerability assessment and threat mitigation." },
  { id: "04", title: "Database Admin", img: imgDatabase, status: "Synced", desc: "Optimization and backup recovery for data." },
  { id: "05", title: "Cloud Infrastructure", img: imgCloud, status: "Scaling", desc: "Multi-cloud architecture support for AWS/Azure." },
  { id: "06", title: "System Monitoring", img: imgMonitoring, status: "Live", desc: "24/7 uptime tracking and incident response." },
  { id: "07", title: "DevOps & CI/CD", img: imgDevOps, status: "Deployed", desc: "Automating pipelines for rapid deployment." }
];

const SoftwareMainSupport = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="support-compact-page">
      {/* SEO METADATA SECTION */}
      <Helmet>
        <title>Software Maintenance & Support Services | SIMBESI</title>
        <meta name="description" content="Our software maintenance and support services ensure consistent performance and system reliability. We provide proactive patches and legacy system optimization." />
        <meta name="keywords" content="software maintenance, application support, L1 L3 support, system optimization, cloud infrastructure support, DevOps services" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Expert Software Maintenance & Support | SIMBESI" />
        <meta property="og:description" content="Ensuring consistent software performance and 24/7 reliability for your business systems." />
        <meta property="og:image" content={imgMonitoring} />
      </Helmet>
      
      {/* --- REFINED TOP BANNER --- */}
      <section className="compact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="banner-mask">
          <div className="container text-center" data-aos="fade-down">
            <h1 className="banner-title-sm">Reliable <span className="text-blue">Support</span> & Maintenance</h1>
            <p className="banner-subtitle-sm">Ensuring consistent software performance and system reliability.</p>
          </div>
        </div>
      </section>

      {/* --- COMPACT SERVICE GRID --- */}
      <section className="py-5 bg-black">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-heading">Our <span className="text-blue">Offerings</span></h2>
            <div className="accent-line"></div>
          </div>

          

          <div className="compact-grid">
            {SUPPORT_SERVICES.map((service, index) => (
              <div 
                key={index} 
                className="compact-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 50}
              >
                <div className="card-top">
                  <span className="card-no">{service.id}</span>
                  <span className={`status-pill ${service.status.toLowerCase()}`}>{service.status}</span>
                </div>
                
                <div className="card-img-box">
                  <img src={service.img} alt={service.title} className="clear-img" />
                </div>

                <div className="card-content">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .support-compact-page { background: #000; color: #fff; font-family: 'Inter', sans-serif; }
        .text-blue { color: #007bff; }

        .compact-banner { height: 350px; background-size: cover; background-position: center; position: relative; }
        .banner-mask { height: 100%; background: rgba(0, 0, 0, 0.7); display: flex; align-items: center; justify-content: center; }
        .banner-title-sm { font-size: 2.5rem; font-weight: 800; letter-spacing: -1px; }
        .banner-subtitle-sm { color: #aaa; font-size: 1.1rem; max-width: 600px; margin: 10px auto 0; }

        .compact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .compact-card {
          background: #111;
          border: 1px solid #222;
          border-radius: 12px;
          padding: 20px;
          transition: 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .compact-card:hover { border-color: #007bff; transform: translateY(-5px); background: #161616; }

        .card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .card-no { color: #444; font-family: monospace; font-weight: bold; }
        
        .status-pill { font-size: 0.65rem; padding: 2px 8px; border-radius: 4px; border: 1px solid; text-transform: uppercase; font-weight: bold; }
        .active { color: #28a745; border-color: #28a745; }
        .scheduled { color: #ffc107; border-color: #ffc107; }
        .secure { color: #6f42c1; border-color: #6f42c1; }
        .synced { color: #fd7e14; border-color: #fd7e14; }
        .live { color: #dc3545; border-color: #dc3545; }
        .scaling { color: #17a2b8; border-color: #17a2b8; }
        .deployed { color: #007bff; border-color: #007bff; }

        .card-img-box { 
          height: 120px; 
          width: 100%; 
          overflow: hidden; 
          border-radius: 8px; 
          margin-bottom: 15px;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .clear-img { 
          width: 100%; 
          height: 100%; 
          object-fit: contain; 
          filter: brightness(0.9);
          transition: 0.3s;
        }
        .compact-card:hover .clear-img { filter: brightness(1.1); transform: scale(1.05); }

        .card-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 8px; color: #fff; }
        .card-text { font-size: 0.85rem; color: #888; line-height: 1.4; margin: 0; }

        .section-heading { font-size: 2rem; font-weight: 700; }
        .accent-line { width: 50px; height: 3px; background: #007bff; margin: 10px auto; }

        @media (max-width: 991px) { .compact-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 576px) { .compact-grid { grid-template-columns: 1fr; } .banner-title-sm { font-size: 1.8rem; } }
      `}</style>
    </div>
  );
};

export default SoftwareMainSupport;