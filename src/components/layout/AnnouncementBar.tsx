'use client';

export default function AnnouncementBar() {
  return (
    <>
      <div 
        className="bg-[#D6ECFF] text-[#4B0082] p-2 text-center text-sm md:text-base font-medium fixed top-0 left-0 right-0 z-50 flex items-center justify-center shadow-sm"
        style={{ height: '50px' }}
      >
        <p>
          🎁 Oferta de Lançamento: 80% de desconto só hoje no Kit Gêniozinho em Ação!
        </p>
      </div>
      {/* Add a placeholder to push down the content */}
      <div style={{ height: '50px' }} />
    </>
  );
}
