
'use client';

import dynamic from 'next/dynamic';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import { Skeleton } from '@/components/ui/skeleton';

// Dynamically import sections that are below the fold
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { 
  loading: () => <Skeleton className="h-[400px] w-full" />
});
const ComparisonSection = dynamic(() => import('@/components/sections/ComparisonSection'), {
  loading: () => <Skeleton className="h-[400px] w-full" />
});
const KitDescriptionSection = dynamic(() => import('@/components/sections/KitDescriptionSection'), {
  loading: () => <Skeleton className="h-[600px] w-full" />
});
const HowToReceiveSection = dynamic(() => import('@/components/sections/HowToReceiveSection'), {
  loading: () => <Skeleton className="h-[300px] w-full" />
});
const BenefitsSection = dynamic(() => import('@/components/sections/BenefitsSection'), {
  loading: () => <Skeleton className="h-[800px] w-full" />
});
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), {
  loading: () => <Skeleton className="h-[800px] w-full" />
});
const OfferSection = dynamic(() => import('@/components/sections/OfferSection'), {
  loading: () => <Skeleton className="h-[1000px] w-full" />
});
const FaqSection = dynamic(() => import('@/components/sections/FaqSection'), {
  loading: () => <Skeleton className="h-[500px] w-full" />
});


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background fade-in-load">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ComparisonSection />
        <HowToReceiveSection />
        <KitDescriptionSection />
        <BenefitsSection />
        <TestimonialsSection />
        <OfferSection /> 
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
