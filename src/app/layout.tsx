
import type {Metadata} from 'next';
import { Inter, Alegreya, Merriweather } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import SocialProofNotification from '@/components/shared/SocialProofNotification';

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

const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  style: 'italic',
  variable: '--font-merriweather',
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
    <html lang="pt-BR" className={`${inter.variable} ${alegreya.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://i.imgur.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://scripts.converteai.net" />
        <link rel="preconnect" href="https://cdn.converteai.net" />
        <link rel="preconnect" href="https://images.converteai.net" />
        <link rel="preconnect" href="https://api.vturb.com.br" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" />

        {/* VSL Optimizations (ConverteAi) */}
        <link rel="preload" href="https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/686fd145e397e681c4ce4c3b/v4/embed.html" as="fetch" crossOrigin="anonymous" />
        <Script id="vsl-timing-optimization" strategy="beforeInteractive">
          {`!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`}
        </Script>
        <link rel="preload" href="https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/686fd145e397e681c4ce4c3b/v4/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        <link rel="preload" href="https://cdn.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/686fd13fd5ca67ae2917e1a0/main.m3u8" as="fetch" crossOrigin="anonymous" />
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

        {/* UTMify Pixel Loader */}
        <Script id="utmify-pixel-loader" strategy="afterInteractive">
          {`
            window.pixelId = "689374be46b9142a86a43379";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=1650519618943117&ev=PageView&noscript=1"/>
        </noscript>
        
        <AnnouncementBar />
        {children}
        <Toaster />
        <SocialProofNotification />
        
        {/* InitiateCheckout Event Script for FB and UTMify */}
        <Script id="initiate-checkout-tracker" strategy="lazyOnload">
          {`
            document.addEventListener('click', function(e) {
              if (e.target && e.target.closest('#btn-comprar')) {
                // Facebook Pixel
                if (typeof fbq === 'function') {
                  fbq('track', 'InitiateCheckout');
                }
                // UTMify Pixel
                if (window.utmify_pixel && typeof window.utmify_pixel.track === 'function') {
                  window.utmify_pixel.track('InitiateCheckout');
                }
              }
            }, true);
          `}
        </Script>

        {/* UTMify Script for appending UTMs to links */}
        <Script 
          id="utmify-utm-script"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async 
          defer
        ></Script>
      </body>
    </html>
  );
}
