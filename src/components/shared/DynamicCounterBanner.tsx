
'use client';

import { useSharedCounter } from '@/hooks/useSharedCounter';

const DynamicCounterBanner = () => {
  const count = useSharedCounter();

  return (
    <div className="bg-sky-500/20 border border-sky-400/30 rounded-lg py-3 px-6 max-w-max mx-auto shadow-lg shadow-sky-500/10 transform hover:scale-[1.02] transition-transform duration-300 animate-brilho-pulse">
      <p className="text-white text-base sm:text-lg font-sans text-center">
        <span className="sm:inline">Mais de{' '}</span>
        <span className="text-yellow-300 font-bold text-lg sm:text-xl tracking-wide mx-0.5">
          {new Intl.NumberFormat('pt-BR').format(count)}
        </span>{' '}
        <span className="hidden sm:inline">professores já adquiriram o Gêniozinho em Ação!</span>
        <span className="sm:hidden">
          professores já 
          <br />
          adquiriram o Gêniozinho em Ação!
        </span>
      </p>
    </div>
  );
};

export default DynamicCounterBanner;
