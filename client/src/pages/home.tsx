import Navigation from "@/components/navigation";
import FloatingNav from "@/components/floating-nav";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import AudienceSection from "@/components/audience-section";
import BenefitsSection from "@/components/benefits-section";
import PricingSection from "@/components/pricing-section";
import CTASection from "@/components/cta-section";
import { Infinity } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingNav />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AudienceSection />
      <BenefitsSection />
      <PricingSection />
      <CTASection />

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100" data-testid="footer">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-neural-blue to-quantum-purple rounded-lg flex items-center justify-center">
                <Infinity className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold text-gray-900">ProxiD</span>
            </div>
            <div className="flex space-x-6 text-gray-600">
              <a href="/privacy" className="hover:text-neural-blue transition-colors" data-testid="footer-privacy">Конфиденциальность</a>
              <a href="/terms" className="hover:text-neural-blue transition-colors" data-testid="footer-terms">Условия</a>
              <a href="/contact" className="hover:text-neural-blue transition-colors" data-testid="footer-contact">Контакты</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500">
            <p>&copy; 2024 ProxiD. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
