import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async'; // SEO Integration
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Asset Imports
import careerBanner from "../assets/img/aboutbanner1.jpg"; 
import workWithUsImg from "../assets/img/why-us.png"; 

const Careers = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-back' 
    });
  }, []);

  const jobOpenings = [
    { title: "HR Associate", experience: "6 Months to 2 Years", link: "mailto:hr@simbesi.com" },
    { title: "Software Developer (iOS)", experience: "1 to 2 Years", link: "mailto:hr@simbesi.com" },
    { title: "Software Developer – Android", experience: "1-3 Years", link: "mailto:hr@simbesi.com" },
    { title: "Software Developer", experience: "Freshers", link: "mailto:hr@simbesi.com" },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* SEO METADATA SECTION */}
      <Helmet>
        <title>Jobs & Careers | Join SIMBESI</title>
        <meta name="description" content="Join us on our journey to innovate and excel. Explore current job openings and career opportunities at SIMBESI." />
        <meta name="keywords" content="SIMBESI Careers, Software Developer Jobs, HR Associate Openings, Freshers IT Jobs, Work at SIMBESI" />
        
        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Career Opportunities at SIMBESI" />
        <meta property="og:description" content="Build the next generation of mobile and web applications with us. Explore our current openings." />
        <meta property="og:image" content={careerBanner} />
      </Helmet>

      {/* 1. HERO SECTION: Cinematic High-Contrast Typography */}
      <section className="position-relative d-flex align-items-center justify-content-center bg-dark" style={{ height: "450px" }}>
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img 
            src={careerBanner} 
            alt="SIMBESI Career Banner" 
            className="w-100 h-100 object-fit-cover"
            style={{ filter: "brightness(0.7)" }} 
          />
          <div className="position-absolute top-0 start-0 w-100 h-100" 
               style={{ background: "radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)" }}>
          </div>
        </div>
        
        <div className="container position-relative text-center text-white z-1">
          <p className="text-uppercase fw-bold mb-3 tracking-widest text-primary" 
             style={{ letterSpacing: "8px", fontSize: "0.85rem", opacity: "0.9" }} 
             data-aos="fade-down">
             Opportunity Awaits
          </p>

          <h1 className="display-2 text-uppercase mb-4" 
              style={{ 
                  fontWeight: "800", 
                  letterSpacing: "1px", 
                  lineHeight: "1",
                  fontFamily: "'Inter', 'Montserrat', sans-serif",
              }} 
              data-aos="zoom-out">
              Join the <span className="text-primary" style={{ fontStyle: "italic", fontWeight: "400" }}>Vision</span>
          </h1>

          <div className="mx-auto bg-primary mb-4" style={{ height: "2px", width: "60px" }}></div>

          <p className="lead fw-light mx-auto" 
             style={{ 
                 maxWidth: "650px", 
                 fontSize: "1.25rem", 
                 lineHeight: "1.7",
                 color: "rgba(255, 255, 255, 0.85)" 
             }}>
              We work on your ideas to make your ideas work. Build the next generation 
              of mobile and web applications with <span className="fw-bold text-white">SIMBESI</span>.
          </p>
        </div>

        <div className="position-absolute bottom-0 w-100" 
             style={{ height: "150px", background: "linear-gradient(to top, #ffffff 0%, transparent 100%)" }}>
        </div>
      </section>

      {/* 2. CULTURE SECTION: Gradient & Glassmorphism */}
      <section className="container my-5 py-5">
        <div className="row g-0 align-items-stretch rounded-5 shadow-2xl overflow-hidden text-white" 
             style={{ background: "linear-gradient(135deg, #001f3f 0%, #007bff 100%)" }} 
             data-aos="fade-up">
          
          <div className="col-lg-7 p-4 p-md-5 d-flex flex-column justify-content-center">
            <h6 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: "4px", color: "#6fb1fc" }}>Work With Simbesi</h6>
            <h2 className="display-4 fw-bold mb-4" style={{ letterSpacing: "-1px" }}>Where Talent Meets Opportunity</h2>
            <p className="fs-5 opacity-90 mb-4 lh-lg">
              Each employee at SIMBESI is an asset. We foster an open work culture with limitless opportunities and the freedom of expression required to innovate.
            </p>
            <div className="border-start border-4 border-primary ps-4 py-2 mb-4 bg-white bg-opacity-10 rounded-end">
              <p className="mb-0 fst-italic">
                "We are looking for passionate people ready to go the extra mile for customer satisfaction and technical excellence."
              </p>
            </div>
          </div>

          <div className="col-lg-5 p-5 bg-black bg-opacity-20 d-flex align-items-center justify-content-center" 
               style={{ backdropFilter: "blur(12px)" }}>
            <img src={workWithUsImg} alt="SIMBESI Workplace Culture" className="img-fluid rounded-4" style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))" }} />
          </div>
        </div>
      </section>

      {/* 3. OPENINGS GRID */}
      <section className="bg-light py-5">
        <div className="container py-4">
          <div className="row align-items-end mb-5 text-center text-md-start">
            <div className="col-md-8">
              <h6 className="text-primary text-uppercase fw-bold" style={{ letterSpacing: "2px" }}>Current Openings</h6>
              <h2 className="display-5 fw-bold text-dark">Ready to make a move?</h2>
            </div>
            <div className="col-md-4 text-md-end d-none d-md-block">
              <div className="bg-primary d-inline-block" style={{ height: "4px", width: "80px" }}></div>
            </div>
          </div>

          <div className="row g-4">
            {jobOpenings.map((job, idx) => (
              <div className="col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 position-relative overflow-hidden job-card-hover" 
                     style={{ 
                       transition: "all 0.3s ease",
                       background: "#ffffff"
                     }}>
                  <div className="position-absolute top-0 start-0 h-100 bg-primary" style={{ width: "5px" }}></div>
                  
                  <div className="card-body p-2">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h4 className="fw-bold text-dark text-uppercase mb-0" style={{ fontSize: "1.1rem", letterSpacing: "1px" }}>
                        {job.title}
                      </h4>
                      <span className="badge bg-light text-primary border border-primary-subtle">Full-Time</span>
                    </div>
                    
                    <p className="text-muted mb-4 d-flex align-items-center">
                      <i className="bi bi-briefcase me-2"></i>
                      Experience: <span className="fw-bold ms-1 text-dark">{job.experience}</span>
                    </p>
                    
                    <a href={job.link} className="btn btn-primary rounded-pill px-4 py-2 fw-bold text-uppercase small shadow-sm">
                      Apply Now <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
          .job-card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
            background: #f8f9ff !important;
          }
          .tracking-widest { letter-spacing: 8px; }
        `}
      </style>
    </div>
  );
};

export default Careers;