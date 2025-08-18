import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    question: "O material está de acordo com a BNCC?",
    answer: "Sim, todos os nossos materiais são alinhados com os códigos das habilidades e competências da Base Nacional Comum Curricular (BNCC), proporcionando um ensino atualizado e eficaz."
  },
  {
    question: "Como vou receber o material?",
    answer: "O Geniozinho em Ação é totalmente digital, você está adquirindo o acesso a um portal de atividades e irá receber o material utilizando o seu e-mail, de imediato após a confirmação de pagamento, e o melhor, no conforto de sua casa!"
  },
  {
    question: "Se eu não gostar do produto, posso cancelar?",
    answer: "Pode sim, não tem problema, caso não veja resultados você tem até 7 dias após aprovação do pagamento, devolvemos o valor pago."
  },
  {
    question: "São quantas atividades?",
    answer: "São +1000 atividades, pensadas especialmente no aprendizado do seu pequeno, com +12 Bônus Exclusivos irresistíveis com várias atividades."
  },
  {
    question: "Posso usar o Kit em Sala de Aula e para Reforço em Casa?",
    answer: "Claro! Nossos kits são versáteis e podem ser utilizados tanto em sala de aula quanto para reforço escolar em casa, ajudando a reforçar o aprendizado."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold text-primary mb-2">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-lg text-foreground/80 font-semibold">
            TIRE SUAS DÚVIDAS
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border/30 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <AccordionTrigger className="p-6 text-left font-semibold text-lg text-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
