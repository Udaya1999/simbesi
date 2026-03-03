import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// --- Asset Imports ---
import client1 from "../assets/img/client1.png";
import client2 from "../assets/img/client2.png";
import client3 from "../assets/img/client3.png";
import client4 from "../assets/img/client4.png";
import client5 from "../assets/img/client5.png";
import client6 from "../assets/img/client6.png";
import client7 from "../assets/img/client7.png";
import client8 from "../assets/img/client8.png";

const CLIENTS = [
  { id: 1, img: client1, name: "Partner 1" },
  { id: 2, img: client2, name: "Partner 2" },
  { id: 3, img: client3, name: "Partner 3" },
  { id: 4, img: client4, name: "Partner 4" },
  { id: 5, img: client5, name: "Partner 5" },
  { id: 6, img: client6, name: "Partner 6" },
  { id: 7, img: client7, name: "Partner 7" },
  { id: 8, img: client8, name: "Partner 8" },
];

const OurClients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="clients-section py-5 overflow-hidden mb-7 mt-5">
      <div className="container py-4 text-center" data-aos="fade-up">
        <h2 className="display-4 fw-bold custom-client-font">
          Our <span className="text-highlight-cyan">Partners</span>
        </h2>
        <div className="accent-bar mx-auto mb-4"></div>
        <p className="lead client-subtext mx-auto">
          Robust partnerships. Scalable results. We work on your ideas to make your ideas work.
        </p>
      </div>

      {/* --- INFINITE MARQUEE TRACK --- */}
      <div className="marquee-wrapper mt-5">
        <div className="marquee-content">
          {[...CLIENTS, ...CLIENTS].map((client, index) => (
            <div className="marquee-item" key={index}>
              <div className="client-logo-box shadow-sm">
                <img src={client.img} alt={client.name} />
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
          padding: 20px 0; /* Extra padding so the scale doesn't get cut off */
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
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease;
          cursor: pointer;
        }

        /* INCREASE SIZE ON HOVER */
        .client-logo-box:hover {
          transform: scale(1.15); /* Adjust this value for more/less zoom */
          border-color: #0d6efd;
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

        /* Optional: Pause while hovering to look at a specific logo */
        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default OurClients;