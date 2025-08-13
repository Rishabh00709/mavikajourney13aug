export interface TravelPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  duration: string;
  location: string;
  category: string;
  region: 'India' | 'International';
  image: string;
  rating: number;
  reviews: number;
  availability?: string;
}