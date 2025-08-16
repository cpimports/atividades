
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="pt-16 md:pt-24 pb-8 md:pb-12 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-darkPurple/20 via-darkPurple/10 to-background/5 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            Preparar atividades para alunos com TEA não precisa ser um desafio...
          </h2>
          <p className="mt-4 text-lg text-foreground/80 font-semibold">Lembre-se: Seu tempo é precioso...</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <ul className="space-y-3">
              {[
                "Seu aluno ou filho tem dificuldade para manter o foco?",
                "Você sente que ele se frustra facilmente com atividades comuns?",
                "Fica difícil encontrar materiais que realmente estimulem o aprendizado?",
                "Já tentou de tudo, mas sente que falta algo mais interativo?",
              ].map((item, index) => (
                <li key={index}>
                  <div className="bg-card p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-start text-card-foreground">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-lg text-foreground/80 text-center font-semibold pt-4">
              Você não está só — pais, educadores e terapeutas enfrentam os mesmos desafios todos os dias.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
