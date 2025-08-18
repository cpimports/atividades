
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShieldCheck, Lock, CreditCard } from 'lucide-react';

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

  return (
    <section
      id="oferta-especial"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#6A0DAD] to-pink-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-1 md:p-2">
            <div className="bg-gradient-to-br from-purple-800 to-purple-900/80 rounded-t-xl p-6 text-center">
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
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white tracking-wider" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
                    SUPER OFERTA
                </h2>
                <p className="text-2xl md:text-3xl font-bold text-yellow-400 mt-2 tracking-wide" style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.4)' }}>
                    SOMENTE HOJE
                </p>
            </div>
            
            <div className="p-6 md:p-8 text-white">
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-base md:text-lg">{benefit}</span>
                  </li>
                ))}
                 <li className="flex items-start justify-center font-bold text-yellow-400">
                    <span className="text-base md:text-lg">{lastBenefit}</span>
                  </li>
              </ul>

              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-inner space-y-4 my-8">
                  <p className="text-lg uppercase tracking-wider font-semibold text-yellow-400">OFERTA IRRESISTÍVEL - ACESSO COMPLETO POR:</p>
                  <div className="mb-2">
                    <span className="text-xl text-gray-300/80 line-through">De R$97,00</span>
                  </div>
                  <div className="my-2 flex items-baseline justify-center gap-2">
                    <span className="text-6xl sm:text-7xl font-extrabold text-yellow-400" style={{ textShadow: '0 3px 8px rgba(255, 215, 0, 0.4)' }}>R$19,90</span>
                  </div>
                  <div className="text-lg text-white font-semibold">ou 4x de R$5,77</div>
                  <p className="text-sm text-gray-200/80 font-medium">(Pagamento Único. Acesso IMEDIATO e VITALÍCIO!)</p>
              </div>
              
              <div className="text-center mt-8">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto shadow-xl hover:shadow-2xl bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold text-xl py-8 px-12 rounded-lg transition-all transform hover:scale-105"
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

        <div className="max-w-4xl mx-auto mt-12">
            <div className="shadow-xl bg-card/80 backdrop-blur-md border border-primary/20 rounded-lg">
                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center text-center md:text-left gap-6">
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
                        <h3 className="text-2xl font-bold font-headline text-yellow-500 drop-shadow-md mb-2">Sua Satisfação Garantida ou Seu Dinheiro de Volta!</h3>
                        <p className="text-foreground/80 mb-4">Aproveite a compra sem risco. Se em até 7 dias você sentir que o kit não é para você, devolvemos seu dinheiro sem perguntas.</p>
                         <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-muted-foreground font-semibold">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span>Compra Segura</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span>Privacidade</span>
                            </div>
                             <div className="flex items-center gap-1.5">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span>Qualidade</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
