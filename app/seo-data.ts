import type { Metadata } from 'next';

export const routeMetadata: Record<string, { title: string; description: string; path: string }> = {
  rooms: { title: 'Rooms & Accommodation Near AIIMS', description: 'Compare room types at Hotel Ambica Palace in Safdarjung Enclave, New Delhi. Explore air-conditioned double and family rooms, amenities and booking details.', path: '/rooms' },
  services: { title: 'Hotel Amenities, Services & Policies', description: 'See amenities, guest services, check-in details and house policies at Hotel Ambica Palace near AIIMS and Safdarjung Hospital in New Delhi.', path: '/services' },
  gallery: { title: 'Hotel Photo Gallery', description: 'View photos of Hotel Ambica Palace in Safdarjung Enclave, New Delhi, including the entrance, lobby, guest rooms and private bathrooms.', path: '/gallery' },
  location: { title: 'Location Near AIIMS & Safdarjung Hospital', description: 'Find Hotel Ambica Palace at A-1/300, Safdarjung Enclave, New Delhi 110029, and explore nearby hospitals, markets and travel connections.', path: '/location' },
  reviews: { title: 'Guest Impressions', description: 'Read a summary of the guest experience at Hotel Ambica Palace, with a focus on its South Delhi location, hospitality and practical amenities.', path: '/reviews' },
  book: { title: 'Contact & Booking Information', description: 'Plan a stay at Hotel Ambica Palace in Safdarjung Enclave, New Delhi. Choose dates and guests, then check current rates and availability on the official listing.', path: '/book' },
};

export function pageMetadata(key: keyof typeof routeMetadata): Metadata {
  const page = routeMetadata[key];
  return {
    title: page.title,
    description: page.description,
    alternates: process.env.NEXT_PUBLIC_SITE_URL ? { canonical: page.path } : undefined,
    openGraph: { title: `${page.title} | Hotel Ambica Palace`, description: page.description, url: page.path, images: [{ url: '/img/ext-wide.jpg', alt: 'Hotel Ambica Palace in Safdarjung Enclave, New Delhi' }] },
    twitter: { description: page.description, images: ['/img/ext-wide.jpg'] },
  };
}

export const homeJsonLd = {
  '@context': 'https://schema.org', '@type': 'Hotel', name: 'Hotel Ambica Palace',
  description: 'Hotel in Safdarjung Enclave, New Delhi, near AIIMS and Safdarjung Hospital.',
  address: { '@type': 'PostalAddress', streetAddress: 'A-1/300, Block A-1, Safdarjung Enclave', addressLocality: 'New Delhi', postalCode: '110029', addressCountry: 'IN' },
  url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
  image: ['/img/ext-wide.jpg', '/img/room-deluxe-sofa.jpg', '/img/lobby-reception.jpg'],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Air-conditioned rooms', value: true },
    { '@type': 'LocationFeatureSpecification', name: '24-hour front desk', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free parking', value: true },
  ],
};
