import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Smile, Users, Puzzle, Sparkles, Heart } from 'lucide-react';

const benefits = [
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: 'Desenvolvimento Cognitivo',
    description: 'Atividades que estimulam o pensamento crítico, a resolução de problemas e as habilidades de memória.',
  },
  {
    icon: <Smile className="h-10 w-10 text-accent" />,
    title: 'Regulação Emocional',
    description: 'Ferramentas e técnicas para ajudar as crianças a entender e gerenciar suas emoções de forma eficaz.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Aprimoramento de Habilidades Sociais',
    description: 'Jogos e cenários interativos para melhorar a comunicação e a interação social.',
  },
  {
    icon: <Puzzle className="h-10 w-10 text-accent" />,
    title: 'Habilidades Motoras Finas e Grossas',
    description: 'Tarefas envolventes que promovem coordenação, equilíbrio e destreza.',
  },
   {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'Integração Sensorial',
    description: 'Atividades projetadas para ajudar a processar informações sensoriais de forma positiva.',
  },
  {
    icon: <Heart className="h-10 w-10 text-accent" />,
    title: 'Maior Engajamento',
    description: 'Tarefas divertidas e motivadoras que capturam a atenção e incentivam a participação.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            Como Spectrum Sprouts Ajuda
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Nossas atividades são cuidadosamente projetadas para fornecer inúmeros benefícios para o crescimento e desenvolvimento do seu filho.
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
