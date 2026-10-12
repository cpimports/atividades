'use client';

import dynamic from 'next/dynamic';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections-oferta2/HeroSection';
import { Skeleton } from '@/components/ui/skeleton';
import AboutSection from '@/components/sections-oferta2/AboutSection';

// Dynamically import sections that are below the fold
const KitDescriptionSection = dynamic(() => import('@/components/sections-oferta2/KitDescriptionSection'), {
  loading: () => <Skeleton className="h-[600px] w-full" />
});
const CommunicationJourneySection = dynamic(() => import('@/components/sections-oferta2/CommunicationJourneySection'), {
  loading: () => <Skeleton className="h-[400px] w-full" />
});
const HowToReceiveSection = dynamic(() => import('@/components/sections-oferta2/HowToReceiveSection'), {
  loading: () => <Skeleton className="h-[300px] w-full" />
});
const BenefitsSection = dynamic(() => import('@/components/sections-oferta2/BenefitsSection'), {
  loading: () => <Skeleton className="h-[800px] w-full" />
});
const TestimonialsSection = dynamic(() => import('@/components/sections-oferta2/TestimonialsSection'), {
  loading: () => <Skeleton className="h-[800px] w-full" />
});
const OfferSection = dynamic(() => import('@/components/sections-oferta2/OfferSection'), {
  loading: () => <Skeleton className="h-[1000px] w-full" />
});
const FaqSection = dynamic(() => import('@/components/sections-oferta2/FaqSection'), {
  loading: () => <Skeleton className="h-[500px] w-full" />
});

export default function Oferta2Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <KitDescriptionSection />
        <CommunicationJourneySection />
        <HowToReceiveSection />
        <BenefitsSection />
        <TestimonialsSection />
        <OfferSection 
          price="19,76" 
          installmentText="ou 4x de R$5,66" 
          checkoutUrl="https://loja.geniozinhoemacao.com.br/checkout/v4/WbE0rP04SZDO0RPFaY8D" 
        /> 
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
