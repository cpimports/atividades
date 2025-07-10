
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-12 pb-16 md:pb-24 lg:pb-32 bg-gradient-to-br from-indigo-800 to-slate-900 relative overflow-hidden">
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
        <div className="flex justify-center mb-6 animate-fade-in-medium">
            <Image
                src="https://i.imgur.com/sKbY73Q.png"
                alt="Gêniozinho em Ação Logo"
                data-ai-hint="logo abstract playful"
                width={120}
                height={120}
                className="rounded-full object-cover"
                priority
            />
        </div>
        <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white animate-fade-in-medium">
          Transforme o Dia a Dia da Sua Criança!
        </h1>
        <div className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-gray-300 animate-fade-in-slow px-4 sm:px-0 text-center">
            <p className="font-semibold text-sky-200 text-base md:text-lg">Com Atividades Divertidas, Inclusivas e Criadas para Estimular o Desenvolvimento Infantil</p>
            <p className="mt-4">Mais conexão, menos estresse e mais evolução:</p>
            <ul className="mt-4 space-y-2 inline-block">
                <li className="flex items-start">
                    <span className="mr-2 text-2xl md:text-xl" style={{ color: '#f4d35e', filter: 'drop-shadow(0 0 5px #f4d35e)' }}>✨</span>
                    <span>Atividades lúdicas e terapêuticas criadas por especialistas</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 text-2xl md:text-xl" style={{ color: '#f4d35e', filter: 'drop-shadow(0 0 5px #f4d35e)' }}>✨</span>
                    <span>Estimulam o aprendizado, a linguagem, o foco e o comportamento</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 text-2xl md:text-xl" style={{ color: '#f4d35e', filter: 'drop-shadow(0 0 5px #f4d35e)' }}>✨</span>
                    <span>Ajudam a fortalecer o vínculo entre pais e filhos</span>
                </li>
            </ul>
        </div>

        <div className="mt-10 aspect-video max-w-2xl mx-auto animate-fade-in-slow" style={{ animationDelay: '0.4s' }}>
          <div
            className="w-full h-full rounded-lg shadow-2xl shadow-sky-400/20 overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: `
                <script type="text/javascript" async src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"></script>
                <div id="ifr_686fd145e397e681c4ce4c3b_wrapper" style="width: 100%; height: 100%; position: relative;">
                  <div style="padding: 56.25% 0 0 0; position: relative;" id="ifr_686fd145e397e681c4ce4c3b_aspect">
                    <iframe
                      id="ifr_686fd145e397e681c4ce4c3b"
                      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                      frameborder="0"
                      allowfullscreen
                      src="about:blank"
                      referrerpolicy="origin"
                      onload="this.onload=null; this.src='https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/686fd145e397e681c4ce4c3b/v4/embed.html' + (location.search || '?') + '&vl=' + encodeURIComponent(location.href)"
                    ></iframe>
                  </div>
                </div>
              `,
            }}
          />
        </div>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 animate-fade-in-slow" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            asChild 
            className="shadow-lg hover:shadow-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold animate-pulse-yellow-cta transition-shadow"
          >
            <Link href="#kit-description">
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
