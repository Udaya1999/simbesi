import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async'; // SEO Implementation
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";

// --- Styles ---
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos/dist/aos.css";

// --- Asset Imports ---
import testimonialBg from "../assets/img/testimonials-bg.jpg"; 
import user1 from "../assets/img/testimonials/testimonials-2.jpg";
import user2 from "../assets/img/testimonials/testimonials-1.jpg";
import user3 from "../assets/img/testimonials/testimonials-4.jpg";

const TESTIMONIAL_DATA = [
  {
    name: "Jena Karlis",
    role: "Store Owner",
    image: user1,
    stars: 5,
    text: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. Simbesi has provided me with the tools to grow beyond my expectations."
  },
  {
    name: "Matt Brandon",
    role: "Freelancer",
    image: user2,
    stars: 5,
    text: "You can mass-produce hardware; you cannot mass-produce software; you cannot mass-produce the human mind. The culture here respects the creative process."
  },
  {
    name: "Saul Goodman",
    role: "CEO",
    image: user3,
    stars: 5,
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et."
  }
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <main className="testimonial-section d-flex align-items-center">
      {/* 1. SEO METADATA - Based on Reference */}
      <Helmet>
        <title>Customer Testimonials | SIMBESI</title>
        <meta name="description" content="Entrepreneur Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live." />
        <meta name="keywords" content="Simbesi reviews, client feedback, software development testimonials, Simbesi workplace culture" />
        
        {/* Open Graph for Social Media sharing */}
        <meta property="og:title" content="Our Story - Customer Testimonials | SIMBESI" />
        <meta property="og:description" content="Hear from the people who make Simbesi a world-class workspace. Our culture is built around hard work and professionalism." />
        <meta property="og:image" content={testimonialBg} />
      </Helmet>

      <div className="container py-5">
        <div className="row align-items-center justify-content-center">
          
          {/* LEFT SIDE: Heading Text with Multi-Color Branding */}
          <div className="col-lg-5 mb-5 mb-lg-0 text-center text-lg-start" data-aos="fade-right">
            <h1 className="display-2 fw-bold mb-3 custom-story-font">
              Our <span className="text-highlight-cyan">Story</span>
            </h1>
            
            {/* Blue accent underline */}
            <div className="accent-bar mb-4 mx-auto mx-lg-0"></div>
            
            <p className="lead story-subtext mx-auto mx-lg-0">
              Hear from the people who make <span className="brand-emphasis">Simbesi</span> a world-class workspace. 
              Our culture is built around <span className="text-white fw-normal">hard work</span> and <span className="text-white fw-normal">professionalism</span>.
            </p>
          </div>

          {/* RIGHT SIDE: Testimonial Slider */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="glass-slider-container p-4 p-md-5 rounded-4">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                className="testimonial-swiper"
              >
                {TESTIMONIAL_DATA.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-content text-center">
                      <div className="user-avatar-wrapper mb-3">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="rounded-circle border border-4 border-white shadow-sm"
                          onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
                        />
                      </div>
                      <h4 className="fw-bold text-white mb-1">{item.name}</h4>
                      <p className="text-info small text-uppercase mb-3 tracking-wider">{item.role}</p>
                      
                      <div className="stars mb-3 text-warning">
                        {[...Array(item.stars)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill mx-1"></i>
                        ))}
                      </div>

                      <p className="fst-italic text-white-50 lh-base px-lg-4 fs-5">
                        "{item.text}"
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* 1. Layout & Background */
        .testimonial-section {
          min-height: 100vh;
          background: linear-gradient(rgba(0, 20, 40, 0.88), rgba(0, 20, 40, 0.88)), 
                      url(${testimonialBg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          font-family: 'Inter', sans-serif;
        }

        /* 2. Left Column Styling */
        .custom-story-font {
          color: #ffffff;
          letter-spacing: -2px;
        }

        .text-highlight-cyan {
          color: #00d4ff; /* Branded Cyan color */
          text-shadow: 0 0 25px rgba(0, 212, 255, 0.3);
        }

        .accent-bar {
          width: 70px;
          height: 5px;
          background-color: #0d6efd;
          border-radius: 10px;
        }

        .story-subtext {
          color: rgba(255, 255, 255, 0.65);
          font-weight: 300;
          max-width: 450px;
          line-height: 1.7;
        }

        .brand-emphasis {
          color: #ffffff;
          font-weight: 600;
          border-bottom: 2px solid #0d6efd;
        }

        /* 3. Right Column Slider Styling */
        .glass-slider-container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .user-avatar-wrapper img {
          width: 110px;
          height: 110px;
          object-fit: cover;
        }

        .testimonial-swiper {
          padding-bottom: 60px !important;
        }

        .tracking-wider { letter-spacing: 2px; }

        /* 4. Swiper Controls */
        .swiper-pagination-bullet { 
          background: rgba(255, 255, 255, 0.3) !important; 
          opacity: 1; 
        }
        
        .swiper-pagination-bullet-active { 
          background: #00d4ff !important; 
          width: 28px; 
          border-radius: 5px; 
        }

        @media (max-width: 991px) {
          .testimonial-section { padding: 100px 0 60px; }
          .custom-story-font { font-size: 3.5rem; }
        }
      `}</style>
    </main>
  );
};

export default Testimonials;