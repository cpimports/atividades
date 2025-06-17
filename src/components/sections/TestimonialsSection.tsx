
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  id: number;
  descriptor: string;
  name: string;
  text: string;
  avatarUrl: string;
  avatarHint: string;
  avatarFallback: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    descriptor: 'Mãe',
    name: 'Carla M.',
    text: "Meu filho nunca conseguia se concentrar nas tarefas da escola. Quando começamos a usar o Gêniozinho em Ação, ele se envolveu de verdade! Agora ele até pede pra fazer as atividades. Foi um alívio pra nossa rotina!",
    avatarUrl: 'https://i.imgur.com/uMokmuq.png',
    avatarHint: 'teacher smiling',
    avatarFallback: 'CM',
  },
  {
    id: 2,
    descriptor: 'Professora',
    name: 'Vanessa G. – Professora do 2º ano',
    text: "Uso esse material em sala com meus alunos e tem feito toda a diferença. As atividades são simples de aplicar e muito eficientes pra manter a turma engajada. Indico pra todo educador!",
    avatarUrl: 'https://i.imgur.com/XNa1fhn.jpeg',
    avatarHint: 'teacher portrait',
    avatarFallback: 'VG',
  },
  {
    id: 3,
    descriptor: 'Terapeuta',
    name: 'André P. – Psicopedagogo',
    text: "Como terapeuta, sempre procuro materiais que unam didática com acessibilidade. O Gêniozinho em Ação entrega isso com excelência. Os pais dos meus pacientes amaram poder aplicar em casa também.",
    avatarUrl: 'https://i.imgur.com/JfE3o6V.jpeg',
    avatarHint: 'therapist male',
    avatarFallback: 'AP',
  },
  {
    id: 4,
    descriptor: 'Pai',
    name: 'Rafael T.',
    text: "Eu me sentia perdido tentando ajudar minha filha. Esse kit foi um divisor de águas. Agora temos momentos de aprendizado e conexão que antes pareciam impossíveis.",
    avatarUrl: 'https://placehold.co/80x80.png',
    avatarHint: 'father daughter',
    avatarFallback: 'RT',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-br from-indigo-800 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white mb-4">
            DEPOIMENTOS!
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Veja o que pais, professores e terapeutas estão dizendo sobre como o Kit Gêniozinho em Ação transformou suas rotinas e o aprendizado das crianças.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-card text-card-foreground flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <CardHeader className="p-6 flex flex-col items-center text-center sm:flex-row sm:items-start sm:space-x-4 sm:text-left">
                <Avatar className="w-24 h-24 border-2 border-primary/20 flex-shrink-0 mb-4 sm:mb-0">
                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                  <AvatarFallback className="text-2xl bg-muted text-muted-foreground font-semibold">
                    {testimonial.avatarFallback}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <CardTitle className="font-headline text-xl text-primary mb-1">{testimonial.descriptor}</CardTitle>
                  <p className="text-md font-semibold text-foreground/90">{testimonial.name}</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-center sm:text-left flex-grow">
                <p className="text-foreground/80 italic leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
