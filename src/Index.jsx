import React, { useState, useEffect } from "react";
import "./index.css";
import bgVideo from "./assets/vid/ai-bg-video.mp4";
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
              <li
                className="mega-trigger"
                onClick={() => toggleDropdown("company")}
              >
                COMPANY ▾

                <div className={`mega-menu ${mobileDropdown === "company" ? "mobile-open" : ""}`}>
                  <div className="mega-wrapper">
                    <div className="mega-grid">
                      <div className="mega-column">
                        <h4>Company</h4>
                        <div ><Link to="/who-we-are" className="mega-item">Who We Are</Link></div>
                        
                        <div><Link to="/how_we_work" className="mega-item">How We Work</Link></div>
                        <Link to="/careers" className="mega-item">Careers</Link>
                      </div>
                      <div className="mega-column">
                        <h4>Explore</h4>
                       <div> <Link to="/life_at_simbasi" className="mega-item">Life @ Simbesi</Link></div>
                        <div><Link to="/our_clients" className="mega-item">Our Clients</Link></div>
                        <div><Link to="/testimonials" className="mega-item">Testimonials</Link></div>
                      </div>
                      <div className="mega-column">
                        {/* <h4>Company</h4> */}
                        <div >
                          <div><Link  className="mega-item" to="/about"  >Learn more about our journey & achievements.</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* SERVICES */}
              <li
                className="mega-trigger"
                onClick={() => toggleDropdown("services")}
              >
                SERVICES ▾
                <div className={`mega-menu ${mobileDropdown === "services" ? "mobile-open" : ""}`}>
                  <div className="mega-wrapper">
                    <div className="mega-grid">
                      <div className="mega-column">
                        <h4>Website Development</h4>
                        <div ><div><Link to="./websitedev" className="mega-item">Product Design</Link></div></div>
                        <div ><div><Link to="./websitedev"  className="mega-item">web App Development</Link></div></div>
                        <div ><div><Link to="./softwaremainsupport"  className="mega-item">Support & maintenance</Link></div></div>
                        
                      </div>
                      <div className="mega-column">
                        <h4>Mobile App Development </h4> 
                        <div><Link to="./androidappdev" className="mega-item">Android</Link> </div>
                        <div > <Link to="./iosappdev" className="mega-item">iOS</Link></div>
                        <div > <Link to="./hybridmobiledev" className="mega-item">Cross Platform</Link></div>
                      </div>
                      <div className="mega-column">
                        <h4>Design </h4>
                        <div ><Link to="./mobiledev" className="mega-item">UI / UX</Link></div>
                          <div ><Link  to="./mobiledev" className="mega-item">Prototyping</Link></div>
                            <div ><Link  to="./mobiledev" className="mega-item">Research</Link></div>
                        
                      </div>
                      <div className="mega-column">
                        <h4>Other Services We Offer </h4>
                        
                        <div><Link to="./hybridmobiledev" className="mega-item">Hybrid Mobile Application</Link></div>
                        <div><Link to="./ipadapplications" className="mega-item">Ipad Application Development</Link></div>
                        <div><Link to="./artificialintel" className="mega-item">Artificial Intelligence</Link></div>
                        <div><Link to="./argumentreality" className="mega-item">Augmented Reality</Link></div>
                        <div><Link to="./softwaremainsupport" className="mega-item">Software Maintenance & Support</Link></div>
                        <div><Link to="./consulting" className="mega-item">Consulting Services</Link></div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* SOLUTIONS */}
              <li
                className="mega-trigger"
                onClick={() => toggleDropdown("solutions")}
              >
                SOLUTIONS ▾
                <div className={`mega-menu ${mobileDropdown === "solutions" ? "mobile-open" : ""}`}>
                  <div className="mega-wrapper">
                    <div className="mega-grid">
                      <div className="mega-column">
                        <h4>On-Demand Mobile App </h4>
                        <div><Link to="./mobiledev" className="mega-item">Mobile App Development</Link></div>
                        <div><Link to="./iosappdev" className="mega-item">IOS APP Development</Link></div>

                      
                      </div>
                      <div className="mega-column">
                        <h4>Artificial Intelligence Solutions</h4>
                        <div><Link to="./artificialintel" className="mega-item">AI</Link></div>
                        <div><Link to="./argumentreality" className="mega-item">AR / VR</Link></div>
                        <div><Link to="./MachineLearning" className="mega-item">Machine Learning</Link></div>
                        <div><Link to="./DataScience" className="mega-item">Data Science</Link></div>
                        <div><Link to="./ComputerVision" className="mega-item">Computer Vision</Link></div>
                        <div><Link to="./ConversationalAI" className="mega-item">Conversational AI</Link></div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-btn-item">
              <Link to="/contact" className="contact-btn">
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