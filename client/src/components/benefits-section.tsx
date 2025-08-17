import { motion } from "framer-motion";
import { Rocket, PiggyBank, TrendingDown } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const benefits = [
  {
    icon: Rocket,
    title: "Speed — 60% faster hiring",
    description: "From posting to hiring in days, not weeks. Our AI eliminates the endless back-and-forth of traditional recruitment.",
    gradient: "from-green-400 to-green-600"
  },
  {
    icon: PiggyBank,
    title: "Savings — Up to $20K/year",
    description: "Cut recruitment costs by eliminating expensive agencies and reducing time-to-hire for critical positions.",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    icon: TrendingDown,
    title: "Cost — 60% cheaper than agencies",
    description: "Pay only for successful matches, not for promises. No upfront fees, no hidden costs, just results.",
    gradient: "from-purple-400 to-purple-600"
  }
];

export default function BenefitsSection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.3 });

  return (
    <section 
      id="benefits"
      ref={ref}
      className="py-20 bg-white"
      data-testid="benefits-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black mb-6">
            <span className="text-gray-900">Why choose</span>
            <span className="text-gradient-neural ml-2">ProxiD</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="neomorphic rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer"
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
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
