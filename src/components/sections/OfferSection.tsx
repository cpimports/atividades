'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';
import { Progress } from '@/components/ui/progress';

interface OfferSectionProps {
  price?: string;
  installmentText?: string;
  checkoutUrl?: string;
}

export default function OfferSection({ 
  price = "19,90", 
  installmentText = "ou 4x de R$5,77",
  checkoutUrl = "https://pay.cakto.com.br/3bbibtq"
}: OfferSectionProps) {

  const benefits = [
    "+1500 Atividades Lúdicas e Adaptadas para Autistas",
    "Acesso Imediato e Vitalício à Plataforma com todo Material",
    "Tranquilidade e Suporte para Você",
    "SUPER BÔNUS 1: Mega Pacote de +1000 Moldes de EVA",
    "SUPER BÔNUS 2: Kit de Medalhas de Reconhecimento",
    "SUPER BÔNUS 3: +10 Jogos Inclusivos e Testados",
    "SUPER BÔNUS 4: Guia de Adaptação de Atividades para Autistas"
  ];

  const lastBenefit = "+ 8 SUPER BÔNUS";
  const progressRef = useRef<HTMLDivElement>(null);
  const progress = useProgress(progressRef);

  return (
    <section
      id="oferta-especial"
      className="py-16 md:py-24 bg-white relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto mb-12">
            <div className="shadow-xl bg-card/10 backdrop-blur-md border border-gray-200 rounded-lg">
                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center text-center md:text-left gap-6 text-gray-800">
                    <div className="flex-shrink-0">
                        <Image
                            src="https://i.postimg.cc/mr17t4xn/lbSS21Q.webp"
                            alt="Selo de Garantia de 7 dias"
                            data-ai-hint="gold shield guarantee"
                            width={150}
                            height={150}
                            className="mx-auto"
                            loading="lazy"
                            sizes="150px"
                        />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-merriweather text-2xl font-bold text-yellow-400 drop-shadow-md mb-2">Sua Satisfação Garantida ou Seu Dinheiro de Volta!</h3>
                        <p className="text-gray-600 mb-4">Aproveite a compra sem risco. Se em até 7 dias você sentir que o kit não é para você, devolvemos seu dinheiro sem perguntas.</p>
                         <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-gray-500 font-semibold">
                            <div className="flex items-center gap-1.5">
                                <ShieldCheck className="h-4 w-4 text-green-600" />
                                <span>Compra Segura</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Lock className="h-4 w-4 text-green-600" />
                                <span>Privacidade</span>
                            </div>
                             <div className="flex items-center gap-1.5">
                                <CreditCard className="h-4 w-4 text-green-600" />
                                <span>Qualidade</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold text-primary">
            Transforme o Aprendizado das Crianças Autistas com um Só Clique!
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-blue-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-900 relative">
          
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <span className="absolute top-[10%] left-[5%] text-4xl -rotate-12">🧩</span>
            <span className="absolute bottom-[5%] right-[8%] text-6xl rotate-45">🧩</span>
            <span className="absolute top-[15%] right-[10%] text-5xl rotate-6">🧩</span>
            <span className="absolute bottom-[20%] left-[12%] text-3xl -rotate-45">🧩</span>
            <span className="absolute top-[50%] left-[2%] text-6xl rotate-20">🧩</span>
            <span className="absolute top-[40%] right-[5%] text-4xl -rotate-12">🧩</span>
            <span className="absolute bottom-[10%] left-[25%] text-5xl rotate-12">🧩</span>
            <span className="absolute top-[80%] right-[15%] text-3xl -rotate-20">🧩</span>
          </div>

          <div className="p-1 md:p-2 relative z-10">
            <div className="text-center pt-8">
                <Image 
                    src="https://i.postimg.cc/y6j36xgd/gihdLU5.webp"
                    alt="Kit Gêniozinho em Ação"
                    data-ai-hint="product bundle mockup"
                    width={150}
                    height={113}
                    className="mx-auto mb-4 relative z-10"
                    loading="lazy"
                />
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase text-white tracking-wider drop-shadow-lg" style={{ textShadow: '0 4px 8px rgba(253, 224, 71, 0.4)' }}>
                    SUPER OFERTA
                </h2>
                <div className="inline-block bg-red-700 rounded-xl shadow-xl py-2 px-6 mt-4">
                  <p className="text-2xl md:text-3xl font-bold text-white tracking-wide" style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.4)' }}>
                      SOMENTE HOJE
                  </p>
                </div>
            </div>
            
            <div className="p-6 md:p-8 text-white">
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Image src="https://i.imgur.com/ak914uz.png" alt="Check icon" data-ai-hint="checkmark icon" width={24} height={24} className="mr-3 mt-0.5 flex-shrink-0" loading="lazy"/>
                    <span className="text-base md:text-lg">{benefit}</span>
                  </li>
                ))}
                 <li className="flex items-start justify-center font-bold text-sky-300">
                    <span className="text-base md:text-lg">{lastBenefit}</span>
                  </li>
              </ul>

              <div className="text-center bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-inner space-y-4 my-8">
                  <p className="text-lg uppercase tracking-wider font-semibold text-white">OFERTA IRRESISTÍVEL - ACESSO COMPLETO POR:</p>
                  <div className="mb-2">
                    <span className="text-xl text-gray-400 line-through">De R$97,00</span>
                  </div>
                  <div className="my-2 flex items-baseline justify-center gap-2">
                    <span className="text-6xl sm:text-7xl font-extrabold text-yellow-400" style={{ textShadow: '0 3px 8px rgba(253, 224, 71, 0.2)' }}>R${price}</span>
                  </div>
                  {installmentText && <div className="text-lg text-gray-200 font-semibold">{installmentText}</div>}
                  <p className="text-sm text-gray-300 font-medium">(Pagamento Único. Acesso IMEDIATO e VITALÍCIO!)</p>
              </div>
              
              <div className="text-center mt-8">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto shadow-xl hover:shadow-2xl bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all transform hover:scale-105 animate-pulse-yellow-cta text-base sm:text-lg md:text-xl py-4 px-6 md:py-6 md:px-10 text-center"
                >
                  <Link id="btn-comprar" href={checkoutUrl}>
                    COMPRAR KIT COM DESCONTO!
                  </Link>
                </Button>
                
                <div className="mt-8 text-center text-xs text-gray-300">
                    <p className='mb-3'>Compra 100% segura e satisfação que transforma. Métodos de pagamento aceitos:</p>
                    <div className="flex justify-center items-center gap-4 text-sm font-semibold">
                        <div className="flex items-center gap-1.5">
                            <ShieldCheck className="h-5 w-5 text-green-400" />
                            <span>Compra Segura</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Lock className="h-5 w-5 text-green-400" />
                            <span>Privacidade</span>
                        </div>
                         <div className="flex items-center gap-1.5">
                            <CreditCard className="h-5 w-5 text-green-400" />
                            <span>Pagamento</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={progressRef} className="mt-16 max-w-2xl mx-auto text-center">
            <p className="font-bold text-gray-800 mb-2">Atenção! Essa oferta exclusiva vai acabar em instantes. Não perca a chance de garantir tudo agora!</p>
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

      </div>
    </section>
  );
}
