import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SimbesiLoader from '../src/SimbesiLoader'; // Adjust path if needed
import NotFound from './NotFound';
import ErrorBoundary from './ErrorBoundary';

// --- Lazy Loaded Components ---
// Main & Company
const Home = lazy(() => import('./Home'));
const WhoWeAre = lazy(() => import('./Company/WhoWeAre'));
const AboutUs = lazy(() => import('./Company/AboutUS'));
const Carrers = lazy(() => import('./Company/Carrers'));
const HowWeWork = lazy(() => import('./Company/HowWeWork'));
const LifeSimbesi = lazy(() => import('./Company/Life@Simbesi'));
const OurClints = lazy(() => import('./Company/OurClints'));
const Testimonials = lazy(() => import('./Company/Testimonials'));

// Services
const AndroidAppDev = lazy(() => import('./Services/AndroidAppDev'));
const ArtificialIntel = lazy(() => import('./Services/ArtificialIntel'));
const AugmentReality = lazy(() => import('./Services/AugmentReality'));
const Consulting = lazy(() => import('./Services/Consulting'));
const HybridModileDev = lazy(() => import('./Services/HybridModileDev'));
const IosAppDev = lazy(() => import('./Services/IosAppDev'));
const IpadApplication = lazy(() => import('./Services/IpadApplication'));
const Mobiledev = lazy(() => import('./Services/Mobiledev'));
const SoftwareMainSupport = lazy(() => import('./Services/SoftwareMainSupport'));
const Websitedev = lazy(() => import('./Services/Websitedev'));
const MachineLearning = lazy(() => import("./Services/MachineLearning"));
const ComputerVision = lazy(() => import('./Services/ComputerVision'));
const ConversationalAI = lazy(() => import('./Services/ConversationalAI'));

// Industries / Apps
const HealthCare = lazy(() => import('./Apps/HealthCare'));
const BankingFinance = lazy(() => import('./Apps/BankingFinance'));
const Education = lazy(() => import('./Apps/Education'));
const TravelTicketing = lazy(() => import('./Apps/TravelTicketing'));
const RealEstateHousing = lazy(() => import('./Apps/RealEstateHousing'));
const EventsMedia = lazy(() => import('./Apps/EventsMedia'));
const Restaurants = lazy(() => import('./Apps/Restaurants'));
const Sports = lazy(() => import('./Apps/Sports'));

// Contact
const Contact = lazy(() => import('./Contact/Contact'));

const Routing = () => {
  return (
    /* The fallback prop is what shows while the lazy components are loading.
       We use your custom SimbesiLoader here.
    */
   <ErrorBoundary >
    <Suspense fallback={<SimbesiLoader />}>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Carrers />} />
        <Route path="/how_we_work" element={<HowWeWork />} />
        <Route path="/life_at_simbasi" element={<LifeSimbesi />} />
        <Route path="/our_clients" element={<OurClints />} />
        <Route path="/testimonials" element={<Testimonials />} />

        {/* Services Routes */}
        <Route path="/androidappdev" element={<AndroidAppDev />} />
        <Route path="/artificialintel" element={<ArtificialIntel />} />
        <Route path="/argumentreality" element={<AugmentReality />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/hybridmobiledev" element={<HybridModileDev />} />
        <Route path="/iosappdev" element={<IosAppDev />} />
        <Route path="/ipadapplications" element={<IpadApplication />} />
        <Route path="/mobiledev" element={<Mobiledev />} />
        <Route path="/softwaremainsupport" element={<SoftwareMainSupport />} />
        <Route path="/websitedev" element={<Websitedev />} />
        <Route path="/MachineLearning" element={<MachineLearning />} />
        <Route path="/ComputerVision" element={<ComputerVision />} />
        <Route path="/ConversationalAI" element={<ConversationalAI />} />

        {/* Industry Routes */}
        <Route path="/HealthCare" element={<HealthCare />} />
        <Route path="/BankingFinance" element={<BankingFinance />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/TravelTicketing" element={<TravelTicketing />} />
        <Route path="/RealEstateHousing" element={<RealEstateHousing />} />
        <Route path="/EventsMedia" element={<EventsMedia />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/Sports" element={<Sports />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* {Error page} */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    </ErrorBoundary>
  );
};

export default Routing;