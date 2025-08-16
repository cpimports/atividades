
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const steps = [
  {
    icon: <span className="text-4xl">📲</span>,
    title: 'ACESSE NOSSA PLATAFORMA EXCLUSIVA',
    description: 'Tenha todo o material em um só lugar: na nossa plataforma exclusiva, prática e organizada para você',
  },
  {
    icon: <Image src="/images/IMPRESSORA.webp" alt="Printer icon" data-ai-hint="printer document" width={40} height={40} className="text-accent-foreground" />,
    title: 'ACESSE E IMPRIMA QUANDO QUISER',
    description: 'Acesse e imprima quando e quantas vezes preferir.',
  },
  {
    icon: <Image src="/images/PLAY.webp" alt="Play icon" data-ai-hint="play button" width={40} height={40} className="text-primary" />,
    title: 'APLIQUE SEU KIT AGORA MESMO',
    description: 'Coloque em prática com seus alunos ou filhos.',
  },
];

export default function HowToReceiveSection() {
  return (
    <section id="how-to-receive" className="py-16 md:py-24 bg-background">
      {/* Background image and overlay removed */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Removed relative z-0 */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            VEJA COMO RECEBER SEU MATERIAL
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm flex flex-col">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 h-10 w-10 flex items-center justify-center">
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
