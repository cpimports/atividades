
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const carouselImages = [
  {
    src: "https://i.imgur.com/Yn2TFGz.jpeg",
    alt: "Exemplo de Atividade do Kit",
    hint: "activity sheet",
  },
  {
    src: "https://i.imgur.com/vV6dZzL.jpeg",
    alt: "Exemplo de Atividade do Kit 2",
    hint: "activity sheet kids",
  },
  {
    src: "https://placehold.co/1080x1350.png",
    alt: "Exemplo de Atividade Vertical 3",
    hint: "atividade infantil",
  },
];

export default function KitDescriptionSection() {
  return (
    <section id="kit-description" className="py-16 md:py-24 bg-gradient-to-br from-indigo-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-4">
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
          
          <div className="mt-8 md:mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-xs mx-auto" 
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="p-1">
                      <Card className="overflow-hidden border-slate-600 bg-slate-700/30 shadow-xl">
                        <CardContent className="relative flex items-center justify-center p-0 aspect-[4/5]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            data-ai-hint={image.hint}
                            fill
                            className="object-cover rounded-md"
                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 500px"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white bg-primary/50 hover:bg-primary/70 border-0 disabled:bg-slate-700/30 disabled:text-slate-400" />
              <CarouselNext className="text-white bg-primary/50 hover:bg-primary/70 border-0 disabled:bg-slate-700/30 disabled:text-slate-400" />
            </Carousel>
          </div>

        </div>
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            asChild
            className="shadow-lg hover:shadow-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold animate-pulse-yellow-cta transition-shadow"
          >
            <Link href="#oferta-especial">
              ACESSAR MATERIAL AGORA!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
