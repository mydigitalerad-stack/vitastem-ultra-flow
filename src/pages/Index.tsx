import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import TechnologySection from '@/components/landing/TechnologySection';
import HowToUseSection from '@/components/landing/HowToUseSection';
import IngredientsSection from '@/components/landing/IngredientsSection';
import CaseStudiesSection from '@/components/landing/CaseStudiesSection';
import UltraSection from '@/components/landing/UltraSection';
import WarningsSection from '@/components/landing/WarningsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <TechnologySection />
        <HowToUseSection />
        <IngredientsSection />
        <CaseStudiesSection />
        <UltraSection />
        <WarningsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
