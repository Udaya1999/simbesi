import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'  // ← ADD THIS IMPORT
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>  {/* ← WRAP YOUR APP WITH HelmetProvider */}
      <App />
    </HelmetProvider>
  </StrictMode>,
)