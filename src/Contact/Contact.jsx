import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [focused, setFocused] = useState("");
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "6e631a29-6045-4064-ab96-e480d82c7963");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Your message has been sent.");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Unable to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact SIMBESI | Software Company in Mangalagiri, Guntur</title>
        <meta name="description" content="Get in touch with SIMBESI Technosoft. Visit our office at 2nd floor, Sivaji Building, Gauthambudda Road, beside Hotel Sri Grand, Mangalagiri, Guntur, Andhra Pradesh. Call us at 096112 72633 for AI and mobile app development services." />
      </Helmet>

      <div className="contact-premium-wrapper">
        <section className="contact-hero-section">
          <div className="container text-center" data-aos="fade-down">
            <span className="contact-chip">Available for Projects</span>
            <h1 className="contact-title">Let's build something <span className="text-blue">robust.</span></h1>
            <p className="contact-subtitle">Reach out for technical consultations, partnership inquiries, or support.</p>
          </div>
        </section>

        <section className="pb-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5" data-aos="fade-right">
                <div className="contact-info-card">
                  <h3 className="fw-bold mb-4">Connect with us</h3>
                  
                  {/* Office Address */}
                  <div className="info-item">
                    <div className="info-icon"><i className="bi bi-geo-alt-fill"></i></div>
                    <div>
                      <h6>Our Office</h6>
                      <p className="mb-0">Simbesi Technosoft Private Limited</p>
                      <p className="mb-0">2nd floor, Sivaji Building</p>
                      <p className="mb-0">Gauthambudda Road, beside Hotel Sri Grand</p>
                      <p className="mb-0">Mangalagiri, Guntur, Andhra Pradesh 522503</p>
                      <p className="mt-2 text-muted small">📍 <a href="https://www.google.com/maps/place/Simbesi+Technosoft+Private+Limited/@16.4324393,80.5658847,18.75z/data=!4m6!3m5!1s0x3a35f16e16e0bbdb:0x8cd67bf28bea7a68!8m2!3d16.4316741!4d80.5663667!16s%2Fg%2F11qvf4gw4g" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Get Directions →</a></p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="info-item">
                    <div className="info-icon"><i className="bi bi-envelope-at-fill"></i></div>
                    <div>
                      <h6>Email Address</h6>
                      <p><a href="mailto:contact@simbesi.com" className="text-decoration-none">contact@simbesi.com</a></p>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="info-item">
                    <div className="info-icon"><i className="bi bi-telephone-outbound-fill"></i></div>
                    <div>
                      <h6>Call Us</h6>
                      <p className="mb-0"><a href="tel:+919611272633" className="text-decoration-none">096112 72633</a> (Main)</p>
                      <p><a href="tel:+919121294449" className="text-decoration-none">91212 94449</a> (Alternate)</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="info-item">
                    <div className="info-icon"><i className="bi bi-clock-fill"></i></div>
                    <div>
                      <h6>Business Hours</h6>
                      <p className="mb-0">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="mb-0 text-danger">Sunday: Closed</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="social-stack mt-4">
                    <a href="https://www.facebook.com/simbesitechnosoft/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.linkedin.com/company/simbesi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    <a href="https://twitter.com/simbesi" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="https://github.com/simbesi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="bi bi-github"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-7" data-aos="fade-left">
                <form onSubmit={onSubmit} className="advanced-form">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className={`input-group-custom ${focused === "name" ? "active" : ""}`}>
                        <label>Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          placeholder="John Doe"
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused("")}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`input-group-custom ${focused === "email" ? "active" : ""}`}>
                        <label>Work Email</label>
                        <input 
                          type="email" 
                          name="email"
                          placeholder="john@company.com"
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused("")}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className={`input-group-custom ${focused === "subject" ? "active" : ""}`}>
                        <label>Inquiry Type</label>
                        <select 
                          name="subject"
                          onFocus={() => setFocused("subject")}
                          onBlur={() => setFocused("")}
                        >
                          <option>Technical Consulting</option>
                          <option>Software/Application Support</option>
                          <option>General Inquiry/Information</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className={`input-group-custom ${focused === "message" ? "active" : ""}`}>
                        <label>Message</label>
                        <textarea 
                          name="message"
                          rows="5" 
                          placeholder="Tell us about your project requirements..."
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused("")}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="submit-btn-advanced" 
                        disabled={isSubmitting}
                      >
                        <span>{isSubmitting ? "Processing..." : "Send Message"}</span>
                        <i className="bi bi-arrow-right"></i>
                      </button>
                      {result && (
                        <div className={`mt-3 p-2 text-center rounded fw-bold ${result.includes("Success") ? "text-success bg-success-subtle" : "text-danger bg-danger-subtle"}`}>
                          {result}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Google Maps Section - Updated with exact location */}
            <div className="row mt-5" data-aos="fade-up">
              <div className="col-12">
                <div className="map-card">
                  <h3 className="fw-bold mb-4">Find Us Here</h3>
                  <div className="map-container">
                    <iframe
                      title="Simbesi Technosoft Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.653319245224!2d80.564156!3d16.4324393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f16e16e0bbdb%3A0x8cd67bf28bea7a68!2sSimbesi%20Technosoft%20Private%20Limited!5e0!3m2!1sen!2sin!4v1743170000000!5m2!1sen!2sin"
                      width="100%"
                      height="400"
                      style={{ border: 0, borderRadius: "20px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="mb-0">
                      <strong>Simbesi Technosoft Private Limited</strong><br />
                      2nd floor, Sivaji Building, Gauthambudda Road, beside Hotel Sri Grand,<br />
                      Mangalagiri, Guntur, Andhra Pradesh 522503
                    </p>
                    <a 
                      href="https://www.google.com/maps/place/Simbesi+Technosoft+Private+Limited/@16.4324393,80.5658847,18.75z/data=!4m6!3m5!1s0x3a35f16e16e0bbdb:0x8cd67bf28bea7a68!8m2!3d16.4316741!4d80.5663667!16s%2Fg%2F11qvf4gw4g"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary mt-3"
                    >
                      Open in Google Maps <i className="bi bi-box-arrow-up-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
          
          .contact-premium-wrapper { 
            background: #fff; 
            font-family: 'Plus Jakarta Sans', sans-serif; 
            color: #1a1a1a; 
            padding-top: 80px; 
          }
          
          .text-blue { color: #0062ff; }
          
          .contact-hero-section { 
            padding: 60px 0; 
            background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
          }
          
          .contact-title { 
            font-size: 3.5rem; 
            font-weight: 800; 
            letter-spacing: -2px; 
          }
          
          .contact-subtitle { 
            color: #666; 
            font-size: 1.2rem; 
            max-width: 600px; 
            margin: 15px auto 0; 
          }
          
          .contact-chip { 
            background: #f0f6ff; 
            color: #0062ff; 
            padding: 6px 16px; 
            border-radius: 50px; 
            font-weight: 700; 
            font-size: 0.8rem; 
            text-transform: uppercase; 
            letter-spacing: 1px; 
          }
          
          .contact-info-card { 
            background: #f8f9fa; 
            border-radius: 24px; 
            padding: 40px; 
            height: 100%; 
            border: 1px solid #eee; 
          }
          
          .info-item { 
            display: flex; 
            align-items: flex-start; 
            gap: 20px; 
            margin-bottom: 30px; 
          }
          
          .info-icon { 
            width: 48px; 
            height: 48px; 
            background: #fff; 
            border-radius: 12px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            color: #0062ff; 
            font-size: 1.2rem; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.05); 
            flex-shrink: 0;
          }
          
          .info-item h6 { 
            font-weight: 700; 
            margin-bottom: 8px; 
          }
          
          .info-item p { 
            color: #666; 
            margin: 0; 
          }
          
          .info-item a { 
            color: #0062ff; 
            text-decoration: none;
          }
          
          .info-item a:hover { 
            text-decoration: underline; 
          }
          
          .social-stack { 
            display: flex; 
            gap: 12px; 
          }
          
          .social-stack a { 
            width: 40px; 
            height: 40px; 
            border-radius: 50%; 
            background: #fff; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            color: #333; 
            transition: 0.3s; 
            border: 1px solid #eee; 
            text-decoration: none;
          }
          
          .social-stack a:hover { 
            background: #0062ff; 
            color: #fff; 
            border-color: #0062ff; 
          }
          
          .advanced-form { 
            background: #fff; 
          }
          
          .input-group-custom { 
            display: flex; 
            flex-direction: column; 
            border: 1px solid #e0e0e0; 
            padding: 12px 20px; 
            border-radius: 12px; 
            transition: 0.3s ease; 
          }
          
          .input-group-custom.active { 
            border-color: #0062ff; 
            box-shadow: 0 0 0 4px rgba(0,98,255,0.1); 
          }
          
          .input-group-custom label { 
            font-size: 0.75rem; 
            font-weight: 700; 
            color: #888; 
            text-transform: uppercase; 
            margin-bottom: 4px; 
          }
          
          .input-group-custom input, 
          .input-group-custom select, 
          .input-group-custom textarea { 
            border: none; 
            outline: none; 
            font-size: 1rem; 
            font-weight: 500; 
            color: #1a1a1a; 
            background: transparent; 
          }
          
          .input-group-custom input::placeholder, 
          .input-group-custom textarea::placeholder { 
            color: #ccc; 
          }
          
          .submit-btn-advanced { 
            width: 100%; 
            background: #1a1a1a; 
            color: #fff; 
            border: none; 
            padding: 18px; 
            border-radius: 12px; 
            font-weight: 700; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            gap: 10px; 
            transition: 0.3s; 
            margin-top: 10px; 
          }
          
          .submit-btn-advanced:hover { 
            background: #0062ff; 
            transform: translateY(-2px); 
          }
          
          .submit-btn-advanced:disabled { 
            background: #ccc; 
            cursor: not-allowed; 
          }
          
          .map-card {
            background: #f8f9fa;
            border-radius: 24px;
            padding: 30px;
            border: 1px solid #eee;
          }
          
          .map-container {
            overflow: hidden;
            border-radius: 20px;
          }
          
          .btn-outline-primary {
            border-color: #0062ff;
            color: #0062ff;
            border-radius: 50px;
            padding: 10px 24px;
            transition: 0.3s;
            text-decoration: none;
          }
          
          .btn-outline-primary:hover {
            background: #0062ff;
            color: #fff;
            border-color: #0062ff;
          }
          
          @media (max-width: 991px) { 
            .contact-title { 
              font-size: 2.5rem; 
            }
            
            .map-container iframe {
              height: 300px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Contact;