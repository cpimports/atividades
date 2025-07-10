'use client';

export default function AnnouncementBar() {
  return (
    <>
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white p-3 text-center text-sm md:text-base font-bold fixed top-0 left-0 right-0 z-50 flex items-center justify-center shadow-lg">
        <p>
          🔥 DESCONTO DE LANÇAMENTO! Só hoje: 80% OFF no Kit Gêniozinho em Ação! 🔥
        </p>
      </div>
      {/* Add a placeholder to push down the content */}
      <div className="h-12 md:h-11" />
    </>
  );
}
