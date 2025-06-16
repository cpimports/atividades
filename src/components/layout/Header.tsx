import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://i.imgur.com/1ia5AVO.jpeg"
            alt="Spectrum Sprouts Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="font-headline text-xl font-semibold text-primary hidden sm:inline">
            Spectrum Sprouts
          </span>
        </Link>
        {/* Navigation items can be added here later */}
      </div>
    </header>
  );
}
