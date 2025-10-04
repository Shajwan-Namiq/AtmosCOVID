// Main website data interfaces
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface UserAction {
  id: string;
  label: string;
  type: 'button' | 'link';
  variant?: 'primary' | 'secondary';
  href?: string;
}

export interface SearchBar {
  placeholder: string;
  icon: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  primaryAction: UserAction;
  secondaryAction: UserAction;
  backgroundImage?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

export interface AboutSection {
  title: string;
  headline: string;
  services: Service[];
}

export interface StatisticsItem {
  value: string;
  label: string;
}

export interface StatisticsSection {
  title: string;
  items: StatisticsItem[];
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

export interface FooterSection {
  logo: string;
  contact: ContactInfo;
  statistics: StatisticsSection;
  tagline: string;
}

export interface SidebarContent {
  aboutSection: AboutSection;
  pageSection: {
    title: string;
    headline: string;
    visual: string;
  };
  visualStats: {
    value1: string;
    value2: string;
    description: string;
  };
  statistics: StatisticsItem[];
}

export interface WebsiteData {
  navigation: NavigationItem[];
  searchBar: SearchBar;
  userActions: UserAction[];
  hero: HeroSection;
  services: Service[];
  sidebar: SidebarContent;
  footer: FooterSection;
}

// Component props interfaces
export interface HeaderProps {
  logo: string;
  navigation: NavigationItem[];
  searchBar: SearchBar;
  userActions: UserAction[];
}

export interface HeroProps {
  hero: HeroSection;
}

export interface ServicesProps {
  services: Service[];
}

export interface SidebarProps {
  sidebar: SidebarContent;
}

export interface FooterProps {
  footer: FooterSection;
}
