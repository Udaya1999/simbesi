import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './Index';
import WhoWeAre from './Company/WhoWeAre';
import Home from './Home';
import AboutUs from './Company/AboutUS';
import Carrers from './Company/Carrers';
import HowWeWork from './Company/HowWeWork';
import LifeSimbesi from './Company/Life@Simbesi';
import OurClints from './Company/OurClints';
import Testimonials from './Company/Testimonials';
import AndroidAppDev from './Services/AndroidAppDev';
import ArtificialIntel from './Services/ArtificialIntel';
import AugmentReality from './Services/AugmentReality';
import Consulting from './Services/Consulting';
import HybridModileDev from './Services/HybridModileDev';
import IosAppDev from './Services/IosAppDev';
import IpadApplication from './Services/IpadApplication';
import Mobiledev from './Services/Mobiledev';
import SoftwareMainSupport from './Services/SoftwareMainSupport';
import Websitedev from './Services/Websitedev';

import Contact from './Contact/Contact';

// Import other components as you create them
// import WhoWeAre from './pages/WhoWeAre'; 

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path='/who-we-are' element={<WhoWeAre />}/>
      <Route path="/about" element={<AboutUs />}/>
      <Route path="/carrers" element={<Carrers  />} />
      <Route path="/how_we_work" element={<HowWeWork  />} />
      <Route path="/life_at_simbasi" element={<LifeSimbesi />} />
      <Route path="/our_clients" element={<OurClints  />} />
      <Route path="/testimonials" element={<Testimonials  />} />
      <Route path="/androidappdev" element={<AndroidAppDev />}/>
      <Route path="/artificialintel" element={<ArtificialIntel />}/>
      <Route path="/argumentreality" element={<AugmentReality />}/>
      <Route path="/consulting" element={<Consulting />}/>
      <Route path="/hybridmobiledev" element={<HybridModileDev />}/>
      <Route path="/iosappdev" element={<IosAppDev />}/>
      <Route path="/ipadapplications" element={<IpadApplication />}/>
      <Route path="/mobiledev" element={<Mobiledev />}/>
      <Route path="/softwaremainsupport" element={<SoftwareMainSupport />}/>
      <Route path="/websitedev" element={<Websitedev />}/>
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/" element={<Home  />} />
      <Route path="/" element={<Home  />} /> */}
    </Routes>
  );
};

export default Routing;
