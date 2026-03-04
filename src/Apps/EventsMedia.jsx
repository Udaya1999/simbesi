import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import AOS from "aos";
import "aos/dist/aos.css";

const EventsMedia = () => {
  useEffect(() => {
    // Standardizing AOS with your other industry pages
    AOS.init({ duration: 1000, once: false, easing: 'ease-out-quart' });
  }, []);

  const brandCyan = "#4bc9e1";
  const brandDark = "#00040a";
  const cardBg = "rgba(1, 22, 46, 0.8)";

  const mediaServices = [
    { title: "Streaming Tech", icon: "bi-play-btn", desc: "OTT and VOD solutions with low-latency delivery." },
    { title: "Event Portals", icon: "bi-ticket-perforated", desc: "Seamless ticketing and attendee management." },
    { title: "Interactive Media", icon: "bi-vr", desc: "AR/VR experiences to streamline user journey." },
    { title: "Data Insights", icon: "bi-graph-up-arrow", desc: "Real-time analytics for audience engagement." }
  ];

  return (
    <div className="events-media-page" style={{ backgroundColor: brandDark, minHeight: "100vh", color: "white" }}>
      <Helmet>
        <title>Events & Media Solutions | SIMBESI</title>
        <meta name="description" content="End-to-end entertainment solutions to streamline user experience." />
      </Helmet>

      {/* 1. SPOTLIGHT HERO SECTION */}
      <section className="position-relative py-5 min-vh-100 d-flex align-items-center justify-content-center text-center">
        {/* Background Image with Cinematic Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}>
          <div className="w-100 h-100" style={{ background: 'radial-gradient(circle, rgba(0,4,10,0.5) 0%, rgba(0,4,10,0.95) 85%)' }}></div>
        </div>

        <div className="container position-relative py-5" style={{ zIndex: 2 }}>
          <div data-aos="zoom-in">
             <h6 className="text-uppercase fw-bold mb-3" style={{ color: brandCyan, letterSpacing: '5px' }}>
                Digital Entertainment
             </h6>
             <h1 className="display-2 fw-bold mb-4 text-white">
                Events & <span style={{ color: brandCyan }}>Media</span>
             </h1>
             <p className="lead mx-auto mb-5 opacity-75" style={{ maxWidth: '750px' }}>
                End-to-end entertainment solutions to streamline user experience. 
                We build the digital backbone for global media houses and event organizers.
             </p>
             <Link to="/contact" className="btn btn-lg px-5 py-3 rounded-0 fw-bold shadow-lg" 
                   style={{ backgroundColor: brandCyan, color: '#000', border: 'none' }}>
                DISCOVER SOLUTIONS
             </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING FEATURE GRID */}
      <section className="container py-5 mt-n5 position-relative" style={{ zIndex: 3, marginTop: '-120px' }}>
        <div className="row g-4 justify-content-center">
          {mediaServices.map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="media-card p-4 h-100 text-center border border-white border-opacity-10" style={{ 
                backgroundColor: cardBg, 
                backdropFilter: 'blur(12px)', 
                borderRadius: '20px' 
              }}>
                <div className="mb-4">
                  <i className={`bi ${service.icon} display-5`} style={{ color: brandCyan }}></i>
                </div>
                <h5 className="fw-bold text-white mb-3">{service.title}</h5>
                <p className="small opacity-50 mb-0">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ENGAGEMENT SECTION */}
      <section className="container py-5 text-center mt-5">
          <div className="row justify-content-center" data-aos="fade-up">
              <div className="col-lg-8">
                  <h2 className="fw-bold mb-4">Maximum Engagement. <span style={{ color: brandCyan }}>Zero Latency.</span></h2>
                  <p className="opacity-75 fs-5 mb-0">
                      Our proprietary research ensures that your content reaches the audience with invincible performance and speed.
                  </p>
              </div>
          </div>
      </section>

      <style>{`
        .media-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .media-card:hover { 
          transform: translateY(-20px); 
          border-color: ${brandCyan} !important; 
          background: rgba(75, 201, 225, 0.05) !important;
          box-shadow: 0 15px 40px rgba(0,0,0,0.6);
        }
        @media (max-width: 991px) {
            .display-2 { font-size: 3rem; }
            section[style*="marginTop"] { margin-top: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default EventsMedia;