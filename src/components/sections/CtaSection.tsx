
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Star, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CtaSection() {
  const bonuses = [
    "Planner de Rotina Visual",
    "Cartaz de Emoções para imprimir",
    "Acesso a comunidade com educadores e familiares"
  ];

  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-xl bg-card/80 backdrop-blur-md">
            <CardHeader className="items-center text-center">
              <Image
                src="https://i.imgur.com/lbSS21Q.png"
                alt="Garantia de satisfação"
                data-ai-hint="shield checkmark"
                width={180}
                height={180}
                className="mb-3"
              />
              <CardTitle className="font-headline text-2xl text-yellow-500 drop-shadow-md">SUA SATISFAÇÃO GARANTIDA OU SEU DINHEIRO DE VOLTA!</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/80">
                Além de todos os benefícios que citamos acima, adquirindo hoje você tem 7 dias de garantia para testar o material.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl bg-card/80 backdrop-blur-md lg:col-span-2">
            <CardHeader className="items-center text-center">
              <Star className="h-12 w-12 text-accent mb-3" />
              <CardTitle className="font-headline text-2xl text-primary">E Ainda Tem Mais! Bônus Exclusivos:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-center sm:text-left">
                {bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-center justify-center sm:justify-start text-foreground/80">
                    <Gift className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    {bonus}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-8 md:p-12 shadow-2xl">
          <div className="text-center">
            <Gift className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-6">
              Transforme a Aprendizagem Agora!
            </h2>
            <p className="max-w-xl mx-auto text-lg text-primary-foreground/90 mb-10">
              Clique abaixo e veja como transformar a rotina educativa das crianças de forma prática e divertida.
            </p>
            <Button size="lg" variant="secondary" asChild className="shadow-2xl hover:scale-105 transition-transform duration-300 text-lg py-3 px-10">
              <Link href="/signup"> {/* Placeholder link, update as needed */}
                Quero Acessar o Kit Agora <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="mt-8 text-center">
              <p className="text-md text-primary-foreground/80 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-yellow-300" />
                Lote promocional disponível para as primeiras 100 pessoas. Após isso, o valor será ajustado para o preço original.
              </p>
            </div>
          </div>
        </Card>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent opacity-50 z-0"></div>
    </section>
  );
}

