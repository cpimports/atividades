'use client';

import { useEffect } from 'react';

interface UTMHandlerProps {
  checkoutDomain: string;
}

/**
 * Traduz os parâmetros de UTM que contêm '|' para parâmetros separados.
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
      newParams.set(key, value);
    }
  }

  return newParams;
}


export default function UTMHandler({ checkoutDomain }: UTMHandlerProps) {
  useEffect(() => {
    // This logic runs only on the client side.

    // 1. Capture and store UTMs from the current URL on page load.
    const currentParams = new URLSearchParams(window.location.search);
    if (currentParams.toString()) {
      // Traduz os parâmetros antes de salvar
      const translatedParams = translateUtmParams(currentParams);
      localStorage.setItem('utms', translatedParams.toString());
    }

    // 2. Retrieve stored UTMs.
    const storedUtms = localStorage.getItem('utms');

    if (storedUtms) {
      // 3. Find all links pointing to the checkout domain.
      const checkoutLinks = document.querySelectorAll(`a[href*='${checkoutDomain}']`);

      // 4. Append stored UTMs to each checkout link.
      checkoutLinks.forEach(link => {
        const anchor = link as HTMLAnchorElement;
        try {
          // Use a URL object to safely manipulate the href
          const url = new URL(anchor.href);
          
          // Evita adicionar os mesmos parâmetros várias vezes
          if (!anchor.search.includes('utm_source') && !anchor.search.includes('campaign_id')) {
            url.search += (url.search ? '&' : '') + storedUtms;
            anchor.href = url.toString();
          }

        } catch (error) {
          // Ignore invalid URLs
          console.error("Failed to process link:", anchor.href, error);
        }
      });
    }
  }, [checkoutDomain]);

  return null; // This component does not render anything.
}
