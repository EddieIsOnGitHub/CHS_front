import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const CardNav = ({
  logo,
  logoAlt = "Logo",
  items = [],
  className = "",
  ease = "power3.out",
  baseColor = "#fff",
  menuColor = "#000",
  buttonBgColor = "#1E4466",
  buttonTextColor = "#fff",
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 320;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content");
      if (contentEl) {
        const prev = {
          visibility: contentEl.style.visibility,
          pointerEvents: contentEl.style.pointerEvents,
          position: contentEl.style.position,
          height: contentEl.style.height,
        };

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        Object.assign(contentEl.style, prev);

        return topBar + contentHeight + padding;
      }
    }
    return 320;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      "-=0.1"
    );

    return tl;
  };

  useLayoutEffect(() => {
    tlRef.current = createTimeline();
    return () => {
      tlRef.current?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      if (isExpanded) {
        gsap.set(navRef.current, { height: calculateHeight() });
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        tlRef.current = createTimeline();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i) => (el) => {
    if (el) cardsRef.current[i] = el;
  };

  const renderNavLink = (lnk, i) => {
    const isExternal = lnk.href.startsWith("http");
    const commonClasses =
      "inline-flex items-center gap-2 transition-all duration-200 hover:opacity-75 hover:translate-x-1 text-sm md:text-base";

    return isExternal ? (
      <a
        key={`${lnk.label}-${i}`}
        href={lnk.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={lnk.ariaLabel}
        className={commonClasses}
      >
        <GoArrowUpRight className="shrink-0 w-4 h-4" />
        {lnk.label}
      </a>
    ) : (
      <Link
        key={`${lnk.label}-${i}`}
        to={lnk.href}
        aria-label={lnk.ariaLabel}
        className={commonClasses}
      >
        <GoArrowUpRight className="shrink-0 w-4 h-4" />
        {lnk.label}
      </Link>
    );
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[95%] max-w-[1000px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? "open" : ""} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`}
        style={{ backgroundColor: baseColor }}
        onMouseEnter={() => {
          if (window.innerWidth >= 768 && tlRef.current) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tlRef.current.play(0);
          }
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 768 && tlRef.current) {
            setIsHamburgerOpen(false);
            tlRef.current.eventCallback("onReverseComplete", () => setIsExpanded(false));
            tlRef.current.reverse();
          }
        }}
      >

        {/* Top Bar */}
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
          {/* Hamburger (left side on mobile) */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? "open" : ""} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
            style={{ color: menuColor }}
          >
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition duration-300 ease-linear ${isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""}`}
            />
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition duration-300 ease-linear ${isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""}`}
            />
          </div>

          {/* Logo (centered) */}
          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
            <Link to="/" className="logo-link transition-opacity hover:opacity-75">
              <img src={logo} alt={logoAlt} className="logo h-[28px]" />
            </Link>
          </div>

          {/* Login Button (right side) */}
          <div className="ml-auto">
            <Link
              to="https://emrweb.chsinc.ca/"
              className="bg-[#1E4466] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#162f6b] transition"
            >
              Client Log In
            </Link>
          </div>
        </div>

        {/* Expanding Content */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-3 flex flex-col items-stretch gap-3 z-[1] ${isExpanded
            ? "visible pointer-events-auto"
            : "invisible pointer-events-none"
            } md:flex-row md:items-end md:gap-[16px]`}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card flex flex-col gap-3 p-5 rounded-lg min-w-0 flex-[1.5] h-auto md:h-full md:min-h-[200px]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label text-xl md:text-2xl font-semibold">
                {item.label}
              </div>
              <div className="nav-card-links flex flex-col gap-2">
                {item.links?.map((lnk, i) => renderNavLink(lnk, i))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
