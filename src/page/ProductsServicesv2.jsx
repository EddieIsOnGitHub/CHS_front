// src/page/ProductsServicesv2.jsx
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function StaffingSolution() {
  const [open, setOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);

  const toggle = (idx) => setOpen(open === idx ? null : idx);

  // Each section gets its own dropdown items
  const sections = [
    {
      title: "Call Handling",
      icon: "🏥",
      image: "/Callhandling/1.png",
      description:
        "A unified suite of inbound, outbound, escalation and documentation services — all handled by trained professionals.",
      items: [
        { title: "Inbound Calls", content: "Our team manages all inbound calls with professionalism and accuracy, including appointment scheduling, referral intake, general inquiries, and message handling. Escalations are directed to the appropriate staff, and all interactions are documented in your system for seamless communication and complete records." },
        { title: "Outbound Calls", content: "We manage outbound calls with professionalism and efficiency, including appointment confirmations, rescheduling, follow-ups, referral coordination, patient notifications, reminders, outreach, and surveys. All interactions are documented to support seamless communication." },
        { title: "Escalation", content: "Our team works as an extension of your practice, adhering to your protocols. Calls are escalated or transferred in real time according to your procedures, ensuring patients receive timely and appropriate care." },
        { title: "Documentation", content: "Our team meticulously documents every inbound and outbound call, ensuring accurate and reliable records for seamless reference and future use." },
      ],
    },
    {
      title: "Document Handling/Processing",
      icon: "👨‍⚕️",
      image: "/Callhandling/4.png",
      description:
        "We process and upload your documents with precision—7 days a week, even after hours—so you get faster turnaround, cleaner records, and stronger client service.",
      items: [
        { title: "Our Services Can", content: "We provide comprehensive document management solutions that reduce errors, ensure real-time availability, and align with your protocols. Our streamlined approach saves time, lowers costs, and allows your staff to focus on higher-value tasks." },
        { title: "Working For You 7 Days a Week", content: "Our services run 7 days a week, ensuring faster turnaround and timely access to results and documents within your system. For specialty practices, inbound referrals can be managed alongside file imports for quicker processing. We also help meet jurisdictional requirements for timely referral notifications, handled efficiently outside regular office distractions." },
      ],
    },
    {
      title: "Management Reports",
      icon: "💻",
      image: "/4.jpg",
      description:
        "Organizations and practices, big and small, benefit when they have a thorough understanding of the activities that their administration undergo on their behalf. ",
      items: [
        { title: "KPI Development & Standards", content: "We fully adhere to your established KPIs and reporting standards, or help create relevant metrics if none exist, ensuring you have the insights that matter most for your organization’s success." },
        { title: "Call Volume Analytics", content: "Our call volume analytics provide clear visibility into call types, volumes, and service levels, helping you optimize patient service and operational efficiency." },
        { title: "Dedicated Support Representative", content: "Each client is assigned a dedicated CHS representative, providing direct access to insights, expert analysis, and personalized recommendations to support informed management decisions." },
        { title: "Process Optimization", content: "Our system-based approach streamlines operations, identifies opportunities to automate or reduce unnecessary activities, and enhances overall efficiency." },
        { title: "Scalable Reporting Solutions", content: "We provide scalable reporting solutions, delivering industry-best insights for organizations of all sizes and enhancing reporting capabilities over time." },
      ],
    },
  ];

  return (
    <motion.section
      className="relative bg-gradient-to-b from-brand-cream via-brand-sky to-brand-cream pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Background wave pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full transform scale-y-[-1]"
          preserveAspectRatio="none"
        >
          <path
            fill="#1b6cceff"
            fillOpacity="0.15"
            d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,197.3C672,192,768,128,864,117.3C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative max-w-[95%] sm:max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="w-20 h-1 bg-[#1E4466] mx-auto mb-4 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E4466]">
            Services We Offer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1E4466] max-w-2xl mx-auto leading-relaxed">
            At CHS Inc., our dedicated administrative support team streamlines project coordination,
            documentation management, and client communication. We’re the reliable engine behind
            the scenes, ensuring your operations run seamlessly and efficiently.
          </p>
          <div className="w-20 h-1 bg-[#1E4466] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Dynamic Sections */}
        {sections.map((section, index) => {
          const sectionId = section.title.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
          const isReversed = index % 2 === 1;

          return (
            <div
              id={sectionId}
              key={section.title}
              className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}
                items-stretch bg-white rounded-2xl shadow-lg overflow-hidden mb-12 sm:mb-16`}
            >
              {/* Image */}
              <div className="lg:w-1/2 w-full">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[240px] sm:h-[350px] lg:h-[500px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-5 flex justify-between items-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full border-2 border-[#1E4466] flex items-center justify-center">
                    <span className="text-[#1E4466] text-2xl sm:text-3xl">{section.icon}</span>
                  </div>
                  <Link
                    to="/staffing"
                    className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white text-[#1E4466] font-semibold rounded-lg shadow-md border border-[#1E4466] hover:bg-[#1E4466] hover:text-white transition-all duration-300"
                  >
                    Request Demo
                  </Link>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#1E4466] mb-2">
                  {section.title}
                </h3>
                <p className="text-[#1E4466] text-sm sm:text-base leading-relaxed mb-6">
                  {section.description}
                </p>

                {/* Dropdowns */}
                <div className="space-y-2">
                  {section.items.map((item, idx) => {
                    const key = `${index}-${idx}`;
                    const isOpen = open === key;

                    return (
                      <div key={key} className="border-b border-[#1E4466]/60">
                        <button
                          onClick={() => toggle(key)}
                          className="flex justify-between w-full py-3 sm:py-4 text-left text-base sm:text-lg font-medium text-[#1E4466]"
                        >
                          {item.title}
                          <ChevronDown
                            className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key={`content-${key}`}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.35, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3 sm:pb-4 text-[#1E4466] text-sm sm:text-base leading-relaxed">
                                {item.content}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        {/* Back to Top */}
        <div className="text-center mt-10 sm:mt-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#1E4466] font-semibold text-base sm:text-lg rounded-lg shadow-md border border-[#1E4466] hover:bg-[#1E4466] hover:text-white transition-all duration-300"
          >
            Back to Top
          </button>
        </div>
      </div>
    </motion.section>
  );
}