import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import AOS from "aos";
import "aos/dist/aos.css";

const RealEstateHousing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-out-quart' });
  }, []);

  const brandCyan = "#4bc9e1";
  const brandDark = "#00040a";
  const cardBg = "#01162e";

  const features = [
    { 
      title: "Virtual Property Tours", 
      desc: "Immersive 3D walkthroughs and VR-ready interfaces for remote viewing.", 
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Smart CRM Systems", 
      desc: "Automated lead tracking and tenant management for maximum connectivity.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Investment Analytics", 
      desc: "Real-time market data and ROI projection tools for savvy investors.", 
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" 
    },
    { 
      title: "Leasing Portals", 
      desc: "Seamless digital contracts and rent collection in an invincible application environment.",
      img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=600" 
    }
  ];

  return (
    <div className="real-estate-page" style={{ backgroundColor: brandDark, minHeight: "100vh", color: "white" }}>
      <Helmet>
        <title>Real Estate & Housing Solutions | SIMBESI</title>
        <meta name="description" content="Invincible real estate applications for maximum engagement and connectivity." />
      </Helmet>

      <section className="container-fluid p-0">
        <div className="row g-0">
          
          {/* LEFT SIDE: STICKY HERO (Remains static on scroll) */}
          <div className="col-lg-5 vh-100 d-flex align-items-center p-5 sticky-lg-top" style={{ background: '#010a14' }}>
            <div className="p-lg-4" data-aos="fade-right">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div style={{ width: "40px", height: "2px", backgroundColor: brandCyan }}></div>
                <span className="text-uppercase fw-bold" style={{ color: brandCyan, letterSpacing: '3px', fontSize: '0.8rem' }}>
                  Urban Tech Innovations
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Real Estate & <br /> <span style={{ WebkitTextStroke: `1px ${brandCyan}`, color: "transparent" }}>Housing</span>
              </h1>
              <p className="lead opacity-75 mb-5 border-start border-1 border-white ps-4">
                We build invincible real estate applications designed for maximum engagement and connectivity. 
                Our platforms bridge the gap between property seekers and providers through proprietary research.
              </p>
              <Link to="/contact" className="btn-blueprint">
                INITIATE BUILD
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: SCROLLING GALLERY CARDS */}
          <div className="col-lg-7 p-4 p-md-5">
            <div className="row g-5">
              {features.map((feature, index) => (
                <div className="col-12" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                  <div className="real-estate-card overflow-hidden">
                    <div className="row g-0 align-items-center">
                      <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                        <img src={feature.img} alt={feature.title} className="img-fluid w-100 h-100 object-fit-cover" style={{ minHeight: '300px' }} />
                      </div>
                      <div className="col-md-6 p-4 p-lg-5" style={{ backgroundColor: cardBg }}>
                        <h3 className="fw-bold mb-3" style={{ color: brandCyan }}>{feature.title}</h3>
                        <p className="opacity-75 mb-0">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FINAL CTA BOX */}
            <div className="mt-5 p-5 text-center rounded-4 shadow-lg border border-info border-opacity-10" 
                 style={{ background: 'linear-gradient(135deg, #01162e 0%, #00040a 100%)' }}
                 data-aos="zoom-in">
                <h4 className="fw-bold mb-3">Develop Your Property Ecosystem</h4>
                <p className="opacity-50 mb-4">Our intelligent solutions reduce operation costs and foster efficiency.</p>
                <Link to="/contact" className="text-decoration-none fw-bold" style={{ color: brandCyan }}>
                   Consult Our Tech Experts <i className="bi bi-arrow-right ms-2"></i>
                </Link>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .btn-blueprint {
          padding: 15px 40px;
          border: 1px solid ${brandCyan};
          color: ${brandCyan};
          background: transparent;
          font-weight: 800;
          text-decoration: none;
          display: inline-block;
          letter-spacing: 2px;
          transition: 0.3s;
          position: relative;
        }
        .btn-blueprint:hover {
          background: ${brandCyan};
          color: ${brandDark};
          box-shadow: 0 0 20px rgba(75, 201, 225, 0.4);
        }
        .real-estate-card {
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: 0.4s;
        }
        .real-estate-card:hover {
          transform: scale(1.02);
          border-color: ${brandCyan};
        }
        @media (max-width: 991px) {
          .vh-100 { min-height: auto !important; height: auto !important; }
          .sticky-lg-top { position: relative !important; top: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default RealEstateHousing;