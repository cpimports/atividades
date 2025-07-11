'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Using Image for the logo

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | string>('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40 py-8 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Link href="/" className="flex flex-col items-center space-y-2">
            <Image
              src="https://i.imgur.com/sb4rEa0l.png" 
              alt="Logo Gêniozinho em Ação"
              data-ai-hint="logo abstract playful"
              width={64} 
              height={64}
              className="rounded-md"
            />
            <span className="font-headline text-lg font-semibold text-primary">Gêniozinho em Ação</span>
          </Link>
          {/* Conditional rendering to avoid server/client mismatch */}
          {currentYear && <p>&copy; {currentYear} Gêniozinho em Ação. Todos os direitos reservados.</p>}
          <p>Transformando o aprendizado com atividades lúdicas e eficazes.</p>
          <div className="flex space-x-4">
            {/* Links removidos para corrigir o build estático */}
          </div>
        </div>
      </div>
    </footer>
  );
}
