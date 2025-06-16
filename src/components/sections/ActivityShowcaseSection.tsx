import ActivityCard from '@/components/shared/ActivityCard';

const activities = [
  {
    title: 'Aventuras de Brincadeiras Sensoriais',
    description: 'Estimule os sentidos do seu filho com atividades divertidas e terapêuticas, como caixas texturizadas, garrafas calmantes e massinha de modelar perfumada.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'sensory toys',
    category: 'Habilidades Sensoriais',
  },
  {
    title: 'Construtores de Comunicação',
    description: 'Promova a linguagem e a comunicação social por meio de sistemas de troca de figuras (PECS), sequenciamento de histórias e jogos de RPG.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'communication tools',
    category: 'Comunicação',
  },
  {
    title: 'Mania de Habilidades Motoras',
    description: 'Desenvolva habilidades motoras finas e grossas com atividades como enfiar contas, alinhavar, circuitos de obstáculos e exercícios com massa terapêutica.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'motor skills',
    category: 'Desenvolvimento Motor',
  },
  {
    title: 'Cantinho da Expressão Criativa',
    description: 'Incentive a autoexpressão e a criatividade por meio de pintura, desenho, criação musical e cenários de brincadeiras imaginativas.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'art supplies',
    category: 'Criatividade',
  },
  {
    title: 'Hora da História Social',
    description: 'Ajude seu filho a entender situações e expectativas sociais com histórias sociais personalizáveis e cenários interativos.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'story book',
    category: 'Habilidades Sociais',
  },
  {
    title: 'Quebra-cabeças de Resolução de Problemas',
    description: 'Aprimore habilidades cognitivas e de resolução de problemas com quebra-cabeças apropriados para a idade, jogos de correspondência e desafios lógicos.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'puzzles games',
    category: 'Habilidades Cognitivas',
  },
];

export default function ActivityShowcaseSection() {
  return (
    <section id="activities" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            Explore Nossas Atividades
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Uma gama diversificada de atividades projetadas para apoiar diversas áreas do desenvolvimento, tornando o aprendizado agradável e eficaz.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              description={activity.description}
              imageUrl={activity.imageUrl}
              imageHint={activity.imageHint}
              category={activity.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
