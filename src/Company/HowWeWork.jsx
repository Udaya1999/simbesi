import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async'; // Added for SEO
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Asset Imports
import banner from "../assets/img/aboutbanner.jpg";
import banner2 from "../assets/img/workflow.jpg";
import analyse from "../assets/img/analyse.png";
import design from "../assets/img/design.png";
import develop from "../assets/img/develop.jpg";

const HowWeWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-hidden bg-white ">
      {/* SEO SECTION - Added based on reference */}
      <Helmet>
        <title>How We Work | SIMBESI - Our Process</title>
        <meta name="description" content="Now it’s time for our development team to get to work and deliver excellence through our proven 4-step process." />
        <meta name="keywords" content="SIMBESI workflow, AI development, software design, agile process" />
      </Helmet>

      {/* 1. STACKED BANNER SECTION WITH GLASS OVERLAY */}
      <section className="position-relative d-flex align-items-center justify-content-center overflow-hidden bg-dark" style={{ minHeight: "600px" }}>
        {/* Cinematic Background */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img 
            src={banner} 
            alt="Technical Background" 
            className="w-100 h-100 object-fit-cover" 
            style={{ filter: "brightness(0.4) grayscale(20%)" }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100" 
               style={{ background: "radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)" }}>
          </div>
        </div>

        <div className="container position-relative z-1 py-5">
          <div className="row align-items-center g-5">
            {/* LEFT SIDE: THE TEXT CONTENT */}
            <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
              <p className="text-uppercase fw-bold mb-3 text-primary" 
                 style={{ letterSpacing: "6px", fontSize: "0.9rem" }}>
                Methodology
              </p>
              <h1 className="display-2 text-white text-uppercase mb-4" 
                  style={{ 
                    fontWeight: "800", 
                    letterSpacing: "-1px", 
                    lineHeight: "1",
                    fontFamily: "'Inter', 'Montserrat', sans-serif"
                  }}>
                How We <span className="text-primary" style={{ fontStyle: "italic", fontWeight: "400" }}>Work</span>
              </h1>
              <div className="bg-primary mb-4 d-none d-lg-block" style={{ height: "3px", width: "60px" }}></div>
              <p className="lead text-white-50 fw-light" style={{ maxWidth: "500px" }}>
                Bridging the gap between complex requirements and seamless execution 
                through our structured, agile development process.
              </p>
            </div>

            {/* RIGHT SIDE: THE PROCESS CARD */}
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="position-relative p-2 rounded-5" 
                   style={{ 
                     background: "rgba(255, 255, 255, 0.1)", 
                     backdropFilter: "blur(10px)",
                     border: "1px solid rgba(255, 255, 255, 0.2)",
                     boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
                   }}>
                <img 
                  src={banner2} 
                  alt="Our Process Diagram" 
                  className="img-fluid rounded-4 shadow-sm"
                  style={{ filter: "contrast(1.1)" }}
                />
                <div className="position-absolute top-0 end-0 m-4 badge bg-primary rounded-pill px-3 py-2">
                  SIMBESI Framework
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transition Overlay */}
        <div className="position-absolute bottom-0 w-100" 
             style={{ height: "120px", background: "linear-gradient(to top, #ffffff, transparent)" }}>
        </div>
      </section>

      {/* 2. ANALYSE SECTION (Step 01) */}
      <section className="container my-5 py-5">
        <div className="row align-items-center rounded-5 shadow-lg overflow-hidden text-white mx-0" 
             style={{ background: "linear-gradient(135deg, #0d6efd, #003d80)" }} 
             data-aos="fade-up">
          <div className="col-lg-7 p-4 p-md-5 position-relative">
            <span className="position-absolute top-0 start-0 m-4 opacity-25 display-1 fw-bold">01</span>
            <h2 className="display-4 fw-bold mb-4 mt-3">Analyse</h2>
            <p className="lead fs-5 mb-4 border-start border-4 border-white ps-3 py-2 bg-white bg-opacity-10 rounded-end">
              We think that the analysis stage is arguably the most imperative.
            </p>
            <p className="opacity-75">
              Beyond developing something beautifully designed and bug-free, you need a solution that will actually drive a return on your investment. We set up recurring meetings to obtain a complete outlook.
            </p>
          </div>
          <div className="col-lg-5 p-5 text-center bg-white bg-opacity-10" style={{backdropFilter: 'blur(5px)'}}>
            <img src={analyse} alt="Analyse" className="img-fluid rounded-4 shadow-sm bg-white p-3 transition-hover" style={{maxWidth: '80%'}} />
          </div>
        </div>
      </section>

      {/* 3. DESIGN SECTION (Step 02) */}
      <section className="container my-5">
        <div className="row align-items-center rounded-5 shadow-lg overflow-hidden text-white mx-0" 
             style={{ background: "linear-gradient(135deg, #003d80, #001233)" }} 
             data-aos="fade-up">
          <div className="col-lg-5 p-5 text-center bg-white bg-opacity-10 order-2 order-lg-1" style={{backdropFilter: 'blur(5px)'}}>
            <img src={design} alt="Design" className="img-fluid rounded-4 shadow-sm bg-white p-3" style={{maxWidth: '80%'}} />
          </div>
          <div className="col-lg-7 p-4 p-md-5 order-1 order-lg-2 text-lg-end position-relative">
            <span className="position-absolute top-0 end-0 m-4 opacity-25 display-1 fw-bold">02</span>
            <h2 className="display-4 fw-bold mb-4 mt-3">Design</h2>
            <p className="lead fs-5 mb-4 border-end border-4 border-white pe-3 py-2 bg-white bg-opacity-10 rounded-start">
              Formulating a blueprint for digital excellence.
            </p>
            <p className="opacity-75">
              A decent design is not just about aesthetics, but it also includes user interaction and experience. We keep your product's target audience in mind and design according to their taste.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DEVELOP SECTION (Step 03) */}
      <section className="container my-5 pb-5">
        <div className="row align-items-center rounded-5 shadow-lg overflow-hidden text-white mx-0" 
             style={{ background: "linear-gradient(135deg, #0d6efd, #003d80)" }} 
             data-aos="fade-up">
          <div className="col-lg-7 p-4 p-md-5 position-relative">
            <span className="position-absolute top-0 start-0 m-4 opacity-25 display-1 fw-bold">03</span>
            <h2 className="display-4 fw-bold mb-4 mt-3">Develop</h2>
            <p className="lead fs-5 mb-4 border-start border-4 border-white ps-3 py-2 bg-white bg-opacity-10 rounded-end">
              Turning code into powerful business tools.
            </p>
            <p className="opacity-75">
              We break down development tasks into manageable sprints. This allows us to devote time to review and hold in-depth feedback sessions to ensure the phase is on the right track.
            </p>
          </div>
          <div className="col-lg-5 p-5 text-center bg-white bg-opacity-10" style={{backdropFilter: 'blur(5px)'}}>
            <img src={develop} alt="Develop" className="img-fluid rounded-4 shadow-sm bg-white p-3" style={{maxWidth: '80%'}} />
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-primary fw-bold text-uppercase ls-2">Expertise</h6>
            <h2 className="display-5 fw-bold text-dark">Comprehensive Services</h2>
          </div>
          <div className="row g-4">
            {[
              { title: "Business Analysis", text: "Requirements Engineering" },
              { title: "UX Services", text: "User Journey Mapping" },
              { title: "UI Services", text: "Interface Design" },
              { title: "Quality Control", text: "Rigorous Testing" }
            ].map((service, idx) => (
              <div className="col-6 col-md-3" data-aos="fade-up" data-aos-delay={idx * 100} key={idx}>
                <div className="p-4 bg-white border-top border-5 border-primary shadow-sm rounded-4 h-100">
                  <div className="mb-3 text-primary bg-primary bg-opacity-10 rounded-circle d-inline-block px-3 py-2 fw-bold">
                    {idx + 1}
                  </div>
                  <h5 className="fw-bold mb-2">{service.title}</h5>
                  <p className="small text-muted m-0">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;