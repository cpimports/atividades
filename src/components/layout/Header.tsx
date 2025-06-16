import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://i.imgur.com/1ia5AVO.jpeg"
            alt="Spectrum Sprouts Logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="font-headline text-xl font-semibold text-primary">Spectrum Sprouts</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#activities" className="text-foreground/70 hover:text-foreground transition-colors">
            Activities
          </Link>
          <Link href="#benefits" className="text-foreground/70 hover:text-foreground transition-colors">
            Benefits
          </Link>
          <Button asChild size="sm">
            <Link href="#cta">Get Started</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here if needed */}
          <Button variant="outline" size="sm">Menu</Button>
        </div>
      </div>
    </header>
  );
}
