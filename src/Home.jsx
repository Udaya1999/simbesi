import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Assets
import bgVideo from "./assets/vid/ai-bg-video.mp4";
import WhyChoose from './Company/WhyChoose';
import AICapabilities from './Company/AICapabilities';
import AIProcess from './Company/AIProcess';
import Industries from './Company/Industries';
import ReadyToBuild from './Company/ReadyToBuild';
import logo from "./assets/img/logonew.png";

// Use existing images or create fallbacks
// Option 1: Use your existing logo as fallback for OG images
const defaultOgImage = logo;

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ 
      duration: 1200, 
      once: false,
      mirror: true 
    });
    if (videoRef.current) {
      videoRef.current.play().catch(() => console.log("Autoplay interaction required"));
    }
  }, []);

  const handleContact = () => navigate("/contact");
  const handelViewOurWork = () => navigate("/androidappdev");

  const solutions = [
    { title: "AI Mobile Apps", icon: "🤖", desc: "Smart applications integrated with Machine Learning, NLP, and Computer Vision." },
    { title: "Android & iOS", icon: "📱", desc: "Native and cross-platform mobile apps with AI at their core." },
    { title: "Deep Learning", icon: "🧠", desc: "Custom ML models: TensorFlow, PyTorch, CNN, RNN, and LSTM." },
    { title: "Conversational AI", icon: "💬", desc: "Intelligent chatbots that provide human-like experiences." },
    { title: "Computer Vision", icon: "👁️", desc: "Real-time recognition, object detection, and augmented reality." },
    { title: "Voice & Speech AI", icon: "🎙️", desc: "Text-to-speech and natural language understanding." }
  ];

  return (
    <>
      {/* ==================== COMPREHENSIVE SEO CONFIGURATION ==================== */}
      <Helmet>
        {/* ===== PRIMARY META TAGS ===== */}
        <html lang="en" />
        <title>SIMBESI - Shape Your Vision | AI-Powered Digital Transformation</title>
        <meta name="title" content="SIMBESI - Shape Your Vision | AI-Powered Digital Transformation" />
        <meta name="description" content="SIMBESI helps businesses adapt and adopt digital transformation through innovative AI-powered mobile solutions, web development, and IT consulting. Expert team with 150+ successful deployments across healthcare, finance, retail, and more." />
        <meta name="keywords" content="SIMBESI, digital transformation, AI development, mobile app development, Android development, iOS development, web development, IT consulting, machine learning, conversational AI, software maintenance, technology solutions" />
        <meta name="author" content="SIMBESI" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="General" />
        
        {/* ===== VIEWPORT & MOBILE OPTIMIZATION ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#0A1332" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SIMBESI" />
        
        {/* ===== CANONICAL URL ===== */}
        <link rel="canonical" href="https://simbesi.onrender.com/" />
        <link rel="alternate" href="https://simbesi.onrender.com/" hreflang="en" />
        
        {/* ===== FAVICON & ICONS ===== */}
        <link rel="icon" type="image/png" href={logo} />
        <link rel="apple-touch-icon" href={logo} />
        
        {/* ===== OPEN GRAPH / FACEBOOK / LINKEDIN ===== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simbesi.onrender.com/" />
        <meta property="og:title" content="SIMBESI - Shape Your Vision | AI-Powered Digital Transformation" />
        <meta property="og:description" content="Precision-engineered AI mobile solutions for digital transformation. 150+ successful deployments across healthcare, finance, retail, and more. Build your vision with SIMBESI." />
        <meta property="og:image" content={logo} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SIMBESI - AI-Powered Digital Transformation Solutions" />
        <meta property="og:site_name" content="SIMBESI" />
        <meta property="og:locale" content="en_US" />
        
        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://simbesi.onrender.com/" />
        <meta name="twitter:title" content="SIMBESI - Shape Your Vision | AI-Powered Digital Transformation" />
        <meta name="twitter:description" content="AI-powered mobile solutions for digital transformation. 150+ successful deployments. Expert team of AI engineers and developers." />
        <meta name="twitter:image" content={logo} />
        <meta name="twitter:image:alt" content="SIMBESI - Innovative Technology Solutions" />
        <meta name="twitter:site" content="@simbesi" />
        <meta name="twitter:creator" content="@simbesi" />
        
        {/* ===== BUSINESS & GEO TAGS ===== */}
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />
        
        {/* ===== SERVICE-SPECIFIC KEYWORDS FOR SEO ===== */}
        <meta name="services" content="Android App Development, iOS App Development, Web Development, AI & Machine Learning, Conversational AI, IT Consulting, Software Maintenance" />
        
        {/* ===== STRUCTURED DATA (JSON-LD) ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SIMBESI",
            "url": "https://simbesi.onrender.com",
            "logo": logo,
            "description": "SIMBESI helps businesses adapt and adopt digital transformation through innovative AI-powered mobile solutions.",
            "sameAs": [
              "https://www.linkedin.com/company/simbesi",
              "https://twitter.com/simbesi"
            ],
            "foundingDate": "2015",
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "50"
            }
          })}
        </script>
        
        {/* ===== BREADCRUMB STRUCTURED DATA ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://simbesi.onrender.com/"
            }]
          })}
        </script>
      </Helmet>

      <main className="rich-experience-wrapper">
        {/* --- HERO SECTION WITH MASKED VIDEO --- */}
        <section className="hero-viewport">
          <video ref={videoRef} autoPlay loop muted playsInline className="hero-video-bg">
            <source src={bgVideo} type="video/mp4" />
          </video>
          
          <div className="hero-overlay-gradient"></div>

          <div className="container hero-content text-center">
            <div className="badge-ai mb-3" data-aos="fade-down">Future-Ready Technology</div>
            <h1 className="hero-main-title mb-3" data-aos="zoom-out" data-aos-delay="200">
              Shaping the <span className="glow-text">Future</span> of AI Mobility
            </h1>
            <p className="hero-subtitle mb-5" data-aos="fade-up" data-aos-delay="400">
              Precision-engineered mobile solutions powered by Simbesi Intelligence.
            </p>
            
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="600">
              <button onClick={handleContact} className="btn-glow-primary">Start Your AI Project →</button>
              <button onClick={handelViewOurWork} className="btn-glass-secondary">View Our Work</button>
            </div>

            {/* --- FLOATING STATS BAR --- */}
            <div className="stats-glass-card" data-aos="flip-up" data-aos-delay="800">
              <div className="row g-0 py-4">
                {[
                  { n: "150+", l: "Deployments", s: "Live AI Apps" },
                  { n: "98%", l: "Success Rate", s: "Client Loyalty" },
                  { n: "10+", l: "Years", s: "Tech Evolution" },
                  { n: "50+", l: "Experts", s: "AI Engineers" }
                ].map((stat, i) => (
                  <div className="col-6 col-md-3 stat-block" key={i}>
                    <div className="stat-value">{stat.n}</div>
                    <div className="stat-label">{stat.l}</div>
                    <div className="stat-sub">{stat.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- SOLUTIONS GRID WITH FLOATING CARDS --- */}
        <section className="solutions-outer-space py-5">
          <div className="container py-5 text-center">
            <h2 className="section-title-rich mb-5" data-aos="fade-right">Intelligent Solutions - Powered by <span className="glow-text">AI</span></h2>
            
            <div className="row g-4">
              {solutions.map((item, index) => (
                <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="glass-solution-card">
                    <div className="icon-sphere">{item.icon}</div>
                    <h3 className="card-heading">{item.title}</h3>
                    <p className="card-paragraph">{item.desc}</p>
                    <div className="card-shine-effect"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyChoose />
        <AICapabilities />
        <AIProcess />
        <Industries />
        <ReadyToBuild />
      </main>

      <style>{`
        :root {
          --s-navy: #0A1332;
          --s-blue: #0046AD;
          --s-cyan: #00D2FF;
          --s-glass: rgba(255, 255, 255, 0.05);
        }

        .rich-experience-wrapper { background: var(--s-navy); color: #fff; overflow-x: hidden; }

        /* Hero Styling */
        .hero-viewport { height: 100vh; position: relative; display: flex; align-items: center; overflow: hidden; }
        .hero-video-bg { position: absolute; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(0.6); }
        .hero-overlay-gradient { 
          position: absolute; width: 100%; height: 100%; z-index: 1;
          background: radial-gradient(circle at center, rgba(10,19,50,0.2) 0%, var(--s-navy) 90%);
        }
        .hero-content { z-index: 2; position: relative; }

        .badge-ai { 
          display: inline-block; padding: 6px 20px; border-radius: 30px; 
          background: rgba(0, 210, 255, 0.1); border: 1px solid var(--s-cyan);
          color: var(--s-cyan); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px;
        }

        .hero-main-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-family: 'Outfit', sans-serif; font-weight: 800; }
        .glow-text { color: var(--s-cyan); text-shadow: 0 0 30px rgba(0, 210, 255, 0.5); }
        .hero-subtitle { font-size: 1.25rem; color: rgba(255,255,255,0.6); max-width: 600px; margin: 0 auto; }

        /* Buttons */
        .btn-glow-primary {
          background: var(--s-cyan); color: var(--s-navy); padding: 16px 45px; border-radius: 50px;
          border: none; font-weight: 800; transition: 0.4s; box-shadow: 0 0 20px rgba(0,210,255,0.4);
          cursor: pointer;
        }
        .btn-glow-primary:hover { transform: scale(1.05); box-shadow: 0 0 40px rgba(0,210,255,0.7); }

        .btn-glass-secondary {
          background: rgba(255,255,255,0.05); color: #fff; padding: 16px 45px; border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(10px); transition: 0.4s; margin-left: 15px;
          cursor: pointer;
        }
        .btn-glass-secondary:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-2px);
        }

        /* Stats Card */
        .stats-glass-card {
          margin-top: 80px; background: rgba(255, 255, 255, 0.03); 
          backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px; padding: 10px; box-shadow: 0 40px 100px rgba(0,0,0,0.5);
        }
        .stat-block { border-right: 1px solid rgba(255,255,255,0.1); transition: 0.3s; }
        .stat-block:last-child { border-right: none; }
        .stat-value { color: var(--s-cyan); font-size: 2.8rem; font-weight: 800; font-family: 'Outfit'; }
        .stat-label { font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; }
        .stat-sub { color: rgba(255,255,255,0.4); font-size: 0.75rem; }

        /* Solutions Section */
        .solutions-outer-space { background: linear-gradient(180deg, var(--s-navy) 0%, #050814 100%); }
        .section-title-rich { font-family: 'Outfit'; font-size: 3rem; font-weight: 800; color: #fff; }

        .glass-solution-card {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08);
          padding: 50px 35px; border-radius: 24px; position: relative; overflow: hidden;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1); text-align: left; height: 100%;
          cursor: pointer;
        }
        .glass-solution-card:hover {
          background: rgba(0, 70, 173, 0.1); border-color: var(--s-cyan);
          transform: translateY(-15px) scale(1.02);
        }
        .icon-sphere { 
          width: 70px; height: 70px; background: rgba(0, 210, 255, 0.1); 
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-size: 2.5rem; margin-bottom: 25px; box-shadow: inset 0 0 20px rgba(0,210,255,0.2);
        }
        .card-heading { font-family: 'Outfit'; font-weight: 700; font-size: 1.5rem; margin-bottom: 1rem; }
        .card-paragraph { color: rgba(255,255,255,0.5); font-size: 0.95rem; line-height: 1.6; }
        
        .card-shine-effect {
          position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          transition: 0.8s;
        }
        .glass-solution-card:hover .card-shine-effect { left: 100%; }

        @media (max-width: 768px) {
          .stat-block { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 20px 0; }
          .btn-glass-secondary { margin-left: 0; margin-top: 10px; }
          .glass-solution-card { padding: 30px 20px; }
          .hero-actions { display: flex; flex-direction: column; gap: 15px; align-items: center; }
          .btn-glow-primary, .btn-glass-secondary { width: 100%; max-width: 280px; margin: 0; }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .glass-solution-card { padding: 35px 25px; }
          .card-heading { font-size: 1.3rem; }
        }
      `}</style>
    </>
  );
};

export default Home;