'use client';

export default function AnnouncementBar() {
  return (
    <>
      <div 
        className="text-[#4B0082] p-2 text-center text-sm md:text-base font-medium fixed top-0 left-0 right-0 z-50 flex items-center justify-center shadow-sm"
        style={{
          background: 'linear-gradient(to bottom, #D6ECFF, #E3F1FF)', // Subtle blue gradient
          height: '60px',
          textShadow: '0px 1px 2px rgba(255, 255, 255, 0.5)', // Soft text shadow
        }}
      >
        <p>
          <span
            style={{
              textShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Slightly more pronounced shadow for the emoji
            }}
            aria-hidden="true"
          >
            🎁
          </span>
          {' '}Oferta de Lançamento: 80% de desconto só hoje no Kit Gêniozinho em Ação!
        </p>
      </div>
      {/* Add a placeholder to push down the content */}
      <div style={{ height: '60px' }} />
    </>
  );
}
