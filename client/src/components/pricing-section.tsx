import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const plans = [
  {
    emoji: "🚀",
    name: "Старт",
    price: "Бесплатно",
    description: "Идеально для частных лиц",
    features: [
      "5 свайпов в день",
      "Базовый профиль",
      "Поддержка по email"
    ],
    buttonText: "Начать",
    popular: false
  },
  {
    emoji: "⚡",
    name: "Базовый",
    price: "$15",
    period: "/месяц",
    description: "Для небольших команд",
    features: [
      "Неограниченные свайпы",
      "Видеорезюме",
      "Базовая аналитика",
      "Приоритетная поддержка"
    ],
    buttonText: "Выбрать Базовый",
    popular: true
  },
  {
    emoji: "🔥",
    name: "Про",
    price: "$199",
    period: "/месяц",
    description: "Для растущих компаний",
    features: [
      "Все из Базового",
      "Продвинутый ИИ-подбор",
      "Командное сотрудничество",
      "Кастомные интеграции",
      "Поддержка 24/7"
    ],
    buttonText: "Выбрать Про",
    popular: false
  }
];

export default function PricingSection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.3 });

  return (
    <section 
      id="pricing"
      ref={ref}
      className="py-20 bg-gradient-to-br from-quantum-gray to-white"
      data-testid="pricing-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gray-900">Простое</span>
            <span className="text-gradient-neural ml-2">ценообразование</span>
          </h2>
          <p className="text-xl text-gray-600">Выберите план, который подходит размеру вашей команды и потребностям в найме</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`neomorphic rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                plan.popular ? 'border-2 border-neural-blue relative' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neural-blue to-quantum-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Самый популярный
                </div>
              )}
              
              <div className="mb-6">
                <div className="text-4xl mb-2">{plan.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className={`text-4xl font-black mb-2 ${
                  plan.name === 'Старт' ? 'text-green-600' : 
                  plan.name === 'Базовый' ? 'text-neural-blue' : 'text-quantum-purple'
                }`}>
                  {plan.price}
                  {plan.period && <span className="text-lg font-normal">{plan.period}</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="text-green-500 mr-3 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button
                className={`w-full py-3 rounded-xl transition-all duration-300 font-semibold ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-neural-blue to-quantum-purple text-white hover:shadow-lg'
                    : 'glassmorphic hover:shadow-lg hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`pricing-button-${plan.name.toLowerCase()}`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
