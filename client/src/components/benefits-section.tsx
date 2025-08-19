import { motion } from "framer-motion";
import { Rocket, PiggyBank, TrendingDown } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const benefits = [
  {
    icon: Rocket,
    title: "Скорость - найм на 60% быстрее",
    description: "От публикации до найма за дни, а не недели. Наш ИИ устраняет бесконечные переговоры традиционного рекрутинга.",
    gradient: "from-green-400 to-green-600"
  },
  {
    icon: PiggyBank,
    title: "Экономия - от 500$ за подбор",
    description: "Сократите расходы на рекрутинг, исключив дорогие агентства и сократив время найма на критически важные позиции.",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    icon: TrendingDown,
    title: "Стоимость - на 60% дешевле агентств",
    description: "Платите только за успешные совпадения, а не за обещания. Никаких предоплат, скрытых комиссий, только результаты.",
    gradient: "from-purple-400 to-purple-600"
  }
];

export default function BenefitsSection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.3 });

  return (
    <section
      id="benefits"
      ref={ref}
      className="py-32 bg-white breathing-room-2xl"
      data-testid="benefits-section"
    >
      <div className="max-w-7xl mx-auto px-8 breathing-room-lg">
        <motion.div
          className="text-center mb-24 breathing-room-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black mb-8 breathing-room-md">
            <span className="text-gray-900">Почему выбирают</span>
            <span className="text-gradient-neural ml-2">ProxiD</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 breathing-room-lg py-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="neomorphic rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer breathing-room-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              data-testid={`benefit-card-${index}`}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 breathing-room-sm`}>
                <benefit.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-6 breathing-room-sm">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
