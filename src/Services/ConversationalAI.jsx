import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const CONVO_HERO = "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1600";
const CHAT_INTERFACE_IMG = "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=800";

const CONVO_FEATURES = [
  { title: "Sentiment Analysis", icon: "bi-emoji-smile-upside-down", desc: "Understanding the emotional tone behind every user interaction for empathetic responses." },
  { title: "Multilingual Support", icon: "bi-translate", desc: "Breaking barriers with real-time translation and support for over 50+ global languages." },
  { title: "Voice Synthesis", icon: "bi-mic-fill", desc: "Natural-sounding text-to-speech that reflects your brand’s unique personality." },
  { title: "Omnichannel Flow", icon: "bi-share-fill", desc: "Deploy your AI across WhatsApp, Web, Slack, and Mobile with a single unified brain." }
];

const ConversationalAI = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: false, easing: 'ease-out-back' });
  }, []);

  return (
    <div className="convo-page-wrapper">
      <Helmet>
        <title>Conversational AI & Chatbots | SIMBESI</title>
        <meta name="description" content="SIMBESI: Building next-generation voice and text AI that speaks your brand's language." />
      </Helmet>

      {/* --- 1. HERO --- */}
      <section className="convo-hero">
        <div className="waveform-container">
          <div className="wave bar-1"></div>
          <div className="wave bar-2"></div>
          <div className="wave bar-3"></div>
        </div>
        
        <div className="container position-relative z-3">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="status-badge mb-4">
                <span className="pulse-dot"></span> [VOICE_ENGINE: ACTIVE]
              </div>
              <h1 className="display-2 fw-bold text-white mb-4">
                The Art of <br />
                <span className="text-gradient-cyan">Human Dialogue</span>
              </h1>
              <p className="lead text-white-50 mb-5">
                We build Conversational AI that doesn't just process keywords—it understands 
                intent. Transform your customer experience with bots that think, learn, and speak 
                with human-like precision.
              </p>
              <div className="d-flex gap-3">
                <button className="btn-convo-glow" onClick={() => navigate("/contact")}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. INTERACTION FLOW --- */}
      <section className="py-100 bg-black overflow-hidden">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="interactive-mockup-wrapper">
                <div className="concentric-ring ring-1"></div>
                <div className="concentric-ring ring-2"></div>
                <img src={CHAT_INTERFACE_IMG} alt="AI Chatbot Interface" className="convo-mockup" />
                <div className="floating-message msg-1">"How can I help you today?"</div>
                <div className="floating-message msg-2">"Processing Intent..."</div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="display-4 fw-bold text-white mb-4">Contextual <span className="brand-cyan">Memory</span></h2>
              <p className="text-white-50 mb-5">
                Standard bots forget. Our AI remembers. By maintaining context across long 
                conversations, we ensure your users never have to repeat themselves.
              </p>
              
              <div className="feature-row mb-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="icon-pill"><i className="bi bi-cpu"></i></div>
                  <div>
                    <h5 className="text-white">LLM Powered Infrastructure</h5>
                    <p className="text-white-50 small">Utilizing GPT-4o and Gemini architectures for deep reasoning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. FEATURE BENTO --- */}
      <section className="py-100 brand-bg-navy-accent">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white">Advanced <span className="brand-cyan">Capabilities</span></h2>
          </div>
          <div className="row g-4">
            {CONVO_FEATURES.map((feat, index) => (
              <div className="col-lg-3 col-md-6" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="convo-card">
                  <div className="convo-icon-circle">
                    <i className={`bi ${feat.icon}`}></i>
                  </div>
                  <h5 className="text-white mt-4">{feat.title}</h5>
                  <p className="text-white-50 small mb-0">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* Global Wrapper Padding */
        .convo-page-wrapper { 
          background: #00040a; 
          color: #fff; 
          overflow-x: hidden; 
          padding-bottom: 100px; /* Added substantial bottom padding */
        }

        .brand-bg-navy-accent { background: #010a14; padding-bottom: 80px; }
        .brand-cyan { color: #4bc9e1; }
        .text-gradient-cyan {
          background: linear-gradient(90deg, #4bc9e1, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .convo-hero { position: relative; min-height: 100vh; display: flex; align-items: center; }
        .waveform-container {
          position: absolute; right: 10%; top: 50%; transform: translateY(-50%);
          display: flex; align-items: center; gap: 8px; height: 200px; opacity: 0.3;
        }
        .wave { width: 12px; background: #4bc9e1; border-radius: 20px; animation: bounce 1.5s ease-in-out infinite; }
        .bar-1 { height: 60px; animation-delay: 0.1s; }
        .bar-2 { height: 120px; animation-delay: 0.3s; }
        .bar-3 { height: 80px; animation-delay: 0.2s; }

        @keyframes bounce { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.5); } }

        .status-badge {
          background: rgba(75, 201, 225, 0.1); border: 1px solid #4bc9e1;
          padding: 6px 18px; border-radius: 50px; font-family: monospace; color: #4bc9e1;
          display: inline-flex; align-items: center; gap: 10px;
        }
        .pulse-dot { width: 8px; height: 8px; background: #4bc9e1; border-radius: 50%; box-shadow: 0 0 10px #4bc9e1; animation: pulse 1s infinite; }

        .interactive-mockup-wrapper { position: relative; display: flex; justify-content: center; align-items: center; }
        .convo-mockup { width: 80%; border-radius: 30px; border: 8px solid #111; z-index: 2; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        
        .concentric-ring {
          position: absolute; border: 1px solid rgba(75, 201, 225, 0.2); border-radius: 50%;
          animation: rotate-ring 10s linear infinite;
        }
        .ring-1 { width: 100%; height: 100%; }
        .ring-2 { width: 120%; height: 120%; border-style: dashed; }

        .floating-message {
          position: absolute; background: #4bc9e1; color: #000; padding: 10px 20px;
          border-radius: 15px; font-weight: 600; z-index: 3; font-size: 0.9rem;
        }
        .msg-1 { top: 10%; right: -5%; animation: float 3s ease-in-out infinite; }
        .msg-2 { bottom: 20%; left: -5%; background: #fff; animation: float 4s ease-in-out infinite reverse; }

        .convo-card {
          background: rgba(255,255,255,0.03); padding: 40px 30px; border-radius: 25px;
          border: 1px solid rgba(255,255,255,0.05); transition: 0.4s; height: 100%;
        }
        .convo-card:hover { background: rgba(75, 201, 225, 0.05); border-color: #4bc9e1; transform: scale(1.02); }
        .convo-icon-circle { font-size: 2rem; color: #4bc9e1; }
        
        .icon-pill {
          width: 50px; height: 50px; background: #4bc9e1; color: #000;
          display: flex; align-items: center; justify-content: center;
          border-radius: 12px; font-size: 1.4rem;
        }

        .btn-convo-glow {
          background: #4bc9e1; color: #000; border: none; padding: 15px 40px;
          border-radius: 8px; font-weight: 700; transition: 0.3s;
        }
        .btn-convo-glow:hover { box-shadow: 0 0 30px rgba(75, 201, 225, 0.6); transform: translateY(-3px); }

        @keyframes rotate-ring { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes pulse { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(2.5); } }

        @media (max-width: 991px) {
          .convo-hero { text-align: center; }
          .d-flex { justify-content: center; }
          .waveform-container { display: none; }
        }
      `}</style>
    </div>
  );
};

export default ConversationalAI;