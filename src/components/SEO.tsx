import { useEffect } from 'react';
import { SITE_CONFIG } from '../data/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
}

export default function SEO({
  title,
  description,
  canonicalPath = '',
  ogImage = '/logo-green-bg.png',
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;
  const metaDescription = description || SITE_CONFIG.mission;
  const canonicalUrl = `${SITE_CONFIG.domain}${canonicalPath}`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Update meta description
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (!metaDescEl) {
      metaDescEl = document.createElement('meta');
      metaDescEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescEl);
    }
    metaDescEl.setAttribute('content', metaDescription);

    // Update canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    const updateOgTag = (property: string, content: string) => {
      let ogEl = document.querySelector(`meta[property="${property}"]`);
      if (!ogEl) {
        ogEl = document.createElement('meta');
        ogEl.setAttribute('property', property);
        document.head.appendChild(ogEl);
      }
      ogEl.setAttribute('content', content);
    };

    updateOgTag('og:title', fullTitle);
    updateOgTag('og:description', metaDescription);
    updateOgTag('og:url', canonicalUrl);
    updateOgTag('og:image', `${SITE_CONFIG.domain}${ogImage}`);
  }, [fullTitle, metaDescription, canonicalUrl, ogImage]);

  return null;
}
