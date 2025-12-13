// src/mocks/offers.ts

export interface Offer {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  bedrooms: number;
  maxAdults: number;
  features: string[];
  description: string;
  host: {
    name: string;
    isPro: boolean;
    avatarUrl: string;
  };
  images: string[];
  city: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

export const OFFERS: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,
    bedrooms: 3,
    maxAdults: 4,
    features: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine'],
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    images: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
    ],
    city: 'Amsterdam',
    location: { latitude: 52.370216, longitude: 4.895168, zoom: 12 },
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    rating: 4.2,
    isPremium: false,
    isFavorite: true,
    bedrooms: 1,
    maxAdults: 2,
    features: ['Wi-Fi', 'Baby seat', 'Kitchen'],
    description: 'Cozy room in the heart of Amsterdam.',
    host: {
      name: 'Max',
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg',
    },
    images: ['img/room.jpg'],
    city: 'Amsterdam',
    location: { latitude: 52.369, longitude: 4.853, zoom: 13 },
  },
  {
    id: '3',
    title: 'White castle',
    type: 'apartment',
    price: 180,
    rating: 4.9,
    isPremium: true,
    isFavorite: true,
    bedrooms: 2,
    maxAdults: 3,
    features: ['Dishwasher', 'Fridge', 'Cabel TV'],
    description: 'Elegant apartment near Cologne Cathedral.',
    host: {
      name: 'Sarah',
      isPro: true,
      avatarUrl: 'img/avatar-sarah.jpg',
    },
    images: ['img/apartment-small-04.jpg'],
    city: 'Cologne',
    location: { latitude: 50.9375, longitude: 6.9431, zoom: 12 },
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    rating: 5.0,
    isPremium: true,
    isFavorite: false,
    bedrooms: 2,
    maxAdults: 4,
    features: ['Kitchen', 'Dishwasher', 'Heating'],
    description: 'Perfect for a family trip.',
    host: {
      name: 'Oliver',
      isPro: false,
      avatarUrl: 'img/avatar-oliver.jpg',
    },
    images: ['img/apartment-small-03.jpg'],
    city: 'Amsterdam',
    location: { latitude: 52.374, longitude: 4.896, zoom: 14 },
  },
];
