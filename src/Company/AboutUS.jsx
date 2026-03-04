import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import techInnovationImg from "../assets/img/skills.png";
import visionPyramid from "../assets/img/about.jpg";
import costImg from "../assets/img/features-1.svg";
import supportImg from "../assets/img/features-2.svg";
import experienceImg from "../assets/img/features-3.svg";
import innovateImg from "../assets/img/features-4.svg";
import relationImg from "../assets/img/features-5.svg";
import qualityImg from "../assets/img/features-6.svg";

const WHY_PARTNER_DATA = [
  {
    id: "cost",
    title: "Cost Effective",
    icon: "bi-binoculars",
    img: costImg,
    text: "Save thousands in overhead while gaining elite development power.",
  },
  {
    id: "support",
    title: "Flexible Support",
    icon: "bi-box-seam",
    img: supportImg,
    text: "A chameleon-like support model that adapts to your scaling needs.",
  },
  {
    id: "exp",
    title: "Deep Experience",
    icon: "bi-sun",
    img: experienceImg,
    text: "Battle-tested developers who have built world-class architectures.",
  },
  {
    id: "innovate",
    title: "Innovation First",
    icon: "bi-command",
    img: innovateImg,
    text: "We don't just code; we engineer creative solutions for hard problems.",
  },
  {
    id: "relation",
    title: "Client Oriented",
    icon: "bi-easel",
    img: relationImg,
    text: "Transparent partnerships where your ROI is our primary metric.",
  },
  {
    id: "quality",
    title: "Quality Driven",
    icon: "bi-map",
    img: qualityImg,
    text: "Vetted code quality that ensures your product scales without debt.",
  },
];

const AboutUs = () => {
  const navigate = useNavigate();

  const [partnerIndex, setPartnerIndex] = useState(0);
  const [visionTab, setVisionTab] = useState("vision");

  const visionKeys = useMemo(() => ["vision", "mission", "expertise"], []);

  const activePartner = WHY_PARTNER_DATA[partnerIndex];

  const visionData = useMemo(
    () => ({
      vision: {
        title: "Our Vision",
        lead:
          "Create enduring value for clients whilst being a pioneer in the latest technology.",
        body: (
          <>
          <p className="bi  text me-2">
            We adopt the latest trends and technology in the market to provide
            cutting-edge solutions. These solutions enable our clients to revamp
            their performance in the highly competitive market. Our vision
            supports us as a rock-solid foundation to be a leader in the IT
            industry and foster a relationship of trust with our clients.
          </p>
          <p className="bi  text me-2">
            Our vision supports us as a rock-solid foundation to be a leader in the IT industry and foster a relationship of trust with our clients. Hard work and perseverance have indeed paid off and we hope to serve our clients in the best possible way and touch lives in a positive way. Our Expert team of highly experienced developers make sure that every custom product we develop meets the clients’ business requirements to the best of its capability. For delivering world-class custom mobile solutions, our ace developers follow latest development technologies.
            </p></>
        ),
      },

      mission: {
        title: "Our Mission",
        lead:
          "To empower businesses through seamless digital integration and innovative software development.",
        body: (
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-logo-blue me-2"></i>
              Enduring value for clients
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-logo-blue me-2"></i>
              Pioneer in the latest technology
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-logo-blue me-2"></i>
              Fostering relationships of trust
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-logo-blue me-2"></i>
              Solid team powered by hard work
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle-fill text-logo-blue me-2"></i>
              Expert team of experienced developers
            </li>
            <p className="bi  text me-2">
              What more do you need in a mission statement? Every line above is what you will get if you allow Simbesi to handle your mobile app and website development needs. With this incredible mobile application and website vendor, there is no room for mistakes. You will get the best that will make you a leader at any point in time.
            </p>
          </ul>
        ),
      },

      expertise: {
        title: "Our Expertise",
        lead:
          "A proficient, closely knitted team ready to deliver in any domain.",
        body: (
          <>
          <p className="bi  text me-2">If Simbesi is to be at creative best, then their clients should be given the benefits of a proficient, closely knitted team. With them at Simbesi, you will get a platform that has you covered in any domain of your choice. Their staff strength is made up of consummate experts in their various fields with the goal of delivering.</p>
          

            <ul className="list-unstyled mb-3">
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-logo-blue me-2"></i>
                High-quality customized software
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-logo-blue me-2"></i>
                Robust software architecture
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-logo-blue me-2"></i>
                Advanced testing solutions
              </li>
            </ul>

            <p className="bi  text me-2">
              You cannot get more than the above from the best mobile application and website vendors around you today. If you want something excitingly different that will pull in committed traffic in their millions; something that has your business covered 24 hours in the day; then you can send this email now to contact@simbesi.com. You will get detailed info.
            </p>
          </>
        ),
      },
    }),
    []
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out-cubic",
    });

    const partnerTimer = setInterval(() => {
      setPartnerIndex((prev) => (prev + 1) % WHY_PARTNER_DATA.length);
    }, 4000);

    const visionTimer = setInterval(() => {
      setVisionTab((prev) => {
        const next = (visionKeys.indexOf(prev) + 1) % visionKeys.length;
        return visionKeys[next];
      });
    }, 3500);

    return () => {
      clearInterval(partnerTimer);
      clearInterval(visionTimer);
    };
  }, [visionKeys]);

  return (
    <div className="modern-about pb-5">
      {/* HERO */}
      <section className="hero-visual d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="hero-title">
                Who We <span className="text-gradient">Are</span>
              </h1>

              <p className="hero-para">
                Simbesi isn't just a tech company. We are architects of digital
                evolution.
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="btn-modern mt-4"
              >
                Discover More
              </button>
            </div>

            <div className="col-lg-6 text-center" data-aos="fade-left">
              <img
                src={techInnovationImg}
                alt="Simbesi"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2>
              Why Choose <span className="text-logo-blue">Simbesi</span>?
            </h2>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="row g-3">
                {WHY_PARTNER_DATA.map((item, index) => (
                  <div key={item.id} className="col-6">
                    <div
                      className={`nav-pill-card ${
                        partnerIndex === index ? "active" : ""
                      }`}
                      onClick={() => setPartnerIndex(index)}
                    >
                      <i className={`bi ${item.icon}`}></i>
                      <span>{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-7">
              <div className="theater-card shadow-lg">
                <div className="theater-body p-4">
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <h3>{activePartner.title}</h3>
                      <p className="text-muted">{activePartner.text}</p>
                    </div>

                    <div className="col-md-5 text-center">
                      <img
                        src={activePartner.img}
                        alt="feature"
                        className="img-fluid"
                        style={{ maxHeight: "180px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="container py-5 border-top">
        <div className="row align-items-center">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={visionPyramid}
              alt="Vision"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-7">
            <h2 className="fw-bold mb-4">Vision & Mission</h2>

            <ul className="nav nav-pills mb-4">
              {visionKeys.map((key) => (
                <li key={key} className="nav-item">
                  <button
                    className={`nav-link ${
                      visionTab === key ? "active" : ""
                    }`}
                    onClick={() => setVisionTab(key)}
                  >
                    {key}
                  </button>
                </li>
              ))}
            </ul>

            <div className="tab-pane fade show active" key={visionTab}>
              <h4 className="fw-bold">{visionData[visionTab].title}</h4>

              <p className="fw-medium">{visionData[visionTab].lead}</p>

              <div className="text-muted">{visionData[visionTab].body}</div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
      .hero-visual{
      min-height:70vh;
      background:#001428;
      color:white;
      }

      .hero-title{
      font-size:3.5rem;
      font-weight:800;
      }

      .text-gradient{
      background:linear-gradient(90deg,#fff,#00d4ff);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      }

      .btn-modern{
      background:#0046AD;
      color:white;
      border:none;
      padding:12px 32px;
      border-radius:50px;
      }

      .nav-pill-card{
      padding:20px;
      background:#f8f9fa;
      border-radius:15px;
      cursor:pointer;
      text-align:center;
      }

      .nav-pill-card.active{
      background:#001428;
      color:white;
      }

      .text-logo-blue{
      color:#0046AD;
      }
      `}</style>
    </div>
  );
};

export default AboutUs;