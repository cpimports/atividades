
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react'; // Note: RefreshCw is not used, consider removing if not needed elsewhere.
import Image from 'next/image';

const deliverables = [
  {
    icon: <Image src="https://i.imgur.com/qWFe9DL.png" alt="Pacote de atividades" data-ai-hint="documents educational" width={56} height={56} />,
    title: 'Pacote completo com mais de 1000 atividades educativas',
    description: 'Receba um acervo variado de atividades pensadas para estimular diferentes habilidades cognitivas e comportamentais, organizadas para facilitar a aplicação no dia a dia',
    titleClassName: 'font-headline text-2xl text-primary', 
  },
  {
    icon: <Image src="https://i.imgur.com/JffYX0z.png" alt="Atividades adaptadas" data-ai-hint="focus schedule" width={64} height={64} />,
    title: 'Atividades adaptadas para crianças com dificuldades de atenção',
    description: 'Cada exercício foi elaborado com linguagem simples, estímulos visuais e estrutura que respeita o tempo e o ritmo de cada criança, garantindo mais engajamento e menos frustração',
    titleClassName: 'font-headline text-2xl text-primary',
  },
  {
    icon: <Image src="https://i.imgur.com/QE7BUe3.png" alt="Material lúdico e interativo pronto para imprimir" data-ai-hint="brain puzzle" width={56} height={56} />,
    title: 'Material lúdico e interativo pronto para imprimir',
    description: 'Tudo foi criado para transformar o aprendizado em diversão! São jogos, desafios e exercícios que encantam e educam ao mesmo tempo — é só imprimir e usar',
    titleClassName: 'font-headline text-2xl text-primary',
  },
  {
    icon: <Image src="https://i.imgur.com/nCVoPsJ.png" alt="Ícone de PDF representando acesso digital" data-ai-hint="documents files" width={56} height={56} />,
    title: 'Acesso em PDF com organização por temas',
    description: 'Você poderá acessar o material completo em PDF, com todas as atividades separadas por temas como linguagem, cores, números, formas e muito mais. Fácil de localizar e aplicar',
    titleClassName: 'font-headline text-2xl text-primary',
  },
];

const exclusiveBonuses = [
  { emoji: "🖌️", text: "Atividades de Colorir" },
  { emoji: "🔺", text: "Atividades de Formas Geométricas" },
  { emoji: "✏️", text: "Atividades de Complete as Palavras" },
  { emoji: "🔊", text: "Atividades de Consciência Fonológica" },
  { emoji: "🍎", text: "Atividades de Alimentação Saudável" },
  { emoji: "🔢", text: "Atividades de Números" },
  { emoji: "🎨", text: "Atividades de Cores" },
  { emoji: "🔠", text: "Atividades de Letras" },
  { emoji: "📝", text: "Atividades de Sílabas" },
  { emoji: "👨‍👩‍👧‍👦", text: "Acesso à Comunidade Exclusiva de Pais e Professores" },
  { emoji: "📅", text: "Novas Atividades Publicadas Todos os Dias" },
  { emoji: "🚀", text: "Acesso Imediato e Vitalício" },
];

export default function BenefitsSection() {
  return (
    <section id="oque-voce-recebe" className="py-16 md:py-24 relative overflow-hidden">
      <Image
        src="https://i.imgur.com/EqKEu7v.png"
        alt="Fundo com elementos educativos e lúdicos para crianças"
        data-ai-hint="education kids background"
        fill
        className="object-cover -z-20"
        quality={80}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            O Que Você Recebe ao Adquirir o Kit?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Um pacote completo para transformar o aprendizado em uma aventura diária, repleta de descobertas e desenvolvimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm flex flex-col">
              <CardHeader className="flex flex-col items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                  {item.icon}
                </div>
                <CardTitle className={item.titleClassName || 'font-headline text-xl text-primary'}>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="flex justify-center mb-4">
            <Image
              src="https://i.imgur.com/ZBKqeaL.png"
              alt="Ícone de bônus exclusivo"
              data-ai-hint="gift bonus icon"
              width={100}
              height={100}
              className="rounded-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="font-headline text-3xl sm:text-4xl font-semibold text-yellow-500 drop-shadow-md">
            + BÔNUS EXCLUSIVOS
          </h3>
          <p className="mt-3 text-lg text-foreground/80 max-w-2xl mx-auto font-semibold">
            Além de todo o material citado acima, Você ganhará gratuitamente 12 Bônus Exclusivos.
          </p>
          

          <Card className="mt-12 bg-primary/5 border-2 border-primary/20 shadow-xl p-6 md:p-8 rounded-lg backdrop-blur-md">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="font-headline text-2xl sm:text-3xl text-primary text-center">
                {/* Text removed as requested */}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-foreground/90">
                {exclusiveBonuses.map((bonus, index) => (
                  <li key={index} className="flex items-start space-x-3 bg-background/50 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
                    <span className="text-2xl mt-px">{bonus.emoji}</span>
                    <span className="font-medium">{bonus.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-16 flex justify-center">
          <Image
            src="https://i.imgur.com/J3gznLj.png"
            alt="Selo de aprovação e recomendação para o kit Gêniozinho em Ação"
            data-ai-hint="approval seal recommendation"
            width={500}
            height={125} 
            className="rounded-lg shadow-lg object-contain" 
          />
        </div>
      </div>
    </section>
  );
}
