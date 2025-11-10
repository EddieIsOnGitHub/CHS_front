import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import HeaderText from "../components/HeaderText";

export default function About() {
  const { scrollY } = useScroll();

  // Subtle parallax for performance
  const yBg = useTransform(scrollY, [0, 250], [0, 80]);
  const yImage = useTransform(scrollY, [0, 250], [0, -30]);
  const yText = useTransform(scrollY, [0, 250], [0, -20]);

  return (
    <section className="relative text-white overflow-hidden min-h-screen sm:min-h-[90vh]">
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -z-10">
        <svg
          className="block w-full h-24 sm:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.15"
            d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,186.7C840,192,960,224,1080,213.3C1200,203,1320,149,1380,122.7L1440,96L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Base background */}
      <div className="absolute inset-0 bg-[#1E4466] -z-20" />

      {/* Gradient overlay */}
      <motion.div
        style={{ y: yBg, willChange: "transform" }}
        className="absolute inset-0 bg-gradient-to-b from-[#1E4466] via-[#2D5C8A] to-[#3A7ABF] opacity-90 -z-10"
      />

      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent pointer-events-none -z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 items-start px-5 sm:px-8 md:px-16 py-24 sm:py-32">

        {/* TEXT SECTION */}
        <motion.div
          style={{ y: yText, willChange: "transform" }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <HeaderText
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-9 leading-snug text-white"
          >
            Our Vision
          </HeaderText>

          <HeaderText
            as="h1"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 leading-snug text-white"
          >
            Transforming the way healthcare providers manage their practice.
          </HeaderText>

          <HeaderText
            as="p"
            className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
          >
            CHS Inc. offers an intuitive EMR platform designed to support and
            scale your practice. Our expert team assists hospitals, clinics, and
            primary care providers across Canada, streamlining workflows,
            enhancing patient care, and making your practice more efficient.
          </HeaderText>

          <HeaderText
            as="h3"
            className="text-2xl sm:text-3xl font-extrabold mb-5 leading-snug text-white"
          >
            What We Offer
          </HeaderText>

          <ul className="space-y-3 mb-8 text-base sm:text-lg text-white/95 list-disc list-inside">
            <li>Award-Winning EMR Technology Trusted by Industry Leaders</li>
            <li>Tailored Training & Support for Small Hospitals & Clinics</li>
            <li>Mobile-Ready, Innovative EHR Solutions</li>
            <li>Optimized Workflows & Remote Administrative Services</li>
          </ul>

          <Link
            to="/emr"
            className="inline-block w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-r from-[#3A7ABF] to-[#2D5C8A] text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Request Demo
          </Link>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          style={{ y: yImage, willChange: "transform" }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg border border-[#8CBEE7]/50 transition-transform duration-700 hover:scale-105"
        >
          <img
            src="/aboutus.jpg"
            alt="CHS Team at work"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110"
          />
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -z-10 rotate-180">
        <svg
          className="block w-full h-24 sm:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.15"
            d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,186.7C840,192,960,224,1080,213.3C1200,203,1320,149,1380,122.7L1440,96L1440,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  );
}
