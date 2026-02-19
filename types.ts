
export interface ServicePackage {
  count: number;
  price: string;
  name?: string; // Optional override name for the package (e.g., "Back + Neck" instead of just "Back")
}

export interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  price: string;
  oldPrice?: string; // For discounts
  description?: string; // Short summary for closed state (optional)
  fullDescription?: string; // Main intro text
  expectations?: string[]; // "What to expect" list
  benefits?: string[]; // "Pros" list
  popular?: boolean;
  packages?: ServicePackage[]; // New field for subscriptions/courses
}

export interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: 'Leaf' | 'ShieldCheck' | 'Award' | 'Sparkles';
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
