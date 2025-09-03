
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewVslPlayer = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <script type="text/javascript">
              var s=document.createElement("script");
              s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
              s.async=true;
              document.head.appendChild(s);
          </script>
          <div id="ifr_68a677e85a4844a26844462d_wrapper" style="margin: 0 auto; width: 100%; ">
              <div style="position: relative; padding: 56.48535564853556% 0 0 0;" id="ifr_68a677e85a4844a26844462d_aspect">
                  <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68a677e85a4844a26844462d"
                      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin"
                      onload="this.onload=null; this.src='https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/68a677e85a4844a26844462d/v4/embed.html'+(location.search||'?')+'&vl='+encodeURIComponent(location.href)">
                  </iframe>
              </div>
          </div>
        `,
      }}
    />
  );
};

export default function HeroSection() {

  return (
    <section className="pb-16 md:pb-24 lg:pb-32 bg-gradient-to-br from-indigo-800 to-slate-900 relative overflow-hidden">
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
        <div className="absolute top-[15%] left-[5%] w-0.5 h-0.5 bg-sky-100 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-[30%] left-[70%] w-1 h-1 bg-white rounded-full filter blur-[0.8px] animate-twinkle" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-[60%] left-[10%] w-1.5 h-1.5 bg-sky-200 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-[85%] left-[55%] w-0.5 h-0.5 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-[5%] left-[35%] w-1 h-1 bg-sky-300 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-[65%] left-[95%] w-1 h-1 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-0.5 h-0.5 bg-sky-200 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '3.2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8 animate-fade-in-medium">
          <Image
            src="https://i.postimg.cc/C5MkKgMW/logo.webp"
            alt="Logo Gêniozinho em Ação"
            data-ai-hint="logo brain lightbulb"
            width={120}
            height={101}
            className="mx-auto"
            priority
          />
        </div>
        <h1 className="font-merriweather text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white animate-fade-in-medium">
          <span className="text-yellow-400">+1500</span> Atividades Lúdicas e Adaptadas para <span className="text-yellow-400">Crianças Autistas</span>
        </h1>
        <div className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-gray-300 animate-fade-in-slow px-4 sm:px-0 text-center">
            <p className="font-semibold text-sky-200 text-base md:text-lg">Economize horas de preparo com atividades prontas, validadas por pedagogos e psicólogos, que estimulam o foco, a linguagem, a socialização e o desenvolvimento cognitivo dos seus alunos com TEA.</p>
        </div>

        <div className="mt-8 max-w-3xl mx-auto animate-fade-in-slow">
            <div className="rounded-lg overflow-hidden shadow-2xl shadow-sky-400/20">
                 <NewVslPlayer />
            </div>
        </div>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 animate-fade-in-slow" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            asChild 
            className="shadow-lg hover:shadow-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold animate-pulse-yellow-cta transition-shadow"
          >
            <Link href="#kit-description">
              GARANTIR MEU KIT COM DESCONTO
            </Link>
          </Button>
          <p className="mt-2 text-xs text-gray-400 animate-fade-in-slow" style={{ animationDelay: '0.7s' }}>
            REVISADO POR PEDAGOGOS E PSICÓLOGOS
          </p>
          <div className="mt-2 animate-fade-in-slow" style={{ animationDelay: '0.8s' }}>
            <Image
                src="https://i.postimg.cc/c4SwCfCQ/xCuyx6F.webp"
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
    </section>
  );
}
