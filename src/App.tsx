/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import CaseStudies from './pages/CaseStudies';
import Reviews from './pages/Reviews';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import BookACall from './pages/BookACall';
import Legal from './pages/Legal';
import ThankYou from './pages/ThankYou';
import ClientPortal from './pages/ClientPortal';
import NotFound from './pages/NotFound';

function AppContent() {
  const { state } = useRouter();

  const renderPage = () => {
    switch (state.page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'portfolio':
        return <Portfolio />;
      case 'case-studies':
        return <CaseStudies />;
      case 'reviews':
        return <Reviews />;
      case 'pricing':
        return <Pricing />;
      case 'blog':
        return <Blog />;
      case 'resources':
        return <Resources />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'client-portal':
        return <ClientPortal />;
      case 'book-a-call':
        return <BookACall />;
      case 'privacy-policy':
      case 'terms-conditions':
      case 'refund-policy':
      case 'cookies-policy':
        return <Legal />;
      case 'thank-you':
        return <ThankYou />;
      case '404':
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-brand-primary/20 selection:text-brand-secondary">
      {/* Brand Preloader */}
      <Preloader />

      {/* Sticky Header Mega Menu */}
      <Header />

      {/* Main Content View with transition class */}
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>

      {/* Primary Footer Grid */}
      <Footer />

      {/* Floating Communication Widget */}
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

