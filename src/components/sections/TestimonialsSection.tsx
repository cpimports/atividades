
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlayCircle, ThumbsUp, Heart, Laugh } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import DynamicCounterBanner from '@/components/shared/DynamicCounterBanner';

const hostedVideos = [
  { src: "/videos/DEPOIMENTO-ELIANE.mp4", title: "Depoimento Eliane" },
  { src: "/videos/DEPOIMENTO-THIAGO.mp4", title: "Depoimento Thiago" },
  { src: "/videos/DEPOIMENTO-CAMILA.mp4", title: "Depoimento Camila" },
  { src: "/videos/DEPOIMENTO-SILVANA.mp4", title: "Depoimento Silvana" },
  { src: "/videos/DEPOIMENTO-GABRIELE.mp4", title: "Depoimento Gabriele" },
  { src: "/videos/DEPOIMENTO-MARIA.mp4", title: "Depoimento Maria" },
];

const commentsData = [
  {
    id: 1,
    avatarUrl: 'https://i.imgur.com/nqm8CGq.jpeg',
    avatarFallback: 'CM',
    name: 'Carla Monteiro',
    time: '5h',
    text: 'Sempre perdi horas preparando atividades inclusivas, mas agora tudo já está pronto e organizado. Essa plataforma simplesmente mudou minha rotina em sala de aula e facilitou demais meu planejamento, amei 🥰',
    reactions: { like: 122, love: 15, haha: 2 },
    reply: {
      avatarUrl: 'https://i.imgur.com/sb4rEa0.png',
      name: 'Gêniozinho em Ação',
      time: '4h',
      text: 'Que incrível ler isso Carla! 💙 Nosso propósito é exatamente facilitar a rotina dos professores e tornar o aprendizado mais inclusivo e leve.',
    },
  },
  {
    id: 2,
    avatarUrl: '/images/professora-otimizado.webp',
    avatarFallback: 'VS',
    name: 'Vanessa Santos',
    time: '2h',
    text: 'Sou professora há 12 anos e nunca encontrei um material tão completo e adaptado para crianças autistas! A variedade das atividades lúdicas é incrível, consigo engajar meus alunos de uma forma que antes era muito difícil.',
    reactions: { like: 89, love: 5 },
  },
  {
    id: 3,
    avatarUrl: '/images/terapeuta-otimizado.webp',
    avatarFallback: 'AF',
    name: 'André Ferreira',
    time: '1d',
    text: 'Como terapeuta, sempre procuro materiais que unam didática com acessibilidade. O Gêniozinho em Ação entrega isso com excelência. Os pais dos meus pacientes amaram poder aplicar em casa também.',
    reactions: { like: 256, love: 30, haha: 1 },
    reply: {
      avatarUrl: 'https://i.imgur.com/sb4rEa0.png',
      name: 'Gêniozinho em Ação',
      time: '23h',
      text: 'André, seu feedback é muito importante para nós! Saber que o material está sendo validado por profissionais como você nos dá a certeza de que estamos no caminho certo. Obrigado!',
    },
  },
  {
    id: 4,
    avatarUrl: 'https://i.imgur.com/vwSIeBW.png',
    avatarFallback: 'RT',
    name: 'Raquel Teodoro',
    time: '3d',
    text: 'Sou mãe da Manoela, ela é autista nível 2 e sei o quanto é difícil ver outras crianças avançando enquanto minha filha enfrenta mais obstáculo. O Gêniozinho em Ação trouxe leveza para nossa rotina, fazemos uma atividade por dia e já sentimos diferença. É incrível!',
    reactions: { like: 412, love: 55 },
  },
];


const VideoFacade = ({ src, title }: { src: string; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div 
      className="relative aspect-[9/16] w-full max-w-[280px] mx-auto bg-slate-900/50 rounded-xl overflow-hidden shadow-2xl shadow-sky-400/20 cursor-pointer"
      onClick={!isPlaying ? handlePlay : undefined}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        preload="metadata"
        playsInline
        poster="https://i.imgur.com/2Y5zB8X.png" 
        controls={isPlaying}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
          <PlayCircle className="h-16 w-16 text-white/70 drop-shadow-lg" />
        </div>
      )}
    </div>
  );
};


