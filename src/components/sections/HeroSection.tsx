import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        {/* Subtle background pattern or image can be added here */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-6 mt-[-3rem] md:mt-[-4rem] animate-fade-in-fast flex justify-center">
          <Image
            src="https://i.imgur.com/sb4rEa0.png"
            alt="Logo Gêniozinho em Ação"
            data-ai-hint="logo abstract playful"
            width={200}
            height={200}
            className="rounded-lg"
            priority
          />
        </div>
        <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary animate-fade-in-medium">
          Atividades Educativas Que Estimulam o Foco, a Linguagem e o Comportamento de Crianças com Dificuldade de Aprendizagem!
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 animate-fade-in-slow">
          Material completo e pronto para aplicar em casa ou na escola — ideal para crianças com estilos únicos de aprendizado e atenção.
        </p>
        <div className="mt-12 animate-fade-in-slow" style={{ animationDelay: '0.8s' }}>
          <Image 
            src="https://placehold.co/800x450.png" 
            alt="Crianças felizes e engajadas utilizando o material Gêniozinho em Ação" 
            data-ai-hint="children learning kit"
            width={800} 
            height={450}
            className="rounded-xl shadow-2xl mx-auto aspect-video object-cover"
            priority
          />
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-slow" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#cta">
              Quero Acessar o Kit Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="#about">
              Saiba Mais Sobre o Kit
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
