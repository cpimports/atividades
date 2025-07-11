import type {Metadata} from 'next';
import { Inter, Alegreya } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AnnouncementBar from '@/components/layout/AnnouncementBar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alegreya',
});

export const metadata: Metadata = {
  title: 'Gêniozinho em Ação - Atividades Educativas para Crianças',
  description: 'Kit completo de atividades educativas e interativas, prontas para aplicar em casa ou na escola, e transformar a rotina de aprendizado de crianças com estilos únicos de aprendizagem e atenção.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${alegreya.variable}`} suppressHydrationWarning>
      <head>
        {/* Font links are now handled by next/font */}
        <link rel="preconnect" href="https://i.imgur.com" />
        <link rel="preconnect" href="https://scripts.converteai.net" />
      </head>
      <body className="font-body antialiased">
        <AnnouncementBar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
