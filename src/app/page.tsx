
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import KitDescriptionSection from '@/components/sections/KitDescriptionSection';
import HowToReceiveSection from '@/components/sections/HowToReceiveSection';
import ActivityShowcaseSection from '@/components/sections/ActivityShowcaseSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background fade-in-load">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <KitDescriptionSection />
        <HowToReceiveSection />
        <ActivityShowcaseSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
