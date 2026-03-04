import React from 'react';
import { useNavigate } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("SIMBESI_CRITICAL_ERROR:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

// Internal Fallback UI
const ErrorFallback = () => {
  return (
    <div className="error-wrapper">
      <div className="error-content">
        <h1 className="error-code">500</h1>
        <h2 className="error-title">SYSTEM <span className="brand-cyan">INTERRUPTED</span></h2>
        <p className="error-desc">
          We encountered a catalytic technical glitch. Our architects have been notified.
        </p>
        <button className="btn-modern-primary" onClick={() => window.location.href = '/'}>
          REBOOT SESSION
        </button>
      </div>
      <style>{`
        .error-wrapper {
          height: 100vh; background: #0A1332; display: flex; align-items: center; justify-content: center; text-align: center; color: white;
        }
        .error-code { font-size: 10rem; font-weight: 900; opacity: 0.1; position: absolute; }
        .error-content { position: relative; z-index: 2; }
        .error-title { font-size: 3rem; font-weight: 800; letter-spacing: -1px; }
        .brand-cyan { color: #4bc9e1; }
        .error-desc { opacity: 0.6; max-width: 400px; margin: 20px auto 40px; font-size: 1.1rem; }
        .btn-modern-primary { background: #4bc9e1; color: #000; border: none; padding: 15px 40px; font-weight: 700; transition: 0.3s; }
        .btn-modern-primary:hover { background: #fff; transform: translateY(-5px); }
      `}</style>
    </div>
  );
};

export default ErrorBoundary;