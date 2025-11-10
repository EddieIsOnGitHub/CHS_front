import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HeaderText from "../components/HeaderText";

const videos = [
  "/final/v2.mp4",
  "/final/v3.mp4",
  "/final/v4.mp4",
  "/final/v5.mp4",
  "/final/v6.mp4",
  "/final/v7.mp4",
  "/final/v8.mp4",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const nextIndex = (current + 1) % videos.length;

    const handleEnded = () => {
      setFade(false);
      setTimeout(() => {
        setCurrent(nextIndex);
        setFade(true);
      }, 800);
    };

    video.src = videos[current];
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    video.load();
    video.play().catch((err) => console.warn("Autoplay failed:", err));

    video.removeEventListener("ended", handleEnded);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [current]);

  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/60 text-center px-4 sm:px-8 md:px-12 pt-20 sm:pt-24">
        <HeaderText
          as="h1"
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-5 drop-shadow-lg leading-snug sm:leading-tight"
        >
          Empowering Healthcare Through Digital Innovation
        </HeaderText>

        <HeaderText
          as="h2"
          className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-md sm:max-w-2xl mx-auto mb-6 sm:mb-8 drop-shadow-md leading-relaxed"
        >
          Cutting-edge EMR technology and remote staffing solutions designed to
          ease Provider burnout across Canada.
        </HeaderText>

        <Link
          to="/products-services"
          className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#1E4466] font-semibold text-sm sm:text-lg rounded-lg sm:rounded-xl shadow-lg hover:bg-[#1E4466] hover:text-white transition-all duration-300"
        >
          Explore EMR Advantage®
        </Link>
      </div>

      {/* Mobile fallback image if videos fail to load */}
      <div className="absolute inset-0 bg-cover bg-center sm:hidden" style={{ backgroundImage: "url('/fallback.jpg')" }}></div>
    </section>
  );
}
