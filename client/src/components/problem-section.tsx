import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/use-intersection";

const problems = [
  {
    percentage: "40%",
    title: "Time Wasted",
    description: "Employee time lost on inefficient hiring processes",
    color: "text-red-500"
  },
  {
    percentage: "67%",
    title: "Overpaying",
    description: "Companies spending too much on recruitment agencies",
    color: "text-orange-500"
  },
  {
    percentage: "3+",
    title: "Months",
    description: "Average time for interns to land their first job",
    color: "text-red-600"
  }
];

export default function ProblemSection() {
  const [ref, isVisible] = useIntersection({ threshold: 0.3 });

  return (
    <section 
      id="problem"
      ref={ref}
      className="py-20 bg-gradient-to-br from-quantum-gray to-white relative overflow-hidden"
      data-testid="problem-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-black mb-12">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              The hiring crisis
            </span>
            <br />
            <span className="text-gray-900">is killing startups</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                className="neomorphic rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                data-testid={`problem-card-${index}`}
              >
                <div className={`text-6xl font-black ${problem.color} mb-4`}>
                  {problem.percentage}
                </div>
                <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
