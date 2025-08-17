import { motion } from "framer-motion";
import { Rocket, Play } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const stats = [
  { value: "1,200+", label: "Стартапов на борту" },
  { value: "15K+", label: "Успешных совпадений" },
  { value: "89%", label: "Точность подбора" },
  { value: "4.9", label: "Рейтинг пользователей" }
];

export default function CTASection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.3 });

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-900 via-neural-blue to-quantum-purple text-white relative overflow-hidden"
      data-testid="cta-section"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="floating-object top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
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
          className="floating-object top-32 right-20 w-48 h-48 bg-white/10 rounded-full blur-xl"
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
          className="floating-object bottom-20 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"
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

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            Твоя команда ждет.
            <br />
            <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
              Присоединяйся к ProxiD сегодня.
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Перестань терять отличные таланты из-за медленных процессов найма. Начни собирать команду мечты за минуты, а не месяцы.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button 
              className="px-12 py-4 bg-white text-gray-900 font-bold rounded-2xl text-lg hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="cta-start-now"
            >
              <Rocket className="inline mr-2" size={20} />
              Начать сейчас
            </motion.button>
            <motion.button 
              className="px-12 py-4 glassmorphic text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="cta-see-how"
            >
              <Play className="inline mr-2" size={16} />
              Как это работает
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 0.6, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
