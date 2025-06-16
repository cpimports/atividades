import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://i.imgur.com/sb4rEa0.png" 
            alt="Logo Gêniozinho em Ação"
            data-ai-hint="logo abstract playful"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="font-headline text-xl font-semibold text-primary">Gêniozinho em Ação</span>
        </Link>
      </div>
    </header>
  );
}
