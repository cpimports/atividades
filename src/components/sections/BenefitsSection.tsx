
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, CalendarClock, Brain, Palette, BookOpenText, RefreshCw } from 'lucide-react';
import Image from 'next/image';

const deliverables = [
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: 'Pacote completo com mais de 1000 atividades educativas',
    description: 'Educativas e interativas para engajar e desenvolver diversas habilidades.',
  },
  {
    icon: <CalendarClock className="h-10 w-10 text-accent" />,
    title: 'Cartões de Rotina e Emoções',
    description: 'Ferramentas visuais para ajudar na organização e expressão emocional.',
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: 'Jogos de Memória e Coordenação',
    description: 'Desafios divertidos para estimular o cérebro e aprimorar habilidades motoras.',
  },
  {
    icon: <Palette className="h-10 w-10 text-accent" />,
    title: 'Letras, Números, Formas e Cores',
    description: 'Materiais para aprendizado fundamental de conceitos básicos de forma lúdica.',
  },
   {
    icon: <BookOpenText className="h-10 w-10 text-primary" />,
    title: 'Guia Prático com Sugestões',
    description: 'Orientações claras para pais e educadores aproveitarem ao máximo cada atividade.',
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-accent" />,
    title: 'Acesso Vitalício e Atualizações',
    description: 'Conteúdo sempre atualizado e disponível para você usar quando quiser.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="oque-voce-recebe" className="py-16 md:py-24 relative overflow-hidden">
      <Image
        src="https://i.imgur.com/EqKEu7v.png"
        alt="Fundo com elementos educativos e lúdicos para crianças"
        data-ai-hint="education kids background"
        fill
        className="object-cover -z-20"
        quality={80}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            O Que Você Recebe ao Adquirir o Kit?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Um pacote completo para transformar o aprendizado em uma aventura diária, repleta de descobertas e desenvolvimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
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
