import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersection } from "@/hooks/use-intersection";

interface AudienceContent {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const audienceContent: Record<string, AudienceContent> = {
  founder: {
    title: "Горят дедлайны - пусть не горит команда.",
    description: "Масштабируйте свой стартап с правильными талантами быстрее, чем когда-либо. Больше никаких бесконечных собеседований или дорогих агентств.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400",
    imageAlt: "Разнообразная команда стартапа, сотрудничающая в современном рабочем пространстве"
  },
  intern: {
    title: "Получи работу быстрее, чем успеешь сказать 'портфолио'.",
    description: "Пропустите черную дыру заявок. Покажите свои навыки через видео, познакомьтесь с захватывающими стартапами и получите стажировку мечты.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400",
    imageAlt: "Молодой профессионал, работающий удаленно с ноутбуком и кофе"
  },
  hr: {
    title: "Нанимайте без головной боли.",
    description: "Оптимизируйте процесс рекрутинга с помощью ИИ-подбора, видео-собеседований и автоматизированных инструментов отбора.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400",
    imageAlt: "Профессиональная встреча HR с разнообразными членами команды, обсуждающими стратегию"
  },
  freelancer: {
    title: "Ваш следующий клиент - ближе, чем вы думаете: без долгих ожиданий.",
    description: "Стройте долгосрочные отношения с компаниями, которые ценят ваш опыт. Получайте проекты, которые соответствуют вашим навыкам и расписанию.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400",
    imageAlt: "Творческое рабочее пространство фрилансера с современными технологическими гаджетами и инструментами дизайна"
  }
};

const audienceOptions = [
  { key: "founder", label: "Основатель" },
  { key: "intern", label: "Стажер" },
  { key: "hr", label: "HR" },
  { key: "freelancer", label: "Фрилансер" }
];

export default function AudienceSection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.3 });
  const [activeAudience, setActiveAudience] = useState("founder");

  const currentContent = audienceContent[activeAudience];

  return (
    <section
      id="audience"
      ref={ref}
      className="py-20 bg-gradient-to-br from-quantum-gray to-white"
      data-testid="audience-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gray-900">Создано для</span>
            <span className="text-gradient-neural ml-2">каждого</span>
          </h2>

          {/* Interactive Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {audienceOptions.map(({ key, label }) => (
              <motion.button
                key={key}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeAudience === key
                    ? 'bg-gradient-to-r from-neural-blue to-quantum-purple text-white'
                    : 'glassmorphic text-gray-700 hover:bg-white/50'
                }`}
                onClick={() => setActiveAudience(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`audience-tab-${key}`}
              >
                {label}
              </motion.button>
            ))}
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAudience}
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              data-testid={`audience-content-${activeAudience}`}
            >
              <h3 className="text-3xl font-bold mb-4">{currentContent.title}</h3>
              <p className="text-xl text-gray-600 mb-8">{currentContent.description}</p>
              <img
                src={currentContent.image}
                alt={currentContent.imageAlt}
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
