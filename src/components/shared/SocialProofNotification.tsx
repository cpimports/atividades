
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const purchaseData = [
  { name: 'Ana P.', city: 'São Paulo, SP' },
  { name: 'João C.', city: 'Rio de Janeiro, RJ' },
  { name: 'Maria S.', city: 'Belo Horizonte, MG' },
  { name: 'Lucas F.', city: 'Salvador, BA' },
  { name: 'Beatriz L.', city: 'Fortaleza, CE' },
  { name: 'Pedro M.', city: 'Brasília, DF' },
  { name: 'Júlia A.', city: 'Curitiba, PR' },
  { name: 'Marcos R.', city: 'Recife, PE' },
  { name: 'Fernanda O.', city: 'Porto Alegre, RS' },
  { name: 'Gustavo H.', city: 'Manaus, AM' },
];

export default function SocialProofNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState(purchaseData[0]);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      const randomIndex = Math.floor(Math.random() * purchaseData.length);
      setCurrentPurchase(purchaseData[randomIndex]);
      setAnimationKey(prevKey => prevKey + 1); // Reset animation
      setIsVisible(true);

      // Hide the notification after 3.5 seconds, allowing for animation out
      setTimeout(() => {
        setIsVisible(false);
      }, 3500);
    };

    // Show the first notification after a short delay
    const initialTimeout = setTimeout(showNotification, 4000);
    
    // Then set the interval to show notifications every 8 seconds (4s visible + 4s hidden)
    const interval = setInterval(showNotification, 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      key={animationKey}
      className={cn(
        "fixed bottom-4 left-4 z-50 w-full max-w-xs rounded-lg bg-card shadow-lg border border-border/50 transition-all duration-500",
        isVisible ? "animate-slide-in-out" : "opacity-0 translate-y-full pointer-events-none"
      )}
    >
      <div className="p-4 flex items-start space-x-3">
        <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
            <ShoppingCart className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 pt-0.5">
          <p className="text-sm font-semibold text-foreground">
            {currentPurchase.name} de {currentPurchase.city}
          </p>
          <p className="text-sm text-muted-foreground">
            Acabou de adquirir o Kit Gêniozinho!
          </p>
        </div>
      </div>
    </div>
  );
}
