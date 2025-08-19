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
      "10 анкет в день",
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
      "Неограниченные анкеты",
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
      "Поднятие в поиске",
      "Кастомные интеграции",
      "Персональный менеджер",
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
      className="py-32 bg-gradient-to-br from-quantum-gray to-white breathing-room-2xl"
      data-testid="pricing-section"
    >
      <div className="max-w-7xl mx-auto px-8 breathing-room-lg py-8">
        <motion.div
          className="text-center mb-24 breathing-room-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
            type: "tween"
          }}
        >
          <h2 className="text-5xl font-black mb-8 breathing-room-md">
            <span className="text-gray-900">Простое</span>
            <span className="text-gradient-neural ml-2">ценообразование</span>
          </h2>
          <p className="text-xl text-gray-600 breathing-room-sm">Выберите план, который подходит размеру вашей команды и потребностям в найме</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 breathing-room-lg py-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`neomorphic rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer breathing-room-md ${
                plan.popular ? 'border-2 border-neural-blue relative' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
                type: "tween"
              }}
              whileHover={{
                y: -4,
                scale: 1.01,
                transition: {
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neural-blue to-quantum-purple text-white px-6 py-2 rounded-full text-sm font-semibold breathing-room-sm">
                  Самый популярный
                </div>
              )}

              <div className="mb-8 breathing-room-md">
                <div className="text-5xl mt-12 mb-4 breathing-room-sm">{plan.emoji}</div>
                <h3 className="text-2xl font-bold mb-4 breathing-room-sm">{plan.name}</h3>
                <div className={`text-4xl font-black mb-4 breathing-room-sm ${
                  plan.name === 'Старт' ? 'text-green-600' : 
                  plan.name === 'Базовый' ? 'text-neural-blue' : 'text-quantum-purple'
                }`}>
                  {plan.price}
                  {plan.period && <span className="text-lg font-normal">{plan.period}</span>}
                </div>
                <p className="text-gray-600 breathing-room-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10 text-left breathing-room-md">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center breathing-room-sm">
                    <Check className="text-green-500 mr-4 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-4 rounded-xl transition-all duration-300 font-semibold breathing-room-sm ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-neural-blue to-quantum-purple text-white hover:shadow-lg'
                    : 'glassmorphic hover:shadow-lg hover:bg-white/50'
                }`}
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
                data-testid={`pricing-button-${plan.name.toLowerCase()}`}
                onClick={() => {
                  window.open('https://t.me/proxiDBot', '_blank');
                }}
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
