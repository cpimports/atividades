import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Usei com meus alunos e foi um sucesso. Eles se envolvem, se divertem e aprendem de verdade.",
    author: "Profa. Vanessa G.",
    role: "1º ano",
    avatarFallback: "VG"
  },
  {
    quote: "Foi um alívio ter atividades que realmente prendem a atenção do meu filho e que podemos fazer juntos. Recomendo demais!",
    author: "Mônica R.",
    role: "Mãe",
    avatarFallback: "MR"
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
              <CardHeader className="pb-4">
                <Quote className="h-10 w-10 text-accent/50 mb-2" />
                <CardTitle className="text-lg font-normal italic text-foreground/85 leading-relaxed">
                  "{testimonial.quote}"
                </CardTitle>
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

