import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 -z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Gift className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
        <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-6">
          Ready to Nurture Your Child's Potential?
        </h2>
        <p className="max-w-xl mx-auto text-lg text-primary-foreground/90 mb-10">
          Join Spectrum Sprouts today and gain access to a wealth of activities designed to help your child learn, grow, and shine.
        </p>
        <Button size="lg" variant="secondary" asChild className="shadow-2xl hover:scale-105 transition-transform duration-300">
          <Link href="/signup"> {/* Placeholder link */}
            Start Your Journey Now
          </Link>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent opacity-50"></div>
    </section>
  );
}
