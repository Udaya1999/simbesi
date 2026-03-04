import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// --- High-Quality Data Science Imagery (Internet Sources) ---
const HERO_IMG = "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Dashboard/Code
const PREDICTIVE_IMG = "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Analysis
const ML_IMG = "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"; // AI/Neural
const BIGDATA_IMG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop"; // Global Data

const DS_SERVICES = [
  { 
    id: "predictive", 
    title: "Predictive Analytics", 
    icon: "bi-graph-up-arrow", 
    img: PREDICTIVE_IMG, 
    text: "Anticipate market shifts before they happen. Our models analyze historical patterns to forecast future trends with up to 95% accuracy." 
  },
  { 
    id: "ml", 
    title: "Machine Learning", 
    icon: "bi-cpu", 
    img: ML_IMG, 
    text: "Automate complex decision-making with custom-built neural networks and reinforcement learning algorithms tailored to your business logic." 
  },
  { 
    id: "viz", 
    title: "Data Visualization", 
    icon: "bi-pie-chart", 
    img: BIGDATA_IMG, 
    text: "Turn 'noise' into narrative. We build high-performance, real-time dashboards that make petabytes of data digestible for stakeholders." 
  }
];

const DataScience = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const currentService = DS_SERVICES[activeIndex];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DS_SERVICES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ds-page bg-light min-vh-100">
      {/* --- 1. HERO SECTION --- */}
      <section className="ds-hero position-relative py-5 overflow-hidden text-white" style={{ background: '#001428' }}>
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">Intelligence Reimagined</span>
              <h1 className="display-3 fw-bold mb-4">Mastering the <span className="text-info">Data Universe</span></h1>
              <p className="lead opacity-75 mb-4">
                Simbesi transforms raw information into a competitive weapon. We don't just collect data; we extract the intelligence that drives evolution.
              </p>
              <button onClick={() => navigate("/contact")} className="btn btn-info btn-lg px-5 rounded-pill fw-bold">Get a Data Audit</button>
            </div>
            <div className="col-lg-6" data-aos="zoom-in">
              <div className="img-frame p-2 bg-white bg-opacity-10 rounded-4 shadow-2xl">
                <img src={HERO_IMG} className="img-fluid rounded-3 shadow" alt="Data Science" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. INTERACTIVE SERVICE REVEAL --- */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold text-dark">Data Solutions for <span className="text-primary">Scale</span></h2>
            <div className="mx-auto bg-primary mt-3" style={{ width: '80px', height: '4px' }}></div>
          </div>

          <div className="row g-4 align-items-center">
            {/* Nav Column */}
            <div className="col-lg-4">
              <div className="d-flex flex-column gap-3">
                {DS_SERVICES.map((item, idx) => (
                  <div 
                    key={item.id}
                    className={`p-4 rounded-4 cursor-pointer transition-all border-start border-5 ${activeIndex === idx ? 'bg-white shadow-lg border-primary' : 'bg-transparent border-light opacity-50'}`}
                    onClick={() => setActiveIndex(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className={`icon-circle p-3 rounded-circle ${activeIndex === idx ? 'bg-primary text-white' : 'bg-secondary bg-opacity-10'}`}>
                        <i className={`bi ${item.icon} fs-4`}></i>
                      </div>
                      <h5 className="mb-0 fw-bold">{item.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Display Column */}
            <div className="col-lg-8" data-aos="fade-left">
              <div className="card border-0 shadow-lg overflow-hidden rounded-5">
                <div className="row g-0">
                  <div className="col-md-6 order-2 order-md-1 p-5 d-flex flex-column justify-content-center">
                    <h3 className="fw-bold mb-3">{currentService.title}</h3>
                    <p className="text-muted fs-5 mb-4">{currentService.text}</p>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i> Real-time Processing</li>
                      <li className="mb-2"><i className="bi bi-check2-circle text-primary me-2"></i> Custom API Integration</li>
                      <li><i className="bi bi-check2-circle text-primary me-2"></i> Scalable Infrastructure</li>
                    </ul>
                  </div>
                  <div className="col-md-6 order-1 order-md-2" style={{ minHeight: '300px' }}>
                    <div 
                      className="h-100 w-100 bg-cover" 
                      style={{ 
                        backgroundImage: `url(${currentService.img})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        transition: '0.8s ease-in-out'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. TECH STACK STRIP --- */}
      <section className="bg-white py-4 border-top border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-around align-items-center gap-4 opacity-50">
            <span className="fw-bold h4 mb-0">PYTHON</span>
            <span className="fw-bold h4 mb-0">PYTORCH</span>
            <span className="fw-bold h4 mb-0">SCIKIT-LEARN</span>
            <span className="fw-bold h4 mb-0">TENSORFLOW</span>
            <span className="fw-bold h4 mb-0">TABLEAU</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataScience;