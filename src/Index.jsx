import React, { useState, useEffect } from "react";
import "./index.css";
import logo from "./assets/img/logonew.png";
import { Link } from "react-router-dom";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">

          {/* Logo */}
          <Link to='/'>
            <div className="logo-section">
              <img src={logo} alt="Simbesi Logo" className="logo-img" />
            </div>
          </Link>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* NAV */}
          <nav className={`nav ${menuOpen ? "active" : ""}`}>
            <ul>

              {/* COMPANY */}
              <li className="mega-trigger">
                <div className="nav-link" onClick={() => toggleDropdown("company")}>
                  COMPANY <span className="dropdown-arrow">▾</span>
                </div>
                <div className={`mega-menu ${mobileDropdown === "company" ? "mobile-open" : ""}`}>
                  <div className="mega-wrapper">
                    <div className="mega-grid">
                      <div className="mega-column">
                        <h4>Company</h4>
                        <Link to="/who-we-are" className="mega-item" onClick={() => setMenuOpen(false)}>Who We Are</Link>
                        <Link to="/how_we_work" className="mega-item" onClick={() => setMenuOpen(false)}>How We Work</Link>
                        <Link to="/careers" className="mega-item" onClick={() => setMenuOpen(false)}>Careers</Link>
                      </div>
                      <div className="mega-column">
                        <h4>Explore</h4>
                        <Link to="/life_at_simbasi" className="mega-item" onClick={() => setMenuOpen(false)}>Life @ Simbesi</Link>
                        <Link to="/our_clients" className="mega-item" onClick={() => setMenuOpen(false)}>Our Clients</Link>
                        <Link to="/testimonials" className="mega-item" onClick={() => setMenuOpen(false)}>Testimonials</Link>
                      </div>
                      <div className="mega-column">
                        <Link to="/about" className="mega-item highlight" onClick={() => setMenuOpen(false)}>
                          Learn more about our journey & achievements.
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* SERVICES */}
              <li className="mega-trigger">
                <div className="nav-link" onClick={() => toggleDropdown("services")}>
                  SERVICES <span className="dropdown-arrow">▾</span>
                </div>
                <div className={`mega-menu ${mobileDropdown === "services" ? "mobile-open" : ""}`}>
                  <div className="mega-wrapper">
                    <div className="mega-grid">
                      <div className="mega-column">
                        <h4>Website Development</h4>
                        <Link to="/websitedev" className="mega-item" onClick={() => setMenuOpen(false)}>Product Design</Link>
                        <Link to="/websitedev" className="mega-item" onClick={() => setMenuOpen(false)}>Web App Development</Link>
                        <Link to="/softwaremainsupport" className="mega-item" onClick={() => setMenuOpen(false)}>Support & maintenance</Link>
                      </div>
                      <div className="mega-column">
                        <h4>Mobile App Development</h4>
                        <Link to="/androidappdev" className="mega-item" onClick={() => setMenuOpen(false)}>Android</Link>
                        <Link to="/iosappdev" className="mega-item" onClick={() => setMenuOpen(false)}>iOS</Link>
                        <Link to="/hybridmobiledev" className="mega-item" onClick={() => setMenuOpen(false)}>Cross Platform</Link>
                      </div>
                      <div className="mega-column">
                        <h4>Design</h4>
                        <Link to="/mobiledev" className="mega-item" onClick={() => setMenuOpen(false)}>UI / UX</Link>
                        <Link to="/mobiledev" className="mega-item" onClick={() => setMenuOpen(false)}>Prototyping</Link>
                        <Link to="/mobiledev" className="mega-item" onClick={() => setMenuOpen(false)}>Research</Link>
                      </div>
                      <div className="mega-column">
                        <h4>Other Services We Offer</h4>
                        <Link to="/hybridmobiledev" className="mega-item" onClick={() => setMenuOpen(false)}>Hybrid Mobile Application</Link>
                        <Link to="/ipadapplications" className="mega-item" onClick={() => setMenuOpen(false)}>iPad Application Development</Link>
                        <Link to="/artificialintel" className="mega-item" onClick={() => setMenuOpen(false)}>Artificial Intelligence</Link>
                        <Link to="/argumentreality" className="mega-item" onClick={() => setMenuOpen(false)}>Augmented Reality</Link>
                        <Link to="/softwaremainsupport" className="mega-item" onClick={() => setMenuOpen(false)}>Software Maintenance & Support</Link>
                        <Link to="/consulting" className="mega-item" onClick={() => setMenuOpen(false)}>Consulting Services</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* SOLUTIONS */}
              <li className="mega-trigger">
                <div className="nav-link" onClick={() => toggleDropdown("solutions")}>
                  SOLUTIONS <span className="dropdown-arrow">▾</span>
                </div>
                <div className={`mega-menu ${mobileDropdown === "solutions" ? "mobile-open" : ""}`}>
                  <div className="mega-wrapper">
                    <div className="mega-grid">
                      <div className="mega-column">
                        <h4>On-Demand Mobile App</h4>
                        <Link to="/mobiledev" className="mega-item" onClick={() => setMenuOpen(false)}>Mobile App Development</Link>
                        <Link to="/iosappdev" className="mega-item" onClick={() => setMenuOpen(false)}>iOS App Development</Link>
                      </div>
                      <div className="mega-column">
                        <h4>Artificial Intelligence Solutions</h4>
                        <Link to="/artificialintel" className="mega-item" onClick={() => setMenuOpen(false)}>AI</Link>
                        <Link to="/argumentreality" className="mega-item" onClick={() => setMenuOpen(false)}>AR / VR</Link>
                        <Link to="/MachineLearning" className="mega-item" onClick={() => setMenuOpen(false)}>Machine Learning</Link>
                        <Link to="/DataScience" className="mega-item" onClick={() => setMenuOpen(false)}>Data Science</Link>
                        <Link to="/ComputerVision" className="mega-item" onClick={() => setMenuOpen(false)}>Computer Vision</Link>
                        <Link to="/ConversationalAI" className="mega-item" onClick={() => setMenuOpen(false)}>Conversational AI</Link>
                      </div>
                      <div className="mega-column">
                        <h4>Industries</h4>
                        <Link to="/Industry" className="mega-item" onClick={() => setMenuOpen(false)}>Go to Industries</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-btn-item">
                <Link to="/contact" className="contact-btn" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Index;