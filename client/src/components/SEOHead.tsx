import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function SEOHead({ title, description, keywords, ogImage, canonical }: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    updateMetaTag("description", description);
    
    // Update keywords if provided
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }
    
    // Update Open Graph tags
    updateMetaProperty("og:title", title);
    updateMetaProperty("og:description", description);
    
    if (ogImage) {
      updateMetaProperty("og:image", ogImage);
    }
    
    // Update canonical URL if provided
    if (canonical) {
      updateCanonicalLink(canonical);
    }
    
    // Update structured data for local business
    updateStructuredData();
  }, [title, description, keywords, ogImage, canonical]);

  return null; // This component doesn't render anything
}

function updateMetaTag(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function updateMetaProperty(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function updateCanonicalLink(href: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function updateStructuredData() {
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Coastline Spray Foam Solutions",
    "description": "Professional spray foam insulation services in Central Florida",
    "url": "https://coastlinesprayfoam.com",
    "telephone": "(321) 652-7465",
    "email": "info@coastlinesprayfoam.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "areaServed": [
      "Cocoa, FL",
      "Titusville, FL",
      "Melbourne, FL",
      "Rockledge, FL",
      "Merritt Island, FL",
      "Palm Bay, FL"
    ],
    "serviceType": [
      "Spray Foam Insulation",
      "Residential Insulation",
      "Commercial Insulation",
      "Attic Insulation",
      "Energy Efficiency Services"
    ],
    "openingHours": [
      "Mo-Fr 07:00-18:00",
      "Sa 08:00-16:00"
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}
