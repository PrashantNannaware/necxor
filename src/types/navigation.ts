export interface Feature {
  name: string;
  description: string;
}

export interface SubMenuItem {
  title: string;
  description: string;
  features?: Feature[];
  audience?: string;
  benefits?: string[];
}

export interface MenuItem {
  title: string;
  description?: string;
  items: SubMenuItem[];
}

export interface NavigationSection {
  title: string;
  description: string;
  items: MenuItem[];
}