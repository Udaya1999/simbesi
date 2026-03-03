import React, { useEffect, useState } from "react";
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
    // Using the access key you provided
    formData.append("access_key", "6e631a29-6045-4064-ab96-e480d82c7963");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Your message has been sent.");
        event.target.reset(); // Clears the form fields
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
    <div className="contact-premium-wrapper">
      <section className="contact-hero-section">
        <div className="container text-center" data-aos="fade-down">
          <span className="contact-chip">Available for Projects</span>
          <h1 className="contact-title">Let’s build something <span className="text-blue">robust.</span></h1>
          <p className="contact-subtitle">Reach out for technical consultations, partnership inquiries, or support.</p>
        </div>
      </section>

      <section className="pb-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="contact-info-card">
                <h3 className="fw-bold mb-4">Connect with us</h3>
                <div className="info-item">
                  <div className="info-icon"><i className="bi bi-envelope-at"></i></div>
                  <div><h6>Email Address</h6><p>contact@simbesi.com</p></div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><i className="bi bi-geo-alt"></i></div>
                  <div><h6>Global Office</h6><p>Amaravathi, Andhra Pradesh, India</p></div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><i className="bi bi-telephone-outbound"></i></div>
                  <div><h6>Call</h6><p>(+91) 9121294449</p></div>
                </div>
                <div className="social-stack mt-5">
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-github"></i></a>
                  <a href="#"><i className="bi bi-twitter-x"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              {/* Form updated to use onSubmit handler */}
              <form onSubmit={onSubmit} className="advanced-form">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className={`input-group-custom ${focused === "name" ? "active" : ""}`}>
                      <label>Full Name</label>
                      <input 
                        type="text" 
                        name="name" // Matches Web3Forms field
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
                        name="email" // Matches Web3Forms field
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
                        name="subject" // Custom subject field
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
                        name="message" // Matches Web3Forms field
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
        </div>
      </section>

      <style>{`
        /* Existing CSS stays exactly the same */
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
        .contact-premium-wrapper { background: #fff; font-family: 'Plus Jakarta Sans', sans-serif; color: #1a1a1a; padding-top: 80px; }
        .text-blue { color: #0062ff; }
        .contact-hero-section { padding: 60px 0; }
        .contact-title { font-size: 3.5rem; font-weight: 800; letter-spacing: -2px; }
        .contact-subtitle { color: #666; font-size: 1.2rem; max-width: 600px; margin: 15px auto 0; }
        .contact-chip { background: #f0f6ff; color: #0062ff; padding: 6px 16px; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; }
        .contact-info-card { background: #f8f9fa; border-radius: 24px; padding: 40px; height: 100%; border: 1px solid #eee; }
        .info-item { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px; }
        .info-icon { width: 48px; height: 48px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #0062ff; font-size: 1.2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .info-item h6 { font-weight: 700; margin-bottom: 4px; }
        .info-item p { color: #666; margin: 0; }
        .social-stack { display: flex; gap: 15px; }
        .social-stack a { width: 40px; height: 40px; border-radius: 50%; background: #fff; display: flex; align-items: center; justify-content: center; color: #333; transition: 0.3s; border: 1px solid #eee; }
        .social-stack a:hover { background: #0062ff; color: #fff; border-color: #0062ff; }
        .advanced-form { background: #fff; }
        .input-group-custom { display: flex; flex-direction: column; border: 1px solid #e0e0e0; padding: 12px 20px; border-radius: 12px; transition: 0.3s ease; }
        .input-group-custom.active { border-color: #0062ff; box-shadow: 0 0 0 4px rgba(0,98,255,0.1); }
        .input-group-custom label { font-size: 0.75rem; font-weight: 700; color: #888; text-transform: uppercase; margin-bottom: 4px; }
        .input-group-custom input, .input-group-custom select, .input-group-custom textarea { border: none; outline: none; font-size: 1rem; font-weight: 500; color: #1a1a1a; background: transparent; }
        .input-group-custom input::placeholder { color: #ccc; }
        .submit-btn-advanced { width: 100%; background: #1a1a1a; color: #fff; border: none; padding: 18px; border-radius: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 10px; transition: 0.3s; margin-top: 10px; }
        .submit-btn-advanced:hover { background: #0062ff; transform: translateY(-2px); }
        .submit-btn-advanced:disabled { background: #ccc; cursor: not-allowed; }
        @media (max-width: 991px) { .contact-title { font-size: 2.5rem; } }
      `}</style>
    </div>
  );
};

export default Contact;