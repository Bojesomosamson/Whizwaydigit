export interface CloudinaryPortfolioItem {
  id: string;
  url: string;
  title: string;
  category: 'e-commerce' | 'web-design' | 'cro' | 'custom-dev';
}

export interface CroProofItem {
  id: string;
  url: string;
  title: string;
  description: string;
}

export interface ClientVideoTestimonial {
  id: string;
  url: string;
  clientName: string;
  role: string;
  description: string;
}

export interface FreelanceReviewScreenshot {
  id: string;
  url: string;
  title: string;
  platform: 'upwork' | 'fiverr' | 'gmb';
  clientName?: string;
  rating?: number;
}

export interface SalesProofItem {
  id: string;
  url: string;
  title: string;
  description: string;
}

export const founderImages = {
  avatar1: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636295/Untitled_design_3_ckt2uc.jpg',
  avatar2: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636736/ff87bc9e-2b0e-49f7-ba4c-fbca57b7934e_p5glte.jpg'
};

export const cloudinaryPortfolioData: CloudinaryPortfolioItem[] = [
  {
    id: 'cp1',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637250/packagefreeshop_store_oxttvs.jpg',
    title: 'Package Free Shop Store Redesign',
    category: 'e-commerce'
  },
  {
    id: 'cp2',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637237/helmboots_store_ujjxzh.jpg',
    title: 'Helm Boots Shopify Store',
    category: 'e-commerce'
  },
  {
    id: 'cp3',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637215/thereformation_store_isq2nv.jpg',
    title: 'The Reformation Shopify Store',
    category: 'e-commerce'
  },
  {
    id: 'cp4',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637213/bombas_store_fgblex.jpg',
    title: 'Bombas Premium Slipper Store',
    category: 'e-commerce'
  },
  {
    id: 'cp5',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637213/patagonia_rkazrv.jpg',
    title: 'Patagonia Outerwear Store',
    category: 'e-commerce'
  },
  {
    id: 'cp6',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637212/nutritionist_mockup_10_w0llv9.png',
    title: 'Nutritionist Premium Platform',
    category: 'web-design'
  },
  {
    id: 'cp7',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637205/Books_eCommerce_dba3u4.png',
    title: 'Books E-Commerce Platform',
    category: 'e-commerce'
  },
  {
    id: 'cp8',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637199/fashion_eCommerce_2_rnyhpb.png',
    title: 'Fashion E-Commerce Redesign',
    category: 'e-commerce'
  },
  {
    id: 'cp9',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637056/toay11_dk4yuw.jpg',
    title: 'Toay Shopify Apparel',
    category: 'e-commerce'
  },
  {
    id: 'cp10',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637190/omorovicza.co.uk_store_sy7tjt.jpg',
    title: 'Omorovicza UK Cosmetics',
    category: 'e-commerce'
  },
  {
    id: 'cp11',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637052/life_tabblf.jpg',
    title: 'Life Brand E-Commerce',
    category: 'web-design'
  },
  {
    id: 'cp12',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637044/Scene_10_mp15ce.jpg',
    title: 'Modern Brand Showcase Portal',
    category: 'web-design'
  },
  {
    id: 'cp13',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637043/funnyfuzzy_gvjav3.jpg',
    title: 'FunnyFuzzy Storefront Rebuild',
    category: 'e-commerce'
  },
  {
    id: 'cp14',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637043/1_xjtq2p.jpg',
    title: 'Premium Apparel Custom Shopify',
    category: 'e-commerce'
  },
  {
    id: 'cp15',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637033/11_u0hvot.jpg',
    title: 'Creative Layout Store',
    category: 'web-design'
  },
  {
    id: 'cp16',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637032/121_gzjxui.jpg',
    title: 'Boutique E-Commerce Storefront',
    category: 'e-commerce'
  },
  {
    id: 'cp17',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636981/Shopify_Website_Redesign_and_CRO_vzvsbs.jpg',
    title: 'Shopify Website Redesign',
    category: 'e-commerce'
  },
  {
    id: 'cp18',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636978/Shopify_Website_Redesign_and_CRO_2_pkmtob.jpg',
    title: 'Shopify Storefront Rebuild',
    category: 'e-commerce'
  },
  {
    id: 'cp19',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636953/Shopiy_website_design_for_jewelry_store_jlkuio.jpg',
    title: 'Shopify Jewelry Store Design',
    category: 'e-commerce'
  },
  {
    id: 'cp21',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636951/mockup_fiverr_vlezbh.webp',
    title: 'Fiverr Client Platform Setup',
    category: 'custom-dev'
  },
  {
    id: 'cp22',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636951/MOCKUP_9_1_jry7mb.jpg',
    title: 'Custom Brand Layout Architecture',
    category: 'web-design'
  },
  {
    id: 'cp23',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636947/MOCKUP_10_1_vbmwse.jpg',
    title: 'E-Commerce Interface Concept',
    category: 'web-design'
  },
  {
    id: 'cp24',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636942/MOCKUP_10_3_z65lp2.jpg',
    title: 'Conversion-Focused Checkout UI',
    category: 'e-commerce'
  },
  {
    id: 'cp25',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636942/MOCKUP_10_4_jrx3aw.jpg',
    title: 'Adaptive Variant Customizer Grid',
    category: 'e-commerce'
  },
  {
    id: 'cp26',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636937/MOCKUP_10_5_mq8now.jpg',
    title: 'Product Landing Page Layout',
    category: 'web-design'
  },
  {
    id: 'cp27',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636932/shopify_website_redesign_for_beauty_store_wigagm.jpg',
    title: 'Shopify Website Redesign for Beauty Store',
    category: 'e-commerce'
  },
  {
    id: 'cp28',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636774/Shopify_website_design_for_beauty_store_pod_xwzdnh.jpg',
    title: 'Print-On-Demand Beauty Store Design',
    category: 'e-commerce'
  },
  {
    id: 'cp29',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636759/Health-_ade_rebuild_CO_1_cz6gb0.jpg',
    title: 'Health-Ade Store Rebuild',
    category: 'e-commerce'
  },
  {
    id: 'cp30',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636736/Shopify_Website_Redesign_and_CRO_4_gvpoqg.jpg',
    title: 'High-Converting Shopify Storefront',
    category: 'e-commerce'
  },
  {
    id: 'cp31',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636570/Shopify_CRO_Skin_Care_Store_Redesign_1_adawt2.jpg',
    title: 'Skincare Shopify Store Redesign',
    category: 'e-commerce'
  },
  {
    id: 'cp32',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784822870/Happyfloow_rebuild_and_CO_1_izcqqr.jpg',
    title: 'Happyfloow Rebuild & Conversion Funnel',
    category: 'cro'
  },
  {
    id: 'cp33',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784822865/Rumbiro_store_CRO_h8onnf.jpg',
    title: 'Rumbiro Store CRO Optimization',
    category: 'cro'
  },
  {
    id: 'cp34',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784822864/before_and_after_result_for_CRO_z5lpel.jpg',
    title: 'Before & After Result for CRO Optimization',
    category: 'cro'
  }
];

