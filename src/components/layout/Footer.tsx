import Link from 'next/link';
import Image from 'next/image'; // Using Image for the logo

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Link href="/" className="flex flex-col items-center space-y-2">
            <Image
              src="https://i.imgur.com/sb4rEa0.png" 
              alt="Logo Gêniozinho em Ação"
              data-ai-hint="logo abstract playful"
              width={60} 
              height={60}
              className="rounded-md"
            />
            <span className="font-headline text-lg font-semibold text-primary">Gêniozinho em Ação</span>
          </Link>
          <p>&copy; {currentYear} Gêniozinho em Ação. Todos os direitos reservados.</p>
          <p>Transformando o aprendizado com atividades lúdicas e eficazes.</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
