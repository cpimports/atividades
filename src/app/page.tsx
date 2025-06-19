
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import KitDescriptionSection from '@/components/sections/KitDescriptionSection';
import HowToReceiveSection from '@/components/sections/HowToReceiveSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import OfferSection from '@/components/sections/OfferSection'; 
import FaqSection from '@/components/sections/FaqSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background fade-in-load">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <HowToReceiveSection />
        <KitDescriptionSection />
        {/* ActivityShowcaseSection was here */}
        <BenefitsSection />
        <TestimonialsSection />
        <OfferSection /> 
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
