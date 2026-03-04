import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const NotFound = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="premium-404-container">
      {/* Background Layer: Massive 404 Text for Visual Depth */}
      <div className="bg-giant-text" data-aos="fade-up">404</div>

      {/* Decorative Layer: Mesh Gradient Blobs */}
      <div className="mesh-gradient"></div>

      <div className="container position-relative z-3">
        <div className="row min-vh-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8" data-aos="zoom-in">
            
            {/* 1. Status Badge */}
            <div className="d-flex justify-content-center mb-4">
              <div className="status-badge">
                <span className="pulse-ring"></span>
                <span className="badge-text">SYSTEM STATUS: UNRESOLVED</span>
              </div>
            </div>

            {/* 2. Headline with Cyber Gradient */}
            <h1 className="cyber-headline">
              BEYOND THE <br />
              <span className="text-glow-cyan">INTERFACE</span>
            </h1>

            {/* 3. The "Glass" Content Card */}
            <div className="error-glass-card mt-5 p-5">
              <p className="error-log-text">
                [LOG_INFO]: Request reached the edge of the Simbesi cloud. <br />
                [STATUS]: Destination point does not exist in current architecture.
              </p>
              
              <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
                <Link to="/" className="btn-architect-primary">
                  RE-ROUTE TO HOME
                </Link>
                <Link to="/contact" className="btn-architect-outline">
                  REPORT ANOMALY
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .premium-404-container {
          background-color: #0A1332;
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          font-family: 'Inter', sans-serif;
        }

        /* Giant Background Text */
        .bg-giant-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 40vw;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.02);
          user-select: none;
          z-index: 1;
        }

        /* Mesh Gradient Background */
        .mesh-gradient {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 10% 20%, rgba(75, 201, 225, 0.05) 0%, transparent 40%),
                      radial-gradient(circle at 90% 80%, rgba(75, 201, 225, 0.05) 0%, transparent 40%);
          z-index: 2;
        }

        /* Status Badge */
        .status-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.05);
          padding: 8px 20px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pulse-ring {
          width: 10px;
          height: 10px;
          background: #4bc9e1;
          border-radius: 50%;
          box-shadow: 0 0 10px #4bc9e1;
          animation: badge-pulse 2s infinite;
        }

        .badge-text {
          color: #4bc9e1;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
        }

        /* Typography */
        .cyber-headline {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          color: white;
          line-height: 0.9;
          letter-spacing: -2px;
        }

        .text-glow-cyan {
          color: #4bc9e1;
          text-shadow: 0 0 40px rgba(75, 201, 225, 0.4);
        }

        /* Glass Card */
        .error-glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 0; /* Keeping your boxy architectural look */
          max-width: 600px;
          margin: 0 auto;
        }

        .error-log-text {
          color: rgba(255, 255, 255, 0.4);
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.8;
          margin-bottom: 0;
        }

        /* Buttons */
        .btn-architect-primary {
          background: #4bc9e1;
          color: #000;
          text-decoration: none;
          padding: 16px 35px;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          transition: 0.4s;
        }

        .btn-architect-primary:hover {
          background: #fff;
          transform: translateY(-5px);
        }

        .btn-architect-outline {
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          text-decoration: none;
          padding: 16px 35px;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          transition: 0.4s;
        }

        .btn-architect-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #fff;
        }

        @keyframes badge-pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(75, 201, 225, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(75, 201, 225, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(75, 201, 225, 0); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;