// components/ContactSection.jsx
import impactLogo from "/impact.png";
import msGoldLogo from "/MSG.png";
import omdLogo from "/OMD.png";
import isoLogo from "/ISO.webp";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-[#1E4466] to-[#16334D] text-white py-14 sm:py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

        {/* Column 1: Contact Info + Locations */}
        <div className="bg-white/10 rounded-2xl p-6 sm:p-8 shadow-md space-y-6 sm:space-y-8 backdrop-blur-sm">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-blue-300 uppercase tracking-wide mb-3">
              Contact Us
            </h3>
            <p className="text-sm sm:text-base">
              <strong>Toll Free Phone:</strong>{" "}
              <a href="tel:18882258310" className="text-blue-300 hover:text-blue-400 transition">
                1 (888) 225-8310
              </a>
            </p>
            <p className="text-sm sm:text-base">
              <strong>Fax:</strong>{" "}
              <a href="tel:6138208191" className="text-blue-300 hover:text-blue-400 transition">
                (613) 820-8191
              </a>
            </p>
            <p className="text-sm sm:text-base">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@chsinc.ca" className="text-blue-300 hover:text-blue-400 transition break-all">
                info@chsinc.ca
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-sm sm:text-md font-semibold text-blue-200 uppercase tracking-wide mb-2">
              Locations
            </h4>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Toronto Office:</strong><br />
                123 Edward St., Suite 601<br />
                Toronto, Ontario M5G 1E2<br />
                Canada
              </p>
              <p>
                <strong>Ottawa Office:</strong><br />
                210-1902 Robertson Rd.<br />
                Ottawa, Ontario K2H 5B8<br />
                Canada
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Map */}
        <div className="bg-white/10 rounded-2xl overflow-hidden shadow-md border border-white/20">
          <iframe
            title="CHS Map Toronto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.6036858268734!2d-79.3874948973659!3d43.65565614134823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c968500001%3A0x9360b34e4e6912f9!2s123%20Edward%20St%20Unit%20%23601%2C%20Toronto%2C%20ON%20M5G%201E2%2C%20Canada!5e0!3m2!1sen!2sza!4v1759331618277!5m2!1sen!2sza"
            className="w-full h-56 sm:h-72 md:h-full"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Column 3: Awards */}
        <div className="bg-white/10 rounded-2xl p-6 sm:p-8 shadow-md">
          <h3 className="text-base sm:text-lg font-bold text-blue-300 uppercase tracking-wide mb-5">
            Awards & Affiliations
          </h3>

          <ul className="space-y-5 sm:space-y-6 text-sm sm:text-base">
            <li className="flex items-center justify-between flex-wrap gap-2">
              <span><strong>2016 IMPACT Award</strong> – Application Innovation Development</span>
              <img src={impactLogo} alt="Impact Award" className="h-9 sm:h-10" />
            </li>

            <li className="flex items-center justify-between flex-wrap gap-2">
              <span><strong>Microsoft Gold Certified Partner</strong></span>
              <img src={msGoldLogo} alt="Microsoft Gold" className="h-9 sm:h-10" />
            </li>

            <li className="flex items-center justify-between flex-wrap gap-2">
              <span><strong>OMD Certified</strong></span>
              <img src={omdLogo} alt="OMD Certified" className="h-9 sm:h-10" />
            </li>

            <li className="flex items-center justify-between flex-wrap gap-2">
              <span><strong>ISO 13485:2016 Certified QMS</strong></span>
              <img src={isoLogo} alt="ISO Certified" className="h-9 sm:h-10" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
