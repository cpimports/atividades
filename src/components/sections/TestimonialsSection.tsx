
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// Quote import removed
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Usei com meus alunos e foi um sucesso. Eles se envolvem, se divertem e aprendem de verdade.",
    author: "Profa. Vanessa G.",
    role: "1º ano",
    avatarFallback: "VG",
    avatarUrl: "https://i.imgur.com/4AT6OXm.jpeg",
    avatarHint: "woman teacher"
  },
  {
    quote: "Foi um alívio ter atividades que realmente prendem a atenção do meu filho e que podemos fazer juntos. Recomendo demais!",
    author: "Mônica R.",
    role: "Mãe",
    avatarFallback: "MR",
    avatarUrl: "https://placehold.co/64x64.png",
    avatarHint: "woman mother"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            DEPOIMENTOS!
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Pais e educadores que transformaram o aprendizado com o Kit Gêniozinho em Ação.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm flex flex-col">
              <CardHeader className="pb-4 flex flex-col items-center text-center sm:flex-row sm:items-start sm:space-x-4 sm:text-left">
                <Avatar className="h-16 w-16 mb-4 sm:mb-0 sm:flex-shrink-0">
                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} data-ai-hint={testimonial.avatarHint} />
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  {/* Quote icon removed from here */}
                  <CardTitle className="text-lg font-normal italic text-foreground/85 leading-relaxed pt-2 sm:pt-0"> {/* Added padding-top for potential visual adjustment */}
                    "{testimonial.quote}"
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-2 mt-auto">
                <p className="text-right font-semibold text-primary">{testimonial.author}</p>
                <p className="text-right text-sm text-muted-foreground">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

