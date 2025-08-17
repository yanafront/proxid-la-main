import { motion } from "framer-motion";

interface FloatingElementsProps {
  className?: string;
}

export default function FloatingElements({ className = "" }: FloatingElementsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="floating-object top-20 left-10 w-32 h-32 bg-gradient-to-br from-neural-blue/10 to-transparent rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="floating-object top-40 right-20 w-48 h-48 bg-gradient-to-br from-quantum-purple/10 to-transparent rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -2,
        }}
      />
      <motion.div
        className="floating-object bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-neural-blue/20 to-quantum-purple/20 rounded-full blur-lg"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -4,
        }}
      />
    </div>
  );
}
