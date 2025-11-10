// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import CardNav from "./CardNav";
import logo from "/logo.png";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Reset menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMobileOpen(false);

  const items = [
    {
      label: "EMR Software",
      bgColor: "#2c4664ff",
      textColor: "#fff",
      links: [
        { label: "Award Winning EMR", href: "/products-services#award-winning-emr-systems" },
        { label: "Patient Portal", href: "/products-services#patient-portal" },
        { label: "Virtual Care", href: "/products-services#virtual-care" },
        { label: "Self-Registration Kiosk", href: "/products-services#self-registration-kiosk" },
        { label: "Small Hospital EHR", href: "/products-services#small-hospital-ehr" },
      ],
    },
    {
      label: "Remote Staffing Solutions",
      bgColor: "#2c4664ff",
      textColor: "#fff",
      links: [
        { label: "Call Handling", href: "/products-services-v2#call-handling" },
        { label: "Document Handling/Process", href: "/products-services-v2#document-handling-processing" },
        { label: "Management Reports", href: "/products-services-v2#management-reports" },
      ],
    },
    {
      label: "Contact Us",
      bgColor: "#2c4664ff",
      textColor: "#fff",
      links: [
        { label: "Request Demo for Remote Staffing", href: "/staffing" },
        { label: "Request Demo for EMR Advantage®", href: "/emr" },
        { label: "About Us", href: "/about-us" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* MOBILE HEADER (visible only on small screens) */}
      <div className="sm:hidden bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center relative">
          {/* Centered logo only */}
          <Link to="/" onClick={closeMenu} className="flex items-center justify-center">
            <img src={logo} alt="CHS Logo" className="w-20 h-15 object-contain" />
          </Link>

          {/* Menu button (right side) */}
          <button
            className="text-[#1E4466] absolute right-4"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile navigation"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>


      {/* DESKTOP HEADER (no blur, no title, only CardNav) */}
      <div className="hidden sm:block bg-transparent">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <CardNav
            key={location.pathname}
            logo={logo}
            logoAlt="Company Logo"
            items={items}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
          />
        </div>
      </div>

      {/* MOBILE MENU (animated dropdown) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="sm:hidden bg-white text-[#1E4466] shadow-lg border-t border-gray-200"
          >
            <nav className="flex flex-col px-6 py-5 space-y-4 text-base font-medium">
              <a
                href="https://emrweb.chsinc.ca/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block text-[#1E4466] hover:text-blue-700 transition"
              >
                Client Log In
              </a>

              <div className="h-px bg-gray-200 my-2" />

              <span className="font-semibold text-[#1E4466]/80 uppercase tracking-wide text-sm">
                EMR Software
              </span>
              <div className="space-y-2 pl-2">
                <HashLink smooth to="/products-services#award-winning-emr-systems" onClick={closeMenu} className="block hover:text-blue-700">Award Winning EMR</HashLink>
                <HashLink smooth to="/products-services#patient-portal" onClick={closeMenu} className="block hover:text-blue-700">Patient Portal</HashLink>
                <HashLink smooth to="/products-services#virtual-care" onClick={closeMenu} className="block hover:text-blue-700">Virtual Care</HashLink>
                <HashLink smooth to="/products-services#self-registration-kiosk" onClick={closeMenu} className="block hover:text-blue-700">Self-Registration Kiosk</HashLink>
                <HashLink smooth to="/products-services#small-hospital-ehr" onClick={closeMenu} className="block hover:text-blue-700">Small Hospital EHR</HashLink>
              </div>

              <div className="h-px bg-gray-200 my-2" />

              <span className="font-semibold text-[#1E4466]/80 uppercase tracking-wide text-sm">
                Remote Staffing
              </span>
              <div className="space-y-2 pl-2">
                <Link to="/products-services-v2#call-handling" onClick={closeMenu} className="block hover:text-blue-700">Call Handling</Link>
                <Link to="/products-services-v2#document-handling-processing" onClick={closeMenu} className="block hover:text-blue-700">Document Handling</Link>
                <Link to="/products-services-v2#management-reports" onClick={closeMenu} className="block hover:text-blue-700">Management Reports</Link>
              </div>

              <div className="h-px bg-gray-200 my-2" />

              <span className="font-semibold text-[#1E4466]/80 uppercase tracking-wide text-sm">
                Connect
              </span>
              <div className="space-y-2 pl-2">
                <Link to="/about-us" onClick={closeMenu} className="block hover:text-blue-700">About Us</Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