export const croProofsData: CroProofItem[] = [
  {
    id: 'cro6',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784822864/before_and_after_result_for_CRO_z5lpel.jpg',
    title: 'Before & After CRO Optimization Result',
    description: 'Direct comparison showing layout restructuring, high-contrast CTA placement, and conversion rate increases.'
  },
  {
    id: 'cro7',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784822870/Happyfloow_rebuild_and_CO_1_izcqqr.jpg',
    title: 'Happyfloow Store Rebuild & Conversion Funnel',
    description: 'High-converting layout architecture with custom cart drawer, variant swatches, and speed optimization.'
  },
  {
    id: 'cro8',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784822865/Rumbiro_store_CRO_h8onnf.jpg',
    title: 'Rumbiro Store CRO Strategy',
    description: 'Optimized product landing pages with streamlined checkout steps and enhanced mobile user experience.'
  },
  {
    id: 'cro1',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636759/Health-_ade_rebuild_CO_1_cz6gb0.jpg',
    title: 'Health-Ade Redesign & CRO',
    description: 'Complete front-end rebuild with visual customizers, reducing page load latency and lifting revenue transactions.'
  },
  {
    id: 'cro2',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636738/Happyfloow_rebuild_and_CO_1_cwwve1.jpg',
    title: 'Happyfloow Rebuild and CO',
    description: 'Engineered streamlined shopping cart pathways and swift variant matrix switches to maximize conversions.'
  },
  {
    id: 'cro3',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636736/Rumbiro_Rebuild_and_conversion_ouurlk.jpg',
    title: 'Rumbiro Rebuild & Conversion Rate Optimization',
    description: 'Optimized typography hierarchy, landing page layout contrast, and mobile navigation targets.'
  },
  {
    id: 'cro4',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636726/thecandleness_CRO_y44kwg.png',
    title: 'The Candleness CRO Layout - Before vs After',
    description: 'Visual analysis of high-converting cart configurations that minimized check-out step frictions.'
  },
  {
    id: 'cro5',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784636560/thecandleness_CRO_venknf.png',
    title: 'The Candleness Rebuild Success',
    description: 'Advanced mobile visual adjustments ensuring product labels and badges display in elegant, single-line format.'
  }
];

export const salesProofsData: SalesProofItem[] = [
  {
    id: 'sp2',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784637317/Screenshot_2026-07-18_231226_fotx4c.png',
    title: 'Shopify Store Revenue Dashboard Proof',
    description: 'Direct proof of organic checkout flow conversions, confirming substantial monthly growth.'
  }
];

