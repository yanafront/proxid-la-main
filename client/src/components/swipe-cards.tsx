import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

interface Profile {
  id: string;
  name: string;
  title: string;
  skills: string[];
  bio: string;
  hourlyRate: number;
  avatar: string;
}

const profiles: Profile[] = [
  {
    id: "1",
    name: "Алекс Чен",
    title: "Старший Frontend разработчик",
    skills: ["React", "TypeScript", "Next.js"],
    bio: "5+ лет создания масштабируемых веб-приложений. Сейчас доступен для захватывающих стартап-проектов.",
    hourlyRate: 75,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "2",
    name: "Майя Патель",
    title: "UI/UX дизайнер",
    skills: ["Figma", "Дизайн-системы", "Прототипирование"],
    bio: "Создаю красивые, ориентированные на пользователя дизайны. Портфолио с 50+ успешными проектами.",
    hourlyRate: 60,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b442?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "3",
    name: "Дэвид Ким",
    title: "Проект-менеджер",
    skills: ["Agile", "Scrum", "Лидерство"],
    bio: "Привел 20+ команд к успешному запуску продуктов. Специализируюсь на технологических стартапах и быстром масштабировании.",
    hourlyRate: 85,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "4",
    name: "Сара Джонсон",
    title: "Full Stack разработчик",
    skills: ["Node.js", "Python", "AWS"],
    bio: "Создаю надежные бэкенд-системы и API. Опыт с микросервисами и облачной архитектурой.",
    hourlyRate: 80,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "5",
    name: "Маркус Родригес",
    title: "Data Scientist",
    skills: ["Машинное обучение", "Python", "SQL"],
    bio: "Превращаю данные в практические инсайты. Специализируюсь на предиктивной аналитике и внедрении ИИ.",
    hourlyRate: 90,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

export default function SwipeCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setSwipeDirection(Math.random() > 0.5 ? 'right' : 'left');
        handleSwipe();
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const handleSwipe = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
      setIsAnimating(false);
    }, 800);
  };

  const handleManualSwipe = (direction: 'left' | 'right') => {
    if (!isAnimating) {
      setSwipeDirection(direction);
      handleSwipe();
    }
  };

  return (
    <div className="relative h-96 lg:h-[550px] flex items-center justify-center">
      <div className="card-stack relative w-80 h-96 perspective-1000">
        {profiles.map((profile, index) => {
          const isActive = index === currentIndex;
          const offset = (index - currentIndex + profiles.length) % profiles.length;

          return (
            <motion.div
              key={profile.id}
              className="swipe-card w-full h-full neomorphic rounded-3xl p-6 flex flex-col shadow-2xl"
              style={{
                zIndex: profiles.length - offset,
                transformStyle: 'preserve-3d',
              }}
              initial={false}
              animate={{
                y: offset * 15,
                scale: 1 - offset * 0.08,
                opacity: Math.max(0.4, 1 - offset * 0.15),
                rotateY: isAnimating && isActive
                  ? [0, swipeDirection === 'right' ? -35 : 35, 0]
                  : offset * -5,
                rotateZ: isAnimating && isActive
                  ? [0, swipeDirection === 'right' ? 15 : -15, 0]
                  : 0,
                x: isAnimating && isActive
                  ? [0, swipeDirection === 'right' ? 400 : -400, 0]
                  : offset * 5,
                rotateX: offset * 2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.2 }
              }}
              data-testid={`swipe-card-${profile.id}`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-16 h-16 rounded-full object-cover"
                  data-testid={`avatar-${profile.id}`}
                />
                <div>
                  <h3 className="font-bold text-lg" data-testid={`name-${profile.id}`}>
                    {profile.name}
                  </h3>
                  <p className="text-neural-blue" data-testid={`title-${profile.id}`}>
                    {profile.title}
                  </p>
                </div>
              </div>

              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap gap-2" data-testid={`skills-${profile.id}`}>
                  {profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neural-blue/10 text-neural-blue rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm" data-testid={`bio-${profile.id}`}>
                  {profile.bio}
                </p>
                <div className="text-2xl font-bold text-green-600" data-testid={`rate-${profile.id}`}>
                  ${profile.hourlyRate}/hr
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors"
                  onClick={() => handleManualSwipe('left')}
                  data-testid={`reject-${profile.id}`}
                >
                  <X size={20} />
                </button>
                <button
                  className="w-12 h-12 bg-green-100 text-green-500 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors"
                  onClick={() => handleManualSwipe('right')}
                  data-testid={`like-${profile.id}`}
                >
                  <Heart size={20} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
