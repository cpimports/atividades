'use client';

import { useEffect } from 'react';

interface UTMHandlerProps {
  checkoutDomain: string;
}

/**
 * Traduz os parâmetros de UTM que contêm '|' para parâmetros separados,
 * conforme o padrão esperado pelo Facebook/Cakto.
 * Ex: utm_campaign=nome|id -> campaign_name=nome&campaign_id=id
 */
function translateUtmParams(params: URLSearchParams): URLSearchParams {
  const newParams = new URLSearchParams();

  for (const [key, value] of params.entries()) {
    if (key === 'utm_campaign' && value.includes('|')) {
      const [name, id] = value.split('|');
      newParams.set('campaign_name', name);
      newParams.set('campaign_id', id);
    } else if (key === 'utm_medium' && value.includes('|')) {
      const [name, id] = value.split('|');
      newParams.set('adset_name', name);
      newParams.set('adset_id', id);
    } else if (key === 'utm_content' && value.includes('|')) {
      const [name, id] = value.split('|');
      newParams.set('ad_name', name);
      newParams.set('ad_id', id);
    } else {
      // Passa os outros parâmetros (como utm_source e utm_term) normalmente
      newParams.set(key, value);
    }
  }

  return newParams;
}


export default function UTMHandler({ checkoutDomain }: UTMHandlerProps) {
  useEffect(() => {
    // Este efeito é executado apenas no cliente, após a montagem do componente.
    try {
      // 1. Captura os parâmetros da URL atual na primeira visita.
      const currentParams = new URLSearchParams(window.location.search);
      
      // Apenas atualiza o localStorage se houver parâmetros na URL,
      // para não apagar os UTMs salvos durante a navegação interna.
      if (currentParams.has('utm_source')) {
        const translatedParams = translateUtmParams(currentParams);
        localStorage.setItem('utms', translatedParams.toString());
      }

      // 2. Recupera os UTMs salvos (sejam da visita atual ou anterior).
      const storedUtms = localStorage.getItem('utms');

      if (storedUtms) {
        // 3. Encontra todos os links que apontam para o domínio de checkout.
        const checkoutLinks = document.querySelectorAll<HTMLAnchorElement>(`a[href*='${checkoutDomain}']`);

        // 4. Anexa os UTMs salvos e traduzidos a cada link de checkout.
        checkoutLinks.forEach(link => {
          // Evita adicionar os mesmos parâmetros várias vezes se o usuário navegar
          // e o script rodar de novo. A verificação é simples e eficaz.
          if (link.href.includes('utm_source=') || link.href.includes('campaign_id=')) {
            return;
          }

          try {
            const url = new URL(link.href);
            // Adiciona os parâmetros. Se a URL já tiver `?`, `URLSearchParams` lida com `&`.
            const finalParams = new URLSearchParams(storedUtms);
            finalParams.forEach((value, key) => {
                url.searchParams.append(key, value);
            });
            link.href = url.toString();
          } catch (error) {
            console.error("Falha ao processar o link de checkout:", link.href, error);
          }
        });
      }
    } catch (error) {
      console.error("Erro no UTMHandler:", error);
    }
  }, [checkoutDomain]); // A dependência garante que o hook não execute desnecessariamente.

  return null; // Este componente não renderiza nada na tela.
}
