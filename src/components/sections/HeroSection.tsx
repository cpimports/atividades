import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        {/* Subtle background pattern or image can be added here */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-6 mt-[-2rem] md:mt-[-3rem] animate-fade-in-fast flex justify-center">
          <Image
            src="https://i.imgur.com/sb4rEa0.png"
            alt="Spectrum Sprouts Logo"
            data-ai-hint="logo abstract"
            width={160}
            height={160}
            className="rounded-lg"
            priority
          />
        </div>
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary animate-fade-in-medium">
          Unlock Your Child's World with <span className="text-accent">Spectrum Sprouts</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 animate-fade-in-slow">
          Discover engaging, research-backed activities designed to support the unique developmental journey of children with autism. Foster skills, spark joy, and celebrate every milestone.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-slow" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="#activities">
              Explore Activities <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="#about">
              Learn More
            </Link>
          </Button>
        </div>
        <div className="mt-16 animate-fade-in-slow" style={{ animationDelay: '0.8s' }}>
          <Image 
            src="https://placehold.co/800x400.png" 
            alt="Happy children playing with educational toys" 
            data-ai-hint="children playing"
            width={800} 
            height={400}
            className="rounded-xl shadow-2xl mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
