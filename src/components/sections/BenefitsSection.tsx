
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const deliverables = [
  {
    icon: <Image src="https://i.imgur.com/qWFe9DL.png" alt="Pacote de atividades" data-ai-hint="documents educational" width={56} height={56} />,
    title: 'Pacote completo com mais de 1000 atividades educativas',
    description: 'Receba um acervo variado de atividades pensadas para estimular diferentes habilidades cognitivas e comportamentais, organizadas para facilitar a aplicação no dia a dia',
    titleClassName: 'font-headline text-2xl text-primary', 
  },
  {
    icon: <Image src="https://i.imgur.com/JffYX0z.png" alt="Atividades adaptadas" data-ai-hint="focus schedule" width={64} height={64} />,
    title: 'Atividades adaptadas para crianças com dificuldades de atenção',
    description: 'Cada exercício foi elaborado com linguagem simples, estímulos visuais e estrutura que respeita o tempo e o ritmo de cada criança, garantindo mais engajamento e menos frustração',
    titleClassName: 'font-headline text-2xl text-primary',
  },
  {
    icon: <Image src="https://i.imgur.com/QE7BUe3.png" alt="Material lúdico e interativo pronto para imprimir" data-ai-hint="brain puzzle" width={56} height={56} />,
    title: 'Material lúdico e interativo pronto para imprimir',
    description: 'Tudo foi criado para transformar o aprendizado em diversão! São jogos, desafios e exercícios que encantam e educam ao mesmo tempo — é só imprimir e usar',
    titleClassName: 'font-headline text-2xl text-primary',
  },
  {
    icon: <Image src="https://i.imgur.com/nCVoPsJ.png" alt="Ícone de PDF representando acesso digital" data-ai-hint="documents files" width={56} height={56} />,
    title: 'Acesso em PDF com organização por temas',
    description: 'Você poderá acessar o material completo em PDF, com todas as atividades separadas por temas como linguagem, cores, números, formas e muito mais. Fácil de localizar e aplicar',
    titleClassName: 'font-headline text-2xl text-primary',
  },
];

const currentExclusiveBonuses = [
  { emoji: "🖌️", text: "Atividades de Colorir" },
  { emoji: "🔺", text: "Atividades de Formas Geométricas" },
  { emoji: "✏️", text: "Atividades de Complete as Palavras" },
  { emoji: "🔊", text: "Atividades de Consciência Fonológica" },
  { emoji: "🍎", text: "Atividades de Alimentação Saudável" },
  { emoji: "🔢", text: "Atividades de Números" },
  { emoji: "🎨", text: "Atividades de Cores" },
  { emoji: "🔠", text: "Atividades de Letras" },
  { emoji: "📝", text: "Atividades de Sílabas" },
  { emoji: "👨‍👩‍👧‍👦", text: "Acesso à Comunidade Exclusiva de Pais e Professores" },
  { emoji: "📅", text: "Novas Atividades Publicadas Todos os Dias" },
  { emoji: "🚀", text: "Acesso Imediato e Vitalício" },
];


export default function BenefitsSection() {
  const [timeLeft, setTimeLeft] = useState<{ days: string; hours: string; minutes: string; seconds: string } | null>(null);
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  useEffect(() => {
    setTargetDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000)); // 24 hours from now
  }, []);

  useEffect(() => {
    if (!targetDate) return;

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let newTimeLeft = { days: '00', hours: '00', minutes: '00', seconds: '00' };

      if (difference > 0) {
        newTimeLeft = {
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
          hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
        };
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="oque-voce-recebe" className="py-16 md:py-24 relative overflow-hidden">
      <Image
        src="https://i.imgur.com/EqKEu7v.png"
        alt="Fundo com elementos educativos e lúdicos para crianças"
        data-ai-hint="education kids background"
        fill
        className="object-cover -z-20"
        quality={80}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            O Que Você Recebe ao Adquirir o Kit?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Um pacote completo para transformar o aprendizado em uma aventura diária, repleta de descobertas e desenvolvimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm flex flex-col">
              <CardHeader className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                  {item.icon}
                </div>
                <CardTitle className={item.titleClassName || 'font-headline text-xl text-primary'}>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          {timeLeft && (
            <div className="text-center mb-8">
              <p className="text-xl text-foreground/80 mb-3 font-semibold">Esta oferta exclusiva termina em:</p>
              <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4">
                <div className="bg-card/80 p-3 sm:p-4 rounded-lg shadow-lg w-20 sm:w-24">
                  <span className="block text-3xl sm:text-4xl font-bold text-primary">{timeLeft.days}</span>
                  <span className="block text-xs sm:text-sm text-primary/90">Dias</span>
                </div>
                <div className="bg-card/80 p-3 sm:p-4 rounded-lg shadow-lg w-20 sm:w-24">
                  <span className="block text-3xl sm:text-4xl font-bold text-primary">{timeLeft.hours}</span>
                  <span className="block text-xs sm:text-sm text-primary/90">Horas</span>
                </div>
                <div className="bg-card/80 p-3 sm:p-4 rounded-lg shadow-lg w-20 sm:w-24">
                  <span className="block text-3xl sm:text-4xl font-bold text-primary">{timeLeft.minutes}</span>
                  <span className="block text-xs sm:text-sm text-primary/90">Minutos</span>
                </div>
                <div className="bg-card/80 p-3 sm:p-4 rounded-lg shadow-lg w-20 sm:w-24">
                  <span className="block text-3xl sm:text-4xl font-bold text-primary">{timeLeft.seconds}</span>
                  <span className="block text-xs sm:text-sm text-primary/90">Segundos</span>
                </div>
              </div>
            </div>
          )}

          {/* Image removed from here */}
          <h3 className="font-headline text-3xl sm:text-4xl font-semibold text-yellow-500 drop-shadow-md">
            + BÔNUS EXCLUSIVOS
          </h3>
          <p className="mt-3 text-lg text-foreground/80 max-w-2xl mx-auto font-semibold">
            Além de todo o material citado acima, Você ganhará gratuitamente 12 Bônus Exclusivos.
          </p>
          
          <Card className="mt-12 bg-primary/5 border-2 border-primary/20 shadow-xl p-6 md:p-8 rounded-lg backdrop-blur-md">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="font-semibold tracking-tight font-headline text-2xl sm:text-3xl text-primary text-center">
                {/* Content removed as requested */}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-foreground/90">
                {currentExclusiveBonuses.map((bonus, index) => (
                  <li key={index} className="flex items-start space-x-3 bg-background/50 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                    <span className="text-2xl mt-px">{bonus.emoji}</span>
                    <span className="font-medium">{bonus.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            size="lg" 
            asChild 
            className="shadow-lg hover:shadow-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold animate-pulse-yellow-cta transition-shadow"
          >
            <Link href="#cta">
              EU QUERO AS ATIVIDADES AGORA + BÔNUS
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
