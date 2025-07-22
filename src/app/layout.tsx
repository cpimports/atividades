
import type {Metadata} from 'next';
import { Inter, Alegreya } from 'next/font/google';
import Script from 'next/script';
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
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://i.imgur.com" />
        <link rel="preconnect" href="https://scripts.converteai.net" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />

        {/* 🚀 Otimizações para carregamento da VSL (ConverteAi) */}
        <link rel="preload" href="https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/686fd145e397e681c4ce4c3b/v4/embed.html" />
        <script dangerouslySetInnerHTML={{ __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);` }} />
        <link rel="preload" href="https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/686fd145e397e681c4ce4c3b/v4/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        <link rel="preload" href="https://cdn.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/686fd13fd5ca67ae2917e1a0/main.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />

        {/* Meta Pixel Code */}
        <Script id="facebook-pixel-base" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src='https://connect.facebook.net/en_US/fbevents.js';
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script');
            fbq('init', '1650519618943117');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* End Meta Pixel Code */}

        {/* UTMify Script */}
        <Script 
          id="utmify-script"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async 
          defer
        ></Script>
        {/* End UTMify Script */}
      </head>
      <body className="font-body antialiased">
        {/* Meta Pixel Code (noscript) */}
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=1650519618943117&ev=PageView&noscript=1"/>
        </noscript>
        {/* End Meta Pixel Code (noscript) */}

        {/* InitiateCheckout Event Script */}
        <Script id="facebook-pixel-initiate-checkout" strategy="lazyOnload">
          {`
            document.addEventListener('click', function(e) {
              if (e.target && e.target.closest('#btn-comprar')) {
                if (typeof fbq === 'function') {
                  fbq('track', 'InitiateCheckout');
                }
              }
            }, true);
          `}
        </Script>
        
        <AnnouncementBar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
