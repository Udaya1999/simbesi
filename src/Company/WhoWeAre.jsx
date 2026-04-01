import React, { useEffect, useMemo, useState, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Asset Imports
import bannerImg from "../assets/img/aboutbanner.jpg"; 
import whoWeAreImg from "../assets/img/aboutus1.png"; 
import visionPyramid from "../assets/img/about.jpg"; 

const WhoWeAre = () => {
  const [activeTab, setActiveTab] = useState("vision");
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  const tabKeys = useMemo(() => ["vision", "mission", "expertise"], []);
  const autoPlayRef = useRef(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  // Mouse move effect for hero section
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-switch logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlayRef.current && isPlaying) {
        setActiveTab((prev) => {
          const currentIndex = tabKeys.indexOf(prev);
          const nextIndex = (currentIndex + 1) % tabKeys.length;
          return tabKeys[nextIndex];
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [tabKeys, isPlaying]);

  const tabData = useMemo(() => ({
    vision: {
      title: "Our Vision",
      icon: "👁️",
      lead: "Create enduring value for clients whilst being a pioneer in the latest technology.",
      body: (
        <>
          <p className="text-muted mb-3">
            We adopt the latest trends and technology in the market to provide cutting-edge solutions. 
            These solutions enable our clients to revamp their performance in the highly competitive market.
          </p>
          <div className="vision-stats mt-4">
            <div className="stat-badge">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Innovation</span>
            </div>
            <div className="stat-badge">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Retention</span>
            </div>
          </div>
        </>
      ),
    },
    mission: {
      title: "Our Mission",
      icon: "🎯",
      lead: "To empower businesses through seamless digital integration and innovative software development.",
      body: (
        <div className="mission-grid">
          <div className="mission-item">
            <i className="bi bi-star-fill text-primary me-2"></i>
            <span>Enduring value for clients</span>
          </div>
          <div className="mission-item">
            <i className="bi bi-lightbulb-fill text-primary me-2"></i>
            <span>Pioneer in latest technology</span>
          </div>
          <div className="mission-item">
            <i className="bi bi-heart-fill text-primary me-2"></i>
            <span>Fostering relationships of trust</span>
          </div>
          <div className="mission-item">
            <i className="bi bi-people-fill text-primary me-2"></i>
            <span>Expert team of developers</span>
          </div>
        </div>
      ),
    },
    expertise: {
      title: "Our Expertise",
      icon: "⚡",
      lead: "A proficient, closely knitted team ready to deliver in any domain.",
      body: (
        <>
          <div className="expertise-cards">
            <div className="expertise-card">
              <div className="expertise-icon">💻</div>
              <div>Custom Software</div>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🏗️</div>
              <div>Robust Architecture</div>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🧪</div>
              <div>Advanced Testing</div>
            </div>
          </div>
          <p className="text-muted mt-4">
            With a team of consummate experts, we deliver excellence across all domains.
          </p>
        </>
      ),
    },
  }), []);

  const handleTabClick = (key) => {
    setActiveTab(key);
    autoPlayRef.current = false;
    setTimeout(() => { autoPlayRef.current = true; }, 8000);
  };

  return (
    <main className="overflow-hidden bg-white">
      <Helmet>
        <title>Who We Are | SIMBESI - Shape Your Vision</title>
        <meta name="description" content="SIMBESI is a catalyst for digital evolution." />
      </Helmet>

      {/* --- MODERN HERO SECTION WITH PARALLAX --- */}
      <section className="hero-section" ref={heroRef}>
        <div 
          className="hero-bg"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)`,
          }}
        >
          <img src={bannerImg} alt="SIMBESI Banner" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          
          <div className="container text-center position-relative z-3">
            <span className="hero-badge" data-aos="fade-down">Innovation Since 2015</span>
            <h1 className="hero-title" data-aos="zoom-out">
              Who We <span className="gradient-text">Are</span>
            </h1>
            <div className="hero-divider" data-aos="fade-up" data-aos-delay="100">
              <div className="divider-line"></div>
              <div className="divider-icon">
                <i className="bi bi-infinity"></i>
              </div>
              <div className="divider-line"></div>
            </div>
            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
              Defining Digital Excellence Through Innovation & Technology
            </p>
            <div className="hero-cta" data-aos="fade-up" data-aos-delay="300">
              <button className="btn-glow">
                Discover Our Journey
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <div className="arrow-down"></div>
        </div>
      </section>

      {/* --- CORE IDENTITY SECTION WITH GLASS MORPHISM --- */}
      <section className="identity-section">
        <div className="container">
          <div className="identity-card" data-aos="fade-up">
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-7 identity-content">
                <div className="content-wrapper">
                  <span className="section-badge">Our Story</span>
                  <h2 className="identity-title">
                    Innovation Driven <br />
                    by <span className="gradient-text">Change</span>
                  </h2>
                  <p className="identity-text">
                    SIMBESI is a catalyst for digital evolution. We help businesses bridge 
                    the gap between traditional operations and future-ready technological integration.
                  </p>
                  <blockquote className="identity-quote">
                    <i className="bi bi-quote"></i>
                    <p>
                      "Our aim is to change people's lives and improve businesses with our 
                      progressive and innovative technology solutions."
                    </p>
                  </blockquote>
                  <div className="identity-footer">
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>Amaravathi, India</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 identity-visual">
                <div className="visual-wrapper">
                  <img src={whoWeAreImg} alt="SIMBESI Team" />
                  <div className="glow-effect"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STRATEGIC PILLARS WITH AUTO-SWITCHING TABS --- */}
      <section className="pillars-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-badge">Core Values</span>
            <h2 className="section-title">Vision & <span className="gradient-text">Mission</span></h2>
            <p className="section-subtitle">
              Guiding principles that drive our success and shape our future
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
              <div className="pyramid-wrapper">
                <img src={visionPyramid} alt="Business Strategy" className="pyramid-img" />
                <div className="pulse-ring"></div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="tabs-wrapper">
                <div className="tabs-header">
                  {tabKeys.map((key) => (
                    <button
                      key={key}
                      className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                      onClick={() => handleTabClick(key)}
                    >
                      <span className="tab-icon">{tabData[key].icon}</span>
                      <span className="tab-name">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    </button>
                  ))}
                  <button 
                    className={`play-pause-btn ${!isPlaying ? 'paused' : ''}`}
                    onClick={() => setIsPlaying(!isPlaying)}
                    title={isPlaying ? "Pause Auto-rotate" : "Play Auto-rotate"}
                  >
                    <i className={`bi bi-${isPlaying ? 'pause-fill' : 'play-fill'}`}></i>
                  </button>
                </div>

                <div className="tab-content-wrapper">
                  <div className="tab-pane active">
                    <h3 className="tab-title">
                      {tabData[activeTab].title}
                    </h3>
                    <p className="tab-lead">
                      {tabData[activeTab].lead}
                    </p>
                    <div className="tab-body">
                      {tabData[activeTab].body}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Modern CSS Reset & Variables */
        :root {
          --primary: #0d6efd;
          --primary-dark: #0b5ed7;
          --secondary: #00b4aa;
          --dark: #001428;
          --light: #f8f9fa;
          --gradient: linear-gradient(135deg, #0d6efd, #00b4aa);
          --glass: rgba(255, 255, 255, 0.1);
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 700px;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          transition: transform 0.3s ease-out;
        }

        .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,20,40,0.85), rgba(0,20,40,0.7));
        }

        .hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(13, 110, 253, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          color: white;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .hero-title {
          font-size: 80px;
          font-weight: 800;
          color: white;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #0d6efd, #00b4aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .divider-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #0d6efd, transparent);
        }

        .divider-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          color: #0d6efd;
          font-size: 20px;
        }

        .hero-subtitle {
          font-size: 20px;
          color: rgba(255,255,255,0.8);
          max-width: 600px;
          margin: 0 auto 32px;
        }

        .btn-glow {
          padding: 14px 36px;
          background: linear-gradient(135deg, #0d6efd, #00b4aa);
          border: none;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(13, 110, 253, 0.3);
        }

        .btn-glow:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(13, 110, 253, 0.4);
        }

        /* Floating Shapes */
        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          background: rgba(13, 110, 253, 0.1);
          border-radius: 50%;
          animation: float 20s infinite;
        }

        .shape-1 { width: 300px; height: 300px; top: 10%; left: -100px; animation-delay: 0s; }
        .shape-2 { width: 200px; height: 200px; bottom: 20%; right: -50px; animation-delay: -5s; }
        .shape-3 { width: 150px; height: 150px; top: 50%; left: 50%; animation-delay: -10s; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          text-align: center;
        }

        .mouse {
          width: 30px;
          height: 50px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 20px;
          position: relative;
          margin-bottom: 8px;
        }

        .mouse::before {
          content: '';
          width: 4px;
          height: 8px;
          background: white;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
          animation: scroll 2s infinite;
        }

        @keyframes scroll {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        }

        /* Identity Section */
        .identity-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }

        .identity-card {
          background: white;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        .identity-content {
          padding: 60px;
        }

        .section-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .identity-title {
          font-size: 48px;
          font-weight: 800;
          color: #001428;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .identity-text {
          font-size: 18px;
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .identity-quote {
          background: linear-gradient(135deg, #f8f9fa, #ffffff);
          padding: 24px;
          border-radius: 20px;
          margin-bottom: 24px;
          position: relative;
        }

        .identity-quote i {
          font-size: 32px;
          color: #0d6efd;
          opacity: 0.5;
          position: absolute;
          top: 20px;
          left: 20px;
        }

        .identity-quote p {
          margin-left: 40px;
          font-style: italic;
          color: #495057;
        }

        .identity-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #0d6efd;
        }

        .identity-visual {
          background: linear-gradient(135deg, #0d6efd, #00b4aa);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
          position: relative;
          overflow: hidden;
        }

        .visual-wrapper {
          position: relative;
          z-index: 2;
        }

        .visual-wrapper img {
          max-width: 100%;
          border-radius: 20px;
          transform: perspective(1000px) rotateY(-10deg);
          transition: transform 0.5s ease;
        }

        .visual-wrapper:hover img {
          transform: perspective(1000px) rotateY(0deg);
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        /* Pillars Section */
        .pillars-section {
          padding: 100px 0;
          background: white;
        }

        .section-header {
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 48px;
          font-weight: 800;
          color: #001428;
          margin: 16px 0;
        }

        .section-subtitle {
          font-size: 18px;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
        }

        .pyramid-wrapper {
          position: relative;
        }

        .pyramid-img {
          max-width: 100%;
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          border: 2px solid #0d6efd;
          border-radius: 50%;
          animation: pulse-ring 2s infinite;
        }

        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }

        /* Tabs */
        .tabs-wrapper {
          background: white;
          border-radius: 30px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .tabs-header {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
          border-bottom: 2px solid #e9ecef;
          padding-bottom: 16px;
          position: relative;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: transparent;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          color: #6c757d;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tab-btn.active {
          background: linear-gradient(135deg, #0d6efd, #00b4aa);
          color: white;
          box-shadow: 0 4px 15px rgba(13, 110, 253, 0.3);
        }

        .tab-icon {
          font-size: 20px;
        }

        .play-pause-btn {
          position: absolute;
          right: 0;
          top: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .play-pause-btn:hover {
          background: #0d6efd;
          color: white;
        }

        .tab-title {
          font-size: 28px;
          font-weight: 700;
          color: #001428;
          margin-bottom: 16px;
        }

        .tab-lead {
          font-size: 18px;
          color: #0d6efd;
          font-weight: 500;
          margin-bottom: 24px;
          padding-left: 16px;
          border-left: 3px solid #0d6efd;
        }

        .vision-stats {
          display: flex;
          gap: 20px;
          margin-top: 24px;
        }

        .stat-badge {
          background: linear-gradient(135deg, #f8f9fa, #ffffff);
          padding: 16px;
          border-radius: 16px;
          text-align: center;
          flex: 1;
          border: 1px solid #e9ecef;
        }

        .stat-number {
          display: block;
          font-size: 24px;
          font-weight: 800;
          color: #0d6efd;
        }

        .stat-label {
          font-size: 12px;
          color: #6c757d;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .mission-item {
          display: flex;
          align-items: center;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .mission-item:hover {
          transform: translateX(5px);
          background: rgba(13, 110, 253, 0.05);
        }

        .expertise-cards {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
        }

        .expertise-card {
          flex: 1;
          text-align: center;
          padding: 20px;
          background: linear-gradient(135deg, #f8f9fa, #ffffff);
          border-radius: 20px;
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .expertise-card:hover {
          transform: translateY(-5px);
          border-color: #0d6efd;
        }

        .expertise-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .hero-title { font-size: 48px; }
          .identity-content { padding: 40px; }
          .identity-title { font-size: 36px; }
          .section-title { font-size: 36px; }
          .mission-grid { grid-template-columns: 1fr; }
          .expertise-cards { flex-direction: column; }
          .tabs-header { flex-wrap: wrap; }
          .play-pause-btn { position: static; margin-top: 10px; }
        }

        @media (max-width: 768px) {
          .hero-section { min-height: 600px; }
          .hero-title { font-size: 36px; }
          .identity-content { padding: 24px; }
          .tabs-wrapper { padding: 24px; }
        }
      `}</style>
    </main>
  );
};

export default WhoWeAre;