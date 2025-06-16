import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-60 dark:opacity-30 filter blur-3xl pointer-events-none">
        {/* Cloud Elements */}
        <div className="absolute top-[-15%] left-[-20%] w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,_white_0%,transparent_70%)] rounded-full animate-cloud-drift-slow"></div>
        <div className="absolute top-[10%] right-[-25%] w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,_white_0%,transparent_75%)] rounded-full animate-cloud-drift-medium opacity-80"></div>
        <div className="absolute bottom-[-10%] left-[5%] w-[450px] h-[250px] bg-[radial-gradient(ellipse_at_center,_white_0%,transparent_65%)] rounded-full animate-cloud-drift-slow opacity-90"></div>
        <div className="absolute bottom-[5%] right-[0%] w-[300px] h-[200px] bg-[radial-gradient(ellipse_at_center,_white_0%,transparent_70%)] rounded-full animate-cloud-drift-medium"></div>
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
          Descubra o Kit de Atividades que Está Facilitando o Ensino e Aprendizado em Casa e na Escola
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 animate-fade-in-slow">
          Conteúdo completo, lúdico e estruturado para envolver crianças com estilos únicos de aprendizado e atenção
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
