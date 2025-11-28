import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if we're at the bottom of the page
    if (scrollPosition + windowHeight >= documentHeight - 50) {
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
  }, [sections]);

  useEffect(() => {
    let ticking = false;

    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [handleScroll]);
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
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 pt-10 pb-4 px-6 hidden md:block"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex justify-center">
        <motion.div
          className="flex gap-3 bg-gray-400/30 backdrop-blur-sm rounded-full p-2 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        >
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => smoothScrollTo(section.id)}
              className="px-6 py-2 rounded-full font-medium relative z-10 text-gray-200"
              initial={false}
              whileHover={{
                color: "#ffffff",
                transition: { duration: 0.15 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {section.label}

              {/* Optimized indicator with better spring physics */}
              {activeSection === section.id && (
                <motion.div
                  className="absolute inset-0 bg-gray-300/80 rounded-full -z-10"
                  layoutId="navbar-indicator"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                    mass: 0.8,
                  }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
}
