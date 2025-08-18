
'use client';

import React, {useRef, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Lock, Award, AlertTriangle } from 'lucide-react';

const VSLPlayer = () => {
    const videoId = '686fd145e397e681c4ce4c3b'; // Substitua pelo ID do seu vídeo
    const accountId = 'f304b502-422a-4d15-8f6c-5e42de7baf1b'; // Substitua pelo ID da sua conta
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const videoSrc = `https://scripts.converteai.net/${accountId}/players/${videoId}/v4/embed.html`;

    useEffect(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            const handleLoad = () => {
                try {
                    // This is the original logic from the string.
                    // It's not perfectly safe but we replicate it.
                    if (iframe.src) {
                        iframe.src += (window.location.search || '?') + '&vl=' + encodeURIComponent(window.location.href);
                    }
                } catch (e) {
                    console.error("Failed to update iframe src:", e);
                }
            };
            
            // We attach the event listener directly to the iframe element
            iframe.addEventListener('load', handleLoad);

            // Cleanup function to remove the event listener
            return () => {
                iframe.removeEventListener('load', handleLoad);
            };
        }
    }, [videoSrc]); // The dependency array ensures this effect runs if the src changes.

    return (
        <div style={{ padding: '56.48% 0 0 0', position: 'relative' }} className="rounded-lg overflow-hidden shadow-2xl">
            <iframe
                ref={iframeRef}
                title="vsl-player"
                frameBorder="0"
                allowFullScreen
                src={videoSrc}
                id={`ifr_${videoId}`}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                referrerPolicy="origin"
            ></iframe>
        </div>
    );
};

export default function OfferSection() {
  const benefits = [
    "+1500 Atividades Lúdicas e Adaptadas para Autistas",
    "Acesso Imediato e Vitalício à Plataforma com todo Material",
    "Tranquilidade e Suporte para Você",
    "SUPER BÔNUS 1: Mega Pacote de +1000 Moldes de EVA",
    "SUPER BÔNUS 2: Kit de Medalhas de Reconhecimento",
    "SUPER BÔNUS 3: +10 Jogos Inclusivos e Testados",
    "SUPER BÔNUS 4: Guia de Adaptação de Atividades para autistas",
    "+ 8 SUPER BÔNUS"
  ];

  return (
    <section
      id="oferta-especial"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full filter blur-3xl opacity-50 -z-0"></div>
      <div className="absolute -bottom-20 -right-10 w-72 h-72 md:w-96 md:h-96 bg-accent/10 rounded-full filter blur-3xl opacity-60 -z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-3">
            Transforme o Aprendizado das Crianças com um Só Clique!
          </h2>
        </div>

        <Card className="max-w-3xl mx-auto shadow-2xl overflow-hidden border-2 border-primary/20 bg-card">
          <CardContent className="p-0">
            <div className="p-6 md:p-8 space-y-6">
              
              <div className="text-center">
                <Image
                  src="https://i.imgur.com/83u1gxe.png"
                  alt="Super Oferta Somente Hoje"
                  data-ai-hint="super offer puzzle pieces"
                  width={450}
                  height={150}
                  className="mx-auto"
                  loading="lazy"
                />
              </div>
              
              <ul className="space-y-3">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start text-foreground/80">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center bg-gradient-to-br from-purple-800 to-indigo-900 p-6 rounded-lg border-2 border-yellow-400/80 shadow-inner space-y-4">
                  <p className="text-lg uppercase tracking-wider font-semibold text-yellow-400">OFERTA IRRESISTÍVEL - ACESSO COMPLETO POR:</p>
                  <div className="mb-2">
                    <span className="text-xl text-gray-300 line-through">De R$97,00</span>
                  </div>
                  <div className="my-2 flex items-baseline justify-center gap-1">
                    <span className="text-6xl sm:text-7xl font-extrabold text-yellow-400">R$19,90</span>
                  </div>
                  <div className="text-lg text-white font-semibold">ou 4x de R$5,77</div>
                  <p className="text-sm text-gray-300 font-medium">(Pagamento Único. Acesso IMEDIATO e VITALÍCIO!)</p>
                </div>
              
              <div className="text-center mt-6">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto shadow-xl hover:shadow-2xl bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl py-8 px-12 animate-pulse-yellow-cta transition-all transform hover:scale-105"
                >
                  <Link id="btn-comprar" href="https://pay.cakto.com.br/wms7hjy_447695">
                    COMPRAR KIT COM DESCONTO!
                  </Link>
                </Button>
                <div className="mt-6 flex justify-center items-center gap-4 text-xs text-muted-foreground font-semibold">
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="h-4 w-4 text-green-600" />
                        <span>Compra Segura</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Lock className="h-4 w-4 text-green-600" />
                        <span>Privacidade</span>
                    </div>
                     <div className="flex items-center gap-1.5">
                        <Award className="h-4 w-4 text-green-600" />
                        <span>Qualidade</span>
                    </div>
                </div>
                 <p className="mt-2 text-sm text-muted-foreground">
                  Compra 100% segura e satisfação que transforma.
                </p>
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
        </div>
         <div className="flex justify-center mt-8 md:mt-12">
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
      </div>
    </section>
  );
}

    