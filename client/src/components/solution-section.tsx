import { motion } from "framer-motion";
import { Target, Video, RefreshCw, BarChart3, Play } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import ParallaxBackground from "./parallax-background";

const features = [
  {
    icon: Target,
    title: "🎯 ИИ-подбор - 89% точность",
    description: "Наши алгоритмы машинного обучения подбирают таланты и возможности с беспрецедентной точностью.",
    gradient: "from-neural-blue to-quantum-purple"
  },
  {
    icon: Video,
    title: "🎥 Видеорезюме - экономия времени",
    description: "Пропустите длительный процесс отбора с 60-секундными видео-представлениями, которые показывают личность.",
    gradient: "from-neural-blue to-quantum-purple"
  },
  {
    icon: RefreshCw,
    title: "🔄 Обмен талантами между компаниями",
    description: "Делитесь пулами талантов и ресурсами с другими компаниями в вашей сети для взаимного роста.",
    gradient: "from-neural-blue to-quantum-purple"
  },
  {
    icon: BarChart3,
    title: "📊 Аналитика и отчеты в реальном времени",
    description: "Отслеживайте метрики найма, показатели откликов и производительность команды с комплексными дашбордами.",
    gradient: "from-neural-blue to-quantum-purple"
  }
];

export default function SolutionSection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.3 });

  return (
    <section 
      id="solution"
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
      data-testid="solution-section"
    >
      <ParallaxBackground intensity={0.2} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gray-900">Работа находит тебя.</span>
            <br />
            <span className="text-gradient-neural">А не наоборот.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наша платформа на базе ИИ революционизирует то, как таланты и возможности соединяются, делая найм таким же простым, как свайп вправо.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Loop Placeholder */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace with diverse tech team collaborating" 
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neural-blue/20 to-transparent rounded-3xl"></div>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <button 
                className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                data-testid="play-video"
              >
                <Play className="text-neural-blue ml-1" size={32} />
              </button>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                data-testid={`feature-${index}`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
