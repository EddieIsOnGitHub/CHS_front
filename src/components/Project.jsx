import HeaderText from "../components/HeaderText";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";
import { useState, useEffect } from "react";

export default function Projects() {
  const [restartKey, setRestartKey] = useState(0);

  // Restart every 25 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRestartKey((prev) => prev + 1);
    }, 25000); // 25 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6"
      style={{ backgroundImage: "url('/CHS Web jpg/background2.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1E4466]/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center text-white z-10">
        <HeaderText as="h1" className="text-4xl md:text-5xl font-bold mb-14">
          Our Achievements
        </HeaderText>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Total Clinics", value: 144 },
            { label: "Total Active Accounts", value: 3800 },
            { label: "EMR Software Provided", value: 1800 },
            { label: "Total Contacts", value: 18000 },
          ].map(({ label, value }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Animated Count with restartKey */}
              <span className="text-4xl md:text-5xl font-bold mb-2">
                +<CountUp
                  key={`${restartKey}-${idx}`} // <- forces remount
                  from={0}
                  to={value}
                  duration={2}
                  separator=","
                  className="inline-block"
                />
              </span>
              <span className="text-lg">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
