import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";
import { Infinity } from "lucide-react";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  return (
    <motion.nav 
      className={`sticky-nav fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'scrolled backdrop-blur-xl bg-white/80 border-b border-neural-blue/10' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          data-testid="logo"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-neural-blue to-quantum-purple rounded-xl flex items-center justify-center">
            <Infinity className="text-white" size={20} />
          </div>
          <span className="text-2xl font-bold text-gray-900">ProxiD</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-neural-blue transition-colors" data-testid="nav-features">
            Features
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-neural-blue transition-colors" data-testid="nav-pricing">
            Pricing
          </a>
          <a href="#about" className="text-gray-700 hover:text-neural-blue transition-colors" data-testid="nav-about">
            About
          </a>
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
        </div>
      </div>
    </motion.nav>
  );
}
