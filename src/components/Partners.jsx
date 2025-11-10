import LogoLoop from "./LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";


const techLogos = [
  { node: <img src="/Partner/1.png" alt="React" className="h-10" />, title: "React", href: "https://www.ontariomd.ca/" },
  { node: <img src="/Partner/2.png" alt="Next.js" className="h-10" />, title: "Next.js", href: "https://www.intertek.com/" },
  { node: <img src="/Partner/3.png" alt="TypeScript" className="h-10" />, title: "TypeScript", href: "https://partner.microsoft.com/en-us/" },
  { node: <img src="/Partner/4.png" alt="Tailwind CSS" className="h-10" />, title: "Tailwind CSS", href: "https://tiahealth.com/" },
];


export default function Partners() {
  return (
    <section className="bg-white py-8 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1E4466]">
        Our Technology Partners
      </h2>

      <div className="h-[100px] relative overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="right"
          logoHeight={40}
          gap={32}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
