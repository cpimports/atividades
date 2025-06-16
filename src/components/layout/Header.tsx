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
        {/* Navigation items can be added here later if needed */}
        {/* 
        <nav className="hidden md:flex gap-6">
          <Link href="#material" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Material</Link>
          <Link href="#oque-voce-recebe" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">O Que Você Recebe</Link>
          <Link href="#depoimentos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Depoimentos</Link>
          <Link href="#cta" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Começar</Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here *}
        </div>
        */}
      </div>
    </header>
  );
}
