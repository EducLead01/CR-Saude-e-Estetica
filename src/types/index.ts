export interface Treatment {
  id: string;
  name: string;
  image: string;
  alt: string;
  href: string;
}

export interface TreatmentCategory {
  id: string;
  label: string;
  treatments: Treatment[];
}

export interface Testimonial {
  id: string;
  title: string;
  text: string;
  author: string;
  stars: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  image: string;
  alt: string;
  href: string;
  category?: string;
}

export interface VantagemItem {
  icon: string;
  alt: string;
  title: string;
  description: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AboutCard {
  image: string;
  alt: string;
  label: string;
}
