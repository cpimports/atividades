
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertTriangle } from 'lucide-react';

export default function OfferSection() {
  const items = [
    { icon: <CheckCircle className="h-6 w-6 text-[#50C878] mr-3 flex-shrink-0" />, text: "Kit completo de atividades" },
    { icon: <CheckCircle className="h-6 w-6 text-[#50C878] mr-3 flex-shrink-0" />, text: "Acesso Imediato e Vitalício ao Material em PDF" },
    { icon: <CheckCircle className="h-6 w-6 text-[#50C878] mr-3 flex-shrink-0" />, text: "Tranquilidade e Suporte para Você" },
  ];

  const bonusItems = [
    "SUPER BÔNUS 1: Pacote Extra de Atividades Criativas (+50 páginas!)",
    "SUPER BÔNUS 2: Guia Prático 'Despertando o Gêniozinho'",
    "SUPER BÔNUS 3: Acesso Prioritário a Futuros Lançamentos com Desconto",
    "SUPER BÔNUS 4: Comunidade VIP de Suporte e Troca de Experiências"
  ];

  return (
    <section
      id="oferta-especial"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full filter blur-3xl opacity-50 -z-0"></div>
      <div className="absolute -bottom-20 -right-10 w-72 h-72 md:w-96 md:h-96 bg-accent/10 rounded-full filter blur-3xl opacity-60 -z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex justify-center mb-8 md:mb-12">
            <Card className="shadow-xl bg-card/80 backdrop-blur-md max-w-lg w-full">
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center text-center md:text-left gap-6">
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
                </CardContent>
            </Card>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-3">
            Transforme o Aprendizado das Crianças com um Só Clique!
          </h2>
        </div>

        <Card className="max-w-3xl mx-auto shadow-2xl overflow-hidden border-2 border-primary/30 bg-card">
          <CardContent className="p-0">
            <div className="p-6 md:p-8 space-y-3 bg-gradient-to-br from-indigo-800 to-slate-900 shadow-lg">
              
              <h3 className="font-headline text-3xl sm:text-4xl font-bold text-yellow-400 text-center mb-4 uppercase [filter:drop-shadow(0_0_1px_white)_drop-shadow(0_0_5px_theme(colors.yellow.400))]">
                OFERTA ESPECIAL POR TEMPO LIMITADO!
              </h3>
              
              <div className="space-y-3">
                <ul className="divide-y divide-white/30">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start text-white pt-2 first:pt-0">
                      {React.cloneElement(item.icon, { className: "h-6 w-6 text-[#50C878] mr-3 flex-shrink-0"})}
                      <div>
                        <span className="font-semibold text-sm text-white">{item.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="border-b border-white/30 !my-3"></div>

                <ul className="divide-y divide-white/30">
                    {bonusItems.map((bonus, index) => (
                      <li key={index} className="flex items-start text-white pt-2 first:pt-0">
                        <CheckCircle className="h-6 w-6 text-[#50C878] mr-3 flex-shrink-0" />
                        <span className="font-medium text-sm text-white">{bonus}</span>
                      </li>
                    ))}
                </ul>
              </div>

                <div className="text-center bg-black/20 p-6 rounded-lg border border-yellow-400/50">
                  <p className="text-sm uppercase tracking-wider mb-2 font-semibold text-yellow-400">OFERTA IRRESISTÍVEL - ACESSO COMPLETO POR:</p>
                  <div className="mb-2">
                    <span className="text-lg text-gray-300 line-through">De R$ 97,00</span>
                    <span className="ml-2 inline-block px-2 py-0.5 bg-yellow-400 text-black text-xs font-bold rounded">ECONOMIZE 79%!</span>
                  </div>
                  <div className="my-2 flex items-center justify-center">
                    <span className="text-5xl font-semibold text-yellow-400 mr-1">R$</span>
                    <span className="text-6xl sm:text-7xl font-extrabold text-yellow-400">19,90</span>
                  </div>
                  <div className="text-lg text-white font-semibold mb-2">ou 4x de R$ 5,77</div>
                  <p className="text-sm text-gray-300 font-medium">(Pagamento Único. Acesso IMEDIATO e VITALÍCIO!)</p>
                </div>
              
              <div className="text-center mt-10">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto shadow-xl hover:shadow-2xl bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-4 px-10 animate-pulse-yellow-cta transition-all transform hover:scale-105"
                >
                  <Link id="btn-comprar" href="https://pay.cakto.com.br/wms7hjy_447695">
                    COMPRAR KIT COM DESCONTO!
                  </Link>
                </Button>
                <p className="mt-6 text-sm text-gray-300 font-medium">
                  Compra 100% segura e satisfação que transforma.
                </p>
                <div className="mt-4 flex justify-center">
                  <Image
                    src="https://i.imgur.com/xCuyx6F.png"
                    alt="Métodos de pagamento aceitos"
                    data-ai-hint="payment methods"
                    width={250}
                    height={25}
                    className="object-contain"
                    loading="lazy"
                    sizes="250px"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-3xl mx-auto mt-8 text-center">
           <div className="bg-destructive/80 border-l-4 border-red-700 text-destructive-foreground p-4 rounded-md shadow-lg mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-7 w-7 text-yellow-300" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-white">ATENÇÃO: CONDIÇÃO EXCLUSIVA E LIMITADA!</h3>
                    <div className="mt-2">
                      <p className="text-sm font-semibold text-yellow-100/90">
                         ESSA É A SUA ÚLTIMA CHANCE! DESCONTO APLICADO SOMENTE PARA AS PRIMEIRAS 50 PESSOAS!
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          
           <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto shadow-xl hover:shadow-2xl bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-4 px-10 animate-pulse-yellow-cta transition-all transform hover:scale-105"
            >
              <Link href="https://pay.cakto.com.br/wms7hjy_447695">
                COMPRAR COM DESCONTO
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
