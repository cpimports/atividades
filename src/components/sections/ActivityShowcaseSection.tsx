import ActivityCard from '@/components/shared/ActivityCard';

const activities = [
  {
    title: 'Sensory Play Adventures',
    description: 'Engage your child\'s senses with fun and therapeutic activities like textured bins, calming bottles, and scented playdough.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'sensory toys',
    category: 'Sensory Skills',
  },
  {
    title: 'Communication Builders',
    description: 'Foster language and social communication through picture exchange systems (PECS), story sequencing, and role-playing games.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'communication tools',
    category: 'Communication',
  },
  {
    title: 'Motor Skill Mania',
    description: 'Develop fine and gross motor skills with activities like beading, lacing, obstacle courses, and therapeutic putty exercises.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'motor skills',
    category: 'Motor Development',
  },
  {
    title: 'Creative Expression Corner',
    description: 'Encourage self-expression and creativity through painting, drawing, music making, and imaginative play setups.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'art supplies',
    category: 'Creativity',
  },
  {
    title: 'Social Story Time',
    description: 'Help your child understand social situations and expectations with customizable social stories and interactive scenarios.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'story book',
    category: 'Social Skills',
  },
  {
    title: 'Problem Solving Puzzles',
    description: 'Enhance cognitive abilities and problem-solving skills with age-appropriate puzzles, matching games, and logic challenges.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'puzzles games',
    category: 'Cognitive Skills',
  },
];

export default function ActivityShowcaseSection() {
  return (
    <section id="activities" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-semibold text-primary">
            Explore Our Activities
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            A diverse range of activities designed to support various developmental areas, making learning enjoyable and effective.
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
