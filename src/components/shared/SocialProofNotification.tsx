
'use client';

import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const buyers = [
    { name: 'Nicole S.', location: 'São Paulo, SP' },
    { name: 'Lucas M.', location: 'Rio de Janeiro, RJ' },
    { name: 'Fernanda L.', location: 'Belo Horizonte, MG' },
    { name: 'Rafael P.', location: 'Curitiba, PR' },
    { name: 'Juliana A.', location: 'Salvador, BA' },
    { name: 'Carlos E.', location: 'Fortaleza, CE' },
    { name: 'Ana B.', location: 'Porto Alegre, RS' },
    { name: 'Pedro H.', location: 'Recife, PE' },
    { name: 'Beatriz C.', location: 'Goiânia, GO' },
    { name: 'Thiago R.', location: 'Brasília, DF' },
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
    const initialTimeout = setTimeout(showRandomNotification, 3000);

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
      className={`fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-lg bg-green-600 px-4 py-3 text-white shadow-lg ${
        isVisible ? 'animate-fadeInOut' : 'opacity-0'
      }`}
    >
      <ShoppingCart className="h-6 w-6" />
      <div>
        <p className="font-bold">{notification.name}</p>
        <p className="text-sm">acabou de comprar!</p>
      </div>
    </div>
  );
}
