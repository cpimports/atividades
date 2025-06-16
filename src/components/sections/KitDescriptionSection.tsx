
import { BookMarked } from 'lucide-react';

export default function KitDescriptionSection() {
  return (
    <section id="kit-description" className="py-16 md:py-24 bg-gradient-to-br from-indigo-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BookMarked className="h-16 w-16 text-white mx-auto mb-4" />
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-white">
            Kit Gêniozinho em Ação – Atividades Inclusivas
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 text-left md:text-justify">
          <p>
            Material digital com mais de 100 atividades lúdicas e educativas, criado para estimular o foco, linguagem e comportamento de crianças com estilos únicos de aprendizagem.
          </p>
          <p>
            Acesso imediato em PDF, pronto para imprimir e usar em casa, na escola ou no consultório.
          </p>
        </div>
      </div>
    </section>
  );
}
