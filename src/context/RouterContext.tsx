import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { RouterState, PageName } from '../types';

interface RouterContextType {
  state: RouterState;
  navigate: (path: string) => void;
  goBack: () => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function parsePath(pathname: string): RouterState {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  
  if (cleanPath === '/' || cleanPath === '') {
    return { page: 'home' };
  }
  if (cleanPath === '/about') {
    return { page: 'about' };
  }
  if (cleanPath === '/services') {
    return { page: 'services' };
  }
  if (cleanPath.startsWith('/services/')) {
    const slug = cleanPath.split('/services/')[1];
    return { page: 'services', serviceSlug: slug };
  }
  if (cleanPath === '/portfolio') {
    return { page: 'portfolio' };
  }
  if (cleanPath === '/case-studies') {
    return { page: 'case-studies' };
  }
  if (cleanPath.startsWith('/case-studies/')) {
    const slug = cleanPath.split('/case-studies/')[1];
    return { page: 'case-studies', projectSlug: slug };
  }
  if (cleanPath === '/reviews') {
    return { page: 'reviews' };
  }
  if (cleanPath === '/pricing') {
    return { page: 'pricing' };
  }
  if (cleanPath === '/blog') {
    return { page: 'blog' };
  }
  if (cleanPath.startsWith('/blog/')) {
    const slug = cleanPath.split('/blog/')[1];
    return { page: 'blog', blogSlug: slug };
  }
  if (cleanPath === '/resources') {
    return { page: 'resources' };
  }
  if (cleanPath === '/faq') {
    return { page: 'faq' };
  }
  if (cleanPath === '/contact') {
    return { page: 'contact' };
  }
  if (cleanPath === '/client-portal') {
    return { page: 'client-portal' };
  }
  if (cleanPath === '/book-a-call') {
    return { page: 'book-a-call' };
  }
  if (cleanPath === '/privacy-policy') {
    return { page: 'privacy-policy' };
  }
  if (cleanPath === '/terms-conditions') {
    return { page: 'terms-conditions' };
  }
  if (cleanPath === '/refund-policy') {
    return { page: 'refund-policy' };
  }
  if (cleanPath === '/cookies-policy') {
    return { page: 'cookies-policy' };
  }
  if (cleanPath === '/thank-you') {
    return { page: 'thank-you' };
  }

  return { page: '404' };
}

export function formatStateToPath(state: RouterState): string {
  switch (state.page) {
    case 'home':
      return '/';
    case 'about':
      return '/about';
    case 'services':
      return state.serviceSlug ? `/services/${state.serviceSlug}` : '/services';
    case 'portfolio':
      return '/portfolio';
    case 'case-studies':
      return state.projectSlug ? `/case-studies/${state.projectSlug}` : '/case-studies';
    case 'reviews':
      return '/reviews';
    case 'pricing':
      return '/pricing';
    case 'blog':
      return state.blogSlug ? `/blog/${state.blogSlug}` : '/blog';
    case 'resources':
      return '/resources';
    case 'faq':
      return '/faq';
    case 'contact':
      return '/contact';
    case 'client-portal':
      return '/client-portal';
    case 'book-a-call':
      return '/book-a-call';
    case 'privacy-policy':
      return '/privacy-policy';
    case 'terms-conditions':
      return '/terms-conditions';
    case 'refund-policy':
      return '/refund-policy';
    case 'cookies-policy':
      return '/cookies-policy';
    case 'thank-you':
      return '/thank-you';
    default:
      return '/404';
  }
}

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  // Use hash-based or history-based routing depending on preference.
  // In our sandboxed iFrame, standard pathname history works beautifully
  // if we intercept clicks and handle history popstate events.
  const [state, setState] = useState<RouterState>(() => {
    const pathname = window.location.pathname;
    return parsePath(pathname);
  });

