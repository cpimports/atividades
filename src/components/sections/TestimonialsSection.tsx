'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Eye } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  descriptor: string;
  name: string;
  text: string;
  avatarUrl: string;
  avatarFallback: string;
  avatarHint: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    descriptor: 'Mãe',
    name: 'Carla M.',
    text: "Meu filho nunca conseguia se concentrar nas tarefas da escola. Quando começamos a usar o Gêniozinho em Ação, ele se envolveu de verdade! Agora ele até pede pra fazer as atividades. Foi um alívio pra nossa rotina!",
    avatarUrl: 'https://i.imgur.com/iDxyKPn.png',
    avatarFallback: 'CM',
    avatarHint: 'woman portrait',
  },
  {
    id: 2,
    descriptor: 'Professora',
    name: 'Vanessa G. – Professora do 2º ano',
    text: "Uso esse material em sala com meus alunos e tem feito toda a diferença. As atividades são simples de aplicar e muito eficientes pra manter a turma engajada. Indico pra todo educador!",
    avatarUrl: 'https://i.imgur.com/jZ6Cs3g.jpeg',
    avatarFallback: 'VG',
    avatarHint: 'teacher portrait',
  },
  {
    id: 3,
    descriptor: 'Terapeuta',
    name: 'André P. – Psicopedagogo',
    text: "Como terapeuta, sempre procuro materiais que unam didática com acessibilidade. O Gêniozinho em Ação entrega isso com excelência. Os pais dos meus pacientes amaram poder aplicar em casa também.",
    avatarUrl: 'https://i.imgur.com/zUeo9qC.jpeg',
    avatarFallback: 'AP',
    avatarHint: 'therapist portrait',
  },
  {
    id: 4,
    descriptor: 'Pai',
    name: 'Rafael T.',
    text: "Eu me sentia perdido tentando ajudar minha filha. Esse kit foi um divisor de águas. Agora temos momentos de aprendizado e conexão que antes pareciam impossíveis.",
    avatarUrl: 'https://i.imgur.com/OcXCdY4.jpeg',
    avatarFallback: 'RT',
    avatarHint: 'man portrait',
  },
];

const youtubeShorts = [
  { id: "5Jppp049f8c", title: "Depoimento em Vídeo 1" },
  { id: "Z1Y3fXl7gvU", title: "Depoimento em Vídeo 2" },
  { id: "o_jx6412bbY", title: "Depoimento em Vídeo 3" },
  { id: "YCKgms_HOzA", title: "Depoimento em Vídeo 4" },
  { id: "r5wiEzRQDUI", title: "Depoimento em Vídeo 5" },
  { id: "4fLlRxscoOI", title: "Depoimento em Vídeo 6" },
];


export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [liveViewers, setLiveViewers] = useState<number | null>(null);

  useEffect(() => {
    const getRandomViewers = () => Math.floor(Math.random() * (50 - 20 + 1)) + 20;
    setLiveViewers(getRandomViewers());

    const interval = setInterval(() => {
      setLiveViewers(getRandomViewers());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      if (api.isDragging()) return;
      setCurrent(api.selectedScrollSnap());
    };

    const onPointerDown = () => {
      setIsDragging(true);
    };

    const onPointerUp = () => {
      setIsDragging(false);
    };

    api.on("select", onSelect);
    api.on("pointerDown", onPointerDown);
    api.on("pointerUp", onPointerUp);

    return () => {
      api.off("select", onSelect);
      api.off("pointerDown", onPointerDown);
      api.off("pointerUp", onPointerUp);
    };
  }, [api]);

  const handleDotClick = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);
  
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-br from-indigo-800 to-slate-900 relative overflow-hidden">
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
        {/* Additional stars */}
        <div className="absolute top-[15%] left-[5%] w-0.5 h-0.5 bg-sky-100 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-[30%] left-[70%] w-1 h-1 bg-white rounded-full filter blur-[0.8px] animate-twinkle" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-[60%] left-[10%] w-1.5 h-1.5 bg-sky-200 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-[85%] left-[55%] w-0.5 h-0.5 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-[5%] left-[35%] w-1 h-1 bg-sky-300 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-[65%] left-[95%] w-1 h-1 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-0.5 h-0.5 bg-sky-200 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '3.2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-white mb-4 drop-shadow-md">
            O QUE OS PAIS E PROFESSORES ESTÃO FALANDO!
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Veja o que pais, professores e terapeutas estão dizendo sobre como o Kit Gêniozinho em Ação transformou suas rotinas e o aprendizado das crianças.
          </p>
        </div>
        
        {liveViewers !== null && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center space-x-2 bg-white/10 text-white py-2 px-4 rounded-full shadow-lg backdrop-blur-sm">
              <Eye className="h-5 w-5 text-sky-300 animate-pulse" />
              <span className="font-semibold w-8 text-center">{liveViewers}</span>
              <span className="text-gray-300 text-sm">pessoas assistindo agora</span>
            </div>
          </div>
        )}

        <div className="mb-16">
           <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {youtubeShorts.map((video) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <div className="aspect-[9/16] w-full max-w-[280px] mx-auto bg-slate-900/50 rounded-xl overflow-hidden shadow-2xl shadow-sky-400/20">
                        <iframe
                          className={cn(
                            "w-full h-full",
                            isDragging && "pointer-events-none"
                          )}
                          src={`https://www.youtube.com/embed/${video.id}?controls=0&rel=0`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-0.5rem] sm:-left-12 z-10 text-white bg-primary/50 hover:bg-primary/70 border-0 disabled:bg-slate-700/30 disabled:text-slate-400" />
            <CarouselNext className="right-[-0.5rem] sm:-right-12 z-10 text-white bg-primary/50 hover:bg-primary/70 border-0 disabled:bg-slate-700/30 disabled:text-slate-400" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-card text-card-foreground flex flex-col overflow-hidden shadow-2xl shadow-sky-500/50"
            >
              <CardHeader className="p-6 flex flex-row items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <CardTitle className="font-headline text-xl text-primary mb-1">{testimonial.descriptor}</CardTitle>
                  <p className="text-md font-semibold text-foreground/90">{testimonial.name}</p>
                   <div className="flex items-center mt-2">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-left flex-grow">
                <p className="text-foreground/80 italic leading-relaxed">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
