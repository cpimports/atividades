
'use client';

import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const buyers = [
    { name: 'Nicole', location: 'São Paulo, SP' },
    { name: 'Lucas', location: 'Rio de Janeiro, RJ' },
    { name: 'Fernanda', location: 'Belo Horizonte, MG' },
    { name: 'Rafael', location: 'Curitiba, PR' },
    { name: 'Juliana', location: 'Salvador, BA' },
    { name: 'Carlos', location: 'Fortaleza, CE' },
    { name: 'Ana', location: 'Porto Alegre, RS' },
    { name: 'Pedro', location: 'Recife, PE' },
    { name: 'Beatriz', location: 'Goiânia, GO' },
    { name: 'Thiago', location: 'Brasília, DF' },
];

interface CurrentNotification {
  name: string;
  location: string;
  key: number;
}

export default function SocialProofNotification() {
  const [notification, setNotification] = useState<CurrentNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
      setNotification({ ...randomBuyer, key: Date.now() });
      setIsVisible(true);

      // Fica visível por 10 segundos e depois some
      setTimeout(() => {
        setIsVisible(false);
      }, 10000);
    };

    // Mostra a primeira notificação após um pequeno atraso
    const initialTimeout = setTimeout(showRandomNotification, 5000);

    // Mostra uma nova notificação a cada 15 segundos
    const interval = setInterval(showRandomNotification, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification) {
    return null;
  }

  return (
    <div
      key={notification.key}
      className={`fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-lg bg-green-500 px-4 py-3 text-white shadow-lg ${
        isVisible ? 'animate-fadeInOut' : 'opacity-0'
      }`}
    >
      <ShoppingCart className="h-6 w-6" />
      <div>
        <p className="text-sm">
          <span className="font-bold">{notification.name}</span> acabou de comprar!
        </p>
      </div>
    </div>
  );
}
