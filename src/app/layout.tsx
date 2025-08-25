
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
        <link rel="preconnect" href="https://i.postimg.cc" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" />
        <link rel="preconnect" href="https://scripts.converteai.net" />

        {/* VSL Script */}
        <Script id="vsl-script" strategy="afterInteractive">
          {`
            var s=document.createElement("script"); 
            s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s);
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
        
        <AnnouncementBar />
        {children}
        <Toaster />
        <SocialProofNotification />
        
        {/* InitiateCheckout Event Script for UTMify */}
        <Script id="initiate-checkout-tracker" strategy="lazyOnload">
          {`
            document.addEventListener('click', function(e) {
              if (e.target && e.target.closest('#btn-comprar')) {
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
