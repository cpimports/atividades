
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, ArrowRight, DollarSign } from 'lucide-react';

export default function OfferSection() {
  const items = [
    { icon: <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />, text: "Kit Completo Gêniozinho em Ação", subtext: "Mais de 1000 atividades educativas e lúdicas para estimular foco, linguagem e comportamento." },
    { icon: <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />, text: "Acesso Imediato e Vitalício ao Material em PDF", subtext: "Receba tudo no seu e-mail assim que confirmar. Imprima quantas vezes quiser!" },
    { icon: <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />, text: "Tranquilidade e Suporte para Você", subtext: "Menos estresse na busca por materiais e mais tempo de qualidade com sua criança." },
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
      {/* Blue decorative elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full filter blur-3xl opacity-50 -z-0"></div>
      <div className="absolute -bottom-20 -right-10 w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full filter blur-3xl opacity-60 -z-0"></div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-3">
            Transforme o Aprendizado das Crianças com um Só Clique!
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Chega de procurar atividades aleatórias que não funcionam. Tenha tudo o que você precisa em um só lugar: organizado, eficaz e pronto para imprimir
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-2xl overflow-hidden border-2 border-primary/30 bg-card">
          <CardContent className="p-0">
            <div className="p-6 md:p-8 space-y-8 bg-primary/60 shadow-lg">
              <h3 className="font-headline text-2xl font-semibold text-white text-center mb-4">O que você garante AGORA com este investimento simbólico:</h3>
              
              <div className="space-y-6">
                <ul className="divide-y divide-border/30 space-y-4">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start text-white pt-4 first:pt-0">
                      {React.cloneElement(item.icon, { className: "h-6 w-6 text-yellow-400 mr-3 flex-shrink-0"})}
                      <div>
                        <span className="font-semibold text-sm text-white">{item.text}</span>
                        {item.subtext && <p className="text-xs text-gray-200 mt-1">{item.subtext}</p>}
                      </div>
                    </li>
                  ))}
                </ul>

                <div>
                  <h4 className="font-headline text-xl font-semibold text-white text-center my-6"> 
                    E ainda tem mais BÔNUS ESPECIAIS:
                  </h4>
                  <ul className="divide-y divide-border/30 space-y-4 mt-6">
                    {bonusItems.map((bonus, index) => (
                      <li key={index} className="flex items-start text-white pt-4 first:pt-0">
                        <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                        <span className="font-medium text-sm text-white">{bonus}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center bg-green-500/10 p-6 rounded-lg border border-green-500/30 mt-6">
                  <p className="text-sm uppercase tracking-wider mb-2 font-semibold text-yellow-400">OFERTA IRRESISTÍVEL - ACESSO COMPLETO POR:</p>
                  <div className="my-2 flex items-center justify-center">
                    <DollarSign className="h-12 w-12 text-yellow-400 mr-1" />
                    <span className="text-6xl sm:text-7xl font-extrabold text-yellow-400">19,90</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-lg text-gray-300 line-through">De R$ 97,00</span>
                    <span className="ml-2 inline-block px-2 py-0.5 bg-yellow-400 text-black text-xs font-bold rounded">ECONOMIZE 79%!</span>
                  </div>
                  <p className="text-sm text-gray-300 font-medium">(Pagamento Único. Acesso IMEDIATO e VITALÍCIO!)</p>
                </div>
              </div>
              
              <div className="bg-destructive/80 border-l-4 border-red-700 text-destructive-foreground p-4 rounded-md mt-8 shadow-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-7 w-7 text-yellow-300" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-white">ATENÇÃO: CONDIÇÃO EXCLUSIVA E LIMITADA!</h3>
                    <div className="mt-2 text-sm text-yellow-100/90">
                      <p>Este valor promocional de <span className="font-extrabold">R$ 19,90</span> e todos os <span className="font-extrabold">SUPER BÔNUS</span> são uma oferta de lançamento. Válido apenas para os <span className="font-extrabold">primeiros 100 aventureiros</span> ou pelas <span className="font-extrabold">próximas 24 HORAS</span>. Não deixe para depois o futuro que você pode construir hoje!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-10">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto shadow-xl hover:shadow-2xl bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-4 px-10 animate-pulse-yellow-cta transition-all transform hover:scale-105"
                >
                  <Link href="#cta">
                    GARANTIR MEU KIT COMPLETO AGORA!
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <p className="mt-4 text-sm text-white/90">Compra 100% segura e satisfação que transforma.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
