import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeLensImg from "../assets/img/HomeLens.jpg";
import EliteEdu from "../assets/img/EliteEdu.jpg";

const CLIENTS = [
  { 
    id: 1, 
    img: "https://www.lemnisk.co/wp-content/uploads/elementor/thumbs/Lemnisk_New-Logo-rhccjzbuo1mb0hbkby2zxccc23d68igo7o3rlsq66w.png", 
    name: "Lemnisk", 
    // website: "https://www.lemnisk.co/" 
  },
  { 
    id: 2, 
    img: "https://www.someshwara.com/images/logo-dark.svg", 
    name: "Someshwara", 
    // website: "https://www.someshwara.com/products/" 
  },
  { 
    id: 3, 
    img: "https://ephaseglobal.com/wp-content/uploads/2019/09/ephase-logo-1.png", 
    name: "Ephase Global", 
    // website: "https://ephaseglobal.com/" 
  },
  { 
    id: 4, 
    img: "https://mamma-miya.com/wp-content/uploads/2017/11/about_logo.png", 
    name: "Mamma Miya", 
    // website: "https://mamma-miya.com/" 
  },
   { 
    id: 5, 
    img: HomeLensImg, 
    name: "HomeLense", 
   
  },
  { 
    id: 6, 
    img:EliteEdu, 
    name: "EliteEdu", 
   
  }
];

const OurClients = () => {
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLogoClick = (website) => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  const handleImageError = (clientId, clientName) => {
    setImageErrors(prev => ({
      ...prev,
      [clientId]: `https://via.placeholder.com/200x100/6c757d/white?text=${encodeURIComponent(clientName)}`
    }));
  };

  const getImageSrc = (client) => {
    if (imageErrors[client.id]) {
      return imageErrors[client.id];
    }
    return client.img;
  };

  return (
    <section className="clients-section py-5 overflow-hidden mb-7 mt-5">
      <div className="container py-4 text-center" data-aos="fade-up">
        <h2 className="display-4 fw-bold custom-client-font">
          Our <span className="text-highlight-cyan">Partners</span>
        </h2>
        <div className="accent-bar mx-auto mb-4"></div>
        <p className="lead client-subtext mx-auto">
          Robust partnerships. Scalable results. We work with industry leaders to deliver excellence.
        </p>
      </div>

      {/* --- INFINITE MARQUEE TRACK --- */}
      <div className="marquee-wrapper mt-5">
        <div className="marquee-content">
          {[...CLIENTS, ...CLIENTS].map((client, index) => (
            <div 
              className="marquee-item" 
              key={`${client.id}-${index}`}
              onClick={() => handleLogoClick(client.website)}
            >
              <div className="client-logo-box shadow-sm">
                <img 
                  src={getImageSrc(client)} 
                  alt={client.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    handleImageError(client.id, client.name);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .clients-section {
          background-color: #ffffff;
        }

        .custom-client-font {
          color: #001428;
          letter-spacing: -1.5px;
        }

        .text-highlight-cyan {
          color: #0d6efd;
        }

        .accent-bar {
          width: 60px;
          height: 5px;
          background-color: #0d6efd;
          border-radius: 10px;
        }

        .client-subtext {
          color: #6c757d;
          max-width: 650px;
          font-weight: 300;
        }

        /* --- Marquee Logic --- */
        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          user-select: none;
          padding: 20px 0;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }

        .marquee-content {
          display: flex;
          flex-shrink: 0;
          gap: 40px;
          min-width: 100%;
          animation: scroll-left 30s linear infinite;
        }

        .marquee-item {
          flex-shrink: 0;
          width: 200px; 
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .client-logo-box {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .client-logo-box:hover {
          transform: scale(1.15);
          border-color: #0d6efd;
          box-shadow: 0 10px 25px -5px rgba(13, 110, 253, 0.2);
          z-index: 10;
        }

        .client-logo-box img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: none;
          opacity: 1;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .marquee-item {
            width: 150px;
            height: 90px;
          }
          
          .client-logo-box {
            padding: 15px;
          }
          
          .marquee-content {
            gap: 25px;
          }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          .marquee-item {
            width: 180px;
            height: 110px;
          }
          
          .marquee-content {
            gap: 35px;
          }
        }
      `}</style>
    </section>
  );
};

export default OurClients;