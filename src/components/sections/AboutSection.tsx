
import { Hourglass, Focus, PenSquare, XCircle, CheckCircle, Palette, Target, BarChart } from 'lucide-react';

export default function AboutSection() {

  const challenges = [
    {
      text: "Passar horas buscando e adaptando atividades que nem sempre funcionam.",
      icon: <Hourglass className="h-6 w-6 text-destructive mr-3 mt-0.5 flex-shrink-0" />
    },
    {
      text: "A dificuldade de encontrar materiais que realmente prendam a atenção dos alunos.",
      icon: <Focus className="h-6 w-6 text-destructive mr-3 mt-0.5 flex-shrink-0" />
    },
    {
      text: "A sensação de que falta apoio e de que você precisa criar tudo do zero.",
      icon: <PenSquare className="h-6 w-6 text-destructive mr-3 mt-0.5 flex-shrink-0" />
    }
  ];

  const withoutKit = [
    { text: "Horas gastas adaptando atividades que nem sempre funcionam.", icon: <XCircle className="h-6 w-6 text-destructive mr-3 mt-0.5 flex-shrink-0" /> },
    { text: "Falta de recursos visuais prontos para uso.", icon: <XCircle className="h-6 w-6 text-destructive mr-3 mt-0.5 flex-shrink-0" /> },
    { text: "Dificuldade para manter o interesse e engajamento do aluno.", icon: <XCircle className="h-6 w-6 text-destructive mr-3 mt-0.5 flex-shrink-0" /> },
    { text: "Necessidade de acompanhar o progresso de perto enquanto a turma segue outro ritmo.", icon: <XCircle className="h-6 w-6 text-destructive mr-3 mt-0.5 flex-shrink-0" /> }
  ];

  const withKit = [
    { text: "Atividades prontas e adaptadas que funcionam de forma eficaz.", icon: <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> },
    { text: "Recursos visuais claros e prontos para uso imediato.", icon: <Palette className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" /> },
    { text: "Facilidade para manter o interesse e o engajamento do aluno.", icon: <Target className="h-6 w-6 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" /> },
    { text: "Autonomia do aluno enquanto o professor acompanha toda a turma.", icon: <BarChart className="h-6 w-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" /> }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-darkPurple/20 via-darkPurple/10 to-background/5 -z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold text-primary">
            Preparar atividades para alunos com TEA não precisa ser um desafio...
          </h2>
          <p className="mt-4 text-lg text-foreground/80 font-semibold max-w-4xl mx-auto">Muitos professores passam horas adaptando materiais, improvisando recursos visuais e buscando estratégias que mantenham o interesse do aluno. Mas isso não precisa ser assim.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <ul className="space-y-3">
              {challenges.map((item, index) => (
                <li key={index}>
                  <div className="bg-card p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex items-start text-card-foreground">
                    {item.icon}
                    <span className="font-semibold">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-lg text-foreground/80 text-center font-semibold pt-4">
              Se você se identificou com esses pontos, saiba que não está sozinho. E o mais importante: existe um caminho mais leve.
            </p>
            <p className="text-lg text-foreground text-center font-bold pt-2">
              Foi por isso que criamos a Plataforma Gêniozinho em Ação.
            </p>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Without Kit */}
          <div className="bg-muted/50 p-6 rounded-lg shadow-md border border-border/20">
            <h3 className="font-headline text-2xl font-semibold text-center mb-4 text-foreground/80">Sem o Gêniozinho em Ação</h3>
            <ul className="space-y-3">
              {withoutKit.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  <span className="text-foreground/80">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* With Kit */}
          <div className="bg-darkPurple/10 p-6 rounded-lg shadow-lg border border-primary/20">
            <h3 className="font-headline text-2xl font-semibold text-center mb-4 text-primary">Com o Gêniozinho em Ação</h3>
             <ul className="space-y-3">
              {withKit.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  <span className="font-semibold text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
