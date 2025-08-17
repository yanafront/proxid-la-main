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
    title: "Our release is on fire. Our team is not. Let's fix that.",
    description: "Scale your startup with the right talent, faster than ever. No more endless interviews or expensive agencies.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400",
    imageAlt: "Diverse startup team collaborating in modern workspace"
  },
  intern: {
    title: "Get hired faster than you can say 'portfolio'.",
    description: "Skip the application black hole. Show your skills through video, get matched with exciting startups, and land your dream internship.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400",
    imageAlt: "Young professional working remotely with laptop and coffee"
  },
  hr: {
    title: "Hire without the headache.",
    description: "Streamline your recruitment process with AI-powered matching, video interviews, and automated screening tools.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400",
    imageAlt: "Professional HR meeting with diverse team members discussing strategy"
  },
  freelancer: {
    title: "Meet your next client over coffee, not over months.",
    description: "Build lasting relationships with companies that value your expertise. Get matched with projects that fit your skills and schedule.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400",
    imageAlt: "Creative freelancer workspace with modern tech gadgets and design tools"
  }
};

const audienceOptions = [
  { key: "founder", label: "I'm a Founder" },
  { key: "intern", label: "I'm an Intern" },
  { key: "hr", label: "I'm in HR" },
  { key: "freelancer", label: "I'm a Freelancer" }
];

export default function AudienceSection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.3 });
  const [activeAudience, setActiveAudience] = useState("founder");

  const currentContent = audienceContent[activeAudience];

  return (
    <section 
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
            <span className="text-gray-900">Built for</span>
            <span className="text-gradient-neural ml-2">everyone</span>
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