export const clientVideosData: ClientVideoTestimonial[] = [
  {
    id: 'v1',
    url: 'https://res.cloudinary.com/h4ihjmt1/video/upload/v1784642305/Video_feedback_from_Afolake_Amorevibes_store_CEO_ruh4ct.mp4',
    clientName: 'Afolake',
    role: 'CEO, Amorevibes Store',
    description: 'Shares direct praise on WhizwayDigit\'s rapid redesign timeline and exceptional visual craft.'
  },
  {
    id: 'v2',
    url: 'https://res.cloudinary.com/h4ihjmt1/video/upload/v1784644416/testimonial_UK_buyer_pykdjg.mp4',
    clientName: 'Sarah',
    role: 'UK E-Commerce Retailer',
    description: 'Explains how the brand new storefront resolved layout issues and enhanced customer trust.'
  },
  {
    id: 'v3',
    url: 'https://res.cloudinary.com/h4ihjmt1/video/upload/v1784644419/video_2026-07-21_15-26-59_ijpcsb.mp4',
    clientName: 'Kyriakos',
    role: 'Greek Brand Owner',
    description: 'Reviews our structural audit speed upgrades and high performance score guarantees.'
  },
  {
    id: 'v4',
    url: 'https://res.cloudinary.com/h4ihjmt1/video/upload/v1784644432/testimonial_for_buyer_from_Philippine_q12dl0.mp4',
    clientName: 'Cedric',
    role: 'E-Commerce Retailer & Founder',
    description: 'Commends Samson B\'s stellar communication, direct project handoffs, and pixel-perfect design.'
  },
  {
    id: 'v5',
    url: 'https://res.cloudinary.com/h4ihjmt1/video/upload/v1784644495/testimonial_sovania_buyer_lhqa5o.mp4',
    clientName: 'Gasper',
    role: 'Brand Founder from Slovenia',
    description: 'Describes the incredible transition to high-speed custom code with zero downtime.'
  }
];

export const freelanceReviewsScreenshots: FreelanceReviewScreenshot[] = [
  {
    id: 'rev-up1',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784648028/Screenshot_2026-07-21_161922_iwrqvr.png',
    title: 'Upwork 5-Star Store Rebuild Review',
    platform: 'upwork',
    rating: 5
  },
  {
    id: 'rev-up2',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784648028/Screenshot_2026-07-21_161838_ficqvi.png',
    title: 'Upwork Speed Optimization Verified Feedback',
    platform: 'upwork',
    rating: 5
  },
  {
    id: 'rev-up3',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784648028/Screenshot_2026-07-21_161644_mqkyli.png',
    title: 'Upwork Shopify Redesign Project Review',
    platform: 'upwork',
    rating: 5
  },
  {
    id: 'rev-up4',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784648029/Screenshot_2026-07-21_161715_ffdy9e.png',
    title: 'Upwork Landing Page Funnel Client Review',
    platform: 'upwork',
    rating: 5
  },
  {
    id: 'rev-up5',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784648029/Screenshot_2026-07-21_162114_w8jkis.png',
    title: 'Upwork Store Project Success Feedback',
    platform: 'upwork',
    rating: 5
  },
  {
    id: 'rev-up6',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784648029/Screenshot_2026-07-21_162233_mkzrhy.png',
    title: 'Upwork Conversion Optimization Review',
    platform: 'upwork',
    rating: 5
  },
  {
    id: 'rev-up7',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784648029/Screenshot_2026-07-21_162018_nem8pt.png',
    title: 'Upwork Custom Storefront Technical Review',
    platform: 'upwork',
    rating: 5
  },
  {
    id: 'rev-up8',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784648028/Screenshot_2026-07-21_162150_zcvq63.png',
    title: 'Upwork Verified CRO Audit Feedback',
    platform: 'upwork',
    rating: 5
  },
  {
    id: 'rev-fiv1',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784648688/photo_2026-07-21_16-36-35_vxpfmh.jpg',
    title: 'Fiverr Mobile UI/UX Refactoring Review',
    platform: 'fiverr',
    rating: 5
  },
  {
    id: 'rev-fiv2',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784648688/photo_2026-07-21_16-36-32_gqdzgs.jpg',
    title: 'Fiverr Boutique Shopify Redesign Review',
    platform: 'fiverr',
    rating: 5
  },
  {
    id: 'rev-fiv3',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784648689/photo_2026-07-21_16-36-38_jhzwhk.jpg',
    title: 'Fiverr Custom Integration Review',
    platform: 'fiverr',
    rating: 5
  },
  {
    id: 'rev-fiv4',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784648689/photo_2026-07-21_16-36-27_hznbuw.jpg',
    title: 'Fiverr 5-Star Web Development Review',
    platform: 'fiverr',
    rating: 5
  },
  {
    id: 'rev-gmb1',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784812792/photo_2026-07-23_14-19-25_hzccem.jpg',
    title: 'Google My Business Verified Client Review',
    platform: 'gmb',
    rating: 5
  },
  {
    id: 'rev-gmb2',
    url: 'https://res.cloudinary.com/h4ihjmt1/image/upload/v1784812877/photo_2026-07-23_14-20-41_kecrew.jpg',
    title: 'Google Business Profile Client Feedback Proof',
    platform: 'gmb',
    rating: 5
  }
];
