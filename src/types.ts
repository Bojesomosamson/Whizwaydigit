export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  iconName: string; // matches Lucide icons dynamically
  tagline: string;
  briefDescription: string;
  fullDescription: string;
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  faq: ServiceFAQ[];
  relatedSlugs: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: 'web-design' | 'e-commerce' | 'custom-dev' | 'marketing';
  client: string;
  year: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  results: string[];
  metrics: ProjectMetric[];
  testimonial?: ProjectTestimonial;
  liveUrl?: string;
  imageColor: string; // for high-end gradient visual representation
  imageUrl?: string; // real portfolio screenshots
}

export interface BlogPostAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  category: 'insights' | 'marketing' | 'tech' | 'design';
  excerpt: string;
  content: string; // markdown or standard text with formatting
  author: BlogPostAuthor;
  date: string;
  readTime: string;
  tags: string[];
  imageColor: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'e-book' | 'checklist' | 'template' | 'guide';
  downloadCount: string;
  fileSize: string;
  iconName: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  country: string;
  businessName: string;
  website: string;
  projectBudget: string;
  projectType: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
  fileUploadedName?: string;
}

export interface BookingDetails {
  name: string;
  email: string;
  date: string;
  timeSlot: string;
  notes: string;
}

export type PageName =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'case-studies'
  | 'reviews'
  | 'pricing'
  | 'blog'
  | 'resources'
  | 'faq'
  | 'contact'
  | 'book-a-call'
  | 'privacy-policy'
  | 'terms-conditions'
  | 'refund-policy'
  | 'cookies-policy'
  | 'thank-you'
  | 'client-portal'
  | '404';

export interface RouterState {
  page: PageName;
  serviceSlug?: string;
  blogSlug?: string;
  projectSlug?: string;
  searchQuery?: string;
  selectedCategory?: string;
}
