'use client';

import { useEffect } from 'react';

interface UTMHandlerProps {
  checkoutDomain: string;
}

/**
 * Traduz os parâmetros de UTM que contêm '|' para parâmetros separados,
 * conforme o padrão esperado pelo Facebook/Cakto.
 * Ex: utm_campaign=nome|id -> campaign_name=nome&campaign_id=id
 * 
 * ATUALIZAÇÃO: A plataforma não estava reconhecendo os parâmetros traduzidos.
 * A nova lógica passa os parâmetros UTM originais, apenas garantindo que
 * o localStorage seja usado para persistência durante a navegação.
 */
function translateAndStoreUtms() {
  try {
    const currentParams = new URLSearchParams(window.location.search);

    // Se a URL atual tiver parâmetros, atualiza o localStorage.
    // Isso evita que o localStorage seja limpo em navegações internas.
    if (currentParams.toString()) {
      localStorage.setItem('utms', currentParams.toString());
    }
  } catch (error) {
    console.error("Erro ao capturar ou salvar UTMs:", error);
  }
}

/**
 * Anexa os UTMs armazenados a todos os links de checkout na página.
 */
function attachUtmsToCheckoutLinks(checkoutDomain: string) {
  try {
    const storedUtms = localStorage.getItem('utms');

    if (storedUtms) {
      const checkoutLinks = document.querySelectorAll<HTMLAnchorElement>(`a[href*='${checkoutDomain}']`);

      checkoutLinks.forEach(link => {
        // Evita adicionar parâmetros duplicados em re-renderizações
        if (link.href.includes('utm_source')) {
          return;
        }

        const separator = link.href.includes("?") ? "&" : "?";
        link.href = `${link.href}${separator}${storedUtms}`;
      });
    }
  } catch (error) {
    console.error("Erro ao anexar UTMs aos links:", error);
  }
}


export default function UTMHandler({ checkoutDomain }: UTMHandlerProps) {
  useEffect(() => {
    // Este efeito é executado apenas no cliente.

    // 1. Captura e armazena os UTMs na primeira carga ou quando eles mudam.
    translateAndStoreUtms();

    // 2. Anexa os UTMs salvos aos links.
    // Usamos um MutationObserver para garantir que os links sejam atualizados
    // mesmo que eles sejam adicionados à página dinamicamente depois do carregamento inicial.
    const observer = new MutationObserver(() => {
      attachUtmsToCheckoutLinks(checkoutDomain);
    });

    // Anexa imediatamente na montagem do componente.
    attachUtmsToCheckoutLinks(checkoutDomain);

    // Começa a observar o corpo do documento por mudanças.
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Limpa o observador quando o componente é desmontado.
    return () => {
      observer.disconnect();
    };

  }, [checkoutDomain]); // A dependência garante que o hook se adapte se o domínio mudar.

  return null; // Este componente não renderiza nada na tela.
}
