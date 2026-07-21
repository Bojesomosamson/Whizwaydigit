import { BlogPostItem, ResourceItem } from '../types';

export const blogData: BlogPostItem[] = [
  {
    id: 'b1',
    title: 'The Anatomy of a High-Converting Shopify Store in 2026',
    slug: 'anatomy-high-converting-shopify-store',
    category: 'insights',
    excerpt: 'Unpack the critical layout changes, checkout micro-interactions, and mobile navigation principles driving millions in sales.',
    content: `Building a successful Shopify store in 2026 requires throwing out traditional theme mentalities. Impatient mobile shoppers expect instant interactions, immediate product answers, and frictionless checkout flows.

### 1. The Mobile-First Cartesian Slideout
Standard checkout systems force users through several page loads, increasing cart abandonment rates. A premium experience utilizes an interactive, slide-out cart drawer that recalculates prices instantly. Adding product recommendations directly within this drawer lets you capitalize on instant purchase intent, lifting Average Order Values (AOV) by up to 15%.

### 2. High-Contrast Typographical Hierarchy
Your product titles and prices must be immediately readable on outdoor mobile screen viewports. We pair clear display typography (like Poppins) with high-legibility body styles (like Inter) to guide user focus toward active buy buttons.

### 3. Progressive Asset Loading
Every heavy image, unoptimized video, or unneeded analytics tracker degrades your Core Web Vitals. Compressing images into next-gen formats (WebP/AVIF) and lazy-loading non-critical resources guarantees sub-second page loads, boosting ad quality and organic rankings.`,
    author: {
      name: 'Samson B',
      role: 'Founder & Head of Product',
      avatarUrl: 'SB'
    },
    date: 'June 28, 2026',
    readTime: '6 min read',
    tags: ['Shopify', 'Conversion Rate', 'E-Commerce', 'Web Design'],
    imageColor: 'from-blue-600 to-indigo-900'
  },
  {
    id: 'b2',
    title: 'How Core Web Vitals Direct Your Google Ad Costs',
    slug: 'core-web-vitals-google-ad-costs',
    category: 'marketing',
    excerpt: 'Why having a slow website isn\'t just annoying your visitors—it\'s directly ballooning your marketing budget.',
    content: `Many digital businesses overlook the deep connection between website speed and advertising costs. Google Ads relies heavily on Quality Score to determine your ad cost-per-click (CPC) and position on the page.

### The Landing Page Quality Metric
A significant factor in Quality Score is your "Landing Page Experience". If your website loads slow, has shifts in layout (CLS), or suffers from high delays before interaction (INP), Google's algorithm flags it as an inferior user experience.

To compensate, the search system inflates your target cost-per-click, forcing you to pay up to 400% more than competitors for the exact same high-intent search query.

### The True Cost of Lag
By optimizing your server-side paint speeds and achieving a 95+ Lighthouse mobile score, you do not just lower your bounce rate—you immediately improve your ad quality scores, leading to cheaper CPC bids and higher conversions.`,
    author: {
      name: 'Samson B',
      role: 'Founder & Head of Product',
      avatarUrl: 'SB'
    },
    date: 'June 15, 2026',
    readTime: '5 min read',
    tags: ['SEO', 'Google Ads', 'Page Speed', 'Performance'],
    imageColor: 'from-slate-900 to-indigo-950'
  },
  {
    id: 'b3',
    title: 'Why We Banned Legacy Page Builders for Enterprise Sites',
    slug: 'banned-legacy-page-builders-enterprise',
    category: 'tech',
    excerpt: 'How bloatware plugins are compromising your site security, tanking your speeds, and frustrating editing teams.',
    content: `For years, drag-and-drop plugins like Elementor, Divi, and WPBakery were the standard for fast website production. However, in an era where mobile speed is a vital Google ranking factor, their structural costs have become too high to justify.

### 1. The Redundant Code Bloat
Legacy page builders wrap simple elements in dozens of nested div tags, loading heavy scripts across pages even when they aren't in use. This bloat increases Largest Contentful Paint (LCP) times and causes severe mobile interaction lag.

### 2. Custom Gutenberg Blocks
To solve this, we construct websites from scratch using the modern WordPress Block Editor (Gutenberg) and native custom React blocks. This grants site administrators complete visual edit power without compromising code performance or security.`,
    author: {
      name: 'Samson B',
      role: 'Founder & Head of Product',
      avatarUrl: 'SB'
    },
    date: 'May 24, 2026',
    readTime: '7 min read',
    tags: ['WordPress', 'Web Dev', 'Clean Code', 'Gutenberg'],
    imageColor: 'from-indigo-950 to-slate-900'
  }
];

export const resourcesData: ResourceItem[] = [
  {
    id: 'r1',
    title: 'The 2026 Enterprise Web Audit Checklist',
    slug: 'enterprise-web-audit-checklist-2026',
    description: 'A comprehensive 74-point interactive checklist to audit your landing pages for core speed, conversion, and security vulnerabilities.',
    category: 'checklist',
    downloadCount: '1,420',
    fileSize: '3.4 MB',
    iconName: 'ClipboardCheck'
  },
  {
    id: 'r2',
    title: 'High-Converting E-Commerce Layout Template',
    slug: 'high-converting-ecommerce-layout-template',
    description: 'A premium Figma UX wireframe for product pages, cart drawers, and checkouts, proven to lift mobile conversions by 30%+.',
    category: 'template',
    downloadCount: '890',
    fileSize: '12.8 MB',
    iconName: 'Figma'
  },
  {
    id: 'r3',
    title: 'The Ultimate Web Speed Optimization Guide',
    slug: 'ultimate-web-speed-optimization-guide',
    description: 'A step-by-step PDF manual on compressing assets, refactoring scripts, and configuring Cloudflare edge servers.',
    category: 'guide',
    downloadCount: '2,150',
    fileSize: '8.2 MB',
    iconName: 'BookOpen'
  }
];
