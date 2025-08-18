'use client';

import { useState, useEffect, useCallback } from 'react';

// Loja simples para o estado do contador compartilhado
let countState = 10563; // Valor inicial
const listeners = new Set<(count: number) => void>();

const setCount = (updater: (prev: number) => number) => {
  countState = updater(countState);
  listeners.forEach((listener) => listener(countState));
};

export const incrementCount = () => {
    setCount(prev => prev + 1);
};


export function useSharedCounter() {
  const [count, setLocalCount] = useState(countState);

  useEffect(() => {
    const listener = (newCount: number) => {
      setLocalCount(newCount);
    };
    
    listeners.add(listener);
    // Sincroniza com o estado atual na montagem
    setLocalCount(countState); 

    return () => {
      listeners.delete(listener);
    };
  }, []);

  return count;
}