const FacebookComment = ({ comment }: { comment: typeof commentsData[0] }) => {
  const totalReactions = Object.values(comment.reactions).reduce((a, b) => a + b, 0);

  return (
    <div className="flex space-x-3 w-full">
      <Avatar className="h-10 w-10 flex-shrink-0">
        <AvatarImage src={comment.avatarUrl} alt={comment.name} data-ai-hint="person portrait" className="object-cover"/>
        <AvatarFallback>{comment.avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <div className="bg-gray-700/50 rounded-xl p-3 relative">
          <p className="font-semibold text-white text-sm">{comment.name}</p>
          <p className="text-gray-200 text-sm">{comment.text}</p>
          {totalReactions > 0 && (
            <div className="absolute -bottom-4 right-2 flex items-center bg-gray-800 rounded-full px-2 py-0.5 shadow-md border border-gray-700">
              <ThumbsUp className="h-3 w-3 text-blue-500" fill="currentColor"/>
              <Heart className="h-3 w-3 text-red-500 ml-0.5" fill="currentColor"/>
              <span className="text-xs text-gray-300 ml-1.5 font-medium">{totalReactions}</span>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-3 text-xs text-gray-400 mt-1 px-3">
          <button className="font-semibold hover:underline">Curtir</button>
          <button className="font-semibold hover:underline">Responder</button>
          <span>{comment.time}</span>
        </div>
        
        {comment.reply && (
          <div className="flex space-x-3 mt-3">
            <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src={comment.reply.avatarUrl} alt={comment.reply.name} data-ai-hint="company logo" className="object-cover"/>
                <AvatarFallback>GA</AvatarFallback>
            </Avatar>
             <div className="flex-grow">
              <div className="bg-gray-700/50 rounded-xl p-3">
                <p className="font-semibold text-white text-sm">{comment.reply.name}</p>
                <p className="text-gray-200 text-sm">{comment.reply.text}</p>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-400 mt-1 px-3">
                <button className="font-semibold hover:underline">Curtir</button>
                <button className="font-semibold hover:underline">Responder</button>
                <span>{comment.reply.time}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default function TestimonialsSection() {
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
    <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-br from-indigo-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 filter blur-3xl pointer-events-none">
        <div className="absolute top-[-15%] left-[-20%] w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_70%)] rounded-full animate-cloud-drift-slow"></div>
        <div className="absolute top-[10%] right-[-25%] w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_75%)] rounded-full animate-cloud-drift-medium opacity-80"></div>
        <div className="absolute bottom-[-10%] left-[5%] w-[450px] h-[250px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_65%)] rounded-full animate-cloud-drift-slow opacity-90"></div>
        <div className="absolute bottom-[5%] right-[0%] w-[300px] h-[200px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_70%)] rounded-full animate-cloud-drift-medium"></div>
      </div>
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
        
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold text-white mb-4 drop-shadow-md">
            Veja o que professores e pais estão dizendo sobre o Gêniozinho em Ação
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubra como o Gêniozinho em Ação está facilitando o trabalho dos professores e acelerando o aprendizado das crianças autistas.
          </p>
           <div className="mt-8">
            <DynamicCounterBanner />
          </div>
        </div>
        
        <div className="mb-16">
          <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
          >
            <CarouselContent>
              {hostedVideos.map((video) => (
                <CarouselItem key={video.src} className="sm:basis-1/2 md:basis-1/3">
                  <div className="p-1">
                    <VideoFacade src={video.src} title={video.title} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Slide anterior" className="text-white bg-primary/50 hover:bg-primary/70 border-0 disabled:bg-slate-700/30 disabled:text-slate-400" />
            <CarouselNext aria-label="Próximo slide" className="text-white bg-primary/50 hover:bg-primary/70 border-0 disabled:bg-slate-700/30 disabled:text-slate-400" />
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
        
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white text-center mb-6">Comentários de Clientes Satisfeitos</h3>
            <div className="space-y-6">
              {commentsData.map((comment) => (
                <FacebookComment key={comment.id} comment={comment} />
              ))}
            </div>
            <div className="text-center text-gray-400 mt-8 pt-4 border-t border-slate-700">
              <p className="text-sm font-semibold hover:text-white transition-colors cursor-pointer">
                e mais 3.251 comentários...
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
