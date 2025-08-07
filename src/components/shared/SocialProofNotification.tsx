
'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const names = [
  'Ana', 'Beatriz', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gustavo', 'Helena', 'Isabela',
  'João', 'Karina', 'Lucas', 'Mariana', 'Nicole', 'Otávio', 'Patrícia', 'Ricardo', 'Sofia', 'Tiago', 'Vanessa'
];

const locations = [
  'de São Paulo, SP', 'do Rio de Janeiro, RJ', 'de Belo Horizonte, MG', 'de Salvador, BA',
  'de Curitiba, PR', 'de Porto Alegre, RS', 'de Fortaleza, CE', 'de Brasília, DF',
  'de Recife, PE', 'de Manaus, AM'
];

export default function SocialProofNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState({ name: '', location: '' });

  useEffect(() => {
    const showRandomNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      
      setCurrentBuyer({ name: randomName, location: randomLocation });
      setIsVisible(true);

      // Hide the notification after 10 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 10000);
    };

    // Show the first notification after a short delay
    const initialTimeout = setTimeout(showRandomNotification, 5000);
    
    // Then, show a new notification every 15 seconds
    const interval = setInterval(showRandomNotification, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={cn(
      "fixed bottom-4 left-4 z-50 transition-all duration-500",
      isVisible ? 'animate-slide-in-out' : 'opacity-0 -translate-x-full'
    )}>
      <div className="flex items-center gap-3 rounded-lg bg-green-600 px-4 py-3 text-white shadow-lg">
        <ShoppingBag className="h-6 w-6" />
        <p className="text-sm font-semibold">
          {currentBuyer.name} {currentBuyer.location} acabou de comprar!
        </p>
      </div>
    </div>
  );
}
