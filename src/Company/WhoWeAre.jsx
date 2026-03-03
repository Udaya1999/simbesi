import React, { useEffect, useMemo } from "react";
import { Helmet } from 'react-helmet-async'; // Crucial for your Google search result look
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Asset Imports
import bannerImg from "../assets/img/aboutbanner.jpg"; 
import whoWeAreImg from "../assets/img/aboutus1.png"; 
import visionPyramid from "../assets/img/about.jpg"; 

const WhoWeAre = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const tabData = useMemo(() => ({
    vision: {
      title: "Our Vision",
      lead: "Create enduring value for clients whilst being a pioneer in the latest technology.",
      body: "Our vision supports us as a rock-solid foundation to be a leader in the IT industry and foster a relationship of trust with our clients."
    },
    mission: {
      title: "Our Mission",
      lead: "To empower businesses through seamless digital integration and innovative software development strategies.",
      body: "We strive to bridge the gap between complex technology and practical business solutions."
    },
    expertise: {
      title: "Our Expertise",
      lead: "Highly experienced developers making sure every product meets specific requirements.",
      body: "From cloud architecture to custom mobile applications, we build with scalability in mind."
    }
  }), []);

  return (
    <main className="overflow-hidden bg-white">
      {/* 1. SEO METADATA SECTION */}
      <Helmet>
        <title>Who We Are | SIMBESI - Shape Your Vision</title>
        <meta name="description" content="SIMBESI is a catalyst for digital evolution. We help businesses bridge the gap between traditional operations and future-ready technological integration." />
        <meta name="keywords" content="SIMBESI, AI Development India, Software Innovation, Digital Transformation" />
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Who We Are | SIMBESI" />
        <meta property="og:description" content="Innovation driven by change. Learn about our mission to empower businesses through technology." />
        <meta property="og:image" content={bannerImg} />
      </Helmet>

      {/* 2. HERO SECTION */}
      <section className="position-relative d-flex align-items-center justify-content-center bg-dark" style={{ height: "450px" }}>
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img 
            src={bannerImg} 
            alt="SIMBESI - Shaping the future of digital excellence" 
            className="w-100 h-100 object-fit-cover" 
            style={{ filter: "brightness(0.65)" }}
            loading="eager"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100" 
               style={{ background: "radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%)" }}>
          </div>
        </div>

        <div className="container position-relative z-1 text-center">
          <h1 className="display-1 text-white text-uppercase mb-3 hero-title" data-aos="zoom-out">
            Who We <span className="text-primary italic-font">Are</span>
          </h1>

          <div className="d-flex align-items-center justify-content-center gap-3 mt-4" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-primary" style={{ height: "2px", width: "40px" }}></div>
            <p className="text-white text-uppercase fw-bold mb-0 small tracking-6">
              Defining Digital Excellence
            </p>
            <div className="bg-primary" style={{ height: "2px", width: "40px" }}></div>
          </div>
        </div>

        <div className="position-absolute bottom-0 w-100" 
             style={{ height: "100px", background: "linear-gradient(to top, #ffffff, transparent)" }}>
        </div>
      </section>

      {/* 3. CORE IDENTITY SECTION */}
      <section className="container my-5 py-5">
        <article className="row g-0 align-items-stretch rounded-5 shadow-lg overflow-hidden text-white identity-gradient" 
                 data-aos="fade-up">
          
          <div className="col-lg-7 p-4 p-md-5 d-flex flex-column justify-content-center">
            <h6 className="text-uppercase fw-bold mb-3 tracking-3 text-white-50">Our Story</h6>
            <h2 className="display-4 fw-bold mb-4 ls-tight">Innovation Driven <br className="d-none d-md-block" /> by <span className="text-warning">Change</span></h2>
            <p className="lead fs-5 opacity-90 mb-4">
              SIMBESI is a catalyst for digital evolution. We help businesses 
              bridge the gap between traditional operations and future-ready 
              technological integration.
            </p>
            <blockquote className="border-start border-4 border-warning ps-4 py-2 mb-4 bg-white bg-opacity-10 rounded-end">
              <p className="mb-0 fst-italic opacity-90">
                "Our aim is to change people's lives and improve businesses with our 
                progressive and innovative technology solutions."
              </p>
            </blockquote>
            <p className="small text-white opacity-75 text-uppercase fw-bold mt-2">
              <i className="bi bi-geo-alt-fill me-2 text-warning"></i>Amaravathi, India
            </p>
          </div>

          <div className="col-lg-5 p-0 d-none d-lg-flex align-items-center justify-content-center glass-sidebar">
            <div className="p-5">
              <img
                src={whoWeAreImg}
                alt="SIMBESI Team working on innovative digital strategies"
                className="img-fluid rounded-4 shadow-lg identity-img-3d"
              />
            </div>
          </div>
        </article>
      </section>

      {/* 4. STRATEGIC PILLARS SECTION */}
      <section className="container py-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-5 mb-md-0" data-aos="fade-right">
            <div className="position-relative d-inline-block">
               <img src={visionPyramid} alt="Simbesi Business Strategy Pyramid" className="img-fluid rounded-5 shadow-sm" />
               <div className="position-absolute top-100 start-50 translate-middle-x bg-primary rounded-circle mt-3 pulse-dot"></div>
            </div>
          </div>

          <div className="col-md-7 ps-md-5" data-aos="fade-left">
            <h6 className="text-primary text-uppercase fw-bold mb-3 tracking-2">Our Core Values</h6>
            <h2 className="display-5 fw-bold text-dark mb-4 ls-tight">Vision & Mission</h2>
            
            <nav>
              <ul className="nav nav-pills custom-pill-nav mb-4" id="pills-tab" role="tablist">
                {Object.keys(tabData).map((key) => (
                  <li className="nav-item" role="presentation" key={key}>
                    <button 
                      className={`nav-link ${key === 'vision' ? 'active' : ''} px-4 py-2 me-3 rounded-pill fw-bold border border-2 text-uppercase small`} 
                      id={`pills-${key}-tab`} 
                      data-bs-toggle="pill" 
                      data-bs-target={`#pills-${key}`} 
                      type="button" 
                      role="tab"
                      aria-controls={`pills-${key}`}
                      aria-selected={key === 'vision'}>
                      {key}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="tab-content pt-3" id="pills-tabContent">
              {Object.entries(tabData).map(([key, value], index) => (
                <div className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} 
                     id={`pills-${key}`} 
                     role="tabpanel" 
                     aria-labelledby={`pills-${key}-tab`}
                     key={key}>
                  <h4 className="fw-bold text-dark mb-3">{value.title}</h4>
                  <p className="fs-5 text-dark fw-medium border-start border-primary border-4 ps-3 mb-3">{value.lead}</p>
                  <p className="text-muted lead fs-6">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTION CSS */}
      <style>{`
        .hero-title {
          font-weight: 800 !important;
          letter-spacing: -1px !important;
          line-height: 1 !important;
          font-family: 'Outfit', sans-serif;
        }
        .italic-font { font-style: italic; font-weight: 400 !important; }
        .tracking-6 { letter-spacing: 6px; }
        .tracking-3 { letter-spacing: 3px; }
        .tracking-2 { letter-spacing: 2px; }
        .ls-tight { letter-spacing: -1.5px; }
        .identity-gradient { background: linear-gradient(135deg, #0046AD 0%, #00D2FF 100%); }
        .glass-sidebar { background: rgba(0, 0, 0, 0.05); backdrop-filter: blur(15px); }
        .identity-img-3d { 
          transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
          transition: transform 0.5s ease;
        }
        .identity-img-3d:hover { transform: perspective(1000px) rotateY(0deg) rotateX(0deg); }
        .pulse-dot { width: 15px; height: 15px; animation: pulse 2s infinite; }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(13, 110, 253, 0); }
          100% { box-shadow: 0 0 0 0 rgba(13, 110, 253, 0); }
        }
        .custom-pill-nav .nav-link { color: #0046AD; border-color: transparent; transition: all 0.3s ease; }
        .custom-pill-nav .nav-link.active { background-color: #0046AD; color: white; border-color: #0046AD; }
      `}</style>
    </main>
  );
};

export default WhoWeAre;