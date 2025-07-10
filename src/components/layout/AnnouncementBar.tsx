'use client';

export default function AnnouncementBar() {
  return (
    <>
      <div
        className="p-2 text-center text-sm md:text-base font-bold fixed top-0 left-0 right-0 z-50 flex items-center justify-center shadow-md"
        style={{
          backgroundColor: '#FFD700',
          color: '#2C1E5F',
          height: '45px',
        }}
      >
        <p>
          <span
            aria-hidden="true"
            className="mr-2"
          >
            🎁
          </span>
          Oferta de Lançamento: 80% de desconto só hoje no Kit Gêniozinho em Ação!
        </p>
      </div>
      {/* Add a placeholder to push down the content */}
      <div style={{ height: '45px' }} />
    </>
  );
}
