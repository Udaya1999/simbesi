import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import AOS from "aos";
import "aos/dist/aos.css";

const TravelTicketing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-out-quart' });
  }, []);

  const brandCyan = "#4bc9e1";
  const brandDark = "#00040a";
  const cardBg = "#01162e";

  const travelSolutions = [
    { title: "Booking Engines", icon: "bi-airplane", desc: "High-performance reservation systems with multi-GDS integration for flights and hotels." },
    { title: "Dynamic Pricing", icon: "bi-graph-up-arrow", desc: "AI-driven algorithms that optimize fares in real-time based on demand and market trends." },
    { title: "Inventory MGMT", icon: "bi-calendar-check", desc: "Centralized control for seat mapping, availability, and automated cancellations." },
    { title: "E-Ticketing", icon: "bi-ticket-perforated", desc: "Seamless digital boarding passes and QR-based authentication for modern transit." }
  ];

  const additionalContent = [
    { 
      title: "Omni-channel Connectivity", 
      text: "We bridge the gap between web, mobile, and physical kiosks to provide a unified passenger experience across all touchpoints." 
    },
    { 
      title: "Secure Payment Vaults", 
      text: "PCI-DSS compliant gateways ensuring every transaction is encrypted and protected against global fraud patterns." 
    },
    { 
      title: "Real-time Analytics", 
      text: "Visualize passenger flow and revenue data with custom dashboards that help you make informed operational decisions." 
    }
  ];

  return (
    <div className="travel-page" style={{ backgroundColor: brandDark, minHeight: "100vh", color: "white" }}>
      <Helmet>
        <title>Travel & Ticketing Solutions | SIMBESI</title>
        <meta name="description" content="Custom e-ticketing portals and kiosks leveraging modern technologies for global transit." />
      </Helmet>

      {/* 1. LAYERED HERO SECTION */}
      <section className="position-relative overflow-hidden min-vh-100 d-flex align-items-center">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}>
          <div className="w-100 h-100" style={{ background: 'linear-gradient(90deg, rgba(0,4,10,0.95) 0%, rgba(0,4,10,0.6) 100%)' }}></div>
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="p-5 rounded-4 shadow-lg border border-white border-opacity-10" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}>
                <h6 className="text-uppercase fw-bold mb-3" style={{ color: brandCyan, letterSpacing: '4px' }}>
                   Global Transit Solutions
                </h6>
                <h1 className="display-4 fw-bold text-white mb-4">
                   Redefining the <br /> <span style={{ color: brandCyan }}>Journey</span>
                </h1>
                <p className="text-white-50 mb-5 fs-5">
                   We build custom e-ticketing portals and kiosks that leverage modern technologies. 
                   Streamlining the path from departure to destination with intelligence.
                </p>
                <Link to="/contact" className="btn btn-info btn-lg px-5 py-3 rounded-pill fw-bold transition-all" style={{ backgroundColor: brandCyan, border: 'none', color: '#000' }}>
                   START YOUR PROJECT
                </Link>
              </div>
            </div>

            <div className="col-lg-6 offset-lg-1 mt-5 mt-lg-0">
              <div className="row g-4">
                {travelSolutions.map((item, index) => (
                  <div className="col-sm-6" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                    <div className="p-4 rounded-4 transition-all h-100" style={{
                      background: 'rgba(1, 22, 46, 0.9)',
                      border: '1px solid rgba(75, 201, 225, 0.1)',
                    }}>
                      <i className={`bi ${item.icon} display-5 mb-3 d-block`} style={{ color: brandCyan }}></i>
                      <h5 className="text-white fw-bold mb-2">{item.title}</h5>
                      <p className="text-white-50 small m-0 lh-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES SECTION (Added Content) */}
      <section className="py-5" style={{ background: '#010a14' }}>
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4" data-aos="fade-up">
                    <h2 className="fw-bold display-6 mb-4">Why Partner <br/>with <span style={{ color: brandCyan }}>SIMBESI?</span></h2>
                    <p className="text-white-50">Our proprietary research into travel psychology and logistics allows us to build software that doesn't just work—it excels in high-pressure environments.</p>
                </div>
                <div className="col-lg-8">
                    <div className="row g-4">
                        {additionalContent.map((content, idx) => (
                            <div className="col-md-6" key={idx} data-aos="fade-left" data-aos-delay={idx * 150}>
                                <div className="p-4 border-start border-2 border-cyan h-100" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                    <h5 className="fw-bold mb-3" style={{ color: brandCyan }}>{content.title}</h5>
                                    <p className="text-white-50 small mb-0">{content.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      <style>{`
        .transition-all { transition: all 0.4s ease; }
        .transition-all:hover { transform: translateY(-10px); border-color: ${brandCyan} !important; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .border-cyan { border-color: ${brandCyan} !important; }
        @media (max-width: 991px) {
           .min-vh-100 { min-height: auto; padding: 120px 0; }
           .display-4 { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default TravelTicketing;