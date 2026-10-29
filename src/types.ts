export type Language = 'mr' | 'hi' | 'gu' | 'en';

export type AppPage = 'home' | 'services' | 'packages' | 'about' | 'contact';

export type ServiceCategory = 'all' | 'hair' | 'beard' | 'facial' | 'color_spa' | 'combos';

export interface SalonService {
  id: string;
  name: Record<Language, string>;
  category: ServiceCategory;
  price: number;
  originalPrice?: number;
  durationMinutes: number;
  description: Record<Language, string>;
  isPopular?: boolean;
  tag?: Record<Language, string>;
}

export interface Appointment {
  id: string;
  customerName: string;
  phone: string;
  date: string;
  timeSlot: string;
  serviceIds: string[];
  stylist: string;
  notes?: string;
  totalAmount: number;
  createdAt: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  locality: string;
  rating: number;
  comment: Record<Language, string>;
  date: string;
  servicesUsed: string[];
}
