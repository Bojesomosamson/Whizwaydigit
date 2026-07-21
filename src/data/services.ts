import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 's1',
    name: 'Website Design',
    slug: 'website-design',
    iconName: 'Layout',
    tagline: 'Stunning, custom-designed websites crafted to turn visitors into loyal clients.',
    briefDescription: 'Award-winning bespoke design tailored strictly to your brand identity, complete with elegant layouts, modern typography, and immersive interactions.',
    fullDescription: 'At WhizwayDigit, we believe your website should be your hardest working employee. We design premium websites from the ground up, avoiding off-the-shelf templates. Our bespoke custom layouts are visually jaw-dropping and meticulously engineered to load fast and drive conversions. We prioritize high-contrast typography, balanced negative space, and smooth, responsive layouts that work perfectly on everything from ultra-wide screens to mobile phones.',
    benefits: [
      { title: '100% Bespoke Design', description: 'Zero templates. Every pixel is crafted specifically to position your brand as a market leader.' },
      { title: 'Optimized for Conversion', description: 'Intentional visual hierarchies and strategic CTAs designed to guide users into your sales pipeline.' },
      { title: 'Impeccable Performance', description: 'Coded with clean standards so your site loads lightning fast, keeping visitors engaged.' }
    ],
    process: [
      { step: 1, title: 'Discovery & Moodboarding', description: 'We align on your creative vision, brand tone, competitive positioning, and UX requirements.' },
      { step: 2, title: 'Figma Prototyping', description: 'We build comprehensive desktop & mobile layouts, iterating with you until the layout is perfect.' },
      { step: 3, title: 'Premium Development', description: 'We translate the design into highly responsive, semantic code with clean transitions.' },
      { step: 4, title: 'Quality Assurance', description: 'Rigorous cross-browser, responsive, and performance testing before the grand reveal.' }
    ],
    faq: [
      { question: 'Do you use premade templates?', answer: 'Never. Every website design we produce starts as a blank canvas in Figma and is developed custom to guarantee an authentic brand representation and optimal performance.' },
      { question: 'How long does a custom web design project take?', answer: 'Most custom website designs take between 4 to 8 weeks depending on complexity, the number of pages, and review iterations.' }
    ],
    relatedSlugs: ['website-redesign', 'ui-ux-design', 'landing-pages']
  },
  {
    id: 's2',
    name: 'Website Redesign',
    slug: 'website-redesign',
    iconName: 'RefreshCw',
    tagline: 'Modernize your outdated web presence to recapture lost conversions.',
    briefDescription: 'Breathe new life into your current platform with updated styles, improved speed, and optimized checkout elements.',
    fullDescription: 'If your current website feels outdated or struggles to convert traffic, a comprehensive redesign is the solution. We audit your existing traffic patterns and completely rebuild your user experience. We retain your SEO authority while deploying a stunning, clean, glassmorphic layout that scales beautifully, loads in milliseconds, and establishes immediate credibility with your audience.',
    benefits: [
      { title: 'Retained SEO Value', description: 'We map your URLs and redirects carefully to ensure your search rankings remain secure or improve.' },
      { title: 'Modern UX/UI Upgrade', description: 'Banish clunky navigation and muddy palettes. Introduce elegant Inter & Poppins typography.' },
      { title: 'Modern Core Web Vitals', description: 'Rebuilding outdated legacy code with modern CSS frameworks for maximum mobile speed.' }
    ],
    process: [
      { step: 1, title: 'Existing Site Audit', description: 'We analyze current heatmaps, page speeds, drop-off points, and keyword rankings.' },
      { step: 2, title: 'Information Architecture', description: 'We streamline the navigation structure and user journey map to optimize interactions.' },
      { step: 3, title: 'Modern UI Application', description: 'We build an elegant, high-contrast, modern visual skin aligned with high-end agency trends.' },
      { step: 4, title: 'Seamless Transition', description: 'We coordinate redirects and DNS configuration to launch without a second of downtime.' }
    ],
    faq: [
      { question: 'Will my current website go offline during the redesign?', answer: 'No. We build and test your new website on a secure staging server. Your current site remains fully functional until the day we swap them over.' },
      { question: 'Can we keep our existing website content?', answer: 'Absolutely. We will audit, clean, and format your existing copy and media so it shines in the new layout.' }
    ],
    relatedSlugs: ['website-design', 'speed-optimization', 'cro']
  },
  {
    id: 's3',
    name: 'Shopify Development',
    slug: 'shopify-development',
    iconName: 'ShoppingBag',
    tagline: 'Scale your sales with custom-coded, premium Shopify stores.',
    briefDescription: 'High-converting custom store configurations, specialized app integrations, and custom Liquid development.',
    fullDescription: 'Shopify is a powerhouse, but standard themes limit your brand identity. We craft tailored Shopify experiences utilizing bespoke Shopify Liquid templates or Headless setups. We optimize product pages for maximum basket size, build frictionless checkout journeys, integrate seamless analytics, and style everything to mirror a high-fashion, high-end ecommerce environment.',
    benefits: [
      { title: 'Custom Liquid Coding', description: 'Custom sections and blocks that let your team edit content easily without breaking the gorgeous design.' },
      { title: 'Optimized Checkout Flow', description: 'Designed to eliminate cart abandonment and simplify complex product variant selections.' },
      { title: 'Lightning Fast Load Speeds', description: 'Highly compressed assets and optimized scripts to score 90+ on Lighthouse mobile.' }
    ],
    process: [
      { step: 1, title: 'Ecommerce Strategy', description: 'Defining customer personas, collection hierarchies, shipping logic, and app ecosystem requirements.' },
      { step: 2, title: 'Custom Interface Mockups', description: 'Designing high-fidelity landing pages, cart drawers, and product pages in Figma.' },
      { step: 3, title: 'Liquid/Theme Engineering', description: 'Writing clean, clean-weight theme code and configuring native Shopify sections.' },
      { step: 4, title: 'Launch & Systems Training', description: 'We walk your team through managing inventory, fulfilling orders, and modifying content.' }
    ],
    faq: [
      { question: 'Can you migrate my existing store to Shopify?', answer: 'Yes, we regularly migrate active stores from WooCommerce, Magento, and custom platforms to Shopify, preserving all customer data, orders, and product catalogs.' },
      { question: 'Do you build custom Shopify Apps?', answer: 'We specialize in custom theme development and API integrations, but we can also build private Shopify Apps to handle unique backend requirements.' }
    ],
    relatedSlugs: ['woocommerce', 'ecommerce-development', 'speed-optimization']
  },
  {
    id: 's4',
    name: 'WordPress Development',
    slug: 'wordpress-development',
    iconName: 'FileCode',
    tagline: 'Enterprise-grade, robust, and custom-coded WordPress setups.',
    briefDescription: 'Secure, lightning-fast WordPress themes built from scratch with blocks for total editorial control.',
    fullDescription: 'Ditch bloated, slow builders like Elementor or Divi. We develop blazing fast WordPress sites using the modern Block Editor (Gutenberg) with completely custom native blocks. This grants your administrative team complete control to publish articles, adjust pages, and update visual imagery without bloat, vulnerability risks, or slowdowns.',
    benefits: [
      { title: 'Bloat-Free Gutenberg Blocks', description: 'Custom, custom-styled native blocks. Your editors edit securely while keeping layouts precise.' },
      { title: 'Hardened Security Standards', description: 'Advanced staging, secure file permissions, and optimized configurations to ward off malware.' },
      { title: 'Scalable Architecture', description: 'Perfect for content-heavy news sites, corporate portals, or multisite setups.' }
    ],
    process: [
      { step: 1, title: 'Taxonomy & Structure Plan', description: 'Establishing custom post types, custom fields, and content hierarchies.' },
      { step: 2, title: 'Tailored Block Design', description: 'Mocking block assemblies in Figma so they are perfectly brand-consistent.' },
      { step: 3, title: 'Theme Development', description: 'Developing a feather-light theme from scratch using PHP, React, and Tailwind CSS.' },
      { step: 4, title: 'Content Loading & Handover', description: 'Migrating legacy content and training authors on Gutenberg Block layouts.' }
    ],
    faq: [
      { question: 'Will my site require a lot of plugins?', answer: 'We build core features directly into the theme, reducing dependencies. We only use highly rated, essential plugins to keep your site secure and fast.' },
      { question: 'Can I easily edit my site content myself?', answer: 'Yes! Custom native block development allows you to drag-and-drop, edit text, and change images effortlessly without writing code.' }
    ],
    relatedSlugs: ['woocommerce', 'website-design', 'speed-optimization']
  },
  {
    id: 's5',
    name: 'WooCommerce',
    slug: 'woocommerce',
    iconName: 'Layers',
    tagline: 'Leverage the absolute flexibility of open-source WooCommerce.',
    briefDescription: 'Bespoke WooCommerce stores engineered for infinite scalability, custom checkouts, and seamless subscription logic.',
    fullDescription: 'WooCommerce provides unlimited freedom to mold your business logic. We design and develop custom WooCommerce portals, incorporating sophisticated product filtering, dynamic wholesale pricing tiers, multi-currency features, and membership setups. We wrap everything in a breathtaking glassmorphic shell that operates as smoothly as a SaaS interface.',
    benefits: [
      { title: 'Infinite Customization', description: 'Tailor custom checkouts, automated invoice rules, and complex user memberships.' },
      { title: 'Cost-Effective Scale', description: 'No monthly platform licensing costs. You own your data and code completely.' },
      { title: 'High-End Design Skin', description: 'We throw out clunky WooCommerce styles to create smooth cart slideouts and fast checkouts.' }
    ],
    process: [
      { step: 1, title: 'System Mapping', description: 'Establishing payment gateways, custom tax conditions, and ERP or shipping sync configurations.' },
      { step: 2, title: 'Custom Store Layouts', description: 'Designing interactive shop listings, dynamic filters, and custom checkouts in Figma.' },
      { step: 3, title: 'WooCommerce Core Coding', description: 'Building the theme, hooking custom actions, and ensuring lightning-fast database queries.' },
      { step: 4, title: 'Payment Gateways & QA', description: 'Simulating actual transactions to verify cart rules, coupons, and secure checkouts.' }
    ],
    faq: [
      { question: 'Is WooCommerce safe for enterprise stores?', answer: 'When configured correctly with dedicated hosting, optimized databases, and clean code, WooCommerce scales comfortably to millions of dollars in transaction volume.' },
      { question: 'How is WooCommerce different from Shopify?', answer: 'Shopify is a hosted, closed-ecosystem SaaS platform, whereas WooCommerce is self-hosted and open-source, offering deeper custom control and zero platform transaction fees.' }
    ],
    relatedSlugs: ['wordpress-development', 'shopify-development', 'ecommerce-development']
  },
  {
    id: 's6',
    name: 'Landing Pages',
    slug: 'landing-pages',
    iconName: 'FileText',
    tagline: 'Hyper-focused campaign pages engineered for paid traffic success.',
    briefDescription: 'Single-topic, high-persuasion conversion machines optimized for Google Ads, Meta Ads, and email marketing campaigns.',
    fullDescription: 'Driving paid traffic to a generic homepage is a waste of budget. We engineer hyper-persuasive landing pages centered around a single clear outcome. We focus on bulletproof headings, high-contrast CTA buttons, visual trust indicators, sticky mobile conversion bars, and rapid load times. Each landing page is custom-built with meticulous attention to conversion triggers, ensuring you get the absolute highest return on your ad spend.',
    benefits: [
      { title: 'A/B Test Ready Structures', description: 'Clean layout patterns designed to hook into testing utilities easily for rapid iteration.' },
      { title: 'Sticky Call-To-Actions', description: 'Floating conversion elements designed specifically for mobile swipe and tap layouts.' },
      { title: 'Sub-Second Loading', description: 'Minimal external libraries and optimized layouts, guaranteeing your bounce rate drops to a minimum.' }
    ],
    process: [
      { step: 1, title: 'Audience & Offer Strategy', description: 'Deconstructing the customer mindset, analyzing pain points, and tuning your primary offer hook.' },
      { step: 2, title: 'Persuasive Copywriting', description: 'Crafting compelling, high-contrast typography headlines that command immediate attention.' },
      { step: 3, title: 'High-Impact Design', description: 'Applying a focused bento-grid or single-column layout framing your primary signup or purchase goal.' },
      { step: 4, title: 'Analytics & Tracking QA', description: 'Configuring Meta Pixel, GTM, and custom event tracking so your dashboard works perfectly.' }
    ],
    faq: [
      { question: 'Can you link landing pages to our CRM?', answer: 'Yes, we integrate with Hubspot, Salesforce, Mailchimp, ActiveCampaign, Zapier, and any API-supported CRM.' },
      { question: 'Do you write the copywriting for the landing pages?', answer: 'Absolutely. We provide strategic conversion copywriting alongside our designs to ensure tone and visuals align seamlessly.' }
    ],
    relatedSlugs: ['sales-funnel-design', 'cro', 'website-design']
  },
  {
    id: 's7',
    name: 'Ecommerce Development',
    slug: 'ecommerce-development',
    iconName: 'Globe',
    tagline: 'Bespoke online commerce platforms built for ultimate scale.',
    briefDescription: 'Enterprise-grade headless ecommerce and bespoke online storefronts with unparalleled design flexibilities.',
    fullDescription: 'For massive product catalogs or highly unique checkout flows, standardized solutions fall short. We build premium headless e-commerce structures combining React/Next.js frontends with robust headless commerce systems. This setup enables unmatched speeds, impenetrable database security, and complete aesthetic control over your purchase ecosystem.',
    benefits: [
      { title: 'Headless Speeds', description: 'Instantly load pages like a static document, eliminating cart delay and friction.' },
      { title: 'Multi-Storefront Management', description: 'Power multiple brand fronts, localized sites, or international shops from a single dashboard.' },
      { title: 'Ultimate Creative Liberty', description: 'Say goodbye to layout constraints. Build custom three-dimensional showcases or custom wizards.' }
    ],
    process: [
      { step: 1, title: 'Architecture Blueprinting', description: 'Deciding between headless, Shopify, or monolithic databases based on inventory and multi-region goals.' },
      { step: 2, title: 'User Experience Mapping', description: 'Drafting frictionless, high-speed browse-to-buy flows for desktop and mobile.' },
      { step: 3, title: 'Frontend & API Assembly', description: 'Coding the blazing-fast frontend and wiring APIs securely via serverless routes.' },
      { step: 4, title: 'Load & Security Testing', description: 'Rigorous simulation of heavy traffic bursts and checkout security audits.' }
    ],
    faq: [
      { question: 'What is Headless Commerce?', answer: 'Headless commerce separates the frontend presentation layer (the head) from the backend ecommerce functions (checkout, database), communicating via APIs for unmatched performance.' },
      { question: 'Which payment systems can you integrate?', answer: 'We integrate with global systems including Stripe, PayPal, cryptocurrency (USDT/BTC), bank APIs, Apple Pay, and Google Pay.' }
    ],
    relatedSlugs: ['shopify-development', 'woocommerce', 'speed-optimization']
  },
  {
    id: 's8',
    name: 'Website Speed Optimization',
    slug: 'speed-optimization',
    iconName: 'Zap',
    tagline: 'Banish slow load times and watch your conversions soar.',
    briefDescription: 'We audit and rewrite backend scripts, optimize image assets, and clean code to achieve 95+ Core Web Vitals.',
    fullDescription: 'Every 100ms of lag costs up to 7% in lost conversions. Slow websites also suffer in Google rankings. We perform deep clinical optimization of your website. We compress high-resolution image assets, strip out duplicate or heavy CSS/JS, optimize database queries, implement advanced caching patterns, and configure CDN distributions. We turn bloated legacy websites into speed demons.',
    benefits: [
      { title: '95+ Mobile PageSpeed Score', description: 'We target Core Web Vitals to elevate user happiness and boost your search rankings.' },
      { title: 'Reduced Bounce Rates', description: 'Instant page painting means impatient mobile visitors stay on your site.' },
      { title: 'Lower Cost Per Acquisition', description: 'Search engines reward faster landing pages with higher ad qualities and cheaper bids.' }
    ],
    process: [
      { step: 1, title: 'Diagnostic Profiling', description: 'We perform a deep audit of network requests, unused scripts, database queries, and server delays.' },
      { step: 2, title: 'Asset Modernization', description: 'Converting heavy images to WebP/AVIF, lazy loading scripts, and utilizing vector layouts.' },
      { step: 3, title: 'Code Refactoring', description: 'Minifying files, removing unused CSS modules, deferring non-essential scripts.' },
      { step: 4, title: 'CDN & Caching Setup', description: 'Deploying edge caching on Cloudflare and tuning your server headers.' }
    ],
    faq: [
      { question: 'Can you speed up WordPress and Shopify?', answer: 'Yes. We specialize in speed tuning for both platforms, cleaning up redundant plugins, optimizing heavy app scripts, and tuning assets.' },
      { question: 'What is a good page load time?', answer: 'We aim for under 1.5 seconds for the Largest Contentful Paint (LCP) on mobile networks, which is the standard for Google\'s "Good" Core Web Vitals.' }
    ],
    relatedSlugs: ['website-redesign', 'seo', 'website-audit']
  },
  {
    id: 's9',
    name: 'SEO (Search Engine Optimization)',
    slug: 'seo',
    iconName: 'TrendingUp',
    tagline: 'Claim the top spot on search engines and secure passive organic leads.',
    briefDescription: 'Technical SEO audits, high-intent keyword mapping, premium semantic content creation, and secure authoritative backlinking.',
    fullDescription: 'Paid ads generate instant traffic, but the moment you stop paying, the leads dry up. Organic SEO builds a durable moat around your business. We craft a comprehensive search strategy focusing on high-commercial-intent keywords. We tune your technical foundation, author high-value educational landing pages, and coordinate authoritative links to establish dominant industry rankings.',
    benefits: [
      { title: 'Sustained Free Traffic', description: 'Generate high-quality business leads month after month without paying for advertising clicks.' },
      { title: 'Dominant Industry Authority', description: 'Become the trusted name your target demographic reads when researching options.' },
      { title: 'Structured Data Rich Snippets', description: 'Applying schema markups to display ratings, reviews, FAQs, and pricing directly in search results.' }
    ],
    process: [
      { step: 1, title: 'Keyword & Competitor Intelligence', description: 'We locate search terms with low difficulty but high commercial conversion value.' },
      { step: 2, title: 'Technical Optimization', description: 'Configuring clean sitemaps, semantic tags, schema markups, and clean crawl hierarchies.' },
      { step: 3, title: 'Content Engine Deployment', description: 'Authoring clear, comprehensive answers to user queries with clean typography layouts.' },
      { step: 4, title: 'Authority & PR Outreach', description: 'Securing editorial backlinks from reputable business portals and industry hubs.' }
    ],
    faq: [
      { question: 'How long does SEO take to show results?', answer: 'Typically, SEO takes 3 to 6 months to start yielding significant ranking improvements, as search engines require time to re-crawl and verify authority.' },
      { question: 'Do you guarantee #1 rankings?', answer: 'No honest agency can guarantee a specific ranking spot as search algorithms change constantly, but we guarantee premium execution that consistently boosts target placements and organic conversions.' }
    ],
    relatedSlugs: ['speed-optimization', 'website-audit', 'blog']
  },
  {
    id: 's10',
    name: 'Conversion Rate Optimization (CRO)',
    slug: 'cro',
    iconName: 'Target',
    tagline: 'Extract maximum profit from your existing web traffic.',
    briefDescription: 'A/B testing, user session recording audits, heatmap tracking, and checkout psychological redesigns.',
    fullDescription: 'Increasing your web traffic is expensive. Double your conversion rate instead, and you double your sales for free. We audit your landing pages, cart steps, and lead forms. We find friction points using heatmaps and video sessions, then deploy calculated layout, typography, and visual tweaks to increase transactions and form completions.',
    benefits: [
      { title: 'Maximize ROI on Current Traffic', description: 'Scale your business revenue without spending another dollar on ads or SEO.' },
      { title: 'Deep Audience Heatmapping', description: 'See exactly where users click, scroll, hover, and drop off in real-time.' },
      { title: 'Frictionless Purchase Flow', description: 'Simplifying input forms, streamlining fields, and making mobile buttons easy to reach.' }
    ],
    process: [
      { step: 1, title: 'Heuristic Review', description: 'Our UX specialists analyze visual clutter, CTA contrast, and form obstacles.' },
      { step: 2, title: 'Telemetry Implementation', description: 'Setting up heatmap maps and screen record triggers to monitor user activity.' },
      { step: 3, title: 'A/B Test Design', description: 'Drafting variations in headings, button colors, and page hierarchies to run against current formats.' },
      { step: 4, title: 'Statistical Analysis & Deploy', description: 'Deploying the winning layout variants natively to lock in permanent conversion uplifts.' }
    ],
    faq: [
      { question: 'What is a typical conversion rate increase?', answer: 'Depending on the starting point, optimization campaigns frequently yield uplifts between 15% and 80% in completed transactions or signups.' },
      { question: 'How much traffic do we need for CRO?', answer: 'A/B testing yields results faster with higher traffic (10k+ visits/month), but smaller sites still benefit from our expert heuristic audits.' }
    ],
    relatedSlugs: ['landing-pages', 'sales-funnel-design', 'website-audit']
  },
  {
    id: 's11',
    name: 'Website Maintenance',
    slug: 'website-maintenance',
    iconName: 'ShieldAlert',
    tagline: 'Keep your web system running in peak condition, 24/7.',
    briefDescription: 'Scheduled plugin and core updates, manual cloud backups, instant malware scans, and ongoing content support.',
    fullDescription: 'A broken website is a branding emergency. Our comprehensive maintenance plan acts as your full-stack technical insurance. We manage server updates, deploy weekly system patches, back up files offsite, monitor malware around the clock, and perform instant emergency fixes if an update ever breaks a layout. Sleep soundly knowing your digital portal is in professional hands.',
    benefits: [
      { title: '24/7 Automated Uptime Checks', description: 'We get paged immediately if your site ever blinks offline, often resolving it before you notice.' },
      { title: 'Offsite Cloud Backups', description: 'Daily secure storage of your database and code files so we can restore instantly.' },
      { title: 'Content Support Hours Included', description: 'Need minor text edits, blog loading, or graphic updates? It is covered in our monthly hours.' }
    ],
    process: [
      { step: 1, title: 'Site Inspection & Setup', description: 'We catalog all plugins, server access credentials, third-party APIs, and staging parameters.' },
      { step: 2, title: 'Automated Shield Deployment', description: 'Installing background malware scanners, file integrity checks, and speed monitors.' },
      { step: 3, title: 'Weekly Maintenance Cycles', description: 'Applying safe updates on a staging server first, then deploying seamlessly to production.' },
      { step: 4, title: 'Monthly Health Summaries', description: 'We send a clean report detailing backups made, updates performed, and speed scores.' }
    ],
    faq: [
      { question: 'Do you offer emergency assistance?', answer: 'Yes, our premium maintenance clients have access to priority emergency support channels for instant resolution of critical issues.' },
      { question: 'Can you maintain sites built by another agency?', answer: 'Absolutely. We will perform a complete onboarding audit first to verify security and code health before taking over management.' }
    ],
    relatedSlugs: ['speed-optimization', 'website-audit', 'website-migration']
  },
  {
    id: 's12',
    name: 'Website Migration',
    slug: 'website-migration',
    iconName: 'ArrowRightLeft',
    tagline: 'Zero-downtime website migrations done with clinical precision.',
    briefDescription: 'Moving hosts, transferring domain registrars, or exporting database files safely without losing details.',
    fullDescription: 'Migrating servers can be terrifying. A single misstep can result in lost emails, database corruption, or broken sitemaps. We coordinate surgical server migrations, mapping database rows, transferring files, re-establishing secure email routing, setting up DNS structures, and testing security parameters so your site remains online throughout.',
    benefits: [
      { title: 'Zero Site Downtime', description: 'Your users will navigate seamlessly, totally unaware of the server transition.' },
      { title: 'Safe Database Mapping', description: 'Every single line of transaction, customer, post, and file is verified post-move.' },
      { title: 'DNS & SSL Configuration', description: 'Configuring modern Cloudflare structures and SSL certificates for bulletproof encryption.' }
    ],
    process: [
      { step: 1, title: 'Environment Survey', description: 'We scan source and target host spaces, PHP configurations, database formats, and sizes.' },
      { step: 2, title: 'Pre-Flight Database Backups', description: 'Capturing static snapshots of all code assets and data states before initiating steps.' },
      { step: 3, title: 'Migration Execution', description: 'Syncing files and databases to the new hosting platform and configuring the domain root.' },
      { step: 4, title: 'Post-Migration Audit', description: 'Comprehensive link check, form testing, speed validation, and clean cutover.' }
    ],
    faq: [
      { question: 'Will we lose our emails during migration?', answer: 'No. We configure your MX records and mail routing in advance to ensure continuous email delivery.' },
      { question: 'Is a migration risky for our SEO rankings?', answer: 'When URLs and content remain the same, server moves have zero negative impact on SEO, as long as DNS and server performance are fast.' }
    ],
    relatedSlugs: ['website-maintenance', 'website-audit', 'speed-optimization']
  },
  {
    id: 's13',
    name: 'Website Audit',
    slug: 'website-audit',
    iconName: 'ClipboardCheck',
    tagline: 'Uncover the hidden technical bottlenecks capping your business growth.',
    briefDescription: 'Deep performance, SEO, mobile UX, security vulnerability, and conversion optimization reports.',
    fullDescription: 'Our Web Audit is a diagnostic health report for your business. We peek under the hood to find why your site loads slow, where your checkout loses customers, and which SEO errors are blocking Google. We provide a clean, visual roadmap detailing exactly what is broken and how to fix it.',
    benefits: [
      { title: 'Immediate Strategic Clarity', description: 'Stop guessing. We provide concrete, prioritized fixes based on analytical data.' },
      { title: 'Security Risk Detection', description: 'Uncovering outdated plugins, backdoors, or broken certificates before malicious actors do.' },
      { title: 'UX Friction Mapping', description: 'Spotting mobile scaling bugs and confusing navigation items that frustrate users.' }
    ],
    process: [
      { step: 1, title: 'Telemetry Scan', description: 'We run your URL through multiple specialized crawling and vulnerability diagnostic engines.' },
      { step: 2, title: 'Heuristic Review', description: 'Our specialists manually inspect the site across multiple device screens.' },
      { step: 3, title: 'Bottleneck Prioritization', description: 'We sort findings into urgent (critical security/speed issues) and growth suggestions.' },
      { step: 4, title: 'Interactive Video Walkthrough', description: 'We record a clean screen walkthrough explaining our findings and solutions in plain English.' }
    ],
    faq: [
      { question: 'How long does an audit take?', answer: 'We deliver your comprehensive audit report and video walkthrough within 3 to 5 business days.' },
      { question: 'What do we need to provide?', answer: 'We just need your website URL to perform a basic audit. For deeper audits, access to Google Analytics or your CMS dashboard is helpful but optional.' }
    ],
    relatedSlugs: ['speed-optimization', 'seo', 'cro']
  },
  {
    id: 's14',
    name: 'UI/UX Design',
    slug: 'ui-ux-design',
    iconName: 'Fingerprint',
    tagline: 'Intuitive design systems mapped around human behaviors.',
    briefDescription: 'High-fidelity Figma mockups, interactive visual prototypes, custom typography selection, and consistent component systems.',
    fullDescription: 'Beautiful design isn\'t just art; it is how it works. We design software portals, complex apps, and mobile-friendly storefronts with a deep understanding of cognitive psychology. We create detailed component systems, layout maps, and clickable interactive prototypes that streamline user action and look outstanding.',
    benefits: [
      { title: 'Figma Component Systems', description: 'Reusable design systems that make future product expansion visual and simple.' },
      { title: 'Immersive Prototypes', description: 'Interactive desktop & mobile mockups that let you feel the flow before coding.' },
      { title: 'Enhanced User Retention', description: 'Frictionless pathways that guide users naturally, increasing platform stickiness.' }
    ],
    process: [
      { step: 1, title: 'Persona & User Journey Strategy', description: 'We draft structural user pathways to map actions and target outcomes.' },
      { step: 2, title: 'Wireframing & Layout Structure', description: 'Low-fidelity layout plans focusing strictly on structural hierarchy and content placement.' },
      { step: 3, title: 'Visual Theme Styling', description: 'Applying rich colors, modern typography, glassmorphic elements, and shadows.' },
      { step: 4, title: 'Interactive Handover', description: 'Packaging the complete Figma system with assets, typography tokens, and responsive logic.' }
    ],
    faq: [
      { question: 'Do you design for both web and mobile?', answer: 'Yes. Every UI/UX layout we produce is crafted for responsive device views, with mobile-first layouts standard for all consumer applications.' },
      { question: 'Can our in-house developers use your design?', answer: 'Yes. We build clean, modular Figma systems complete with spacing tokens, font weights, and exportable assets ready for any engineering team.' }
    ],
    relatedSlugs: ['website-design', 'website-redesign', 'landing-pages']
  },
  {
    id: 's15',
    name: 'Sales Funnel Design',
    slug: 'sales-funnel-design',
    iconName: 'Activity',
    tagline: 'Map and build automated pathways to turn cold clicks into premium clients.',
    briefDescription: 'Complete funnel architectures including opt-ins, high-converting checkout sequences, and automated follow-up pages.',
    fullDescription: 'A sales funnel is the roadmap that guides prospects from curiosity to purchase. We construct high-converting funnel architectures. We design opt-in lead magnets, core sales pages, multi-step checkouts, visual up-sells, down-sells, and clean registration receipt boards. We wrap these steps in premium glassmorphic sections styled to command premium market pricing.',
    benefits: [
      { title: 'Higher Average Order Values', description: 'Strategically timed up-sells and checkout order-bumps to maximize immediate sales.' },
      { title: 'Predictable Lead Inflow', description: 'Consistent automated sequences that capture details and warm prospects 24/7.' },
      { title: 'Highly Focused Journey', description: 'Removing distracting navigation links so users focus strictly on your primary offer.' }
    ],
    process: [
      { step: 1, title: 'Funnel Mapping', description: 'We lay out the full step sequence, from initial traffic hook to email follow-ups.' },
      { step: 2, title: 'Copywriting & Structural Wireframes', description: 'Drafting headlines, pricing grids, bullet points, and social proof layouts.' },
      { step: 3, title: 'Visual Styling & Build', description: 'Transforming wireframes into stunning high-contrast interactive pages.' },
      { step: 4, title: 'API Integrations & Tests', description: 'Connecting payment gateways, email marketing tags, and testing checkout parameters.' }
    ],
    faq: [
      { question: 'What tools do you build funnels on?', answer: 'We build funnels on custom React/Next.js systems, WordPress/WooCommerce, Shopify, and can integrate with platforms like ClickFunnels or GoHighLevel based on needs.' },
      { question: 'Do we need an email marketing system?', answer: 'Yes, funnels work best when integrated with an email CRM like ActiveCampaign, Klaviyo, or Mailchimp to handle automated post-opt-in communications.' }
    ],
    relatedSlugs: ['landing-pages', 'cro', 'website-design']
  }
];
