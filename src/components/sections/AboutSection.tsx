import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 opacity-50 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative p-6 md:p-8 rounded-xl shadow-2xl bg-card/80 backdrop-blur-lg border border-border/50">
             <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-50 -z-10"></div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-lg opacity-30 -z-10 transform rotate-12"></div>
            <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary mb-6">
              Understanding the Journey
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              Parenting a child with autism is a unique and rewarding journey, filled with moments of joy and unique challenges. We understand the desire to provide the best support for your child's development and well-being.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Spectrum Sprouts offers a curated collection of activities designed by experts to cater to the specific needs of autistic children. Our goal is to make learning fun, engaging, and effective, helping your child thrive.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-foreground/90">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                Tailored activities for developmental milestones.
              </li>
              <li className="flex items-center text-foreground/90">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                Focus on sensory integration and cognitive skills.
              </li>
              <li className="flex items-center text-foreground/90">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                Easy-to-follow guides for parents and caregivers.
              </li>
            </ul>
          </div>
          <div className="p-2">
             <Card className="overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://placehold.co/600x450.png"
                alt="Supportive environment for autistic children"
                data-ai-hint="child learning"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
