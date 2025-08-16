
'use client';

import { X, Check, Palette, Target, BarChart } from 'lucide-react';

const withoutKit = [
  { text: "Horas gastas adaptando atividades que nem sempre funcionam.", icon: <X className="h-6 w-6 text-red-500 bg-red-100 rounded-full p-1 mr-3 flex-shrink-0" /> },
  { text: "Falta de recursos visuais prontos para uso.", icon: <X className="h-6 w-6 text-red-500 bg-red-100 rounded-full p-1 mr-3 flex-shrink-0" /> },
  { text: "Dificuldade para manter o interesse e engajamento do aluno.", icon: <X className="h-6 w-6 text-red-500 bg-red-100 rounded-full p-1 mr-3 flex-shrink-0" /> },
  { text: "Necessidade de acompanhar o progresso de perto enquanto a turma segue outro ritmo.", icon: <X className="h-6 w-6 text-red-500 bg-red-100 rounded-full p-1 mr-3 flex-shrink-0" /> },
];

const withKit = [
  { text: "Atividades prontas e adaptadas que funcionam de forma eficaz.", icon: <Check className="h-6 w-6 text-green-600 bg-green-100 rounded-full p-1 mr-3 flex-shrink-0" /> },
  { text: "Recursos visuais claros e prontos para uso imediato.", icon: <Palette className="h-6 w-6 text-blue-600 bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0" /> },
  { text: "Facilidade para manter o interesse e o engajamento do aluno.", icon: <Target className="h-6 w-6 text-yellow-600 bg-yellow-100 rounded-full p-1 mr-3 flex-shrink-0" /> },
  { text: "Autonomia do aluno enquanto o professor acompanha toda a turma.", icon: <BarChart className="h-6 w-6 text-purple-600 bg-purple-100 rounded-full p-1 mr-3 flex-shrink-0" /> },
]

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Bloco da Esquerda */}
          <div className="bg-muted/50 p-6 rounded-lg shadow-md border border-border/20">
            <h3 className="font-headline text-2xl font-bold text-foreground/80 mb-6 text-center">Sem o Gêniozinho em Ação</h3>
            <ul className="space-y-4">
              {withoutKit.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  <span className="text-foreground/80">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloco da Direita */}
          <div className="bg-darkPurple/10 p-6 rounded-lg shadow-lg border border-darkPurple/20">
            <h3 className="font-headline text-2xl font-bold text-primary mb-6 text-center">Com o Gêniozinho em Ação</h3>
            <ul className="space-y-4">
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
  )
}
