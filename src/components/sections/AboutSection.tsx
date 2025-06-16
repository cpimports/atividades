import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 opacity-50 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-darkPurple">
            Você se identifica com isso?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 bg-card/80 backdrop-blur-lg border border-border/50 shadow-lg">
              <ul className="space-y-4">
                {[
                  "Seu aluno ou filho tem dificuldade para manter o foco?",
                  "Você sente que ele se frustra facilmente com atividades comuns?",
                  "Fica difícil encontrar materiais que realmente estimulem o aprendizado?",
                  "Já tentou de tudo, mas sente que falta algo mais interativo?",
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-foreground/90">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <p className="text-lg text-foreground/80 text-center md:text-left">
              Você não está só — pais, educadores e terapeutas enfrentam os mesmos desafios todos os dias.
            </p>
          </div>

          <div className="relative p-6 md:p-8 rounded-xl shadow-2xl bg-card/80 backdrop-blur-lg border border-border/50">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-50 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-lg opacity-30 -z-10 transform rotate-12"></div>
            <h3 className="font-headline text-2xl sm:text-3xl font-semibold text-darkPurple mb-6 text-center md:text-left">
              A Solução: Gêniozinho em Ação
            </h3>
            <Image
              src="https://placehold.co/500x350.png"
              alt="Kit Gêniozinho em Ação com diversos materiais educativos"
              data-ai-hint="educational kit items"
              width={500}
              height={350}
              className="rounded-lg shadow-md mb-6 w-full object-cover aspect-video"
            />
            <p className="text-lg text-foreground/80 mb-4">
              Um kit completo de atividades educativas e interativas pensadas para estimular o desenvolvimento de crianças com perfis de aprendizado diversos.
            </p>
            <p className="text-md font-semibold text-foreground/90 mb-2">Ideal para uso por:</p>
            <ul className="space-y-2">
              {[
                { text: "Pais", icon: <Users className="h-5 w-5 text-primary mr-2 flex-shrink-0" /> },
                { text: "Professores da educação infantil e ensino fundamental", icon: <Users className="h-5 w-5 text-primary mr-2 flex-shrink-0" /> },
                { text: "Psicopedagogos e cuidadores", icon: <Users className="h-5 w-5 text-primary mr-2 flex-shrink-0" /> },
              ].map((item, index) => (
                <li key={index} className="flex items-center text-foreground/90">
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
