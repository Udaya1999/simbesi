import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import AOS from "aos";
import "aos/dist/aos.css";

const Sports = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-out-quart' });
  }, []);

  const brandCyan = "#4bc9e1";
  const brandDark = "#00040a";
  const panelBg = "rgba(1, 22, 46, 0.6)";

  const metrics = [
    { label: "Active Users", value: "2.5M+", growth: "+12%" },
    { label: "Data Latency", value: "<10ms", growth: "-50%" },
    { label: "Revenue Lift", value: "40%", growth: "+15%" }
  ];

  return (
    <div className="sports-page" style={{ backgroundColor: brandDark, minHeight: "100vh", color: "white" }}>
      <Helmet>
        <title>Sports Tech & Platforms | SIMBESI</title>
        <meta name="description" content="Channelizing revenue through high-traffic sports web and mobile platforms." />
      </Helmet>

      {/* 1. KINETIC HERO SECTION */}
      <section className="container-fluid p-0 position-relative vh-100 overflow-hidden d-flex align-items-center">
        {/* Dynamic Background Video/Image Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}>
          <div className="w-100 h-100" style={{ background: 'linear-gradient(to right, #00040a 30%, rgba(0,4,10,0.2) 100%)' }}></div>
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="mb-4 d-flex align-items-center gap-3">
                <span className="p-2 bg-info rounded-circle animate-pulse"></span>
                <span className="text-uppercase fw-bold" style={{ color: brandCyan, letterSpacing: '4px' }}>Live Performance Tech</span>
              </div>
              <h1 className="display-2 fw-bold mb-4">
                Channelizing <br /> <span style={{ color: brandCyan }}>Revenue</span>
              </h1>
              <p className="lead opacity-75 mb-5 fs-4" style={{ maxWidth: '600px' }}>
                We build high-traffic sports web and mobile platforms designed for invincible performance and maximum fan engagement.
              </p>
              
              {/* Performance Metrics Dashboard */}
              <div className="row g-3">
                {metrics.map((m, i) => (
                  <div className="col-4" key={i}>
                    <div className="p-3 border-start border-info border-2" style={{ background: panelBg }}>
                      <div className="small opacity-50 text-uppercase">{m.label}</div>
                      <div className="h3 fw-bold m-0">{m.value}</div>
                      <div className="small text-success">{m.growth}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE "STADIUM" FEATURES GRID */}
      <section className="py-5" style={{ background: '#000814' }}>
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="h-100 p-5 rounded-4 d-flex flex-column justify-content-between" 
                   style={{ background: 'linear-gradient(135deg, #01162e 0%, #00040a 100%)', border: '1px solid rgba(75, 201, 225, 0.1)' }}>
                <div>
                  <h3 className="fw-bold mb-4">Fan-First Architecture</h3>
                  <p className="opacity-75 fs-5">Our platforms utilize proprietary research to streamline the user journey, ensuring fans stay connected to the action without friction.</p>
                </div>
                <Link to="/contact" className="text-decoration-none fw-bold" style={{ color: brandCyan }}>
                  Build Your Arena <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-12" data-aos="fade-left" data-aos-delay="100">
                  <div className="p-4 rounded-4" style={{ background: panelBg }}>
                    <h5 className="fw-bold"><i className="bi bi-lightning-fill me-2" style={{ color: brandCyan }}></i> Real-Time Score Engine</h5>
                    <p className="small opacity-50 m-0">Sub-second updates and live push notifications for global audiences.</p>
                  </div>
                </div>
                <div className="col-12" data-aos="fade-left" data-aos-delay="200">
                  <div className="p-4 rounded-4" style={{ background: panelBg }}>
                    <h5 className="fw-bold"><i className="bi bi-wallet2 me-2" style={{ color: brandCyan }}></i> Monetization Suite</h5>
                    <p className="small opacity-50 m-0">Integrated betting APIs, merchandise stores, and premium subscription tiers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .animate-pulse {
          animation: pulse 2s infinite;
          box-shadow: 0 0 0 0 rgba(75, 201, 225, 0.7);
        }
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(75, 201, 225, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(75, 201, 225, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(75, 201, 225, 0); }
        }
        @media (max-width: 991px) {
          .display-2 { font-size: 3rem; }
          .col-4 { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Sports;