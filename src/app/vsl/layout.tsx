import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gêniozinho em Ação - Atividades Educativas para Crianças',
  description: 'Kit completo de atividades educativas e interativas, prontas para aplicar em casa ou na escola, e transformar a rotina de aprendizado de crianças com estilos únicos de aprendizagem e atenção.',
};

export default function VslLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preload" href="https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6ad56b45d97f2ee214dc944d/v4/player.js" as="script" />
      <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
      <link rel="preload" href="https://cdn.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/6ad56b304e8a318aa647ed1f/main.m3u8" as="fetch" />
      <link rel="dns-prefetch" href="https://cdn.converteai.net" />
      <link rel="dns-prefetch" href="https://scripts.converteai.net" />
      <link rel="dns-prefetch" href="https://images.converteai.net" />
      <link rel="dns-prefetch" href="https://license.vturb.com" />
      {children}
    </>
  );
}
