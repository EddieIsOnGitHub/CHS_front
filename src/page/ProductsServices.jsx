// src/page/Productssection.jsx
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function AwardWinningEMR() {
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

  // Each section gets its own dropdown items
  const sections = [
    {
      title: "Award-Winning EMR Systems",
      icon: "🏥",
      image: "/EMR12.jpg",
      description:
        "Experience the future of electronic medical records—designed for efficiency, reliability, and clinical excellence.",
      items: [
        { title: "Our Platform Advantages", content: "Canadian Health Systems Inc. offers a ground-breaking electronic medical records (EMR) software designed to enable you to perform at your best. EMR Advantage® is a fully integrated electronic medical records system that allows physicians to perform all standard practice related tasks – and more! Our software is remarkably easy to use and incorporates many sophisticated features required by physicians to run a more efficient practice." },
        { title: "Tablet or Desktop–Your Choice", content: "Streamline your charting with our innovative EMR system that is hardware agnostic. EMR Advantage works on both desktops and tablets, at home or in office it is fully mobile, and can be used to chart using voice, keyboard, stylus and templates. We have made documenting findings even easier by allowing you to directly capture photos into the chart – a feature that saves time and reduces charting. With our EMR system, you get the flexibility and mobility you need while having access to all the relevant data in one place. Get the best of both worlds: superior convenience combined with reliable patient care!" },
        { title: "Billing Automation", content: "EMR Advantage® is a complete billing solution that supports small, medium and multi-location practices in managing all patient, 3rd party, and hospital billing. Our application allows physicians and administrative staff to submit, monitor and review all claims through a straight-forward and easy to use application." },
        { title: "Results, Mail & Document Handling", content: "It is no secret that doctors lose several hours a week to mail handling. Our system has the fastest mail system of any EMR. Its context sensitive action buttons ensure mail is filed, called back, rerouted or returned with your comments at the moment of your request, with a full audit trail. Never look for mail, any mail that is pending is visible and if in a visit, is automatically promoted to the front of the visit so nothing is missed. Our ability to trend specific lab results allows for quickly determining if a result is an artefact, an improvement or a cause for concern. We are digitally connected to all the main labs across Ontario as well as OLIS, when a lab hasn't been returned to you directly and you need the result with the patient in front of you. We were the first in digital e-ordering, for both Dynacare and for Lifelabs. Received mail can be written on or typed on, to quickly highlight a specific element for future reference when seeing a patient. All mail can be forwarded or replied to using our communications hub button at the bottom of the mail item. No need to print, send and scan documents, forms, or Rx corrections. Complete the document at the moment and forward it, then hit file. You will save 1-2 hours a week just from the ease of use and intelligent functionality of our mail tab." },
        { title: "Chronic Disease Management", content: "Flow sheets available within EMR Advantage® allow physicians to closely monitor chronic care patients without devoting a substantial amount of time to data collection. This valuable tool simplifies the process of recording detailed information, booking follow-up visits, adding associated billing and creating visit notes." },
        { title: "Cumulative Preventative Care Bonus and Procedure Tracking", content: "Incorporated within the EMR Advantage® application is the ability to track performed services and add exclusion and bonus codes for procedures included within the Cumulative Preventative Care program. EMR Advantage® generates eligibility lists, first and second contact letters and virtually manages preventative care programs for physicians." },
        { title: "EMR Embedded Transcription Services and/or Speech-to-Text", content: "Canadian Health Systems' dictation tools let practitioners easily dictate notes and letters directly into EMR Advantage® without changing their workflow. Outbound letters are automatically formatted and sent to referring physicians and third parties with relevant attachments. EMR Advantage® is a flexible, intuitive platform that connects physicians, staff, and administrators, streamlining the entire practice workflow to boost efficiency and reduce costs." },
      ],
    },
    {
      title: "Patient Portal",
      icon: "👨‍⚕️",
      image: "/16.jpg",
      description:
        "Better patient engagement improves outcomes and reduces the workload on your staff.",
      items: [
        { title: "Better Care & Service", content: "Having a patient portal enables you to provide better care and better service to your patients while reducing the workload on your overburdened staff. Our patient portal also presents opportunities to educate your patients in advance of their visits about services available and the preparation required for specific appointment types." },
        { title: "Patient Health Monitoring", content: "Your patients can also update their charts, allowing you to better monitor their home BP, Blood Sugars and BMI between visits. Your patients will appreciate our user friendly design." },
        { title: "Customizable Access Control", content: "You can decide how much of a chart the patients should have direct access to view, and for which group of patients. Likewise, you can decide which services and appointment types you would like the patients to be able to book." },
      ],
    },
    {
      title: "Virtual Care",
      icon: "💻",
      image: "/VirtualCare/2.png",
      description:
        "The hybrid practice is now the expected level of service and cares for patients. Our integrated virtual care platform makes it safer and easier to provide exceptional care when communicating with patients via video, phone, or chat as appropriate. ",
      items: [
        { title: "Flexible Virtual Care Options", content: "Your practice may wish to provide virtual care, by video or voice, to patients on an appointment basis, to improve access or to introduce private pay services." },
        { title: "Fully Integrated Platform", content: "Our Patient Care is fully integrated with the chart and the schedules, provides a comprehensive triage history, making it easier and safer to provide these visits throughout the course of a normal clinic." },
      ],
    },
    {
      title: "Self-Registration Kiosk",
      icon: "🖐️",
      image: "/Kiosk/1.jpg",
      description:
        "Recognized as the best touch-screen patient self-registration kiosk in Canada.",
      items: [
        { title: "Expert Kiosk Technology", content: "Self-registration kiosks are an essential fixture in any busy medical clinic. After first introducing our kiosk application in 1997, our development team at Canadian Health Systems Inc. has become a recognized expert in the intelligent design of kiosk technology in outpatient environments. Completely integrated with EMR Advantage®, the self-registration kiosk application allows our clients to run an efficient practice while focusing on the most important task – providing exceptional patient care." },
        { title: "Intuitive Patient Interface", content: "The EMR Advantage® kiosk improves the registration process by allowing patients to check-in for an appointment or register for a walk-in visit in the language of their choice. Through an intuitive touch-screen interface, patients are able to: Enter and/or verify demographic information, Select a preferred contact method, Enter medical history, Indicate any drug allergies, Select the reason for visit and also select the doctor of choice." },
        { title: "Improved Practice Efficiency", content: "The EMR Advantage® kiosk delivers significant benefits including: Shorter wait times and improved patient flow, Less workload for administrative staff with more time to devote to patient care, Elimination of data re-entry, Reduction in errors and improved capture of email addresses and cell numbers, Improved overall level of patient satisfaction." },
      ],
    },
    {
      title: "Small Hospital EHR",
      icon: "🏨",
      image: "/aboutus.jpg",
      description:
        "Providing a Better Hospital Environment for all your stakeholders",
      items: [
        { title: "Your Physicians and Nurses", content: "It is well documented that the legacy of cumbersome, slow and non-mobile large hospital EHR's are now the leading contributor to physician and nurse burn-out, stress and workplace dissatisfaction. Our EHR is designed to minimize administrative time loss for busy practitioners. The intuitive design does not force a compromise between digitizing your hospital at the expense of physician and nurse mobility and efficiency. Allowing your practitioners to enter information in the format of their choice, whether it be by voice, keyboard or stylus, supplemented by individualized macros and order sets, genuinely saves them cognitive load while they see and provide care for their patients. It should be self-evident to administrators that when choosing and introducing a digital system into a workflow, any workflow, the new system should improve the user's experience and they should see immediate benefit from its use. Making your doctors and other practitioners happy in practice should be a top priority of every hospital and having an EHR that they actually enjoy using can be a key part in your recruitment and retention strategy." },
        { title: "Your Staff", content: "As with your clinicians, we put a strong focus on usability and intuitive design and workflow. Happy staff who have less, not more, administrative workload can provide a more caring and welcoming environment for everyone. We feel that well designed software should reduce staff members' stress and this in turns drives efficiency." },
        { title: "Your Patients", content: "Our system provides patient-centric tools that allow patients to be directly involved in the relevant aspects of their care. Our Patient Portal is simple in design and allows for your community of patients to manage their bookings, access records, understand discharge instructions and contribute to their home monitoring processes based on each organizations own rules around this access and interaction. A well designed portal also fosters growing community engagement with your patient population." },
        { title: "Connected to the Community", content: "Our Hospital EHR is seamlessly connected to your community practices' and Emergency Department's EMR, allowing for a completely connected health system that provides complete continuity of care for all of the members of your community. Our award winning EMR platform is best in class and can be deployed concurrently into your outpatient and community facilities, clinics and private offices. Having end-to-end record continuity also allows for better public health reporting, sentinel system capability, and budgeting for care." },
        { title: "Senior Management and Governance", content: "Whether you are running a public health system or a private health network for a defined community of practitioners and patients, our reporting tools are designed to allow for better real world outcome measurement, disease trend monitoring, clinical and administrative service measurement, budgeting and planning. The 3M's approach of Monitoring, Measuring and Managing a health system are built into our robust suite of reporting tools. Reporting tools are customizable and for Ad Hoc reporting our built in tools enable even the most complex of query." },
        { title: "Implementation and Training", content: "Our focus in on people. Empowering people to work as a team and provide the best care possible to their patients Our implementation process follows a proven, step-by-step process to ensure that all of your staff, practitioners, administrators and contractors are properly trained and are able to use your EHR system to its full potential. We use a mixture of in-person, remote, video and written training to ensure we are training your teams in the manner that best suits their needs and learning styles. We have a 15 year history of successfully training staff in many different healthcare environments on our platform and are recognized in the industry for our training systems and the thoroughness of our approach. We recognize that your health IT systems are there to serve the users and that they need to feel comfortable in their daily use. Every job in healthcare is hard, we believe that in adopting a new system the process should provide and high-light immediate benefits and gains in the workplace. Tailoring our approach to each specific client's needs, our training process and our software ensures this." },
        { title: "Knowledge Transfer and Economic Opportunity", content: "We have developed a unique and powerful model of knowledge transfer that can be turned into economic opportunity for communities implementing our EHR and EMR systems. Whether this is an important option or opportunity for your community can be discussed during our discovery meetings. In some cases the economic opportunity to a small community or country, for example a WHO defined 'SIDS' country, can completely liquidate the actual cost of implementing and using our system permanently." },
        { title: "No Hidden Upsell", content: "Our organization rejects the 'choke-hold' model of software provision. All costs are clearly identified, allowing for our clients to stay on budget and stay on project plan. Our system is modular and we recognize that every health system will require ongoing customization based on real world feedback, so that the governing body or institutions can evolve their system in tandem with their community goals and with the goals of their hospital and health system at large. We also recognize that not every activity has to be digitized, and further digitization and connectivity can be brought into the project plan as goals evolve with use of the EHR system. We value our client partnerships. It is your institution and we are there to work with you to achieve your goals. We can share best practices and innovations, but it is your institution and we work for you. Our EHR system and its implementation process anticipates the concurrent and ongoing use of current systems on paper as well as other IT systems. Systems that are already serving their purpose do not need to be replaced, the workflows can be integrated. Digitization occurs based on the plans of the client. This ensures not only buy-in from the users, but also the logical application of software to improve and connect workflows, without disrupting ones that already work well in your current environment." },
        { title: "Pairing Hospital EHR with Community EMR", content: "Our Award-winning community based EMR platform is called the EMR Advantage system. It seemlessly connects to the A&E or ER departments EMR Advantage system and likewise to the community hospital's EHR Advantage platform. It is insurance system agnostic and we support clients on all coding systems. We have clients on ICD-8, ICD-9, ICD-10 and ICD-11. Our community system, detailed elsewhere on our site ensures that community practices can function quickly, efficiently and with less error. The system is mobile and flexible to a practitioners own charting style. This ensures more complete records, that are shared with the A&E/ER and with the hospital when patients are admitted or seen in outpatient clinics or receive diagnostic tests in labs, DI or other facilities. The major legacy large hospital systems are simply too 'clunky' to deploy in community-based practices as they destroy productivity and contribute to burn out, just as they do in the hospital environment, but even more so in the fast-paced out-patient clinic or office setting. Canadian Health Systems provides a truly unique connected health system that can be implemented into any community, reducing stakeholder time loss while improving the coordinated longitudinal care of the entire patient population." },
      ],
    },
  ];

  return (
    <motion.section
      className="relative bg-gradient-to-b from-brand-cream via-brand-sky to-brand-cream pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-[95%] sm:max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="w-20 h-1 bg-[#1E4466] mx-auto mb-4 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E4466]">
            Products We Offer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1E4466] max-w-2xl mx-auto leading-relaxed">
            Explore how our award-winning EMR and digital healthcare solutions empower providers
            with efficiency, compliance, and seamless integration.
          </p>
          <div className="w-20 h-1 bg-[#1E4466] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Dynamic Sections */}
        {sections.map((section, index) => {
          const sectionId = section.title.replace(/\s+/g, "-").toLowerCase();
          const isReversed = index % 2 === 1;

          return (
            <div
              id={sectionId}
              key={section.title}
              className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch bg-white rounded-2xl shadow-lg overflow-hidden mb-12 sm:mb-16`}
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
                    to="/emr"
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
                          onClick={() => setOpen(isOpen ? null : key)}
                          className="flex justify-between w-full py-3 sm:py-4 text-left text-base sm:text-lg font-medium text-[#1E4466] focus:outline-none"
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