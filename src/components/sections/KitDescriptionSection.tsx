
import { BookMarked } from 'lucide-react';

export default function KitDescriptionSection() {
  return (
    <section id="kit-description" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BookMarked className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            Conheça o Kit Gêniozinho em Ação
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 text-left md:text-justify">
          <p>
            O Kit Educativo “Gêniozinho em Ação” é um material digital com atividades interativas e inclusivas, desenvolvido especialmente para estimular o foco, a linguagem e o comportamento de crianças com estilos únicos de aprendizagem.
          </p>
          <p>
            Após a compra, você recebe acesso imediato a um portal exclusivo com todo o conteúdo em formato PDF, pronto para baixar, imprimir e aplicar no dia a dia — em casa, na escola ou no consultório.
          </p>
          <p>
            O material completo contém +100 atividades educativas e lúdicas, criadas com apoio de especialistas e pensadas para fortalecer o vínculo entre crianças e adultos.
          </p>
        </div>
      </div>
    </section>
  );
}
