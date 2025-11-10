import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#102B44] text-white py-6 px-5 sm:py-8 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">

        {/* Left: Brand + Copyright */}
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-semibold tracking-wide">CHS Inc.</h3>
          <p className="text-xs sm:text-sm text-gray-300">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-5 text-xs sm:text-sm leading-relaxed">
          {/* <Link to="/" className="hover:underline hover:text-blue-300 transition">Home</Link> */}
          <Link to="/about-us" className="hover:underline hover:text-blue-300 transition">About</Link>
          <Link to="/staffing" className="hover:underline hover:text-blue-300 transition text-center sm:text-left">
            Remote Staffing Demo
          </Link>
          <Link to="/emr" className="hover:underline hover:text-blue-300 transition text-center sm:text-left">
            EMR Advantage® Demo
          </Link>
          <Link to="/privacy-policy" className="hover:underline hover:text-blue-300 transition">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
