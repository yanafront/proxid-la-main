import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";
import { Infinity, Menu, X } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "audience", label: "Who It's For" },
  { id: "benefits", label: "Benefits" },
  { id: "pricing", label: "Pricing" }
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
    
    // Calculate scroll progress
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollY / documentHeight, 1);
    setScrollProgress(progress);
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        className={`sticky-nav fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          isScrolled ? 'scrolled backdrop-blur-xl bg-white/90 border-b border-neural-blue/10 shadow-lg' : ''
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neural-blue to-quantum-purple transition-all duration-300"
             style={{ width: `${scrollProgress * 100}%` }} />
        
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("hero")}
            data-testid="logo"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-neural-blue to-quantum-purple rounded-xl flex items-center justify-center">
              <Infinity className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold text-gray-900">ProxiD</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  activeSection === item.id
                    ? 'text-neural-blue bg-neural-blue/10'
                    : 'text-gray-700 hover:text-neural-blue hover:bg-neural-blue/5'
                }`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-neural-blue hover:text-quantum-purple transition-colors" data-testid="login-button">
              Login
            </button>
            <motion.button 
              className="px-6 py-2 bg-gradient-to-r from-neural-blue to-quantum-purple text-white rounded-xl hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="signup-button"
            >
              Sign Up
            </motion.button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-40 lg:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        data-testid="mobile-menu"
      >
        <div className="pt-20 px-6">
          <div className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-neural-blue bg-neural-blue/10'
                    : 'text-gray-700 hover:text-neural-blue hover:bg-neural-blue/5'
                }`}
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          data-testid="mobile-menu-overlay"
        />
      )}
    </>
  );
}
