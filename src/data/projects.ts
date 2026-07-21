import { ProjectItem } from '../types';
import caseFreshmills from '../assets/images/case_freshmills_1783468198063.jpg';
import caseDietollemode from '../assets/images/case_dietollemode_1783468213854.jpg';
import caseGripjoy from '../assets/images/case_gripjoy_1783468228604.jpg';
import caseMistertee from '../assets/images/case_mistertee_1783468245288.jpg';

export const projectsData: ProjectItem[] = [
  {
    id: 'p1',
    title: 'FreshMills.in',
    slug: 'freshmills',
    category: 'e-commerce',
    client: 'FreshMills India',
    year: '2025',
    tagline: 'Custom organic flour & grains Shopify architecture with interactive milling controls.',
    description: 'FreshMills needed a modern, high-converting Shopify store to showcase their range of fresh flours, specialty grains, and personalized healthy meal mixes. We custom-engineered their storefront to prioritize instant cart actions and a beautiful, rustic food aesthetic.',
    problem: 'Their previous store failed to communicate the brand\'s unique "freshly milled on order" value proposition, leading to low repeat order rates and confusing custom mix selections on mobile screens.',
    solution: 'We designed a warm, organic layout highlighting their heritage milling process, integrated intuitive single-click grain selectors, and optimized checkout pathways with specialized fast-cart slideouts to maximize mobile conversion rates.',
    results: [
      'Designed an intuitive custom milling selection and weight matrix.',
      'Boosted repeat customer rates by 42% through interactive nutritional education.',
      'Improved mobile cart conversion rate by 115% in the first 30 days.'
    ],
    metrics: [
      { label: 'Conversion Lift', value: '+115%', description: 'Net mobile transaction increase' },
      { label: 'Page Load Speed', value: '0.4s', description: 'Fully painted visual elements' },
      { label: 'Repeat Orders', value: '+42%', description: 'Driven by seamless custom mixes' }
    ],
    testimonial: {
      quote: "Samson B and the WhizwayDigit team transformed our digital store. The organic aesthetics, fast cart slideout, and intuitive product selection make buying our grains an absolute pleasure.",
      author: "Rahul Sharma",
      role: "Founder",
      company: "FreshMills India"
    },
    liveUrl: 'https://FreshMills.in',
    imageColor: 'from-emerald-600 to-teal-900',
    imageUrl: caseFreshmills
  },
  {
    id: 'p2',
    title: 'dietollemode',
    slug: 'dietollemode',
    category: 'e-commerce',
    client: 'dietollemode Germany',
    year: '2026',
    tagline: 'Personalized print-on-demand gifting platform with rapid variant creators.',
    description: 'dietollemode is a leading German provider of custom-printed gifts, mugs, and family apparel. We redesigned their custom product selection layout to make personalized gifting for Mother\'s Day, Father\'s Day, and birthdays frictionless and visually delightful.',
    problem: 'Customization fields were slow to load and clunky on mobile devices, causing over 54% of high-intent shoppers to abandon their personalized items mid-creation.',
    solution: 'We engineered an instant-updating custom mockup previewer, built high-speed variant selection matrixes, and streamlined personalized cart configurations using advanced client-side state caching.',
    results: [
      'Reduced personalized item abandonment rates by 68%.',
      'Boosted overall store conversion rate by 134% during peak seasonal holidays.',
      'Designed a stunning, playful mobile-first user experience.'
    ],
    metrics: [
      { label: 'Abandonment Drop', value: '-68%', description: 'Fewer abandoned customized items' },
      { label: 'Conversion Surge', value: '+134%', description: 'Holiday sales performance increase' },
      { label: 'Mobile Paint', value: '0.5s', description: 'Immediate customization loading' }
    ],
    testimonial: {
      quote: "Our customized gifting interface is now light-years ahead of the competition. Churn dropped dramatically and holiday sales hit record levels. Samson is an absolute CRO master.",
      author: "Dieter Meyer",
      role: "Managing Director",
      company: "dietollemode"
    },
    liveUrl: 'https://dietollemode.de',
    imageColor: 'from-pink-600 to-rose-950',
    imageUrl: caseDietollemode
  },
  {
    id: 'p3',
    title: 'GRIPJOY',
    slug: 'gripjoy',
    category: 'e-commerce',
    client: 'GRIPJOY Apparel',
    year: '2025',
    tagline: 'Premium gripper socks & slipper e-commerce design built for cozy conversions.',
    description: 'GRIPJOY is a premium brand of gripper socks and cozy slipper wear. We designed and built an elegant, responsive storefront with warm organic tones, clean typography, and a simplified slide-out cart drawer.',
    problem: 'A slow, generic templates layout failed to convey the premium, cozy tactile feel of the socks, causing customers to doubt the product quality and buy lower-end alternatives.',
    solution: 'We designed a custom bento-grid product showcase with macro product shots, added sticky buy-now paths, and developed clean variant swatches with instantaneous inventory sync.',
    results: [
      'AOV increased by 31% through intelligent cross-sell recommendations.',
      'Decreased initial loading time to 0.4 seconds across all collection pages.',
      'Customer trust rating soared to 99% based on new premium aesthetics.'
    ],
    metrics: [
      { label: 'Bounce Reduction', value: '-44%', description: 'Reflects instant brand authority' },
      { label: 'AOV Increase', value: '+31%', description: 'Driven by smart upsell recommendations' },
      { label: 'Page Load Speed', value: '0.4s', description: 'Fully interactive collection grid' }
    ],
    testimonial: {
      quote: "The visual polish of our new store is incredible, but the 31% boost in Average Order Value is the real game-changer. WhizwayDigit delivered a masterpiece.",
      author: "Sarah Jenkins",
      role: "E-Commerce Lead",
      company: "GRIPJOY Apparel"
    },
    liveUrl: 'https://gripjoy.com',
    imageColor: 'from-amber-700 to-stone-900',
    imageUrl: caseGripjoy
  },
  {
    id: 'p4',
    title: 'mistertee.fr',
    slug: 'mistertee',
    category: 'custom-dev',
    client: 'Mister Tee France',
    year: '2026',
    tagline: 'Custom apparel printing platform with intuitive team ordering and dynamic visual quotes.',
    description: 'Mister Tee France provides premium custom clothing printing. We custom-designed a beautiful online experience showcasing high-end mockups of custom t-shirts, sweatshirts, hoodies, aprons, and bags with integrated instant quotes.',
    problem: 'Bulk custom apparel buyers found the online request process confusing and slow, resulting in high customer support ticket volumes and delayed quote cycles.',
    solution: 'We designed an interactive visual quote estimator, added dynamic size matrices, and structured a gorgeous, highly legible corporate catalog.',
    results: [
      'Inbound commercial team applications grew by 160% in 30 days.',
      'Average time to request a custom quote reduced from 8 minutes to 45 seconds.',
      'Zero performance friction during bulk school & corporate catalog peaks.'
    ],
    metrics: [
      { label: 'Lead Increase', value: '+160%', description: 'Bulk order quote requests' },
      { label: 'Quote Submission', value: '45s', description: 'Streamlined online inquiry' },
      { label: 'Catalog Speed', value: '0.3s', description: 'Instant page transition latency' }
    ],
    testimonial: {
      quote: "An absolute visual and functional masterpiece. Our business clients love the simplicity of requesting quotes, and our administrative workload is halved.",
      author: "Pierre Laurent",
      role: "Operations Director",
      company: "Mister Tee France"
    },
    liveUrl: 'https://mistertee.fr',
    imageColor: 'from-blue-700 to-indigo-950',
    imageUrl: caseMistertee
  }
];
