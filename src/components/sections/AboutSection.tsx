
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-darkPurple/20 via-darkPurple/10 to-background/5 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            CHEGA DE PERDER TEMPO!
          </h2>
        </div>
        <div className="flex justify-center"> {/* Centering the remaining card */}
          <div className="space-y-6 max-w-xl"> {/* Constraining width if needed */}
            <Card className="p-6 bg-card/80 hover:bg-card/90 backdrop-blur-lg border border-border/50 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
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
            <p className="text-lg text-foreground/80 text-center">
              Você não está só — pais, educadores e terapeutas enfrentam os mesmos desafios todos os dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
