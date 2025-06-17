
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function KitDescriptionSection() {
  return (
    <section id="kit-description" className="py-16 md:py-24 bg-gradient-to-br from-indigo-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center -mt-[4rem] md:-mt-[5rem] mb-4">
          <Image
            src="https://i.imgur.com/OnWpWgf.png"
            alt="Ícone de livro com atividades"
            data-ai-hint="book activities icon"
            width={120}
            height={120}
            className="mx-auto rounded-md"
          />
        </div>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-white">
            Mais de 1000 atividades prontas para usar
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 text-left md:text-justify">
          <p>
            Material digital com mais de 1000 atividades lúdicas e educativas, criado para estimular o foco, linguagem e comportamento de crianças com estilos únicos de aprendizagem.
          </p>
          <p>
            Acesso imediato em PDF, pronto para imprimir e usar em casa, na escola ou no consultório.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            asChild
            className="shadow-lg hover:shadow-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold animate-pulse-yellow-cta transition-shadow"
          >
            <Link href="#cta">
              ACESSAR MATERIAL AGORA!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