  useEffect(() => {
    const handlePopState = () => {
      setState(parsePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    // Intercept fully qualified external URLs, do not route them.
    if (path.startsWith('http') && !path.includes(window.location.host)) {
      window.open(path, '_blank', 'noopener,noreferrer');
      return;
    }

    const stateObj = parsePath(path);
    setState(stateObj);
    window.history.pushState(null, '', path);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const goBack = () => {
    window.history.back();
  };

  // Dynamically update document title, meta headers and schema layouts for SEO
  useEffect(() => {
    let title = 'WhizwayDigit - High-Converting Web & Shopify Solutions';
    let description = 'Helping Businesses Grow With High-Converting Websites, Shopify Stores & Digital Solutions by Samson B.';

    if (state.page === 'home') {
      title = 'WhizwayDigit | High-Converting Websites & Shopify Stores';
    } else if (state.page === 'about') {
      title = 'Our Story | WhizwayDigit Digital Agency';
      description = 'Founded by Samson B, WhizwayDigit crafts premium high-converting sites and Shopify systems.';
    } else if (state.page === 'services') {
      if (state.serviceSlug) {
        // Find service name
        const serviceName = state.serviceSlug
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        title = `${serviceName} Services | WhizwayDigit`;
        description = `Get premium, high-converting custom ${serviceName} solutions built by Samson B and his team of experts.`;
      } else {
        title = 'Our Services | Custom Web & Shopify Development';
      }
    } else if (state.page === 'portfolio') {
      title = 'Premium Portfolio | WhizwayDigit Agency';
      description = 'Explore our portfolio of award-winning websites, custom SaaS panels, and high-converting checkouts.';
    } else if (state.page === 'case-studies') {
      if (state.projectSlug) {
        const projectName = state.projectSlug
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        title = `Case Study: ${projectName} | WhizwayDigit`;
        description = `Deep dive into the problem, bespoke solution, and outstanding conversion metrics of our ${projectName} project.`;
      } else {
        title = 'Case Studies | WhizwayDigit Impact Studies';
      }
    } else if (state.page === 'reviews') {
      title = 'Client Reviews & Success Stories | WhizwayDigit';
    } else if (state.page === 'pricing') {
      title = 'Custom Pricing & Quotes | WhizwayDigit';
    } else if (state.page === 'blog') {
      if (state.blogSlug) {
        const blogTitle = state.blogSlug
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        title = `${blogTitle} | WhizwayDigit Blog`;
      } else {
        title = 'Industry Insights & Web Strategy Blog | WhizwayDigit';
      }
    } else if (state.page === 'resources') {
      title = 'Free Web Checklists & Design Templates | WhizwayDigit';
    } else if (state.page === 'faq') {
      title = 'Frequently Asked Questions | WhizwayDigit Support';
    } else if (state.page === 'contact') {
      title = 'Start Your Project | Contact WhizwayDigit';
    } else if (state.page === 'client-portal') {
      title = 'Secure Client Workspace Portal | WhizwayDigit';
    } else if (state.page === 'book-a-call') {
      title = 'Book a Free Consultation Call | WhizwayDigit';
    } else if (state.page === 'privacy-policy') {
      title = 'Privacy Policy | WhizwayDigit';
    } else if (state.page === 'terms-conditions') {
      title = 'Terms & Conditions | WhizwayDigit';
    } else if (state.page === 'refund-policy') {
      title = 'Refund Policy | WhizwayDigit';
    } else if (state.page === 'cookies-policy') {
      title = 'Cookies Policy | WhizwayDigit';
    } else if (state.page === 'thank-you') {
      title = 'Thank You for Your Inquiry | WhizwayDigit';
    } else if (state.page === '404') {
      title = 'Page Not Found | WhizwayDigit';
    }

    document.title = title;

    // Simulate update of SEO Meta Tags (useful for screen readers and client headers)
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }

    // Dynamic schema JSON-LD injection
    const existingSchema = document.getElementById('seo-schema');
    if (existingSchema) {
      existingSchema.remove();
    }
    const schemaScript = document.createElement('script');
    schemaScript.id = 'seo-schema';
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'WhizwayDigit',
      'image': 'https://whizwaydigit-logo.png',
      'url': window.location.href,
      'telephone': '+1-000-000-0000',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Delaware',
        'addressCountry': 'US'
      },
      'founder': {
        '@type': 'Person',
        'name': 'Samson B'
      },
      'description': description
    });
    document.head.appendChild(schemaScript);
  }, [state]);

  // Intercept all document clicks on internal links to enable seamless transitions
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.getAttribute('href')?.startsWith('/')) {
        const href = anchor.getAttribute('href');
        if (href) {
          e.preventDefault();
          navigate(href);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <RouterContext.Provider value={{ state, navigate, goBack }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
