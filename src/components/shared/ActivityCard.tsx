import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category?: string; // Made category optional as it might not always be used
  actionText?: string;
  actionLink?: string;
}

export default function ActivityCard({ title, description, imageUrl, imageHint, category, actionText = "Saiba Mais", actionLink = "#" }: ActivityCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative"> {/* Changed aspect ratio to 4/3 for better visual consistency */}
          <Image
            src={imageUrl}
            alt={title}
            data-ai-hint={imageHint}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        {category && (
          <span className="inline-block bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full text-xs font-medium mb-2">{category}</span>
        )}
        <CardTitle className="font-headline text-xl mb-2 text-primary">{title}</CardTitle>
        <CardDescription className="text-foreground/70 line-clamp-3">{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full group" asChild>
          <a href={actionLink}> {/* Changed to <a> for external/internal links */}
            {actionText} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
