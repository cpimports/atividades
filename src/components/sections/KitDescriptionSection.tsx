
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
  { src: "https://i.imgur.com/Yn2TFGz.jpeg", alt: "Criança sorrindo enquanto brinca com blocos de montar coloridos", hint: "criança blocos" },
  { src: "https://placehold.co/400x300.png", alt: "Exemplo de jogo educativo", hint: "jogo educativo" },
  { src: "https://placehold.co/400x300.png", alt: "Exemplo de criança aprendendo", hint: "crianca aprendendo" },
  { src: "https://placehold.co/400x300.png", alt: "Exemplo de material didático", hint: "material didatico" },
  { src: "https://placehold.co/400x300.png", alt: "Exemplo de desenho infantil", hint: "desenho infantil" },
  { src: "https://placehold.co/400x300.png", alt: "Exemplo de quebra-cabeça", hint: "quebra cabeca" },
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
          <div className="mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto"
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="p-1">
                      <Card className="overflow-hidden shadow-lg">
                        <CardContent className="flex aspect-[4/3] items-center justify-center p-0 relative">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            data-ai-hint={image.hint}
                            fill
                            className="object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-white bg-black/40 hover:bg-black/60 -left-4 md:-left-8 disabled:bg-black/20 border-primary/50 hover:border-primary" />
              <CarouselNext className="text-white bg-black/40 hover:bg-black/60 -right-4 md:-right-8 disabled:bg-black/20 border-primary/50 hover:border-primary" />
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
