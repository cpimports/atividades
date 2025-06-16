import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ActivityShowcaseSection from '@/components/sections/ActivityShowcaseSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import CtaSection from '@/components/sections/CtaSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background fade-in-load">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ActivityShowcaseSection />
        <BenefitsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
