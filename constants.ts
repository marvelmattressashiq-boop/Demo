import { Product, Stat, Testimonial } from './types';
import { CheckCircle, Award, MapPin } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Shreya Nair',
    location: 'Trivandrum',
    text: 'I never thought factory-direct pricing could give such premium quality. Highly recommend Marvel for anyone upgrading their home!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 2,
    name: 'Rahul Menon',
    location: 'Kochi',
    text: 'I bought my Marvel mattress last year, and it still feels brand new. The comfort is amazing — totally worth it!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: 3,
    name: 'Anjali Krishna',
    location: 'Calicut',
    text: 'The customer service was excellent. They helped me choose the perfect orthopedic mattress for my back pain.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Marvel Ortho Premium',
    category: 'Mattress',
    description: 'Advanced orthopedic support for spine alignment. High-density bonded foam.',
    price: '₹12,999',
    discount: '50% OFF',
    image: 'https://drive.google.com/uc?export=view&id=1iRo_AF3QI0SdaY6p57CcV6yHqohgZJoH'
  },
  {
    id: 2,
    title: 'Bamboo Memory Foam',
    category: 'Mattress',
    description: 'Eco-friendly bamboo fabric with cooling memory foam for superior comfort.',
    price: '₹18,500',
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Marvel Soft Cloud',
    category: 'Mattress',
    description: 'Ultra-soft pocket spring mattress for a hotel-like sleep experience.',
    price: '₹22,000',
    image: 'https://images.unsplash.com/photo-1505693416388-95fea4116235?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Premium Microfiber Pillows',
    category: 'Accessory',
    description: 'Set of 2 ultra-soft pillows that retain shape and provide neck support.',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Royal Teak Cot',
    category: 'Furniture',
    description: 'Handcrafted teak wood cot with elegant finish and durability.',
    price: '₹35,000',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Luxury Sofa Set',
    category: 'Furniture',
    description: 'Modern 3+2 sofa set with premium fabric upholstery.',
    price: '₹45,000',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800'
  }
];

export const STATS: Stat[] = [
  { value: '104', label: 'Shops across Kerala' },
  { value: '20+', label: 'Years of Experience' },
  { value: '50%', label: 'Factory Direct Discount' },
];

export const FEATURES = [
  {
    title: 'Premium Mattresses',
    description: 'Sleep better with our factory-made mattresses — available in orthopedic, memory foam, and luxury models.',
    icon: Award,
  },
  {
    title: 'Furniture Collection',
    description: 'From cozy sofas to elegant cots — stylish, durable furniture for every space, made with the same promise of quality.',
    icon: CheckCircle,
  },
  {
    title: 'Sleep Accessories',
    description: 'Pillows, protectors, and toppers designed to give you the complete comfort experience you deserve.',
    icon: MapPin, 
  }
];