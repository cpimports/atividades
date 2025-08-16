
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const deliverables = [
  {
    icon: <Image src="https://i.imgur.com/YvI4vpP.jpeg" alt="Pacote de atividades" data-ai-hint="activity bundle" width={64} height={64} loading="lazy"/>,
    title: 'Mais de 1.500 Atividades Adaptadas para Crianças Autistas',
    description: 'Acervo completo de atividades para estimular habilidades cognitivas, motoras e comportamentais, pronto para uso no dia a dia.',
    titleClassName: 'font-headline text-2xl text-primary', 
  },
  {
    icon: <Image src="https://i.imgur.com/JNBiwQN.jpeg" alt="Atividades adaptadas para autismo" data-ai-hint="playful adapted activities" width={64} height={64} loading="lazy" />,
    title: 'Atividades Lúdicas e Adaptadas',
    description: 'Exercícios de fácil compreensão, com estímulos visuais e linguagem simples para promover mais engajamento.',
    titleClassName: 'font-headline text-2xl text-primary',
  },
  {
    icon: <Image src="https://i.imgur.com/CgFJ1gS.png" alt="PDF Organizado" data-ai-hint="organized pdf" width={64} height={64} loading="lazy" />,
    title: 'Acesso Vitalício e Organizado',
    description: 'Material digital pronto para imprimir, com acesso vitalício e organização por categorias.',
    titleClassName: 'font-headline text-2xl text-primary',
  },
  {
    icon: <Image src="https://i.imgur.com/Lwg6HKn.png" alt="Comunidade de professores" data-ai-hint="teachers community" width={64} height={64} loading="lazy"/>,
    title: 'Comunidade Exclusiva de Professores',
    description: 'Participe de um grupo fechado para trocar experiências e compartilhar atividades adaptadas.',
    titleClassName: 'font-headline text-2xl text-primary',
  },
];

const bonusImages = [
    { src: 'https://i.imgur.com/kAN1TAq.png', alt: 'Bônus 1', hint: 'bonus activity worksheet' },
    { src: 'https://i.imgur.com/NQGTwqs.png', alt: 'Bônus 2', hint: 'educational game' },
    { src: 'https://i.imgur.com/M1r76xK.png', alt: 'Bônus 3', hint: 'coloring page' },
    { src: 'https://i.imgur.com/djV5iNg.png', alt: 'Bônus 4', hint: 'learning chart' },
]

export default function BenefitsSection() {
  return (
    <section id="oque-voce-recebe" className="py-16 md:py-24 relative bg-gradient-to-br from-background to-muted/30">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/light-paper-fibers.png')] opacity-[0.03] mix-blend-overlay pointer-events-none -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            O Que Você Recebe ao Adquirir o Kit?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Atividades especialmente adaptadas para crianças com autismo (TEA), focadas em estimular a atenção e promover o desenvolvimento cognitivo de forma lúdica e inclusiva.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliverables.map((item, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm flex flex-col">
              <CardHeader className="p-0">
                 <div className="aspect-video relative">
                    <Image
                      src={(item.icon as React.ReactElement).props.src}
                      alt={(item.icon as React.ReactElement).props.alt}
                      data-ai-hint={(item.icon as React.ReactElement).props['data-ai-hint']}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                 <CardTitle className={'font-headline text-xl text-primary mt-4 mb-2 flex-grow'}>{item.title}</CardTitle>
                <p className="text-foreground/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
           <div className="flex items-center justify-center text-center">
            <span className="flex-1 border-t-2 border-dashed border-foreground/20"></span>
            <p className="text-lg text-foreground/80 font-semibold italic animate-pulse px-4">
              E ainda tem mais...
            </p>
            <span className="flex-1 border-t-2 border-dashed border-foreground/20"></span>
          </div>
        </div>

        <div className="text-center mt-8">
          <h3 className="font-headline text-3xl sm:text-4xl font-semibold text-yellow-500 drop-shadow-md">
            + BÔNUS EXCLUSIVOS
          </h3>
          <p className="mt-3 text-lg text-foreground/80 max-w-2xl mx-auto font-semibold">
            Além de todo o material citado acima, Você ganhará gratuitamente 12 Bônus Exclusivos.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bonusImages.map((image, index) => (
                <div key={index} className="w-full">
                    <div className="relative aspect-[1080/1350] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-sm mx-auto md:max-w-none">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            data-ai-hint={image.hint}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 512px"
                            loading="lazy"
                        />
                    </div>
                </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            size="lg" 
            asChild 
            className="shadow-lg hover:shadow-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold animate-pulse-yellow-cta transition-shadow"
          >
            <Link href="#oferta-especial">
              EU QUERO AS ATIVIDADES AGORA + BÔNUS
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
