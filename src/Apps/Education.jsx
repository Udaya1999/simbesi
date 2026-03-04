import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-quart'
    });
  }, []);

  // Theme Constants
  const brandCyan = "#4bc9e1";
  const brandNavy = "#001f3f";
  const brandDark = "#00040a";
  const cardBg = "#01162e";

  const features = [
    { title: "LMS Development", desc: "Comprehensive Learning Management Systems for schools and corporates." },
    { title: "Virtual Classrooms", desc: "Real-time interactive video conferencing with digital whiteboards." },
    { title: "Gamified Learning", desc: "Increasing engagement through reward-based educational modules." },
    { title: "Exam Portals", desc: "Secure, anti-cheat enabled platforms for competitive examinations." }
  ];

  return (
    <div className="education-page" style={{ backgroundColor: brandDark, minHeight: "100vh", color: "white", overflowX: "hidden" }}>
      <Helmet>
        <title>Education & E-Learning Solutions | SIMBESI</title>
        <meta name="description" content="Making education universal with powerful, interactive management tools." />
      </Helmet>

      <div className="container py-5" style={{ paddingTop: "140px !important" }}>
        
        {/* REVERSED HERO SECTION: Image Left, Text Right */}
        <div className="row align-items-center min-vh-75 g-5 py-5 flex-row-reverse">
          <div className="col-lg-6" data-aos="fade-left">
            <div className="mb-3 d-inline-block" style={{ borderRight: `4px solid ${brandCyan}`, paddingRight: '15px' }}>
              <span className="text-uppercase fw-bold tracking-widest" style={{ color: brandCyan, letterSpacing: '0.2em' }}>
                Future of Learning
              </span>
            </div>
            <h1 className="display-3 fw-bold mb-4">
              Digital <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" }}>Education</span>
            </h1>
            <p className="lead opacity-75 mb-5">
              We make education universal by developing powerful, interactive management tools. 
              Our solutions bridge the gap between traditional teaching and modern technology.
            </p>
            <Link 
              to="/contact" 
              className="btn px-5 py-3 shadow-lg" 
              style={{ backgroundColor: brandCyan, color: brandNavy, borderRadius: "50px", fontWeight: "800" }}
            >
              BUILD YOUR LMS
            </Link>
          </div>
          
          <div className="col-lg-6" data-aos="fade-right">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800" 
                alt="Digital Learning" 
                className="img-fluid rounded-4 shadow-lg border border-secondary border-opacity-25"
                style={{ borderRadius: "100px 20px 100px 20px" }} // Unique border radius for education
              />
            </div>
          </div>
        </div>

        {/* STAGGERED FEATURES SECTION */}
        <div className="row g-4 py-5 mt-5">
          <div className="col-lg-4 d-flex flex-column justify-content-center" data-aos="fade-up">
              <h2 className="fw-bold mb-3">Empowering <br/><span style={{color: brandCyan}}>Next-Gen Learners</span></h2>
              <p className="opacity-50">Our proprietary research helps us build bespoke modules for every academic need.</p>
          </div>
          
          <div className="col-lg-8">
              <div className="row g-4">
                {features.map((f, index) => (
                    <div className="col-md-6" key={index} data-aos="zoom-in" data-aos-delay={index * 150}>
                        <div 
                            className="p-4 h-100" 
                            style={{ 
                                backgroundColor: cardBg, 
                                borderRadius: "20px", 
                                borderLeft: `5px solid ${brandCyan}`,
                                marginTop: index % 2 === 0 ? "0px" : "30px" // Creates a staggered vertical effect
                            }}
                        >
                            <h5 className="fw-bold text-white">{f.title}</h5>
                            <p className="small opacity-75 mb-0" style={{ color: "#b0b0b0" }}>{f.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
          </div>
        </div>

      </div>

      <style>{`
        .tracking-widest { letter-spacing: 0.3em; }
        .min-vh-75 { min-height: 75vh; }
        @media (max-width: 991px) {
            .flex-row-reverse { flex-direction: column-reverse !important; }
            div[style*="marginTop"] { margin-top: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default Education;