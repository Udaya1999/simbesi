import React from "react";
import "./Footer.css";
import "./index.css";
import { Link } from "react-router-dom";
import logo from "./assets/img/logowithouticon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-brand">
          {/* <h2 className="footer-logo">SIMBESI</h2>
          <p className="footer-tagline">Shape Your Vision</p> */}
          <Link to='/'>
                    <div >
                      <img src={logo} alt="Simbesi Logo" className="logo-img" />
                    </div>
                   </Link>

              

          <p className="footer-description">
            We build intelligent mobile applications powered by AI.
            Transforming ideas into smart, adaptive experiences that evolve
            with your business.
          </p>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><Link to="./about">About Us</Link></li>
            <li><Link to="./who-we-are">Why Simbesi</Link></li>
            <li > <Link to="./carrers">Careers</Link></li>
            <li><Link to="./contact">Contact us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li > <Link to="./artificialintel">AI Mobile Apps</Link></li>
            <li><Link to="./argumentreality">Machine Learning</Link></li>
            <li><Link to="/">Computer Vision</Link></li>
            <li><Link to="/">Conversational AI</Link></li>
            
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>contact@simbesi.com</li>
            <li>Get Started</li>
            <li>Request a Quote</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © 2026 Simbesi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;