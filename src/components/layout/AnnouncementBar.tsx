'use client';

import { Clock } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <>
      <div className="bg-[#FFE4B5] text-[#4B0082] p-2 text-center text-sm md:text-base font-medium fixed top-0 left-0 right-0 z-50 flex items-center justify-center shadow-md">
        <Clock className="h-4 w-4 mr-2 shrink-0" />
        <p>
          Oferta de Lançamento: 80% de desconto hoje no Kit Gêniozinho em Ação!
        </p>
      </div>
      {/* Add a placeholder to push down the content */}
      <div className="h-10" />
    </>
  );
}
