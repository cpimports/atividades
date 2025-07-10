'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white p-3 text-center text-sm md:text-base font-bold fixed top-0 left-0 right-0 z-50 flex items-center justify-center shadow-lg">
        <p className="flex-grow">
          🔥 DESCONTO DE LANÇAMENTO! Só hoje: 80% OFF no Kit Gêniozinho em Ação! 🔥
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Dispensar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      {/* Add a placeholder to push down the content */}
      <div className="h-12 md:h-11" />
    </>
  );
}
