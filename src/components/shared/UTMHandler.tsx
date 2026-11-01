'use client';

import { useEffect } from 'react';

interface UTMHandlerProps {
  checkoutDomains: string[];
}

const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'src',
  'sck',
  'subid',
  'fbclid',
  'gclid'
];

function setCookie(name: string, value: string, days = 30) {
  try {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/;SameSite=Lax`;
  } catch (_) {}
}

function getCookie(name: string): string | null {
  try {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  } catch (_) {
    return null;
  }
}

/**
 * Captura os parâmetros UTM da URL e armazena no localStorage e cookies para persistência total.
 */
function translateAndStoreUtms() {
  try {
    const currentParams = new URLSearchParams(window.location.search);
    let hasUtm = false;

    UTM_PARAMS.forEach(param => {
      if (currentParams.has(param)) {
        hasUtm = true;
      }
    });

    if (hasUtm || currentParams.toString()) {
      const queryString = currentParams.toString();
      localStorage.setItem('utms', queryString);
      setCookie('utmify_utms', queryString);
    }
  } catch (error) {
    console.error("Erro ao capturar ou salvar UTMs:", error);
  }
}

function getStoredUtms(): string | null {
  try {
    return localStorage.getItem('utms') || getCookie('utmify_utms');
  } catch (_) {
    return null;
  }
}

/**
 * Anexa os UTMs armazenados a todos os links de checkout que correspondam aos domínios configurados.
 */
function attachUtmsToCheckoutLinks(checkoutDomains: string[]) {
  try {
    const storedUtms = getStoredUtms();
    if (!storedUtms) return;

    checkoutDomains.forEach(domain => {
      const checkoutLinks = document.querySelectorAll<HTMLAnchorElement>(`a[href*='${domain}']`);

      checkoutLinks.forEach(link => {
        try {
          const currentUrl = new URL(link.href, window.location.origin);
          const storedParams = new URLSearchParams(storedUtms);

          storedParams.forEach((value, key) => {
            if (!currentUrl.searchParams.has(key)) {
              currentUrl.searchParams.set(key, value);
            }
          });

          link.href = currentUrl.toString();
        } catch (_) {
          if (!link.href.includes('utm_source')) {
            const separator = link.href.includes("?") ? "&" : "?";
            link.href = `${link.href}${separator}${storedUtms}`;
          }
        }
      });
    });
  } catch (error) {
    console.error("Erro ao anexar UTMs aos links:", error);
  }
}

export default function UTMHandler({ checkoutDomains }: UTMHandlerProps) {
  useEffect(() => {
    // 1. Captura e armazena os UTMs
    translateAndStoreUtms();

    // 2. Anexa os UTMs salvos aos links e observa mudanças dinâmicas na página
    const observer = new MutationObserver(() => {
      attachUtmsToCheckoutLinks(checkoutDomains);
    });

    attachUtmsToCheckoutLinks(checkoutDomains);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [checkoutDomains]);

  return null;
}
