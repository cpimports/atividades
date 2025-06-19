
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-800 to-slate-900 relative overflow-hidden">
      {/* Diffuse cloud-like elements */}
      <div className="absolute inset-0 opacity-10 filter blur-3xl pointer-events-none">
        <div className="absolute top-[-15%] left-[-20%] w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_70%)] rounded-full animate-cloud-drift-slow"></div>
        <div className="absolute top-[10%] right-[-25%] w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_75%)] rounded-full animate-cloud-drift-medium opacity-80"></div>
        <div className="absolute bottom-[-10%] left-[5%] w-[450px] h-[250px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_65%)] rounded-full animate-cloud-drift-slow opacity-90"></div>
        <div className="absolute bottom-[5%] right-[0%] w-[300px] h-[200px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_70%)] rounded-full animate-cloud-drift-medium"></div>
      </div>

      {/* Shiny star-like elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[25%] left-[85%] w-1.5 h-1.5 bg-sky-200 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[50%] left-[50%] w-0.5 h-0.5 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[75%] left-[15%] w-1 h-1 bg-sky-300 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[80%] left-[90%] w-1.5 h-1.5 bg-white rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[5%] left-[60%] w-1 h-1 bg-sky-200 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-[40%] left-[5%] w-1.5 h-1.5 bg-white rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute bottom-[10%] left-[70%] w-1 h-1 bg-sky-300 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '3s' }}></div>
        {/* Additional stars */}
        <div className="absolute top-[15%] left-[5%] w-0.5 h-0.5 bg-sky-100 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-[30%] left-[70%] w-1 h-1 bg-white rounded-full filter blur-[0.8px] animate-twinkle" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-[60%] left-[10%] w-1.5 h-1.5 bg-sky-200 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-[85%] left-[55%] w-0.5 h-0.5 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-[5%] left-[35%] w-1 h-1 bg-sky-300 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-[65%] left-[95%] w-1 h-1 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-0.5 h-0.5 bg-sky-200 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '3.2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-6 mt-[-3rem] md:mt-[-4rem] animate-fade-in-fast flex justify-center">
          <Image
            src="https://i.imgur.com/sb4rEa0.png"
            alt="Logo Gêniozinho em Ação"
            data-ai-hint="logo abstract playful"
            width={280}
            height={280}
            className="rounded-lg"
            priority
          />
        </div>
        <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white animate-fade-in-medium">
          Transforme o Dia a Dia da Sua Criança com Atividades Divertidas e Inclusivas Criadas Especialmente para o Desenvolvimento Delas!
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-gray-300 animate-fade-in-slow">
          Mais conexão, menos estresse e mais evolução: um material completo com atividades lúdicas e terapêuticas que estimulam o aprendizado, a linguagem, o foco e o comportamento da criança
        </p>
        <div className="mt-12 animate-fade-in-slow" style={{ animationDelay: '0.8s' }}>
          <Image 
            src="https://placehold.co/480x270.png" 
            alt="Crianças felizes e engajadas utilizando o material Gêniozinho em Ação" 
            data-ai-hint="children learning kit"
            width={480} 
            height={270}
            className="rounded-xl shadow-2xl mx-auto aspect-video object-cover"
            priority
          />
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 animate-fade-in-slow" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            asChild 
            className="shadow-lg hover:shadow-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold animate-pulse-yellow-cta transition-shadow"
          >
            <Link href="#oferta-especial">
              BAIXAR MINHA CÓPIA
            </Link>
          </Button>
          <p className="mt-2 text-xs text-gray-400 animate-fade-in-slow" style={{ animationDelay: '0.7s' }}>
            REVISADO POR PEDAGOGOS E PSICÓLOGOS
          </p>
        </div>
      </div>
    </section>
  );
}

