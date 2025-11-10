import { Phone, FileText, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function AdministrationSupport() {
  const features = [
    {
      title: "Call Handling",
      description:
        "Professional call management with quick response times, ensuring your patients feel valued and heard.",
      icon: <Phone className="w-7 h-7 sm:w-8 sm:h-8" />,
      buttonText: "Learn More",
      link: "/products-services-v2#call-handling",
    },
    {
      title: "Document Handling",
      description:
        "Secure, efficient document management that keeps your practice organized and compliant.",
      icon: <FileText className="w-7 h-7 sm:w-8 sm:h-8" />,
      buttonText: "Explore Services",
      link: "/products-services-v2#document-handling-processing", // ✅ corrected link
    },
    {
      title: "Reporting",
      description:
        "Detailed insights and reporting tools to help you make smarter business and clinical decisions.",
      icon: <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8" />,
      buttonText: "View Reports",
      link: "/products-services-v2#management-reports",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#1E4466]/95 to-[#0D1B2A]/95 text-white py-16 sm:py-20 px-4 overflow-hidden">
      {/* Radial background glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2C6EAF] via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Administration Support
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-200 italic mb-10 sm:mb-12 leading-relaxed px-1 sm:px-6"
        >
          At CHS Inc., our dedicated administrative support team streamlines project coordination,
          documentation management, and client communication. We’re the reliable engine behind the
          scenes, ensuring your operations run seamlessly and efficiently.
        </motion.p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white text-gray-900 rounded-2xl shadow-md sm:shadow-lg p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* Icon with glow */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1E4466] to-[#2C6EAF] rounded-full blur-lg opacity-60 group-hover:opacity-80 transition" />
                  <div className="relative bg-[#1E4466] text-white p-3 sm:p-4 rounded-full shadow-md group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Title as clickable link */}
              <a href={feature.link}>
                <h3 className="text-lg sm:text-xl font-semibold text-center mt-2 mb-3 group-hover:text-[#1E4466] transition-colors relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#1E4466] after:transition-all after:duration-300 group-hover:after:w-full">
                  {feature.title}
                </h3>
              </a>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed px-2 sm:px-0">
                {feature.description}
              </p>

              {/* Gradient Button */}
              <div className="flex justify-center">
                <a
                  href={feature.link}
                  className="inline-block bg-gradient-to-r from-[#1E4466] to-[#2C6EAF] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#2C6EAF]/40"
                >
                  {feature.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
