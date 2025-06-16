import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Smile, Users, Puzzle, Sparkles, Heart } from 'lucide-react';

const benefits = [
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: 'Cognitive Development',
    description: 'Activities that stimulate critical thinking, problem-solving, and memory skills.',
  },
  {
    icon: <Smile className="h-10 w-10 text-accent" />,
    title: 'Emotional Regulation',
    description: 'Tools and techniques to help children understand and manage their emotions effectively.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Social Skill Enhancement',
    description: 'Interactive games and scenarios to improve communication and social interaction.',
  },
  {
    icon: <Puzzle className="h-10 w-10 text-accent" />,
    title: 'Fine & Gross Motor Skills',
    description: 'Engaging tasks that promote coordination, balance, and dexterity.',
  },
   {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'Sensory Integration',
    description: 'Activities designed to help process sensory information in a positive way.',
  },
  {
    icon: <Heart className="h-10 w-10 text-accent" />,
    title: 'Increased Engagement',
    description: 'Fun and motivating tasks that capture attention and encourage participation.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            How Spectrum Sprouts Helps
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Our activities are thoughtfully designed to provide numerous benefits for your child's growth and development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm">
              <CardHeader className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                  {benefit.icon}
                </div>
                <CardTitle className="font-headline text-xl text-primary">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
