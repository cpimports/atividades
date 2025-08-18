'use client';

import { BrainCircuit, Users, Award, PersonStanding } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: <Award className="h-12 w-12 text-blue-500" />,
    title: 'AUTONOMIA',
    text: 'Estimule a capacidade do seu aluno de superar desafios e se expressar de forma independente, fortalecendo sua confiança e independência nas interações sociais e no desenvolvimento pessoal.',
  },
  {
    icon: <BrainCircuit className="h-12 w-12 text-purple-500" />,
    title: 'DESENVOLVIMENTO COGNITIVO',
    text: 'Estimula o desenvolvimento das habilidades cognitivas, ajudando-o a compreender e gerenciar emoções, melhorando sua capacidade de resolução de problemas e promovendo um pensamento mais claro e estruturado.',
  },
  {
    icon: <PersonStanding className="h-12 w-12 text-green-500" />,
    title: 'AUTOCONFIANÇA',
    text: 'Fortalece a autoestima e a confiança, fornecendo-lhe ferramentas para identificar e gerenciar emoções, melhorando sua comunicação verbal e não verbal e capacitando-o a interagir positivamente com outras pessoas.',
  },
  {
    icon: <Users className="h-12 w-12 text-yellow-500" />,
    title: 'INCLUSÃO',
    text: 'Estimule a integração do seu aluno em diferentes ambientes sociais, incentivando o desenvolvimento de habilidades de comunicação e interação que o ajudem a estabelecer amizades significativas e a desfrutar de relacionamentos sociais gratificantes.',
  },
];

export default function CommunicationJourneySection() {
  return (
    <section id="communication-journey" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl sm:text-4xl font-bold text-primary">
            Veja como nosso kit pode transformar a jornada de comunicação do seu aluno autista
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-6">
              <CardHeader className="items-center p-0 mb-4">
                <div className="p-4 bg-primary/10 rounded-full inline-block">
                  {benefit.icon}
                </div>
              </CardHeader>
              <CardTitle className="font-headline text-xl text-primary mb-2">{benefit.title}</CardTitle>
              <CardContent className="p-0 flex-grow">
                <p className="text-foreground/70">{benefit.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
