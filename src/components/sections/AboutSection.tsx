
import { Hourglass, Focus, PenSquare, XCircle, CheckCircle, Palette, Target, BarChart } from 'lucide-react';

export default function AboutSection() {

  const challenges = [
    {
      text: "Passar horas buscando e adaptando atividades que nem sempre funcionam.",
      icon: <Hourglass className="h-6 w-6 text-destructive" />,
      bgColor: "bg-destructive/10",
    },
    {
      text: "A dificuldade de encontrar materiais que realmente prendam a atenção dos alunos.",
      icon: <Focus className="h-6 w-6 text-destructive" />,
      bgColor: "bg-destructive/10",
    },
    {
      text: "A sensação de que falta apoio e de que você precisa criar tudo do zero.",
      icon: <PenSquare className="h-6 w-6 text-destructive" />,
      bgColor: "bg-destructive/10",
    }
  ];

  const withoutKit = [
    { text: "Horas gastas adaptando atividades que nem sempre funcionam.", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    { text: "Falta de recursos visuais prontos para uso.", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    { text: "Dificuldade para manter o interesse e engajamento do aluno.", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    { text: "Necessidade de acompanhar o progresso de perto enquanto a turma segue outro ritmo.", icon: <XCircle className="h-6 w-6 text-destructive" /> }
  ];

  const withKit = [
    { text: "Atividades prontas e adaptadas que funcionam de forma eficaz.", icon: <CheckCircle className="h-6 w-6 text-green-600" />, bgColor: "bg-green-100" },
    { text: "Recursos visuais claros e prontos para uso imediato.", icon: <Palette className="h-6 w-6 text-blue-600" />, bgColor: "bg-blue-100" },
    { text: "Facilidade para manter o interesse e o engajamento do aluno.", icon: <Target className="h-6 w-6 text-yellow-600" />, bgColor: "bg-yellow-100" },
    { text: "Autonomia do aluno enquanto o professor acompanha toda a turma.", icon: <BarChart className="h-6 w-6 text-purple-600" />, bgColor: "bg-purple-100" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold text-primary">
            Preparar atividades para alunos com TEA não precisa ser um desafio...
          </h2>
          <p className="mt-4 text-lg text-foreground/80 font-semibold max-w-4xl mx-auto">Muitos professores passam horas adaptando materiais, improvisando recursos visuais e buscando estratégias que mantenham o interesse do aluno. Mas isso não precisa ser assim.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <ul className="space-y-4">
              {challenges.map((item, index) => (
                <li key={index}>
                  <div className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center text-card-foreground">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 ${item.bgColor}`}>
                        {item.icon}
                    </div>
                    <span className="font-semibold text-base">{item.text}</span>
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
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* With Kit - Aparece primeiro no mobile */}
          <div className="bg-darkPurple/10 p-6 rounded-xl shadow-lg border border-primary/20 order-1 md:order-2">
            <h3 className="font-headline text-2xl font-bold text-center mb-6 text-purple-800">Com o Gêniozinho em Ação</h3>
             <ul className="space-y-4">
              {withKit.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 ${item.bgColor}`}>
                    {item.icon}
                  </div>
                  <span className="font-semibold text-foreground text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Without Kit - Aparece depois no mobile */}
          <div className="bg-muted/50 p-6 rounded-xl shadow-md border border-border/20 order-2 md:order-1">
            <h3 className="font-headline text-2xl font-bold text-center mb-6 text-red-800">Sem o Gêniozinho em Ação</h3>
            <ul className="space-y-4">
              {withoutKit.map((item, index) => (
                <li key={index} className="flex items-center">
                   <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 bg-red-100">
                    {item.icon}
                  </div>
                  <span className="text-foreground/80 text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
