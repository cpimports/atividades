
'use client';

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { useProgress } from '@/hooks/useProgress';

const deliverables = [
  {
    icon: <Image src="/images/deliverable-bundle.webp" alt="Pacote de atividades" data-ai-hint="activity bundle" width={64} height={64} loading="lazy"/>,
    title: 'Mais de 1.500 Atividades Adaptadas para Crianças Autistas',
    description: 'Acervo completo de atividades para estimular habilidades cognitivas, motoras e comportamentais, pronto para uso no dia a dia.',
    titleClassName: 'font-headline text-2xl text-primary', 
  },
  {
    icon: <Image src="/images/deliverable-adapted.webp" alt="Atividades adaptadas para autismo" data-ai-hint="playful adapted activities" width={64} height={64} loading="lazy" />,
    title: 'Atividades Lúdicas e Adaptadas',
    description: 'Exercícios de fácil compreensão, com estímulos visuais e linguagem simples para promover mais engajamento.',
    titleClassName: 'font-headline text-2xl text-primary',
  },
  {
    icon: <Image src="/images/deliverable-pdf.webp" alt="PDF Organizado" data-ai-hint="organized pdf" width={64} height={64} loading="lazy" />,
    title: 'Acesso Vitalício e Organizado',
    description: 'Material digital pronto para imprimir, com acesso vitalício e organização por categorias.',
    titleClassName: 'font-headline text-2xl text-primary',
  },
  {
    icon: <Image src="/images/deliverable-community.webp" alt="Comunidade de professores" data-ai-hint="teachers community" width={64} height={64} loading="lazy"/>,
    title: 'Comunidade Exclusiva de Professores',
    description: 'Participe de um grupo fechado para trocar experiências e compartilhar atividades adaptadas.',
    titleClassName: 'font-headline text-2xl text-primary',
  },
];

const bonusImages = [
    { src: '/images/bonus-1.webp', alt: 'Bônus 1', hint: 'bonus activity worksheet' },
    { src: '/images/bonus-2.webp', alt: 'Bônus 2', hint: 'educational game' },
    { src: '/images/bonus-3.webp', alt: 'Bônus 3', hint: 'coloring page' },
    { src: '/images/bonus-4.webp', alt: 'Bônus 4', hint: 'learning chart' },
];

export default function BenefitsSection() {
    const progressRef = useRef<HTMLDivElement>(null);
    const progress = useProgress(progressRef);

  return (
    <section id="oque-voce-recebe" className="py-16 md:py-24 relative bg-gradient-to-br from-background to-muted/30">
      {/* CSS-only subtle texture pattern instead of external texture URL */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none -z-10"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)' }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold text-primary">
            O Que Você Recebe ao Adquirir o Kit?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Atividades especialmente adaptadas para crianças com autismo (TEA), focadas em estimular a atenção e promover o desenvolvimento cognitivo de forma lúdica e inclusiva.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliverables.map((item, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                 <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={(item.icon as React.ReactElement).props.src}
                      alt={(item.icon as React.ReactElement).props.alt}
                      data-ai-hint={(item.icon as React.ReactElement).props['data-ai-hint']}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      loading="lazy"
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
          <h3 className="font-merriweather text-3xl sm:text-4xl font-semibold text-yellow-500 drop-shadow-md">
            + BÔNUS EXCLUSIVOS
          </h3>
          <p className="mt-3 text-lg text-foreground/80 max-w-2xl mx-auto font-semibold">
            Além do material principal, você recebe gratuitamente 12 recursos extras cuidadosamente preparados para tornar suas aulas mais atrativas, dinâmicas e inclusivas.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bonusImages.map((image, index) => (
                <div key={index} className="w-full">
                    <div className="relative aspect-[1080/1350] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-sm mx-auto md:max-w-none">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            data-ai-hint={image.hint}
                            width={512}
                            height={640}
                            className="object-cover w-full h-auto"
                            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 512px"
                            loading="lazy"
                        />
                    </div>
                </div>
            ))}
          </div>

          <div className="my-12 text-center max-w-4xl mx-auto">
              <div className="inline-block animate-pulse-yellow-cta">
                <h4 className="text-2xl md:text-3xl font-extrabold text-yellow-500 uppercase tracking-wide drop-shadow-lg">
                  + 8 Bônus Surpresa
                </h4>
                <div className="mt-2 inline-block bg-red-600 text-white px-4 py-1 rounded-md shadow-lg">
                  <p className="text-base md:text-lg font-bold">
                    LIBERADOS SOMENTE APÓS A COMPRA 🎁🔥
                  </p>
                </div>
              </div>
          </div>
        </div>

        <div ref={progressRef} className="mt-12 max-w-2xl mx-auto text-center">
            <p className="font-bold text-foreground mb-2">Atenção! Essa oferta exclusiva vai acabar em instantes. Não perca a chance de garantir tudo agora!</p>
          <div className="bg-yellow-100/70 border-2 border-yellow-300 rounded-lg p-4 shadow-md">
            <p className="font-semibold text-yellow-900 mb-2">
                ⏳ {Math.floor(progress)}% dos kits promocionais já foram vendidos!
            </p>
            <Progress value={progress} className="w-full h-3 bg-gray-200 [&>div]:bg-yellow-400" />
            <p className="text-sm text-yellow-800 mt-2 font-medium">
                150 kits pelo valor promocional
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
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
