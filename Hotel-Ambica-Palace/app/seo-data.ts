import type { Metadata } from 'next';

export const routeMetadata: Record<string, { title: string; description: string; path: string; keywords: string[] }> = {
  rooms: {
    title: 'Rooms & Accommodations Near AIIMS | Deluxe & Family Rooms',
    description: 'Compare air-conditioned Deluxe, Classic & Family rooms at Hotel Ambica Palace in Safdarjung Enclave, New Delhi. Free Wi-Fi, TV, attached private bath near AIIMS.',
    path: '/rooms',
    keywords: ['Hotel Ambica Palace rooms', 'AC rooms near AIIMS', 'family room Safdarjung Enclave', 'double room hotel Delhi', 'accommodation near Safdarjung Hospital'],
  },
  services: {
    title: 'Amenities, Guest Services & Stay Policies',
    description: 'See 24-hour front desk, free Wi-Fi, free parking, couple-friendly stays and local ID policy at Hotel Ambica Palace near AIIMS & Safdarjung Hospital.',
    path: '/services',
    keywords: ['Hotel Ambica Palace amenities', '24 hour check in hotel AIIMS', 'couple friendly hotel Safdarjung', 'local ID accepted hotel Delhi', 'hotel policies New Delhi'],
  },
  gallery: {
    title: 'Photo Gallery | Rooms, Lobby & Exterior Photos',
    description: 'View photos of Hotel Ambica Palace in Safdarjung Enclave, New Delhi: illuminated entrance, welcoming reception lobby, modern AC rooms and clean private bathrooms.',
    path: '/gallery',
    keywords: ['Hotel Ambica Palace photos', 'hotel pictures Safdarjung Enclave', 'hotel rooms gallery Delhi', 'hotel near AIIMS pictures'],
  },
  location: {
    title: 'Location & Directions Near AIIMS & Safdarjung Hospital',
    description: 'Find Hotel Ambica Palace at A-1/300 Safdarjung Enclave, New Delhi 110029. 8-min walk to Safdarjung Hospital, 15-min walk to AIIMS, close to metro and airport.',
    path: '/location',
    keywords: ['Hotel Ambica Palace location', 'directions to Hotel Ambica Palace', 'hotel near AIIMS Delhi distance', 'hotel walking distance to Safdarjung Hospital', 'Safdarjung Enclave hotel address'],
  },
  reviews: {
    title: 'Guest Reviews & Impressions | South Delhi Hospital Stay',
    description: 'Read guest impressions for Hotel Ambica Palace in Safdarjung Enclave, New Delhi. Highly rated for hospital convenience, warm 24/7 staff and comfortable rooms.',
    path: '/reviews',
    keywords: ['Hotel Ambica Palace reviews', 'Hotel Ambica Palace guest feedback', 'ratings Hotel Ambica Palace Delhi', 'budget hotel reviews Safdarjung Enclave'],
  },
  book: {
    title: 'Book Stay & Contact Information | Live Rates & Availability',
    description: 'Plan your stay at Hotel Ambica Palace in Safdarjung Enclave, New Delhi. Select dates and guests to view your stay summary and reserve at the best rates.',
    path: '/book',
    keywords: ['Book Hotel Ambica Palace', 'Hotel Ambica Palace contact', 'reservation Hotel Ambica Palace', 'hotel booking AIIMS Safdarjung'],
  },
};

export function pageMetadata(key: keyof typeof routeMetadata): Metadata {
  const page = routeMetadata[key];
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: process.env.NEXT_PUBLIC_SITE_URL ? { canonical: page.path } : undefined,
    openGraph: {
      title: `${page.title} | Hotel Ambica Palace`,
      description: page.description,
      url: page.path,
      siteName: 'Hotel Ambica Palace',
      locale: 'en_IN',
      type: 'website',
      images: [{ url: '/img/ext-wide.jpg', width: 1200, height: 800, alt: 'Hotel Ambica Palace in Safdarjung Enclave, New Delhi' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.title} | Hotel Ambica Palace`,
      description: page.description,
      images: ['/img/ext-wide.jpg'],
    },
  };
}

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Hotel Ambica Palace',
  description: '3-star hotel in Safdarjung Enclave, New Delhi, within walking distance of AIIMS and Safdarjung Hospital. Features air-conditioned rooms, free Wi-Fi, 24-hour front desk and accepts local IDs.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://github.com/2006uday/leads-find-out-projects',
  telephone: '+91-11-2610-0000',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Debit Card, UPI',
  checkinTime: '14:00',
  checkoutTime: '12:00',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-1/300, Block A-1, Safdarjung Enclave',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110029',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.5672,
    longitude: 77.1995,
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Hotel+Ambica+Palace+Safdarjung+Enclave+New+Delhi',
  image: [
    '/img/ext-wide.jpg',
    '/img/room-deluxe-sofa.jpg',
    '/img/lobby-reception.jpg',
    '/img/bathroom.jpg',
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Air-conditioned rooms', value: true },
    { '@type': 'LocationFeatureSpecification', name: '24-hour front desk', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Private attached bathroom', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Geyser & hot water', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Couple friendly & local ID accepted', value: true },
  ],
};
