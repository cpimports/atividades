'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
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

const carouselImages: { src: string; alt: string; hint: string }[] = [
    { src: 'https://i.postimg.cc/jj1K36mm/SciijaD.webp', alt: 'Atividade de Alfabetização', hint: 'alphabet learning' },
    { src: 'https://i.postimg.cc/prbvRW2B/KSkNNlg.webp', alt: 'Atividade de Coordenação Motora', hint: 'motor skills' },
    { src: 'https://i.postimg.cc/fTM4Kgkk/3.webp', alt: 'Atividade de Raciocínio Lógico', hint: 'logic puzzle' },
    { src: 'https://i.postimg.cc/sDmk09Zm/4.webp', alt: 'Atividade de Vogais', hint: 'vowels worksheet' },
    { src: 'https://i.postimg.cc/QdnRj8mW/5.webp', alt: 'Atividade de Formas Geométricas', hint: 'geometric shapes' },
    { src: 'https://i.postimg.cc/x1dwrJv2/6.webp', alt: 'Atividade de Números', hint: 'numbers counting' },
    { src: 'https://i.postimg.cc/MGMgTC33/7.webp', alt: 'Atividade de Cores', hint: 'colors activity' },
    { src: 'https://i.postimg.cc/nzq5KvJv/8.webp', alt: 'Atividade de Recorte e Colagem', hint: 'cut and paste' },
    { src: 'https://i.postimg.cc/XvRmysTj/9.webp', alt: 'Atividade Sensorial', hint: 'sensory play' },
    { src: 'https://i.postimg.cc/zv5QxVz4/10.webp', alt: 'Atividade de Leitura', hint: 'reading practice' },
    { src: 'https://i.postimg.cc/cCmb206C/11.webp', alt: 'Atividade de Escrita', hint: 'writing practice' },
    { src: 'https://i.postimg.cc/CMHXzHJ0/12.webp', alt: 'Atividade de Emoções', hint: 'emotions chart' },
    { src: 'https://i.postimg.cc/GhXfjLZS/13.webp', alt: 'Quebra-cabeça', hint: 'puzzle game' },
];

export default function KitDescriptionSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current && api) {
          hasAnimated.current = true;
          observer.disconnect();

          setTimeout(() => {
            if (api.canScrollNext()) {
              api.scrollNext();
            }
          }, 2000); 
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(carouselRef.current);
      }
      observer.disconnect();
    };
  }, [api]);


  return (
    <section id="kit-description" className="py-16 md:py-24 bg-gradient-to-br from-indigo-800 to-slate-900 relative overflow-hidden">
      {/* Diffuse cloud-like elements */}
      <div className="absolute inset-0 opacity-10 filter blur-3xl pointer-events-none">
        <div className="absolute top-[-15%] left-[-20%] w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_70%)] rounded-full animate-cloud-drift-slow"></div>
        <div className="absolute top-[10%] right-[-25%] w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_75%)] rounded-full animate-cloud-drift-medium opacity-80"></div>
        <div className="absolute bottom-[-10%] left-[5%] w-[450px] h-[250px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_65%)] rounded-full animate-cloud-drift-slow opacity-90"></div>
        <div className="absolute bottom-[5%] right-[0%] w-[300px] h-[200px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_70%)] rounded-full animate-cloud-drift-medium"></div>
      </div>

      {/* Shiny star-like elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[25%] left-[85%] w-1.5 h-1.5 bg-sky-200 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[50%] left-[50%] w-0.5 h-0.5 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[75%] left-[15%] w-1 h-1 bg-sky-300 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[80%] left-[90%] w-1.5 h-1.5 bg-white rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[5%] left-[60%] w-1 h-1 bg-sky-200 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-[40%] left-[5%] w-1.5 h-1.5 bg-white rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute bottom-[10%] left-[70%] w-1 h-1 bg-sky-300 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[15%] left-[5%] w-0.5 h-0.5 bg-sky-100 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-[30%] left-[70%] w-1 h-1 bg-white rounded-full filter blur-[0.8px] animate-twinkle" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-[60%] left-[10%] w-1.5 h-1.5 bg-sky-200 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-[85%] left-[55%] w-0.5 h-0.5 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-[5%] left-[35%] w-1 h-1 bg-sky-300 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-[65%] left-[95%] w-1 h-1 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-0.5 h-0.5 bg-sky-200 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '3.2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="mb-8 inline-block animate-screen-glow">
            <Image
              src="https://i.postimg.cc/66m61KJT/hwMc8SF.webp"
              alt="Crianças estudando felizes"
              data-ai-hint="children studying happy"
              width={250}
              height={250}
              className="mx-auto"
              loading="lazy"
            />
          </div>
          <h2 className="font-merriweather text-2xl sm:text-3xl font-bold text-white mb-8">
            O Kit que estimula o <span className="text-yellow-400">desenvolvimento das crianças autistas</span> e facilita sua rotina em sala de aula
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 text-center">
          <p>
            Mais de 1500 atividades inclusivas e adaptadas para crianças autistas, criadas para estimular o foco, a linguagem, a interação social e o desenvolvimento cognitivo.
          </p>
          <p>
            O material é 100% digital, disponível na nossa plataforma em PDF pronto para imprimir, para você usar imediatamente em casa, na escola ou no consultório.
          </p>
          
          <div ref={carouselRef} className="mt-8 md:mt-12 text-center">
            <div className="inline-block bg-slate-800/30 p-4 rounded-2xl shadow-2xl shadow-sky-400/10">
              <p className="text-center text-md text-gray-200 mt-2 mb-4">
                🧩 Veja Algumas das Atividades Que Estão no Kit
              </p>
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
              >
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index} className="basis-full sm:basis-1/2">
                      <div className="p-1">
                        <Card className="overflow-hidden border-0 shadow-xl bg-transparent">
                          <CardContent className="relative flex items-center justify-center p-0 aspect-[4/5]">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              data-ai-hint={image.hint}
                              fill
                              className="object-cover rounded-lg"
                              sizes="(max-width: 640px) 100vw, 50vw"
                              loading="lazy"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious aria-label="Slide anterior" className="text-white bg-primary/50 hover:bg-primary/70 border-0 disabled:bg-slate-700/30 disabled:text-slate-400" />
                <CarouselNext aria-label="Próximo slide" className="text-white bg-primary/50 hover:bg-primary/70 border-0 disabled:bg-slate-700/30 disabled:text-slate-400" />
              </Carousel>
              {api && count > 0 && (
                <div className="flex justify-center items-center space-x-2 mt-4 py-2">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={cn(
                        "h-2 w-2 rounded-full transition-all duration-150 ease-in-out",
                        current === index ? "bg-white scale-110" : "bg-white/40 hover:bg-white/70"
                      )}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
               <p className="text-center text-md text-gray-300 mt-6 mb-4">
                Essas são apenas algumas das <span className="text-yellow-400 font-bold">mais de 1500 atividades exclusivas</span> que você recebe na Plataforma Gêniozinho em Ação!
              </p>
            </div>
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
