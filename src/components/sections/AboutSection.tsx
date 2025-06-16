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
              Entendendo a Jornada
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              Criar um filho com autismo é uma jornada única e gratificante, repleta de momentos de alegria e desafios singulares. Entendemos o desejo de fornecer o melhor suporte para o desenvolvimento e bem-estar do seu filho.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Spectrum Sprouts oferece uma coleção cuidadosamente selecionada de atividades elaboradas por especialistas para atender às necessidades específicas de crianças com autismo. Nosso objetivo é tornar o aprendizado divertido, envolvente e eficaz, ajudando seu filho a florescer.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-foreground/90">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                Atividades personalizadas para marcos do desenvolvimento.
              </li>
              <li className="flex items-center text-foreground/90">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                Foco na integração sensorial e habilidades cognitivas.
              </li>
              <li className="flex items-center text-foreground/90">
                <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                Guias fáceis de seguir para pais e cuidadores.
              </li>
            </ul>
          </div>
          <div className="p-2">
             <Card className="overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://placehold.co/600x450.png"
                alt="Ambiente de apoio para crianças com autismo"
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
