
export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'diamond' | 'heart' | 'club' | 'spade';
  features: string[];
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  icon: string; // Emoji char
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  title?: string;
  quote: string;
  rating: number;
  source?: 'Facebook' | 'Matrimonio.com';
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  src: string;
  category: 'weddings' | 'corporate' | 'private' | 'all';
  title: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  // Price removed
  features: string[];
  isFeatured?: boolean;
}

export interface CollaborationItem {
  id: string;
  name: string;
  logo: string; // Added logo URL
}
