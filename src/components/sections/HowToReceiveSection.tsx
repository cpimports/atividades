
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Printer, PlayCircle } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    icon: <Mail className="h-10 w-10 text-primary" />,
    title: 'RECEBA EM SEU E-MAIL',
    description: 'Receba Imediatamente em seu e-mail.',
  },
  {
    icon: <Printer className="h-10 w-10 text-accent-foreground" />,
    title: 'ACESSE E IMPRIMA QUANDO QUISER',
    description: 'Acesse e imprima quando e quantas vezes preferir.',
  },
  {
    icon: <PlayCircle className="h-10 w-10 text-primary" />,
    title: 'APLIQUE SEU KIT AGORA MESMO',
    description: 'Coloque em prática com seus alunos ou filhos.',
  },
];

export default function HowToReceiveSection() {
  return (
    <section id="how-to-receive" className="py-16 md:py-24 relative overflow-hidden">
      <Image
        src="https://i.imgur.com/rOOH2iu.png"
        alt="Crianças aprendendo em um ambiente estimulante com o material"
        data-ai-hint="children education background"
        fill
        className="object-cover -z-20"
        quality={80}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            VEJA COMO RECEBER SEU MATERIAL
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm flex flex-col">
              <CardHeader className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                  {step.icon}
                </div>
                <CardTitle className="font-headline text-xl text-primary">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

