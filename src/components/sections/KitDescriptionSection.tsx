
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

const carouselImages = [
  {
    src: "https://i.imgur.com/Yn2TFGz.jpeg",
    alt: "Exemplo de Atividade do Kit Gêniozinho em Ação - Foco Vertical",
    hint: "activity sheet",
  },
  {
    src: "https://i.imgur.com/vV6dZzL.jpeg",
    alt: "Exemplo de Atividade do Kit Gêniozinho em Ação 2 - Foco Vertical",
    hint: "activity sheet kids",
  },
  {
    src: "https://i.imgur.com/T61nB4k.jpeg",
    alt: "Exemplo de Atividade do Kit Gêniozinho em Ação 3 - Foco Vertical",
    hint: "atividade infantil",
  },
  {
    src: "https://i.imgur.com/WXvX9kt.jpeg",
    alt: "Exemplo de Atividade do Kit Gêniozinho em Ação 4 - Foco Vertical",
    hint: "kids drawing",
  },
  {
    src: "https://i.imgur.com/PJJnvy0.png",
    alt: "Exemplo de Atividade do Kit Gêniozinho em Ação 5 - Foco Vertical",
    hint: "kids activity",
  },
  {
    src: "https://i.imgur.com/KBRpWOO.png",
    alt: "Exemplo de Atividade do Kit Gêniozinho em Ação 6 - Foco Vertical",
    hint: "coloring page",
  },
];

export default function KitDescriptionSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

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
          
          <div className="mt-8 md:mt-12 text-center">
            <Carousel
              setApi={setApi}
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
                            sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 320px"
                            priority={index < 2}
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
            {api && (
              <div className="flex justify-center items-center space-x-2 mt-4 py-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={cn(
                      "h-2.5 w-2.5 rounded-full transition-all duration-150 ease-in-out",
                      current === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                    )}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
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
