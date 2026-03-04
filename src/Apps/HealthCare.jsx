import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import AOS from "aos";
import "aos/dist/aos.css";

// Industry-specific image from your assets
import healthImg from "../assets/img/byindustry/hc.jpg"; 

const HealthCare = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-quart'
    });
  }, []);

  const brandCyan = "#4bc9e1";
  const brandNavy = "#001f3f";
  const brandDark = "#00040a";
  const cardBg = "#01162e";

  const services = [
    { title: "Telehealth Platforms", desc: "Secure video consultations and remote patient monitoring systems." },
    { title: "EHR/EMR Systems", desc: "Scalable electronic health records with seamless cloud integration." },
    { title: "AI Medical Insights", desc: "Data-driven diagnostics to improve clinical decision-making." },
    { title: "mHealth Apps", desc: "User-centric mobile applications for patient engagement and tracking." }
  ];

  return (
    <div className="healthcare-service-page" style={{ backgroundColor: brandDark, minHeight: "100vh", color: "white" }}>
      <Helmet>
        <title>Healthcare Solutions | SIMBESI</title>
        <meta name="description" content="Turning unsettled questions into catalytic change through custom health tech." />
      </Helmet>

      <div className="container position-relative py-5" style={{ paddingTop: "120px !important" }}>
        
        {/* HERO SECTION */}
        <div className="row align-items-center min-vh-75 g-5 py-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="mb-3" style={{ borderLeft: `4px solid ${brandCyan}`, paddingLeft: '15px' }}>
              <span className="text-uppercase fw-bold tracking-widest" style={{ color: brandCyan, letterSpacing: '0.2em' }}>
                Industries We Serve
              </span>
            </div>
            <h1 className="display-3 fw-bold mb-4 text-white">
              Healthcare <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" }}>Solutions</span>
            </h1>
            <p className="lead opacity-75 mb-5" style={{ color: "#e0e0e0" }}>
              Turning unsettled questions into catalytic change through custom health tech. 
              We build secure, fast, and scalable medical portals that prioritize patient care.
            </p>
            <Link 
              to="/contact" 
              className="btn px-5 py-3 shadow-lg" 
              style={{ 
                backgroundColor: brandCyan, 
                color: brandNavy, 
                borderRadius: "50px", 
                fontWeight: "800",
                boxShadow: `0 0 20px rgba(75, 201, 225, 0.3)`
              }}
            >
              START A PROJECT
            </Link>
          </div>
          
          <div className="col-lg-6 text-center" data-aos="zoom-in" data-aos-delay="300">
            <div className="position-relative">
              <img 
                src={healthImg} 
                alt="Healthcare Technology" 
                className="img-fluid rounded-4 shadow-lg border border-secondary border-opacity-25"
                style={{ animation: "float-y 5s infinite ease-in-out" }}
              />
            </div>
          </div>
        </div>

        {/* PHILOSOPHY / QUOTE SECTION */}
        <div className="row justify-content-center py-5" data-aos="fade-up">
            <div className="col-lg-10 text-center">
                <div className="p-5 rounded-4" style={{ background: "rgba(1, 22, 46, 0.6)", border: "1px solid rgba(75, 201, 225, 0.1)" }}>
                    <h2 className="fw-bold mb-4">Advancing <span style={{ color: brandCyan }}>Medical Innovation</span></h2>
                    <p className="fs-5 opacity-75 fst-italic">
                        "We understand that in healthcare, efficiency isn't just about cost—it's about outcomes. 
                        Our bespoke solutions are built to tackle indigenous complexities personally."
                    </p>
                </div>
            </div>
        </div>

        {/* FEATURES GRID */}
        <div className="row g-4 py-5 mt-4">
          <div className="col-12 text-center mb-4" data-aos="fade-down">
              <h3 className="fw-bold">Our Core Expertise</h3>
              <div style={{ width: "60px", height: "4px", background: brandCyan, margin: "15px auto" }}></div>
          </div>
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div 
                className="card h-100 border-0 p-4" 
                style={{ 
                  backgroundColor: cardBg,
                  borderRadius: "20px", 
                  border: "1px solid rgba(75, 201, 225, 0.1)",
                  transition: "all 0.4s ease" 
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.borderColor = brandCyan;
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(75, 201, 225, 0.1)";
                    e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="mb-3">
                   <div style={{ 
                       width: "45px", 
                       height: "45px", 
                       backgroundColor: "rgba(75, 201, 225, 0.1)", 
                       borderRadius: "12px",
                       display: "flex",
                       alignItems: "center",
                       justifyContent: "center",
                       color: brandCyan
                   }}>
                       <i className="bi bi-shield-plus fs-4"></i>
                   </div>
                </div>
                <h5 className="fw-bold mb-3 text-white">{service.title}</h5>
                <p className="small opacity-75" style={{ color: "#b0b0b0" }}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .tracking-widest { letter-spacing: 0.3em; }
        .min-vh-75 { min-height: 75vh; }
      `}</style>
    </div>
  );
};

export default HealthCare;