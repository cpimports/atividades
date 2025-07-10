'use client';

import { X, Megaphone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the bar has been dismissed before
    const dismissed = localStorage.getItem('announcementDismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Remember the dismissal for this session
    localStorage.setItem('announcementDismissed', 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-lg animate-fade-in-fast">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-12">
          <p className="text-center text-sm sm:text-base font-bold tracking-wide">
            🔥 DESCONTO DE LANÇAMENTO! Só hoje: 80% OFF no Kit Gêniozinho em Ação! 🔥
          </p>
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <button
              onClick={handleDismiss}
              aria-label="Dispensar aviso"
              className="p-2 rounded-full text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
