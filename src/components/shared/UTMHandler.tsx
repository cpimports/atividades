'use client';

import { useEffect } from 'react';

interface UTMHandlerProps {
  checkoutDomain: string;
}

export default function UTMHandler({ checkoutDomain }: UTMHandlerProps) {
  useEffect(() => {
    // This logic runs only on the client side.

    // 1. Capture and store UTMs from the current URL on page load.
    const currentParams = new URLSearchParams(window.location.search);
    if (currentParams.toString()) {
      localStorage.setItem('utms', currentParams.toString());
    }

    // 2. Retrieve stored UTMs.
    const storedUtms = localStorage.getItem('utms');

    if (storedUtms) {
      // 3. Find all links pointing to the checkout domain.
      const checkoutLinks = document.querySelectorAll(`a[href*='${checkoutDomain}']`);

      // 4. Append stored UTMs to each checkout link.
      checkoutLinks.forEach(link => {
        // We cast to HTMLAnchorElement to access the 'href' property directly
        const anchor = link as HTMLAnchorElement;
        try {
          // Use a URL object to safely manipulate the href
          const url = new URL(anchor.href);
          
          // Only modify if the hostname matches and it hasn't been modified already
          if (url.hostname.includes(checkoutDomain) && !url.search.includes(storedUtms)) {
              // Append using '?' or '&' correctly
              anchor.href += (anchor.href.includes('?') ? '&' : '?') + storedUtms;
          }
        } catch (error) {
          // Ignore invalid URLs
        }
      });
    }
  }, [checkoutDomain]);

  return null; // This component does not render anything.
}
