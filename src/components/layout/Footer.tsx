import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-accent" />
            <span className="font-headline text-lg font-semibold text-primary">Spectrum Sprouts</span>
          </Link>
          <p>&copy; {currentYear} Spectrum Sprouts. All rights reserved.</p>
          <p>Designed with care for our little learners.</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
