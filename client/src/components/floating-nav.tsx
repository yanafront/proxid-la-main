import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { createPortal } from "react-dom";

const navItems = [
  { id: "hero", label: "Главная", icon: "🏠" },
  { id: "problem", label: "Проблема", icon: "⚠️" },
  { id: "solution", label: "Решение", icon: "💡" },
  { id: "audience", label: "Для кого", icon: "👥" },
  { id: "benefits", label: "Преимущества", icon: "⭐" },
  { id: "pricing", label: "Цены", icon: "💰" }
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCurrentSectionIndex = () => {
    return navItems.findIndex(item => item.id === activeSection);
  };

  const scrollToPrevious = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex > 0) {
      scrollToSection(navItems[currentIndex - 1].id);
    }
  };

  const scrollToNext = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex < navItems.length - 1) {
      scrollToSection(navItems[currentIndex + 1].id);
    }
  };



  return createPortal(
    <div 
      className="floating-nav-container flex items-center justify-center"
      style={{
        position: 'fixed',
        right: '1rem',
        top: '0',
        height: '100vh',
        zIndex: 9999,
        width: '5rem',
        transform: 'none',
        overflow: 'visible'
      }}
    >
      <motion.div
        className="slide-menu nav-mobile"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.3 }}
        data-testid="floating-nav"
      >
        <div className="flex flex-col items-center space-y-2">
        {/* Previous Section Button */}
        <motion.button
          onClick={scrollToPrevious}
          className={`w-10 h-10 glassmorphic rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 ${
            getCurrentSectionIndex() === 0 ? 'opacity-40 cursor-not-allowed' : ''
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={getCurrentSectionIndex() === 0}
          data-testid="nav-previous"
        >
          <ChevronUp size={16} className="text-neural-blue" />
        </motion.button>

        {/* Section Dots */}
        <div className="glassmorphic rounded-full p-3 space-y-3">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-neural-blue to-quantum-purple shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              data-testid={`floating-nav-${item.id}`}
            >
              {/* Tooltip */}
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="glassmorphic px-3 py-2 rounded-lg text-sm font-medium text-gray-800 whitespace-nowrap shadow-lg">
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Next Section Button */}
        <motion.button
          onClick={scrollToNext}
          className={`w-10 h-10 glassmorphic rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 ${
            getCurrentSectionIndex() === navItems.length - 1 ? 'opacity-40 cursor-not-allowed' : ''
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={getCurrentSectionIndex() === navItems.length - 1}
          data-testid="nav-next"
        >
          <ChevronDown size={16} className="text-neural-blue" />
        </motion.button>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
