import React from "react";

const SimbesiLoader = () => {
  return (
    <div className="simbesi-loader-wrapper">
      <div className="loader-content">
        {/* Modern Orbit Spinner */}
        <div className="orbit-spinner">
          <div className="orbit"></div>
          <div className="orbit"></div>
          <div className="orbit"></div>
        </div>
        
        {/* Branding text with glow */}
        <h2 className="loader-text">
          SIM<span className="cyan-text">BESI</span>
        </h2>
        <div className="loading-bar-container">
          <div className="loading-bar-progress"></div>
        </div>
      </div>

      <style>{`
        .simbesi-loader-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #0A1332;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .loader-content {
          text-align: center;
        }

        .orbit-spinner {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
        }

        .orbit {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #4BC9E1;
          animation: spin 1.2s linear infinite;
        }

        .orbit:nth-child(2) {
          width: 70%;
          height: 70%;
          top: 15%;
          left: 15%;
          border-top-color: #fff;
          animation-direction: reverse;
          animation-duration: 0.8s;
        }

        .orbit:nth-child(3) {
          width: 40%;
          height: 40%;
          top: 30%;
          left: 30%;
          animation-duration: 2s;
        }

        .loader-text {
          color: white;
          font-weight: 800;
          letter-spacing: 4px;
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .cyan-text { color: #4BC9E1; text-shadow: 0 0 15px rgba(75, 201, 225, 0.5); }

        .loading-bar-container {
          width: 120px;
          height: 2px;
          background: rgba(255,255,255,0.1);
          margin: 0 auto;
          overflow: hidden;
          border-radius: 10px;
        }

        .loading-bar-progress {
          width: 50%;
          height: 100%;
          background: #4BC9E1;
          animation: slide 1.5s infinite ease-in-out;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default SimbesiLoader;