
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background">
      <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-foreground">Página Não Encontrada</h2>
      <p className="text-lg mb-8 text-muted-foreground max-w-md">
        Oops! A página que você está procurando não existe ou foi movida.
      </p>
      <Button asChild>
        <Link href="/">
          Voltar para a Página Inicial
        </Link>
      </Button>
    </div>
  )
}
