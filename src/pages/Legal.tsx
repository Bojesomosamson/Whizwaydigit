import React from 'react';
import { useRouter } from '../context/RouterContext';

export default function Legal() {
  const { state } = useRouter();

  let pageTitle = 'Legal Policies';
  let bodyContent = <p>Policy content is preparing...</p>;

  // PRIVACY POLICY
  if (state.page === 'privacy-policy') {
    pageTitle = 'Privacy Policy';
    bodyContent = (
      <div className="space-y-6">
        <p>Last updated: June 28, 2026</p>
        <p>At WhizwayDigit, operated by founder Samson B, we take the security and privacy of your data seriously. This Privacy Policy documents how we collect, store, and utilize details provided through our contact checkouts and call scheduling calendars.</p>
        
        <h3 className="font-display font-bold text-base text-brand-secondary pt-3">1. Data Collection</h3>
        <p>We only collect the minimum corporate data required to scope your web project, specifically name, work email, phone number, and current website URL. If you choose to attach reference Figma layouts or scope documents, they are stored securely and never shared with third-party networks.</p>

        <h3 className="font-display font-bold text-base text-brand-secondary pt-3">2. Transactional Security</h3>
        <p>We do not store financial details on this server. Custom project budgets are settled using direct international wire transfers or secure cryptocurrency corridors.</p>
      </div>
    );
  }

  // TERMS & CONDITIONS
  if (state.page === 'terms-conditions') {
    pageTitle = 'Terms & Conditions';
    bodyContent = (
      <div className="space-y-6">
        <p>Last updated: June 28, 2026</p>
        <p>Welcome to WhizwayDigit. By visiting our agency website or scheduling video consultations, you agree to comply with the following contractual guidelines.</p>

        <h3 className="font-display font-bold text-base text-brand-secondary pt-3">1. Custom Quote Scopes</h3>
        <p>All project budgets and timelines proposed during our free consultation calls are completely custom and governed by separate Milestone Agreements signed prior to initiating core visual code cycles.</p>

        <h3 className="font-display font-bold text-base text-brand-secondary pt-3">2. Source Code Ownership</h3>
        <p>Upon final settlement of the agreed milestone figures, WhizwayDigit transfers 100% sovereign ownership of the compiled code directories and Figma layouts to the client.</p>
      </div>
    );
  }

  // REFUND POLICY
  if (state.page === 'refund-policy') {
    pageTitle = 'Refund Policy';
    bodyContent = (
      <div className="space-y-6">
        <p>Last updated: June 28, 2026</p>
        <p>Because WhizwayDigit offers bespoke, premium digital consulting and custom engineering services (rather than pre-packaged subscription files), our refund parameters operate as follows:</p>

        <h3 className="font-display font-bold text-base text-brand-secondary pt-3">1. Design Stage</h3>
        <p>If you choose to cancel a project before we translate Figma components into live React or Liquid theme code, we issue partial refunds of deposit figures, prorated by creative hours utilized during discovery.</p>

        <h3 className="font-display font-bold text-base text-brand-secondary pt-3">2. Live Code Cycles</h3>
        <p>Once we initiate live custom development and test speed metrics on staging environments, all payments are final as they cover active technical engineering hours.</p>
      </div>
    );
  }

  // COOKIES POLICY
  if (state.page === 'cookies-policy') {
    pageTitle = 'Cookies Policy';
    bodyContent = (
      <div className="space-y-6">
        <p>Last updated: June 28, 2026</p>
        <p>WhizwayDigit utilizes basic cookies to enhance your navigation experience and monitor site speeds.</p>

        <h3 className="font-display font-bold text-base text-brand-secondary pt-3">1. Technical Cookies</h3>
        <p>We use essential cookies to maintain your state during search requests on our blogs and coordinate booking calendar selections.</p>

        <h3 className="font-display font-bold text-base text-brand-secondary pt-3">2. Privacy Settings</h3>
        <p>You can choose to disable analytical tracking via your browser preferences without losing access to any core services on our platform.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-fade-in text-slate-800 text-left space-y-8">
      
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">WHIZWAYDIGIT LEGAL DISCLOSURES</span>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-brand-secondary tracking-tight mt-1.5">{pageTitle}</h1>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
        {bodyContent}
      </div>

    </div>
  );
}
