
'use client';

import { useEffect } from 'react';

interface UTMHandlerProps {
  checkoutDomain: string;
}

export default function UTMHandler({ checkoutDomain }: UTMHandlerProps) {
  useEffect(() => {
    // This code runs only on the client-side after the component mounts
    const currentParams = window.location.search;

    if (currentParams) {
      const allLinks = document.querySelectorAll('a');
      
      allLinks.forEach(link => {
        try {
          const linkUrl = new URL(link.href, window.location.origin);
          
          if (linkUrl.hostname.includes(checkoutDomain)) {
            // Append the current page's search parameters to the checkout link
            const newUrl = new URL(link.href);
            const existingParams = new URLSearchParams(newUrl.search);
            const newParams = new URLSearchParams(currentParams);

            newParams.forEach((value, key) => {
              existingParams.set(key, value);
            });
            
            newUrl.search = existingParams.toString();
            link.href = newUrl.toString();
          }
        } catch (error) {
          // Ignore invalid URLs
        }
      });
    }
  }, [checkoutDomain]);

  return null; // This component doesn't render anything visible
}
