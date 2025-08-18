
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';
import { Progress } from '@/components/ui/progress';

export default function OfferSection() {

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
  const progress = useProgress();

  return (
    <section
      id="oferta-especial"
      className="py-16 md:py-24 bg-gradient-to-b from-blue-800 to-gray-900 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto mb-12">
            <div className="shadow-xl bg-card/10 backdrop-blur-md border border-white/10 rounded-lg">
                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center text-center md:text-left gap-6 text-white">
                    <div className="flex-shrink-0">
                        <Image
                            src="https://i.imgur.com/lbSS21Q.png"
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
                        <p className="text-white/80 mb-4">Aproveite a compra sem risco. Se em até 7 dias você sentir que o kit não é para você, devolvemos seu dinheiro sem perguntas.</p>
                         <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-white/70 font-semibold">
                            <div className="flex items-center gap-1.5">
                                <ShieldCheck className="h-4 w-4 text-green-400" />
                                <span>Compra Segura</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Lock className="h-4 w-4 text-green-400" />
                                <span>Privacidade</span>
                            </div>
                             <div className="flex items-center gap-1.5">
                                <CreditCard className="h-4 w-4 text-green-400" />
                                <span>Qualidade</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-center mb-12">
            <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold text-white">
                Transforme o Aprendizado das Crianças Autistas com um Só Clique!
            </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-b from-blue-900/50 to-gray-900/50 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
          <div className="p-1 md:p-2">
            <div className="text-center pt-6">
                <div className="mb-4">
                  <Image
                    src="https://i.imgur.com/z1brNWZ.png"
                    alt="Ícone de Oferta Especial"
                    data-ai-hint="special offer icon"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white tracking-wider mb-2" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.4)' }}>
                    SUPER OFERTA
                </h2>
                <div className="inline-block bg-red-700 rounded-xl shadow-xl py-2 px-6">
                  <p className="text-2xl md:text-3xl font-bold text-white tracking-wide" style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.4)' }}>
                      SOMENTE HOJE
                  </p>
                </div>
            </div>
            
            <div className="p-6 md:p-8 text-white">
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Image src="https://i.imgur.com/ak914uz.png" alt="Check icon" data-ai-hint="checkmark icon" width={24} height={24} className="mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-base md:text-lg">{benefit}</span>
                  </li>
                ))}
                 <li className="flex items-start justify-center font-bold text-yellow-300">
                    <span className="text-base md:text-lg">{lastBenefit}</span>
                  </li>
              </ul>

              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-inner space-y-4 my-8">
                  <p className="text-lg uppercase tracking-wider font-semibold text-yellow-300">OFERTA IRRESISTÍVEL - ACESSO COMPLETO POR:</p>
                  <div className="mb-2">
                    <span className="text-xl text-gray-200/80 line-through">De R$97,00</span>
                  </div>
                  <div className="my-2 flex items-baseline justify-center gap-2">
                    <span className="text-6xl sm:text-7xl font-extrabold text-yellow-300" style={{ textShadow: '0 3px 8px rgba(255, 215, 0, 0.4)' }}>R$19,90</span>
                  </div>
                  <div className="text-lg text-white font-semibold">ou 4x de R$5,77</div>
                  <p className="text-sm text-gray-100/80 font-medium">(Pagamento Único. Acesso IMEDIATO e VITALÍCIO!)</p>
              </div>
              
              <div className="text-center mt-8">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto shadow-xl hover:shadow-2xl bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-xl py-8 px-12 rounded-lg transition-all transform hover:scale-105"
                >
                  <Link id="btn-comprar" href="https://pay.cakto.com.br/wms7hjy_447695">
                    COMPRAR KIT COM DESCONTO!
                  </Link>
                </Button>
                
                <div className="mt-8 text-center text-xs text-white/70">
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

        <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="font-bold text-white mb-2">Atenção! Essa oferta exclusiva vai acabar em instantes. Não perca a chance de garantir tudo agora!</p>
          <div className="bg-yellow-100/70 border-2 border-yellow-300 rounded-lg p-4 shadow-md">
            <p className="font-semibold text-yellow-900 mb-2">
                ⏳ {progress}% dos kits promocionais já foram vendidos!
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
