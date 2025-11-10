// src/page/AboutUs.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeaderText from "../components/HeaderText";

export default function AboutUs() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  // Single dropdown section
  const visionSection = {
    title: "Our Vision",
    icon: "🌍",
    image: "2.jpg",
    description:
      "We aim to revolutionize the way healthcare organizations handle administration and technology—creating smoother processes, stronger connections, and better outcomes.",
    items: [
      {
        title: "Our Mission",
        content:
          "Our organization's mission is To Create A Better Practice Environment for Practitioners, whether it be in hospital, community or virtual. In short, what this means is: providing an IT environment that delivers better tools, allowing for happier staff, better patient engagement and less time-loss to all involved in the health system. That is what our platform delivers.",
      },
      {
        title: "Our History",
        content:
          "CHS was founded by a group of practice management veterans, doctors and experienced HIT leaders in 2007. Drawing on 100 years of combined experience, CHS set out to improve the impact of Health IT on the practice environment and in so doing the access to and the quality of health care provided."
      },
      {
        title: "Our Unique Solution",
        content:
          "What we have built over the past 15 years is truly unique in the world. We have built a complete, connected and very cost-effective digital health system platform for entire communities. Simple to implement, easy to use and powerful in its capabilities to deliver a better functioning health care system.",
      },
      {
        title: "Questioning the Status Quo",
        content:
          "We started on our journey by questioning some fundamental assumptions. Specifically, why does any community or country have to spend such exorbitant amounts to run a health system properly? Why should a health system drain 8-12% of a country's GDP, while demanding that half of that amount be spent on administration and of the remaining half, another half of all the practitioners' time also be spent on administrative activities? This leaves only 25% of a health care budget for actual patient care and resources.",
      },
      {
        title: "Our Achievements",
        content:
          "CCHS started in the community forming digital EMR health networks and we created an evolving system that dramatically cut the workload for all those in a community practice environment, both administrators and practitioners. What we have been able to achieve is a significant and consistent improvement in care access, with a concurrent reduction in operating costs.",
      },
      {
        title: "Patient Facing Tools",
        content:
          "We developed patient facing tools that allow better navigation and also allow patients to participate in those aspects of their care that are most practical, from appointment management to pre-visit triage and access to results, all with a rules-based structure managed by the provider's facility to ensure alignment with the practices objectives.",
      },
      {
        title: "Adapting to the Future",
        content:
          "We also saw long ago that remote patient management; home hospital and virtual care were all inevitably going to become more important in improving access to care on the patient's terms and we built intelligent and easy to use systems that ensured a safe provision of care into these models.",
      },
      {
        title: "Evolving our Hospital-based EHR Platform",
        content:
          "Working with a small private hospital we then began evolving our hospital based EHR platform with the same attention to detail. Making the user experience simple, the workflows replicate the known workflows and allowing the users to input with their own preferred method, while maintaining a common charting and administrative environment.",
      },
      {
        title: "Our Experience and Flexibility",
        content:
          "In our experience, every organization will have common pathways, but also very specific needs and integrations and we have built a very solid reputation for implementing these custom integrations and applications with our system. This flexibility means that we do not have to follow a 'one-solution for every client' model, rather we take time to listen and to document the actual goals and plans of our clients, then produce a project plan to implement the system to achieve their specific goals.",
      },
      {
        title: "Looking to the Future",
        content:
          "We are always looking to the future, ensuring our clients are prepared. It is said that technology is like a tiger, you either ride it or get eaten by it. Our goal is to ensure our clients ride comfortably into the future, bringing all their stakeholders with them as they focus on continual improvement in healthcare delivery.",
      },
      {
        title: "Some Important Milestones",
        content:
          "Our leadership team introduced the first touch screen kiosks into healthcare 30 years ago, the first acute-care wait time and navigation tools 20 years ago, we were among the first to really study and implement useful patient portals as well 15 years ago. CHS won the coveted National Microsoft Impact award for best application software in 2017 and were the runner up for the national IOT Impact award in 2018. We have also received awards from the College of Physicians and Surgeons for our self-registration kiosks and also our patient pre-visit triage system and virtual care platform. CHS is also a leader in integrating voice-driven functionality, scribe integration in charting and are in advanced stages of investigating the application of AI to workflow management and medical charting. Not all of these innovations will be immediately important to our clients depending on their goals and stages of digitization, but it can be reassuring to know that your health system, your hospital and your community of care can move progressively and confidently into the future with CHS as your partner.",
      },
    ],
  };

  const digitalSolutions = {
    title: "Digital Solutions",
    description:
      "Our EMR Advantage® platform has received numerous awards for its functionality and user experience. Recognized internationally as EMR industry leaders, CHS continues to innovate and support clients with world-class training and service.",
    image: "Doc.jpg",
    ctaText: "Read More",
    cta1Text: "Read More",

    ctaLink: "/chs-digital",
    cta2Link: "/chs-digital",

  };

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 max-w-4xl px-4 sm:px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeaderText
            as="h1"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-snug"
          >
            Who We Are
          </HeaderText>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100">
            At CHS Inc., we believe in building a future where healthcare
            technology serves people — not the other way around. Our powerful
            platforms and skilled teams support hospitals, clinics, and
            healthcare providers with scalable, intuitive, and reliable
            solutions.
          </p>
        </motion.div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-[#FAF6ED] py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-t-2 border-[#1E4466] w-full mb-10" />
          <p className="text-[#1E4466] font-semibold tracking-wider uppercase mb-4">
            Value-Driven Philosophy
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-6 text-[#1E4466] leading-snug">
            The CHS Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We firmly believe that our organization is a vehicle through which
            we channel our time, talent, and energy toward improving healthcare
            for practitioners and patients.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Through our collective action, we magnify the impact of our
            individual efforts to:
          </p>
          <ul className="text-gray-800 space-y-2 text-base sm:text-lg">
            <li>• Provide extraordinary service</li>
            <li>• Help each other improve</li>
            <li>• Support our communities</li>
            <li>• Increase the value of our system</li>
          </ul>
          <div className="border-t-2 border-[#1E4466] w-full mt-10" />
        </div>
      </section>

      {/* VISION SECTION (Dropdowns) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-xl shadow-md overflow-hidden">
          {/* IMAGE */}
          <div className="lg:w-1/2">
            <img
              src={visionSection.image}
              alt={visionSection.title}
              className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover rounded-t-xl lg:rounded-none lg:rounded-l-xl"
            />
          </div>

          {/* CONTENT */}
          <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#1E4466] flex items-center justify-center">
                <span className="text-[#1E4466] text-2xl sm:text-3xl">
                  {visionSection.icon}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1E4466]">
                {visionSection.title}
              </h3>
            </div>

            <p className="text-[#1E4466] mb-8 leading-relaxed text-base sm:text-lg">
              {visionSection.description}
            </p>

            {/* DROPDOWNS */}
            <div className="space-y-3">
              {visionSection.items.map((item, idx) => (
                <div key={idx} className="border-b border-[#1E4466]/50">
                  <button
                    onClick={() => toggle(idx)}
                    className="flex justify-between w-full py-4 text-left text-base sm:text-lg font-medium text-[#1E4466]"
                  >
                    {item.title}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${open === idx ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open === idx && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 text-[#1E4466] text-sm sm:text-base leading-relaxed">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL SOLUTIONS SECTION */}
      <section className="relative flex flex-col lg:flex-row items-center bg-gray-900 text-white overflow-hidden">
        {/* IMAGE SIDE */}
        <div className="lg:w-1/2 w-full">
          <img
            src={digitalSolutions.image}
            alt={digitalSolutions.title}
            className="w-full h-[280px] sm:h-[400px] lg:h-[450px] object-cover"
          />
        </div>

        {/* TEXT SIDE */}
        <div className="lg:w-1/2 w-full p-6 sm:p-10 flex flex-col justify-center">
          <HeaderText
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-snug"
          >
            {digitalSolutions.title}
          </HeaderText>

          <p className="mb-8 leading-relaxed text-base sm:text-lg">
            {digitalSolutions.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="/products-services"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#1E4466] to-[#2C6EAF] text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
            >
              Learn More About Our EMR
            </a>

            <a
              href="/products-services-v2"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#2C6EAF] to-[#1E4466] text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
            >
              Explore Staffing Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}