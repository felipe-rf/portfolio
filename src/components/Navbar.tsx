import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        // If we're near the bottom, activate the last section (contact)
        setActiveSection("contact");
        return;
      }

      // Find the current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  useEffect(() => {
    // Update indicator position when active section changes
    const updateIndicatorPosition = () => {
      if (navRef.current) {
        const activeIndex = sections.findIndex((s) => s.id === activeSection);
        const navLinks = navRef.current.querySelectorAll("button");

        if (navLinks[activeIndex]) {
          const activeLink = navLinks[activeIndex] as HTMLElement;
          const containerRect = navRef.current.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();

          setIndicatorStyle({
            left: linkRect.left - containerRect.left,
            width: linkRect.width,
            height: linkRect.height,
            top: linkRect.top - containerRect.top,
          });
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(updateIndicatorPosition, 100);

    return () => clearTimeout(timeoutId);
  }, [activeSection, sections]);

  // Handle window resize to recalculate position
  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        const activeIndex = sections.findIndex((s) => s.id === activeSection);
        const navLinks = navRef.current.querySelectorAll("button");

        if (navLinks[activeIndex]) {
          const activeLink = navLinks[activeIndex] as HTMLElement;
          const containerRect = navRef.current.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();

          setIndicatorStyle({
            left: linkRect.left - containerRect.left,
            width: linkRect.width,
            height: linkRect.height,
            top: linkRect.top - containerRect.top,
          });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection, sections]);
  const smoothScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-10 pb-4 px-6 hidden md:block">
      <div className="max-w-6xl mx-auto flex justify-center">
        <div
          ref={navRef}
          className="flex gap-3 bg-gray-400/30 backdrop-blur-sm rounded-full p-2 relative"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => smoothScrollTo(section.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 relative z-10 ${
                activeSection === section.id
                  ? "text-gray-900"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {section.label}
            </button>
          ))}

          {/* Animated background indicator */}
          <div
            className="absolute bg-gray-300/80 rounded-full transition-all duration-300 ease-out"
            style={indicatorStyle}
          />
        </div>
      </div>
    </nav>
  );
}
