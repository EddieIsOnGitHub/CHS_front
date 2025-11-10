import HeaderText from "../components/HeaderText";
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '/AwardWinningEMR/8.jpg',
    title: 'Award Winning EMR',
    description: 'EMR Advantage provides powerful, real-world benefits over traditional and older electronic medical record systems.',
    link: '/products-services#award-winning-emr-systems',
  },
  {
    icon: '/PatientPortal/3.jpg',
    title: 'Patient Portal',
    description: 'Allow your patients to book appointments, update their information, and monitor the status of their test results 24/7.',
    link: '/products-services#patient-portal',
  },
  {
    icon: '/SmallHospital/5.png',
    title: 'Small Hospitals',
    description: 'Our specialized EHR system offers a comprehensive, user-friendly solution tailored to the unique needs of small hospitals, enhancing workflow and patient care.',
    link: '/products-services#small-hospital-ehr',
  },
  {
    icon: '/VirtualCare/1.png',
    title: 'Virtual Care',
    description: 'We are integrated with an award winning virtual care platform. Our communication hub allows you to manage your practice through text, video, phone and chat modalities. Practice the way you want!',
    link: '/products-services#virtual-care',
  },
  {
    icon: '/Kiosk/2.jpg',
    title: 'Self-Check-In Kiosk',
    description: 'The EMR Advantage kiosk improves the registration process by allowing patients to check-in for an appointment or register for a walk-in visit in the language of their choice.',
    link: '/products-services#self-registration-kiosk',
  },
];


export default function Services() {
  return (
    <section className="h-[60vh] flex overflow-hidden relative">
      {services.map((service, index) => (
        <Link
          key={index}
          to={service.link}
          className="group flex-1 flex flex-col justify-center items-center relative transition-all duration-500 ease-in-out hover:flex-[2] origin-center"
        >
          {/* Image + Individual Blur */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 filter group-hover:blur-lg group-hover:scale-110"
              style={{ backgroundImage: `url(${service.icon})` }}
            ></div>
            <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
          </div>

          {/* Text (Not Blurred) */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-sm h-full pt-12">
            <HeaderText as="h2" className="text-2xl font-bold text-white mb-0">
              {service.title}
            </HeaderText>

            {/* Description */}
            <p className="text-white text-sm opacity-0 invisible group-hover:opacity-90 group-hover:visible transition-opacity duration-300 delay-200 mb-4 transform translate-y-2 group-hover:translate-y-0">
              {service.description}
            </p>

            {/* Go button */}
            <span className="inline-block bg-white text-[#1E4466] font-bold px-5 py-2 rounded-full opacity-0 invisible group-hover:opacity-100 delay-200 group-hover:visible transition duration-300 delay-1200 transform translate-y-2 group-hover:translate-y-0">
              Go →
            </span>
          </div>

        </Link>
      ))}
    </section>
  );
}