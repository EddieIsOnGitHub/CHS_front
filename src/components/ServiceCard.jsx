import HeaderText from "../components/HeaderText";
import { Link } from 'react-router-dom';

export default function ServiceCard({ icon, title, description, link, blur = 'md' }) {
  return (
    <Link
      to={link}
      className="group relative rounded-2xl overflow-hidden shadow-xl text-white flex items-center justify-center h-72 transition-all duration-500"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-110"
        style={{ backgroundImage: `url(${icon})` }}
      ></div>

      {/* Overlay */}
      <div className={`absolute inset-0 backdrop-blur-${blur} bg-black/40 group-hover:bg-black/50 transition-all duration-300`}></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-3 px-6">
        <HeaderText as="h2" className="text-2xl font-bold tracking-wide">{title}</HeaderText>
        <p className="text-sm opacity-90">{description}</p>
        <span className="mt-4 inline-block bg-white text-[#1E4466] font-bold px-5 py-2 rounded-full group-hover:bg-[#1E4466] group-hover:text-white transition">
          Go →
        </span>
      </div>
    </Link>
  );
}
