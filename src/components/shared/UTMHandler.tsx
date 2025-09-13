'use client';

import { useEffect } from 'react';

interface UTMHandlerProps {
  checkoutDomain: string;
}

export default function UTMHandler({ checkoutDomain }: UTMHandlerProps) {
  useEffect(() => {
    // This code runs only on the client-side after the component mounts
    const currentUrlParams = window.location.search;

    if (currentUrlParams) {
      const allLinks = document.querySelectorAll('a');
      
      allLinks.forEach(link => {
        try {
          const linkUrl = new URL(link.href, window.location.origin);
          
          // Check if the link's hostname is the checkout domain
          if (linkUrl.hostname.includes(checkoutDomain)) {
            // Append the current page's search parameters to the checkout link
            // This is a more direct way to ensure all params are passed.
            if (link.href.includes('?')) {
                // If the link already has params, append with '&'
                link.href = `${link.href}${currentUrlParams.replace('?', '&')}`;
            } else {
                // Otherwise, append with '?'
                link.href = `${link.href}${currentUrlParams}`;
            }
          }
        } catch (error) {
          // Ignore invalid URLs, which can happen with hrefs like "tel:..."
        }
      });
    }
  }, [checkoutDomain]);

  return null; // This component doesn't render anything visible
}
