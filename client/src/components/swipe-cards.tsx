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
    name: "Alex Chen",
    title: "Senior Frontend Developer",
    skills: ["React", "TypeScript", "Next.js"],
    bio: "5+ years building scalable web apps. Currently available for exciting startup projects.",
    hourlyRate: 75,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "2",
    name: "Maya Patel",
    title: "UI/UX Designer",
    skills: ["Figma", "Design Systems", "Prototyping"],
    bio: "Crafting beautiful, user-centered designs. Portfolio with 50+ successful projects.",
    hourlyRate: 60,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b442?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "3",
    name: "David Kim",
    title: "Project Manager",
    skills: ["Agile", "Scrum", "Leadership"],
    bio: "Led 20+ teams to successful product launches. Specialized in tech startups and rapid scaling.",
    hourlyRate: 85,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "4",
    name: "Sarah Johnson",
    title: "Full Stack Developer",
    skills: ["Node.js", "Python", "AWS"],
    bio: "Building robust backend systems and APIs. Experience with microservices and cloud architecture.",
    hourlyRate: 80,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "5",
    name: "Marcus Rodriguez",
    title: "Data Scientist",
    skills: ["Machine Learning", "Python", "SQL"],
    bio: "Turning data into actionable insights. Specialized in predictive analytics and AI implementation.",
    hourlyRate: 90,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

export default function SwipeCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleSwipe();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const handleSwipe = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
      setIsAnimating(false);
    }, 600);
  };

  const handleManualSwipe = (direction: 'left' | 'right') => {
    if (!isAnimating) {
      handleSwipe();
    }
  };

  return (
    <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
      <div className="card-stack relative w-80 h-96">
        {profiles.map((profile, index) => {
          const isActive = index === currentIndex;
          const offset = (index - currentIndex + profiles.length) % profiles.length;
          
          return (
            <motion.div
              key={profile.id}
              className="swipe-card w-full h-full neomorphic rounded-3xl p-6 flex flex-col"
              style={{
                zIndex: profiles.length - offset,
              }}
              initial={false}
              animate={{
                y: offset * 10,
                scale: 1 - offset * 0.05,
                opacity: Math.max(0.6, 1 - offset * 0.1),
                rotateY: isAnimating && isActive ? [0, -25, 0] : 0,
                rotateZ: isAnimating && isActive ? [0, 10, 0] : 0,
                x: isAnimating && isActive ? [0, 300, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                ease: [0.175, 0.885, 0.32, 1.275]
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
