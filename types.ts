export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  category: 'Mattress' | 'Furniture' | 'Accessory';
  description: string;
  price: string;
  discount?: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}