import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket, Play } from "lucide-react";
import FloatingElements from "./floating-elements";
import ParallaxBackground from "./parallax-background";
import SwipeCards from "./swipe-cards";
import { useIntersection } from "@/hooks/use-intersection";

export default function HeroSection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.3 });
  const [jobSeekers, setJobSeekers] = useState(0);
  const [talentSeekers, setTalentSeekers] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const jobInterval = setInterval(() => {
        setJobSeekers(prev => prev < 842 ? prev + 8 : 842);
      }, 50);
      
      const talentInterval = setInterval(() => {
        setTalentSeekers(prev => prev < 126 ? prev + 2 : 126);
      }, 100);

      return () => {
        clearInterval(jobInterval);
        clearInterval(talentInterval);
      };
    }
  }, [isVisible]);

  return (
    <section 
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-quantum-gray to-white"
      data-testid="hero-section"
    >
      <ParallaxBackground intensity={0.3} />
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl lg:text-7xl font-black leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-gradient-neural">
                Your startup
              </span>
              <br />
              <span className="text-gray-900">won't die from</span>
              <br />
              <span className="text-gray-900">lack of people.</span>
              <br />
              <span className="text-sm font-medium text-quantum-purple">Not on our watch.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              The first AI-powered talent exchange where work finds you. Swipe, match, and build your dream team in minutes, not months.
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              className="holographic-button px-8 py-4 text-white font-bold rounded-2xl text-lg animate-pulse-soft"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="cta-try-free"
            >
              <Rocket className="inline mr-2" size={20} />
              Try for Free
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 glassmorphic text-gray-800 font-semibold rounded-2xl hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="cta-demo"
            >
              <Play className="inline mr-2" size={16} />
              Watch 30s Demo
            </motion.button>
          </motion.div>

          {/* Live Stats */}
          <motion.div 
            className="flex space-x-8 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-neural-blue" data-testid="job-seekers-count">
                {jobSeekers}
              </div>
              <div className="text-sm text-gray-600">Looking for jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-quantum-purple" data-testid="talent-seekers-count">
                {talentSeekers}
              </div>
              <div className="text-sm text-gray-600">Looking for talent</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Swipe Demo */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SwipeCards />
        </motion.div>
      </div>
    </section>
  );
}
