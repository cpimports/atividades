
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, MessageCircle, Waves, SquareStack, BookOpenCheck, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const materialItems = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: 'Atividades Visuais e Motoras',
    description: 'Exercícios que aprimoram a percepção visual e a coordenação motora fina e grossa.',
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-accent" />,
    title: 'Jogos de Linguagem e Coordenação',
    description: 'Brincadeiras que desenvolvem habilidades de comunicação, vocabulário e sincronia de movimentos.',
  },
  {
    icon: <Waves className="h-10 w-10 text-primary" />,
    title: 'Desafios Sensoriais e Cognitivos',
    description: 'Tarefas que estimulam os sentidos e promovem o raciocínio lógico e a resolução de problemas.',
  },
  {
    icon: <SquareStack className="h-10 w-10 text-accent" />,
    title: 'Cartões, Jogos e Exercícios Práticos',
    description: 'Materiais versáteis para aprender de forma interativa e divertida sobre diversos temas.',
  },
  {
    icon: <BookOpenCheck className="h-10 w-10 text-primary" />,
    title: 'Acompanhamento Fácil',
    description: 'Instruções claras e objetivas, sem necessidade de treinamento prévio para aplicar as atividades.',
  },
];

export default function ActivityShowcaseSection() {
  return (
    <section id="material" className="pt-0 pb-16 md:pb-24 bg-background">
      {/* Full-width image container */}
      <div className="w-full mb-12">
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px]">
          <Image
            src="https://i.imgur.com/0NaA6hf.png"
            alt="Ilustração do conteúdo do Kit Gêniozinho em Ação em grande destaque"
            data-ai-hint="educational kit activities"
            layout="fill"
            objectFit="cover"
            className="rounded-lg" 
            priority
          />
        </div>
      </div>

      {/* Constrained content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            O Que Tem no Kit Gêniozinho em Ação?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Um kit completo de atividades educativas e interativas pensadas para estimular o desenvolvimento de crianças com perfis de aprendizado diversos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materialItems.map((item, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm flex flex-col">
              <CardHeader className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                  {item.icon}
                </div>
                <CardTitle className="font-headline text-xl text-primary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
