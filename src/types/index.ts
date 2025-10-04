// Main website data interfaces
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface UserAction {
  id: string;
  label: string;
  type: "button" | "link";
  variant?: "primary" | "secondary";
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

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface TeamSection {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export interface AirQualityPeriod {
  period: string;
  description: string;
}

export interface CountryAirQuality {
  id: string;
  name: string;
  flag: string;
  periods: AirQualityPeriod[];
}

export interface AirQualitySection {
  title: string;
  subtitle: string;
  countries: CountryAirQuality[];
}

export interface VegetationFinding {
  id: string;
  title: string;
  description: string;
  location?: string;
  impact?: string;
}

export interface VegetationResponseSection {
  title: string;
  subtitle: string;
  findings: VegetationFinding[];
  imageUrl?: string;
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
  team: TeamSection;
  airQuality: AirQualitySection;
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

export interface TeamProps {
  team: TeamSection;
}

export interface AirQualityProps {
  airQuality: AirQualitySection;
}

export interface SidebarProps {
  sidebar: SidebarContent;
}

export interface FooterProps {
  footer: FooterSection;
}
