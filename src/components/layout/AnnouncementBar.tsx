'use client';

export default function AnnouncementBar() {
  return (
    <>
      <div
        className="text-center font-semibold fixed top-0 left-0 right-0 z-50 flex items-center justify-center shadow-md animate-brilho-pulse text-sm"
        style={{
          backgroundColor: '#B3D4FC', // Soft blue background
          color: '#1F1F60',
          height: '55px',
          padding: '10px 20px',
          lineHeight: '1.4',
        }}
      >
        <p>
          <span
            aria-hidden="true"
            className="mr-2"
          >
            🎁
          </span>
          <strong>OFERTA DE LANÇAMENTO:</strong> 80% de desconto só hoje no <strong>Kit Gêniozinho em Ação!</strong>
        </p>
      </div>
      {/* Add a placeholder to push down the content */}
      <div style={{ height: '55px' }} />
    </>
  );
}
