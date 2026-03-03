import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import Index from './Index'; // Ensure this points to your Navbar file
import Footer from './Footer';
import "bootstrap-icons/font/bootstrap-icons.css";
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Index /> 
      <Routing />
      <Footer />
    </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;