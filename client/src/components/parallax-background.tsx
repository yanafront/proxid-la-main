import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ParallaxBackgroundProps {
  className?: string;
  intensity?: number;
}

export default function ParallaxBackground({ className = "", intensity = 0.5 }: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * intensity;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-neural-blue/10 to-quantum-purple/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${parallaxOffset * 0.3}px) translateX(${Math.sin(scrollY * 0.001) * 50}px)`,
          top: "10%",
          left: "10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-quantum-purple/15 to-neural-blue/15 rounded-full blur-2xl"
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px) translateX(${Math.cos(scrollY * 0.002) * 30}px)`,
          top: "60%",
          right: "15%",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-48 h-48 bg-gradient-to-r from-neural-blue/20 to-transparent rounded-full blur-xl"
        style={{
          transform: `translateY(${parallaxOffset * 0.7}px) translateX(${Math.sin(scrollY * 0.003) * 20}px)`,
          bottom: "20%",
          left: "60%",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute w-16 h-16 border-2 border-neural-blue/30 rotate-45"
        style={{
          transform: `translateY(${parallaxOffset * 0.4}px) rotate(${scrollY * 0.1}deg)`,
          top: "30%",
          right: "30%",
        }}
        animate={{
          y: [0, -20, 0],
          rotateZ: [45, 225, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-12 h-12 bg-gradient-to-br from-quantum-purple/40 to-neural-blue/40 rounded-full"
        style={{
          transform: `translateY(${parallaxOffset * 0.6}px)`,
          top: "70%",
          left: "20%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(102, 102, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(102, 102, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: `translateY(${parallaxOffset * 0.2}px)`,
        }}
      />
    </div>
  );
}