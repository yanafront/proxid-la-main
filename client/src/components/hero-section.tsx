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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-quantum-gray to-white pt-20 breathing-room-2xl"
      data-testid="hero-section"
    >
      <ParallaxBackground intensity={0.3} />
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center z-10 breathing-room-lg">
        {/* Left Content */}
        <motion.div
          className="space-y-12 breathing-room-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
            type: "tween"
          }}
        >
          <div className="space-y-8 breathing-room-lg">
            <motion.h1
              className="text-5xl lg:text-7xl font-black leading-tight breathing-room-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.4, 0, 0.2, 1],
                type: "tween"
              }}
            >
              <span className="text-gradient-neural">
                Твой стартап
              </span>
              <br />
              <span className="text-gray-900">не умрет от</span>
              <br />
              <span className="text-gray-900">нехватки людей.</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-lg breathing-room-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.4, 0, 0.2, 1],
                type: "tween"
              }}
            >
              Первая платформа обмена талантами на базе ИИ, где работа находит тебя. Свайпай, знакомься и собирай команду мечты за минуты, а не месяцы.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 breathing-room-md"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.4, 0, 0.2, 1],
              type: "tween"
            }}
            onClick={() => window.open('https://t.me/proxiDBot', '_blank')}
          >
            <motion.button
              className="holographic-button px-10 py-5 text-white font-bold rounded-2xl text-lg animate-pulse-soft breathing-room-sm"
              whileHover={{
                scale: 1.02,
                transition: {
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              whileTap={{
                scale: 0.98,
                transition: {
                  duration: 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              data-testid="cta-try-free"
              onClick={() => {
                  window.open('https://t.me/proxiDBot', '_blank');
              }}
            >
              <Rocket className="inline mr-3" size={22} />
              Попробовать бесплатно
            </motion.button>

            {/*<motion.button */}
            {/*  className="px-8 py-4 glassmorphic text-gray-800 font-semibold rounded-2xl hover:shadow-lg transition-all duration-300"*/}
            {/*  whileHover={{ scale: 1.02 }}*/}
            {/*  whileTap={{ scale: 0.98 }}*/}
            {/*  data-testid="cta-demo"*/}
            {/*>*/}
            {/*  <Play className="inline mr-2" size={16} />*/}
            {/*  Смотреть демо 30 сек*/}
            {/*</motion.button>*/}
          </motion.div>

          {/* Live Stats */}
          <motion.div
            className="flex space-x-12 pt-12 breathing-room-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.4, 0, 0.2, 1],
              type: "tween"
            }}
          >
            <div className="text-center breathing-room-sm">
              <div className="text-3xl font-bold text-neural-blue breathing-room-sm" data-testid="job-seekers-count">
                {jobSeekers}
              </div>
              <div className="text-sm text-gray-600">Ищут работу</div>
            </div>
            <div className="text-center breathing-room-sm">
              <div className="text-3xl font-bold text-quantum-purple breathing-room-sm" data-testid="talent-seekers-count">
                {talentSeekers}
              </div>
              <div className="text-sm text-gray-600">Ищут таланты</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Swipe Demo */}
        <motion.div
          className="relative breathing-room-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.4, 0, 0.2, 1],
            type: "tween"
          }}
        >
          <SwipeCards />
        </motion.div>
      </div>
    </section>
  );
}
