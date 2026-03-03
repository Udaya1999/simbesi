import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // SEO Import
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Code, Smartphone, Zap, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import banner2 from "../assets/img/workflow.jpg";

const Websitedev = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const navigate = useNavigate();
  const handlebtn = () => {
    navigate("/contact");
  };

  const colors = {
    navy: "#0A1D37",
    cyan: "#00B4D8",
  };

  return (
    <HelmetProvider>
      <div style={{ overflowX: 'hidden' }}>
        {/* --- SEO METADATA --- */}
        <Helmet>
          <title>Web Development Services | Simbesi - Digital Excellence</title>
          <meta name="description" content="Simbesi offers industry-leading web development, custom applications, and scalable digital ecosystems. Build your vision with our expert engineering team." />
          <meta name="keywords" content="web development, custom software, Simbesi, React development, scalable apps, digital transformation" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Engineering Digital Excellence | Simbesi" />
          <meta property="og:description" content="Custom web applications and high-performance digital solutions tailored for your business growth." />
          <meta property="og:image" content="https://yourdomain.com/simbesi-og-image.jpg" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Simbesi Web Development" />
          <meta name="twitter:description" content="Scalable digital ecosystems and enterprise platforms." />
        </Helmet>

        {/* --- HERO SECTION --- */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <div className="row align-items-center min-vh-75">
              <div className="col-lg-6" data-aos="fade-right">
                <h6 className="fw-bold text-uppercase tracking-wider mb-3" style={{ color: colors.cyan }}>
                  Web Development Services
                </h6>
                <h1 className="display-3 fw-black mb-4" style={{ color: colors.navy, lineHeight: '1.1' }}>
                  Engineering <span style={{ color: colors.cyan }}>Digital Excellence</span>
                </h1>
                <p className="lead text-muted mb-5">
                  We don't just build websites; we build scalable digital ecosystems. From high-converting landing pages to complex enterprise platforms.
                </p>
                <div className="d-flex gap-3">
                  <button onClick={handlebtn} className="btn btn-lg px-4 text-white" style={{ backgroundColor: colors.navy }}>
                    Start a Project <ArrowRight size={18} className="ms-2" />
                  </button>
                </div>
              </div>
              
              <div className="col-lg-6 mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
                <div className="position-relative">
                  <div className="rounded-4 shadow-lg overflow-hidden border border-light">
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072" 
                      className="img-fluid" 
                      alt="Professional Software Development Team working on Simbesi projects" 
                    />
                  </div>
                  <div className="position-absolute bottom-0 start-0 translate-middle-y ms-n4 p-4 bg-white shadow rounded-3 d-none d-md-block" data-aos="fade-up" data-aos-delay="500">
                    <h2 className="fw-bold mb-0" style={{ color: colors.cyan }}>100%</h2>
                    <small className="text-uppercase fw-bold text-muted">Scalability</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SOLUTIONS GRID --- */}
        <section className="py-5 bg-white">
          <div className="container py-5">
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="display-5 fw-bold" style={{ color: colors.navy }}>Comprehensive Solutions</h2>
              <div className="mx-auto mt-3" style={{ width: '60px', height: '4px', backgroundColor: colors.cyan }}></div>
            </div>

            <div className="row g-4">
              {[
                { icon: <Code />, title: "Custom Web Apps", delay: "0" },
                { icon: <Smartphone />, title: "Responsive Design", delay: "100" },
                { icon: <Zap />, title: "Performance", delay: "200" },
                { icon: <Shield />, title: "Cyber Security", delay: "300" }
              ].map((item, idx) => (
                <article className="col-md-6 col-lg-3" key={idx} data-aos="fade-up" data-aos-delay={item.delay}>
                  <div className="card h-100 border-0 p-4 shadow-sm hover-shadow transition" style={{ borderRadius: '1.5rem' }}>
                    <div className="mb-4 p-3 rounded-3 d-inline-block" style={{ backgroundColor: `${colors.cyan}15`, color: colors.cyan }}>
                      {React.cloneElement(item.icon, { size: 32 })}
                    </div>
                    <h3 className="h4 fw-bold mb-3">{item.title}</h3>
                    <p className="text-muted small">High-performance solutions tailored specifically for your business growth and user experience.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="py-5 text-white" style={{ backgroundColor: colors.navy }}>
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <h2 className="display-6 fw-bold mb-4">Our Proven Workflow</h2>
                <p className="opacity-75 mb-5">We follow a strict software development life cycle to ensure every deployment is bug-free and optimized for speed.</p>
                
                {[
                  { num: 1, title: "Strategic Discovery", color: "bg-primary" },
                  { num: 2, title: "Agile Sprints", color: "bg-info" },
                  { num: 3, title: "Global Launch", color: "bg-success" }
                ].map((step, i) => (
                  <div className="d-flex align-items-center mb-4" key={i}>
                    <div className={`flex-shrink-0 ${step.color} rounded-circle p-2 me-3`} style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{step.num}</div>
                    <div><h5 className="mb-0">{step.title}</h5></div>
                  </div>
                ))}
              </div>
              
              <div className="col-lg-7 d-none d-lg-block" data-aos="fade-left">
                <div className="p-5 rounded-5 shadow-lg" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-center text-white-50 small mb-3">Simbesi Methodology: SDLC</p>
                  

                        {/* [Image of Software Development Life Cycle (SDLC) diagram] */}
                           <img 
                                          src={banner2} 
                                          alt="Our Process Diagram" 
                                          className="img-fluid rounded-4 shadow-sm"
                                          style={{ filter: "contrast(1.1)" }}
                                        />

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-5">
          <div className="container text-center py-5" data-aos="zoom-in">
            <div className="p-5 rounded-5 shadow-lg position-relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.navy}, ${colors.cyan})` }}>
               <h2 className="display-5 fw-bold text-white mb-4">Ready to shape your vision?</h2>
               <p className="text-white-50 mb-5 max-w-2xl mx-auto lead">Join the companies using Simbesi to redefine their digital footprint.</p>
               <button onClick={handlebtn} className="btn btn-light btn-lg px-5 fw-bold py-3 rounded-pill shadow" style={{ color: colors.navy }}>
                 Contact Us Today
               </button>
            </div>
          </div>
        </section>

      
      </div>
    </HelmetProvider>
  );
};

export default Websitedev;