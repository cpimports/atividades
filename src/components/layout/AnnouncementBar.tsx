'use client';

export default function AnnouncementBar() {
  return (
    <>
      <div
        className="text-center font-bold fixed top-0 left-0 right-0 z-50 flex items-center justify-center shadow-md animate-subtle-glow text-base"
        style={{
          backgroundColor: '#B3D4FC', // Soft blue background
          color: '#1F1F60',
          height: '45px',
          padding: '10px 0',
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
