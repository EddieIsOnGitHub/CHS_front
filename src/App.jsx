import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; //  For route animations
import ScrollToTop from "./components/ScrollToTop";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Projects from './components/Project';
import AdminSupport from './components/AdminSupport';
import Partners from "./components/Partners";

// Pages
import EMRPage from './page/EMRPage';
import StaffingPage from './page/StaffingPage';
import ContactPage from './page/ContactPage';
import AboutUs from './page/AboutUs';
import PrivacyPolicy from './page/privacy-policy';
import ProductsServicesv2 from './page/ProductsServicesv2';
import ProductsServices from './page/ProductsServices';

function App() {
  const location = useLocation(); // Detect current route

  return (
    <div className="font-sans text-gray-800 w-full max-w-screen overflow-x-hidden">
      <Header />
      <main className="pt-0">
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Home */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <AdminSupport />
                  <Partners />
                  <Projects />
                  <Testimonials />
                  <Contact />
                </>
              }
            />

            {/* Submission section */}

            <Route path="/emr" element={<EMRPage />} />
            <Route path="/staffing" element={<StaffingPage />} />

            {/* Footer section */}
            
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* EMR Subpages */}
            
            <Route path='/products-services' element={<ProductsServices />} />
            
            {/* Staffing Subpages */}
            
            <Route path="/products-services-v2" element={<ProductsServicesv2 />} />

          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
// console.log("Final API from ENV:", import.meta.env.VITE_API_BASE_URL);

export default App;
