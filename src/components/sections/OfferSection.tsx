
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Gift, AlertTriangle, ArrowRight, DollarSign } from 'lucide-react';

export default function OfferSection() {
  const bonusItems = [
    "SUPER BÔNUS 1: Pacote Extra de Atividades Criativas (+50 páginas!)",
    "SUPER BÔNUS 2: Guia Prático 'Despertando o Gêniozinho'",
    "SUPER BÔNUS 3: Acesso Prioritário a Futuros Lançamentos com Desconto",
    "SUPER BÔNUS 4: Comunidade VIP de Suporte e Troca de Experiências"
  ];

  return (
    <section id="oferta-especial" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto shadow-2xl overflow-hidden border-2 border-primary/30 bg-card">
          <div className="p-6 md:p-8 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
            <div className="text-center">
              
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-3">
                Adquira agora seu KIT de Atividades e tenha atividades prontas todos os meses, garanta a praticidade de suas aulas!
              </h2>
              <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
                Imagine ter em mãos as ferramentas certas para despertar o potencial do seu gêniozinho, por um valor que é puro carinho. O <span className="font-semibold text-primary">Kit Gêniozinho em Ação</span> é a solução completa e divertida que você esperava!
              </p>
            </div>
          </div>

          <CardContent className="p-6 md:p-8 space-y-8">
            <div className="text-center bg-green-500/10 p-6 rounded-lg border border-green-500/30">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2 font-semibold text-green-700">OFERTA IRRESISTÍVEL - ACESSO COMPLETO POR:</p>
              <div className="my-2 flex items-center justify-center">
                <DollarSign className="h-12 w-12 text-green-600 mr-1" />
                <span className="text-6xl sm:text-7xl font-extrabold text-green-600">19,90</span>
              </div>
              <div className="mb-2">
                <span className="text-lg text-muted-foreground line-through">De R$ 97,00</span>
                <span className="ml-2 inline-block px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded">ECONOMIZE 79%!</span>
              </div>
              <p className="text-sm text-green-700/90 font-medium">(Pagamento Único. Acesso IMEDIATO e VITALÍCIO!)</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-headline text-2xl font-semibold text-primary text-center mb-4">O que você garante AGORA com este investimento simbólico:</h3>
              <ul className="space-y-3">
                {[
                  { icon: <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />, text: <span className="font-semibold">Kit Completo Gêniozinho em Ação</span>, subtext: "Mais de 1000 atividades educativas e lúdicas para estimular foco, linguagem e comportamento." },
                  { icon: <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />, text: <span className="font-semibold">Acesso Imediato e Vitalício ao Material em PDF</span>, subtext: "Receba tudo no seu e-mail assim que confirmar. Imprima quantas vezes quiser!" },
                  { icon: <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />, text: <span className="font-semibold">Tranquilidade e Suporte para Você</span>, subtext: "Menos estresse na busca por materiais e mais tempo de qualidade com sua criança." },
                ].map((item, index) => (
                  <li key={index} className="flex items-start bg-muted/40 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    {item.icon}
                    <div>
                      <span className="text-foreground text-md">{item.text}</span>
                      {item.subtext && <p className="text-sm text-muted-foreground mt-1">{item.subtext}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg border border-accent/30">
              <h3 className="font-headline text-2xl font-semibold text-accent-foreground text-center mb-6">
                <Gift className="inline-block h-8 w-8 mr-2 text-yellow-500" />
                E NÃO PARA POR AÍ! BÔNUS ESPECIAIS SÓ HOJE:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {bonusItems.map((bonus, index) => (
                  <li key={index} className="flex items-start text-foreground/90 bg-background/50 p-3.5 rounded-md shadow-sm border border-dashed border-accent/50">
                    <CheckCircle className="h-5 w-5 text-accent mr-2.5 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{bonus}</span>
                  </li>
                ))}
              </ul>
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
                className="w-full sm:w-auto shadow-xl hover:shadow-2xl bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-4 px-10 animate-pulse-yellow-cta transition-all transform hover:scale-105"
              >
                <Link href="#cta">
                  GARANTIR MEU KIT COMPLETO AGORA!
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">Compra 100% segura e satisfação que transforma.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
