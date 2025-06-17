
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
    descriptor: '🗣️ Depoimento 1 – Mãe',
    name: 'Carla M.',
    text: "Meu filho nunca conseguia se concentrar nas tarefas da escola. Quando começamos a usar o Gêniozinho em Ação, ele se envolveu de verdade! Agora ele até pede pra fazer as atividades. Foi um alívio pra nossa rotina!",
    avatarUrl: 'https://placehold.co/80x80.png',
    avatarHint: 'mother child',
    avatarFallback: 'CM',
  },
  {
    id: 2,
    descriptor: '🗣️ Depoimento 2 – Professora',
    name: 'Vanessa G. – Professora do 2º ano',
    text: "Uso esse material em sala com meus alunos e tem feito toda a diferença. As atividades são simples de aplicar e muito eficientes pra manter a turma engajada. Indico pra todo educador!",
    avatarUrl: 'https://placehold.co/80x80.png',
    avatarHint: 'teacher classroom',
    avatarFallback: 'VG',
  },
  {
    id: 3,
    descriptor: '🗣️ Depoimento 3 – Terapeuta',
    name: 'André P. – Psicopedagogo',
    text: "Como terapeuta, sempre procuro materiais que unam didática com acessibilidade. O Gêniozinho em Ação entrega isso com excelência. Os pais dos meus pacientes amaram poder aplicar em casa também.",
    avatarUrl: 'https://placehold.co/80x80.png',
    avatarHint: 'therapist consultation',
    avatarFallback: 'AP',
  },
  {
    id: 4,
    descriptor: '🗣️ Depoimento 4 – Pai',
    name: 'Rafael T.',
    text: "Eu me sentia perdido tentando ajudar minha filha. Esse kit foi um divisor de águas. Agora temos momentos de aprendizado e conexão que antes pareciam impossíveis.",
    avatarUrl: 'https://placehold.co/80x80.png',
    avatarHint: 'father daughter',
    avatarFallback: 'RT',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
            DEPOIMENTOS!
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Veja o que pais, professores e terapeutas estão dizendo sobre como o Kit Gêniozinho em Ação transformou suas rotinas e o aprendizado das crianças.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card/95 backdrop-blur-md flex flex-col overflow-hidden">
              <CardHeader className="p-6 flex flex-col items-center text-center sm:flex-row sm:items-start sm:space-x-4 sm:text-left">
                <Avatar className="w-20 h-20 border-2 border-primary/30 flex-shrink-0 mb-4 sm:mb-0">
                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                  <AvatarFallback className="text-2xl bg-primary/10 text-primary font-semibold">
                    {testimonial.avatarFallback}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <CardTitle className="font-headline text-xl text-primary mb-1">{testimonial.descriptor}</CardTitle>
                  <p className="text-md font-semibold text-foreground/90">Nome: {testimonial.name}</p>
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
